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
        setUserdata(data.platformProfiles);
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
            <div className="h-16 w-16 rounded-full border-4 border-neutral-200 dark:border-neutral-800 border-t-neutral-900 dark:border-t-neutral-100 animate-spin" />
          </div>
          <p className="text-neutral-500 dark:text-neutral-400 font-medium animate-pulse">
            Fetching latest profile data...
          </p>
        </div>
      ) : userdata ? (
        <div className="flex flex-col gap-12 w-full">
          {/* Question Stats */}
          <div className="w-full">
            <div className="flex flex-col gap-1 mb-6">
              <h2 className="text-4xl font-black tracking-tighter text-neutral-900 dark:text-neutral-100">
                Performance Metrics
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 font-medium">
                Comprehensive overview of problems solved across platforms.
              </p>
            </div>

            <QuestionStats platforms={userdata} />
          </div>

          {/* Platform Ratings */}
          <div className="w-full">
            <div className="flex flex-col gap-1 mb-6">
              <h2 className="text-4xl font-black tracking-tighter text-neutral-900 dark:text-neutral-100">
                Competitive Standing
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 font-medium">
                Real-time ratings and world rankings from each platform.
              </p>
            </div>
            <PlatformsStats platforms={userdata} />
          </div>
        </div>
      ) : (
        <div className="text-center p-8 rounded-2xl border border-rose-200 bg-rose-50 text-rose-600 dark:border-rose-900/50 dark:bg-rose-950/20 dark:text-rose-400">
          <p className="font-bold text-lg mb-1">Data Synchronisation Failed</p>
          <p className="text-sm opacity-80">Please check your connection or try again later.</p>
        </div>
      )}
    </section>
  );
};

export default Profiles;
