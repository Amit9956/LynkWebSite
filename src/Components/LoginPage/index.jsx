import React, { useState } from 'react';
import axios from 'axios';
import { FaMobileAlt, FaLock } from 'react-icons/fa';
import toast from 'react-hot-toast';


const Login = () => {
  const [showOTP, setShowOTP] = useState(false);
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');


  const handleLoginClick = async () => {
    try {
      const response = await axios.post("https://app1.crazzyhub.com/api/login/", {
        mobile_number: mobile
      }, {
        headers: {
          Authorization: "7c2b8693d001c79d4b5ed6ebc387ad6b862989dfjhjjhj"
        }
      });

      console.log("OTP Sent:", response.data);
      setShowOTP(true);
      toast.success("OTP sent to your mobile number!");
    } catch (error) {
      console.error("Login API Error:", error);
      toast.error("Failed to send OTP. Try again.");
    }
  };



  const handleVerifyClick = async () => {
    try {
      const response = await axios.post(
        "https://app1.crazzyhub.com/api/verify-login-otp/",
        {
          mobile_number: mobile,
          otp: otp
        },
        {
          headers: {
            Authorization: "7c2b8693d001c79d4b5ed6ebc387ad6b862989dfjhjjhj"
          }
        }
      );
  
      console.log("Full response:", response.data);  
  
    
      if (response.data.registration_token && response.data.registration_token.trim() !== "") {
        localStorage.setItem("userToken", response.data.registration_token);
        toast.success("OTP Verified Successfully!");
        window.location.replace("/");
      } else {
      
        toast.error("Verification failed. Please try again.");
      }
  
    } catch (error) {
      console.error("OTP Verification Error:", error);
      toast.error("Invalid OTP. Try again.");
    }
  };
  
  
  


  return (
    <div className="flex items-center justify-center bg-gray-100 ">
      <div className="lg:w-full w-[50%] max-w-4xl bg-white rounded-xl shadow-xl flex flex-col lg:flex-row overflow-hidden">

      
        <div className="hidden lg:block lg:w-1/2">
          <img
            className="h-full w-full object-cover"
            src="https://pub-027efb0add534c4fbed7432cf1c407a1.r2.dev/Assets/login-img.jpeg"
            alt="Login Visual"
          />
        </div>

        {/* Form section */}
        <div className="w-full lg:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
          {!showOTP ? (
            <>
              <h2 className="text-2xl font-semibold text-center mb-2">Welcome Back</h2>
              <p className="text-gray-600 text-center mb-6">Sign in to complete your shopping</p>

              <label className="block text-base font-medium mb-2">Mobile Number</label>
              <div className="relative mb-6">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-blue-500">
                  <FaMobileAlt />
                </span>
                <input
                  type="text"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Enter mobile number"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                onClick={handleLoginClick}
                className="w-full bg-gradient-to-r from-red-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 hover:scale-95 transition-transform duration-200 text-white py-3 rounded-md font-medium"
              >
                Log In
              </button>

              <p className="text-xs text-gray-500 text-center mt-6 leading-5">
                By signing in, you are confirming that you have accepted our Privacy & Policy.
              </p>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-semibold text-center mb-2">Verify OTP</h2>
              <p className="text-gray-600 text-center mb-6">
                We’ve sent a one time password to <strong>{mobile}</strong>.{' '}
                <span className="text-blue-500 cursor-pointer" onClick={() => setShowOTP(false)}>Edit</span>
              </p>

              <div className="relative mb-4">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-green-500">
                  <FaLock />
                </span>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <p className="text-sm text-blue-600 mb-4 cursor-pointer">Resend OTP</p>

              <button
                onClick={handleVerifyClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md font-medium transition duration-200"
              >
                VERIFY
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
