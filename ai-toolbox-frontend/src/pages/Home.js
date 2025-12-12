import React from 'react';
import { Search, Wand2 } from "lucide-react";
// import { PenTool } from "lucide-react"
import Header from '../components/layout/Header';
import SearchBar from '../components/layout/SearchBar';
import StatsSection from "../components/common/stat";
import ToolCard from "../components/common/statscard";
import { useEffect, useState, useRef } from "react";
import { getHomeData } from "../api/home";




function Home()
{ 
  // const [stats, setStats] = useState([]);
  // const [tools, setTools] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await getHomeData();
  //     setStats(data.stats);
  //     setTools(data.tools);
  //   }
  //   fetchData();
  // }, []);
  // const [tools, setTools] = useState([]);
  // const [page, setPage] = useState(0);
  // const loaderRef = useRef(null);

  // useEffect(() => {
  //   loadTools();
  // }, [page]);
  const [stats, setStats] = useState([]);
  const [tools, setTools] = useState([]);
  const [page, setPage] = useState(0);
  const [lastPage, setLastPage] = useState(false);

  const loaderRef = useRef(null);

  // Load data when page changes
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

  // Infinite Scroll Intersection Observer
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


  async function loadTools() {
    const data = await getHomeData(page, 10);
    setTools((prev) => [...prev, ...data.content]);
  
  }

  // Observer to detect scroll end
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, []);

    return (
        <>  
        <Header 
        title="Welcome to AI Toolbox"
        subtitle="Explore a variety of AI-powered tools to enhance your productivity and creativity."
        bgcolor="bg-white-0"
      />
      <SearchBar />
        {/* <div className="bg-green-500 text-white p-4">Home Page</div> */}
      <div>
      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* Featured Tools */}
      <h2 className="text-2xl font-bold mt-10 mb-4">Featured Tools</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, i) => (
          <ToolCard key={i} tool={tool} />
        ))}
      </div>
    </div>
    {/* Infinite Scroll Trigger */}
      {!lastPage && (
        <div ref={loaderRef} className="h-10 flex justify-center items-center">
          <p className="text-gray-500">Loading more tools...</p>
        </div>
      )}
        </> 
    ); 
}

export default Home;