"use client"
import EmailTableItem from '@/Components/AdminComponents/EmailTableItem'
import Loader from '@/Components/Loader'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {

  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true); 
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'


  const fetchEmails = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${siteUrl}/api/blog`);
      setEmails(res.data.emails);
    } catch (error) {
      toast.error('Failed to fetch emails');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  const deleteEmail = async (mongoId) => {
    const res = await axios.delete('/api/email', {
      params: {
        id: mongoId
      }
    })
    toast.success(res.data.msg)
    fetchEmails();
  }

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
      <h1>All Emails</h1>
      <div className='relative h-[80vh] max-w-[850px] mt-4 border overflow-x-hidden border-gray-400 scrollbar-hide'>
        <div className='flex flex-col'>
        {loading ? (
            <div className="flex items-center justify-center h-full mt-36">
              <Loader/>
            </div>
          ) : emails.length > 0 ? (
            emails.map((item, index) => (
              <EmailTableItem
                key={index}
                email={item.email}
                mongoId={item._id}
                date={item.date}
              
              />
            ))
          ) : (
            <div className="flex items-center justify-center h-full">
              <h1>No emails found</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default page