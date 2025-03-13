import React from 'react'
import Link from 'next/link'
import { CiLocationArrow1 } from 'react-icons/ci'

const MobileNav = () => {
    return (
        <div className='text-sm font-normal flex gap-3'>
        <Link href="/" className='flex items-center gap-2 justify-center border border-black px-2 py-1'> <CiLocationArrow1 style={{ stroke: "black", strokeWidth: "2" }} /><span>Dev-Blogs</span></Link>
        <Link href="/admin/addProduct" className='border border-black px-2 py-1'>Add Blogs</Link>
        <Link href="/admin/bloglist" className='border border-black px-2 py-1'>Blogs List</Link>
        <Link href="/admin/subscription" className='border border-black px-2 py-1'>Subscription</Link>
      </div>

    )
}

export default MobileNav