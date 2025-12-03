import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>Dashboard</li>
        <li>AI Tools</li>
        <li>Categories</li>
        <li>Favorites</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;
