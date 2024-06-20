import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
        <>
            <main className='w-[90%] max-w-[1280px] mx-auto h-[87vh] md:h-[70vh] lg:h-[80vh] relative md:static md:flex md:flex-row md:flex-wrap'>
                <div className='py-[3rem] self-center md:w-[50%] lg:w-[55%]'>
                    <p className='text-[1.1rem] md:text-[1.2rem] lg:text-[1.8rem] font-semibold text-[#091751] font-[mada]'>Explore your lifestyle with us:<br/>
                        REAL ESTATE, Short Stays, AUTO Deals.
                    </p>
                    <h2 className='font-[mada] text-[1.6rem] md:text-[2rem] lg:text-[3rem] font-bold text-[#091751]'>
                        Discover, Dream, Drive!
                        </h2>
                    <Link to='/popular' className='bg-[#091751] rounded-[5px] w-[84px] h-[26px] lg:h-[30px] text-[1rem] lg:w-[90px] hover:border-2 hover:bg-transparent hover:text-[#091751] hover:border-[#091751] flex items-center mt-[1rem] justify-center text-[13px] font-[inter] font-medium text-white '>Explore</Link>

                </div>
                <div className='hero__img'>
                    <div className=' absolute right-[-1rem] bottom-0  md:bottom-auto md:right-0 md:top-[12rem] md:flex md:justify-end md:h-[28rem] lg:h-[34rem] lg:w-[50%] md:w-[50%]'>
                        <img src='../img/hero-img.png' alt='hero' />
                        
                    </div>

                    <div className='absolute bottom-[4rem] slide__car'>
                        <img src="../img/auto.png" alt="display auto hero" />
                    </div>
                </div>
               
            </main>



        </>
  )
}

export default Hero
