import React from 'react';

const XclusivesCard: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-sky-200 via-blue-100 to-sky-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full w-[420px] border border-sky-300/50">
      <h2 className="text-2xl font-semibold mb-4 text-sky-900">Xclusives</h2>
      
      <p className="text-sky-800 text-sm mb-8">
        Curated events & Live sessions with industry experts
      </p>

      <div className="flex flex-wrap gap-4">
        <div className="flex -space-x-3">
          <img
            className="w-10 h-10 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform duration-300"
            src="/images/c1.png"
            alt="Industry Expert"
          />
          <img
            className="w-10 h-10 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform duration-300"
            src="/images/c2.png"
            alt="Industry Expert"
          />
          <img
            className="w-10 h-10 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform duration-300"
            src="/images/c3.png"
            alt="Industry Expert"
          />
          <img
            className="w-10 h-10 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform duration-300"
            src="/images/c4.png"
            alt="Industry Expert"
          />
          <img
            className="w-10 h-10 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform duration-300"
            src="/images/c8.png"
            alt="Industry Expert"
          />
          <div className="w-10 h-10 rounded-full bg-sky-300 border-2 border-white flex items-center justify-center text-sky-700 text-sm font-medium shadow-md hover:scale-110 transition-transform duration-300">
            +8
          </div>
        </div>
      </div>
    </div>
  );
};

export default XclusivesCard; 