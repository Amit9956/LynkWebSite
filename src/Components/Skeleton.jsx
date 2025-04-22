import React from "react";
import { Skeleton } from "@mui/material";

const SliderSkeleton = ({ count = 4 }) => {
  return (
    <>
      {/* {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="!w-[40vw] sm:!w-[24vw] md:!w-[30vw] lg:!w-[18vw] xl:!w-[16vw] m-2 overflow-hidden border border-gray-200 rounded-xl p-3 shadow-sm bg-white"
        >
          <Skeleton
            variant="rectangular"
            width="100%"
            height={150}
            sx={{ borderRadius: 2, mb: 2 }}
          />
          <Skeleton variant="text" width="75%" height={20} />
          <Skeleton variant="text" width="50%" height={18} />
          <Skeleton variant="text" width="30%" height={20} />
          <div className="flex justify-between items-center gap-2 mt-2">
            <Skeleton variant="text" width="40%" height={18} />
            <Skeleton
              variant="rectangular"
              width={60}
              height={25}
              sx={{ borderRadius: 10 }}
            />
          </div>
        </div>
      ))} */}
     
      <div className="flex fl justify-center w-full px-4">
      {Array.from({ length: 4 }).map((_, index) => (
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
  </>)
  }

export default SliderSkeleton;
