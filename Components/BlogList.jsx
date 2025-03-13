"use client"
import BlogItem from "./BlogItem"
import { useEffect, useState } from "react"
import axios from "axios";

const BlogList = () => {

    const [menu, setMenu] = useState("All");
    const [blogs, setBlogs] = useState([]);
    const [loader, setLoader] = useState(true)
    const [error, setError] = useState(false)

    const siteUrl = process.env.NEXT_PUBLIC_BACKEND_URL

    const fetchBlogs = async () => {
        try {

            const response = await axios.get(`${siteUrl}/api/blogS`);


            const { data } = response


            // console.log(data.blogs)

            setBlogs(data.blogs);
            setLoader(false)
        } catch (error) {
            // console.log(error.message)
            setError(error.message)
        } finally {
            setLoader(false)
        }
    }






    useEffect(() => {
        fetchBlogs();
    }, [])



    const seleted = "bg-black text-white py-1 px-4 rounded-sm  "
    const nav = ["All", "Technology", "Startup", "Lifestyle"]

    return (
        <div>
            <div className="flex justify-center gap-6 my-10 mx-[20px]
            ">
                {nav.map((i) => (
                    <button
                        key={i}
                        onClick={() => setMenu(i)}
                        className={menu === i ? seleted : "py-1 px-4"}
                    >
                        {i}
                    </button>
                ))}
            </div>

            {<div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
                {
                    !error ? (loader ? (
                        "Loading"
                    ) : (
                        blogs.length < 1 ? (
                            "No Post Available"
                        ) : (
                            blogs
                                .filter((item) => menu === "All" ? true : item.category === menu).reverse()
                                .map((item) => (


                                    <BlogItem
                                        key={item._id}
                                        id={item._id}
                                        title={item.title}
                                        slug={item.slug}
                                        description={item.description}
                                        category={item.category}
                                        image={item.image}
                                    />
                                ))
                        )
                    )) : (
                        <>
                            <h1>{error}</h1>
                        </>
                    )
                }
            </div>}

        </div>
    )
}

export default BlogList