"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Linkedin, Github,Instagram } from "lucide-react";


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
      value: "linkedin.com/in/yourprofile",
      href: "https://www.linkedin.com/in/yatish-badgujar/",
    },
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      value: "github.com/yourusername",
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
    <div className="min-h-screen bg-gradient-to-br dark:from-[#0A0A0F] dark:to-[#12121A] dark:text-neutral-200 from-zinc-50 to-zinc-100">
      <div className="container max-w-2xl mx-auto px-4 py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className={`text-4xl font-light tracking-tight `}>
            Get In Touch
          </h1>
          <div className="w-20 h-px mx-auto mt-6 dark:bg-neutral-600 bg-neutral-300" />
          <p className="max-w-lg mx-auto mt-6 dark:text-neutral-400 text-neutral-600">
            I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll do my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                className="p-6 rounded-md dark:bg-neutral-800/30 bg-neutral-100 border dark:border-neutral-700 border-neutral-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-md dark:bg-neutral-700/50 bg-neutral-200">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className={`text-lg font-medium `}>
                      {method.name}
                    </h3>
                    <Link
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm dark:text-neutral-400 text-neutral-600 hover:underline"
                    >
                      {method.value}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-md dark:bg-neutral-800/30 bg-neutral-100 border dark:border-neutral-700 border-neutral-300"
          >
            <h2 className={`text-2xl font-medium mb-6`}>
              Send Me a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 dark:text-neutral-300 text-neutral-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-md dark:bg-neutral-700/50 bg-neutral-200 border dark:border-neutral-600 border-neutral-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 dark:text-neutral-300 text-neutral-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-md dark:bg-neutral-700/50 bg-neutral-200 border dark:border-neutral-600 border-neutral-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 dark:text-neutral-300 text-neutral-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-md dark:bg-neutral-700/50 bg-neutral-200 border dark:border-neutral-600 border-neutral-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-2 rounded-md bg-cyan-600 hover:bg-cyan-700 text-white font-medium transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}