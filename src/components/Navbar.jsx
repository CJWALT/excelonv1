import React, { useState } from 'react'
import {Link } from 'react-router-dom'
import { ImMenu } from "react-icons/im";



function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(true)




    const showMenu = ()=>{

        setToggleMenu(!toggleMenu)


    }

  return (
    <div className='w-[90%] max-w-[1440px] mx-auto'>
        <div className='flex py-[2rem] justify-between items-center relative '>
            <div className="logo">

                <Link to='/'>
                <img src="../img/logo.png" alt="logo" className='w-[5rem] h-[3rem] md:w-[8rem] md:h-[4rem]'  />

                </Link>
            </div>
            <div>
                <ImMenu className='w-[2rem] h-[2rem] md:hidden text-[#091751] cursor-pointer' onClick={showMenu}/>
            </div>
            <div className={ toggleMenu ? 'hidden md:flex md:justify-between md:w-[26rem] md:min-w-[26rem] md:overflow-hidden md:items-center' :  'absolute top-[1rem] right-0 shadow-lg bg-[aliceblue] transition-all duration-300 ease-in ease-in p-6 z-10 rounded-md flex flex-col gap-5'}>
                <ul className=''>
                    <ol className='flex flex-col md:flex-row gap-5'>
                        <li><Link to="/" className='font-medium' onClick={showMenu}>Home</Link></li>   
                        <li><Link to="/about-us" className='font-medium' onClick={showMenu}>About Us</Link></li>   
                        <li><Link to="/our-services" className='font-medium' onClick={showMenu}>Our Services</Link></li>   
                    </ol>
                </ul>
                 <div>
            <button className='border-2 border-[#4A5CA2] p-2 rounded-md text-[#4c67cf] font-medium text-[13px] font-[inter] hover:bg-blue-400 hover:border-0 hover:text-white '>
                    Contact Us
                </button>
            </div>
            </div>
           
            

        </div>
    </div>
  )
}

export default Navbar
