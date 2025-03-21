
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export const ProfileCompletion: React.FC = () => {
  const progress = 67;
  const data = [
    { name: "Completed", value: progress },
    { name: "Remaining", value: 100 - progress }
  ];
  const COLORS = ["hsl(var(--primary))", "hsl(var(--muted))"];

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-24 w-24">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={30}
              outerRadius={40}
              paddingAngle={5}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="text-xl font-bold">{progress}%</span>
          </div>
        </div>
      </div>
      <p className="text-sm text-center mt-2 font-medium">Profile Completion</p>
    </div>
  );
};
