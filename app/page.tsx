"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Internal Components
import TechSkills from "@/components/Sections/LandingPages/Skills";
import Profiles from "@/components/Sections/Coding_Section/Profiles";
import Experience from "@/components/Sections/LandingPages/Experience";
import Collab from "@/components/Sections/LandingPages/Contact";
import Footer from "@/components/Sections/LandingPages/Footer";
import Thoughts from "@/components/Sections/LandingPages/Thoughts";
import LeetCodeHeatmap from "@/components/Heatmap";
import { SectionPanel } from "@/components/SectionPanel";
// --- Sub-Components for Cleanliness ---

const CornerCross = ({ position }: { position: string }) => (
  <div
    className={`corner-cross absolute w-3 h-3 flex items-center justify-center ${position} translate-x-[-50%] translate-y-[-50%]`}
  >
    <div className="absolute h-[1px] w-full bg-zinc-300 dark:bg-zinc-700" />
    <div className="absolute w-[1px] h-full bg-zinc-300 dark:bg-zinc-700" />
  </div>
);

export default function Home() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Force Dark Mode based on your original logic
    document.documentElement.classList.add("dark");
    const trackVisitor = async () => {
      try {
        const res = await fetch("/api/stats");
        const data = await res.json();
        setCount(data.uniqueVisitors);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    trackVisitor();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── Top Decorative Banner ── */}
      <div className="border-x border-[var(--color-edge)] screen-line-before screen-line-after relative py-5">
        <CornerCross position="top-0 left-0" />
        <CornerCross position="top-0 right-0" />
        <div
          className="h-[70px] w-full opacity-20"
          style={{
            background:
              "radial-gradient(var(--pattern-foreground) 1px, transparent 0)",
            backgroundSize: "10px 10px",
          }}
        />
      </div>

      {/* ── Hero / Profile ── */}
      <div className="flex border-x border-[var(--color-edge)] relative screen-line-after py-8 px-6">
        <div className="w-[120px] shrink-0">
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-1.5 bg-white dark:bg-white transition-all">
            <Image
              src="/yatish2.png"
              alt="Yatish Badgujar"
              width={100}
              height={100}
              priority
              className="w-full h-auto rounded-xl object-cover block"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center pl-8">
          <div className="flex items-center justify-between text-zinc-500 mb-2">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a10 10 0 0 1 0 20" />
            </svg>
            <div className="flex items-center gap-2 text-xs font-mono">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span>
                {count !== null ? count.toLocaleString() : "Loading..."}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-1.5">
            <h1 className="text-3xl font-mono tracking-tight text-neutral-900 dark:text-neutral-100">
              Yatish Badgujar
            </h1>
            <svg
              className="w-5 h-5 text-blue-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 11.3l2.8 2.7L19.6 6.2 21 7.6l-9.2 9.4L7.6 12.7z"></path>
              <path
                d="M12 22.8c-5.9 0-10.8-4.9-10.8-10.8S6.1 1.2 12 1.2s10.8 4.9 10.8 10.8-4.9 10.8-10.8 10.8zm0-19.6c-4.8 0-8.8 3.9-8.8 8.8s3.9 8.8 8.8 8.8 8.8-3.9 8.8-8.8-3.9-8.8-8.8-8.8z"
                opacity=".2"
              ></path>
              <circle cx="12" cy="12" r="9.3"></circle>
              <path
                fill="#fff"
                d="M9.8 16.7l-4-4.1 1.4-1.4 2.6 2.7 7.4-7.4 1.4 1.4-8.8 8.8z"
              ></path>
            </svg>
          </div>

          <p className="text-sm font-mono text-zinc-500 mb-2">
            Always Learning
          </p>
          <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
            <span className="w-2 h-2 rounded-full bg-zinc-500" />
            <span>Idle · Currently sleeping</span>
          </div>
        </div>
      </div>

      <div className="stripe-divider" />

      {/* ── Sections ── */}

      <SectionPanel
        id="about"
        title="About"
        sectionRef={(el: any) => (sectionsRef.current[0] = el)}
      >
        <ul className="list-disc pl-5 flex flex-col gap-2 text-base leading-relaxed">
          <li>
            Frontend developer crafting high-fidelity digital experiences at the
            intersection of design and engineering.
          </li>
          <li>
            Curious about how visual systems shape the way people engage with
            software.
          </li>
          <li>
            Focused on building intentional, disciplined, and beautiful software
            products.
          </li>
        </ul>
      </SectionPanel>

      <div className="stripe-divider" />

      <SectionPanel
        id="connect"
        title="Connect"
        sectionRef={(el: any) => (sectionsRef.current[4] = el)}
      >
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://github.com/yatish-badgujar"
            target="_blank"
            className="connect-btn"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yatish-badgujar"
            target="_blank"
            className="connect-btn"
          >
            LinkedIn
          </a>
          <a href="mailto:yatish@example.com" className="connect-btn">
            Mail
          </a>
          <a href="/resume.pdf" target="_blank" className="connect-btn">
            Resume
          </a>
        </div>
      </SectionPanel>

      <div className="stripe-divider" />

      <section
        className="panel screen-line-before screen-line-after"
        ref={(el) => {
          sectionsRef.current[1] = el;
        }}
      >
        <div className="p-4">
          <Experience />
        </div>
      </section>

      <div className="stripe-divider" />

      <SectionPanel
        id="leetcode"
        title="LeetCode"
        sectionRef={(el: any) => (sectionsRef.current[6] = el)}
      >
        <p className="text-sm text-zinc-500 mb-4">
          Problem-solving journey and consistency heatmap.
        </p>
        <LeetCodeHeatmap username="yatish_23" />
      </SectionPanel>

      <div className="stripe-divider" />

      <SectionPanel
        id="thoughts"
        title="Thoughts"
        sectionRef={(el: any) => (sectionsRef.current[3] = el)}
      >
        <Thoughts />
      </SectionPanel>

      <div className="stripe-divider" />

      {/* ── Quote block ── */}
      <div className="quote-section flex flex-col items-center py-12 px-6 text-center border-x border-[var(--color-edge)] relative screen-line-before screen-line-after">
        <blockquote className="max-w-2xl text-xl font-light italic text-zinc-500 leading-snug mb-6">
          "Design is not just what it looks like and feels like. Design is how
          it works."
        </blockquote>
        <div className="flex items-center gap-3">
          <div className="h-[1px] w-8 bg-zinc-300 dark:bg-zinc-700" />
          <span className="text-[12px] font-normal tracking-widest uppercase text-zinc-400">
            Steve Jobs
          </span>
          <div className="h-[1px] w-8 bg-zinc-300 dark:bg-zinc-700" />
        </div>
      </div>
    </>
  );
}
