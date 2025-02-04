"use client";

import type React from "react";
import { InfoIcon as InfoCircle } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import RatingGraph from "./RatingGraph";

interface QuestionStatsProps {
  platforms?: PlatformData[];
}

interface PlatformData {
  platform: string;
  totalQuestionStats?: {
    totalQuestionCounts: number;
  };
  contestActivityStats?: {
    contestActivityList: number[];
  };
  rating?: string;
  contestDate?: string;
  rank?: string;
}

const QuestionStats: React.FC<QuestionStatsProps> = ({ platforms = [] }) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>(
    platforms[0]?.platform || ""
  );

  if (!Array.isArray(platforms)) {
    return <p className="text-red-400">Invalid data format</p>;
  }
  const curr = platforms.map((p) => ({
    platform: p.platform,
    totalQuestions: p.totalQuestionStats?.totalQuestionCounts || 0,
    contestCount: p.contestActivityStats?.contestActivityList.length || 0,
    rating: p.rating,
    contestDate: p.contestDate,
    rank: p.rank,
  }));

  // Calculate total solved questions from the platforms
  const totalSolved = platforms.reduce(
    (sum, platform) =>
      sum + (platform.totalQuestionStats?.totalQuestionCounts || 0),
    0
  );

  const currentPlatform: any =
    platforms.find((p) => p.platform === selectedPlatform) || platforms[0];

  const totalActiveDays = 328;
  const maxStreak = 111;
  const currentStreak = 72;

  const months = ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb"];
  const generateRandomActivity = () =>
    Array(35)
      .fill(0)
      .map(() => Math.floor(Math.random() * 4));

  const staticActivityData = useMemo(
    () => months.map(() => generateRandomActivity()),
    []
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#12121A] rounded-2xl border border-white/10 overflow-hidden"
    >
      {/* Stats Grid */}
      <div className="grid grid-cols-2 divide-x divide-white/10 border-b border-white/10">
        <div className="p-6 text-center">
          <h3 className="text-gray-400 mb-2">Total Questions</h3>
          <p className="text-5xl font-bold">{totalSolved}</p>
        </div>
      </div>

      <div className="p-6 border-b border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">
              1032 submissions in past 6 months
            </span>
            <InfoCircle className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-gray-400">
              Max.Streak <span className="text-white">{maxStreak}</span>
            </span>
            <span className="text-gray-400">
              Current.Streak <span className="text-white">{currentStreak}</span>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1">
          {staticActivityData.map((activityData, idx) => (
            <div key={months[idx]} className="grid grid-cols-5 gap-1">
              {activityData.map((activity, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-sm ${
                    activity === 0
                      ? "bg-white/10"
                      : activity === 1
                      ? "bg-green-900"
                      : activity === 2
                      ? "bg-green-700"
                      : "bg-green-500"
                  }`}
                />
              ))}
              <div className="col-span-5 text-center text-xs text-gray-400 mt-2">
                {months[idx]}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contest Stats */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">Total Contests</h3>
        <div className="text-6xl font-bold mb-6">49</div>
        <div className="space-y-2">
          {platforms.map((platform) => (
            <button
              key={platform.platform}
              className="flex items-center justify-between w-full px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
              onClick={() => setSelectedPlatform(platform.platform)}
            >
              <span className="text-gray-300 text-sm font-medium">
                {platform.platform}
              </span>
              <span className="text-lg font-semibold text-white">
                {platform.contestActivityStats?.contestActivityList.length || 0}
              </span>
            </button>
          ))}
        </div>

        <div className="p-6 border-b border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Rating</h3>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPlatform}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {/* <div className="text-5xl font-bold mb-2">
                {currentPlatform.userStats.currentRating || "N/A"}
              </div>
              <div className="text-gray-400">
                Weekly Contest {currentPlatform.contestDate}
              </div>
              <div className="text-gray-500 text-sm">
                Rank: {currentPlatform.rank || "N/A"}
              </div> */}

              <div className="p-6">
                {/* Check if contestActivityStats exists and has data */}
                {currentPlatform.contestActivityStats?.contestActivityList ? (
                  // If data exists, render the RatingGraph component
                  <RatingGraph
                    ratingData={currentPlatform.contestActivityStats.contestActivityList.map(
                      (activityData: Record<string, number>, idx: number) => ({
                        contest: activityData.contestName,
                        rating: activityData.rating, // Sum the values of the object properties
                      })
                    )}
                  />
                ) : (
                  // If no data is available, show a fallback message
                  <div className="text-center text-gray-400 py-4">
                    No contest activity data available
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default QuestionStats;
