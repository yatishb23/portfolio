"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import TechSkills from "@/components/Sections/LandingPages/Skills";
import Profiles from "@/components/Sections/Coding_Section/Profiles";
import Experience from "@/components/Sections/LandingPages/Experience";
import Collab from "@/components/Sections/LandingPages/Contact";
import Footer from "@/components/Sections/LandingPages/Footer";
import Thoughts from "@/components/Sections/LandingPages/Thoughts";
import LeetCodeHeatmap from "@/components/Heatmap";

export default function Home() {
  const [isDark] = useState(true);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 font-sans selection:bg-neutral-200 dark:selection:bg-neutral-800">
      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <header
          id="intro"
          ref={(el) => {
            sectionsRef.current[0] = el;
          }}
          className="min-h-screen flex items-center opacity-0 py-20"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200/50 dark:bg-neutral-800/50 border border-neutral-300 dark:border-neutral-700 text-[10px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                  <span className="w-1 h-1 rounded-full bg-neutral-400 animate-pulse" />
                  Portfolio / 2026 Edition
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-700 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                    <Image
                      src="/yatish2.png"
                      alt="Yatish Badgujar"
                      width={128}
                      height={128}
                      className="relative w-32 h-32 object-cover rounded-2xl border-2 border-white dark:border-neutral-900 shadow-xl transition-all duration-500"
                    />
                  </div>
                  <div>
                    <h1 className="text-6xl sm:text-7xl font-black tracking-tighter leading-none">
                      Yatish
                      <br />
                      <span className="text-neutral-400 dark:text-neutral-600">Badgujar</span>
                    </h1>
                  </div>
                </div>
              </div>

              <div className="space-y-6 max-w-lg">
                <p className="text-xl sm:text-2xl text-neutral-600 dark:text-neutral-400 leading-tight font-medium">
                  Frontend Developer crafting high-fidelity digital experiences at the intersection of
                  <span className="text-neutral-900 dark:text-neutral-100"> design</span>,
                  <span className="text-neutral-900 dark:text-neutral-100"> engineering</span>, and
                  <span className="text-neutral-900 dark:text-neutral-100"> user delight</span>.
                </p>

                <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-neutral-400">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
                    Available for projects
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="opacity-50">Based in</span>
                    <span className="text-neutral-600 dark:text-neutral-300">Maharashtra, India</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end gap-10 mt-8 lg:mt-0">
              <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 mb-4">
                  Current Status
                </div>
                <div className="space-y-3">
                  <div className="text-sm font-bold text-neutral-800 dark:text-neutral-200 leading-snug">
                    Final Year Engineering Student @ GCOEC
                  </div>
                  <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                    Graduate Trainee Engineer @ Pratiti Technologies
                  </div>
                  <div className="pt-2 flex items-center gap-2">
                    <span className="text-[10px] bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded text-neutral-400">2022 — Present</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 ml-1">
                  Primary Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "React", "TypeScript", "Java", "Node.js"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-[11px] font-bold border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 rounded-full text-neutral-600 dark:text-neutral-400 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="work"
          ref={(el) => {
            sectionsRef.current[1] = el;
          }}
          className="min-h-screen py-24 opacity-0"
        >
          <Experience/>
        </section>

        <section
          id="skills"
          ref={(el) => {
            sectionsRef.current[2] = el;
          }}
          className="py-24 opacity-0"
        > 
          {/* <div className="p-8 sm:p-12 rounded-[2.5rem] bg-neutral-900 dark:bg-neutral-950 text-white shadow-2xl shadow-neutral-500/10"> */}
            <TechSkills />
          {/* </div> */}
        </section>


        <section
          id="coding"
          ref={(el) => {
            sectionsRef.current[6] = el;
          }}
          className="py-24 opacity-0"
        > 
          <div className="space-y-1">
            <h2 className="text-4xl font-black tracking-tighter text-neutral-900 dark:text-neutral-100">LeetCode Activity</h2>
            <p className="text-neutral-500 dark:text-neutral-400 font-medium font-sans pb-14 pt-4">
              A visual representation of my problem-solving journey on LeetCode, showcasing consistency and dedication to honing my coding skills.
            </p>
          </div>
          <LeetCodeHeatmap username="yatish_23" />
        </section>  
        <section
          id="coding"
          ref={(el) => {
            sectionsRef.current[5] = el;
          }}
          className="py-24 opacity-0"
        > 
          <Profiles/>
        </section>

        <section
          id="thoughts"
          ref={(el) => {
            sectionsRef.current[3] = el;
          }}
          className="py-24 opacity-0"
        >
          <Thoughts/>
        </section>

        <section
          id="connect"
          ref={(el) => {
            sectionsRef.current[4] = el;
          }}
          className="py-24 border-t border-neutral-200 dark:border-neutral-800"
        >
          <Collab/>
        </section>

        <Footer/>
      </main>
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-50 dark:from-[#0a0a0a] via-transparent to-transparent pointer-events-none z-50"></div>
    </div>
  );
}
