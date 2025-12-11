import React from 'react';
import { Search, Wand2 } from "lucide-react";
// import { PenTool } from "lucide-react"
import Header from '../components/layout/Header';
import SearchBar from '../components/layout/SearchBar';
import StatsSection from "../components/common/stat";
import ToolCard from "../components/common/statscard";

import { Clock, BarChart3, Box } from "lucide-react";

function Home()
{ const stats = [
    {
      title: "Total Tools",
      value: "150+",
      subtitle: "AI tools available",
      icon: Box
    },
    {
      title: "Categories",
      value: "12",
      subtitle: "Different categories",
      icon: BarChart3
    },
    {
      title: "Recently Added",
      value: "8",
      subtitle: "New tools this week",
      icon: Clock
    }
  ];

  const tools = [
    {
      name: "ChatGPT",
      category: "Writing Tools",
      image: "/images/chatgpt.png",
      description: "Advanced conversational assistant for writing.",
      rating: 4.8,
      users: "100M+ users",
      premium: false,
    },
    {
      name: "MidJourney",
      category: "Image Generation",
      image: "/images/midjourney.jpg",
      description: "Create stunning AI-generated art.",
      rating: 4.7,
      users: "15M+ users",
      premium: true,
    },
    {
      name: "ChatGPT",
      category: "Writing Tools",
      image: "/images/chatgpt.png",
      description: "Advanced conversational assistant for writing.",
      rating: 4.8,
      users: "100M+ users",
      premium: false,
    },
    {
      name: "MidJourney",
      category: "Image Generation",
      image: "/images/midjourney.jpg",
      description: "Create stunning AI-generated art.",
      rating: 4.7,
      users: "15M+ users",
      premium: true,
    },
    {
      name: "ChatGPT",
      category: "Writing Tools",
      image: "/images/chatgpt.png",
      description: "Advanced conversational assistant for writing.",
      rating: 4.8,
      users: "100M+ users",
      premium: false,
    },
    {
      name: "MidJourney",
      category: "Image Generation",
      image: "/images/midjourney.jpg",
      description: "Create stunning AI-generated art.",
      rating: 4.7,
      users: "15M+ users",
      premium: true,
    }
  ];

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
        </> 
    ); 
}

export default Home;