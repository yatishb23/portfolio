export default function Experience() {
  return (
    <div className="space-y-16">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-neutral-200 dark:border-neutral-800 pb-8">
        <div className="space-y-1">
          <h2 className="text-4xl font-black tracking-tighter text-neutral-900 dark:text-neutral-100">
            Selected Experience
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 font-medium font-sans">
            Professional journey and technical internships.
          </p>
        </div>
        <div className="text-xs font-black uppercase tracking-widest text-neutral-400 dark:text-neutral-500 bg-neutral-100 dark:bg-neutral-900 px-4 py-2 rounded-full">
          2024 — 2026
        </div>
      </div>

      <div className="space-y-4">
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
            className="group relative grid lg:grid-cols-12 gap-8 p-8 rounded-3xl hover:bg-white dark:hover:bg-neutral-900 transition-all duration-500 border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800 shadow-none hover:shadow-xl hover:shadow-neutral-200/20 dark:hover:shadow-black/20"
          >
            <div className="lg:col-span-2">
              <span className="text-2xl font-black text-neutral-200 dark:text-neutral-800 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors duration-500 font-mono">
                {job.year}
              </span>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                  {job.role}
                </h3>
                <div className="text-sm font-bold text-neutral-400 uppercase tracking-wider">
                  {job.company}
                </div>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                {job.description}
              </p>
            </div>

            <div className="lg:col-span-3 flex flex-wrap gap-2 lg:justify-end items-start content-start">
              {job.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-[10px] font-black uppercase tracking-tighter text-neutral-400 dark:text-neutral-500 bg-neutral-50 dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-900 rounded group-hover:border-neutral-200 dark:group-hover:border-neutral-800 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
