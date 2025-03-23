import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
    <div className='text-center text-2xl pt-10 border-t'>
<Title text1="Contact" text2="us"/>
    </div>
    <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
<img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
<div className='flex flex-col justify-center item gap-6'>
  <p>Our store</p>
  <p>54709 willms station<br/>suite 350,usa</p>
  <p>Tel:(415) 555-0987</p>
  <p>Carres at forever</p>

</div>
    </div>
    </div>
  )
}

export default Contact