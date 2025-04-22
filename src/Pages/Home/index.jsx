import React, { useState } from 'react'
import Navbar from '../../Shared/Navbar/Navbar'
import Section1 from '../../Components/Section1'
import Section2 from '../../Components/Section2'
import Section3 from '../../Components/Section3'
import Section4 from '../../Components/Section4'
import Section5 from '../../Components/Section5'
import Section6 from '../../Components/Section6'
import Section7 from '../../Components/Section7'
import Section8 from '../../Components/Section8'
import Section9 from '../../Components/Section9'
import Footer from '../../Shared/Footer/Footer'
import BookStore from '../../Components/BookStore'
import ProductDetail from '../../Components/ProductDetail'
import AllFilterProduct from '../../Components/FilterComponent/AllFilterProduct'
import Login from '../../Components/LoginPage'
import whatsapp from "../../assets/whatsapp.png"


const Home = () => {
 

  return (
    <div className='relative lg:w-full lg:h-full overflow-hidden lg:p-0 p-3'>

    
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />

      
      <a href='https://web.whatsapp.com/'><img
        
        className="fixed bottom-10 right-2 animate-pulse h-20 text-white px-4 py-2 rounded-md z-50"

        src={whatsapp}
      /></a>
      
      

    </div>
  );
}

export default Home