import React from 'react'
import { CgProfile } from 'react-icons/cg'
import Link from 'next/link'
import { CiLocationArrow1 } from 'react-icons/ci'
import MobileNav from '@/Components/AdminComponents/MobileNav'

const page = () => {
  return (
    <div className='text-2xl mx-3 mt-4'>

      <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black ">
        <CgProfile size={40} />
      </div>
      Welcome to admin panel here you can add your posts, knowledge, and experience.</div>
  )
}

export default page