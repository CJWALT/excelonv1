import React from 'react'

import { MdOutlineSentimentSatisfied } from "react-icons/md";
// import { MdOutlineVerifiedUser } from "react-icons/md"
// import { FaUserClock } from "react-icons/fa6";


function ChooseUs() {
  return (
    <div className='backdrop-blur-lg  md:border-2 md:border-red-400' style={{backgroundColor: "rgba(76, 103, 207, 0.31)"}}>
      <div className='z-10 relative w-[90%] max-w-[90%] mx-auto py-[4rem]'>
        <h2 className='text-center text-[1.9rem] md:text-[2.2rem] font-[limelight] mb-[2.3rem]'>
            Why Choose Us?
        </h2>
        <div className='flex flex-col gap-[2rem]'>
            <div className='flex flex-col md:flex-row items-center md:justify-center md:flex-wrap gap-[1.6rem] order-2'>
                <div className="border-2 border-[#383F5A] w-[18rem] max-w-[19rem] p-4 flex flex-col transition-shadow duration-300 rounded  gap-[.4rem] chooseUs">
                        <span>
                        <MdOutlineSentimentSatisfied className='w-[25px] h-[25px]' />
                        </span>
                        <h3 className='text-[1rem] font-semibold font-[inter]'>Customer Satisfaction </h3>
                        <p className='text-justify text-[.9rem]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit consectetur adipisicing elit. Dolorem, dicta.</p>
                </div>    
                <div className="border-2 border-[#383F5A] w-[18rem] max-w-[19rem] p-4 flex flex-col transition-shadow duration-300 rounded  gap-[.4rem] chooseUs">
                        <span>
                        <MdOutlineSentimentSatisfied className='w-[25px] h-[25px]' />
                        </span>
                        <h3 className='text-[1rem] font-semibold font-[inter]'>Customer Satisfaction </h3>
                        <p className='text-justify text-[.9rem]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit consectetur adipisicing elit. Dolorem, dicta.</p>
                </div>    
                <div className="border-2 border-[#383F5A] w-[18rem] max-w-[19rem] p-4 flex flex-col transition-shadow duration-300 rounded  gap-[.4rem] chooseUs">
                        <span>
                        <MdOutlineSentimentSatisfied className='w-[25px] h-[25px]' />
                        </span>
                        <h3 className='text-[1rem] font-semibold font-[inter]'>Customer Satisfaction </h3>
                        <p className='text-justify text-[.9rem]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit consectetur adipisicing elit. Dolorem, dicta.</p>
                </div>    
                <div className="border-2 border-[#383F5A] w-[18rem] max-w-[19rem] p-4 flex flex-col transition-shadow duration-300 rounded  gap-[.4rem] chooseUs">
                        <span>
                        <MdOutlineSentimentSatisfied className='w-[25px] h-[25px]' />
                        </span>
                        <h3 className='text-[1rem] font-semibold font-[inter]'>Customer Satisfaction </h3>
                        <p className='text-justify text-[.9rem]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit consectetur adipisicing elit. Dolorem, dicta.</p>
                </div>    
              
              

            </div>

            <div className='order-1 flex flex-col gap-4'>
                <div className='block self-end'>
                    <img src="../img/auto.png" alt="auto deal" className='w-[12rem] md:w-[16rem] h-auto ' />
                </div>
                <div >
                    <h2 className='text-right text-[1.7rem] md:text-[2.3rem] font-[limelight]'>Excelon Difference</h2>
                    <small className='text-[.7rem] md:text-[1rem] font-[inter] text-regular text-right block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore.</small>
                    <h6 className='text-right text-[.9rem] md:text-[1.2rem] text-[#4C67CF] font-[inter]'>20+ Real Estate Sold</h6>
                </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseUs
