"use client";

import { FaHtml5, FaJava, FaJs, FaNodeJs, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { PiFileCssFill } from "react-icons/pi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiExpress, SiMongodb, SiMysql, SiPostgresql } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { Button } from "@/components/ui/button";

const RestApiIcon = () => (
  <svg
    fill="currentColor"
    viewBox="0 0 640 512"
    className="w-4 h-4 text-muted-foreground"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"></path>
  </svg>
);

export default function TechSkills() {
  const techCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: FaJava },
        { name: "JavaScript", icon: FaJs },
        { name: "TypeScript", icon: BiLogoTypescript },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: PiFileCssFill },
        { name: "React", icon: FaReact },
        { name: "Next.js", icon: RiNextjsFill },
        { name: "Tailwind", icon: RiTailwindCssFill },
        { name: "Framer Motion", icon: TbBrandFramerMotion },
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express", icon: SiExpress },
        { name: "MongoDB", icon: SiMongodb },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "SQL", icon: SiMysql },
        { name: "REST API", icon: RestApiIcon },
        { name: "Git", icon: FaGitAlt },
        { name: "GitHub", icon: FaGithub },
      ],
    },
  ];

  return (
    <div className="space-y-12">
      <h2 className="text-3xl sm:text-4xl font-light text-foreground">Tech Skills</h2>
      <div className="space-y-8">
        {techCategories.map((category, idx) => (
          <div key={idx}>
            <h3 className="text-lg font-medium text-muted-foreground mb-4">{category.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {category.skills.map((skill, sIdx) => (
                <Button
                  key={sIdx}
                  variant="outline"
                  className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg border-border hover:border-muted-foreground/50 transition-colors duration-300 text-foreground dark:text-white"
                >
                  <skill.icon className="w-4 h-4 text-muted-foreground dark:text-white" />
                  {skill.name}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
