import { useQuery } from "@tanstack/react-query";
import React from "react";
import { GetBrandlistFn } from "../Services/LinearImages";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section2 = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["linearImages"],
    queryFn: () => GetBrandlistFn(),
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 16,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,

    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 14,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 12,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 10,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} className="!w-[99%] mx-auto">
        {data?.data?.data?.map((i, id) => (
          <div
            key={id}
            className="flex justify-center items-center p-2 sm:p-3 bg-gray-100"
          >
            <img
              src={i?.image}
              className="!rounded-full !border !border-gray-400 
              w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18"
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Section2;
