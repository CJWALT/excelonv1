import React from 'react'
import { Link } from 'react-router-dom'
import { BsInstagram } from "react-icons/bs";
import { ImFacebook2 } from 'react-icons/im';
import { RiTwitterXFill } from "react-icons/ri";

function Footer() {
  return (
    <div className='py-[4rem] w-[90%] flex flex-col gap-[1.3rem] max-w-[1440px] mx-auto'>
      
      <div className='flex flex-col gap-[1rem]'>
        <img src="../img/logo.png" alt="footer-logo"  className='w-[7rem] aspect-h-3'/>
        <p className='font-[mada] text-[.9rem] font-light'>
        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        </p>
        <div className='flex gap-4'>
            <span><BsInstagram /></span>
            <span><ImFacebook2 /></span>
            <span><RiTwitterXFill /></span>
            <span>icon</span>
        </div>
      </div>
      <div className='flex flex-row gap-[2.5rem] overflow-hidden flex-wrap'>
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
            <a href='tel:+2349021785223' className='text-[.8rem] font-light font-[mada]'>+2338209238</a>
            <small className='text-[.8rem] font-light font-[mada]'> no2, inner Ajah Lagos, Nigeria. </small>
        </div>
      </div>
    </div>
  )
}

export default Footer

