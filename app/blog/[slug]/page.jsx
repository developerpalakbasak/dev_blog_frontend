"use client";
import Footer from "@/Components/Footer";
import Menu from "@/Components/Menu";
import axios from "axios";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Blog = ({ params }) => {

    const resolvedParams = React.use(params);
    const [blogData, setBlogData] = useState(null);

    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    // Fetch blog data with useEffect
    useEffect(() => {

        const fetchBlogData = async () => {

            const { slug } = await resolvedParams;
            const res = await axios.get(`${apiUrl}/api/blog`, { params: { slug } });
            setBlogData(res.data.blog);

        }

        fetchBlogData();

    }, [params]);

console.log(blogData)


    return blogData ? <>
        <div className="bg-slate-300 py-5 pb-32">
            <Menu />
            <div className=" flex flex-col justify-center gap-3 items-center" >
                <h1 className="text-4xl font-semibold max-w-[700px] mx-auto" > {blogData.title}</h1>
                {/* <Image src={blogData.authorImg} height={40} width={40} alt="" /> */}
                <p>{blogData.author}</p>
            </div>
        </div>

        <div className=" mx-5 max-w-[800px] md:mx-auto mt-[-50px] mb-10 ">
            <div className="flex justify-center relative ">
                <div className="absolute h-full w-full"></div>
                <Image className="border-4 border-white" src={blogData.image} height={600} width={600} alt="" />
            </div>
            <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>

            <p>{blogData.description}</p>

        </div>

        <Footer />

    </> : <>
        <h1 className="flex content-center justify-center">Loading</h1>
    </>
};

export default Blog;
