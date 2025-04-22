import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useQuery } from '@tanstack/react-query';
import { GetSliderlistFn } from '../Services/SliderList';

const Section1 = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["sliderlist"],
    queryFn: () => GetSliderlistFn()
  });

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className='w-full'>
      <Slider {...settings}>
        {data?.data?.data?.map((i, index) => (
          <div key={index}>
            <img
              className='w-full h-[30vh] lg:h-[40vh] object-cover'
              src={i.image}
              alt={`slider-${index}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Section1;
