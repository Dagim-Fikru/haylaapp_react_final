"use client"
import React, { useRef, useState } from 'react'
import testImgOne from "../../public/images/test1.jpg"
import testImgTwo from "../../public/images/test2.jpg"
import testImgThree from "../../public/images/test3.jpg"
import testImgFour from "../../public/images/test4.jpg"
import Image from 'next/image'
import { IoStar } from "react-icons/io5";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { ImStarHalf } from "react-icons/im";
import ClientCard from './ClientCard'

import { useAnimate } from 'framer-motion'






const clients=[
    {
        name:"Jill",
        testimony:"Your dream of sharing a 1-1 interaction meaningful interaction with an icon is now within reach, thanks to Hayla. The influencer receives money for the call so they It's a win-win for both sides.",
        stars:5,
   
    clientImg:testImgOne

    },
    {
        name:"Morgan",
        testimony:"Your dream of sharing a 1-1 interaction meaningful interaction with an icon is now within reach, thanks to Hayla. The influencer receives money for the call so they It's a win-win for both sides.",
        stars:5,
   
    clientImg:testImgTwo

    },
    {
        name:"Sam",
        testimony:"Your dream of sharing a 1-1 interaction meaningful interaction with an icon is now within reach, thanks to Hayla. The influencer receives money for the call so they It's a win-win for both sides.",
        stars:5,
   
    clientImg:testImgThree

    },
    {
        name:"Eden",
        testimony:"Your dream of sharing a 1-1 interaction meaningful interaction with an icon is now within reach, thanks to Hayla. The influencer receives money for the call so they It's a win-win for both sides.",
        stars:5,
   
    clientImg:testImgFour

    }
]


const Testimonials = () => {

    const [currentClients,setCurrentClients]=useState(clients.slice(0,3))

    const [scope , animate]=useAnimate() 
   
    const animateBack=async()=>{
        
        const firstClient=clients.shift()
        clients.push(firstClient!)
       
        setCurrentClients(clients.slice(0,3))
        
        await animate('.client',{x:[-100,0]},{delay:0, duration:0.2})
    }

    
    const animateForward=async()=>{
        const firstClient=clients.shift()
        clients.push(firstClient!)
       
        setCurrentClients(clients.slice(0,3))
        
        await animate('.client',{x:[100,0]},{delay:0, duration:0.2})
    }



  return (
    <div className='bg-white  py-[4%] px-[10%] ' >

<p className='text-[#131313] text-[6vw] sm:text-[4vw]  font-Syne font-bold tracking-[-0.88] text-center'  >What is everyone saying?</p>











{/* testimonials */}
<div ref={scope} className='flex w-[100%]   gap-x-4 justify-center items-center mt-10  ' >

{/* Arrow back */}

<div onClick={animateBack} className=' relative z-20 flex flex-col  justify-center w-[8vw] h-[8vw] sm:h-[4vw] sm:w-[4vw]   items-center rounded-full p-2  shadow-sm shadow-black mr-[-3%]'>
<MdArrowBackIos className=" text-gray-400 text-[2.2vw] " />
</div>

{
    currentClients.map((client,index)=><ClientCard  key={index} client={client} />)
}

{/* arrrow forward */}
<div onClick={animateForward} className=' relative z-20 flex flex-col justify-center w-[8vw] h-[8vw] sm:h-[4vw] sm:w-[4vw]   items-center rounded-full p-2 shadow-sm shadow-black ml-[-3%]'>
<MdArrowForwardIos className=" text-gray-400 text-[2.2vw] "  />
</div>


    
</div>













{/* dots */}

<div className='flex flex-row gap-x-4 justify-center items-center mt-24 ' >
    <span className='w-3 h-3 rounded-full bg-slate-500 ' ></span>
    <span className='w-3 h-3 rounded-full bg-black ' ></span>
</div>
        
    </div>
  )
}

export default Testimonials


