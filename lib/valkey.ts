import Valkey from "ioredis";

const valkeyUrl = process.env.VALKEY_URL;

const getValkeyClient = () => {
  const client = new Valkey(valkeyUrl || "redis://localhost:6379", {
    tls: valkeyUrl?.startsWith("rediss://") ? { rejectUnauthorized: false } : undefined,
    maxRetriesPerRequest: null,
    retryStrategy(times) {
      return Math.min(times * 50, 2000);
    },
    connectTimeout: 5000,
  });

  client.on("error", (err: any) => {
    if (err.code === 'ENOTFOUND' || err.code === 'ECONNREFUSED') console.log(err.code);
    console.error("Valkey Error:", err.message);
    return;
  });

  return client;
};

const globalForValkey = global as unknown as { valkey: Valkey };

const valkey = globalForValkey.valkey || getValkeyClient();

if (process.env.NODE_ENV !== "production") globalForValkey.valkey = valkey;

export default valkey;
