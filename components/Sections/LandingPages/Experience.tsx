export default function Experience() {
  return (
    <div className="flex flex-col gap-10">
      {[
        {
          year: "2026",
          role: "Software Engineer Intern",
          company: "Pratiti Technologies",
          description:
            "Spearheading frontend performance optimizations and building robust, scalable interfaces for enterprise-grade project management tools.",
          tech: ["Java", "Hibernate", "MySQL", "React"],
        },
        {
          year: "2024",
          role: "Developer Intern",
          company: "Horus Consulting",
          description:
            "Architected data visualization components and internal dashboard tools, significantly improving data accessibility for stakeholders.",
          tech: ["React", "TypeScript", "Next.js", "D3.js"],
        },
      ].map((job, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 group"
        >
          <div className="w-16 shrink-0 pt-0.5">
            <span className="font-mono text-[11px] text-zinc-500">
              {job.year}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <span className="text-[13px] text-zinc-200 font-medium">
                {job.role}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-zinc-600">
                {job.company}
              </span>
            </div>
            <p className="text-[12px] text-zinc-400 leading-relaxed max-w-lg mb-2">
              {job.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {job.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[9px] uppercase tracking-[0.1em] text-zinc-500 border border-zinc-800 px-2 py-0.5 rounded-[3px]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
