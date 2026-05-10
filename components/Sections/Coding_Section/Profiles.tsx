"use client";

import { useEffect, useState } from "react";
import QuestionStats from "./QuestionStat";
import PlatformsStats from "./PlatformStats";
import { PlatformData } from "@/type/platform";

const Profiles = () => {
  const [userdata, setUserdata] = useState<PlatformData[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/profileData`);
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        // The API returns the platformProfiles array directly or wrapped in an object depending on cache match
        setUserdata(data.platformProfiles || data);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="min-h-screen py-8">
      {loading ? (
        <div className="flex flex-col items-center justify-center h-64 gap-6 w-full">
          <div className="relative">
            <div className="h-8 w-8 rounded-full border-[1.5px] border-zinc-800 border-t-zinc-300 animate-spin" />
          </div>
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-zinc-600 animate-pulse">
            Fetching latest profile data...
          </p>
        </div>
      ) : userdata ? (
        <div className="flex flex-col gap-12 w-full">
          {/* Question Stats */}
          <div className="w-full">
            <div className="flex flex-col gap-1 mb-8">
              <h2 className="font-mono text-2xl font-medium tracking-[-0.03em] text-zinc-100 leading-none">
                Performance Metrics
              </h2>
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-zinc-600 mt-2">
                Comprehensive overview of problems solved across platforms.
              </p>
            </div>

            <QuestionStats platforms={userdata} />
          </div>

          {/* Platform Ratings */}
          <div className="w-full">
            <div className="flex flex-col gap-1 mb-8 pt-8 border-t border-zinc-800">
              <h2 className="font-mono text-2xl font-medium tracking-[-0.03em] text-zinc-100 leading-none">
                Competitive Standing
              </h2>
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-zinc-600 mt-2">
                Real-time ratings and world rankings from each platform.
              </p>
            </div>
            <PlatformsStats platforms={userdata} />
          </div>
        </div>
      ) : (
        <div className="text-center p-8 rounded-[4px] border border-zinc-800 bg-transparent text-zinc-400">
          <p className="font-mono text-[12px] font-medium mb-2">
            Data Synchronisation Failed
          </p>
          <p className="font-mono text-[10px] tracking-[0.1em] text-zinc-600 uppercase">
            Please check your connection or try again later.
          </p>
        </div>
      )}
    </section>
  );
};

export default Profiles;
