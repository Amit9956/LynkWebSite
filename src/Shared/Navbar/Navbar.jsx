import React, { useEffect, useState } from "react";
import { FaComputer, FaHeart, FaLocationDot, FaMobile, FaUser } from "react-icons/fa6";
import { MdOutlinePeopleAlt, MdShoppingCart } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import axios from "axios";
import { MainSubApi } from "../../Services/MainSubCategory";
import { useNavigate } from "react-router-dom";
import logo1 from "../../assets/logo1.png.png"
import { Button, Drawer } from "@mui/material";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { PiBooksFill } from "react-icons/pi";
import { BsTv } from "react-icons/bs";

import { GrTechnology } from "react-icons/gr";
import { GrUserSettings } from "react-icons/gr";
import { HiBuildingStorefront } from "react-icons/hi2";
import LoginModal from "../../Components/Modal";

const Navbar = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [data1, setData] = useState();

  const [open, setOpen] = React.useState(false);

  const GetCat = async () => {
    const data = await MainSubApi();

    console.log(data,"helloooo this datahhefwhbvifrvhcihiuhfh");

    setData(data);
  };

  useEffect(() => {
    GetCat();
  }, []);

  const navigate = useNavigate()

  //  const bookcategory=data1?.data?.data?.main_category_list?.filter((i)=>i.category==="Books & More")
  //   console.log(bookcategory,"hloooooo")

  const CategoryOne = [
    {
      name: "Book & More",
      key: "book",
      image:
        "https://crazzyhub.s3.amazonaws.com/media/maincat/image/tv_3PbwT80_1.jpg",
    },
    {
      name: "Mobiles & Tablets",
      key: "mobiles",
      image:
        "https://crazzyhub.s3.amazonaws.com/media/maincat/image/tv_3PbwT80_1.jpg",
    },
    {
      name: "Tv's & Electronics",
      key: "tv",
      image:
        "https://crazzyhub.s3.amazonaws.com/media/maincat/image/tv_3PbwT80_1.jpg",
    },
  ];

  const categorySecond = [
    {
      name: "Laptop & Accessories",
      key: "laptop",
      image:
        "https://crazzyhub.s3.amazonaws.com/media/maincat/image/computer-and-speaker_OpTRCiD.jpg",
    },
    {
      name: "Computer & Peripherals",
      key: "computer",
      image:
        "https://crazzyhub.s3.amazonaws.com/media/maincat/image/computer-and-speaker_OpTRCiD.jpg",
    },
  ];

  const categoryThird = [
    {
      name: "Smart Technology",
      key: "smart",
      image:
        "https://crazzyhub.s3.amazonaws.com/media/maincat/image/smart-technology.jpg",
    },
    {
      name: "Mobile Accessories",
      key: "accessories",
      image:
        "https://crazzyhub.s3.amazonaws.com/media/maincat/image/Mobile-accessories.jpg",
    },
  ];


  const menuItems = [
    { label: "Wishlist", icon: FaHeart, count: 0, color: "text-red-500"  },
    { label: "Cart", icon: FaShoppingCart, count: "₹0", color: "text-emerald-400" },
    { label: "My Account", icon: FaUser, count: "Sign In", color: "text-yellow-500" }
  ];

  const categories = [
    {
      id: 'books',
      name: 'Books & More',
      icon: PiBooksFill,
      subcategories: ['Fiction', 'Non-fiction', 'Children Books', 'Comics & Manga', 'Educational']
    },
    {
      id: 'mobiles',
      name: 'Mobiles & Tablets',
      icon: FaMobile,
      subcategories: ['Smartphones', 'Tablets', 'Feature Phones', 'iPads', 'Android Tablets']
    },
    {
      id: 'tv',
      name: 'TV & Electronics',
      icon: BsTv,
      subcategories: ['Smart TVs', 'LED TVs', 'Home Theater', 'Speakers', 'Media Players']
    },
    {
      id: 'computers',
      name: 'Computer Peripherals',
      icon: FaComputer,
      subcategories: ['Laptops', 'Desktops', 'Monitors', 'Keyboards', 'Mouse', 'Printers']
    },
    {
      id: 'tech',
      name: 'Smart Technology',
      icon: GrTechnology,
      subcategories: ['Smart Home', 'Wearables', 'Fitness Trackers', 'VR Headsets', 'Smart Speakers']
    },
    {
      id: 'accessories',
      name: 'Mobile Accessories',
      icon: GrUserSettings,
      subcategories: ['Cases & Covers', 'Screen Guards', 'Chargers', 'Power Banks', 'Headphones']
    }
  ];

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center justify-between md:justify-center bg-gradient-to-r from-[#E34668] to-[#24A1D6] relative px-4 md:px-0">
          <div className="md:hidden w-full flex items-center justify-between py-3">
            <div className="flex items-center gap-2 ">
              <RxHamburgerMenu
                className="text-white  text-7xl"
                onClick={() => setDrawerOpen(true)}
              />
              <img
                className="h-18 pl-5"
                onClick={()=>navigate("/")}
                src="https://www.crazzyhub.com/static/media/weblogo.77a9ceab0e5b281d7a91.png"
                alt="Logo"
              />
            </div>

            <div className="flex w-full md:w-[70%]  gap-3 items-center text-white text-sm">
              <div className="pl-20">
                <p className="hidden">Wishlist</p>
                <p className="font-semibold flex gap-x-2">
                  <FaHeart className="text-3xl text-red-500" />
                </p>
              </div>
              <div>
                <p className="hidden">0 Items</p>
                <p className="font-semibold flex gap-x-2">
                  <MdShoppingCart className="text-3xl text-yellow-300" />
                </p>
              </div>
              <div>
                <p className="hidden">My Account</p>
                <p className="font-semibold flex gap-x-2">
                  <MdOutlinePeopleAlt className="text-3xl text-cyan-300" />
                </p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center w-full gap-6">
            <div className="text-white text-sm text-center">
              <p>Deliver To</p>
              <p className="font-semibold">
                Location{" "}
                <FaLocationDot className="inline text-xl animate-pulse text-rose-500" />
              </p>
            </div>

            <div className="relative w-[50%]">
              <input
                type="search"
                name="search"
                id="searchBar"
                className="w-full px-4 py-2 rounded-3xl outline-none bg-white placeholder:text-gray-400"
                placeholder="Search for Products, Brands, Offers"
              />
              <IoSearch className="absolute right-3 top-2.5 text-xl text-gray-500" />
            </div>

            <div className="absolute -right-40 top-0 w-[30%]" onClick={()=>navigate("/")}>
              <img
                className="h-25 md:h-28 drop-shadow-2xl rounded-full border-2 border-blue-500 animate-bounce"
                src={logo1}
                alt="logo1"
              />
            </div>
          </div>
        </div>

        <div className="hidden md:flex w-full md:w-1/2 h-[10vh] items-center justify-end bg-gradient-to-r from-[#24A1D6] to-[#F0751F] px-4">
          <div className="flex w-full md:w-[70%] justify-between items-center font-semibold text-md text-white ">
            <div>
              <p onClick={()=>navigate("/wishlistCard")}>Wishlist</p>
              <p className="font-semibold flex gap-x-2 text-red-500">
                2 Items <FaHeart className="text-2xl" />
              </p>
            </div>
            <div onClick={()=>navigate("/cart")}>
              <p>0 Items</p>
              <p className="font-semibold flex gap-x-2 text-yellow-400">
                ₹0 <MdShoppingCart className="text-2xl" />
              </p>
            </div>
            <div onClick={()=>setOpen(true)}>
              <p>My Account</p>
              <p className="font-semibold flex gap-x-2 text-cyan-400">
                Sign In <MdOutlinePeopleAlt className="text-2xl" />
              </p>
            </div>
          </div>
        </div>

        <div className="md:hidden flex flex-col gap-1 py-1 px-4 bg-red-500">
          <div className="relative mt-2 pb-2">
            <input
              type="search"
              name="search"
              id="mobileSearchBar"
              className="w-full px-4 py-2 rounded-3xl outline-none bg-white placeholder:text-gray-400"
              placeholder="Search for Products...."
            />
            <IoSearch className="absolute right-3 top-2.5 text-xl text-gray-500" />
          </div>
          {/* <div className="flex w-full md:w-[70%] justify-between items-center text-white text-sm">
            <div>
              <p>Wishlist</p>
              <p className="font-semibold flex gap-x-2">
                2 Items <FaHeart className="text-xl" />
              </p>
            </div>
            <div>
              <p>0 Items</p>
              <p className="font-semibold flex gap-x-2">
                ₹0 <MdShoppingCart className="text-2xl" />
              </p>
            </div>
            <div>
              <p>My Account</p>
              <p className="font-semibold flex gap-x-2">
                Sign In <MdOutlinePeopleAlt className="text-2xl" />
              </p>
            </div>
          </div> */}
        </div>
      </div>

      <div className="hidden md:flex w-full shadow-md shadow-gray-500 bg-white">
        <div className="h-[5vh] w-[80%] mx-auto flex justify-center  items-center">
          {/* Category One */}
          <div className="w-full h-full flex  gap-x-4 justify-evenly items-center">
            {data1?.data?.data?.main_category_list?.map((cat,index) => (
              <div

             
                key={cat.id}
                className="relative h-full"
                onMouseEnter={() => setHoveredCategory(cat.id)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <p onClick={()=>navigate("/filter",{state:{c_id:cat?.id}})} className="hover:bg-gray-300 hover:rounded-sm h-full font-semibold pt-1 text-clip w-full hover:text-blue-600 hover:underline transition-all duration-500 cursor-pointer bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text" >
                  {cat.category}
                </p>
                {hoveredCategory === cat.id && (
                  <div className={`${index <= 3 ? 'left-0' : 'right-0' } absolute top-full w-[37vw] h-[38vh] bg-white shadow-md p-2 flex z-50`}>
                    <p className="h-[1.5%] w-full bg-orange-600 absolute top-0 left-0" />

                    <div className="w-[45%] flex items-center justify-center">
                      <img
                        src={cat.image}
                        alt="Category"
                        className="h-full object-contain"
                      />
                    </div>

                    <div className="w-[55%] h-[10%] grid grid-cols-2 gap-2 pl-4 pt-2 ">
                      {cat?.sub_category_list?.map((i, index) => (
                        <p
                          key={index}
                          className="text-gray-800 hover:text-orange-600 cursor-pointer text-sm "
                          onClick={()=>navigate("/filter",{state:{sub_id:i?.id}})}
                        >
                          {i?.subcategory}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Category Two */}
          {/* <div className="w-[35%] h-full flex justify-end gap-2">
            {categorySecond.map((cat) => (
              <div
                key={cat.key}
                className="relative h-full"
                onMouseEnter={() => setHoveredCategory(cat.key)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <p className="hover:bg-gray-300 hover:rounded-sm h-full font-semibold pt-1 px-2 cursor-pointer">
                  {cat.name}
                </p>
                {hoveredCategory === cat.key && (
                  <div className="absolute top-full left-0 w-[37vw] h-[38vh] bg-white shadow-md p-2 flex z-50">
                    <p className="h-[1.5%] w-full bg-orange-600 absolute top-0 left-0" />
                    <div className="w-[45%]">
                      <img src={cat.image} alt="Category" className="h-full" />
                    </div>
                    <div className="w-[65%]">
                      <p className="pl-2 text-gray-800 text-start">
                        {cat.name} related content
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div> */}

          {/* Category Three */}
          {/* <div className="w-[32%] h-full flex">
            {categoryThird.map((cat) => (
              <div
                key={cat.key}
                className="relative h-full"
                onMouseEnter={() => setHoveredCategory(cat.key)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <p className="hover:bg-gray-300 hover:rounded-sm h-full font-semibold pt-1 px-2 cursor-pointer">
                  {cat.name}
                </p>
                {hoveredCategory === cat.key && (
                  <div className="absolute top-full right-0 w-[37vw] h-[38vh] bg-white shadow-md p-2 flex z-50">
                    <p className="h-[1.5%] w-full bg-orange-600 absolute top-0 left-0" />
                    <div className="w-[45%]">
                      <img src={cat.image} alt="Category" className="h-full" />
                    </div>
                    <div className="w-[65%]">
                      <p className="pl-2 text-gray-800 text-start">
                        {cat.name} related content
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div> */}
        </div>
      </div>

      {/* {drawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-50">
          <div className="absolute top-0 left-0 w-[75%] h-full bg-white shadow-lg p-4">
            <button
              onClick={() => setDrawerOpen(false)}
              className="text-right w-full font-bold text-lg mb-4 text-red-500"
            >
              ✕ Close
            </button>
            <div className="flex flex-col gap-2">
              {[...CategoryOne, ...categorySecond, ...categoryThird].map(
                (cat) => (
                  <p key={cat.key} className="py-2 px-3 border-b">
                    {cat.name}
                  </p>
                )
              )}
            </div>
          </div>
        </div>
      )} */}

      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
      <div className="p-4 w-72 h-full bg-gradient-to-b from-purple-200 to-white custom-scrollbar">
        <div className="flex justify-between items-center mb-8 border-b pb-4">
          <p className="flex items-center gap-2 font-bold text-xl text-purple-800">
            <HiBuildingStorefront className="text-2xl" /> Lynk Store
          </p>
          <Button onClick={() => setDrawerOpen(false)}>
            <FaTimes className="text-purple-800" />
          </Button>
        </div>

        <div className="space-y-4">
          {menuItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-md hover:bg-purple-50">
              <item.icon className={`text-xl ${item.color}`} />
              <div>
                <p className="font-medium">{item.label}</p>
                <p className={`text-sm ${item.color}`}>{item.count}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-4">
          <p className="font-semibold text-purple-800 mb-2">Categories</p>
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-3 border border-purple-300 rounded-xl hover:bg-purple-100 cursor-pointer"
            >
              <category.icon className="text-xl text-purple-700" />
              <p className="font-medium">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Drawer>


<LoginModal setOpen={setOpen}  open={open}/>
    </div>
  );
};

export default Navbar;
