
import React from "react";

export default function ToolCard({ tool }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow border border-gray-200 hover:shadow-lg transition">
      
      {/* Thumbnail */}
      <img
        src={tool.image}
        alt={tool.name}
        className="w-16 h-16 rounded-lg object-cover mb-4"
      />

      {/* Title */}
      <h3 className="font-semibold text-xl">{tool.name}</h3>

      {/* Category */}
      <p className="inline-block px-3 py-1 bg-gray-100 rounded-md text-gray-700 text-sm mt-2">
        {tool.category}
      </p>

      {/* Description */}
      <p className="mt-3 text-gray-600 text-sm">{tool.description}</p>

      {/* Footer Stats */}
      <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
        <span>⭐ {tool.rating}</span>
        <span>{tool.users}</span>
        {tool.premium && (
          <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-md">
            Premium
          </span>
        )}
      </div>

      {/* CTA Button */}
      <button className="mt-4 bg-orange-500 text-white w-full py-2 rounded-lg hover:bg-orange-600">
        Try Now
      </button>
    </div>
  );
}
