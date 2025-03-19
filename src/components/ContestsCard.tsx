import React from 'react';

const ContestsCard: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-orange-100 via-amber-50 to-orange-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full w-[660px] border border-orange-200/50">
      <div className="flex justify-between">
        <div className="flex-1">
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-2xl font-semibold text-orange-800">Contests</h2>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-300 text-orange-800">
              NEW
            </span>
          </div>
          
          <p className="text-orange-800 text-sm mb-6 max-w-md">
            Explore free competitions, Showcase your skills & Win exciting rewards
          </p>

          <div className="flex items-center space-x-6 mb-4">
            <img src="/images/3d.jpg" alt="PwC" className="h-8 hover:scale-110 transition-transform duration-300" />
            <img src="/images/3d3.jpg" alt="Company" className="h-8 hover:scale-110 transition-transform duration-300" />
            <img src="/images/content2.jpg" alt="Company" className="h-8 hover:scale-110 transition-transform duration-300" />
          </div>
        </div>

        <div className="flex-1 flex justify-end">
          <div className="relative w-64">
            <img 
              src="/images/content.jpg" 
              alt="Contest Illustration" 
              className="w-full object-contain hover:scale-105 transition-transform duration-300" 
            />
            <div className="absolute bottom-0 right-0 flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                🏆
              </div>
              <div className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
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