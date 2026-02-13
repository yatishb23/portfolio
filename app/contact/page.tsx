"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: <Mail className="w-5 h-5" />,
      name: "Email",
      value: "yatishbad232@gmail.com",
      href: "mailto:yatishbad232@gmail.com",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      value: "linkedin.com/in/yatish-badgujar",
      href: "https://www.linkedin.com/in/yatish-badgujar/",
    },
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      value: "github.com/yatishb23",
      href: "https://github.com/yatishb23",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      value: "@yatishh_b23",
      href: "https://www.instagram.com/yatishh_b23",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-white dark:bg-neutral-950">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-20 text-center flex flex-col items-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-50 transition-colors mb-10"
          >
            <svg className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-[-0.05em] text-neutral-950 dark:text-neutral-50 leading-none">
              Get In Touch<span className="text-neutral-200 dark:text-neutral-800">.</span>
            </h1>
            <p className="max-w-xl mx-auto text-xl md:text-2xl text-neutral-500 dark:text-neutral-400 font-medium leading-relaxed">
              I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll do my best to get back to you!
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-3"
          >
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400 dark:text-neutral-600 px-4 mb-4">
              Connect Directly
            </div>
            {contactMethods.map((method, index) => (
              <Link
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 p-6 rounded-[2rem] bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-100 dark:border-neutral-900 hover:bg-white dark:hover:bg-neutral-800 transition-all duration-300 shadow-sm"
              >
                <div className="p-4 rounded-2xl bg-white dark:bg-neutral-950 text-neutral-950 dark:text-white group-hover:bg-neutral-950 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-neutral-950 transition-all duration-500 shadow-sm">
                  {method.icon}
                </div>
                <div>
                  <h3 className="text-sm font-black text-neutral-800 dark:text-neutral-200 tracking-tight">
                    {method.name}
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                    {method.value}
                  </span>
                </div>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                   <svg className="w-5 h-5 text-neutral-950 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                   </svg>
                </div>
              </Link>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 p-10 md:p-14 rounded-[3rem] bg-neutral-50 dark:bg-neutral-900/30 border border-neutral-100 dark:border-neutral-900 shadow-sm"
          >
            <h2 className="text-3xl font-black tracking-tight text-neutral-950 dark:text-neutral-50 mb-10">
              Send Message
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 px-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full h-14 px-6 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-900 focus:border-neutral-950 dark:focus:border-white focus:ring-0 transition-all outline-none font-medium text-neutral-800 dark:text-neutral-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 px-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full h-14 px-6 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-900 focus:border-neutral-950 dark:focus:border-white focus:ring-0 transition-all outline-none font-medium text-neutral-800 dark:text-neutral-200"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 px-1">Subject</label>
                <input
                  type="text"
                  placeholder="Inquiry about..."
                  className="w-full h-14 px-6 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-900 focus:border-neutral-950 dark:focus:border-white focus:ring-0 transition-all outline-none font-medium text-neutral-800 dark:text-neutral-200"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 px-1">Message</label>
                <textarea
                  rows={6}
                  placeholder="How can I help you?"
                  className="w-full p-6 rounded-[2rem] bg-white dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-900 focus:border-neutral-950 dark:focus:border-white focus:ring-0 transition-all outline-none font-medium text-neutral-800 dark:text-neutral-200 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full h-16 rounded-[2rem] bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 font-black uppercase text-xs tracking-[0.3em] hover:scale-[1.02] active:scale-95 transition-all shadow-xl"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
