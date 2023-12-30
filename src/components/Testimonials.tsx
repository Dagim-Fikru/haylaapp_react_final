
import React, { useRef, useState } from "react";
import testImgOne from "../../public/images/test1.jpg";
import testImgTwo from "../../public/images/test2.jpg";
import testImgThree from "../../public/images/test3.jpg";
import testImgFour from "../../public/images/test4.jpg";
import Image from "next/image";
import { IoStar } from "react-icons/io5";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { ImStarHalf } from "react-icons/im";
import ClientCard from "./ClientCard";



const clients = [
  {
    name: "Jill",
    testimony:
      "Your dream of sharing a 1-1 interaction meaningful interaction with an icon is now within reach, thanks to Hayla. The influencer receives money for the call so they It's a win-win for both sides.",
    stars: 3.4,

    clientImg: testImgOne,
  },
  {
    name: "Morgan",
    testimony:
      "Your dream of sharing a 1-1 interaction meaningful interaction with an icon is now within reach, thanks to Hayla. The influencer receives money for the call so they It's a win-win for both sides.",
    stars: 4,

    clientImg: testImgTwo,
  },
  {
    name: "Sam",
    testimony:
      "Your dream of sharing a 1-1 interaction meaningful interaction with an icon is now within reach, thanks to Hayla. The influencer receives money for the call so they It's a win-win for both sides.",
    stars: 5,

    clientImg: testImgThree,
  },
  
];

const Testimonials = () => {


  

  return (
    <div className="bg-white  py-[10%] px-[10%] sm:px-[5%] ">
      <p className="text-[#131313] text-[6vw] sm:text-[4vw]  font-Syne font-bold tracking-[-0.88] text-center">
        What is everyone saying?
      </p>

      {/* testimonials */}
      <div
        
        className="flex w-[100%] flex-col sm:flex-row   gap-4 justify-center items-center mt-10  "
      >
        {clients.map((client, index) => (
          <ClientCard key={index} client={client} />
        ))}
      </div>

    </div>
  );
};

export default Testimonials;
