"use client";

import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface HeatmapData {
  date: string;
  count: number;
}

interface Stats {
  totalSubmissions: number;
  activeStreak: number;
  totalActiveDays: number;
}

interface LeetCodeHeatmapProps {
  username: string;
}

export default function LeetCodeHeatmap({ username }: LeetCodeHeatmapProps) {
  const [heatmapData, setHeatmapData] = useState<HeatmapData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState<Stats>({
    totalSubmissions: 0,
    activeStreak: 0,
    totalActiveDays: 0,
  });
  const [dateRange, setDateRange] = useState({
    start: new Date(),
    end: new Date(),
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endDate = new Date();
        const startDate = new Date(endDate);
        startDate.setFullYear(startDate.getFullYear() - 1);
        startDate.setDate(startDate.getDate() + 1);
        setDateRange({ start: startDate, end: endDate });

        const years = [startDate.getFullYear(), endDate.getFullYear()];
        let allData: HeatmapData[] = [];

        for (const year of years) {
          const res = await fetch(`/api/leetcode?username=${username}&year=${year}`);
          if (!res.ok) {
            if (year === endDate.getFullYear()) {
              throw new Error(`Failed to fetch LeetCode data for ${year}`);
            }
            continue;
          }

          const data = await res.json();
          const calendarRaw = data?.submissionCalendar;
          const calendarObj = calendarRaw ? JSON.parse(calendarRaw) : {};

          const parsedData: HeatmapData[] = Object.entries(calendarObj).map(
            ([timestamp, count]) => {
              const date = new Date(Number(timestamp) * 1000).toISOString().split("T")[0];
              return { date, count: Number(count) };
            }
          );

          allData = allData.concat(parsedData);

          if (year === endDate.getFullYear()) {
            setStats((prev) => ({
              ...prev,
              activeStreak: data.streak || 0,
            }));
          }
        }

        const filtered = allData.filter((item) => {
          const itemDate = new Date(item.date);
          return itemDate >= startDate && itemDate <= endDate;
        });

        const totalSubmissions = filtered.reduce((sum, item) => sum + item.count, 0);
        const totalActiveDays = filtered.filter((item) => item.count > 0).length;

        setHeatmapData(filtered);
        setStats((prev) => ({
          ...prev,
          totalSubmissions,
          totalActiveDays,
        }));
      } catch (err) {
        const message = err instanceof Error ? err.message : "An unknown error occurred";
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  const getColorClass = (count: number) => {
    if (count === 0) return "bg-[#E5E7EB] dark:bg-[#1C1C1A]";
    if (count <= 3) return "bg-[#9BE9A8] dark:bg-[#0E4429]";
    if (count <= 6) return "bg-[#40C463] dark:bg-[#006D32]";
    if (count <= 9) return "bg-[#30A14E] dark:bg-[#26A641]";
    return "bg-[#216E39] dark:bg-[#39D353]";
  };

  const generateRollingYearData = () => {
    const { start, end } = dateRange;
    const months = [];
    const currentMonth = new Date(start.getFullYear(), start.getMonth(), 1);

    while (currentMonth <= end) {
      const month = currentMonth.getMonth();
      const year = currentMonth.getFullYear();
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);

      const monthData = {
        name: firstDay.toLocaleString("default", { month: "short" }),
        year,
        days: [] as { date: string; weekday: number }[],
      };

      for (let i = 0; i < firstDay.getDay(); i++) {
        monthData.days.push({ date: "", weekday: i });
      }

      for (let d = 1; d <= lastDay.getDate(); d++) {
        const date = new Date(year, month, d);
        if (date >= start && date <= end) {
          const formatted = date.toISOString().split("T")[0];
          monthData.days.push({ date: formatted, weekday: date.getDay() });
        }
      }

      if (monthData.days.some((d) => d.date)) months.push(monthData);
      currentMonth.setMonth(currentMonth.getMonth() + 1);
    }

    return months;
  };

  if (loading) {
    return (
      <div className="p-6 rounded-2xl border animate-pulse dark:bg-[#12121A] dark:text-gray-200 dark:border-white/20 bg-white text-gray-900 border-gray-200">
        <div className="flex justify-between mb-8">
          <Skeleton className="h-6 w-48 rounded-md" />
          <Skeleton className="h-4 w-36 rounded-md" />
        </div>
        <div className="grid grid-cols-4 gap-5 justify-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center space-y-2">
              <Skeleton className="h-8 w-12 rounded-md" />
              <Skeleton className="h-3 w-24 rounded-md" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 dark:text-red-400">Error: {error}</div>;
  }

  const months = generateRollingYearData();

  return (
    <div className="p-6 rounded-2xl border-2 dark:bg-[#12121A] dark:text-gray-200 dark:border-white/20 bg-white text-gray-900">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-lg font-light">{stats.totalSubmissions.toLocaleString()} submissions</h2>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Total active days: <span className="text-gray-900 dark:text-gray-200">{stats.totalActiveDays}</span>
        </div>
      </div>
      <div className="relative overflow-auto">
        <div className="flex gap-3 justify-center">
          {months.map((month, idx) => (
            <div key={`${month.name}-${month.year}-${idx}`} className="flex flex-col">
              <div className="grid grid-rows-7 grid-flow-col gap-[2px]">
                {Array.from({ length: 7 }).map((_, weekday) => (
                  <div key={weekday} className="flex gap-[2px]">
                    {month.days
                      .filter((d) => d.weekday === weekday)
                      .map((d, i) =>
                        !d.date ? (
                          <div key={i} className="w-[12px] h-[12px] bg-transparent" />
                        ) : (
                          <div
                            key={d.date}
                            className={`w-[12px] h-[12px] rounded ${getColorClass(
                              heatmapData.find((item) => item.date === d.date)?.count || 0
                            )} relative group transition-colors duration-200`}
                          >
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block z-50">
                              <div className="px-3 py-2 rounded border text-xs shadow-lg whitespace-nowrap bg-white text-gray-900 dark:bg-[#1C1C1C] dark:text-gray-200 dark:border-gray-700">
                                {`${heatmapData.find((item) => item.date === d.date)?.count || 0} submissions on ${new Date(
                                  d.date
                                ).toLocaleDateString("en-US", {
                                  month: "long",
                                  day: "numeric",
                                  year: "numeric",
                                })}`}
                              </div>
                            </div>
                          </div>
                        )
                      )}
                  </div>
                ))}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-2 ml-5">{month.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
