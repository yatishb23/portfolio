import { FaHtml5, FaJava, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { PiFileCssFill } from "react-icons/pi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import {  SiExpress, SiMongodb, SiMysql, SiPostgresql } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { FaGitAlt, FaGithub } from "react-icons/fa";

const RestApiIcon = () => (
  <svg
    stroke="text-green-500"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 640 512"
    className="w-5 h-5"
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
        { name: "Java", icon: FaJava, color: "text-orange-600" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
        { name: "TypeScript", icon: BiLogoTypescript, color: "text-blue-600" },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
        { name: "CSS", icon: PiFileCssFill, color: "text-blue-500" },
        { name: "React", icon: FaReact, color: "text-cyan-500" },
        {
          name: "Next.js",
          icon: RiNextjsFill,
          color: "text-gray-900 dark:text-white",
        },
        { name: "Tailwind", icon: RiTailwindCssFill, color: "text-cyan-600" },
        {
          name: "Framer Motion",
          icon: TbBrandFramerMotion,
          color: "text-purple-600",
        },
        { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
        { name: "Express", icon: SiExpress, color: "text-gray-600" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" }, // 🔹 changed

        { name: "SQL", icon: SiMysql, color: "text-blue-600" },
        { name: "REST API", icon: RestApiIcon, color: "text-indigo-600" },
        { name: "Git", icon: FaGitAlt, color: "text-red-600" },
        {
          name: "GitHub",
          icon: FaGithub,
          color: "text-gray-900 dark:text-white",
        },
      ],
    },
  ];

  return (
    // mt-12 flex items-center transition-colors duration-300
    <section className="mt-8 p-7">
      <div className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        Tech <span className=" text-blue-500">Skills</span>
      </div>

      <div className="space-y-8">
        {techCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <Button
                  key={skillIndex}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <skill.icon className={`w-4 h-4 ${skill.color}`} />
                  {skill.name}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
