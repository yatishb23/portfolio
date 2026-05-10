"use client";

import { motion } from "framer-motion";
import PlatformIcon from "../../PlatformIcon";
import { QuestionStatsProps } from "@/type/platform";

const QuestionStats: React.FC<QuestionStatsProps> = ({ platforms = [] }) => {
  const totalSolved = platforms.reduce(
    (sum, platform) =>
      sum + (platform.totalQuestionStats?.totalQuestionCounts || 0),
    0,
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="flex flex-col items-start justify-center pb-6 border-b border-zinc-800">
        <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase text-zinc-600 mb-2">
          Total Problems Solved
        </h3>
        <p className="font-mono text-5xl font-medium tracking-[-0.04em] text-zinc-100">
          {totalSolved}
        </p>
      </div>

      {/* Grid of platforms */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {platforms.map((platform) => (
          <motion.div
            key={platform.platform}
            whileHover={{ y: -2 }}
            className="p-5 border border-zinc-800 rounded-[4px] bg-transparent hover:border-zinc-600 transition-all duration-300"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-[3px] border border-zinc-800 text-zinc-400">
                  <PlatformIcon
                    platform={platform.platform}
                    className="w-4 h-4"
                  />
                </div>
                <h4 className="font-mono text-[12px] font-medium tracking-[0.05em] text-zinc-200 capitalize">
                  {platform.platform}
                </h4>
              </div>
              <span className="font-mono text-[14px] text-zinc-300">
                {platform.totalQuestionStats?.totalQuestionCounts || 0}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-zinc-800/50">
              {(["easy", "medium", "hard"] as const).map((difficulty) => {
                const counts = {
                  easy: platform.totalQuestionStats?.easyQuestionCounts ?? 0,
                  medium:
                    platform.totalQuestionStats?.mediumQuestionCounts ?? 0,
                  hard: platform.totalQuestionStats?.hardQuestionCounts ?? 0,
                };
                const colors = {
                  easy: "text-zinc-300",
                  medium: "text-zinc-400",
                  hard: "text-zinc-500",
                };
                return (
                  <div key={difficulty} className="flex flex-col items-center">
                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600 mb-1">
                      {difficulty}
                    </span>
                    <span
                      className={`font-mono text-[11px] ${colors[difficulty]}`}
                    >
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
