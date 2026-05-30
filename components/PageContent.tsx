"use client";

import { useEffect, useState } from "react";

export function PageAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("animate-fade-in-up");
        }),
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  return null;
}

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        const res = await fetch("/api/stats");
        const data = await res.json();
        setCount(data.uniqueVisitors);
      } catch {}
    };
    trackVisitor();
  }, []);

  return (
    <span>
      {count !== null ? count.toLocaleString() : "——"} visitors
    </span>
  );
}
