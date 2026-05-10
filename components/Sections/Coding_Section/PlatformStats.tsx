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
      className="space-y-6"
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase text-zinc-600 mb-2">
          Rankings & Ratings
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {platforms.map((platform) => (
          <motion.a
            key={platform.platform}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href={getPlatformUrl(platform.platform)}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-4 rounded-[4px] border border-zinc-800 bg-transparent hover:border-zinc-600 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-[3px] border border-zinc-800 text-zinc-400 group-hover:text-zinc-200 transition-all">
                <PlatformIcon
                  platform={platform.platform}
                  className="w-4 h-4"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[12px] font-medium tracking-[0.05em] text-zinc-200 capitalize">
                  {platform.platform}
                </span>
                <span className="font-mono text-[9px] tracking-[0.1em] text-zinc-600 group-hover:text-zinc-400 transition-colors">
                  @{platform.userStats.handle}
                </span>
              </div>
            </div>

            <div className="text-right">
              <div className="flex flex-col">
                <span className="font-mono text-[16px] text-zinc-300">
                  {platform.userStats.currentRating || "—"}
                </span>
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600">
                  Current Rating
                </span>
              </div>
              {platform.userStats.maxRating && (
                <div className="mt-1 flex items-center justify-end gap-1">
                  <span className="font-mono text-[8px] uppercase tracking-[0.1em] text-zinc-700">
                    max:
                  </span>
                  <span className="font-mono text-[9px] text-zinc-500">
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
