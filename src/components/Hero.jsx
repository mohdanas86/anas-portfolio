import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
   // const img = "https://anas-frkr.onrender.com/ak.png";
  return (
    <div className="w-full bg-slate-900">
    <div id="hero" className="flex justify-between items-center flex-col md:flex-row w-full md:w-[80%] mx-auto py-[3rem] md:py-[5rem] md:px-0 px-4">
    {/* LEFT SECTION */}
    <div className="flex justify-center items-center text-center md:text-start md:items-start flex-col w-full md:w-[80%]  gap-2 md:gap-4 order-2 md:order-1">
  <h2 className="text-2xl md:text-3xl text-slate-400 font-semibold">
  i'm a
  </h2>
  <h2 className="text-4xl md:text-5xl text-white font-semibold">
  mern stack devloper
  </h2>
  <p className="md:text-xl text-slate-400">
  react.js, node.js, express.js, mongoDb
  </p>
  <div className="flex justify-center items-center gap-4  text-white">
  <FaArrowRightLong /> <a href="#about" className="duration-300 text-white hover:text-blue-500">About me</a> 
    </div>
    </div>
    {/* RIGHT SECTION */}

    </div>
    </div>
  )
}

export default Hero
