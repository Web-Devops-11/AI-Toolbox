import React from "react";
import { Search, Bell, Menu, BrainCircuit } from "lucide-react";

function Header() {
    return (
        <header className="w-full bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-50">

            {/* Left: Logo + Title */}
            <div className="flex items-center gap-3">
                <img
                    src="/logo512.png"
                    alt="AI Toolbox Logo"
                    className="w-8 h-8"
                />
                <h1 className="text-2xl font-semibold text-gray-800">
                    Welcome to <span className="text-orange-600">AI Toolbox</span>
                </h1>
            </div>

            {/* Middle: Search Bar */}
            <div className="hidden md:flex items-center w-1/3 bg-gray-100 rounded-full px-4 py-2 border border-gray-300">
                <Search className="w-5 h-5 text-gray-500" />
                <input
                    type="text"
                    placeholder="Search AI tools, categories, or features..."
                    className="ml-3 bg-transparent focus:outline-none w-full text-gray-700"
                />
            </div>

            {/* Right: Icons */}
            <div className="flex items-center gap-4">
                <Bell className="w-6 h-6 text-gray-700 cursor-pointer hover:text-gray-900" />
                <Menu className="w-6 h-6 text-gray-700 cursor-pointer md:hidden hover:text-gray-900" />
            </div>
        </header>
    );
}

export default Header;
