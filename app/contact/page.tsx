"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

const contactMethods = [
  {
    icon: <Mail className="w-4 h-4" />,
    prefix: "@",
    name: "Email",
    value: "yatishbad232@gmail.com",
    href: "mailto:yatishbad232@gmail.com",
  },
  {
    icon: <Linkedin className="w-4 h-4" />,
    prefix: "in/",
    name: "LinkedIn",
    value: "linkedin.com/in/yatish-badgujar",
    href: "https://www.linkedin.com/in/yatish-badgujar/",
  },
  {
    icon: <Github className="w-4 h-4" />,
    prefix: "gh/",
    name: "GitHub",
    value: "github.com/yatishb23",
    href: "https://github.com/yatishb23",
  },
  {
    icon: <Instagram className="w-4 h-4" />,
    prefix: "ig/",
    name: "Instagram",
    value: "@yatishh_b23",
    href: "https://www.instagram.com/yatishh_b23",
  },
];

const SectionHeader = ({ label, num }: { label: string; num: string }) => (
  <div className="flex items-center gap-3 mb-8">
    <span className="text-[9px] tracking-[0.25em] uppercase text-zinc-500 border border-zinc-700 rounded-[3px] px-2 py-1 font-mono">
      {label}
    </span>
    <div className="flex-1 h-px bg-zinc-800" />
    <span className="text-[9px] text-zinc-600 tracking-widest font-mono">
      {num}
    </span>
  </div>
);

const Cross = ({ pos }: { pos: string }) => (
  <div
    className={`absolute w-3 h-3 ${pos} -translate-x-1/2 -translate-y-1/2 pointer-events-none`}
  >
    <div className="absolute h-px w-full bg-zinc-700" />
    <div className="absolute w-px h-full bg-zinc-700" />
  </div>
);

export default function Contact() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#09090b]">
      <div className="md:max-w-3xl mx-auto border-x border-neutral-200 dark:border-zinc-800 min-h-screen relative">
        {/* ── Top banner ── */}
        <div className="relative border-b border-zinc-800 py-5">
          <Cross pos="top-0 left-0" />
          <Cross pos="top-0 right-0" />
          <div
            className="h-[50px] w-full opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        {/* ── Back + Hero ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-7 py-10 border-b border-zinc-800"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] uppercase text-zinc-600 hover:text-zinc-300 transition-colors mb-10 group"
          >
            <svg
              className="w-3 h-3 transition-transform group-hover:-translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to home
          </Link>

          <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-zinc-600 mb-4">
            / contact
          </p>
          <h1 className="font-mono text-4xl md:text-5xl font-medium tracking-[-0.04em] text-zinc-100 leading-none mb-6">
            Get In Touch
          </h1>
          <p className="font-mono text-[13px] text-zinc-500 leading-[1.8] max-w-md">
            Currently open to new opportunities. Whether you have a question or
            just want to say hi — I'll get back to you.
          </p>
        </motion.div>

        {/* ── Contact methods ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="px-7 py-8 border-b border-zinc-800"
        >
          <SectionHeader label="Connect Directly" num="01" />

          <div className="flex flex-col gap-2">
            {contactMethods.map((m, i) => (
              <Link
                key={i}
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 px-5 py-4 border border-zinc-800 rounded-[6px] hover:border-zinc-600 transition-all"
              >
                <div className="flex items-center justify-center w-8 h-8 border border-zinc-700 rounded-[4px] text-zinc-600 group-hover:border-zinc-500 group-hover:text-zinc-300 transition-all shrink-0">
                  {m.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-mono text-[9px] text-zinc-600">
                      {m.prefix}
                    </span>
                    <span className="font-mono text-[12px] text-zinc-300 font-medium">
                      {m.name}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-zinc-600 truncate block">
                    {m.value}
                  </span>
                </div>
                <svg
                  className="w-3.5 h-3.5 text-zinc-700 group-hover:text-zinc-400 transition-all group-hover:translate-x-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* ── Contact form ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="px-7 py-8 border-b border-zinc-800"
        >
          <SectionHeader label="Send Message" num="02" />

          <form className="flex flex-col gap-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[9px] tracking-[0.2em] uppercase text-zinc-600">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="h-11 px-4 bg-transparent border border-zinc-800 rounded-[5px] font-mono text-[12px] text-zinc-300 placeholder:text-zinc-700 focus:border-zinc-600 focus:outline-none transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[9px] tracking-[0.2em] uppercase text-zinc-600">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="h-11 px-4 bg-transparent border border-zinc-800 rounded-[5px] font-mono text-[12px] text-zinc-300 placeholder:text-zinc-700 focus:border-zinc-600 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-[9px] tracking-[0.2em] uppercase text-zinc-600">
                Subject
              </label>
              <input
                type="text"
                placeholder="Inquiry about..."
                className="h-11 px-4 bg-transparent border border-zinc-800 rounded-[5px] font-mono text-[12px] text-zinc-300 placeholder:text-zinc-700 focus:border-zinc-600 focus:outline-none transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-[9px] tracking-[0.2em] uppercase text-zinc-600">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="How can I help you?"
                className="p-4 bg-transparent border border-zinc-800 rounded-[5px] font-mono text-[12px] text-zinc-300 placeholder:text-zinc-700 focus:border-zinc-600 focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="h-11 font-mono text-[10px] tracking-[0.2em] uppercase text-zinc-900 bg-zinc-100 hover:bg-white rounded-[5px] transition-colors font-medium"
            >
              Send Message →
            </button>
          </form>
        </motion.div>

        {/* ── Footer ── */}
        <div className="px-7 py-4 flex items-center justify-between">
          <span className="font-mono text-[10px] text-zinc-700 tracking-[0.15em]">
            YB · Contact
          </span>
          <span className="font-mono text-[10px] text-zinc-700">Pune, IN</span>
        </div>
      </div>
    </div>
  );
}
