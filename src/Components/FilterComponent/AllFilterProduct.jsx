import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { GetFilterData } from "../../Services/AllFilterData";
import { FaHeart } from "react-icons/fa6";
import {
  Box,
  Typography,
  Rating,
  Pagination,
  Drawer,
  IconButton,
} from "@mui/material";
import axios from "axios";
import { Token } from "../../Config/BaseUrl";
import { useLocation, useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { useMediaQuery } from "@mui/material";
import { MdCategory, MdOutlinePriceChange, MdStars } from "react-icons/md";
import { FaFilter } from "react-icons/fa";

const AllFilterProduct = () => {
  const [price, setPrice] = useState(10000);
  const [page, setPage] = useState(1);
  const [brand, setBrand] = useState('');
  const [brand_id, setBrand_Id] = useState(null);
  const [category, setCategory] = useState({});
  const [value, setValue] = useState(2);
  const [isOpen, setIsOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const closeDrawer = () => setDrawerOpen(false);

  const { state } = useLocation();
  const navigate = useNavigate();

  const [category_id, setCategory_id] = useState();
  useEffect(() => {
    state?.c_id && setCategory_id(state?.c_id);
  }, [state?.c_id]);

  const req = {
    page: page,
    category_id: category_id || "",
    brand_id: brand_id || "",
    color_id: "",
    max_discount: "",
    min_discount: "",
    order_by: "",
    rating: "",
    search: "",
    sub_category_id: state?.sub_id || "",
  };

  const { data, isLoading } = useQuery({
    queryKey: ["filterData", page, category_id, brand_id, state],
    queryFn: () => GetFilterData(req),
    keepPreviousData: true,
  });

  const GetBrandData = async () => {
    try {
      const response = await axios.get("https://app1.crazzyhub.com/api/brand-list/", {
        headers: {
          Authorization: Token,
        },
      });
      setBrand(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const GetCategory = async () => {
    try {
      const cat = await axios.get("https://app1.crazzyhub.com/api/overall-main-category-sub-category-list/", {
        headers: {
          Authorization: Token,
        },
      });
      setCategory(cat?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetBrandData();
    GetCategory();
  }, []);

  const Product = data?.data?.data?.product_list;
  const currentPage = data?.data?.current_page || 1;
  const totalPages = data?.data?.total_pages;

  const handlePress = (p_id, v_id, slug) => {
    navigate(`/details/${p_id}/${v_id}/${slug}`);
  };

  const Filters = () => (
    <div className="w-full h-[calc(100vh-5rem)] overflow-y-auto sticky top-20 border border-gray-400 shadow shadow-gray-400 p-4 mx-auto bg-white">
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-bold flex items-center gap-2 text-red-600"><FaFilter /> Filters</p>
        <button className="text-red-500 font-semibold text-sm">CLEAR</button>
      </div>

      <div className="mb-6">
        <p className="font-semibold mb-2 flex items-center gap-2"><MdOutlinePriceChange className="text-red-500" />PRICE</p>
        <input
          type="range"
          className="w-full accent-red-500"
          min="1"
          max="1000000"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm">₹1</span>
          <span className="flex-grow border-t border-gray-300"></span>
          <span className="text-sm">₹{price}</span>
        </div>
      </div>

      <div className="relative inline-block w-full">
        <div
          className="flex justify-between items-center bg-gray-100 px-4 py-2 w-full cursor-pointer"
          onClick={toggleDropdown}
        >
          <p className="font-bold w-full text-red-500">BRANDS</p>
          <MdKeyboardArrowDown className="w-5 h-5" />
        </div>

        {isOpen && (
          <div className="w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 mt-1 max-h-60 overflow-y-auto">
            {brand?.data?.map((item) => (
              <div
                onClick={() => {
                  setBrand_Id(item?.id);
                  closeDrawer();
                }}
                key={item?.id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {item?.brand_name}
              </div>
            ))}
          </div>
        )}
      </div>

      <p className="flex items-center gap-2 font-bold bg-gray-100 px-4 py-2 mt-3"><MdCategory className="text-red-500" />CATEGORY</p>
      {category?.data?.main_category_list?.map((i) => (
        <p
          key={i?.id}
          className="hover:bg-gray-100 px-4 py-2 w-full cursor-pointer my-1 hover:font-semibold font-medium"
          onClick={() => {
            setCategory_id(i?.id);
            closeDrawer();
          }}
        >
          {i.category}
        </p>
      ))}

      <p className="flex items-center gap-2 font-bold bg-gray-100 px-4 py-2 mt-3"><MdStars className="text-red-500" />RATING</p>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          closeDrawer();
        }}
      />
    </div>
  );

  return (
    <div className="h-full w-full flex flex-col">
      {isMobile && (
        <div className="fixed top-40  left-4 ">
          <IconButton onClick={() => setDrawerOpen(true)} className="bg-white shadow-lg">
            <HiOutlineAdjustmentsHorizontal className="text-2xl text-red-500" />
          </IconButton>
        </div>
      )}

      <div className="flex w-full h-full flex-col custom-scrollbar lg:flex-row">
        {isMobile ? (
          <Drawer anchor="left" open={drawerOpen} onClose={closeDrawer}>
            <div className="w-72 h-full p-4">
              <Filters />
            </div>
          </Drawer>
        ) : (
          <div className="w-full h-full custom-scrollbar lg:w-[20%]">
            <Filters />
          </div>
        )}

        <div className="w-full lg:w-[75%] h-full mx-auto">
          <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center px-3 sm:px-0 py-2 gap-3">
            <p className="text-lg sm:text-xl font-bold text-center sm:text-left">BOOK & MORE</p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-2">
              <button className="border border-red-400 text-red-500 px-3 py-1 text-sm rounded hover:bg-red-100">Most Popular</button>
              <button className="border border-red-400 text-red-500 px-3 py-1 text-sm rounded hover:bg-red-100">Top Reviews</button>
              <button className="border border-red-400 text-red-500 px-3 py-1 text-sm rounded hover:bg-red-100">Newest First</button>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 mx-5 mt-3">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              Product?.map((i) => (
                <div
                  key={i?.index}
                  className="w-full sm:w-80 md:w-60 lg:w-50 border rounded-sm p-4 relative shadow-md shadow-purple-400 hover:shadow-xl"
                  onClick={() => handlePress(i?.id, i?.variant_id, i?.slug)}
                >
                  <img
                    src={i.image}
                    className="w-full h-45 object-contain mb-2"
                    alt={i.variant_name}
                  />
                  <button className="absolute top-3 right-3">
                    <FaHeart className="text-gray-400 text-2xl hover:text-red-500" />
                  </button>
                  <p className="text-sm font-medium mb-1 h-15 line-clamp-3">{i?.variant_name}</p>
                  <p className="text-green-600 font-semibold text-sm mb-1">{i?.stock_sataus}</p>
                  <p className="font-bold mb-1">₹{i.price}</p>
                  <div className="text-sm">
                    <span className="line-through text-gray-400">₹{i.actual_price}</span>
                    <span className="bg-green-100 text-green-700 ml-2 px-1 rounded text-xs">{i?.discount_percent} %off</span>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="mt-8 flex justify-center">
            <Pagination
              count={totalPages}
              page={page}
              onChange={(e, value) => setPage(value)}
              color="primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllFilterProduct;