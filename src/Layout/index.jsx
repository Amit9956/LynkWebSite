import React from 'react'
import Navbar from '../Shared/Navbar/Navbar'
import Footer from '../Shared/Footer/Footer'

const Layout = ({children}) => {
  return (


    <>

    <Navbar/>

    <>

    {children}</>

    <Footer/>



    </>


  )
}

export default Layout