"use client";

import { about } from "@/data/About";
import QuickInfo from "./QuickInfo";
import Name from "./Name";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function About() {
  return (
    <section className="mt-20 flex items-center transition-colors duration-300">
      <div className="mx-auto w-full max-w-5xl px-6">
        <Name />
        <div className="grid gap-16 lg:grid-cols-12 pt-10 border-t border-neutral-100 dark:border-neutral-900">
          <div className="space-y-8 lg:col-span-8">
            <div className="text-neutral-950 dark:text-neutral-50 text-3xl font-black tracking-tight flex items-center gap-3">        
                About<span className="text-neutral-300 dark:text-neutral-700">.</span>
            </div>
            <div className="space-y-6 leading-relaxed">
              <p className="text-neutral-600 dark:text-neutral-400 text-lg lg:text-xl font-medium">
                {about.description}
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-neutral-950 dark:text-neutral-50 font-black uppercase text-xs tracking-[0.2em] pt-4"
              >
                  <span className="pb-1 border-b-2 border-neutral-200 dark:border-neutral-800 group-hover:border-neutral-950 dark:group-hover:border-white transition-all duration-300">
                      More about me
                  </span>
                  <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center group-hover:bg-neutral-950 dark:group-hover:bg-white transition-all duration-300">
                    <FaArrowRight className="w-3 h-3 text-neutral-950 dark:text-white group-hover:text-white dark:group-hover:text-black group-hover:translate-x-0.5 transition-all" />
                  </div>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4">
            <QuickInfo />
          </div>
        </div>
      </div>
    </section>
  );
}