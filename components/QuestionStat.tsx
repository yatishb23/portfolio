"use client";

import { motion } from "framer-motion";
import PlatformIcon from "./PlatformIcon";
import { QuestionStatsProps } from "@/type/platform";

const QuestionStats: React.FC<QuestionStatsProps> = ({ platforms = [] }) => {
  const totalSolved = platforms.reduce(
    (sum, platform) =>
      sum + (platform.totalQuestionStats?.totalQuestionCounts || 0),
    0
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="border rounded-2xl p-4 shadow-xl w-full transition-colors duration-300 bg-white border-gray-200 text-gray-900 dark:bg-[#12121A] dark:border-white/20 dark:text-white"
    >
      <div className="text-center mb-5">
        <h3 className="text-xs font-medium uppercase tracking-widest text-gray-600 dark:text-gray-400">
          Problems Solved
        </h3>
        <p className="text-4xl font-bold mt-1 text-emerald-600 dark:text-[#22C55E]">
          {totalSolved}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-collapse">
        {platforms.map((platform, index) => (
          <motion.div
            key={platform.platform}
            className={`p-4 transition-all ${
              index % 2 === 0 ? "md:border-r" : ""
            } ${
              index < platforms.length - (platforms.length % 2)
                ? "border-b"
                : ""
            } border-gray-200 dark:border-gray-800`}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                <PlatformIcon platform={platform.platform} />
                <h4 className="font-medium text-gray-900 dark:text-gray-100">
                  {platform.platform}
                </h4>
              </div>
              <span className="text-2xl font-bold text-emerald-600 dark:text-[#22C55E]">
                {platform.totalQuestionStats?.totalQuestionCounts || 0}
              </span>
            </div>

            <div className="space-y-2">
              {(["easy", "medium", "hard"] as const).map((difficulty) => {
                const counts = {
                  easy: platform.totalQuestionStats?.easyQuestionCounts ?? 0,
                  medium:
                    platform.totalQuestionStats?.mediumQuestionCounts ?? 0,
                  hard: platform.totalQuestionStats?.hardQuestionCounts ?? 0,
                };

                return (
                  <div
                    key={difficulty}
                    className="flex justify-between text-sm"
                  >
                    <span className="text-gray-600 dark:text-gray-400">
                      {difficulty}:
                    </span>
                    <span className="text-emerald-600 dark:text-[#22C55E]">
                      {counts[difficulty]}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default QuestionStats;
