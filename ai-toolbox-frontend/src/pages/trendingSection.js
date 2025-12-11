import React from "react";

export default function TrendingSection({ items = [] }) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">🔥 Trending</h2>

      {items.length === 0 ? (
        <p className="text-gray-500">No trending tools available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((tool, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow border border-gray-200 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="w-14 h-14 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{tool.name}</h3>
                  <p className="text-sm text-gray-600">{tool.category}</p>
                </div>
              </div>

              <p className="mt-3 text-gray-700 text-sm">{tool.description}</p>

              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                Try Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
