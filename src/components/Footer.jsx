import React from 'react'
import { Link } from 'react-router-dom'
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <div className='md:justify-between md:flex-row py-[4rem] w-[90%] flex flex-col gap-[1.3rem] max-w-[1440px] mx-auto'>
      
      <div className='flex flex-col md:w-[30%] gap-[1rem]'>
        <img src="../img/logo.png" alt="footer-logo"  className='w-[7rem] aspect-h-3'/>
        <p className='font-[mada] text-[.9rem] font-light'>
        Excelon Properties - Your trusted partner in real estate and automotive solutions. Committed to excellence and customer satisfaction. Discover quality and reliability with us
        </p>
        <div className='flex gap-4'>
            <span><BsInstagram /></span>
            <span><FaWhatsapp /></span>
            <span><RiTwitterXFill /></span>
            
        </div>
      </div>
      <div className='md:justify-end flex flex-row xl:gap-[7.5rem] lg:gap-[5.5rem] gap-[2.5rem] overflow-hidden flex-wrap'>
        <div className='flex gap-[.4rem] flex-col'>
            <h2 className='font-bold text-[1.2rem] font-[mada] text-[#121212]'>Permalinks</h2>
            <Link to='/' className='font-light text-[.8rem] font-[mada]'>Home</Link>
            <Link to='/about-us' className='font-light text-[.8rem] font-[mada]'>About us</Link>
            <Link to='/our-services' className='font-light text-[.8rem] font-[mada]'> Our Services</Link>
            <Link to='/' className='font-light text-[.8rem] font-[mada]'>Contact us</Link>
        </div>
        <div className='flex gap-[.4rem] flex-col'>
            <h2 className='font-bold text-[1.2rem] font-[mada] text-[#121212]'>Privacy</h2>
            <Link to='/' className='font-light text-[.8rem] font-[mada]'>Terms and Condition</Link>
            <Link to='/' className='font-light text-[.8rem] font-[mada]'>Help and Support</Link>
        </div>
        <div className='flex gap-[.4rem] flex-col'>
            <h2 className='font-bold text-[1.2rem] font-[mada] text-[#121212]'>Address:</h2>
            <a href='tel:+2348144356687' className='text-[.8rem] font-light font-[georgia]'>+234 814 435 6687</a>
            <small className='text-[.8rem] font-light font-[mada] w-[15rem] max:w-[14rem]'> Block 204/221 Akord Shopping Complex, Bogije, Ibeju-Lekki, Lagos State, Nigeria</small>
        </div>
      </div>
    </div>
  )
}

export default Footer

