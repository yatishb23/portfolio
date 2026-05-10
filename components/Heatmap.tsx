"use client";

import { useState, useEffect } from "react";

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
  const [hoveredData, setHoveredData] = useState<{
    count: number;
    date: string;
  } | null>(null);
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
          const res = await fetch(
            `/api/leetcode?username=${username}&year=${year}`,
          );
          if (!res.ok) {
            if (year === endDate.getFullYear())
              throw new Error(`Failed to fetch data for ${year}`);
            continue;
          }
          const data = await res.json();
          const calendarObj = data?.submissionCalendar
            ? JSON.parse(data.submissionCalendar)
            : {};
          const parsedData: HeatmapData[] = Object.entries(calendarObj).map(
            ([ts, count]) => {
              const d = new Date(Number(ts) * 1000);
              return {
                date: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`,
                count: Number(count),
              };
            },
          );
          allData = allData.concat(parsedData);
          if (year === endDate.getFullYear())
            setStats((p) => ({ ...p, activeStreak: data.streak || 0 }));
        }

        const filtered = allData.filter((item) => {
          const d = new Date(item.date);
          return d >= startDate && d <= endDate;
        });
        setHeatmapData(filtered);
        setStats((p) => ({
          ...p,
          totalSubmissions: filtered.reduce((s, i) => s + i.count, 0),
          totalActiveDays: filtered.filter((i) => i.count > 0).length,
        }));
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [username]);

  const getColor = (count: number) => {
    if (count === 0) return "bg-zinc-900";
    if (count <= 3) return "bg-zinc-700";
    if (count <= 6) return "bg-zinc-500";
    if (count <= 9) return "bg-zinc-400";
    return "bg-zinc-200";
  };

  const generateMonths = () => {
    const { start, end } = dateRange;
    const months = [];
    const cur = new Date(start.getFullYear(), start.getMonth(), 1);
    while (cur <= end) {
      const month = cur.getMonth(),
        year = cur.getFullYear();
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const monthData = {
        name: firstDay.toLocaleString("default", { month: "short" }),
        year,
        days: [] as { date: string; weekday: number }[],
      };
      for (let i = 0; i < firstDay.getDay(); i++)
        monthData.days.push({ date: "", weekday: i });
      for (let d = 1; d <= lastDay.getDate(); d++) {
        const date = new Date(year, month, d);
        if (date >= start && date <= end) {
          const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
          monthData.days.push({ date: dateStr, weekday: date.getDay() });
        }
      }
      if (monthData.days.some((d) => d.date)) months.push(monthData);
      cur.setMonth(cur.getMonth() + 1);
    }
    return months;
  };

  if (loading)
    return (
      <div className="animate-pulse space-y-4">
        <div className="flex gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="font-mono text-[9px] text-zinc-700 tracking-widest mb-2">
                ···
              </span>
              <div className="grid grid-rows-7 gap-1">
                {Array.from({ length: 7 }).map((_, j) => (
                  <div key={j} className="w-3 h-3 rounded-[2px] bg-zinc-800" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );

  if (error)
    return (
      <div className="font-mono text-[11px] text-zinc-600 border border-zinc-800 rounded-[4px] px-4 py-3">
        Error: {error}
      </div>
    );

  const months = generateMonths();

  return (
    <div className="space-y-6">
      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3">
        {[
          {
            value: stats.totalSubmissions.toLocaleString(),
            label: "Submissions",
          },
          { value: stats.activeStreak, label: "Day streak" },
          { value: stats.totalActiveDays, label: "Active days" },
        ].map((s, i) => (
          <div
            key={i}
            className="bg-zinc-900 border border-zinc-800 rounded-[5px] px-4 py-3"
          >
            <div className="font-mono text-lg font-medium text-zinc-100 leading-none mb-1">
              {s.value}
            </div>
            <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-zinc-600">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Heatmap grid */}
      <div className="overflow-x-auto pb-2 scrollbar-hide">
        <div className="flex gap-3 min-w-max">
          {months.map((month, idx) => (
            <div
              key={`${month.name}-${month.year}-${idx}`}
              className="flex flex-col"
            >
              <div className="grid grid-rows-7 grid-flow-col gap-1">
                {Array.from({ length: 7 }).map((_, weekday) => (
                  <div key={weekday} className="flex gap-1">
                    {month.days
                      .filter((d) => d.weekday === weekday)
                      .map((d, i) =>
                        !d.date ? (
                          <div key={i} className="w-3 h-3" />
                        ) : (
                          <div
                            key={d.date}
                            onMouseEnter={() =>
                              setHoveredData({
                                count:
                                  heatmapData.find(
                                    (item) => item.date === d.date,
                                  )?.count || 0,
                                date: d.date,
                              })
                            }
                            onMouseLeave={() => setHoveredData(null)}
                            className={`w-3 h-3 rounded-[2px] ${getColor(heatmapData.find((item) => item.date === d.date)?.count || 0)} cursor-pointer hover:scale-125 transition-transform`}
                          />
                        ),
                      )}
                  </div>
                ))}
              </div>
              <div className="font-mono text-[8px] tracking-widest uppercase text-zinc-700 mt-2 text-center">
                {month.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend + hover */}
      <div className="flex items-center justify-between border-t border-zinc-800 pt-4">
        <div className="h-5 flex items-center">
          {hoveredData ? (
            <span className="font-mono text-[10px] text-zinc-400 tracking-wide">
              {hoveredData.count} submissions ·{" "}
              {new Date(hoveredData.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          ) : (
            <span className="font-mono text-[10px] text-zinc-700 tracking-wide">
              hover for details
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-[9px] text-zinc-700">less</span>
          <div className="flex gap-1">
            {[0, 3, 6, 9, 12].map((v) => (
              <div key={v} className={`w-3 h-3 rounded-[2px] ${getColor(v)}`} />
            ))}
          </div>
          <span className="font-mono text-[9px] text-zinc-700">more</span>
        </div>
      </div>
    </div>
  );
}
