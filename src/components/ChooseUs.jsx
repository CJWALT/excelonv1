import React, {useEffect} from 'react'
import { FaCheckCircle, FaClock, FaMedal, FaSmile } from 'react-icons/fa';
import AOS from "aos";
import 'aos/dist/aos.css';


function ChooseUs() {


        useEffect(() => {
          AOS.init();
          AOS.refresh();
        }, []);

  const data =[

    {
      icon: <FaSmile className='w-[25px] h-[25px]' />,
      header:'Customer Satisfaction',
      para: 'We prioritize your needs to ensure a seamless and enjoyable experience.'
    },
    {
      icon:  <FaCheckCircle className='w-[25px] h-[25px]' />,
      header:'Reliable',
      para: 'Count on us for dependable services and trustworthy solutions.'
    },
    {
      icon: <FaClock className='w-[25px] h-[25px]' />,
      header:'Save Hours',
      para: 'Efficient processes designed to save you time and hassle.'
    },
    {
      icon: <FaMedal className='w-[25px] h-[25px]' />,
      header:'Quality Service Delivery',
      para: 'Experience top-notch service and exceptional results every time.'
    }
  ]





  return (    
    <div className='relative chooseUsBg'>
      <div className='z-10 relative w-[90%] max-w-[1280px] mx-auto py-[6rem]'>
        <h2 data-aos="fade-out" className='text-center text-[1.9rem] md:text-[2.2rem] font-[limelight] mb-[2.3rem]'>
            Why Choose Us?
        </h2>
        <div className='flex flex-col w-[100%] md:flex-row gap-[.8rem] '>
            <div className='flex flex-col md:justify-center lg:w-[70%] md:flex-row md:w-[62%] items-center md:flex-wrap gap-[1.6rem] md:order-1 order-2'>
               {data.map((item, index) =>(
                  <div data-aos='fade-up' data-aos-delay='400ms' key={index} className="border-2 border-[#383F5A] lg:w-[17rem] md:w-[12rem] w-[14rem] max-w-[19rem] p-4 flex flex-col transition-shadow duration-300 rounded  gap-[.4rem] chooseUs">
                    <span data-aos='zoom-in-down'>
                    {item.icon} 
                    </span>
                    <h3 data-aos='zoom-out' data-aos-delay='200ms' className='text-[1rem] md:text-[.9rem]  lg:text-[1.2rem] font-semibold font-[inter]'>{item.header} </h3>
                    <p data-aos='fade-up' className='text-justify lg:text-[1rem] text-[.9rem]'>{item.para}</p>
                  </div> 
               ))} 
                
            </div>

            <div className='lg:w-[40%] order-1 md:self-center flex flex-col md:w-[38%] gap-4'>
                <div className='block self-end' data-aos="slide-left">
                    <img src="../img/auto.png" alt="auto deal" className='chooseUsImg lg:w-[22rem] w-[12rem] md:w-[15rem] h-auto ' />
                </div>
                <div data-aos='fade-up' >
                    <h2 data-aos='fade-down' className='text-right text-[1rem] md:text-[1.3rem] lg:text-[1.8rem] font-[limelight]'>Excelon Difference</h2>
                    <small className='text-[.7rem] md:text-[.8rem] lg:text-[1rem] font-[inter] text-regular text-right block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore.</small>
                    <h6 className='text-right text-[.9rem] md:text-[1rem] text-[#4C67CF] font-[inter]'>20+ Real Estate Sold</h6>
                </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseUs
