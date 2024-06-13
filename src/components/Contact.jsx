import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoCall } from "react-icons/io5";

const Contact = () => {
  return (
  <div id="contact" className="flex justify-center items-start flex-col w-full md:w-[80%] mx-auto py-12 md:px-0 px-4">
      
      <h2 className="pb-1 border-b-[2px] border-blue-500 text-lg font-semibold text-[#173B6D]">Contact</h2>
      
      {/* CONTACT DETAILS */}
      <div className="w-full md:w-[60%] m-auto flex justify-center items-start flex-col mt-3 py-4 gap-4 md:px-4">
      <div className="flex justify-center items-center gap-4">
      <div className="w-[30px] h-[30px] flex justify-center items-center bg-blue-200 rounded-[50%]">
      <IoLocationSharp />
      </div>
      delhi india, 110001
      </div>
      <div className="flex justify-center items-center gap-4">
      <div className="w-[30px] h-[30px] flex justify-center items-center bg-blue-200 rounded-[50%]">
      <IoMail />
      </div>
      coadanas@gmail.com
      </div>
      <div className="flex justify-center items-center gap-4">
      <div className="w-[30px] h-[30px] flex justify-center items-center bg-blue-200 rounded-[50%]">
      <IoCall />
      </div>
      +91 00000 00000
      </div>
      </div>
      {/* CONTACT FORM */}
      <div className="formCon flex justify-center items-center w-full mt-6">
      <form className="w-full md:w-[60%] grid gap-4 grid-cols-1 md:p-4">
      <div className="grid grid-cols-2 gap-4">
      <input 
      type="text" 
      placeholder="Full name"
      className="rounded-lg py-1.5 px-4 border-[1.5px] border-slate-400 outline-0" 
      />
      <input 
      type="text" 
      placeholder="Email"
      className="rounded-lg py-1.5 px-4 border-[1.5px] border-slate-400 outline-0" 
      />
      </div>
      <input 
      type="text" 
      placeholder="Subject"
      className="rounded-lg py-1.5 px-4 border-[1.5px] border-slate-400 outline-0" 
      />
      <textarea 
      type="text" 
      placeholder="Email"
      className="rounded-lg py-1.5 px-4 border-[1.5px] border-slate-400 outline-0 h-full min-h-[200px]" 
      >
      </textarea>
      <button className="text-white bg-blue-500 rounded-lg py-2 px-4 border-[transparent] outline-0">Send</button>
      </form>
    </div>
      
    </div>
  )
}

export default Contact