import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { FaChevronCircleLeft, FaRegHeart, FaShareAlt } from 'react-icons/fa'
import { FaCircleChevronRight, FaLocationDot } from 'react-icons/fa6'
import { IoStarOutline } from 'react-icons/io5'
import { MdCompare } from 'react-icons/md'
import { useParams } from 'react-router-dom'
import { GetProductDetails } from '../Services/ProductDetail'
import { IconButton, Tooltip } from '@mui/material'
import { GiFastBackwardButton, GiFastForwardButton } from "react-icons/gi";


const ProductDetail = () => {



  const [currentIndex, setCurrentIndex] = useState(0);
      
  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === ProductDetail?.variant_images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? ProductDetail?.variant_images.length - 1 : prev - 1
    );
  };

  const handleThumbClick = (index) => {
    setCurrentIndex(index);
  };

const { id, v_id } = useParams();

console.log("Product ID:", id);
console.log("Variant ID:", v_id);


 const { data, isLoading } = useQuery({
     queryKey:["productDetails"],
     queryFn:() =>GetProductDetails(

      {product_id:id,
        variant_id:v_id
      }


      
     ),

     enabled:Boolean(id&&v_id)
   });

  //  console.log(data?.data,"this is data ")

    const ProductDetail=data?.data?.data




  
  return (
    <div className='w-[95%] max-w-[1400px] mx-auto h-full'>
    <div className='flex lg:flex-row flex-col w-full h-full gap-4'>
      
      <div className='lg:w-[28%] w-full h-full mt-3'>
        <img 
          className='w-full object-contain max-h-[400px] border border-gray-200 hover:shadow hover:shadow-purple-600 transition-all duration-700 hover:scale-90' 
          src={ProductDetail?.variant_images[currentIndex]} 
          alt='Main Product'
        />
        
        <div className='flex items-center justify-center gap-2 mt-5 '>
        <button
          onClick={handlePrev}
          className='text-gray-500 hover:text-orange-700 transition'
        >
          <GiFastBackwardButton size={30} />
        </button>

        <div className='flex gap-3 overflow-x-auto custom-scrollbar py-1'>
          {ProductDetail?.variant_images.map((img, index) => (
            <img
              key={index}
              src={img}
              onClick={() => handleThumbClick(index)}
              className={`w-20 h-20 object-cover rounded-md cursor-pointer transition-all duration-200 border-2 ${
                currentIndex === index
                  ? 'border-gray-500 scale-105'
                  : 'border-transparent hover:border-gray-300'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className='text-gray-500 hover:gray-700 transition'
        >
          <GiFastForwardButton size={30} />
        </button>
      </div>
      </div>
  
      
      <div className='lg:w-[35%] w-full ml-0 lg:ml-6 mt-2'>
        <p className='text-lg md:text-xl font-semibold hover:text-blue-600'>{ProductDetail?.product_variant_name}</p>
        <div className='flex mt-3 text-lg text-orange-400'>
          <IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline />
        </div>
        <p className='text-lg font-bold text-green-600 mt-3'>Rate</p>
        <p className='font-semibold text-base md:text-lg'>
          ₹{ProductDetail?.price}
          <span className='line-through px-2 text-gray-500'>M.R.P {ProductDetail?.mrp}</span>
          <span className='px-2 py-1 rounded-xl text-white font-semibold bg-green-600'>{ProductDetail?.discount_percent}%</span>
        </p>
  
       
        {ProductDetail?.variant_color_values?.length > 0 &&
          <>
            <p className='text-lg font-bold mt-2'>COLOR</p>
            <div className='w-full h-[8vh] mt-3 gap-2 flex flex-wrap'>
              {
                ProductDetail?.variant_color_values?.map((i, idx) => (
                  <div key={idx} className='h-full w-[60px]'>
                    <Tooltip title={i?.value} arrow>
                      <img className='w-full h-full object-contain border p-1 hover:scale-105 rounded-md duration-150 border-gray-600' src={i?.variant_image}/>
                    </Tooltip>
                  </div>
                ))
              }
            </div>
          </>
        }
  
       
        {ProductDetail?.other_variant_values?.length > 0 &&
          <>
            <p className='font-bold mt-2 text-lg'>RAM</p>
            <div className='flex flex-wrap gap-2'>
              {
                ProductDetail?.other_variant_values?.map((i, idx) => (
                  <button key={idx} className='px-2 py-1 bg-gray-100 rounded-md border mt-2 text-blue-600 border-purple-700 text-sm'>{i?.value}</button>
                ))
              }
            </div>
          </>
        }
  
        {ProductDetail?.variant_storage_values?.length > 0 &&
          <>
            <p className='font-bold mt-2 text-lg'>Storage</p>
            <div className='flex flex-wrap gap-2'>
              {
                ProductDetail?.variant_storage_values?.map((i, idx) => (
                  <p key={idx} className='px-2 py-1 bg-gray-100 rounded-md border mt-2 text-blue-600 border-purple-700 text-sm'>{i?.value}</p>
                ))
              }
            </div>
          </>
        }
  
        <button className='px-3 py-2 text-base md:text-xl font-bold bg-green-600 hover:scale-105 mt-3 rounded-xl text-white hover:bg-red-600'>ADD CART</button>
  
        
        <button className='w-full mt-6 py-2 bg-gray-200 text-start rounded-xl pl-3 flex flex-wrap items-center justify-between'>
          Delivery Options:
          <div className='flex items-center gap-2'>
            <FaLocationDot className='text-xl' />
            <input className='bg-gray-50 px-2 py-1 rounded-md text-sm' type='search' name='search' placeholder='enter pin code'/>
          </div>
        </button>
  
       
        <div className='w-full flex flex-col sm:flex-row justify-between gap-3 bg-[#FEE2E2] items-center mt-4 p-2'>
          <div className='flex items-center w-full sm:w-[32%] gap-2 border border-orange-500 p-2'>
            <img className='h-[30px] w-[30px]' src='https://pub-027efb0add534c4fbed7432cf1c407a1.r2.dev/Assets/Return-Exchangee.png'/>
            <div>
              <p className='font-semibold'>Replacement</p>
              <p className='text-sm'>in 7 Days</p>
            </div>
          </div>
          <div className='flex items-center w-full sm:w-[32%] gap-2 border border-orange-500 p-2'>
            <img className='h-[30px] w-[30px]' src='https://pub-027efb0add534c4fbed7432cf1c407a1.r2.dev/Assets/warrenty.png'/>
            <div>
              <p className='font-semibold'>Warranty</p>
              <p className='text-sm'>in 1 Year</p>
            </div>
          </div>
          <div className='flex items-center w-full sm:w-[32%] gap-2 border border-orange-500 p-2'>
            <img className='h-[30px] w-[30px]' src='https://pub-027efb0add534c4fbed7432cf1c407a1.r2.dev/Assets/Gst-Invoice.png'/>
            <div>
              <p className='font-semibold'>GST Invoice</p>
              <p className='text-sm'>Available</p>
            </div>
          </div>
        </div>
      </div>
  
      
      <div className='lg:w-[25%] w-full lg:ml-16 mt-5 flex flex-col items-center'>
         
         {  data?.data?.frequntly_buy_products?.length > 0 ? (<>
          
          <h2 className="font-bold text-lg underline text-center  w-[350px] h-[20%]   bg-gray-200 ">Frequently Bought Together</h2>
                {data?.data?.frequntly_buy_products?.map((i)=>(<>
                 
                  <div className="border border-gray-300 w-[350px] h-[20%]  p-3 bg-gray-200">
     

      <div className="flex gap-3">
       
        <img
          src={i?.variant_image}
          alt="Ashtavakra Gita"
          className="w-16 h-20 object-contain border border-gray-300"
        />

       
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-sm font-semibold line-clamp-3">
             {i?.product_variant_name}
            </p>
            
          </div>
          <p className="text-xs text-gray-600">{i?.brand_name}</p>
        </div>

       
        <div className="ml-auto text-right font-semibold text-black">₹{i?.price}</div>
      </div>
    </div>
               </> ))}
              
       
                </> ):
         (
          <img className='w-full max-w-[300px] object-contain' src='https://img.freepik.com/premium-vector/no-data-found-empty-file-folder-concept-design-vector-illustration_620585-1698.jpg'/>
         )
          
         }

        
        <button className='w-full mt-4 py-2 bg-gradient-to-r from-rose-500 to-purple-600 hover:text-red-700 hover:scale-95 rounded-xl text-xl font-semibold text-white'>Buy Now</button>
        <button className='w-full py-2 mt-4 bg-gradient-to-r from-green-500 to-purple-600 hover:text-red-700 hover:scale-95 rounded-xl text-xl font-semibold text-white'>Add To Cart</button>
  
        <div className='w-full mt-2 flex flex-wrap gap-2 justify-center text-red-500'>
          <button className='px-4 py-1 border rounded-md text-sm border-orange-400'><FaShareAlt className='inline-block'/> Share</button>
          <button className='px-4 py-1 border rounded-md text-sm border-orange-400'><MdCompare className='inline-block'/> Compare</button>
          <button className='px-4 py-1 border rounded-md text-sm border-orange-400'><FaRegHeart className='inline-block'/> Wishlist</button>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default ProductDetail
