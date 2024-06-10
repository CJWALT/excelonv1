import React, { useState } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';


function Testimonial() {

    
    
    
    const [currentSlide, setCurrentSlide] = useState(0)

    const prevSlide = ()=>{
        setCurrentSlide(currentSlide === 0 ? 2 : prev => prev -1)
    }
    const nextSlide = ()=>{
        setCurrentSlide(currentSlide === 2 ? 0 : prev => prev + 1)
    }




  return (
    
    <div className='mx-auto w-[90%] max-w-[1440px]'>
        <div>
            <h2 className='font-[limelight] text-[2rem] text-[#383F5A] '>Testimonials</h2>
                <small className='font-[inter] text-regular text-[.8rem]'>What Our Clients Say</small>

        </div>


            <div className='relative'>
                <div className='overflow-hidden w-[20rem] mx-auto mt-2rem flex items-center '>
            <div
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            className='flex transition-transform duration-300 py-[1rem] items-center relative mt-[2rem]'>
            
                <div className='mborder-4 border-[#383F5A] w-[20rem] bg-white py-[2rem] border-2 border-blue-400 flex items-center flex-shrink-0 flex-col justify-center'>
                    <div className=' font-[mada] text-center py-[1rem] bg-white w-[20rem] max-w-[21rem]'>
                        <p className='text-[.9rem]'>Buying property through Excelon Properties was seamless. The team was professional, knowledgeable, and supportive throughout the process. Highly recommend!</p>
                            <small className='font-bold block mt-[1rem]'>IVan Rakit</small>
                    </div>
                    <img src='../img/auto.png' alt='testimonial one' className='p-2 bg-white w-[4rem] rounded-full absolute bottom-0 h-auto'/>
                </div> 
                <div className='border-4 border-[#383F5A] w-[20rem] bg-white py-[2rem] border-2 border-blue-400 flex items-center flex-shrink-0 flex-col justify-center'>
                    <div className=' font-[mada] text-center py-[1rem] bg-white w-[20rem] max-w-[21rem]'>
                        <p className='text-[.9rem]'>"Booking a shortlet apartment was easy and stress-free. The apartment was clean, modern, and well-located. Excellent service!"</p>
                            <small className='font-bold block mt-[1rem]'>toyo Rakit</small>
                    </div>
                    <img src='../img/auto.png' alt='testimonial one' className='p-2 bg-white w-[4rem] rounded-full absolute bottom-0 h-auto'/>
                </div> 
                <div className='border-4 border-[#383F5A] w-[20rem] bg-white py-[2rem] border-2 border-blue-400 flex items-center flex-shrink-0 flex-col justify-center'>
                    <div className=' font-[mada] text-center py-[1rem] bg-white w-[20rem] max-w-[21rem]'>
                        <p className='text-[.9rem]'>"Booking a shortlet apartment was easy and stress-free. The apartment was clean, modern, and well-located. Excellent service!"</p>
                            <small className='font-bold block mt-[1rem]'>royo Rakit</small>
                    </div>
                    <img src='../img/auto.png' alt='testimonial one' className='p-2 bg-white w-[4rem] rounded-full absolute bottom-0 h-auto'/>
                </div> 
        
            
            
            </div>
                <div className='absolute w-[25rem] flex justifty-between left-0  top-[8rem] flex justify-between'>
                        <FaArrowAltCircleLeft  
                        className='w-[2rem] h-[1rem] cursor-pointer'
                        onClick={prevSlide}/>
                        <FaArrowAltCircleRight className='w-[2rem] h-[1rem] cursor-pointer' onClick={nextSlide}/>
                </div>
                    </div>
            </div>

            

        
        
        
        
      </div>
    
  )
}

export default Testimonial

















































