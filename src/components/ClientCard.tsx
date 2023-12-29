import { StaticImageData } from 'next/image'

import testImgOne from "../../public/images/test1.jpg"
import testImgTwo from "../../public/images/test2.jpg"
import testImgThree from "../../public/images/test3.jpg"
import Image from 'next/image'
import { IoStar } from "react-icons/io5";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { ImStarHalf } from "react-icons/im";

import { useContext } from 'react'

type Client={
    name:string,
    stars:number,
    testimony:string,
    clientImg:StaticImageData
}

const ClientCard = ({client}:{client:Client}) => {
  
    // const visibility = useContext(VisibilityContext);
  return (
    <div  className=' client flex flex-col justify-between items-center shadow-md shadow-gray-400 min-w-[100%] h-[60vw] sm:min-w-[33%]  sm:h-[30vw] py-[5%] px-[6%] sm:px-[3%]'>
           <Image  src={client.clientImg} alt="test one" className='md:w-20 md:h-20 w-10 h-10 rounded-full' />

           <div className='flex flex-row justify-center items-center' >
           <IoStar className="text-[#fcba03]" />
           <IoStar className="text-[#fcba03]" />
           <IoStar className="text-[#fcba03]" />
           <IoStar className="text-[#fcba03]" />
           <IoStar className="text-[#fcba03]" />
           
           </div>



           <p className="  text-[#131313] font-Syne font-[400] sm:text-[1.5vw] text-[3.4vw] tracking-[-0.14] text-center">No more time wasted on meaningless calls; every second means more dollars in your pocket.</p>

           <span className="  text-[#131313] font-Syne font-[400] sm:text-[1.5vw] text-[3.4vw] tracking-[-0.14] text-center opacity-65" >{client.name}</span>



        
            </div>
  )
}

export default ClientCard