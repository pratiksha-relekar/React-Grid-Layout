import React from 'react';

const SearchJobs: React.FC = () => {
  return (
    <div className="bg-purple-100 p-6 rounded-2xl shadow-lg w-[570px] h-[255px] flex flex-col">
      <h2 className="text-2xl font-bold text-center mb-8">Search Jobs</h2>
      <div className="flex justify-center relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search jobs by title, company or skill"
          className="w-full pl-12 p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
        />
      </div>
    </div>
  );
};

export default SearchJobs; 