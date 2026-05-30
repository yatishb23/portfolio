export const Section = ({
  id, label, num, children, sectionRef,
}: {
  id: string; label: string; num: string;
  children: React.ReactNode;
  sectionRef?: (el: HTMLElement | null) => void;
}) => (
  <section
    id={id}
    ref={sectionRef}
    className="panel screen-line-before screen-line-after px-7 py-7"
  >
    {/* header */}
    <div className="flex items-center gap-3 mb-5">
      <h2 className="section-label">{label}</h2>
      <div className="flex-1 h-px bg-zinc-800" />
      <span className="text-[9px] text-zinc-600 tracking-widest font-mono">{num}</span>
    </div>
    {children}
  </section>
);