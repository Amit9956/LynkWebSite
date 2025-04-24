import React from 'react'

const Wishlist = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <div className='h-[30%] w-[20%]'>
             <img className='h-[70%] w-full' src='https://pub-027efb0add534c4fbed7432cf1c407a1.r2.dev/Assets/wishlis.svg'/>
             <p className='font-bold text-md text-center'>Wishlist is Empty</p>
             <p className='text-xs font-semibold text-center'>Add Your First Wishlist Item</p>
        </div>
    </div>
  )
}

export default Wishlist