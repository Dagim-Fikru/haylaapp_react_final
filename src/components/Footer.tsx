import Image from 'next/image'
import React from 'react'
import footerImg from '../../public/images/footer-img1.png'
import { FaFacebook } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (

    //fisrt part
    <div className='p-[1%]'>
        <div className='flex flex-col-reverse sm:flex-row justify-between items-center p-[8%] gap-y-10'>
            <div className='flex flex-col sm:w-[50%] gap-y-10' > 
            <p className='text-white font-Syne font-bold tracking-[-0.88px] sm:text-[4vw] text-[6vw]'>Have a Question?</p>
            <p className="  text-[#E9E9E9] font-Syne font-[400] sm:text-[1.5vw] text-[4vw] tracking-[-0.14] opacity-60">This app is so simple that you won’t even need to contact support for help because of how easy it is to navigate/use. But if you do find yourself needing help with anything then that’s all good.
</p>

<div>
<p className='text-[#E9E9E9] font-Syne font-bold tracking-[-0.88px] md:text-[1.2vw] text-[3vw] sm:text-[2vw] opacity-60 ' >Contact Us</p>
    <p  className='text-white font-Syne font-[500] text-[3.4vw] tracking-[-0.68px]' >+1 123 000-00-00</p>
</div>

            </div>

            <div className='sm:w-[40%] w-[80%]' >
                <Image src={footerImg} alt="footer image" className='w-[100%] rounded-full' />
            </div>
    </div>

    {/* Second part */}

        <div style={{background: 'linear-gradient(70deg,#C74646 0%,#990000 30%,#ff6666 40%, #D36F6F 80%,#C74646 100%)' }} className=' h-[100px] p-[3%] mx-5 rounded-3xl flex flex-row justify-between items-center ' >
            <span className='text-white font-Syne text-[4vw] sm:text-[2.4vw] md:text-[1.2vw] font-bold tracking-[-0.4px]' >Follow us on</span>
            
            <div className='flex flex-row justify-center gap-x-2 items-center' >
           

           <Link href="#">
           <FaFacebook className="text-white text-xl sm:text-3xl" />
           </Link>
           <Link href="#">
           <TiSocialTwitter className="text-white text-xl sm:text-3xl" />
           </Link>
           <Link href="#">
           <FaInstagram className="text-white text-xl sm:text-3xl" />
           </Link>


            </div>

        </div>

{/* Copy right */}
        <p className='text-white font-Syne font-[500] text-[3.4vw] sm:text-[1.2vw] opacity-60 tracking-[-0.32px] text-center' >
        c 2024 Hayla - All rights Reserved
        </p>

    </div>
  )
}

export default Footer