import React from 'react'
import Projectcard from "../components/Projectcard.jsx"

const Projects = () => {
  return (
    <>
      <div id="skills" className="bg-[#F5F8FD] w-full">
    <div id="projects" className="flex justify-center flex-col items-start w-full md:w-[80%] mx-auto py-12 md:px-0 px-4 gap-4">
    <h2 className="pb-1 border-b-[2px] border-blue-500 text-lg font-semibold text-[#173B6D]">Projects</h2>
    
     <p className="text-slate-600">
   I possess strong skills in React for front-end development, Node.js and Express.js for back-end development, along with proficiency in MongoDB for database management. Additionally, I have experience in front-end frameworks like Bootstrap and Tailwind CSS, as well as expertise in HTML and CSS for web design.
   </p>
    
    <div className="w-full mt-2 grid gap-4 md:gap-6 md:grid-cols-3 grid-cols-2">
  <Projectcard />
    </div>
    </div>
    </div>
    </>
  )
}

export default Projects