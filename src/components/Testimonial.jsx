import React, { useState } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';


function Testimonial() {

    const testimonials = [

        {
            name:'Toyo Rkiti', 
            text:'Buying property through Excelon Properties was seamless. The team was professional, knowledgeable, and supportive throughout the process. Highly recommend!',
            img:'https://images.pexels.com/photos/4861336/pexels-photo-4861336.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            name:'Kole Rkiti', 
            text:'Booking a shortlet apartment was easy and stress-free. The apartment was clean, modern, and well-located. Excellent service!',
            img:'https://images.pexels.com/photos/20864736/pexels-photo-20864736/free-photo-of-man-wearing-traditional-hat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            name:'Ivan Rakitic', 
            text:'Buying property through Excelon Properties was seamless. The team was professional, knowledgeable, and supportive throughout the process. Highly recommend!',
            img:'https://images.pexels.com/photos/6348126/pexels-photo-6348126.jpeg'
        }


    ]

      
    
    const [currentSlide, setCurrentSlide] = useState(0)

    const prevSlide = ()=>{
        setCurrentSlide(currentSlide === 0 ? 2 : prev => prev -1)
    }
    const nextSlide = ()=>{
        setCurrentSlide(currentSlide === 2 ? 0 : prev => prev + 1)
    }




  return (
        <div className='mx-auto w-[90%] max-w-[1280px] py-[6rem] md:flex md:flex-row md:justify-between '>
            <div className='md:order-2 self-center'>
                <h2 data-aos='fade' className='font-[limelight] text-[2rem] text-[#383F5A] '>Testimonials</h2>
                    <small data-aos='fade' className='font-[inter] text-regular text-[.8rem]'>What Our Clients Say</small>
            </div>


            <div className='relative overflow-hidden lg:border-2 lg:border-green-400 md:border-2 md:border-blue-400 sm:w-[25rem] sm:max-w-[26rem] md:w-[58%] md:mx-0 mx-auto'>
                <div className=' overflow-hidden w-[20rem] mx-auto mt-2rem flex items-center '>
                    <div style={{ transform: `translateX(-${currentSlide * 21}rem)` }}
                        className='flex transition-transform duration-300 gap-[1rem] py-[1rem] items-center relative mt-[2rem]'>
                    
                       {testimonials.map((test, index)=>(
                            <div data-aos='fade-up' key={index} className='border-4 border-[#383F5A] w-[20rem] bg-white py-[2rem] border-2 border-blue-400 flex items-center flex-shrink-0 flex-col justify-center'>
                            <div className=' font-[mada] text-center py-[1rem] bg-white w-[20rem] max-w-[21rem]'>
                                <p data-aos='zoom-in-right' className='text-[.9rem]'>{test.text}</p>
                                    <small data-aos='zoom-in' className='font-bold block mt-[1rem]'>{test.name}</small>
                            </div>
                            <img data-aos='fade-in' src={test.img} alt='testimonial one' className='p-2 object-cover bg-white w-[4rem] rounded-full absolute bottom-[-1.3rem] h-[4rem]'/>
                        </div>             
                       ))}  
                                       
                    </div>
                    <div data-aos='zoom-right' className='absolute w-[100%] mx-auto flex justify-between left-0 top-[10rem]'>
                            <FaArrowAltCircleLeft  
                            className='w-[2rem] hover:text-[#202ead] transition-ease h-[1rem] cursor-pointer'
                            onClick={prevSlide}/>
                            <FaArrowAltCircleRight
                            className='w-[2rem] h-[1rem] hover:text-[#202ead] transition-ease
                            cursor-pointer'
                            onClick={nextSlide}/>
                    </div>
                    </div>
            </div>      
      </div>
    
  )
}

export default Testimonial

















































