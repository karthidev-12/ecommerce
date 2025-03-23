import React from 'react'
import { assets } from '../assets/assets'
const Footer = () => {
  return (
    <>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
      <div>
        <img src={assets.logo} className="mb-5 w-32" alt=''/>
      </div>
      <div>
        <p className='text-xl font-medium mb-5'>Company</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>privacy policy</li>

        </ul>
      </div>
      <div>
        <p className='text-xl font-medium mb-5'>Get in touch</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+23 456667</li>
            <li>contactus@gmail.com</li>
        </ul>
      </div>

    
    </div>
      <div>
      <hr/>
      <p className='py-5 text-sm text-center'>Copyright 2024</p>
    </div>
    </>
  )
}

export default Footer