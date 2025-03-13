"use client";
import BlogTableItem from '@/Components/AdminComponents/BlogTableItem';
import Loader from '@/Components/Loader';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const page = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const revBlogs = [...blogs].reverse();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'



  const fetchBlogs = async () => {
    try {

        const response = await axios.get(`${siteUrl}/api/blog`);


        const { data } = response


        // console.log(data.blogs)

        setBlogs(data.blogs);
        setLoading(false)
    } catch (error) {
        console.log(error.message)
    } finally {
      setLoading(false)
    }

}

console.log(blogs)


  const deleteBlog = async (mongoId) => {
    try {
      const res = await axios.delete(`/api/blog?id=${mongoId}`);

      console.log(res.data);
      
      toast.success(res.data.msg);
      fetchBlogs();
    } catch (error) {
      toast.error('Failed to delete blog');
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1>All Blogs</h1>
      <div className="relative h-[80vh] max-w-[850px] mt-4 border overflow-x-hidden border-gray-400 scrollbar-hide">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <Loader/>
          </div>
        ) : (
          <table className="w-full text-sm text-gray-500">
            <thead className="text-sm text-gray-700 text-left uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-black">Author Name</th>
                <th scope="col" className="px-6 py-3 text-black">Blog Title</th>
                <th scope="col" className="px-6 py-3 text-black">Blog Date</th>
              </tr>
            </thead>
            <tbody>
              {revBlogs.map((item, index) => (
                <BlogTableItem
                  key={item._id}
                  mongoId={item._id}
                  title={item.title}
                  author={item.author}
                  date={item.date}
                  deleteBlog={deleteBlog}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default page;
