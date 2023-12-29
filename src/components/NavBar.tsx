import React from 'react'
import { FaDownload } from "react-icons/fa6";

const NavBar = () => {
  // w-[30vw] h-[10vw] md:w-[12vw] md:h-[3vw]
  return (
    <div className='flex flex-row justify-between items-center w-[100%] px-[7%] py-[3%] h-16 bg-[#141414]' >
        {/* <div className='flex flex-row' >
            <span className=' text-red-500 text-2xl font-bold' >LOGO</span>
            <span className=' text-white text-2xl font-bold' >hyla</span>
        </div> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="117" height="44" viewBox="0 0 117 44" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M34.6703 27.6893H24.1617V41.9436C32.1196 40.7776 38.632 35.1571 41.0921 27.6893C41.7759 25.6105 42.1474 23.3911 42.1474 21.081C42.1474 18.771 41.7759 16.5453 41.089 14.4634C38.6258 7.00182 32.1165 1.38451 24.1617 0.221664V14.4634H34.664C35.6381 16.4609 36.1844 18.7085 36.1844 21.081C36.1844 23.4536 35.6412 25.6918 34.6703 27.6893ZM22.3666 21.0779C22.3666 22.1407 23.2283 23.0035 24.2897 23.0035C25.3512 23.0035 26.2129 22.1439 26.2129 21.0779C26.2129 20.012 25.3512 19.1523 24.2897 19.1523C23.2283 19.1523 22.3666 20.0151 22.3666 21.0779ZM20.4747 21.0779C20.4747 20.0151 19.6162 19.1523 18.5516 19.1523C17.487 19.1523 16.6284 20.0151 16.6284 21.0779C16.6284 22.1407 17.4901 23.0035 18.5516 23.0035C19.613 23.0035 20.4747 22.1439 20.4747 21.0779ZM30.0248 19.1523C28.9633 19.1523 28.1017 20.0151 28.1017 21.0779C28.1017 22.1407 28.9633 23.0035 30.0248 23.0035C31.0862 23.0035 31.9479 22.1439 31.9479 21.0779C31.9479 20.012 31.0862 19.1523 30.0248 19.1523ZM6.16673 20.9247H10.3502C10.4469 15.0792 15.2079 10.3685 21.071 10.3685C21.4175 10.3685 21.7609 10.3841 22.1012 10.4185V12.4753C21.7641 12.4347 21.4206 12.4159 21.071 12.4159C16.2757 12.4159 12.3888 16.3077 12.3888 21.1092C12.3888 25.9106 16.2757 29.8024 21.071 29.8024C21.4206 29.8024 21.7641 29.7805 22.1012 29.743V31.7999C21.7609 31.8311 21.4175 31.8499 21.071 31.8499C15.7855 31.8499 11.3929 28.0206 10.5094 22.9816H2.13627C2.53589 27.1297 4.26545 30.8902 6.89103 33.8317L6.34156 36.22C2.37979 32.3313 -0.0522221 26.9078 0.000851275 20.9247H4.09375C4.18428 12.6629 10.1566 5.81397 18.0177 4.37603V6.49229C11.1931 7.92085 6.25102 13.9414 6.16673 20.9247ZM20.0657 38.1049V40.1555C17.7492 40.0274 16.2476 39.5241 16.1383 39.5335L13.5377 40.8401C16.3069 41.9029 19.229 42.3531 22.1137 42.2124V36.0261C21.7766 36.048 21.4331 36.0605 21.0897 36.0605L17.4058 35.601L8.50508 40.0492V40.043L8.48011 40.0555L8.61747 39.4897L8.67679 39.2552L10.3595 31.506L8.84225 29.6617L8.77669 29.5648L8.69552 29.4429C7.79952 28.1082 7.11269 26.6202 6.68186 25.026H4.54331C5.1677 27.6799 6.40712 30.0931 8.10859 32.1062L5.47366 43.9035L17.6493 37.7892C17.7211 37.7767 18.6265 38.0174 20.0657 38.108V38.1049ZM34.2582 31.7874H28.2546V36.4763C30.5867 35.3853 32.6379 33.7786 34.2582 31.7874ZM28.2577 10.3653H34.2519C32.6347 8.38036 30.5836 6.77363 28.2577 5.6858V10.3653ZM2.17998 18.8741C3.24769 9.73389 10.7747 2.56924 20.0657 2.07847V6.21096C20.7588 6.16407 21.4394 6.16407 22.1137 6.21096V0.0247295C10.8278 -0.516058 1.27773 7.87709 0.116364 18.8741H2.17686H2.17998ZM39.1472 27.0453C37.1553 33.094 32.2539 37.7267 26.2097 39.4147V29.7368H35.9503L36.5091 28.5833C37.6486 26.242 38.2293 23.6818 38.2293 21.0779C38.2293 18.474 37.6455 15.9076 36.5029 13.5632L35.9409 12.4128H26.2066V2.74742C32.2476 4.43543 37.146 9.06182 39.1409 15.1074C39.7778 17.0361 40.0962 19.0523 40.0962 21.081C40.0962 23.1098 39.7778 25.1198 39.144 27.0453H39.1472Z" fill="#D7172A"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M61.3992 29.6036H64.669V13.5855H61.3992V20.1724H54.4145V13.5855H51.1447V29.606H54.4145V22.7895H61.3992V29.606V29.6036ZM67.0532 23.2006C67.0532 27.1705 69.6686 29.8115 72.9408 29.8115C74.9965 29.8115 76.4684 28.8483 77.2396 27.7465V29.606H80.5337V16.8909H77.2396V18.7049C76.4684 17.6485 75.0428 16.6854 72.9651 16.6854C69.671 16.6854 67.0532 19.2331 67.0532 23.203V23.2006ZM77.2372 23.246C77.2372 25.6552 75.6023 26.9865 73.802 26.9865C72.0017 26.9865 70.3911 25.6098 70.3911 23.2006C70.3911 20.7915 72.0503 19.5056 73.802 19.5056C75.5537 19.5056 77.2372 20.8369 77.2372 23.246ZM89.2458 25.7723L85.9055 16.8909H82.2368L87.4236 29.2833L84.621 35.617H88.1024L96.1163 16.8885H92.6348L89.2483 25.7699L89.2458 25.7723ZM97.8655 29.6036H101.135V12.6199H97.8655V29.6036ZM103.519 23.2006C103.519 27.1705 106.135 29.8115 109.407 29.8115C111.463 29.8115 112.935 28.8483 113.706 27.7465V29.606H117V16.8909H113.706V18.7049C112.935 17.6485 111.509 16.6854 109.431 16.6854C106.137 16.6854 103.519 19.2331 103.519 23.203V23.2006ZM113.706 23.246C113.706 25.6552 112.071 26.9865 110.271 26.9865C108.47 26.9865 106.86 25.6098 106.86 23.2006C106.86 20.7915 108.519 19.5056 110.271 19.5056C112.022 19.5056 113.706 20.8369 113.706 23.246Z" fill="white"/>
</svg>

        
        <div className=' md:h-[3vw] h-[7vw] sm:h-[5vw]  flex flex-row justify-center gap-x-1 px-4 md:px-6 items-center border border-[#D7172A] rounded-3xl' >
          <p className=' font-Syne text-white text-[3vw] sm:text-[2vw] md:text-[1.3vw] whitespace-nowrap hover:cursor-pointer  relative z-10'>Download App</p>
          <FaDownload className="text-white w-[3vw] sm:w-[2vw] md:w-[1.3vw] h-[3vw] sm:h-[2vw] md:h-[1.3vw]" />
        </div>
        
    </div>
  )
}

export default NavBar