"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Menu from './Menu'
import { toast } from 'react-toastify'
import axios from 'axios'

const Header = () => {


    const [email, setEmail] = useState("")

    
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', email);
  

    try {
      const response = await axios.post('/api/email', formData);
      if (response.data.success) {
        toast.success(response.data.msg);
        setEmail("")
      } else {
        toast.error(response.data.msg || 'Something went wrong');
      }
    } catch (error) {
      toast.error('An error occurred while submitting the form');
    }
  };

    return (
    <>

        <Menu />

        <div className='py-5 px-5 md:px-12 lg:px-28'>

            <div className='text-center my-8 '>
                <h1 className='text-3xl sm:text-5xl font-medium '>Latest Blog</h1>
                <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio alias maxime accusantium modi veniam sequi nihil architecto laborum perspiciatis.</p>
                <form action="" onSubmit={onSubmitHandler} className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black rounded '>
                    <input type="email" onChange={(e)=> setEmail(e.target.value)} value={email} placeholder='Enter Your Email' className='pl-4 outline-none w-full ' />
                    <button className='border-1 border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white' type='submit'>Subscribe</button>
                </form>
            </div>

        </div>
    </>
    )
}

export default Header