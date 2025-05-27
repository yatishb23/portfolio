'use client'

import Profiles from '@/components/Profiles'
import Link from 'next/link'
import LeetCodeHeatmap from '@/components/Heatmap'

export default function CodingProfiles() {
  return (
    <div className="pt-10 min-h-screen bg-zinc-50 text-neutral-900 dark:bg-[#0A0A0F] dark:text-neutral-200">
      <div className="flex flex-col items-start px-6 md:px-12 lg:ml-100 pt-4 md:pt-6 space-y-8 md:space-y-12 max-w-3xl mx-auto">
        <div className="w-full flex justify-end items-center"></div>

        <div className="w-full">
          <div className="mb-10">
            <Link
              href="/"
              className="text-sm md:text-base mb-4 inline-block hover:underline"
            >
              ← Back to home
            </Link>

            <div className="text-xl md:text-2xl font-medium mb-4 pt-10">
              LeetCode Heatmap
              <div className="pt-6">
                <LeetCodeHeatmap username="yatish_23" />
              </div>
            </div>

            <div className="pt-6 border-b border-neutral-600"></div>

            <div className="text-xl md:text-2xl font-medium mb-4 pt-14">
              Problem Count
              <div>
                <Profiles />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
