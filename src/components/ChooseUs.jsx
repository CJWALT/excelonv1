import React from 'react'
import { FaCheckCircle, FaClock, FaMedal, FaSmile } from 'react-icons/fa';

import { MdOutlineSentimentSatisfied } from "react-icons/md";
// import { MdOutlineVerifiedUser } from "react-icons/md"
// import { FaUserClock } from "react-icons/fa6";


function ChooseUs() {
  return (
    <div className='backdrop-blur-lg  md:border-2 md:border-red-400 lg:border-2 lg:border-blue-400' style={{backgroundColor: "rgba(76, 103, 207, 0.31)"}}>
      <div className='z-10 relative w-[90%] max-w-[90%] mx-auto py-[4rem]'>
        <h2 className='text-center text-[1.9rem] md:text-[2.2rem] font-[limelight] mb-[2.3rem]'>
            Why Choose Us?
        </h2>
        <div className='flex flex-col md:flex-row gap-[2rem]'>
            <div className='flex flex-col lg:w-[50%] md:flex-row items-center md:justify-center md:flex-wrap gap-[1.6rem] md:order-1 order-2'>
                <div className="border-2 border-[#383F5A] lg:w-[17rem] w-[13rem] max-w-[19rem] p-4 flex flex-col transition-shadow duration-300 rounded  gap-[.4rem] chooseUs">
                        <span>
                        <FaSmile className='w-[25px] h-[25px]' />
                        </span>
                        <h3 className='text-[.9rem] lg:text-[1.2rem] font-semibold font-[inter]'>Customer Satisfaction </h3>
                        <p className='text-justify lg:text-[1rem] text-[.7rem]'>We prioritize your needs to ensure a seamless and enjoyable experience.</p>
                </div>    
                
                <div className="border-2 border-[#383F5A] lg:w-[17rem] w-[13rem] max-w-[19rem] p-4 flex flex-col transition-shadow duration-300 rounded  gap-[.4rem] chooseUs">
                        <span>
                        <FaCheckCircle className='w-[25px] h-[25px]' />
                        </span>
                        <h3 className='text-[.9rem] lg:text-[1.2rem] font-semibold font-[inter]'>Reliable </h3>
                        <p className='text-justify lg:text-[1rem] text-[.7rem]'>Count on us for dependable services and trustworthy solutions.</p>
                </div>    
                
                <div className="border-2 border-[#383F5A] lg:w-[17rem] w-[13rem] max-w-[19rem] p-4 flex flex-col transition-shadow duration-300 rounded  gap-[.4rem] chooseUs">
                        <span>
                        <FaClock className='w-[25px] h-[25px]' />
                        </span>
                        <h3 className='text-[.9rem] lg:text-[1.2rem] font-semibold font-[inter]'>Save Hours </h3>
                        <p className='text-justify lg:text-[1rem] text-[.7rem]'>Efficient processes designed to save you time and hassle.</p>
                </div>    
                
                <div className="border-2 border-[#383F5A] lg:w-[17rem] w-[13rem] max-w-[19rem] p-4 flex flex-col transition-shadow duration-300 rounded  gap-[.4rem] chooseUs">
                        <span>
                        <FaMedal className='w-[25px] h-[25px]' />
                        </span>
                        <h3 className='text-[.9rem] lg:text-[1.2rem] font-semibold font-[inter]'>Quality Service Delivery</h3>
                        <p className='text-justify lg:text-[1rem] text-[.7rem]'>Experience top-notch service and exceptional results every time.</p>
                </div>    
                
              

            </div>

            <div className='lg:w-[40%] order-1 flex flex-col gap-4'>
                <div className='block self-end'>
                    <img src="../img/auto.png" alt="auto deal" className='lg:w-[22rem] w-[12rem] md:w-[10rem] h-auto ' />
                </div>
                <div >
                    <h2 className='text-right text-[1.3rem] md:text-[1.3rem] font-[limelight]'>Excelon Difference</h2>
                    <small className='text-[.7rem] md:text-[.8rem] font-[inter] text-regular text-right block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore.</small>
                    <h6 className='text-right text-[.9rem] md:text-[.9rem] text-[#4C67CF] font-[inter]'>20+ Real Estate Sold</h6>
                </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseUs
