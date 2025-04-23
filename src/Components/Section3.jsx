import { useQuery } from "@tanstack/react-query";
import React from "react";
import { GetMainCategory } from "../Services/MainCategory/index,jsx";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@mui/material";
import SliderSkeleton from "./Skeleton";

const Section3 = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["booksandmore"],
    queryFn: () => GetMainCategory(),
  });

  // console.log(data,"data from book")

  const navigate = useNavigate()

  const handleClick = (p_id,v_id,slug) => {
    navigate(`/details/${p_id}/${v_id}/${slug}`);
  };

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

  
    responsive: [
      {
        breakpoint: 1536, 
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1280, 
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768, 
        settings: { slidesToShow: 3},
      },
      {
        breakpoint: 640, 
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <>
      <div className="h-full w-[99%] mx-auto flex flex-col lg:flex-row gap-2">
        <div className="w-full lg:w-[75%]">
          <div className="h-[10vh] w-full flex justify-between p-4 items-center bg-[#F3F4F6]">
            <p className="text-base sm:text-lg md:text-xl font-semibold">Book & More</p>
            <p  onClick={()=>navigate("/filter",{state:data?.data?.data[0]?.id})} className="text-base sm:text-lg md:text-xl">See All</p>
          </div>
          {
  isLoading ? (
    
      <SliderSkeleton/>
  
  ) : (
    <Slider {...settings} className="w-full px-4">
      {data?.data?.data[0]?.product_deatils?.length > 0 &&
        data.data.data[0].product_deatils.map((item, index) => (
          <div
            key={index}
            className="!w-[40vw] sm:!w-[24vw] md:!w-[30vw] lg:!w-[18vw] xl:!w-[16vw] m-2 overflow-hidden border border-gray-300 rounded-xl p-3 shadow-sm bg-white relative"
            onClick={() => handleClick(item.id,item?.variant_id,item?.slug)}
          >
            <img
              src={item?.variant_image}
              alt="Product"
              className="h-[25vh] sm:h-[28vh] w-full object-contain rounded-lg hover:scale-105 transition-all duration-500"
            />
            <div className="mt-2 space-y-1">
              <p className="text-xs sm:text-sm font-semibold truncate">
                {item.variant_name?.substring(0, 50)}...
              </p>
              <p className="text-green-500 text-xs sm:text-sm font-medium">In Stock</p>
              <p className="text-sm sm:text-md font-bold text-gray-800">₹{item.price}</p>
              <div className="flex items-center justify-between flex-wrap gap-2 mt-1">
                <div className="flex items-center">
                  <span className="line-through text-gray-500 text-xs sm:text-sm">
                    ₹{item.actual_price}
                  </span>
                  <span className="bg-green-500 text-white hover:bg-red-600 hover:text-white text-xs font-bold px-1 mx-1 py-1 rounded">
                  0%off
                  </span>
                </div>
                <button className="px-3 py-2 rounded-2xl bg-green-600 text-white text-xs sm:text-sm font-semibold hover:bg-red-600 transition-all duration-300">
                  ADD NOW
                </button>
              </div>
            </div>
            {/* <div className="absolute top-0 lg:-right-5 z-50 w-[45%] lg:-left-6 text-center font-semibold text-white lg:-rotate-35 -rotate-28 -left-2 h-[10%] bg-red-500 text-shadow-xs text-shadow-red-700 pt-1">
              {item?.discount_percent}%
            </div> */}
          </div>
        ))}
    </Slider>
  )
}

        </div>
        <div className="w-full lg:w-[24%] mt-4 lg:mt-0 lg:block hidden">
          <img
            className="h-full w-full object-cover rounded-md"
            src="https://crazzyhub.s3.amazonaws.com/media/maincat/image/tv_3PbwT80_1.jpg"
          />
        </div>
      </div>
    </>
  );
};

export default Section3;
