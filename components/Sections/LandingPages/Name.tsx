"use client";

import Image from "next/image";

export default function Name() {
  return (
    <>
      <div className="mb-10 flex flex-col items-start gap-10 lg:flex-row lg:items-center">
        <div className="group relative">
          <div className="absolute -inset-2 rounded-[2.5rem] bg-neutral-100 dark:bg-neutral-800 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
          <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-neutral-200 dark:ring-neutral-800 shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
            <Image
              src="/yatish2.png"
              alt="Yatish Badgujar"
              width={120}
              height={120}
              className="grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </div>
          <span className="absolute -right-1 -bottom-1 h-5 w-5 rounded-full border-4 border-white dark:border-neutral-950 bg-green-500 shadow-sm" />
        </div>
        
        <div className="flex-1 space-y-2">
          <h1 className="text-5xl md:text-6xl font-black tracking-[-0.05em] text-neutral-950 dark:text-neutral-50 leading-[0.9]">
            Yatish <br className="hidden md:block lg:hidden" /> Badgujar
          </h1>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="px-4 py-1.5 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 text-xs font-black uppercase tracking-[0.2em]">
              Full-Stack Developer
            </div>
            <p className="text-neutral-400 dark:text-neutral-500 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
              Chh. Sambhajinagar, India
            </p>
          </div>
        </div>
      </div>
    </>
  );
}