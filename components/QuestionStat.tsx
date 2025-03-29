"use client";

import { motion } from "framer-motion";
import PlatformIcon from "./PlatformIcon";
import { useTheme } from "./theme";
import { useState } from "react";

interface QuestionStatsProps {
  platforms?: PlatformData[];
}

interface PlatformData {
  platform: string;
  totalQuestionStats?: {
    totalQuestionCounts: number;
    easyQuestionCounts?: number;
    mediumQuestionCounts?: number;
    hardQuestionCounts?: number;
  };
  userStats: {
    currentRating: number;
    maxRating: number;
  };
}

const QuestionStats: React.FC<QuestionStatsProps> = ({ platforms = [] }) => {
  const { theme } = useTheme();
  const [selectedPlatform, setSelectedPlatform] = useState<string>(
    platforms[0]?.platform || ""
  );

  const totalSolved = platforms.reduce(
    (sum, platform) =>
      sum + (platform.totalQuestionStats?.totalQuestionCounts || 0),
    0
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`border rounded-2xl p-4 shadow-xl w-full transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[#12121A] border-white/20 text-white"
          : "bg-white border-gray-200 text-gray-900"
      }`}
    >
      <div className="text-center mb-5">
        <h3
          className={`text-xs font-medium uppercase tracking-widest ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Problems Solved
        </h3>
        <p
          className={`text-4xl font-bold mt-1 ${
            theme === "dark" ? "text-[#22C55E]" : "text-emerald-600"
          }`}
        >
          {totalSolved}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-collapse">
        {platforms.map((platform, index) => (
          <motion.div
            key={platform.platform}
            className={`p-4 transition-all ${
              theme === "dark" ? "border-gray-800" : "border-gray-200"
            } ${index % 2 === 0 ? "md:border-r" : ""} ${
              index < platforms.length - (platforms.length % 2)
                ? "border-b"
                : ""
            }`}
          >
            {/* Platform Header */}
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                <PlatformIcon platform={platform.platform} />
                <h4
                  className={`font-medium ${
                    theme === "dark" ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  {platform.platform}
                </h4>
              </div>
              <span
                className={`text-2xl font-bold ${
                  theme === "dark" ? "text-[#22C55E]" : "text-emerald-600"
                }`}
              >
                {platform.totalQuestionStats?.totalQuestionCounts || 0}
              </span>
            </div>

            {/* Difficulty List */}
            <div className="space-y-2">
              {["easy", "medium", "hard"].map((difficulty) => (
                <div key={difficulty} className="flex justify-between text-sm">
                  <span
                    className={
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }
                  >
                    {difficulty}:
                  </span>
                  <span
                    className={
                      theme === "dark" ? "text-[#22C55E]" : "text-emerald-600"
                    }
                  >
                    {platform.totalQuestionStats?.hardQuestionCounts || 0}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default QuestionStats;
