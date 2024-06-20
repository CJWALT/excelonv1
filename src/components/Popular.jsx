import React from 'react'
import { Link } from 'react-router-dom'
function Popular() {
  return (
    <div className=' w-[90%] max-w-[1440px] py-[4rem] mx-auto'>
        
        <div className='flex flex-col md:flex-row md:justify-between mb-[1rem]'>
            <h2 className='font-[limelight] text-[1.9rem] text-[#091751]'>Popular
            <span className='text-[1rem] font-[mada] block font-regular'>Popular Trending Products</span>
            </h2>
            <p className='md:align-justify md:w-[18rem] text-[.9rem] text-[#383f5a] md:self-center tracking-[.2rem] font-[mada]'> Lorem ipsum dolor consectetur adipisicing elit.</p>
        </div>

        <div className='md:justify-center overflow-x-auto relative md:gap-[4rem] gap-[2rem] flex flex-row w-full'>
            <span className='perspective-wrap w-[7rem] relative h-[15rem] bg-[url("./img/car-one.jpg")] rounded flex justify-center before:absolute before:content-[" "] before:absolute before:top-0 before:right-0 before:h-[15rem] before:w-[7rem] before:bg-black before:-z-0 before:opacity-30 items-end bg-contain bg-cover bg-no-repeat flex-none '>
                <h2 className='font-bold font-mada text-[.7rem] z-10 text-white'>Auto Deals</h2>

                <span className="popular-perspective flex flex-col text-[1.1rem] justify-center items-center gap-[2rem] text-white font-[mada] font-semibold absolute bg-[#383f5a] top-0 right-0 w-[100%] h-[100%] z-10">
                  <ul className='text-center'>
                    <li className='font-[mada] text-[.9rem] font-light'>-- Gle</li>
                    <li className='font-[mada] text-[.9rem] font-light'>-- Spyder</li>
                    <li className='font-[mada] text-[.9rem] font-light'>-- 4matic</li>
                    <li className='font-[mada] text-[.9rem] font-light'>-- Muscles</li>
                  </ul>                         
                  <Link to='/' className='text-[.6rem] bg-[#e2f0ff] text-black px-2 py-1 leading-none rounded-[.5rem] hover:text-[#e2f0ff] hover:bg-black uppercase '> learn more</ Link> 
                </span>
              </span>
            <span className='perspective-wrap w-[7rem] relative h-[13rem] bg-[url("./img/car-one.jpg")] rounded flex justify-center before:absolute before:content-[" "] before:absolute before:top-0 before:right-0 before:h-[13rem] before:w-[7rem] before:bg-black before:-z-0 before:opacity-30 items-end bg-contain bg-cover bg-no-repeat flex-none '>
                <h2 className='font-bold font-mada text-center text-[.7rem] z-10 text-white'>Short Stay Apartment</h2>

                <span className="popular-perspective flex flex-col text-[1.1rem] justify-center items-center gap-[2rem] text-white font-[mada] font-semibold absolute bg-[#383f5a] top-0 right-0 w-[100%] h-[100%] z-10">
                  <ul className='text-center'>
                    <li className='font-[mada] text-[.9rem] font-light'>-- 1 - bedroom and parlor - a month stay</li>
                    <li className='font-[mada] text-[.9rem] font-light'>-- Duplex</li>
                    <li className='font-[mada] text-[.9rem] font-light'>--  Bedroom conference hall</li>
                    
                  </ul>                         
                  <Link to='/' className='text-[.6rem] bg-[#e2f0ff] text-black px-2 py-1 leading-none rounded-[.5rem] hover:text-[#e2f0ff] hover:bg-black uppercase '>  learn more</ Link> 
                </span>
              </span>
            <span className='perspective-wrap w-[7rem] relative h-[15rem] bg-[url("./img/car-one.jpg")] rounded flex justify-center before:absolute before:content-[" "] before:absolute before:top-0 before:right-0 before:h-[15rem] before:w-[7rem] before:bg-black before:-z-0 before:opacity-30 items-end bg-contain bg-cover bg-no-repeat flex-none '>
                <h2 className='font-bold font-mada text-[.7rem] z-10 text-white'>Real Estate and sales</h2>

                <span className="popular-perspective flex flex-col text-[1.1rem] justify-center items-center gap-[2rem] text-white font-[mada] font-semibold absolute bg-[#383f5a] top-0 right-0 w-[100%] h-[100%] z-10">
                  <ul className='text-center'>

                      <li className='font-[mada] text-[.9rem] font-light'>-- LEKKI- AJAH </li>
                      <li className='font-[mada] text-[.9rem] font-light'>-- kUTE- LEKKI PHASE 2</li>
                      <li className='font-[mada] text-[.9rem] font-light'>-- Ajah Phase 2</li>
                    </ul>                         
                    <Link to='/' className='text-[.6rem] bg-[#e2f0ff] text-black px-2 py-1 leading-none rounded-[.5rem] hover:text-[#e2f0ff] hover:bg-black uppercase '>  learn more</ Link> 
                </span>
              </span>
            <span className='perspective-wrap w-[7rem] relative h-[13rem] bg-[url("./img/car-one.jpg")] rounded flex justify-center before:absolute before:content-[" "] before:absolute before:top-0 before:right-0 before:h-[13rem] self-end before:w-[7rem] before:bg-black before:-z-0 before:opacity-30 items-end bg-contain bg-cover bg-no-repeat flex-none '>
                <h2 className='font-bold font-mada text-[.7rem] z-10 text-white'>Car Preorder</h2>

                <span className="popular-perspective flex flex-col text-[1.1rem] justify-center items-center gap-[2rem] text-white font-[mada] font-semibold absolute bg-[#383f5a] top-0 right-0 w-[100%] h-[100%] z-10">
                  <ul className='text-center'>
                  <li className='font-[mada] text-[.9rem] font-light'>Pre order car of your choice from excelon</li>
                  
                  </ul>                         
                  <Link to='/' className='text-[.6rem] bg-[#e2f0ff] text-black px-2 py-1 leading-none rounded-[.5rem] hover:text-[#e2f0ff] hover:bg-black uppercase '>  learn more</ Link> 
                </span>
              </span>
          </div>

            
    </div>
  )
}

export default Popular
