"use client";

import { motion } from "framer-motion";
import PlatformIcon from "../../PlatformIcon";
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
      className="space-y-12 p-8 sm:p-12 rounded-[3rem] border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 shadow-xl dark:shadow-2xl shadow-neutral-500/5"
    >
      {/* Header */}
      <div className="flex flex-col items-center justify-center py-4 border-b border-neutral-200 dark:border-neutral-800">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-2">
          Total Problems Solved
        </h3>
        <p className="text-6xl font-black text-neutral-900 dark:text-neutral-100">
          {totalSolved}
        </p>
      </div>

      {/* Grid of platforms */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {platforms.map((platform) => (
          <motion.div
            key={platform.platform}
            whileHover={{ y: -4 }}
            className="p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-950 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-900 ring-1 ring-neutral-200 dark:ring-neutral-800">
                  <PlatformIcon platform={platform.platform} className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg text-neutral-800 dark:text-neutral-200 capitalize">
                  {platform.platform}
                </h4>
              </div>
              <span className="text-3xl font-black text-neutral-900 dark:text-neutral-100">
                {platform.totalQuestionStats?.totalQuestionCounts || 0}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-neutral-100 dark:border-neutral-900">
              {(["easy", "medium", "hard"] as const).map((difficulty) => {
                const counts = {
                  easy: platform.totalQuestionStats?.easyQuestionCounts ?? 0,
                  medium: platform.totalQuestionStats?.mediumQuestionCounts ?? 0,
                  hard: platform.totalQuestionStats?.hardQuestionCounts ?? 0,
                };
                const colors = {
                  easy: "text-emerald-600 dark:text-emerald-400",
                  medium: "text-amber-600 dark:text-amber-400",
                  hard: "text-rose-600 dark:text-rose-400",
                };
                return (
                  <div key={difficulty} className="flex flex-col items-center p-2 rounded-lg bg-neutral-50 dark:bg-neutral-900/50">
                    <span className="text-[10px] uppercase font-bold tracking-tighter text-neutral-500 mb-1">{difficulty}</span>
                    <span className={`text-lg font-bold ${colors[difficulty]}`}>
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
