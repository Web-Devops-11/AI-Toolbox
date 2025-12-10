import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 ml-64 p-6 bg-[#fffaf0] min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
