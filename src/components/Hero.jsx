import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
        <>
        <div className='relative'>
            <main className='w-[90%] max-w-[1280px] mx-auto h-[87vh] md:h-[70vh] lg:h-[80vh] md:static md:flex md:flex-row md:flex-wrap sm:h-[25rem] sm:flex'>
                <div className='py-[3rem] self-center w-[20rem] md:w-[25rem] md:max-w-[28rem] lg:w-[30rem] lg:w-[55%]'>
                <h2 className='mb-[.5rem] leading-none font-[mada] text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] font-bold text-[#091751]'>
                        <span className='text-[3rem] md:text-[5rem]'>D</span>iscover, <span className='text-[3rem] md:text-[5rem]'>D</span>ream, <span className='text-[3rem] md:text-[5rem]'>D</span>rive!
                        </h2>
                    <p className='text-[.8rem] leading-[1rem] md:text-[1.2rem] md:leading-[1.2rem] lg:leading-[1.8rem] lg:text-[1.4rem] font-regular text-[#091751] font-[mada]'>Explore your lifestyle with us: Real estate, short stays, auto deals, luxury properties, vacation rentals, and exclusive vehicle offers.
                    </p>
                    
                    <Link to='/popular' className='bg-[#091751] rounded-[20px] w-[90px] md:w-[100px] lg:w-[130px] md:h-[37px] h-[30px] lg:h-[40px] md:text-[1rem] lg:text-[1.3rem] lg:w-[90px] hover:border-2 hover:bg-transparent hover:text-[#091751] hover:border-[#091751] flex items-center mt-[1rem] justify-center text-[13px] font-[inter] font-medium text-white '>Explore</Link>

                </div>
                <div className='hero__img sm:w-[50%] sm:absolute sm:right-0 sm:bottom-0 md:h-[35rem] sm:h-[25rem]'>
                    <div className=' absolute bottom-0 right-0 md:flex md:justify-end md:h-[30rem] lg:h-[34rem]'>
                        <img src='../img/hero-img.png' alt='hero' />
                        
                    </div>

                    <div className='absolute bottom-[.6rem] right-0 slide__car'>
                        <img src="../img/img-car.png" className='md:w-[30rem]' alt="display auto hero" />
                    </div>
                </div>
               
            </main>
        </div>
            



        </>
  )
}

export default Hero
