import React from 'react';

const BlogCard: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-pink-200 via-rose-100 to-pink-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full w-[400px] border border-pink-300/50">
      <h2 className="text-2xl font-semibold mb-4 text-pink-900">Blog</h2>
      
      <p className="text-pink-800 text-sm mb-6">
        Guidance for securing your dream job
      </p>

      <ul className="space-y-3 mb-6">
        <li className="flex items-center hover:translate-x-1 transition-transform duration-300">
          <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-3"></span>
          <span className="text-pink-900 text-sm">Career Advice</span>
        </li>
        <li className="flex items-center hover:translate-x-1 transition-transform duration-300">
          <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-3"></span>
          <span className="text-pink-900 text-sm">Interview Advice</span>
        </li>
        <li className="flex items-center hover:translate-x-1 transition-transform duration-300">
          <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-3"></span>
          <span className="text-pink-900 text-sm">HR Insights</span>
        </li>
      </ul>
    </div>
  );
};

export default BlogCard; 