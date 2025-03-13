"use client"
import axios from 'axios';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';

const Page = () => {
  const [image, setImage] = useState(null);
  const formRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const categoryRef = useRef(null);
  const authorRef = useRef(null);

  const siteUrl = process.env.NEXT_PUBLIC_BACKEND_URL 



  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', titleRef.current.value);
    formData.append('description', descriptionRef.current.value);
    formData.append('category', categoryRef.current.value);
    formData.append('author', authorRef.current.value);
    formData.append('image', image);

    try {
      const response = await axios.post(`${siteUrl}/api/blog`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log(response.data.blogData);
      if (response.data.success) {
        toast.success(response.data.msg);
        setImage(null);
        formRef.current.reset(); // Reset the form
      } else {
        toast.error(response.data.msg || 'Something went wrong');
      }
    } catch (error) {
      toast.error('An error occurred while submitting the form');
    }
  };

    // Handle paste event to insert image
    const onPasteHandler = (e) => {
      const items = e.clipboardData.items;
      // console.log(items)
      for (const item of items) {
        // console.log(item)
        if (item.type.startsWith("image")) {
          const file = item.getAsFile();
          // console.log(file)
          setImage(file);
          return;
        }


      }
    };



  return (
    <div onPaste={onPasteHandler}>
      <form ref={formRef} onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Upload Thumbnail</p>

        <div htmlFor="image" className='relative w-[200px]'>
          <Image
            className="mt-5 cursor-pointer w-full"
            src={image ? URL.createObjectURL(image) : "/upload_area.png"}
            width={140}
            height={70}
            alt="Upload Thumbnail"
          />
          <input
            className='absolute w-full h-full left-0 top-0 opacity-0 cursor-pointer'
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            required
          />
        </div>


        <p className="text-xl mt-5">Blog Title</p>
        <input
          ref={titleRef}
          className="mt-3 px-4 py-2 rounded border border-black"
          type="text"
          placeholder="Type here"
        />
    
        <p className="text-xl mt-5">Author</p>
        <input
          ref={authorRef}
          className="mt-3 px-4 py-2 rounded border border-black"
          type="text"
          placeholder="Enter your name"
        />

        <p className="text-xl mt-5">Description</p>
        <textarea
          ref={descriptionRef}
          rows={6}
          className="mt-3 pr-12 pl-4 py-2 rounded border border-black"
          placeholder="Type here"
        />

        <p className="text-xl mt-5">Category</p>
        <select
          ref={categoryRef}
          defaultValue="Technology"
          className="border border-black px-3 py-2 mt-3 rounded"
        >
          <option value="Technology">Technology</option>
          <option value="Startup">Startup</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>

        <br />
        <button type="submit" className="rounded mt-8 w-40 h-12 bg-black text-white">
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default Page;
