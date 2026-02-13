import VisitorTracker from "@/components/VisitorTracker";

export default function Footer() {
  return (
    <footer className="py-16 border-t border-neutral-200 dark:border-neutral-800">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
        <div className="space-y-4">
          <div className="text-2xl font-black tracking-tighter">YB.</div>
          <div className="space-y-1">
            <div className="text-xs font-bold text-neutral-400">
              © 2026 Yatish Badgujar. All rights reserved.
            </div>
            <div className="text-[10px] font-black uppercase tracking-widest text-neutral-300 dark:text-neutral-700">
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
