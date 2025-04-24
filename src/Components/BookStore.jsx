import React from "react";
import { GetMainCategory } from "../Services/MainCategory/index.jsx";
import { useQuery } from "@tanstack/react-query";
import { Slider } from "@mui/material"; // for price range slider

const BookStore = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["mainCat"],
    queryFn:() => GetMainCategory(),
  });

  const brands = [
    "Xiaomi", "Samsung", "Realme", "Redmi", "Sandisk",
    "Tecno", "OPPO", "OnePlus", "Nothing", "Motorola"
  ];

  return (
    <div className="flex w-full px-2 sm:px-6 py-4 relative">
     
      <aside className="w-1/5 hidden lg:block border-r pr-4">
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">Filters</h3>
            <span className="text-red-500 cursor-pointer text-sm">CLEAR</span>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold text-gray-800 mb-2">PRICE</h4>
            <Slider defaultValue={[20, 80]} aria-label="Price Range" />
          </div>

          <div className="mt-4">
            <h4 className="font-semibold text-gray-800 mb-2">BRANDS</h4>
            {brands.map((brand, index) => (
              <p key={index} className="cursor-pointer hover:underline text-gray-700 text-sm">
                {brand}
              </p>
            ))}
          </div>
        </div>
      </aside>

     
      <div className="flex-1 w-full">
        
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl sm:text-2xl font-bold">BOOKS & MORE</h2>
          <div className="space-x-2">
            <button className="border border-red-500 text-red-500 px-3 py-1 text-sm rounded-md hover:bg-red-50">
              Most Popular
            </button>
            <button className="border border-red-500 text-red-500 px-3 py-1 text-sm rounded-md hover:bg-red-50">
              Top Reviews
            </button>
            <button className="border border-red-500 text-red-500 px-3 py-1 text-sm rounded-md hover:bg-red-50">
              Newest First
            </button>
          </div>
        </div>

     
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-5">
          {data?.data?.data[0]?.product_deatils?.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={item?.variant_image}
                alt={item?.variant_name}
                className="h-[25vh] w-full object-contain p-2 bg-white"
              />
              <div className="p-3">
                <p className="text-sm font-semibold truncate mb-1">
                  {item.variant_name?.substring(0, 60)}...
                </p>
                <p className="text-green-600 text-xs font-semibold mb-1">In Stock</p>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-sm font-semibold text-gray-900">
                    ₹{item?.price || 190}
                  </span>
                  <span className="line-through text-gray-500 text-xs">
                    ₹{item?.original_price || 190}
                  </span>
                  <span className="bg-green-100 text-green-600 text-xs font-bold px-2 py-0.5 rounded">
                    0%off
                  </span>
                </div>
                <button className="w-full py-1.5 text-xs sm:text-sm rounded-xl font-semibold text-white bg-green-600 hover:bg-red-600 transition-all duration-300">
                  ADD NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default BookStore;
