import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [jobsDropdown, setJobsDropdown] = useState(false);
  const [careerDropdown, setCareerDropdown] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);

  return (
    <nav className="py-3 px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <img src="/images/apna.png" alt="Logo" className="h-8 w-auto" />

          {/* Home */}
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
            Home
          </a>

          {/* Jobs Dropdown */}
          <div className="relative">
            <button
              className="text-gray-700 hover:text-gray-900 font-medium flex items-center"
              onMouseEnter={() => setJobsDropdown(true)}
              onMouseLeave={() => setJobsDropdown(false)}
            >
              Jobs
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {jobsDropdown && (
              <div
                className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50"
                onMouseEnter={() => setJobsDropdown(true)}
                onMouseLeave={() => setJobsDropdown(false)}
              >
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Search Jobs</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Job Categories</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Companies</a>
              </div>
            )}
          </div>

          {/* Career Compass Dropdown */}
          <div className="relative">
            <button
              className="text-gray-700 hover:text-gray-900 font-medium flex items-center"
              onMouseEnter={() => setCareerDropdown(true)}
              onMouseLeave={() => setCareerDropdown(false)}
            >
              Career Compass
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {careerDropdown && (
              <div
                className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50"
                onMouseEnter={() => setCareerDropdown(true)}
                onMouseLeave={() => setCareerDropdown(false)}
              >
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Career Guide</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Resume Builder</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Career Assessment</a>
              </div>
            )}
          </div>

          {/* Contests */}
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
            Contests
          </a>

          {/* Degree */}
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
            Degree
          </a>
        </div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            className="flex items-center space-x-2 rounded-full hover:bg-gray-100 p-2"
            onMouseEnter={() => setProfileDropdown(true)}
            onMouseLeave={() => setProfileDropdown(false)}
          >
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
              <span className="text-white text-sm">P</span>
            </div>
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {profileDropdown && (
            <div
              className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50"
              onMouseEnter={() => setProfileDropdown(true)}
              onMouseLeave={() => setProfileDropdown(false)}
            >
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Profile</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
              <div className="border-t border-gray-100"></div>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 