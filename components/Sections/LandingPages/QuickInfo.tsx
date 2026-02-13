"use client";

import Link from "next/link";
import {
  Tooltip,
  TooltipTrigger
} from "../../ui/tooltip";
import { socialLinks } from "@/data/socialLinks";
import { Button } from "@/components/ui/button";
import { FaRegFilePdf } from "react-icons/fa";

export default function QuickInfo() {
  return (
    <aside className="space-y-8 p-6 rounded-[2rem] bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-100 dark:border-neutral-800">
      <div>
        <h3 className="text-[10px] font-black text-neutral-400 dark:text-neutral-500 mb-4 uppercase tracking-[0.3em]">
          Available For
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-xs font-bold text-neutral-800 dark:text-neutral-200">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Full-time Roles
          </div>
          <div className="flex items-center gap-3 text-xs font-bold text-neutral-800 dark:text-neutral-200">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Freelance Projects
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-[10px] font-black text-neutral-400 dark:text-neutral-500 mb-4 uppercase tracking-[0.3em]">
          Core Focus
        </h3>
        <div className="flex flex-wrap gap-2">
          {["Full-Stack", "Architecture", "DSA"].map((focus) => (
            <span key={focus} className="px-3 py-1 rounded-full bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 text-[10px] font-black uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
              {focus}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <Link
          href="https://drive.google.com/file/d/1tMXTPOcGUg_qbLVhwxCV6MDr4O3L41Xa/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className="w-full h-12 rounded-2xl bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 font-black uppercase text-[10px] tracking-[0.2em] hover:scale-[1.02] transition-transform active:scale-95 shadow-xl"
            size={"lg"}
          >
            <FaRegFilePdf className="w-4 h-4 mr-2" />
            Download CV
          </Button>
        </Link>

        <div className="flex items-center justify-between px-2 pt-2">
          {Object.entries(socialLinks).map(([name, { href, icon: Icon }]) => (
            <Tooltip key={name} delayDuration={6}>
              <TooltipTrigger asChild>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-white dark:hover:bg-neutral-800 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              </TooltipTrigger>
            </Tooltip>
          ))}
        </div>
      </div>
    </aside>
  );
}
