"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { CiLocationArrow1 } from 'react-icons/ci'


const Sidebar = () => {

    const path = usePathname()




    return (
        <div className='flex flex-col bg-slate-100' >
           
            <Link href="/" className='text-2xl font-semibold flex gap-2 items-center px-2 sm:pl-14 py-3 border border-black'>
           <CiLocationArrow1  style={{ stroke: "black", strokeWidth: "2"}} />
           <span>Dev-Blogs</span>
            </Link>
        

            <div className='w-28 sm:w-80 flex flex-col gap-4 h-[100vh] relative pl-10 py-12 border border-black '>
                <Link href="/admin/addProduct" className={`flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white ${path == "/admin/addProduct"?"shadow-[-5px_5px_0px_#000000] ":""}`}>
                    
                    {/* plus icon  */}
                    

                    <p>Add Blogs</p>
                </Link>
                <Link href="/admin/bloglist"  className={`flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white ${path == "/admin/blogList"?"shadow-[-5px_5px_0px_#000000] ":""}`}>
                   
                   {/* blog icon  */}


                    <p>Blogs List</p>
                </Link>
                <Link href="/admin/subscription" className={`flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white ${path == "/admin/subscription"?"shadow-[-5px_5px_0px_#000000] ":""}`} >
                    
                    {/* email icon  */}

                    <p>Subscription</p>
                </Link>

            </div>


        </div>
    )
}

export default Sidebar