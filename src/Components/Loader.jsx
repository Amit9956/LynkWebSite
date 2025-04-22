



import React from "react";

export const Loader = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse !w-[40vw] sm:!w-[24vw] md:!w-[30vw] lg:!w-[18vw] xl:!w-[16vw] m-2 overflow-hidden border border-gray-200 rounded-xl p-3 shadow-sm bg-white"
        >
          <div className="h-[25vh] sm:h-[28vh] w-full bg-gray-200 rounded-lg mb-3"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-5 bg-gray-200 rounded w-1/3 mb-3"></div>
          <div className="flex justify-between items-center gap-2">
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-6 bg-gray-300 rounded-xl w-20"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

