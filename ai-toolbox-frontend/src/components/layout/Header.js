import React from 'react'
import "./Header.css";   // ✔ correct path

function Header() {
  return (
    <>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Content</li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
