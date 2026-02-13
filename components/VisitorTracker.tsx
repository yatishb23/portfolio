"use client";

import { useEffect, useState } from "react";

export default function VisitorTracker() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const trackVisitor = async () => {
      const hasVisited = localStorage.getItem("hasVisited");
      
      if (!hasVisited) {
        // New visitor
        try {
          const res = await fetch("/api/visitors", { method: "POST" });
          const data = await res.json();
          if (data.count !== undefined) {
            setCount(data.count);
            localStorage.setItem("hasVisited", "true");
          }
        } catch (error) {
          console.error("Error tracking visitor:", error);
        }
      } else {
        // Returning visitor, just fetch the current count
        try {
          const res = await fetch("/api/visitors");
          const data = await res.json();
          if (data.count !== undefined) {
            setCount(data.count);
          }
        } catch (error) {
          console.error("Error fetching visitors:", error);
        }
      }
    };

    trackVisitor();
  }, []);

  if (count === null) return null;

  return (
    <div className="flex items-center gap-2">
      <div className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
      <span className="text-xs font-medium text-neutral-500">
        {count.toLocaleString()} unique visitors
      </span>
    </div>
  );
}
