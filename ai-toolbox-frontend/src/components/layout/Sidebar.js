import React from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  TrendingUp,
  Heart,
  BrainCircuit,
  PenTool,
  Scissors,
  Video,
  Image as ImageIcon,
  Music,
  Code,
  BarChart,
} from "lucide-react";

const menuItem =
  "flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer transition-all duration-200 text-gray-700 hover:bg-orange-200/60";

const menuItemActive =
  "flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer bg-orange-400 text-white shadow-md";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen fixed left-0 top-0 bg-[#f9f2e8] border-r border-orange-200 p-5 overflow-y-auto shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">AI Toolbox</h2>

      {/* Main Navigation */}
      <nav className="space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? menuItemActive : menuItem)}
        >
          <Home size={18} />
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/trending"
          className={({ isActive }) => (isActive ? menuItemActive : menuItem)}
        >
          <TrendingUp size={18} />
          <span>Trending</span>
        </NavLink>

        <NavLink
          to="/favorites"
          className={({ isActive }) => (isActive ? menuItemActive : menuItem)}
        >
          <Heart size={18} />
          <span>Favorites</span>
        </NavLink>

        <NavLink
          to="/insights"
          className={({ isActive }) => (isActive ? menuItemActive : menuItem)}
        >
          <BrainCircuit size={18} />
          <span>AI Insights</span>
        </NavLink>
      </nav>

      {/* Category Title */}
      <p className="text-xs font-semibold text-gray-500 mt-6 mb-2 px-2">
        CATEGORIES
      </p>

      {/* Categories */}
      <nav className="space-y-2">
        <NavLink
          to="/writing-tools"
          className={({ isActive }) => (isActive ? menuItemActive : menuItem)}
        >
          <PenTool size={18} />
          <span>Writing Tools</span>
        </NavLink>

        <NavLink
          to="/editing-tools"
          className={({ isActive }) => (isActive ? menuItemActive : menuItem)}
        >
          <Scissors size={18} />
          <span>Editing Tools</span>
        </NavLink>

        <NavLink
          to="/video-tools"
          className={({ isActive }) => (isActive ? menuItemActive : menuItem)}
        >
          <Video size={18} />
          <span>Video Creation</span>
        </NavLink>

        <NavLink
          to="/image-tools"
          className={({ isActive }) =>
            isActive ? menuItemActive : menuItem
          }
        >
          <ImageIcon size={18} />
          <span>Image Generation</span>
        </NavLink>

        <NavLink
          to="/audio-tools"
          className={({ isActive }) => (isActive ? menuItemActive : menuItem)}
        >
          <Music size={18} />
          <span>Audio Tools</span>
        </NavLink>

        <NavLink
          to="/code-tools"
          className={({ isActive }) => (isActive ? menuItemActive : menuItem)}
        >
          <Code size={18} />
          <span>Code Assistants</span>
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) => (isActive ? menuItemActive : menuItem)}
        >
          <BarChart size={18} />
          <span>Analytics</span>
        </NavLink>
      </nav>
    </aside>
  );
}
