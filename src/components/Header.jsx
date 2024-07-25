import {useState} from 'react'
import { BsListNested } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
  import { FaInstagram } from "react-icons/fa";
    import { IoLogoYoutube } from "react-icons/io";
  import { IoLogoFacebook } from "react-icons/io5";
  import { FaLinkedin } from "react-icons/fa";
  import { SiFiverr } from "react-icons/si";
  import { FaGithub } from "react-icons/fa6";

// link list icons
import { CiHome } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiFileOn } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";

const Header = () => {
  const [ show, setShow ] = useState(false);
  const img = "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/profile-img.jpg";
  
  const hideMenu =(e)=>{
    setShow(e=>!e)
  }
  
  return (
    <>
    <div className="w-full mx-auto shadow- sticky top-0 left-0 z-50 bg-white shadow-lg">
    <div className="w-full md:w-[80%] mx-auto py-3 md:py-4 md:px-0 px-4">
    <span className="flex justify-start items-center cursor-pointer  w-[5%] text-2xl" onClick={e=>setShow(e=>!e)}>
    {!show ? <RxHamburgerMenu /> : <BsListNested />}
    </span>
    </div>
    </div>
    
    {/* OVERPLAY MENU */}
    <div className={`z-[9999] block w-full h-full fixed bg-[rgba(0,0,0,0.135)] top-0 ${!show ? "hidden" : "block"}`} onClick={e=>setShow(e=>!e)}>
    {/* SLIDE LEFT MENU */}
    <div className="bg-slate-900 text-white flex flex-col justify-start items-start p-4 w-[50%] md:w-[30%] h-full" onClick={e=>e.stopPropagation()}>
    
    <div className="flex flex-col justify-start items-center mt-12">

    <h3 className="text-lg font-semibold">Anas A.</h3>
    
    <div className="w-full flex justify-around md:justify-center md:gap-4 items-center py-2 ">
    <a href="https://www.instagram.com/@_anas__86"><div className="socialIcon"><FaInstagram /></div></a>
    <a href="https://www.facebook.com/Anas725"><div className="socialIcon"><IoLogoFacebook /></div></a>
    <a href="https://www.youtube.com/c/AG4444YT"><div className="socialIcon"><IoLogoYoutube /></div></a>
    <a href="https://github.com/mohdanas86"><div className="socialIcon"><FaGithub /></div></a>
    </div>
    </div>
    
    {/* LINK LIST */}
    <ul className="flex flex-col mt-4 md:mt-8 gap-2 md:gap-4 text-white">
    <a href="#" onClick={hideMenu}><li className="flexStart gap-2  hover:text-gray-400 cursor-pointer anim"><CiHome />Home</li></a>
    <a href="#about" onClick={hideMenu}><li className="flexStart gap-2  hover:text-gray-400 cursor-pointer anim"><CiUser />About</li></a>
    <a href="#skills" onClick={hideMenu}><li className="flexStart gap-2  hover:text-gray-400 cursor-pointer anim"><MdWorkspacesOutline />Skills</li></a>
    <a href="#contact" onClick={hideMenu}><li className="flexStart gap-2  hover:text-gray-400 cursor-pointer anim"><CiMail />Contact</li></a>
    <a href="#projects" onClick={hideMenu}><li className="flexStart gap-2  hover:text-gray-400 cursor-pointer anim"><CiFileOn />Projects</li></a>
    </ul>
    
    </div>
    </div>
    </>
  )
}

export default Header
