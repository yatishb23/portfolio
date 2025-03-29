"use client";

import { motion } from "framer-motion";
import PlatformIcon from "./PlatformIcon";
import { useTheme } from "./theme";

interface PlatformStatsProps {
  platforms?: PlatformData[];
}

interface PlatformData {
  platform: string;
  username: string;
  totalQuestionStats?: {
    totalQuestionCounts: number;
    easyQuestionCounts?: number;
    mediumQuestionCounts?: number;
    hardQuestionCounts?: number;
  };
  rating?: number;
  rank?: number;
  userStats: {
    currentRating: number;
    maxRating: number;
    handle: any;
  };
}

const getPlatformUrl = (platform: string, username: string) => {
  const baseUrls: { [key: string]: string } = {
    leetcode: `https://leetcode.com/yatish_23`,
    codeforces: `https://codeforces.com/profile/yatish_b`,
    geeksforgeeks: `https://auth.geeksforgeeks.org/user/yatishbf02m`,
    codechef: `https://www.codechef.com/users/yatish_12`,
  };
  return baseUrls[platform.toLowerCase()] || "#";
};

const PlatformsStats: React.FC<PlatformStatsProps> = ({ platforms = [] }) => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-2xl p-6 shadow-xl w-full border ${
        theme === 'dark' 
          ? 'bg-[#12121A] border-white/20' 
          : 'bg-white border-gray-200'
      }`}
    >
      <div className="text-center mb-8">
        <h3 className={`text-xs font-medium uppercase tracking-widest ${
          theme === 'dark' ? 'text-[#94A3B8]' : 'text-gray-500'
        }`}>
          Platform Rating
        </h3>
      </div>

      <div className="space-y-0">
        {platforms.map((platform, index) => (
          <div key={platform.platform}>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all cursor-pointer ${
                theme === 'dark' 
                  ? 'hover:bg-[#1E293B]' 
                  : 'hover:bg-gray-100'
              }`}
              href={getPlatformUrl(platform.platform, platform.username)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-md ${
                  theme === 'dark' ? 'bg-[#1E293B]' : 'bg-gray-100'
                }`}>
                  <PlatformIcon platform={platform.platform} />
                </div>
                <div className="flex flex-col space-y-1">
                  <span className={`font-medium text-base ${
                    theme === 'dark' ? 'text-[#F8FAFC]' : 'text-gray-900'
                  }`}>
                    {platform.platform}
                  </span>
                  <span className={`text-sm ${
                    theme === 'dark' ? 'text-[#64748B]' : 'text-gray-500'
                  }`}>
                    @{platform.userStats.handle}
                  </span>
                </div>
              </div>
              
              <div className="text-right">
                <p className={`text-lg font-semibold ${
                  theme === 'dark' ? 'text-[#22C55E]' : 'text-emerald-600'
                }`}>
                  {platform.userStats.currentRating || "N/A"}
                  <span className={`text-sm ml-1.5 ${
                    theme === 'dark' ? 'text-[#64748B]' : 'text-gray-500'
                  }`}>
                    current
                  </span>
                </p>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-[#94A3B8]' : 'text-gray-500'
                }`}>
                  max: {platform.userStats.maxRating || "N/A"}
                </p>
              </div>
            </motion.a>
            
            {index < platforms.length - 1 && (
              <div className={`h-px w-full mx-auto my-2 ${
                theme === 'dark' ? 'bg-[#22C55E]/30' : 'bg-emerald-100'
              }`} />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default PlatformsStats;