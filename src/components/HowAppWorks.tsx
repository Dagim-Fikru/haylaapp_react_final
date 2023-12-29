import React from 'react'

const HowAppWorks = () => {
  return (
    <div className='w-[100%] px-[15%]  py-32 bg-[#141414]'>
        <div className='flex flex-col justify-start items-center'>
        <p className='text-white text-[6vw] sm:text-[4vw] font-Syne font-bold tracking-[-0.88]'  >How the App Works?</p>
        {/* Boxes */}
        <div className='flex flex-col sm:flex-row justify-center gap-8 mt-10 items-center w-[100%]'>

            <div className='flex flex-col justify-between bg-[#D7172A] w-[90%] sm:w-[30%] h-[40vw] sm:h-[25vw] items-start rounded-3xl py-[5%] px-[3%]'>
            <p className='text-white text-[4vw] sm:text-[1.6vw] font-Syne font-semibold tracking-[-0.6]' >Sign Up and you recieve number.</p>
            <p className='text-white text-[10vw] sm:text-[6vw] font-Syne font-semibold tracking-[-0.4px]' >01</p>
            </div>


            <div className='flex flex-col justify-between bg-[#D7172A] w-[90%] sm:w-[30%] h-[40vw] sm:h-[25vw] items-start rounded-3xl py-[5%] px-[3%]'>
            <p className='text-white text-[4vw] sm:text-[1.6vw] font-Syne font-semibold tracking-[-0.6]' >Make or Recieve Calls.</p>
            <p className='text-white text-[10vw] sm:text-[6vw] font-Syne font-semibold tracking-[-0.4px]' >02</p>
            </div>


            <div className='flex flex-col justify-between bg-[#D7172A] w-[90%] sm:w-[30%] h-[40vw] sm:h-[25vw] items-start rounded-3xl py-[5%] px-[3%]'>
            <p className='text-white text-[4vw] sm:text-[1.6vw] font-Syne font-semibold tracking-[-0.6]' >If call gets answered, you pay.</p>
            <p className='text-white text-[10vw] sm:text-[6vw] font-Syne font-semibold tracking-[-0.4px]' >03</p>
            </div>

            


            
            
            
            

        </div>
        </div>

        
    </div>
  )
}

export default HowAppWorks