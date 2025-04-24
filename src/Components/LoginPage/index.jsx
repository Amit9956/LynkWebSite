import React from 'react'

const Login = () => {
  return (
  
  
//   <div className='h-[100%] w-full flex justify-center bg-transparent items-center  '>
    <div className='h-[65vh] w-full flex border-none bg-white  rounded-xl'>
        <div className='w-1/2 h-full '>
            <img className='h-full rounded-l-xl' src='https://pub-027efb0add534c4fbed7432cf1c407a1.r2.dev/Assets/login-img.jpeg'/>
        </div>
        <div className='w-1/2 h-full p-1'>
      
            <h2 class="text-2xl font-medium mt-2 text-center">Welcome Back</h2>
            <p class="text-gray-600 mb-8 text-center">Sign in to complete your shopping</p>
            <label class="block text-base font-medium mb-2">Mobile Number</label>
            <input 
                type="text" 
                class="w-full px-4 py-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-samsung-blue mb-6"
            />
            
            <button class="w-full bg-gradient-to-r from-red-500 to-purple-600 hover:bg-gradient-to-l hover:from-purple-500 hover:to-pink-500 hover:scale-95 text-white py-3 rounded-md font-medium hover:bg-blue-900 transition-colors duration-200">
                Log In
            </button>
            
            <p class="text-xs text-gray-500 text-center mt-6 leading-5">
                by signing in, you are confirming that youhave accepted our Privacy & Policy
            </p>
          
        </div>
    </div>
    // </div>
    )
}

export default Login