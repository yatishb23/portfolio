import PlatformIcon from "@/components/PlatformIcon"
import Link from "next/link"

export default function Collab() {
  return (
    <div className="grid lg:grid-cols-2 gap-16 py-20 border-t border-neutral-100 dark:border-neutral-900">
      <div className="space-y-10">
        <div className="space-y-6">
          <h2 className="text-5xl md:text-6xl font-black tracking-[-0.05em] text-neutral-950 dark:text-neutral-50 leading-none">
            Let&apos;s <br /> Connect<span className="text-neutral-300 dark:text-neutral-700">.</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 leading-relaxed font-medium max-w-md">
            Always interested in new opportunities, collaborations, and conversations about technology and design.
          </p>
        </div>

        <a
          href="mailto:yatishbad232@gmail.com"
          className="group relative inline-flex items-center gap-6 p-1 pr-8 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 transition-all duration-500 hover:scale-[1.02] active:scale-95 shadow-2xl"
        >
          <div className="p-4 rounded-full bg-neutral-800 dark:bg-neutral-100 group-hover:bg-green-500 transition-colors duration-500">
            <svg className="w-6 h-6 text-white dark:text-neutral-900 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-xs font-black uppercase tracking-[0.3em]">Collaborate with me</span>
        </a>
      </div>

      <div className="space-y-8">
        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400 dark:text-neutral-600 px-2">
          Digital Presence
        </div>

        <div className="grid gap-3">
          {[
            { name: "GitHub", handle: "@yatishb23", url: "https://github.com/yatishb23", icon: "github" },
            { name: "LinkedIn", handle: "@yatishbadgujar", url: "https://linkedin.com/in/yatish-badgujar", icon: "linkedin" },
            { name: "LeetCode", handle: "@yatish_23", url: "https://leetcode.com/yatish_23", icon: "leetcode" },
          ].map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              className="group flex items-center justify-between p-6 rounded-3xl border border-neutral-100 dark:border-neutral-900 bg-white dark:bg-neutral-950 hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:border-neutral-200 dark:hover:border-neutral-800 transition-all duration-300 shadow-sm"
            >
              <div className="flex items-center gap-5">
                <div className="p-3 rounded-2xl bg-neutral-50 dark:bg-neutral-900 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                   <PlatformIcon platform={social.name.toLowerCase()} className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-md font-black text-neutral-800 dark:text-neutral-200 tracking-tight">{social.name}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 group-hover:text-neutral-600 transition-colors">{social.handle}</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 group-hover:bg-neutral-950 dark:group-hover:bg-white transition-all">
                <svg className="w-4 h-4 text-neutral-300 dark:text-neutral-700 group-hover:text-white dark:group-hover:text-black group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}