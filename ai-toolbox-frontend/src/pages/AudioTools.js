import React from 'react';
import Header from '../components/layout/Header.js';
import SearchBar from '../components/layout/SearchBar.js';
import { Music } from 'lucide-react'; 

export default function AudioTools() {
  return (
    <>  
        <Header 
        title="Audio Tools"
        subtitle="AI-powered audio editors, enhancers, and content generators"
        Icon={Music}
        bgcolor="bg-white-0"
      />
      <SearchBar />
        {/* <div className="bg-green-500 text-white p-4">Home Page</div> */}
        </>
  );
}