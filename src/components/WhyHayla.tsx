import React from 'react'
import { RxStopwatch } from "react-icons/rx";
import { FiWatch } from "react-icons/fi";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";

const WhyHayla = () => {
  return (
    <section className='w-[100%] bg-white px-[10%] pt-28 pb-10 '>
        <div className='flex flex-col sm:flex-row  justify-between items-start' >
            {/* First column */}
            <div className='flex flex-col sm:w-[35%] w-[70%] gap-y-6'>
                <p className='text-[7vw] sm:text-[4vw] text-[#131313] font-bold font-Syne' >Why is Hayla for you?</p>

                <svg xmlns="http://www.w3.org/2000/svg" width="220" height="63" viewBox="0 0 283 63" fill="none">
  <path d="M-86 7.99997C-86 7.99997 176.222 46.0501 255.519 21.5294C354 -12.5 134.281 -3.17709 181.833 61.479" stroke="#D7172A" stroke-width="3" stroke-miterlimit="10"/>
</svg>
<div className=' md:h-[5vw] h-[9vw] sm:h-[7vw] hover:cursor-pointer   flex flex-row justify-center gap-x-1  items-center border border-[#D7172A] rounded-[2.5vw]' >
          <p className=' font-Syne text-[#D7172A] text-[3vw] sm:text-[2vw] md:text-[1.3vw] whitespace-nowrap '>Download App</p>
          <FaDownload className="text-[#D7172A] w-[3vw] sm:w-[2vw] md:w-[1.3vw] h-[3vw] sm:h-[2vw] md:h-[1.3vw]" />
        </div>

          
            </div>
            {/* Second colunm */}
            <div className='flex flex-col w-[90%] gap-y-10 sm:w-[50%]  mt-10' >

                 {/* first row */}
 <div className='flex flex-row gap-x-8  ' >
 <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 36 36" fill="none">
  <path d="M14 20.8C14 22.352 15.2 23.6 16.672 23.6H19.68C20.96 23.6 22 22.512 22 21.152C22 19.696 21.36 19.168 20.416 18.832L15.6 17.152C14.656 16.816 14.016 16.304 14.016 14.832C14.016 13.488 15.056 12.384 16.336 12.384H19.344C20.816 12.384 22.016 13.632 22.016 15.184" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18 10.8V25.2" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M34 18C34 26.832 26.832 34 18 34C9.168 34 2 26.832 2 18C2 9.168 9.168 2 18 2" stroke="#131313" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M26 4V10H32" stroke="#131313" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M34 2L26 10" stroke="#131313" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                <div className='flex flex-col justify-center items-start gap-y-4'>
                <p className='text-[#131313] font-Syne text-[4.8vw] sm:text-[2.2vw] font-semibold' >Instant Value </p>
                <p className="  text-[#131313] font-Syne font-[400] sm:text-[1.5vw] text-[3.8vw] tracking-[-0.14] opacity-60">No more time wasted on meaningless calls; every second means more dollars in your pocket.</p>

                </div>
                </div>


                {/* second row */}
                <div className='flex flex-row gap-x-8  ' >
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 36 36" fill="none">
  <path d="M32.4 27.1432C32.4 27.6632 32.2844 28.1976 32.0389 28.7176C31.7933 29.2376 31.4756 29.7287 31.0567 30.1909C30.3489 30.9709 29.5689 31.5342 28.6878 31.8953C27.8212 32.2564 26.8823 32.4442 25.8712 32.4442C24.3979 32.4442 22.8235 32.0975 21.1624 31.3898C19.5014 30.682 17.8403 29.7287 16.1936 28.5298C14.5326 27.3165 12.9582 25.9732 11.456 24.4854C9.96821 22.9833 8.6249 21.4088 7.42603 19.7622C6.24161 18.1156 5.2883 16.4689 4.59498 14.8367C3.90166 13.1901 3.555 11.6157 3.555 10.1135C3.555 9.1313 3.72833 8.19243 4.07499 7.32578C4.42165 6.44468 4.97053 5.63581 5.73607 4.9136C6.66049 4.00362 7.67158 3.55585 8.74045 3.55585C9.14489 3.55585 9.54933 3.64251 9.91043 3.81584C10.286 3.98917 10.6182 4.24917 10.8782 4.62472L14.2292 9.34796C14.4892 9.70906 14.677 10.0413 14.807 10.3591C14.937 10.6624 15.0092 10.9657 15.0092 11.2401C15.0092 11.5868 14.9081 11.9335 14.7059 12.2657C14.5181 12.5979 14.2437 12.9446 13.897 13.2912L12.7993 14.4323C12.6404 14.5912 12.5682 14.779 12.5682 15.0101C12.5682 15.1256 12.5826 15.2267 12.6115 15.3423C12.6548 15.4578 12.6982 15.5445 12.727 15.6312C12.987 16.1078 13.4348 16.7289 14.0704 17.48C14.7203 18.2311 15.4137 18.9967 16.1648 19.7622C16.9447 20.5277 17.6958 21.2355 18.4614 21.8855C19.2125 22.521 19.8336 22.9544 20.3247 23.2144C20.3969 23.2432 20.4836 23.2866 20.5847 23.3299C20.7002 23.3732 20.8158 23.3877 20.9458 23.3877C21.1913 23.3877 21.3791 23.301 21.538 23.1421L22.6357 22.0588C22.9968 21.6977 23.3435 21.4233 23.6757 21.25C24.0079 21.0477 24.3402 20.9466 24.7013 20.9466C24.9757 20.9466 25.2646 21.0044 25.5824 21.1344C25.9001 21.2644 26.2323 21.4522 26.5934 21.6977L31.3745 25.0921C31.75 25.3521 32.01 25.6554 32.1689 26.0165C32.3133 26.3776 32.4 26.7387 32.4 27.1432Z" stroke="#131313" stroke-width="2.2" stroke-miterlimit="10"/>
  <path d="M22.3324 9.2902L25.2213 12.179L30.9989 6.40137" stroke="#131313" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                <div className='flex flex-col justify-center items-start gap-y-4'>
                <p className='text-[#131313] font-Syne text-[4.8vw] sm:text-[2.2vw] font-semibold' >Instant Payment </p>
                <p className="  text-[#131313] font-Syne font-[400] sm:text-[1.5vw] text-[3.8vw] tracking-[-0.14] opacity-60">Whether you're a seasoned influencer or on the rise to fame, you can make every call count.</p>

                </div>
                </div>


                {/* third row */}

                <div className='flex flex-row gap-x-8  ' >
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 36 36" fill="none">
  <path d="M31.125 19.875C31.125 27.12 25.245 33 18 33C10.755 33 4.875 27.12 4.875 19.875C4.875 12.63 10.755 6.75 18 6.75C25.245 6.75 31.125 12.63 31.125 19.875Z" stroke="#131313" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18 12V19.5" stroke="#131313" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.5 3H22.5" stroke="#131313" stroke-width="2.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                <div className='flex flex-col justify-center items-start gap-y-4'>
                <p className='text-[#131313] font-Syne text-[4.8vw] sm:text-[2.2vw] font-semibold' >Monetize Your Time </p>
                <p className="  text-[#131313] font-Syne font-[400] sm:text-[1.5vw] text-[3.8vw] tracking-[-0.14] opacity-60">For influencers, every call is an instant source of income.
Fans get direct access by making a small investment.</p>

                </div>
                </div>


                {/* fourth row */}
              

                <div className='flex flex-row gap-x-8  ' >
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 40 40" fill="none">
  <path d="M22.4 20C22.4 25.088 18.288 29.2 13.2 29.2C8.112 29.2 4 25.088 4 20C4 14.912 8.112 10.8 13.2 10.8" stroke="#131313" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.8 20C16.8 14.704 21.104 10.4 26.4 10.4C31.696 10.4 36 14.704 36 20C36 25.296 31.696 29.6 26.4 29.6" stroke="#131313" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                <div className='flex flex-col justify-center items-start gap-y-4'>
                <p className='text-[#131313] font-Syne text-[4.8vw] sm:text-[2.2vw] font-semibold' >Time for Fans </p>
                <p className="  text-[#131313] font-Syne font-[400] sm:text-[1.5vw] text-[3.8vw] tracking-[-0.14] opacity-60">Micro-consultancy solves this problem of influencers who can’t possibly interact with everyone who wants to talk to them.</p>

                </div>
                </div>




                



            </div>
            

        </div>
    </section>
  )
}

export default WhyHayla