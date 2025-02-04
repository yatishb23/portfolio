"use client";

import React from "react";
import {
  LineChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface RatingData {
  date: string; // Date in YYYY-MM-DD format
  rating: number; // User's rating
  contest: string; // Contest name
}

interface RatingGraphProps {
  ratingData: RatingData[];
}

// Custom tooltip component with dark minimal styling
const CustomTooltip: React.FC<any> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const contest = payload[0].payload.contest;
    const rating = payload[0].value;
    return (
      <div className="bg-gray-800 border border-gray-700 rounded p-2 shadow">
        <p className="text-xs text-gray-300">{`Contest: ${contest}`}</p>
        <p className="text-xs text-gray-100">{`Rating: ${rating}`}</p>
      </div>
    );
  }
  return null;
};

const RatingGraph: React.FC<RatingGraphProps> = ({ ratingData }) => {
  return (
    <div className="w-full h-[400px] p-6 bg-gray-900 rounded-2xl border border-gray-800 shadow-lg backdrop-blur-sm">
      <h2 className="text-xl font-bold mb-4 text-gray-100">
        User Rating Over Time
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={ratingData}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          {/* Remove background grid by not including CartesianGrid */}
          <CartesianGrid strokeDasharray="3 3" stroke="transparent" />
          
          {/* Hide the X-axis */}
          <XAxis
            tick={{ fill: "transparent" }}
            // axisLine={{ stroke: "transparent" }}
            tickLine={false}
            dataKey="date"
            // tick={{ fill: "#cccccc", fontSize: 12 }}
            axisLine={{ stroke: "#555555" }}
          />
          
          <YAxis
            tick={{ fill: "#aaaaaa", fontSize: 12 }}
            axisLine={{ stroke: "#2e2e2e" }}
            domain={["auto", "auto"]}
          />
          
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ stroke: "#2e2e2e", strokeWidth: 2, fill: "rgba(46,46,46,0.2)" }}
          />
          
          <Legend
            wrapperStyle={{ paddingTop: "10px" }}
            formatter={(value) => (
              <span className="text-xs text-gray-300">{value}</span>
            )}
          />
          
          {/* Area fill below the line */}
          
          
          {/* Line on top without dots */}
          <Line
            type="monotone"
            dataKey="rating"
            stroke="#bbbbbb"
            strokeWidth={2}
            dot={false}
            activeDot={false}
          />
          <Area
            type="monotone"
            dataKey="rating"
            stroke="none"
            fill="#000000"
            fillOpacity={0.4}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingGraph;
