"use client";

import { FaJava, FaJs, FaNodeJs, FaReact, FaGitAlt } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiMongodb, SiMysql, SiPostgresql } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

export default function TechSkills() {
  const techCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: FaJava, color: "text-orange-500" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
        { name: "TypeScript", icon: BiLogoTypescript, color: "text-blue-500" },
      ],
    },
    {
      title: "Engineering & Ecosystem",
      skills: [
        { name: "React", icon: FaReact, color: "text-cyan-400" },
        { name: "Next.js", icon: RiNextjsFill, color: "text-neutral-950 dark:text-white" },
        { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
        { name: "Tailwind", icon: RiTailwindCssFill, color: "text-sky-400" },
        { name: "MongoDB", icon: SiMongodb, color: "text-emerald-500" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
        { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
        { name: "Framer Motion", icon: TbBrandFramerMotion, color: "text-pink-500" },
        { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
      ],
    },
  ];

  return (
    <div className="space-y-16">
      <div className="space-y-4">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral-950 dark:text-neutral-50">Technical Arsenal</h2>
        <p className="text-neutral-500 dark:text-neutral-400 font-medium max-w-2xl leading-relaxed">Tools and technologies I use to bring ideas to life.</p>
      </div>
      
      <div className="space-y-12 p-8 sm:p-12 rounded-[3rem] border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 shadow-xl dark:shadow-2xl shadow-neutral-500/5">
        {techCategories.map((category, idx) => (
          <div key={idx} className="space-y-8">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-600 border-l-2 border-neutral-200 dark:border-neutral-800 pl-4">{category.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
              {category.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="group flex flex-col items-center justify-center p-6 rounded-[2rem] bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-100 dark:border-neutral-800 hover:bg-white dark:hover:bg-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 cursor-default shadow-sm"
                >
                  <skill.icon className={`w-8 h-8 mb-4 transition-transform duration-500 group-hover:scale-110 ${skill.color || 'text-neutral-900 dark:text-white'}`} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
