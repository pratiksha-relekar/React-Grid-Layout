import React from 'react';

const BlogCard: React.FC = () => {
  return (
    <div className="bg-card-pink rounded-xl p-6 shadow-card h-full w-[400px] ">
      <h2 className="text-2xl font-semibold mb-4">Blog</h2>
      
      <p className="text-gray-600 text-sm mb-6">
        Guidance for securing your dream job
      </p>

      <ul className="space-y-3 mb-6">
        <li className="flex items-center">
          <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-3"></span>
          <span className="text-gray-700 text-sm">Career Advice</span>
        </li>
        <li className="flex items-center">
          <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-3"></span>
          <span className="text-gray-700 text-sm">Interview Advice</span>
        </li>
        <li className="flex items-center">
          <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-3"></span>
          <span className="text-gray-700 text-sm">HR Insights</span>
        </li>
      </ul>

      
    </div>
  );
};

export default BlogCard; 