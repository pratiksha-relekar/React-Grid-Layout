import React from 'react';

const DegreeCard: React.FC = () => {
  return (
    <div className="bg-sky-100 rounded-xl p-6 shadow-card relative h-full">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-2xl font-semibold">Degree</h2>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-sky-200 text-sky-700">
          NEW
        </span>
      </div>
      
      <p className="text-gray-600 text-sm mb-6">
        Explore online degree courses from top universities
      </p>

      <ul className="space-y-3 mb-6">
        <li className="flex items-center text-sm">
          <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mr-2"></span>
          3x Salary Boost
        </li>
        <li className="flex items-center text-sm">
          <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mr-2"></span>
          Learn While You Earn
        </li>
        <li className="flex items-center text-sm">
          <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mr-2"></span>
          Govt. Approved
        </li>
      </ul>

      <div className="mt-auto">
        <img 
          src="/images/d1.jpg" 
          alt="Graduates" 
          className="w-full h-40 object-cover rounded-lg shadow-sm mt-39." 
        />
      </div>

      <div className="absolute bottom-[20px] right-5 flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                🎓
              </div>
              <div className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                💡
              </div>
              <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                📚
              </div>
              <div className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                🌟
              </div>
            </div>

    </div>

  

  );
};

export default DegreeCard; 