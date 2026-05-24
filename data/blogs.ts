import { BlogPost } from "@/type/blog"

export const blogs: BlogPost[] = [
  {
    id: '1',
    title: 'How IntelliSense Really Works in VS Code',
    description: 'An in-depth exploration of how VS Code IntelliSense parses, analyzes, and understands your code.',
    coverImage: '/cover.jpeg',
    content: `# I Thought IntelliSense Was Just Autocomplete. I Was Very Wrong

Yesterday, I was coding in VS Code. I typed:

\`\`\`js
const user = { name: "Zoro", age: 21 };
user.
\`\`\`

And almost instantly, a dropdown appeared with:

\`\`\`
name
age
\`\`\`

Wait… how does it know that? That object exists only in this one file. It wasn’t defined anywhere else.

At first, I thought IntelliSense was just a smarter autocomplete, scanning my file for text matches. But the more I experimented, the more I realized: **it actually understands my code.**



# The First Layer: Parsing

IntelliSense’s intelligence starts with **parsing**.  
Your code isn’t just a string of characters to the language server; it’s transformed into a structured format called an **Abstract Syntax Tree (AST)**.

#### 1: Lexing → Tokens

The first step is breaking your text into **tokens**, like:

| Token      | Type        |
|------------|------------|
| \`const\`    | Keyword     |
| \`user\`     | Identifier  |
| \`=\`        | Operator    |
| \`{\`        | Punctuation |
| \`name\`     | Identifier  |
| \`"Zoro"\`  | String      |

Without this, the language server can’t understand the meaning of your code.

#### 2: Parsing → AST

Next, the tokens are organized into a **tree structure** representing the relationships between elements:


\`\`\`
VariableDeclaration (const)
 └── Identifier: user
 └── ObjectExpression
      ├── Property: name -> "Zoro"
      └── Property: age -> 21
\`\`\`


The AST allows IntelliSense to understand:

- **Scopes** (where variables exist)  
- **Types** (what kind of value each variable holds)  
- **Structure** (how objects, functions, and classes are related)

#### 3: Incremental Parsing

Modern language servers use **incremental parsing**, updating only the changed parts of the AST when you type. That’s why IntelliSense feels instantaneous, even in massive codebases.



# Type Inference:

JavaScript is dynamically typed. Yet IntelliSense seems to “know” the type of every variable.  

Example:

\`\`\`js
const arr = [1, 2, 3];
arr.
\`\`\`

It suggests \`length\`, \`push\`, \`pop\`, etc.  

How? The TypeScript language server runs a **type inference engine**:

- Determines types based on values and assignments
- Tracks function parameters and return types
- Analyzes control flow (e.g., inside \`if (typeof x === "string") { ... }\` it knows \`x\` is a string)

Even if you never wrote TypeScript, VS Code uses the TypeScript engine to provide type-aware IntelliSense for JavaScript.


## Symbol Tables and Semantic Analysis

Parsing alone isn’t enough. After building the AST, the language server performs **semantic analysis**:

- Resolves variable and function references across scopes  
- Tracks module imports and exports  
- Maintains **symbol tables** (mapping names to types, values, and definitions)  
- Performs **cross-file analysis** for project-wide understanding  

This is how IntelliSense can suggest functions from \`utils.js\` in a completely different file:

\`\`\`js
import { multiply } from './utils';
multiply(
\`\`\`

The language server has already built a **dependency graph** and knows the signature of \`multiply\`.

---


# Language Server Protocol (LSP)

![IntelliSense Flow](/flow.jpeg)

Here’s the real magic: **VS Code itself doesn’t understand languages deeply.**  

IntelliSense is powered by a **Language Server**, a separate process that speaks a standardized protocol: **Language Server Protocol (LSP)**.

- The **editor** (VS Code) handles the UI: text buffer, dropdowns, squiggles.  
- The **language server** handles the brain: parsing, ASTs, type inference, symbol tables, and suggestions.  

Every action, like typing \`user.\` or hovering over a function, sends a **JSON request** to the language server:

\`\`\`json
{
  "method": "textDocument/completion",
  "params": { "position": { "line": 4, "character": 6 } }
}
\`\`\`

The server responds with suggestions or type info, which VS Code renders instantly.



## Error Tolerance and Robustness

Unlike a compiler, the language server **must work with incomplete or broken code**:

\`\`\`js
function add(a, b {
  return a + b
\`\`\`

Even though this code is invalid, IntelliSense still tries to provide:

- Completions
- Parameter hints
- Partial type information

This is made possible by **robust parsing**, which generates a **partial AST** even when the code has syntax errors.



## Why IntelliSense Feels Instant

Even for huge projects:

- ASTs are **cached**  
- Only changed parts are re-parsed (**incremental parsing**)  
- Type inference and semantic analysis run in a **separate process**  
- Project-wide symbols are **pre-analyzed**  

That’s why you can get smart suggestions while typing in a 1000+ file codebase.



# Supporting Multiple Languages

The same architecture works for:

- Python → Pylance  
- C++ → clangd  
- Rust → rust-analyzer  
- Go → gopls  

The editor doesn’t care about the language. As long as a language server exists, VS Code can provide full IntelliSense.

---

### References

1. [VS Code - Language Server Protocol](https://microsoft.github.io/language-server-protocol/)  
2. [TypeScript Language Server Documentation](https://github.com/microsoft/TypeScript/wiki/Standalone-Server-%28tsserver%29)  
3. [Understanding the Abstract Syntax Tree](https://astexplorer.net/)  
4. [VS Code IntelliSense Overview](https://code.visualstudio.com/docs/editor/intellisense)  
5. [Incremental Parsing in Language Servers](https://devblogs.microsoft.com/typescript/incremental-parsing-for-typescript/)


`,
    date: '2026-02-12',
    author: 'Yatish',
    tags: ['VS Code', 'IntelliSense', 'Language Server', 'JavaScript', 'TypeScript'],
    readTime: '10 min read'
  },
  {
    id: '2',
    title: 'OAuth & API Key Bypass Implementation',
    description: 'How to reverse-engineer Google Cloud Code\'s internal proxy flow to bypass Gemini API key requirements using first-party OAuth authentication.',
    coverImage: '/outh.png',
    content: `# OAuth & API Key Bypass Implementation

This document outlines the architectural flow and technical details used to authenticate users and bypass the public Gemini API key requirements within the Electron Desktop app.

## Overview

By default, the public Gemini API (\`generativelanguage.googleapis.com\`) enforces strict API key usage and rate limits. To provide a seamless experience without requiring users to generate and manage their own API keys, we reverse-engineered and integrated the **Google Cloud Code (Code Assist)** internal proxy flow.

This approach uses Google's first-party OAuth authentication to route requests through \`cloudcode-pa.googleapis.com\`, which automatically maps users to a hidden, managed Google Cloud project (the "free tier" workspace).

## Architecture Flow

The implementation is broken down into three main phases:

### 1. OAuth Authentication (\`auth.js\`)
We use Google's \`google-auth-library\` to authenticate the user using a verified, first-party Google Cloud Client ID (the same one used by the official Gemini CLI).

- **Flow**: A local HTTP server is spun up, and the user's default browser is opened to the Google OAuth consent screen.
- **Scopes**: 
  - \`https://www.googleapis.com/auth/cloud-platform\`
  - \`https://www.googleapis.com/auth/userinfo.email\`
  - \`https://www.googleapis.com/auth/userinfo.profile\`
- **Result**: Once authenticated, the short-lived access token and refresh token are cached locally in the Electron \`userData\` directory (\`gemini-token.json\`).

### 2. Free-Tier Onboarding (\`ProcessingHelper.js\`)
If the user does not have a linked enterprise Google Cloud Project, they must be registered to the backend's "free tier". This is where the API key bypass actually happens.

1. **\`loadCodeAssist\` Check**: We send a request to \`loadCodeAssist\` with specific IDE metadata to check if the user is already provisioned.
2. **\`onboardUser\` Trigger**: If the backend responds that the user is not provisioned (no \`currentTier\` or \`cloudaicompanionProject\`), we initiate the \`onboardUser\` request.
3. **LRO Polling**: The backend responds with a Long Running Operation (LRO) ID. We poll \`getOperation\` every 3 seconds until Google's cloud finishes provisioning a hidden workspace for the user.
4. **Linking**: Once complete, the user is permanently assigned to a managed workspace, and their OAuth token now grants them full access to the API without a key.

### 3. Payload Execution (\`_requestSSE\`)
Once the user is authenticated and onboarded, we construct a highly specific payload that mimics the official IDE plugin behavior.

> [!IMPORTANT]
> The Cloud Code backend is extremely strict about payload schemas. Missing specific fields (like \`user_prompt_id\`) will result in a silent \`500 Internal Server Error\` instead of a helpful rejection.

#### Required Payload Structure:
\`\`\`json
{
  "model": "gemini-2.0-flash",
  "user_prompt_id": "<UUID-v4>",
  "request": {
    "contents": [
      {
        "role": "user",
        "parts": [{ "text": "Hello world" }]
      }
    ],
    "generationConfig": {
      "maxOutputTokens": 8192,
      "temperature": 0.7
    },
    "session_id": "<UUID-v4>"
  }
}
\`\`\`

- **\`model\`**: Must be the raw ID of an officially supported Cloud Code model (e.g., \`gemini-2.0-flash\`, \`gemini-1.5-pro\`). Using bleeding-edge or unsupported models (like \`gemini-2.5-flash-lite\`) will crash the backend.
- **\`user_prompt_id\` & \`session_id\`**: Required for internal Google telemetry. If omitted, the request fails.
- **Endpoint**: Requests are sent to \`https://cloudcode-pa.googleapis.com/v1internal:streamGenerateContent?alt=sse\`.

## How the Client ID Works

The official \`gemini-cli\` relies on a hardcoded, public OAuth Client ID (\`681255809395-oo8ft2oprdrnp9e3aqf6av3hmdib135j.apps.googleusercontent.com\`). Because this ID is registered by Google specifically for "Cloud Code" and "Gemini CLI" applications, Google's identity servers implicitly trust it. 

By reusing this exact Client ID in our Electron app, we essentially disguise our custom application as the official Google CLI. When the user logs in, the token generated is granted the highly privileged \`cloud-platform\` scopes required to communicate with internal \`cloudcode-pa\` endpoints. Since this is an "installed app" type Client ID, it is perfectly safe to ship in the source code without exposing any secure server secrets.

## How We Bypass Vertex AI

Enterprise users are typically routed through Vertex AI (\`aiplatform.googleapis.com\`), which strictly requires an active Google Cloud Project and a linked billing account. 

We bypass this entirely using a simple but highly effective trick: **we intentionally omit the \`project\` field in our API requests.**

When \`cloudcode-pa\` receives a request with an empty or \`undefined\` project field, it knows the user is not an enterprise Vertex AI customer. Instead of throwing a \`403 Permission Denied\` error, the backend proxy automatically fails over to the "free tier" logic. It then uses the hidden, managed workspace we provisioned during the \`onboardUser\` step to route the request directly to the consumer Gemini backend (\`generativelanguage.googleapis.com\`), completely bypassing all Vertex AI billing and project requirements!

## Summary of Benefits

1. **No API Keys**: Users never have to interact with the Google AI Studio or configure environment variables.
2. **First-Party Quotas**: By routing through Cloud Code, the application benefits from generous internal Google quotas rather than the restrictive public tier.
3. **Security**: We never store plain-text API keys; the OAuth access token is automatically refreshed and locally secured by the OS. 

## Implementation Reference

### auth.js

\`\`\`js
const { OAuth2Client }  = require('google-auth-library');
const http              = require('http');
const url               = require('url');
const crypto            = require('crypto');
const fs                = require('fs');
const path              = require('path');
const { app, shell }    = require('electron');
const { exec }          = require('child_process');

const OAUTH_CLIENT_ID     = '681255809395-oo8ft2oprdrnp9e3aqf6av3hmdib135j.apps.googleusercontent.com';

const OAUTH_SCOPES = [
    'https://www.googleapis.com/auth/cloud-platform',
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
];

const TOKEN_PATH   = path.join(app.getPath('userData'), 'gemini-token.json');
const FIVE_MIN_MS  = 5 * 60 * 1000;
const MAX_RETRIES  = 2;

function _requiresOAuth(requestUrl) {
    return requestUrl.includes('cloudcode-pa.googleapis.com');
}

const oauth2Client = new OAuth2Client({
    clientId:     OAUTH_CLIENT_ID,
    clientSecret: OAUTH_CLIENT_SECRET,
});

let _cachedToken     = null;
let _tokenExpiry     = null;

function _isTokenValid() {
    return _cachedToken && _tokenExpiry && Date.now() < _tokenExpiry - FIVE_MIN_MS;
}
function _invalidateCache() { _cachedToken = null; _tokenExpiry = null; }

function _saveTokens(credentials) {
    try { fs.writeFileSync(TOKEN_PATH, JSON.stringify(credentials), 'utf8'); }
    catch (e) { console.error('[Auth] Failed to save token:', e.message); }
}

oauth2Client.on('tokens', (tokens) => {
    console.log('[Auth] Token auto-refreshed');
    oauth2Client.setCredentials({ ...oauth2Client.credentials, ...tokens });
    _saveTokens(oauth2Client.credentials);
    _invalidateCache();
});

async function authenticate() {
    _invalidateCache();

    if (fs.existsSync(TOKEN_PATH)) {
        try {
            const saved = JSON.parse(fs.readFileSync(TOKEN_PATH, 'utf8'));
            oauth2Client.setCredentials(saved);
            const { token } = await oauth2Client.getAccessToken();
            if (token) {
                console.log('[Auth] Loaded valid cached credentials');
                return oauth2Client;
            }
        } catch (e) {
            console.warn('[Auth] Could not reuse cached credentials:', e.message);
        }
    }

    return _runBrowserFlow();
}

function _runBrowserFlow() {
    return new Promise((resolve, reject) => {
        let server;
        let done = false;
        const cleanup = () => {
            done = true;
            try { server?.close(); } catch {}
            server = null;
        };

        server = http.createServer(async (req, res) => {
            if (done) return;
            const addr = server?.address();
            if (!addr) {
                res.writeHead(500);
                res.end();
                return;
            }
            const port = addr.port;

            if (!req.url?.includes('/oauth2callback')) {
                res.writeHead(404);
                res.end();
                return;
            }

            try {
                const params        = new url.URL(req.url, \`http://127.0.0.1:\${port}\`).searchParams;
                const oauthErr      = params.get('error');
                if (oauthErr) return reject(new Error(\`OAuth error: \${oauthErr}\`));

                const returnedState = params.get('state');
                if (returnedState !== state) return reject(new Error('OAuth state mismatch'));

                const code = params.get('code');
                if (!code) return reject(new Error('No authorization code received'));

                console.log(\`[Auth] Exchanging auth code for tokens...\`);
                const { tokens } = await oauth2Client.getToken({ code, redirect_uri: redirectUri });
                oauth2Client.setCredentials(tokens);
                _saveTokens(tokens);
                console.log('[Auth] Browser OAuth flow complete');

                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end('<h2>Authentication successful!</h2><p>You can close this tab.</p>');
                cleanup();
                resolve(oauth2Client);
            } catch (e) {
                console.error('[Auth] OAuth callback error:', e.message);
                if (!res.headersSent) {
                    res.writeHead(500, { 'Content-Type': 'text/html' });
                    res.end('<h2>Authentication failed</h2><p>Please close this tab and try again.</p>');
                }
                cleanup();
                reject(e);
            }
        });

        const state = crypto.randomBytes(32).toString('hex');
        let redirectUri;

        server.on('error', (e) => {
            console.error('[Auth] OAuth server error:', e.message);
            if (!done) { done = true; reject(e); }
        });
        server.listen(0, '127.0.0.1', () => {
            const addr = server.address();
            if (!addr) { done = true; reject(new Error('Server failed to bind')); return; }
            const port = addr.port;
            redirectUri = \`http://127.0.0.1:\${port}/oauth2callback\`;
            const authUrl = oauth2Client.generateAuthUrl({
                redirect_uri: redirectUri,
                access_type:  'offline',
                scope:        OAUTH_SCOPES,
                state,
                prompt:       'consent',
            });
            console.log(\`[Auth] Opening browser for Google sign-in (port \${port})...\`);
            shell.openExternal(authUrl).catch(err => {
                console.error('[Auth] Failed to open browser via shell:', err.message);
            });
        });
        server.ref();
    });
}

async function getAccessToken() {
    if (_isTokenValid()) return _cachedToken;

    if (!oauth2Client.credentials?.access_token &&
        !oauth2Client.credentials?.refresh_token) {
        await authenticate();
    }

    const { token } = await oauth2Client.getAccessToken();
    if (!token) {
        await authenticate();
        const retry = await oauth2Client.getAccessToken();
        if (!retry.token) throw new Error('[Auth] getAccessToken returned null after re-auth');
        _cacheToken(retry.token);
        return retry.token;
    }

    _cacheToken(token);
    return token;
}

function _cacheToken(token) {
    _cachedToken = token;
    _tokenExpiry = oauth2Client.credentials?.expiry_date ?? (Date.now() + 60 * 60 * 1000);
    const mins   = Math.round((_tokenExpiry - Date.now()) / 60000);
    console.log(\`[Auth] Token cached (~\${mins}m remaining)\`);
}

async function fetchWithAuth(requestUrl, options = {}) {
    return _fetchWithOAuth(requestUrl, options);
}

async function _fetchWithOAuth(requestUrl, options) {
    let retries = 0;

    const doRequest = async () => {
        const token = await getAccessToken();
        return fetch(requestUrl, {
            ...options,
            headers: {
                ...(options.headers ?? {}),
                'Authorization': \`Bearer \${token}\`,
            },
        });
    };

    let response = await doRequest();

    while ((response.status === 401 || response.status === 403) && retries < MAX_RETRIES) {
        retries++;
        console.warn(\`[Auth] \${response.status} — refreshing OAuth token (retry \${retries}/\${MAX_RETRIES})\`);
        _invalidateCache();
        response = await doRequest();
    }

    return response;
}

module.exports = {
    authenticate,
    getAccessToken,
    fetchWithAuth,
    oauth2Client,
}
\`\`\`

### ProcessingHelper.js

\`\`\`js
const https = require("https");
const http = require("http");
const crypto = require("crypto");
const url = require("url");

const { getAccessToken } = require("./auth");

const CODE_ASSIST_ENDPOINT = "https://cloudcode-pa.googleapis.com";
const CODE_ASSIST_API_VERSION = "v1internal";

const MODEL_FALLBACK = "gemini-3.1-flash-lite";

let defaultModel = MODEL_FALLBACK;
let availableModels = ["gemini-3-flash-preview"];
let SELECTED_MODEL = defaultModel;

const RETRYABLE_CODES = new Set([
  "ENOTFOUND",
  "EAI_AGAIN",
  "ETIMEDOUT",
  "ECONNRESET",
  "ECONNREFUSED",
]);

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
function getCode(e) {
  return e?.cause?.code || e?.code || "";
}
function parseRetryDelay(error) {
  const m = error?.message?.match(/reset after\s+(\d+)\s*s/i);
  return m ? parseInt(m[1], 10) * 1000 : 0;
}
function isServerError(error) {
  return /API error 5\d{2}/.test(error?.message || "");
}

function userError(error) {
  const code = getCode(error);
  if (RETRYABLE_CODES.has(code))
    return {
      text: \`Network error (\${code}). Check internet/VPN.\`,
      rawResponse: { error: error?.message, code },
    };
  if (error?.message?.includes("401") || error?.message?.includes("403"))
    return {
      text: "Authentication failed. Please restart the app.",
      rawResponse: { error: error?.message, code },
    };
  if (error?.message?.includes("blocked") || error?.message?.includes("safety"))
    return {
      text: "Request blocked by content safety filters.",
      rawResponse: { error: error?.message, code },
    };
  return {
    text: \`Error: \${error?.message || String(error)}\`,
    rawResponse: { error: error?.message, code },
  };
}

async function compressImage(dataUrl, maxWidth = 1280, quality = 0.7) {
  try {
    const sharp = require("sharp");
    const base64 = dataUrl.replace(/^data:image\/[^;]+;base64,/, "");
    const buf = Buffer.from(base64, "base64");
    const compressed = await sharp(buf)
      .resize({ width: maxWidth, withoutEnlargement: true })
      .jpeg({ quality: Math.round(quality * 100) })
      .toBuffer();
    return "data:image/jpeg;base64," + compressed.toString("base64");
  } catch {
    return dataUrl;
  }
}

let PROMPT = \`You are DevArena AI, an expert problem solver and programmer.

Analyze the screenshot and respond with practical, correct, and concise help.

If MCQ: solve it, state the correct option, and give a short summary.
If DSA/CP problem: explain logic and provide Java code.
If dev problem: provide a clean implementation in the requested stack.
Avoid unnecessary preamble.\`;

function pickModel(modelSelection) {
  const selected = String(modelSelection || "").toLowerCase();
  if (selected.includes("advanced")) return "gemini-1.5-pro-002";
  if (selected.includes("pro")) return "gemini-2.0-flash";
  return defaultModel;
}

function asList(value, fallback = "None") {
  if (!value) return fallback;
  if (Array.isArray(value)) return value.length ? value.join(", ") : fallback;
  return String(value).trim() || fallback;
}

function updatePromptConfig(configOrLanguage, maybeFrameworks) {
  let cfg = {};

  if (typeof configOrLanguage === "object" && configOrLanguage !== null) {
    cfg = configOrLanguage;
  } else {
    cfg = {
      dsaLanguage: configOrLanguage,
      devFrameworks: maybeFrameworks,
    };
  }

  const dsaLanguage = cfg.dsaLanguage || "Java";
  const frontend = cfg.frontend || "React";
  const backend = cfg.backend || "Node.js";
  const database = cfg.database || "MySQL";
  const answerStyle = cfg.answerStyle || "Balanced";
  const modelSelection = cfg.modelSelection || "Gemini Flash";
  const problemMode = cfg.problemMode || "Interview Prep";
  const namingStyle = cfg.namingStyle || "readable";
  const commentsLevel = cfg.commentsLevel || "moderate";
  const includeDryRun = cfg.includeDryRun ? "Yes" : "No";
  const includeComplexity = cfg.includeComplexity ? "Yes" : "No";
  const outputFormat = cfg.outputFormat || "Code + explanation";
  const extraFeatures = asList(cfg.extraFeatures, "None");
  const difficulty = cfg.difficulty || "Mixed";
  const learningBoost = asList(cfg.learningBoost, "None");

  SELECTED_MODEL = pickModel(modelSelection);

  PROMPT = \`You are DevArena AI, an expert problem solver and programming assistant.

Adapt every answer to this user playstyle:
- DSA / CP language: \${dsaLanguage}
- Development stack: Frontend=\${frontend}, Backend=\${backend}, Database=\${database}
- Answer style: \${answerStyle}
- Preferred Gemini engine: \${modelSelection}
- Problem solving mode: \${problemMode}
- Code preferences: naming=\${namingStyle}, comments=\${commentsLevel}, dry-run=\${includeDryRun}, complexity=\${includeComplexity}
- Output format: \${outputFormat}
- Extra features: \${extraFeatures}
- Difficulty preference: \${difficulty}
- Learning boost: \${learningBoost}

Task behavior:
- If MCQ: provide correct option and brief reason.
- If DSA/CP: provide \${dsaLanguage} solution and optimize according to mode.
- If development problem: use the preferred stack and production-minded structure.
- If requested by style, include test cases, edge cases, debugging notes, and optimization suggestions.
- Keep tone and depth aligned with answer style.
- Avoid unnecessary preamble.\`;
}

function httpsRequest(reqUrl, options, body) {
  return new Promise((resolve, reject) => {
    const parsed = new url.URL(reqUrl);
    const isHttps = parsed.protocol === "https:";
    const lib = isHttps ? https : http;

    const reqOptions = {
      hostname: parsed.hostname,
      port: parsed.port || (isHttps ? 443 : 80),
      path: parsed.pathname + parsed.search,
      method: options.method || "POST",
      headers: options.headers || {},
    };

    const req = lib.request(reqOptions, (res) => {
      const chunks = [];
      res.on("data", (chunk) => chunks.push(chunk));
      res.on("end", () =>
        resolve({
          status: res.statusCode,
          body: Buffer.concat(chunks).toString("utf8"),
        }),
      );
      res.on("error", reject);
    });

    req.on("error", reject);
    if (body) req.write(body);
    req.end();
  });
}

function parseSSE(rawText, extractText, onChunk) {
  let fullText = "";
  let bufferedLines = [];

  const lines = rawText.split("\n");
  for (const raw of lines) {
    const line = raw.replace(/\r$/, "");

    if (line.startsWith("data: ")) {
      bufferedLines.push(line.slice(6).trim());
    } else if (line.trim() === "") {
      if (bufferedLines.length === 0) continue;
      const chunk = bufferedLines.join("\n");
      bufferedLines = [];
      try {
        const parsed = JSON.parse(chunk);
        const text = extractText(parsed);
        if (text) {
          fullText += text;
          if (typeof onChunk === "function") onChunk(text);
        }
      } catch {
        // malformed chunk
      }
    }
  }

  if (bufferedLines.length > 0) {
    try {
      const parsed = JSON.parse(bufferedLines.join("\n"));
      const text = extractText(parsed);
      if (text) {
        fullText += text;
        if (typeof onChunk === "function") onChunk(text);
      }
    } catch {
      // ignore
    }
  }

  return fullText;
}

class ProcessingHelper {
  constructor() {
    this.model = SELECTED_MODEL;
    this.projectId = null;
    this._setupDone = false;
    this._setupPromise = null;
    this.chatHistory = [];
  }

  clearHistory() {
    this.chatHistory = [];
  }

  toggleModel() {
    const list = availableModels.length ? availableModels : MODELS_FALLBACK;
    const idx = list.indexOf(this.model);
    this.model = list[(idx === -1 ? 0 : idx + 1) % list.length];
    console.log("[ProcessingHelper] Model →", this.model);
    return this.model;
  }

  _getMethodUrl(method) {
    return \`\${CODE_ASSIST_ENDPOINT}/\${CODE_ASSIST_API_VERSION}:\${method}\`;
  }

  async _request(method, bodyObj) {
    const token = await getAccessToken();
    const bodyStr = JSON.stringify(bodyObj);
    const { status, body } = await httpsRequest(
      this._getMethodUrl(method),
      {
        method: "POST",
        headers: {
          Authorization: \`Bearer \${token}\`,
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(bodyStr),
        },
      },
      bodyStr,
    );
    return { status, body };
  }

  async _requestSSE(bodyObj) {
    const { model, request } = bodyObj;
    const standardBody = request || bodyObj;
    const modelId = (model || \`models/\${this.model}\`).replace(/^models\//, '');

    const project = this.projectId;
    const token = await getAccessToken();
    
    const hostname = 'cloudcode-pa.googleapis.com';
    const pathname = '/v1internal:streamGenerateContent';
    
    const crypto = require('crypto');
    const sessionId = crypto.randomUUID();
    
    const caPayload = {
      model: modelId,
      user_prompt_id: crypto.randomUUID(),
      request: {
        ...standardBody,
        session_id: sessionId
      }
    };
    if (project) {
      caPayload.project = project;
    }
    
    const finalBodyStr = JSON.stringify(caPayload);
    const headers = {
      Authorization: \`Bearer \${token}\`,
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(finalBodyStr),
    };

    const search = '?alt=sse';

    return new Promise((resolve, reject) => {
      const parsed = new url.URL(\`https://\${hostname}\${pathname}\${search}\`);
      const chunks = [];

      const req = https.request(
        {
          hostname: parsed.hostname,
          port: 443,
          path: parsed.pathname + parsed.search,
          method: "POST",
          headers,
        },
        (res) => {
          res.on("data", (chunk) => chunks.push(chunk));
          res.on("end", () =>
            resolve({
              status: res.statusCode,
              body: Buffer.concat(chunks).toString("utf8"),
            }),
          );
          res.on("error", reject);
        },
      );

      req.on("error", reject);
      req.write(finalBodyStr);
      req.end();
    });
  }

  async _ensureSetup() {
    if (this._setupDone) return;
    if (this._setupPromise) return this._setupPromise;
    this._setupPromise = this._doSetup().finally(() => {
      this._setupPromise = null;
    });
    return this._setupPromise;
  }

  async _requestGet(path) {
    const token = await getAccessToken();
    const { status, body } = await httpsRequest(
      \`\${CODE_ASSIST_ENDPOINT}/\${CODE_ASSIST_API_VERSION}/\${path}\`,
      {
        method: "GET",
        headers: {
          Authorization: \`Bearer \${token}\`,
          "Content-Type": "application/json",
        },
      }
    );
    return { status, body };
  }

  async _doSetup() {
    try {
      console.log("[ProcessingHelper] Running loadCodeAssist...");
      const metadata = {
        ideType: "IDE_UNSPECIFIED",
        platform: "PLATFORM_UNSPECIFIED",
        pluginType: "GEMINI",
      };
      
      const { status, body } = await this._request("loadCodeAssist", {
        cloudaicompanionProject: process.env.GOOGLE_CLOUD_PROJECT ?? undefined,
        metadata,
      });

      if (status !== 200)
        throw new Error(\`loadCodeAssist failed \${status}: \${body}\`);

      const data = JSON.parse(body);

      if (data.currentTier || data.cloudaicompanionProject) {
        this.projectId = data.cloudaicompanionProject ?? null;
        this._setupDone = true;
        console.log("[ProcessingHelper] Project ID:", this.projectId ?? "(free/managed tier)");
        return;
      }

      console.log("[ProcessingHelper] User not onboarded. Registering for free tier...");
      const defaultTier = data.allowedTiers?.find(t => t.isDefault) || data.allowedTiers?.[0];
      if (!defaultTier) throw new Error("No allowed tiers for onboarding.");

      const onboardReq = {
        tierId: defaultTier.id,
        cloudaicompanionProject: process.env.GOOGLE_CLOUD_PROJECT ?? undefined,
        metadata: { ...metadata, duetProject: process.env.GOOGLE_CLOUD_PROJECT ?? undefined },
      };

      let lroResBody = await this._request("onboardUser", onboardReq);
      if (lroResBody.status !== 200) throw new Error(\`onboardUser failed: \${lroResBody.body}\`);
      
      let lroData = JSON.parse(lroResBody.body);
      
      while (!lroData.done && lroData.name) {
        console.log(\`[ProcessingHelper] Waiting for onboarding operation \${lroData.name}...\`);
        await sleep(3000);
        const getOp = await this._requestGet(lroData.name);
        if (getOp.status === 200) {
          lroData = JSON.parse(getOp.body);
        } else {
          throw new Error(\`getOperation failed: \${getOp.body}\`);
        }
      }

      this.projectId = lroData.response?.cloudaicompanionProject?.id ?? null;
      this._setupDone = true;
      console.log("[ProcessingHelper] Onboarding complete! Project ID:", this.projectId ?? "(free/managed tier)");
      
    } catch (e) {
      console.error("[ProcessingHelper] Setup error:", e.message);
      this._setupDone = true;
    }
  }

  _buildRequestBody(contents, temperature = 0.2) {
    const body = {
      model: \`models/\${this.model}\`,
      request: {
        contents: contents,
        generationConfig: {
          maxOutputTokens: 8192,
          temperature: temperature,
        },
      },
    };
    if (this.projectId) body.project = this.projectId;
    return body;
  }

  _extractText(parsed) {
    return (
      parsed?.response?.candidates?.[0]?.content?.parts?.[0]?.text ??
      parsed?.candidates?.[0]?.content?.parts?.[0]?.text ??
      null
    );
  }

  _buildTextRequestBody(promptText) {
    const contents = [
      ...this.chatHistory,
      {
        role: "user",
        parts: [{ text: promptText }],
      },
    ];

    const body = {
      model: \`models/gemini-3.1-flash-lite-preview\`,
      request: {
        contents: contents,
        generationConfig: {
          maxOutputTokens: 8192,
          temperature: 0.7,
        },
      },
    };
    if (this.projectId) body.project = this.projectId;
    return body;
  }

  async generateInterviewQA(topics, onChunk) {
    if (!topics) throw new Error("No topics provided.");

    await this._ensureSetup();

    const interviewPrompt = \`Generate a comprehensive interview questions and answers sheet for the following topics: \${topics}. 
Format the output clearly. ALWAYS use a markdown heading (###) for each question, followed by its answer.
Example:
### 1. What is React?
React is a JavaScript library...

Include a mix of conceptual, practical, and problem-solving questions.\`;

    const maxAttempts = 2;
    let lastError;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        const { status, body } = await this._requestSSE(
          this._buildTextRequestBody(interviewPrompt),
        );

        if (status !== 200) {
          throw new Error(\`API error \${status}: \${body}\`);
        }

        const fullText = parseSSE(body, (p) => this._extractText(p), onChunk);
        return {
          text: fullText || "No response.",
          rawResponse: { text: fullText },
        };
      } catch (error) {
        lastError = error;
        console.error(
          \`[ProcessingHelper] Interview QA Error (attempt \${attempt}/\${maxAttempts}):\`,
          error.message,
        );
        const delay = parseRetryDelay(error);
        if (!(RETRYABLE_CODES.has(getCode(error)) || delay || isServerError(error)) || attempt === maxAttempts)
          break;
        await sleep(delay || 200 * attempt);
      }
    }

    return userError(lastError);
  }

  async sendChatMessage(promptText, onChunk) {
    if (!promptText) throw new Error("No prompt provided.");

    await this._ensureSetup();

    const chatPrompt = \`You are DevArena AI, an expert problem solver and programmer. Answer the following question or request from the user:\\n\\n\${promptText}\`;

    const contents = [
      ...this.chatHistory,
      {
        role: "user",
        parts: [{ text: chatPrompt }],
      },
    ];

    const maxAttempts = 2;
    let lastError;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        const { status, body } = await this._requestSSE(
          this._buildRequestBody(contents, 0.7),
        );

        if (status !== 200) {
          throw new Error(\`API error \${status}: \${body}\`);
        }

        const fullText = parseSSE(body, (p) => this._extractText(p), onChunk);

        this.chatHistory.push({
          role: "user",
          parts: [{ text: chatPrompt }],
        });
        this.chatHistory.push({
          role: "model",
          parts: [{ text: fullText || "No response." }],
        });

        return {
          text: fullText || "No response.",
          rawResponse: { text: fullText },
        };
      } catch (error) {
        lastError = error;
        console.error(
          \`[ProcessingHelper] Chat Message Error (attempt \${attempt}/\${maxAttempts}):\`,
          error.message,
        );
        const delay = parseRetryDelay(error);
        if (!(RETRYABLE_CODES.has(getCode(error)) || delay || isServerError(error)) || attempt === maxAttempts)
          break;
        await sleep(delay || 200 * attempt);
      }
    }

    return userError(lastError);
  }

  async processWithGeminiStream(imageDataUrl, onChunk) {
    if (!imageDataUrl) throw new Error("No image data provided.");

    await this._ensureSetup();

    const compressedUrl = await compressImage(imageDataUrl);
    const isJpeg = compressedUrl.startsWith("data:image/jpeg");
    const mimeType = isJpeg ? "image/jpeg" : "image/png";
    const base64 = compressedUrl.replace(/^data:image\/[^;]+;base64,/, "");

    const userMessage = {
      role: "user",
      parts: [{ text: PROMPT }, { inlineData: { mimeType, data: base64 } }],
    };

    const contents = [...this.chatHistory, userMessage];

    const maxAttempts = 2;
    let lastError;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        const { status, body } = await this._requestSSE(
          this._buildRequestBody(contents, 0.2),
        );

        if (status !== 200) {
          throw new Error(\`API error \${status}: \${body}\`);
        }

        const fullText = parseSSE(body, (p) => this._extractText(p), onChunk);

        this.chatHistory.push(userMessage);
        this.chatHistory.push({
          role: "model",
          parts: [{ text: fullText || "No response." }],
        });

        console.log("[ProcessingHelper] Done. Length:", fullText.length);
        return {
          text: fullText || "No response.",
          rawResponse: { text: fullText },
        };
      } catch (error) {
        lastError = error;
        console.error(
          \`[ProcessingHelper] Error (attempt \${attempt}/\${maxAttempts}):\`,
          error.message,
        );
        const delay = parseRetryDelay(error);
        if (!(RETRYABLE_CODES.has(getCode(error)) || delay || isServerError(error)) || attempt === maxAttempts)
          break;
        await sleep(delay || 200 * attempt);
      }
    }

    return userError(lastError);
  }

  async processWithGemini(imageDataUrl, onChunk) {
    if (!imageDataUrl) throw new Error("No image data provided.");

    await this._ensureSetup();

    const compressedUrl = await compressImage(imageDataUrl);
    const isJpeg = compressedUrl.startsWith("data:image/jpeg");
    const mimeType = isJpeg ? "image/jpeg" : "image/png";
    const base64 = compressedUrl.replace(/^data:image\/[^;]+;base64,/, "");

    const userMessage = {
      role: "user",
      parts: [{ text: PROMPT }, { inlineData: { mimeType, data: base64 } }],
    };

    const contents = [...this.chatHistory, userMessage];

    const maxAttempts = 2;
    let lastError;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        const { status, body } = await this._requestSSE(
          this._buildRequestBody(contents, 0.2),
        );

        if (status !== 200) {
          throw new Error(\`API error \${status}: \${body}\`);
        }

        const fullText = parseSSE(body, (p) => this._extractText(p), onChunk);

        this.chatHistory.push(userMessage);
        this.chatHistory.push({
          role: "model",
          parts: [{ text: fullText || "No response." }],
        });

        return {
          text: fullText || "No response.",
          rawResponse: { text: fullText },
        };
      } catch (error) {
        lastError = error;
        console.error(
          \`[ProcessingHelper] Error (attempt \${attempt}/\${maxAttempts}):\`,
          error.message,
        );
        const delay = parseRetryDelay(error);
        if (!(RETRYABLE_CODES.has(getCode(error)) || delay || isServerError(error)) || attempt === maxAttempts)
          break;
        await sleep(delay || 200 * attempt);
      }
    }

    return userError(lastError);
  }
}

module.exports = { ProcessingHelper, updatePromptConfig };
\`\`\`

`,
    date: '2026-05-24',
    author: 'Yatish',
    tags: ['OAuth', 'Gemini API', 'Google Cloud', 'Reverse Engineering', 'Electron', 'Authentication'],
    readTime: '15 min read'
  }
]

export const getBlogById = (id: string): BlogPost | undefined => {
  return blogs.find(blog => blog.id === id)
}
