import React, { useState } from 'react';
import axios from 'axios';
import { FaMobileAlt, FaLock } from 'react-icons/fa';

const Login = () => {
  const [showOTP, setShowOTP] = useState(false);
  const [mobile, setMobile] = useState('');

  const handleLoginClick = async () => {
    try {
      const response = await axios.post("https://app1.crazzyhub.com/api/login/", {
        mobile_number: mobile
      }, {
        headers: {
          Authorization: "7c2b8693d001c79d4b5ed6ebc387ad6b862989dfjhjjhj"
        }
      });

      console.log("Response:", response.data);
      setShowOTP(true);
    } catch (error) {
      console.error("Login API Error:", error);
    }
  };

  return (
    <div className='flex justify-center items-center bg-gray-100'>
      <div className='lg:w-full w-[50%] max-w-5xl flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden'>
    
        <div className='hidden md:block md:w-1/2 h-full'>
          <img
            className='h-full w-full object-cover'
            src='https://pub-027efb0add534c4fbed7432cf1c407a1.r2.dev/Assets/login-img.jpeg'
            alt='Login Visual'
          />
        </div>

        <div className='w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center'>
          {!showOTP ? (
            <>
              <h2 className="text-2xl font-semibold text-center mb-1">Welcome Back</h2>
              <p className="text-gray-600 mb-6 text-center">Sign in to complete your shopping</p>

              <label className="block text-base font-medium mb-2">Mobile Number</label>
              <div className='relative mb-6'>
                <span className='absolute inset-y-0 left-0 pl-3 flex items-center text-blue-500'>
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
                className="w-full bg-gradient-to-r from-red-500 to-purple-600 hover:bg-gradient-to-l hover:from-purple-500 hover:to-pink-500 hover:scale-95 text-white py-3 rounded-md font-medium transition duration-200"
              >
                Log In
              </button>

              <p className="text-xs text-gray-500 text-center mt-6 leading-5">
                By signing in, you are confirming that you have accepted our Privacy & Policy.
              </p>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-semibold text-center mb-1">Verify OTP</h2>
              <p className="text-gray-600 mb-6 text-center">
                We have sent a one time password to your mobile number {mobile} <span className="text-blue-500 cursor-pointer">Edit</span>
              </p>

              <div className='relative mb-4'>
                <span className='absolute inset-y-0 left-0 pl-3 flex items-center text-green-500'>
                  <FaLock />
                </span>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <p className="text-sm text-blue-600 mb-4 cursor-pointer">Resend OTP</p>

              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md font-medium transition duration-200">
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
