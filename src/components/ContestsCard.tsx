import React from 'react';

const ContestsCard: React.FC = () => {
  return (
    <div className="bg-[#FFF5EB] rounded-xl p-6 shadow-sm h-full w-[660px]">
      <div className="flex justify-between">
        <div className="flex-1">
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-2xl font-semibold">Contests</h2>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
              NEW
            </span>
          </div>
          
          <p className="text-gray-600 text-sm mb-6 max-w-md">
            Explore free competitions, Showcase your skills & Win exciting rewards
          </p>

          <div className="flex items-center space-x-6 mb-4">
            <img src="/images/3d.jpg" alt="PwC" className="h-8" />
            <img src="/images/3d3.jpg" alt="Company" className="h-8" />
            <img src="/images/content2.jpg" alt="Company" className="h-8" />
          </div>
        </div>

        <div className="flex-1 flex justify-end">
          <div className="relative w-64">
            <img 
              src="/images/content.jpg" 
              alt="Contest Illustration" 
              className="w-full object-contain" 
            />
            <div className="absolute bottom-0 right-0 flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-white">
                🏆
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                💼
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestsCard; 