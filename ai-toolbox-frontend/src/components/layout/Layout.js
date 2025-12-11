import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex">

      {/* FIXED SIDEBAR */}
      <div className="fixed left-0 top-0 h-screen w-64 bg-white shadow">
        <Sidebar />
      </div>

      {/* MAIN CONTENT WRAPPER */}
      <div className="ml-64 flex-1 min-h-screen bg-[#fffaf0] overflow-x-hidden">

        {/* CONTENT AREA */}
        <main className="p-0">
          <Outlet />
        </main>

      </div>
    </div>
  );
}
