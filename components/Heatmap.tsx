"use client";

import { useState, useEffect, useMemo } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface HeatmapData {
  date: string;
  count: number;
}

interface Stats {
  totalSubmissions: number;
  activeStreak: number;
  totalActiveDays: number;
}

export default function LeetCodeHeatmap({ username }: { username: string }) {
  const [heatmapData, setHeatmapData] = useState<HeatmapData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState<Stats>({
    totalSubmissions: 0,
    activeStreak: 0,
    totalActiveDays: 0,
  });
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [activeYears, setActiveYears] = useState<number[]>([]);

  const colorScale = useMemo(() => [
    { threshold: 0, class: "bg-[#27272a]" },
    { threshold: 1, class: "bg-[#0E4429]" },
    { threshold: 4, class: "bg-[#006D32]" },
    { threshold: 7, class: "bg-[#26A641]" },
    { threshold: 10, class: "bg-[#39D353]" },
  ], []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/leetcode?username=${username}&year=${selectedYear}`
        );
        if (!response.ok) throw new Error("Failed to fetch LeetCode data");
        
        const data = await response.json();
        const parsedData = processHeatmapData(data, selectedYear);
        
        setHeatmapData(parsedData);
        updateStats(parsedData, data.streak);
        setActiveYears(data.activeYears || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username, selectedYear]);

  const processHeatmapData = (data: any, year: number) => {
    return Object.entries(JSON.parse(data.submissionCalendar))
      .map(([timestamp, count]) => ({
        date: new Date(Number(timestamp) * 1000).toISOString().split("T")[0],
        count: count as number,
      }))
      .filter(item => {
        const itemDate = new Date(item.date);
        return itemDate.getFullYear() === year;
      });
  };

  const updateStats = (data: HeatmapData[], streak: number) => {
    const totalSubmissions = data.reduce((sum, item) => sum + item.count, 0);
    const activeDays = data.filter(item => item.count > 0).length;
    setStats({ totalSubmissions, activeStreak: streak || 0, totalActiveDays: activeDays });
  };

  const monthsData = useMemo(() => {
    const months = [];
    for (let month = 0; month < 12; month++) {
      const firstDay = new Date(selectedYear, month, 1);
      const lastDay = new Date(selectedYear, month + 1, 0);
      const days = [];

      for (let i = 0; i < firstDay.getDay(); i++) {
        days.push({ date: "", weekday: i });
      }

      for (let day = 1; day <= lastDay.getDate(); day++) {
        const currentDate = new Date(selectedYear, month, day);
        days.push({
          date: currentDate.toISOString().split("T")[0],
          weekday: currentDate.getDay(),
        });
      }

      months.push({
        name: firstDay.toLocaleString("default", { month: "short" }),
        days,
      });
    }
    return months;
  }, [selectedYear]);

  const getColorClass = (count: number) => {
    return colorScale.reduce((acc, scale) => 
      count >= scale.threshold ? scale.class : acc, colorScale[0].class
    );
  };

  if (loading) {
    return <Skeleton className="w-full h-48 rounded-xl" />;
  }

  if (error) {
    return (
      <div className="p-4 bg-red-900/20 text-red-400 rounded-xl border border-red-900/30">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 bg-gradient-to-br from-[#0F0F0F] to-[#1A1A1A] border-black rounded-2xl ">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-base md:text-lg font-normal text-gray-200">
            {stats.totalSubmissions.toLocaleString()} submissions in{" "}
            {selectedYear}
          </h2>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <Select
            value={selectedYear.toString()}
            onValueChange={(value) => setSelectedYear(Number.parseInt(value))}
          >
            <SelectTrigger className="w-[80px] md:w-[100px] bg-[#1C1C1C] border-gray-700 text-gray-200 text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent 
              className="bg-[#151515] border-gray-700"
              align="start"
              position={window.innerWidth < 768 ? "popper" : "item-aligned"}
            >
              {activeYears.map((year) => (
                <SelectItem
                  key={year}
                  value={year.toString()}
                  className="text-sm md:text-base text-gray-200"
                >
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="relative  overflow-auto">
        <div className="flex gap-4">
          {monthsData.map((month) => (
            <div key={month.name} className="flex flex-col">
              <div className="grid grid-rows-7 grid-flow-col gap-[2px]">
                {Array.from({ length: 7 }).map((_, weekday) => (
                  <div key={weekday} className="flex gap-[2px]">
                    {month.days
                      .filter((day) => day.weekday === weekday)
                      .map((day, index) => {
                        if (!day.date) {
                          return (
                            <div
                              key={`empty-${index}`}
                              className="w-[12px] h-[12px] rounded-sm bg-transparent"
                            />
                          );
                        }
                        const count =
                          heatmapData.find((item) => item.date === day.date)
                            ?.count || 0;
                        return (
                          <div
                            key={day.date}
                            className={`w-[12px] h-[12px] rounded-xl  ${getColorClass(
                              count
                            )} relative group transition-colors duration-200 `}
                          >
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block z-10">
                              <div className="bg-[#1C1C1C] text-xs px-3 py-2 rounded border border-gray-700 whitespace-nowrap shadow-lg">
                                {`${count} submissions on ${new Date(
                                  day.date
                                ).toLocaleDateString("en-US", {
                                  month: "long",
                                  day: "numeric",
                                  year: "numeric",
                                })}`}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                ))}
              </div>
              <div className="text-xs text-gray-400 mt-2 ml-5">
                {month.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}