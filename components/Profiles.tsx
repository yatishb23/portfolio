"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
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
        setUserdata(data.platformProfiles); // Assuming this is PlatformData[]
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="pt-10">
      {loading ? (
        <div className="flex flex-row h-64 pt-10">
          <Loader2 className="animate-spin h-12 w-12 text-zinc-900 dark:text-white" />
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Loading profile data...
          </p>
        </div>
      ) : userdata ? (
        <div className="flex flex-col gap-6 w-full">
          <QuestionStats platforms={userdata} />
          <div className="pt-6 border-b border-neutral-600"></div>

          <div className="w-full pt-5">
            <h1 className="text-xl md:text-2xl font-medium mb-4 hover:underline">
              Platform Rating
            </h1>
          </div>
          <PlatformsStats platforms={userdata} />
        </div>
      ) : (
        <div className="text-center p-4 rounded-lg border border-red-600/30 bg-red-100/50 text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-500">
          Failed to load profile data
        </div>
      )}
    </div>
  );
};

export default Profiles;
