import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
        <>
        <div className='relative'>
        <main className='w-[90%] max-w-[1280px] mx-auto h-[87vh] md:h-[70vh] lg:h-[80vh] md:static md:flex md:flex-row md:flex-wrap sm:h-[25rem] sm:flex'>
                <div className='py-[3rem] self-center md:w-[50%] lg:w-[55%]'>
                    <p className='text-[1.1rem] md:text-[1.2rem] lg:text-[1.8rem] font-semibold text-[#091751] font-[mada]'>Explore your lifestyle with us:<br/>
                        REAL ESTATE, Short Stays, AUTO Deals.
                    </p>
                    <h2 className='font-[mada] text-[1.6rem] md:text-[2rem] lg:text-[3rem] font-bold text-[#091751]'>
                        Discover, Dream, Drive!
                        </h2>
                    <Link to='/popular' className='bg-[#091751] rounded-[20px] w-[90px] h-[30px] lg:h-[30px] text-[1rem] lg:w-[90px] hover:border-2 hover:bg-transparent hover:text-[#091751] hover:border-[#091751] flex items-center mt-[1rem] justify-center text-[13px] font-[inter] font-medium text-white '>Explore</Link>

                </div>
                <div className='hero__img sm:w-[50%] sm:absolute sm:right-0 sm:bottom-0 md:h-[35rem] sm:h-[30rem]'>
                    <div className=' absolute bottom-0 right-0 md:flex md:justify-end md:h-[30rem] lg:h-[34rem]'>
                        <img src='../img/hero-img.png' alt='hero' />
                        
                    </div>

                    <div className='absolute bottom-[.6rem] right-0 slide__car'>
                        <img src="../img/img-car.png" className='' alt="display auto hero" />
                    </div>
                </div>
               
            </main>
        </div>
            



        </>
  )
}

export default Hero
