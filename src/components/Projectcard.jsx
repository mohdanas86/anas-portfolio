import {useState} from 'react'
import {Projects} from "../assets/data.jsx"

const Projectcard = () => {
  const [img, setImg]=useState(Projects)
  return (
    <>
        {img &&
      img.map((v, i)=>{
        return(
          <a href={v.url}>
    <div className="w-[100%]  flex justify-center items-center flex-col border border-slate-400 rounded-lg shadow-2xl overflow-hidden border-0">
            <img src={v.img} alt={v.img} />
    </div>
    </a>
          )
      })
    }
    </>
  )
}

export default Projectcard