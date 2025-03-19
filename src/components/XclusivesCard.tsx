import React from 'react';

const XclusivesCard: React.FC = () => {
  return (
    <div className="bg-card-blue rounded-xl p-6 shadow-card h-full w-[420px] ">
      <h2 className="text-2xl font-semibold mb-4">Xclusives</h2>
      
      <p className="text-gray-600 text-sm mb-8">
        Curated events & Live sessions with industry experts
      </p>

      <div className="flex flex-wrap gap-4">
        <div className="flex -space-x-3">
          <img
            className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
            src="/images/c1.png"
            alt="Industry Expert"
          />
          <img
            className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
            src="/images/c2.png"
            alt="Industry Expert"
          />
          <img
            className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
            src="/images/c3.png"
            alt="Industry Expert"
          />
          <img
            className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
            src="/images/c4.png"
            alt="Industry Expert"
          />
          <img
            className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
            src="/images/c8.png"
            alt="Industry Expert"
          />
          <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-blue-600 text-sm font-medium shadow-sm">
            +8
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default XclusivesCard; 