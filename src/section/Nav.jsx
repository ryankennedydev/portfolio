import React from 'react'
import avatar from '../assets/avatar.jpeg'
import { BsGithub,BsEnvelope,BsDiscord,BsLinkedin,BsX, BsXCircle, BsTwitter, BsTwitterX } from 'react-icons/bs'
import { useNavigate, useLocation } from 'react-router-dom'
import { ArrowRight  } from 'lucide-react'
import DecryptedText from '@/components/DecryptedText'
const Nav = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const Icons = [
        {
            "icone": <BsGithub />,"link": "https://github.com/ryankennedydev"
        },
        {
            "icone": <BsEnvelope />,"link": "https://github.com/ryankennedydev"
        },
        {
            "icone": <BsDiscord />,"link": "https://github.com/ryankennedydev"
        },
        {
            "icone": <BsLinkedin />,"link": "https://github.com/ryankennedydev"
        }
        ,
        {
            "icone": <BsTwitterX />,"link": "https://github.com/ryankennedydev"
        }
    ]

  return (
    <div className='flex p-7 gap-5  bg-stone-950 border-1 border-stone-500/10 w-full'>
      <div className='flex items-center'>
        <img src={avatar} alt="1313" className='w-25 '/>
      </div>
      <main className='flex justify-between items-center w-full'>
        <div className='flex flex-col gap-1  '>
            <div>
                <DecryptedText
                text="Ryan Kennedy"
                speed={70}
                maxIterations={10}
                characters="01#$%&@!?<>/"
                revealDirection="start"
                parentClassName="all-letters font-bold text-[23px] text-[#86efac]"
                encryptedClassName="encrypted"
                className="font-bold text-[23px] text-[#86efac]"
                
              />
            </div>
            <div className='flex gap-2'>
                <h1 onClick={() => {
                  navigate("/"); 
                }} className={`font-bold cursor-pointer ${location.pathname === "/" ? "text-[#86efac]" : "text-stone-500"}`}>/home</h1>
                <h1 onClick={() => {
                 navigate("/projects")
                }} className={`font-bold cursor-pointer ${location.pathname === "/projects" ? "text-[#86efac]" : "text-stone-500"}`}>/projects</h1>
            </div>
      </div>

      <div className='flex flex-col w-fit  gap-3  items-center hidden sm:flex sm:block'>
        <div className='flex gap-3 w-full'>
            {Icons.map((Icon) => (
            <div  className='flex text-stone-100 text-[20px]  hover:text-[#86efac]'>
                <a href={Icon.link}>{Icon.icone}</a>
            </div>
        ))}
        </div>
        <div className='w-full flex group'>
          <button className='w-full justify-center cursor-pointer flex border-1 group group-hover:border-[#86efac]/40 pl-7 pr-7  items-center gap-1 border-stone-500 p-2 '>
            <h1 className='text-stone-100  group-hover:text-[#86efac] '>resume</h1>
            <ArrowRight size={15} className='text-stone-100 group-hover:text-[#86efac]    '/>
          </button>
        </div>

      </div>
      </main>
      <div>

      </div>
    </div>
  )
}

export default Nav
