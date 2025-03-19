import React from 'react';
import Navbar from './components/Navbar';
import DegreeCard from './components/DegreeCard';
import ContestsCard from './components/ContestsCard';
import SearchJobs from './components/SearchJobs';
import AIResumeBuilder from './components/AIResumeBuilder';
import XclusivesCard from './components/XclusivesCard';
import BlogCard from './components/BlogCard';
import ViewProfile from './components/ViewProfile';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 w-full">
      {/* Header */}
      <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
        <div className="max-w-[1400px] mx-auto">
          <Navbar />
        </div>
      </header>

      {/* Main Content */}
      <div className="w-full max-w-[1300px] mx-auto px-10 py-8 mt-[60px]">
        <main>
          {/* Top Section - Two Cards and Profile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Degree Card */}
            <div className="flex justify-center">
              <div className="w-[250px] h-[500px]">
                <DegreeCard />
              </div>
            </div>

            {/* Contests Card with Search Below */}
            <div className="flex flex-col">
              <div className="flex justify-start -ml-14 ">
                <div className="w[1500px] h-[220px]">
                  <ContestsCard />
                </div>
              </div>
              <div className="flex justify-start -ml-14 mt-6">
                <div className="w-[1020px] h-[232px]">
                  <SearchJobs />
                </div>
              </div>
            </div>

            {/* Profile Card and AI Resume Builder */}
            <div className="space-y-3.5">
              <div className="flex justify-end">
                <div className="w-[170px] h-[220px]">
                  <ViewProfile />
                </div>
              </div>
              <div className="flex justify-end">
                <div className="w-[250px] h-[500px]">
                  <AIResumeBuilder />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 -mt-[210px]">
            {/* Xclusives Card */}
            <div className="flex justify-center">
              <div className="w-[250px] h-[220px]">
                <XclusivesCard />
              </div>
            </div>

            {/* Blog Card */}
            <div className="flex justify-center lg:col-span-2 -ml-[150px]">
              <div className="w-[420px] h-[220px]">
                <BlogCard />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App; 