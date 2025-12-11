import React from 'react';
import Header from '../components/layout/Header.js';
import SearchBar from '../components/layout/SearchBar.js';
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
} from 'lucide-react';

export default function CodeTools() {
  return (
    <>  
        <Header 
        title="Code Tools"
        subtitle="AI-powered code editors, debuggers, and generators"
        Icon={Code}
        bgcolor="bg-white-0"
      />
      <SearchBar />
        {/* <div className="bg-green-500 text-white p-4">Home Page</div> */}
        </>
  );
}