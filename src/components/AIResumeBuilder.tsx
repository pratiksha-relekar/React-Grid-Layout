import React from 'react';

const AIResumeBuilder: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-200 via-amber-100 to-yellow-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-yellow-300/50">
      <h2 className="text-2xl font-semibold mb-6 text-amber-900">AI Resume Builder</h2>

      <ul className="space-y-4 mb-8">
        <li className="flex items-center hover:translate-x-1 transition-transform duration-300">
          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3"></span>
          <span className="text-amber-900 text-sm">Create Resume</span>
        </li>
        <li className="flex items-center hover:translate-x-1 transition-transform duration-300">
          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3"></span>
          <span className="text-amber-900 text-sm">Analyse Resume</span>
        </li>
        <li className="flex items-center hover:translate-x-1 transition-transform duration-300">
          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3"></span>
          <span className="text-amber-900 text-sm">Generate Cover Letter</span>
        </li>
      </ul>

      <div className="relative mt-auto">
        <img 
          src="/images/reume2.jpg" 
          alt="Resume Preview" 
          className="w-full h-50 object-contain rounded-lg hover:scale-105 transition-transform duration-300" 
        />
        <div className="absolute -bottom-2 -right-2">
          <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-white text-lg hover:scale-110 transition-transform duration-300">
            ✨
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIResumeBuilder; 