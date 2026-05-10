import VisitorTracker from "@/components/VisitorTracker";

export default function Footer() {
  return (
    <footer className="py-6 border-zinc-800 font-light">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-4">
          <div className="space-y-1">
            <div className="text-[12px] text-zinc-500 font-light">
              © 2026 Yatish Badgujar. All rights reserved.
            </div>
            <div className="text-[10px] uppercase font-mono tracking-widest text-zinc-600">
              Engineered with Excellence
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
