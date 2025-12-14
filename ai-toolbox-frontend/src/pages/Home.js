import React, { useEffect, useState, useRef } from "react";
import Header from "../components/layout/Header";
import SearchBar from "../components/layout/SearchBar";
import StatsSection from "../components/common/stat";
import ToolCard from "../components/common/statscard";
import { getHomeData } from "../api/home";

import Login from "./Login";
import Signup from "./Signup";

function Home() {
  const [stats, setStats] = useState([]);
  const [tools, setTools] = useState([]);
  const [page, setPage] = useState(0);
  const [lastPage, setLastPage] = useState(false);

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const loaderRef = useRef(null);

  // Load tools
  useEffect(() => {
    loadMore();
  }, [page]);

  async function loadMore() {
    if (lastPage) return;
    const data = await getHomeData(page, 6);
    setStats(data.stats);
    setTools((prev) => [...prev, ...data.tools]);
    setLastPage(data.lastPage);
  }

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !lastPage) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [lastPage]);

  return (
    <>
      <Header
        title="Welcome to AI Toolbox"
        subtitle="Explore a variety of AI-powered tools to enhance your productivity and creativity."
        showAuth={true}
        onLoginClick={() => {
          setShowLogin(true);
          setShowSignup(false);
        }}
        onSignupClick={() => {
          setShowSignup(true);
          setShowLogin(false);
        }}
      />

      <SearchBar />

      <StatsSection stats={stats} />

      <h2 className="text-2xl font-bold mt-10 mb-4">Featured Tools</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, i) => (
          <ToolCard key={i} tool={tool} />
        ))}
      </div>

      {!lastPage && (
        <div ref={loaderRef} className="h-10 flex justify-center items-center">
          <p className="text-gray-500">Loading more tools...</p>
        </div>
      )}

      {/* LOGIN MODAL */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[400px] relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              onClick={() => setShowLogin(false)}
            >
              ✕
            </button>
            <Login />
          </div>
        </div>
      )}

      {/* SIGNUP MODAL */}
      {showSignup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[400px] relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              onClick={() => setShowSignup(false)}
            >
              ✕
            </button>
            <Signup />
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
