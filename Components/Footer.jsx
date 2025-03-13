import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import React from 'react'
import { CiLocationArrow1 } from "react-icons/ci";

const Footer = () => {
  return (
    <div className='flex justify-center flex-col sm:gap-0 sm:flex-row bg-black py-5 items-center'>
        <Link href="/" className='text-2xl font-semibold flex gap-2 items-center text-white'>
           <CiLocationArrow1  style={{ stroke: "white", strokeWidth: "2"}} />
           <span>Dev-Blogs</span>
            </Link>
        <p className='text-sm text-white px-5'>All right reserved</p>
        <div className="flex gap-3">
         
         <Link href="https://www.facebook.com/akashbasak88" target="_blank"> <FaFacebook color="white" className="size-[30px]" /></Link>

         <Link href="https://github.com/developerpalakbasak" target="_blank"><FaGithub color="white" className="size-[30px]" /></Link>

         <Link href="https://www.linkedin.com/in/full-stack-palak-a05510208/" target="_blank"><FaLinkedin color="white" className="size-[30px]" /></Link>

         </div>
    </div>
  )
}

export default Footer