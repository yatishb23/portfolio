import VisitorTracker from "@/components/VisitorTracker";

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-x border-[var(--color-edge)] bg-neutral-50 dark:bg-[#09090b] mx-auto md:max-w-3xl screen-line-before screen-line-after font-light">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
        <div className="space-y-4">
          <div className="text-2xl font-normal tracking-tight">YB.</div>
          <div className="space-y-1">
            <div className="text-xs text-neutral-500 font-light">
              © 2026 Yatish Badgujar. All rights reserved.
            </div>
            <div className="text-[10px] uppercase font-light tracking-widest text-neutral-400">
              Engineered with Excellence
            </div>
            <div className="pt-2">
              <VisitorTracker />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
