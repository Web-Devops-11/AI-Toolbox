import React from "react";
import { Heart } from "lucide-react";
 
export default function FavoritesSection({ items = [] }) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Heart className="w-6 h-6 text-red-500" />
        Favorites
      </h2>

      {items.length === 0 ? (
        <p className="text-gray-500">No favorite tools saved yet.</p>
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

              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                View Tool
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
