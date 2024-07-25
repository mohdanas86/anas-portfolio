import React from 'react'

const About = () => {
 //  const img = "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/profile-img.jpg";
  return (
  <div id="about" className="flex justify-center items-center flex-col md:flex-row w-full md:w-[80%] mx-auto py-12 md:px-0 px-4">
  <div className="w-full flex justify-center items-start flex-col gap-4">
  <h2 className="pb-1 border-b-[2px] border-blue-500 text-lg font-semibold text-[#173B6D]">About me</h2>
  <p className="text-slate-600">I am Anas, a seasoned MERN stack developer with two years of professional experience in developing, maintaining, redesigning, and optimizing websites. My expertise lies in utilizing MongoDB, Express.js, React, and Node.js to create high-performance, scalable web applications. I am dedicated to delivering superior user experiences and ensuring efficient functionality in all my projects.</p>

    <h2 className="text-lg font-semibold text-[#173B6D]">UI/UX Designer & MERN Stack Developer</h2>
     <p className="text-slate-600">
     I am a proficient UI/UX Designer and MERN Stack Developer with two years of experience in creating user-centric, visually appealing, and highly functional web applications.
     </p>
     <div className="w-[80%] m-auto flex justify-center gap-2 flex-col items-start">
     <span><strong>Degree:</strong> BCA</span>
     <span><strong>Email:</strong> coadanas@gmail.com</span>
     <span><strong>Freelance:</strong> Available</span>
    </div>
    <p className="text-slate-600">
    My approach to design and development is grounded in meticulous attention to detail and a deep understanding of user behavior. I thrive on transforming complex requirements into intuitive and engaging interfaces, ensuring both aesthetics and usability are seamlessly integrated. Whether working on a complete redesign or enhancing existing applications, I leverage my skills in the MERN stack to deliver high-performance, scalable solutions that exceed client expectations.
    </p>
    </div>
    </div>
  )
}

export default About
