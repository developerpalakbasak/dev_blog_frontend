"use client"

import Header from "@/Components/Header";
import BlogItem from "@/Components/BlogItem";
import Image from "next/image";
import BlogList from "@/Components/BlogList";
import Footer from "@/Components/Footer";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
    <ToastContainer/>
    <Header/>
    <BlogList/>
    <Footer/>
    </>
  );
}
