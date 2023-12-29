import React from "react";
import heroImg from "../../public/images/hero-img1.png";
import phoneImg from "../../public/images/phone3.jpg";
import Image from "next/image";
import { GoDeviceCameraVideo } from "react-icons/go";
import { FiVolume2 } from "react-icons/fi";
import { IoMicOffOutline } from "react-icons/io5";
import { TbVideo } from "react-icons/tb";
import { ImPhoneHangUp } from "react-icons/im";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import phoneImageOne from "../../public/images/phone-img1.png";
import phoneImageTwo from "../../public/images/phone-img2.png";
import phoneImageThree from "../../public/images/phone-img3.png";
import profileOne from "../../public/images/profile1.png";
import profileTwo from "../../public/images/profile2.png";
import { FaPhone } from "react-icons/fa6";
import { PiPhone } from "react-icons/pi";


const Hero = () => {
  return (
    <section  className="w-[100%] px-[7%] pt-8 pb-32  overflow-x-hidden ">
      {/* Hero part */}

      <div style={{background: 'linear-gradient(270deg, #990000 9.5%, rgba(19, 19, 19, 0.00) 85.74%)'}} className=" z-0 absolute top-[0%] right-[-30%] sm:w-[60vw] sm:h-[60vw] w-[80vw] h-[80vw] opacity-50 rounded-full backdrop-blur-[300px] overflow-x-hidden" />

      <div  className="flex  flex-col-reverse sm:flex-row gap-10 justify-between items-center">
        {/* first column */}
        <div className="flex flex-col justify-center items-start sm:w-[35%] w-[80%] gap-y-8">
          <p className="sm:text-[5vw] text-[8vw] text-white font-bold font-Syne ">
            The call app that values your Time{" "}
          </p>
          <p className="  text-[#E9E9E9] font-Syne font-[400] md:text-[1.5vw] text-[3vw] tracking-[-0.14] opacity-60">
            VERB: to hail, to call someone in order to attract their attention.
          </p>
          <div className="flex flex-row justify-center items-center gap-x-4    text-white ">
            <p className=" font-Syne text-white text-[3vw] sm:text-[2.8vw] md:text-[1.3vw] whitespace-nowrap">
              Download App
            </p>
            <div className=" md:w-[4vw] md:h-[4vw] w-[8vw] hover:cursor-pointer h-[8vw] p-2  rounded-full bg-[#D7172A]   flex flex-col justify-center items-center">
              <FaApple className="text-white w-6 h-6 " />
            </div>
            <div className=" md:w-[4vw] md:h-[4vw] w-[8vw] h-[8vw] p-2 hover:cursor-pointer  rounded-full bg-[#D7172A]   flex flex-col justify-center items-center">
              <FaGooglePlay className="text-white w-6 h-6 " />
            </div>
          </div>
        </div>
        {/* hero image */}
        <div
          
          className="sm:w-[50%] w-[80%] flex flex-col items-center gap-y-8 relative z-10"
        >
          
          <Image
            src={heroImg}
            alt="hero image"
            className="w-[100%] rounded-xl"
          />
          <div className="flex flex-row justify-between items-center px-2 gap-x-2  bg-[#483d3d]  rounded-[35px]  text-white ">
            <div className=" md:w-[4vw] md:h-[4vw] w-[8vw] h-[8vw]  rounded-full bg-[#ffffff26]  flex flex-col justify-center items-center">
              <FiVolume2 className="text-white w-5 h-5" />
            </div>
            <div className=" md:w-[4vw] md:h-[4vw] w-[8vw] h-[8vw]  rounded-full bg-[#00000066]   flex flex-col justify-center items-center">
              <IoMicOffOutline className="text-white w-5 h-5" />
            </div>
            <div className=" md:w-[4vw] md:h-[4vw] w-[8vw] h-[8vw]  rounded-full bg-[#00000066]   flex flex-col justify-center items-center">
              <TbVideo className="text-white w-5 h-5" />
            </div>
            <div className=" md:w-[4vw] md:h-[4vw] w-[8vw] h-[8vw]  rounded-full bg-[#D7172A] opacity-40  flex flex-col justify-center items-center">
              <ImPhoneHangUp className="text-white w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Second Part  */}

      <div className="mt-40 text-center space-y-10 px-[10%] relative">
        <p className="text-white text-3xl font-Syne font-semibold">
          Say Goodbye to Frustrations.
        </p>
        {/* Two boxes */}
        <div className="flex sm:flex-row flex-col justify-center items-center gap-[30px] w-[100%] relative">
          {/* first box */}
          <div className="flex flex-col justify-center items-center w-[90%]  sm:w-[45%] h-[30vw] sm:h-[15vw] bg-white rounded-[30px] pl-10 pr-5">
            <p className="sm:text-[1.8vw] text-[3.5vw] text-[#131313] font-Syne font-[600]">
              Connect in Seconds
            </p>
            <p className="sm:text-[1.4vw] text-[2.8vw] font-Syne opacity-50">
              Hayla is a system that changes the way influencers and fans
              interact.
            </p>
          </div>

          {/* second box */}
          <div className="flex flex-col justify-center items-center w-[90%]  sm:w-[45%] h-[30vw] sm:h-[15vw] bg-white rounded-[30px] pl-10 pr-5">
            <p className="sm:text-[1.8vw] text-[3.5vw] text-[#131313] font-Syne font-[600]">
              Crystal Clear Voice
            </p>
            <p className="sm:text-[1.4vw] text-[2.8vw] font-Syne opacity-50">
              Also simplifies life for professionals who offer consultation
              services.
            </p>
          </div>
        </div>
      </div>

      {/* Third Part */}
      <div className="mt mt-52 flex flex-col space-y-20 ">
        {/* fist row */}
        


        <div className="flex sm:flex-row flex-col-reverse justify-between gap-y-6 items-center">
          <div className="flex flex-col sm:w-[40%] w-[90%] gap-y-8">
            <p className="text-white sm:text-[3vw] font-Syne font-semibold">
              For influencers and content createors.
            </p>
            <p className="  text-[#E9E9E9] font-Syne font-[400] sm:text-[1.5vw] text-[3.4vw] tracking-[-0.14] opacity-60">
              Maximize your time with Hayla answer calls, earn cash. Unknown
              caller? No worries. With each conversation, you're making money.
            </p>
          </div>

          {/*Phone Imagae */}
          <div className="sm:w-[40%] w-[90%]">
            <Image
              src={phoneImageOne}
              alt="phone"
              className="w-[100%] rounded-t-[50px] text-black"
            />
            <div
              style={{
                background:
                  "linear-gradient(90deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 107.49%)",
                backdropFilter: "blur(30px)",
              }}
              className="flex flex-col justify-center gap-y-3 items-center w-[20vw] h-[18vw] sm:w-[12vw] sm:h-[10vw] ml-[-10%] mt-[-10%] sm:ml-[-20%] sm:mt-[-20%] rounded-[2.5vw] "
            >
              <p className=" font-Syne text-white text-[1.8vw] sm:text-[1.4vw] font-[400] tracking-[-0.32]">
                UNKOWN
              </p>
              <div className="flex  gap-3 ">
                <div className=" sm:w-[4vw] sm:h-[4vw] w-[8vw] h-[8vw]  rounded-full bg-[#46D35F]  flex flex-col justify-center items-center">
                  <FaPhone className="text-white w-5 h-5" />
                </div>
                <div className=" sm:w-[4vw] sm:h-[4vw] w-[8vw] h-[8vw]  rounded-full bg-[#D7172A]  flex flex-col justify-center items-center">
                  <ImPhoneHangUp className="text-white w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* second row */}

        <div className="flex sm:flex-row-reverse flex-col-reverse justify-between gap-y-6 items-center">
          <div className="flex flex-col sm:w-[40%] w-[90%] gap-y-8">
            <p className="text-white sm:text-[3vw] font-Syne font-semibold tracking-[-0.88px]">
            For Fans
            </p>
            <p className="  text-[#E9E9E9] font-Syne font-[400] sm:text-[1.5vw] text-[3.4vw] tracking-[-0.14] opacity-60">
            Your dream of sharing a 1-1 interaction meaningful interaction with an icon is now within reach, thanks to Hayla. The influencer receives money for the call so they
will 100% respond. It's a win-win for both sides.
            </p>
          </div>

          {/*Phone Imagae */}
          <div className="sm:w-[40%] w-[90%]">
            <Image
              src={phoneImageTwo}
              alt="phone"
              className="w-[100%] rounded-t-[50px] text-black"
            />
            <div
              style={{
                background:
                  "linear-gradient(90deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 107.49%)",
                backdropFilter: "blur(30px)",
              }}
              className="flex  justify-center gap-y-3 items-center w-[20vw] h-[10vw] sm:w-[12vw] sm:h-[5vw] ml-[80%] mt-[-10%] sm:ml-[80%] sm:mt-[-10%] rounded-[2.5vw] "
            >
              <span className="w-[40px] h-[40px] flex justify-center items-center" >🔥</span>
              <span  className="w-[40px] h-[40px] flex justify-center items-center">❤️</span>
              <span className="w-[40px] h-[40px] flex justify-center items-center">😊</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle opacity="0.1" cx="20" cy="20" r="20" fill="white"/>
  <path d="M12 18.1599H25.84C27.5 18.1599 28.84 19.4999 28.84 21.1599V24.4799" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.16 15L12 18.16L15.16 21.32" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              
            </div>
          </div>
        </div>

        {/* third row */}

        <div className="flex sm:flex-row flex-col-reverse justify-between gap-y-6 items-center">
          <div className="flex flex-col sm:w-[40%] w-[90%] gap-y-8">
            <p className="text-white sm:text-[3vw] font-Syne font-semibold">
            For Consult Experts & Professionals:
            </p>
            <p className="  text-[#E9E9E9] font-Syne font-[400] sm:text-[1.5vw] text-[3.4vw] tracking-[-0.14] opacity-60">
            If concerns linger about clients not fully committing to sessions, rest assured that Hayla clears your concern as Hayla requires cash to be forked over for your time thus making clients more committed to the consultation.
            </p>
          </div>

          {/*Phone Imagae */}
          <div className="sm:w-[40%] w-[90%]">
            <Image
              src={phoneImageThree}
              alt="phone"
              className="w-[100%] rounded-t-[50px] text-black"
            />
            <div
              style={{
                background:
                  "linear-gradient(90deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 107.49%)",
                backdropFilter: "blur(30px)",
              }}
              className="flex flex-col justify-center gap-y-3 items-center w-[20vw] h-[18vw] sm:w-[12vw] sm:h-[10vw] ml-[-10%] mt-[-10%] sm:ml-[-20%] sm:mt-[-20%] rounded-[2.5vw] p-[20%] "
            >
             <div className="flex justify-center items-center" >



                {/* first picute */}
             <div className=" flex justify-center items-center w-[8vw] h-[8vw] sm:w-[5vw] sm:h-[5vw] rounded-full bg-[#E4E4E4]" >
                <Image src={profileOne} alt="profile one" className="w-[100%] h-[100%] rounded-full" />

              </div>

              {/* second picture */}

             <div className=" flex justify-center items-center w-[8vw] h-[8vw] sm:w-[5vw] sm:h-[5vw] rounded-full bg-[#E4E4E4] ml-[-10%]" >
             <Image src={profileTwo} alt="profile one" className="w-[100%] h-[100%] rounded-full" />

              </div>


              <div className=" flex justify-center items-center w-[8vw] h-[8vw] sm:w-[5vw] sm:h-[5vw] rounded-full bg-[#E4E4E4] ml-[-10%]" >
                <span className=" font-Syne font-bold text-[#131313] text-[18px]">
                MG
                  </span>

              </div>

             </div>
              <div className="flex  gap-1 ">

              <div className=" sm:w-[3vw] sm:h-[3vw] w-[6vw] h-[6vw]  rounded-full bg-[#00000066]   flex flex-col justify-center items-center">
              <TbVideo className="text-white w-5 h-5" />
            </div>
              <div className=" sm:w-[3vw] sm:h-[3vw] w-[6vw] h-[6vw]  rounded-full bg-[#00000066]   flex flex-col justify-center items-center">
              <PiPhone className="text-white w-5 h-5" />
            </div>
            
            <div className=" sm:w-[3vw] sm:h-[3vw] w-[6vw] h-[6vw]  rounded-full bg-[#D7172A] opacity-40  flex flex-col justify-center items-center">
              <ImPhoneHangUp className="text-white w-5 h-5" />
            </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Hero;
