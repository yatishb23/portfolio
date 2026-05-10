export const SectionPanel = ({ id, title, children, sectionRef }: any) => (
  <section
    id={id}
    className="panel screen-line-before screen-line-after"
    ref={sectionRef}
  >
    <header className="p-4 relative screen-line-after">
      <h2 className="text-2xl font-normal tracking-tight">{title}</h2>
    </header>
    <div className="p-4">{children}</div>
  </section>
);
