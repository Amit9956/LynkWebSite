import { useQuery } from "@tanstack/react-query";
import React from "react";
import { GetMainCategory } from "../Services/MainCategory/index,jsx";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import SliderSkeleton from "./Skeleton";

const Section4 = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["mainCat"],
    queryFn: () => GetMainCategory(),
  });

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
        
        <div className="w-full lg:w-[24%]">
          <img
            className="h-full w-full object-cover rounded-md"
            src="https://crazzyhub.s3.amazonaws.com/media/maincat/image/tv_3PbwT80_1.jpg"
          />
        </div>

       
        <div className="w-full lg:w-[75%]">
          <div className="h-[10vh] w-full flex justify-between p-4 items-center bg-[#F3F4F6]">
            <p className="text-base sm:text-lg md:text-xl font-semibold">Mobiles & Tablets</p>
            <p className="text-base sm:text-lg md:text-xl"  onClick={()=>navigate("/filter",{state:data?.data?.data[1]?.id},{state:data?.data?.data[1]?.category_id})}>See All</p>
          </div>
          

          {
  isLoading ? (
    
      <SliderSkeleton/>
  
  ) :(
          <Slider {...settings} className="w-full px-4">
            {data?.data?.data[1]?.product_deatils?.map((item, index) => (
              <div
                key={index}
                className="!w-[40vw] sm:!w-[24vw] md:!w-[30vw] lg:!w-[18vw] xl:!w-[16vw] m-2 border border-gray-300 rounded-xl p-3 shadow-sm bg-white"
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
              </div>
            ))}
          </Slider>)}
        </div>
      </div>

      <div className="w-full  mt-4 lg:mt-0 lg:block hidden">
        <img
          className="w-full rounded-md"
          src="https://crazzyhub.s3.amazonaws.com/media/banner/Banner_-_iPhone_16_pro.webp"
        />
      </div>
    </>
  );
};

export default Section4;
