import React from 'react';

const ViewProfile: React.FC = () => {
  return (
    <div className="bg-[#E5F3FF] rounded-lg shadow-sm p-4 flex flex-col items-center justify-center mx-auto lg:ml-auto h-[220px]">
      <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
        <img 
          src="/images/pro.jpg" 
          alt="Profile" 
          className="w-full h-full object-cover"
        />
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-base font-medium hover:bg-blue-700 transition-colors">
        View Profile
      </button>
    </div>
  );
};

export default ViewProfile; 