"use client";

import { motion } from "framer-motion";
import PlatformIcon from "./PlatformIcon";
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

const PlatformsStats: React.FC<QuestionStatsProps> = ({ platforms = [] })  => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl p-6 shadow-xl w-full border bg-white border-gray-200 text-gray-900 dark:bg-[#12121A] dark:border-white/20 dark:text-white"
    >
      <div className="text-center mb-8">
        <h3 className="text-xs font-medium uppercase tracking-widest text-gray-500 dark:text-[#94A3B8]">
          Platform Rating
        </h3>
      </div>

      <div className="space-y-0">
        {platforms.map((platform, index) => (
          <div key={platform.platform}>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-between px-4 py-3 rounded-lg transition-all cursor-pointer hover:bg-gray-100 dark:hover:bg-[#1E293B]"
              href={getPlatformUrl(platform.platform)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-md bg-gray-100 dark:bg-[#1E293B]">
                  <PlatformIcon platform={platform.platform} />
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="font-medium text-base text-gray-900 dark:text-[#F8FAFC]">
                    {platform.platform}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-[#64748B]">
                    @{platform.userStats.handle}
                  </span>
                </div>
              </div>

              <div className="text-right">
                <p className="text-lg font-semibold text-emerald-600 dark:text-[#22C55E]">
                  {platform.userStats.currentRating || "N/A"}
                  <span className="text-sm ml-1.5 text-gray-500 dark:text-[#64748B]">
                    current
                  </span>
                </p>
                <p className="text-sm text-gray-500 dark:text-[#94A3B8]">
                  max: {platform.userStats.maxRating || "N/A"}
                </p>
              </div>
            </motion.a>

            {index < platforms.length - 1 && (
              <div className="h-px w-full mx-auto my-2 bg-emerald-100 dark:bg-[#22C55E]/30" />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default PlatformsStats;
