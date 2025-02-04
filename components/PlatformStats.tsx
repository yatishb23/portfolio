"use client"

import { useState } from "react"
import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { InfoIcon as InfoCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface QuestionStatsProps {
  platforms?: PlatformData[]
}

interface PlatformData {
  platform: string
  totalQuestionStats?: {
    totalQuestionCounts: number
    easyQuestionCounts?: number
    mediumQuestionCounts?: number
    hardQuestionCounts?: number
  }
  rating?: number
  rank?: number
  contestDate?: string
}

const PlatformsStats: React.FC<QuestionStatsProps> = ({ platforms = [] }) => {
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0]?.platform || "")

  if (!Array.isArray(platforms)) {
    return <p className="text-red-400">Invalid data format</p>
  }

  const currentPlatform = platforms.find((p) => p.platform === selectedPlatform) || platforms[0]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#12121A] rounded-2xl border border-white/10 overflow-hidden"
    >
      {/* Rating Section */}
     

      {/* Problems Solved Section */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">Problems Solved</h3>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">Fundamentals</span>
            <InfoCircle className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Platform Progress Grid */}
        <div className="grid grid-cols-2 gap-6">
          {platforms.map((platform) => (
            <div key={platform.platform} className="space-y-4">
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">{platform.platform}</h4>
                <div className="relative w-32 h-32 mx-auto">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-white/10" strokeWidth="3.8" />
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      className="stroke-green-500"
                      strokeWidth="3.8"
                      strokeDasharray="100"
                      strokeDashoffset={
                        100 -
                        ((platform.totalQuestionStats?.easyQuestionCounts || 0) /
                          (platform.totalQuestionStats?.totalQuestionCounts || 1)) *
                          100
                      }
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      className="stroke-yellow-500"
                      strokeWidth="3.8"
                      strokeDasharray="100"
                      strokeDashoffset={
                        100 -
                        ((platform.totalQuestionStats?.mediumQuestionCounts || 0) /
                          (platform.totalQuestionStats?.totalQuestionCounts || 1)) *
                          100
                      }
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      className="stroke-red-500"
                      strokeWidth="3.8"
                      strokeDasharray="100"
                      strokeDashoffset={
                        100 -
                        ((platform.totalQuestionStats?.hardQuestionCounts || 0) /
                          (platform.totalQuestionStats?.totalQuestionCounts || 1)) *
                          100
                      }
                    />
                    <text
                      x="50%"
                      y="50%"
                      dominantBaseline="middle"
                      textAnchor="middle"
                      className="fill-white text-xl font-bold"
                    >
                      {platform.totalQuestionStats?.totalQuestionCounts || 0}
                    </text>
                  </svg>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-green-500">Easy</span>
                  <span className="text-gray-400">{platform.totalQuestionStats?.easyQuestionCounts || 0}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-yellow-500">Medium</span>
                  <span className="text-gray-400">{platform.totalQuestionStats?.mediumQuestionCounts || 0}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-red-500">Hard</span>
                  <span className="text-gray-400">{platform.totalQuestionStats?.hardQuestionCounts || 0}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default PlatformsStats

