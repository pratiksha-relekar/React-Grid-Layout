import React from 'react';

const AIResumeBuilder: React.FC = () => {
  return (
    <div className="bg-card-yellow rounded-xl p-6 shadow-card h-full ">
      <h2 className="text-2xl font-semibold mb-6">AI Resume Builder</h2>

      <ul className="space-y-4 mb-8">
        <li className="flex items-center">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></span>
          <span className="text-gray-700 text-sm">Create Resume</span>
        </li>
        <li className="flex items-center">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></span>
          <span className="text-gray-700 text-sm">Analyse Resume</span>
        </li>
        <li className="flex items-center">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></span>
          <span className="text-gray-700 text-sm">Generate Cover Letter</span>
        </li>
      </ul>

      <div className="relative mt-auto">
        <img 
          src="/images/reume2.jpg" 
          alt="Resume Preview" 
          className="w-full h-50 object-contain rounded-lg" 
        />
        <div className="absolute -bottom-2 -right-2">
          <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-lg">
            ✨
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIResumeBuilder; 