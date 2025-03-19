import React from 'react';

const ViewProfile: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-sky-200 via-blue-100 to-sky-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col items-center justify-center mx-auto lg:ml-auto h-[220px] border border-sky-300/50">
      <div className="w-16 h-16 rounded-full overflow-hidden mb-4 hover:scale-110 transition-transform duration-300 shadow-md">
        <img 
          src="/images/pro.jpg" 
          alt="Profile" 
          className="w-full h-full object-cover"
        />
      </div>
      <button className="bg-gradient-to-r from-sky-500 to-blue-500 text-white px-4 py-2 rounded-lg text-base font-medium hover:from-sky-600 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
        View Profile
      </button>
    </div>
  );
};

export default ViewProfile; 