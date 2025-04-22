import React from 'react';
import logo1 from "./assets/logo1.png.png"

const SplashScreen = () => {
  return (
    <>
   
    <div className="flex items-center justify-center h-screen bg-black">
   
      <img
          src={logo1}
        alt="Logo"
        className="w-60 h-60 rounded-full animate-pulse"
      />
    </div>
    </>
  );
  
};

export default SplashScreen;