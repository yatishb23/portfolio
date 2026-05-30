import Image from "next/image";
import TechSkills from "@/components/Sections/LandingPages/Skills";
import Profiles from "@/components/Sections/Coding_Section/Profiles";
import Experience from "@/components/Sections/LandingPages/Experience";
import Thoughts from "@/components/Sections/LandingPages/Thoughts";
import LeetCodeHeatmap from "@/components/Heatmap";
import { PageAnimations, VisitorCounter } from "@/components/PageContent";

/* ── Corner cross mark ── */
const Cross = ({ pos }: { pos: string }) => (
  <div className={`absolute w-3 h-3 ${pos} -translate-x-1/2 -translate-y-1/2`}>
    <div className="absolute h-px w-full bg-zinc-700" />
    <div className="absolute w-px h-full bg-zinc-700" />
  </div>
);

/* ── Section wrapper ── */
const Section = ({
  id,
  label,
  num,
  children,
}: {
  id: string;
  label: string;
  num: string;
  children: React.ReactNode;
}) => (
  <section
    id={id}
    className="panel screen-line-before screen-line-after px-7 py-7"
  >
    {/* header */}
    <div className="flex items-center gap-3 mb-5">
      <h2 className="section-label">{label}</h2>
      <div className="flex-1 h-px bg-zinc-800" />
      <span className="text-[9px] text-zinc-600 tracking-widest font-mono">
        {num}
      </span>
    </div>
    {children}
  </section>
);

export default function Home() {
  return (
    <>
      {/* ── Top dot banner ── */}
      <div className="panel screen-line-before screen-line-after relative py-5">
        <Cross pos="top-0 left-0" />
        <Cross pos="top-0 right-0" />
        <div
          className="h-[60px] w-full opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <span className="absolute bottom-6 right-6 text-[9px] tracking-[0.18em] uppercase text-zinc-700 font-mono">
          v2025.1 · portfolio
        </span>
      </div>

      <div className="stripe-divider" />

      {/* ── Hero ── */}
      <div className="panel screen-line-after relative grid grid-cols-[auto_1fr] px-7 py-8">
        {/* Avatar */}
        <div className="w-24 h-24 rounded-2xl border border-zinc-700 overflow-hidden bg-zinc-900 flex items-center justify-center shrink-0">
          <Image
            src="/yatish2.png"
            alt="Yatish Badgujar"
            width={96}
            height={96}
            priority
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Info */}
        <div className="pl-7 flex flex-col justify-center">
          {/* top row */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-zinc-600 text-sm">◎</span>
            <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-600">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
              <span>
                <VisitorCounter />
              </span>
            </div>
          </div>

          {/* name + badge */}
          <div className="flex items-center gap-2.5 mb-1.5">
            <h1 className="text-[22px] font-mono font-medium tracking-[-0.04em] text-zinc-100 leading-none">
              Yatish Badgujar | Frontend Developer
            </h1>
            {/* verified */}
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-500 shrink-0">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9.5 12.5l2 2 4-4"
                  stroke="white"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>

          {/* role */}
          <p className="text-[11px] font-mono text-zinc-600 uppercase tracking-[0.1em] mb-3">
            Frontend Engineer · Design Systems
          </p>

          {/* status */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 shrink-0" />
            <span className="text-[11px] font-mono text-zinc-600">
              Idle · Currently sleeping
            </span>
          </div>
        </div>
      </div>

      <div className="stripe-divider" />

      {/* ── About ── */}
      <Section id="about" label="About" num="01">
        <ul className="flex flex-col gap-3.5">
          {[
            "Frontend developer crafting high-fidelity digital experiences at the intersection of design and engineering.",
            "Curious about how visual systems shape the way people engage with software — performance and aesthetics as one.",
            "Focused on building intentional, disciplined, and beautiful software products that respect the user's attention.",
          ].map((text, i) => (
            <li key={i} className="flex gap-3.5 items-start">
              <span className="text-zinc-700 font-mono text-[11px] mt-0.5 shrink-0">
                →
              </span>
              <span className="text-[13px] text-zinc-400 leading-relaxed">
                {text}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <div className="stripe-divider" />

      {/* ── Connect ── */}
      <Section id="connect" label="Connect" num="02">
        <div className="flex flex-wrap gap-2">
          {[
            {
              prefix: "gh/",
              label: "GitHub",
              href: "https://github.com/yatish-badgujar",
            },
            {
              prefix: "in/",
              label: "LinkedIn",
              href: "https://linkedin.com/in/yatish-badgujar",
            },
            { prefix: "@", label: "Email", href: "mailto:yatish@example.com" },
            { prefix: "↓", label: "Resume", href: "/resume.pdf" },
          ].map(({ prefix, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="connect-btn"
            >
              <span className="btn-prefix">{prefix}</span>
              {label}
            </a>
          ))}
        </div>
      </Section>

      <div className="stripe-divider" />

      {/* ── Experience ── */}
      <Section id="experience" label="Experience" num="03">
        <Experience />
      </Section>

      <div className="stripe-divider" />

      {/* ── Stack ── */}
      <Section id="stack" label="Stack" num="04">
        <TechSkills />
      </Section>

      <div className="stripe-divider" />

      {/* ── LeetCode ── */}
      <Section id="leetcode" label="LeetCode" num="05">
        <p className="text-[12px] text-zinc-600 mb-5 font-mono">
          Problem-solving journey and consistency heatmap.
        </p>
        <LeetCodeHeatmap username="yatish_23" />
      </Section>

      <div className="stripe-divider" />

      {/* ── Coding Profiles ── */}
      <Section id="coding-profiles" label="Coding Profiles" num="06">
        <Profiles />
      </Section>

      <div className="stripe-divider" />

      {/* ── Thoughts ── */}
      <Section id="thoughts" label="Thoughts" num="07">
        <Thoughts />
      </Section>

      <div className="stripe-divider" />

      {/* ── Quote ── */}
      <div className="panel screen-line-before screen-line-after relative flex flex-col items-center py-14 px-8 text-center">
        <span
          className="text-5xl text-zinc-800 font-serif leading-none mb-5"
          aria-hidden="true"
        >
          "
        </span>
        <blockquote className="max-w-xl text-[14px] font-light italic text-zinc-500 leading-[1.8] mb-6">
          Design is not just what it looks like and feels like. Design is how it
          works.
        </blockquote>
        <div className="flex items-center gap-3">
          <div className="h-px w-6 bg-zinc-700" />
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-600">
            Steve Jobs
          </span>
          <div className="h-px w-6 bg-zinc-700" />
        </div>
      </div>

      <div className="stripe-divider" />

      {/* ── Footer strip ── */}
      <div className="panel screen-line-before relative flex items-center justify-between px-7 py-4">
        <span className="font-mono text-[10px] text-zinc-700 tracking-[0.15em]">
          YB · 2025
        </span>
        <span className="font-mono text-[10px] text-zinc-700">Pune, IN</span>
      </div>

      <PageAnimations />
    </>
  );
}
