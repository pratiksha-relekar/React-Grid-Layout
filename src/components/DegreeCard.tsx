import React from 'react';

const DegreeCard: React.FC = () => {
  return (
    <div className="bg-card-blue rounded-xl p-6 shadow-card relative h-full">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-2xl font-semibold">Degree</h2>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          NEW
        </span>
      </div>
      
      <p className="text-gray-600 text-sm mb-6">
        Explore online degree courses from top universities
      </p>

      <ul className="space-y-3 mb-6">
        <li className="flex items-center text-sm">
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
          3x Salary Boost
        </li>
        <li className="flex items-center text-sm">
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
          Learn While You Earn
        </li>
        <li className="flex items-center text-sm">
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
          Govt. Approved
        </li>
      </ul>

      <div className="mt-auto">
        <img 
          src="/images/d1.jpg" 
          alt="Graduates" 
          className="w-full h-40 object-cover rounded-lg shadow-sm" 
        />
      </div>
    </div>
  );
};

export default DegreeCard; 