import React from "react";

export default function StatsSection({ stats = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-[#fff8e8] border border-[#f2e6c9] p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
        >
          <h3 className="text-sm text-gray-600 flex items-center justify-between">
            {item.title}
            {item.icon && <item.icon className="w-5 h-5 text-gray-500" />}
          </h3>

          <p className="text-3xl font-bold mt-2 text-gray-900">{item.value}</p>
          <p className="text-sm text-gray-500">{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
