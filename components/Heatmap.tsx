"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    const fetchData = async () => {
      try {
      
        const response = await fetch(
          `/api/leetcode?username=${username}&year=${selectedYear}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch LeetCode data");
        }
        const data = await response.json();
      
        const parsedData = Object.entries(JSON.parse(data.submissionCalendar))
          .map(([timestamp, count]) => {
            const date = new Date(Number.parseInt(timestamp) * 1000);
            return {
              date: date.toISOString().split("T")[0],
              count: count as number,
            };
          })
          .filter((item) => {
            const itemDate = new Date(item.date);
            return (
              itemDate.getFullYear() === selectedYear &&
              itemDate.getTime() >= new Date(selectedYear, 0, 1).getTime() &&
              itemDate.getTime() < new Date(selectedYear + 1, 0, 1).getTime()
            );
          });

        setHeatmapData(parsedData);

        const totalSubmissions = parsedData.reduce(
          (sum, item) => sum + item.count,
          0
        );
        const activeDays = parsedData.filter((item) => item.count > 0).length;
        setStats({
          totalSubmissions,
          activeStreak: data.streak || 0,
          totalActiveDays: activeDays,
        });
        setActiveYears(data.activeYears || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username, selectedYear]); // Trigger fetchData when selectedYear changes

  const getColorClass = (count: number) => {
    if (count === 0) return "bg-[#1C1C1A]"; // Darker background for empty cells
    if (count <= 3) return "bg-[#0E4429]"; // Lighter shade for low activity
    if (count <= 6) return "bg-[#006D32]"; // Medium shade
    if (count <= 9) return "bg-[#26A641]"; // High activity
    return "bg-[#39D353]"; // Very high activity
  };

  const generateMonthData = () => {
    const months = [];
    const startDate = new Date(selectedYear, 0, 1);
    const endDate = new Date(selectedYear, 11, 31);

    for (let month = 0; month < 12; month++) {
      const firstDay = new Date(selectedYear, month, 1);
      const lastDay = new Date(selectedYear, month + 1, 0);

      const monthData = {
        name: firstDay.toLocaleString("default", { month: "short" }),
        days: [] as Array<{ date: string; weekday: number }>,
      };

      // Fill in empty days at the start of the month
      for (let i = 0; i < firstDay.getDay(); i++) {
        monthData.days.push({ date: "", weekday: i });
      }

      // Fill in the days of the month
      for (let day = 1; day <= lastDay.getDate(); day++) {
        const currentDate = new Date(selectedYear, month, day);

        if (currentDate >= startDate && currentDate <= endDate) {
          const year = currentDate.getFullYear();
          const month = String(currentDate.getMonth() + 1).padStart(2, "0");
          const day = String(currentDate.getDate()).padStart(2, "0");

          const formattedDate = `${year}-${month}-${day}`;
          monthData.days.push({
            date: formattedDate,
            weekday: currentDate.getDay(),
          });
        }
      }

      months.push(monthData);
    }

    return months;
  };

  if (loading) {
    return <Skeleton className="w-full h-32" />;
  }

  if (error) {
    return (
      <div className="text-red-500" role="alert">
        Error: {error}
      </div>
    );
  }

  const monthsData = generateMonthData();

  return (
    <div className="p-6 bg-black rounded-2xl text-gray-200 border-2 border-gray-500">
      <div className="flex items-center justify-between mb-8  ">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-normal text-gray-200">
            {stats.totalSubmissions.toLocaleString()} submissions in{" "}
            {selectedYear}
          </h2>
        </div>
        <div className="flex items-center gap-8 text-sm">
          <div className="text-gray-400">
            Total active days:{" "}
            <span className="text-gray-200 ml-1">{stats.totalActiveDays}</span>
          </div>
          <div className="text-gray-400">
            Max streak:{" "}
            <span className="text-gray-200 ml-1">{stats.activeStreak}</span>
          </div>
          <Select
            value={selectedYear.toString()}
            onValueChange={(value) => setSelectedYear(Number.parseInt(value))}
          >
            <SelectTrigger className="w-[100px] bg-[#1C1C1C] border-gray-700 text-gray-200 ">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#151515] border-gray-700 ">
              {activeYears.map((year) => (
                <SelectItem
                  key={year}
                  value={year.toString()}
                  className="text-gray-200"
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
