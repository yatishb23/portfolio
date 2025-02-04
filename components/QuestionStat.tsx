"use client"

import type React from "react"
import { InfoIcon as InfoCircle } from 'lucide-react'
import { Button } from "./ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useMemo } from "react"

interface QuestionStatsProps {
  platforms?: PlatformData[]
}

interface PlatformData {
  platform: string
  totalQuestionStats?: {
    totalQuestionCounts: number
  }
  rating?: string
  contestDate?: string
  rank?: string
}

const QuestionStats: React.FC<QuestionStatsProps> = ({ platforms = [] }) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>(platforms[0]?.platform || "")

  if (!Array.isArray(platforms)) {
    return <p className="text-red-400">Invalid data format</p>
  }

  // Calculate total solved questions from the platforms
  const totalSolved = platforms.reduce(
    (sum, platform) => sum + (platform.totalQuestionStats?.totalQuestionCounts || 0),
    0,
  )
  
  const currentPlatform: any = platforms.find((p) => p.platform === selectedPlatform) || platforms[0];

  // Dynamic values for active days and streaks
  const totalActiveDays = 328; // You can pass this value dynamically if available
  const maxStreak = 111; // This can also be dynamically passed
  const currentStreak = 72; // This too can be dynamically passed

  // Generate random activity data for each month (for the graph)
  const months = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb']
  const generateRandomActivity = () => Array(35).fill(0).map(() => Math.floor(Math.random() * 4))

  // Generate and memoize the activity data for the heatmap so it doesn't change on platform selection
  const staticActivityData = useMemo(() => months.map(() => generateRandomActivity()), [])

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

      {/* Activity Graph (Static, doesn't change on platform switch) */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">1032 submissions in past 6 months</span>
            <InfoCircle className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-gray-400">Max.Streak <span className="text-white">{maxStreak}</span></span>
            <span className="text-gray-400">Current.Streak <span className="text-white">{currentStreak}</span></span>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1">
          {staticActivityData.map((activityData, idx) => (
            <div key={months[idx]} className="grid grid-cols-5 gap-1">
              {activityData.map((activity, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-sm ${
                    activity === 0 ? 'bg-white/10' :
                    activity === 1 ? 'bg-green-900' :
                    activity === 2 ? 'bg-green-700' :
                    'bg-green-500'
                  }`}
                />
              ))}
              <div className="col-span-5 text-center text-xs text-gray-400 mt-2">{months[idx]}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Contest Stats */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">Total Contests</h3>
        <div className="text-6xl font-bold mb-6">49</div>
        <div className="space-y-4">
          {/* Map contests dynamically */}
          {platforms.map((platform) => (
            <button
              key={platform.platform}
              className="flex items-center justify-evenly"
              onClick={() => setSelectedPlatform(platform.platform)}
            >
              <span className="text-gray-400">{platform.platform}</span>
              <span className="font-semibold">{platform.totalQuestionStats?.totalQuestionCounts || 0}</span>
            </button>
          ))}
        </div>

        {/* Platform Rating Section */}
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
              <div className="text-5xl font-bold mb-2">{currentPlatform.rating || "N/A"}</div>
              <div className="text-gray-400">Weekly Contest {currentPlatform.contestDate}</div>
              <div className="text-gray-500 text-sm">Rank: {currentPlatform.rank || "N/A"}</div>

              {/* Rating Graph */}
              <div className="mt-4 h-32 bg-gradient-to-t from-orange-500/20 to-transparent rounded relative">
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-500"></div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

export default QuestionStats
