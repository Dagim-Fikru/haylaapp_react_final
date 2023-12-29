'use client'
import React, { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";



const Faq = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)



    const Question = ({ question, answer, id }: { question: string, answer: string, id: number }) => {


        return (
            <div>
                <div onClick={() => {
                    setIsOpen(!isOpen)
                    setSelectedIndex(id)
                }} className='w-[100%] flex flex-row justify-between items-center px-[5%] py-4 bg-[#1e292b] rounded-lg ' >
                    <span className='text-white sm:text-2xl font-Syne ' >{question}</span>

                    {
                        isOpen && selectedIndex == id ? <MdKeyboardArrowUp className="text-white sm:text-2xl" /> : <MdKeyboardArrowDown className="text-white sm:text-2xl" />
                    }


                </div >
                {isOpen && selectedIndex == id && <div className='w-[100%] text-white flex flex-row justify-between items-center px-[5%] py-4 bg-[#102023] rounded-lg '>
                    <span className='text-white sm:text-xl font-Syne opacity-70' >{answer}</span>
                </div>}


            </div>
        )
    }


    const qustionsObj = [
        {
            qustion: "Is the program suitable for women?",
            answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "
        },
        {
            qustion: "How quickly will I make my money back?",
            answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "
        },
        {
            qustion: "Do I need money once I'm inside TRW?",
            answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "
        },
        {
            qustion: " Does my age really not matter?",
            answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "
        },


    ]


    return (
        <div className='flex flex-col justify-center items-center gap-y-6 p-[5%]'>
            <p className="text-white sm:text-[3vw] font-Syne  tracking-[-0.88px]" ><span className='font-[300]'>FREQUENTLY ASKED</span> <span className='font-[700]'>QUSTIONS</span></p>
            <div className=' flex flex-col gap-y-2 w-[100%]'>


                {
                    qustionsObj.map((item, index) => <Question key={index} id={index} question={item.qustion} answer={item.answer} />)
                }

            </div>


        </div>
    )
}

export default Faq


