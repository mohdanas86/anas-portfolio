import {useState} from 'react'
import {Frontend, Backend} from "../assets/data.jsx"

const Skills = () => {
  const [forntend,setFrontend]=useState(Frontend)
  const [backend,setBackend]=useState(Backend)
  return (
    <div id="skills" className="bg-[#F5F8FD] w-full">
     <div id="about" className="flex justify-center flex-col items-start w-full md:w-[80%] mx-auto py-12 md:px-0 px-4 gap-4">
  <h2 className="pb-1 border-b-[2px] border-blue-500 text-lg font-semibold text-[#173B6D]">Skills</h2>
  
   <p className="text-slate-600">
   I possess strong skills in React for front-end development, Node.js and Express.js for back-end development, along with proficiency in MongoDB for database management. Additionally, I have experience in front-end frameworks like Bootstrap and Tailwind CSS, as well as expertise in HTML and CSS for web design.
   </p>
   {/* FRONTEND SKILL */}
   <div className="w-full flex justify-between items-start py-4 md:flex-row flex-col">
   <div className="flex justify-start items-center w-[50%]">
 <h2 className="pb-1 border-b-[2px] border-blue-500 text-lg font-semibold text-[#173B6D] mt-6">Frontend</h2>
   </div>
   
   <div className="w-full md:w-[50%] grid grid-cols-5 md:grid-cols-3 py-4">
   { forntend && 
     forntend.map((v,i)=>{
       return(
   <div className="flex justify-center items-center" key={i}>
   <img src={v.img} alt={v.img}  />
   </div>
         )
     })
   }
   </div>
   </div>
   {/* BACKEND SKILL */}
   <div className="w-full flex justify-between items-start md:flex-row flex-col">
   <div className="flex justify-start items-center w-[50%]">
 <h2 className="pb-1 border-b-[2px] border-blue-500 text-lg font-semibold text-[#173B6D] mt-6">Backend</h2>
   </div>
   
   <div className="w-full md:w-[50%] md:grid-cols-3 grid grid-cols-5 py-4">
   { backend && 
     backend.map((v,i)=>{
       return(
   <div className="flex justify-center items-center" key={i}>
   <img src={v.img} alt={v.img} />
   </div>
         )
     })
   }
   </div>
   </div>
   
    </div>
    </div>
  )
}

export default Skills