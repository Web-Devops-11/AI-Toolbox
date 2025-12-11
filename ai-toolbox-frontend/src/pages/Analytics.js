 import React from 'react';
import Header from '../components/layout/Header.js';
import SearchBar from '../components/layout/SearchBar.js';
import { BarChart } from 'lucide-react';

export default function Analytics() {
  return (
    <div>
      <>  
        <Header 
        title="Analytics Tools"
        subtitle="AI-powered data analyzers, visualization tools, and insights generators"
        Icon={BarChart}
        bgcolor="bg-white-0"
      />
      <SearchBar />
        {/* <div className="bg-green-500 text-white p-4">Home Page</div> */}
        </>
        </div>
  );
}