import React from 'react';
import Header from '../components/layout/Header.js';
import SearchBar from '../components/layout/SearchBar.js';
import { PenTool, Search } from 'lucide-react';

export default function WritingTools() {
  return (
    <>  
        <Header 
        title="Writing Tools"
        subtitle="AI-powered writing assistants, content generators, and text optimization tools"
        Icon={PenTool}
        bgcolor="bg-white-0"
      />
      <SearchBar />
        {/* <div className="bg-green-500 text-white p-4">Home Page</div> */}
        </>
  );
}