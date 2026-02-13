"use client";

import { motion } from "framer-motion";
import PlatformIcon from "@/components/PlatformIcon";
import { QuestionStatsProps } from "@/type/platform";

const getPlatformUrl = (platform: string) => {
  const baseUrls: { [key: string]: string } = {
    leetcode: `https://leetcode.com/yatish_23`,
    codeforces: `https://codeforces.com/profile/yatish_b`,
    geeksforgeeks: `https://auth.geeksforgeeks.org/user/yatishbf02m`,
    codechef: `https://www.codechef.com/users/yatish_12`,
  };
  return baseUrls[platform.toLowerCase()] || "#";
};

const PlatformsStats: React.FC<QuestionStatsProps> = ({ platforms = [] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-12 p-8 sm:p-12 rounded-[3rem] border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 shadow-xl dark:shadow-2xl shadow-neutral-500/5"
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
          Rankings & Ratings
        </h3>
        <div className="h-px flex-1 mx-4 bg-neutral-200 dark:bg-neutral-800" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {platforms.map((platform) => (
          <motion.a
            key={platform.platform}
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            href={getPlatformUrl(platform.platform)}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 hover:border-neutral-300 dark:hover:border-neutral-700 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-900 ring-1 ring-neutral-100 dark:ring-neutral-800 group-hover:ring-neutral-200 dark:group-hover:ring-neutral-700 transition-all">
                <PlatformIcon platform={platform.platform} className="w-7 h-7" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-neutral-800 dark:text-neutral-200 capitalize">
                  {platform.platform}
                </span>
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-500 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors">
                  @{platform.userStats.handle}
                </span>
              </div>
            </div>

            <div className="text-right">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-neutral-900 dark:text-neutral-100">
                  {platform.userStats.currentRating || "—"}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-tighter text-neutral-400 dark:text-neutral-500">
                  Current Rating
                </span>
              </div>
              {platform.userStats.maxRating && (
                <div className="mt-1 flex items-center justify-end gap-1">
                  <span className="text-[10px] text-neutral-400">max:</span>
                  <span className="text-[10px] font-bold text-neutral-600 dark:text-neutral-400">
                    {platform.userStats.maxRating}
                  </span>
                </div>
              )}
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default PlatformsStats;
