
import Image from 'next/image'
import React from 'react'
import { CgProfile } from 'react-icons/cg'

const BlogTableItem = ({title, author, date, deleteBlog, mongoId}) => {

   const blogDate = new Date(date)
  return (
    <tr>
        <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap' >
            {/* <Image src={authorImg?authorImg:<CgProfile size={40}/>} alt='' width={40} height={40} /> */}
            <p>{author?author:"No Author"}</p>
             </th>
             <td className='px-6 py-4'>
                {title?title:"No Title"}
             </td>
             <td className='px-6 py-4'>
               {blogDate.toDateString()}
             </td>
             <td onClick={() => deleteBlog(mongoId)} className='px-6 py-4 cursor-pointer'>
                x
             </td>
    </tr>
  )
}

export default BlogTableItem