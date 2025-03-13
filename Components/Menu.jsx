
import Link from 'next/link'
import React from 'react'
import { CiLocationArrow1 } from "react-icons/ci";

const Menu = () => {
  return (
    <div>
           <div className='py-5 px-5 md:px-12 lg:px-28 flex justify-between items-center'>
            <Link href="/" className='text-2xl font-semibold flex gap-2 items-center'>
           <CiLocationArrow1  style={{ stroke: "black", strokeWidth: "2"}} />
           <span>Dev-Blogs</span>
            </Link>
            
            <Link href="/admin">
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black rounded hover:bg-black hover:text-white transition delay-100' >
                Create A Post
            </button>
            </Link>
        </div>

    </div>
  )
}

export default Menu