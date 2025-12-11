import React from 'react';
import { Search, Wand2 } from "lucide-react";
// import { PenTool } from "lucide-react"
import Header from '../components/layout/Header';
import SearchBar from '../components/layout/SearchBar';

function Home()
{ 
    return (
        <>  
        <Header 
        title="Welcome to AI Toolbox"
        subtitle="Explore a variety of AI-powered tools to enhance your productivity and creativity."
        bgcolor="bg-white-0"
      />
      <SearchBar />
        {/* <div className="bg-green-500 text-white p-4">Home Page</div> */}
        </>
    ); 
}

export default Home;