"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    },
    { category: "Backend", items: ["Node.js", "Express", "REST APIs"] },
    { category: "Programming", items: ["Java", "Python", "JavaScript", "C++"] },
    { category: "AI/ML", items: ["Machine Learning", "Generative AI", "NLP"] },
    { category: "Tools", items: ["Git", "Arduino", "PLC Programming"] },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-white dark:bg-neutral-950">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading Section */}
        <div className="mb-20">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-50 transition-colors mb-10"
          >
            <svg className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to home
          </Link>
          
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-black tracking-[-0.05em] text-neutral-950 dark:text-neutral-50 leading-none">
              About Me<span className="text-neutral-200 dark:text-neutral-800">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-500 dark:text-neutral-400 font-medium max-w-3xl leading-relaxed">
              I&apos;m Yatish, a final year Computer Engineering student passionate about
              full-stack development, AI/ML, and building efficient, real-world
              tech solutions.
            </p>
          </div>
        </div>

        <div className="grid gap-20">
          {/* Skills Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-10 md:p-16 rounded-[3rem] bg-neutral-50 dark:bg-neutral-900/30 border border-neutral-100 dark:border-neutral-900 shadow-sm"
          >
            <div className="space-y-12">
              <div className="flex items-center gap-4">
                 <h2 className="text-3xl font-black tracking-tight text-neutral-950 dark:text-neutral-50">Technical Skills</h2>
                 <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {skills.map((group, i) => (
                  <div key={i} className="space-y-6">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-600 border-l-2 border-neutral-200 dark:border-neutral-800 pl-4">
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item, j) => (
                        <span
                          key={j}
                          className="px-5 py-2.5 rounded-2xl text-[11px] font-black uppercase tracking-widest bg-white dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400 border border-neutral-100 dark:border-neutral-900 shadow-sm hover:scale-105 hover:bg-neutral-950 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Roles Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-12 gap-12"
          >
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-4">
              <h2 className="text-3xl font-black tracking-tight text-neutral-950 dark:text-neutral-50">Leadership</h2>
              <p className="text-neutral-500 dark:text-neutral-400 font-medium">Community engagement and team leadership roles.</p>
            </div>

            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
              {[
                { title: "Deputy Marketing Head", desc: "GECA MUN Club" },
                {
                  title: "Organizing Team Member",
                  desc: "GMC Conference (National)",
                },
                {
                  title: "GDSC Member",
                  desc: "Google Developer Student Clubs",
                },
                {
                  title: "Workshop Organizer",
                  desc: "Cloud Study Jam & GenAI Workshop",
                },
              ].map((role, i) => (
                <div key={i} className="p-8 rounded-[2rem] bg-white dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-900 shadow-sm group hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all">
                   <div className="w-10 h-10 rounded-2xl bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <span className="text-xs font-black text-neutral-950 dark:text-neutral-50">{i + 1}</span>
                   </div>
                   <h4 className="text-lg font-black tracking-tight text-neutral-800 dark:text-neutral-200 mb-2">{role.title}</h4>
                   <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">{role.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default About;

