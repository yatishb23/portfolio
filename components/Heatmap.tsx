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
  const [hoveredData, setHoveredData] = useState<{ count: number; date: string } | null>(null);
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
    if (count === 0) return "bg-neutral-100 dark:bg-neutral-900/50";
    if (count <= 3) return "bg-emerald-200 dark:bg-emerald-900/40";
    if (count <= 6) return "bg-emerald-400 dark:bg-emerald-700/60";
    if (count <= 9) return "bg-emerald-500 dark:bg-emerald-500";
    return "bg-emerald-600 dark:bg-emerald-400";
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
      <div className="p-10 rounded-[3rem] border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 animate-pulse">
        <div className="flex justify-between items-center mb-10">
          <Skeleton className="h-10 w-48 rounded-2xl bg-neutral-200 dark:bg-neutral-800" />
          <Skeleton className="h-6 w-36 rounded-xl bg-neutral-200 dark:bg-neutral-800" />
        </div>
        <div className="flex gap-4 overflow-hidden mask-fade-right">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="grid grid-rows-7 gap-1.5">
                {Array.from({ length: 7 }).map((_, j) => (
                  <Skeleton key={j} className="h-3.5 w-3.5 rounded-sm bg-neutral-200 dark:bg-neutral-800" />
                ))}
              </div>
              <Skeleton className="h-3 w-8 rounded bg-neutral-100 dark:bg-neutral-900 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-10 rounded-[3rem] border border-red-100 dark:border-red-900/30 bg-red-50/50 dark:bg-red-900/10 text-red-600 dark:text-red-400 font-bold text-center">
        Error: {error}
      </div>
    );
  }

  const months = generateRollingYearData();

  return (
    <div className="group p-8 rounded-[3rem] border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 shadow-xl dark:shadow-2xl shadow-neutral-500/5 transition-all duration-500">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-6">
        <div className="space-y-1">
          <h2 className="text-3xl font-black tracking-[-0.05em] text-neutral-950 dark:text-neutral-50">
            {stats.totalSubmissions.toLocaleString()} <span className="text-neutral-400 dark:text-neutral-600">Submissions</span>
          </h2>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
            LeetCode Activity • Past 12 Months
          </p>
        </div>
        
        <div className="flex items-center gap-6 px-5 py-2.5 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-900 shadow-sm transition-transform group-hover:scale-[1.02]">
          <div className="flex flex-col">
            <span className="text-lg font-black text-neutral-900 dark:text-neutral-100">{stats.activeStreak}</span>
            <span className="text-[10px] font-black uppercase tracking-tighter text-neutral-400">Current Streak</span>
          </div>
          <div className="w-px h-6 bg-neutral-100 dark:bg-neutral-900" />
          <div className="flex flex-col">
            <span className="text-lg font-black text-neutral-900 dark:text-neutral-100">{stats.totalActiveDays}</span>
            <span className="text-[10px] font-black uppercase tracking-tighter text-neutral-400">Active Days</span>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-4 min-w-max">
            {months.map((month, idx) => (
              <div key={`${month.name}-${month.year}-${idx}`} className="flex flex-col">
                <div className="grid grid-rows-7 grid-flow-col gap-1.5">
                  {Array.from({ length: 7 }).map((_, weekday) => (
                    <div key={weekday} className="flex gap-1.5">
                      {month.days
                        .filter((d) => d.weekday === weekday)
                        .map((d, i) =>
                          !d.date ? (
                            <div key={i} className="w-3.5 h-3.5" />
                          ) : (
                            <div
                              key={d.date}
                              onMouseEnter={() => setHoveredData({
                                count: heatmapData.find((item) => item.date === d.date)?.count || 0,
                                date: d.date
                              })}
                              onMouseLeave={() => setHoveredData(null)}
                              className={`w-3.5 h-3.5 rounded-[3px] ${getColorClass(
                                heatmapData.find((item) => item.date === d.date)?.count || 0
                              )} cursor-pointer transition-all hover:scale-125 hover:z-10`}
                            />
                          )
                        )}
                    </div>
                  ))}
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-neutral-400 dark:text-neutral-600 mt-3 text-center">
                  {month.name}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Intensity Legend & Hover Info */}
        <div className="mt-6 pt-6 border-t border-neutral-100 dark:border-neutral-900 flex items-center justify-between gap-3">
          <div className="h-6 flex items-center">
            {hoveredData ? (
              <div className="flex items-center gap-2 animate-in fade-in slide-in-from-left-2 duration-300">
                <div className={`w-2 h-2 rounded-full ${getColorClass(hoveredData.count)}`} />
                <span className="text-[10px] font-bold text-neutral-950 dark:text-neutral-50 uppercase tracking-widest">
                  {hoveredData.count} Submissions on {new Date(hoveredData.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </span>
              </div>
            ) : (
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-300 dark:text-neutral-700">
                Hover over a cell for details
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Less</span>
            <div className="flex gap-1.5">
              {[0, 3, 6, 9, 12].map((val) => (
                <div key={val} className={`w-3.5 h-3.5 rounded-[3px] ${getColorClass(val)}`} />
              ))}
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">More</span>
          </div>
        </div>
      </div>
    </div>
  );
}
