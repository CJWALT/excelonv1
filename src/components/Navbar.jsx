import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImMenu } from 'react-icons/im';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const showMenu = () => {
    setToggleMenu((prev)=> !prev);
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setToggleMenu(false);
    }
  };

  // Use effect to close the menu if the window is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setToggleMenu(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='w-[90%] max-w-[1280px] mx-auto'>
      <div className='flex py-[2rem] justify-between items-center relative'>
        <div className='logo'>
          <Link to='/'>
            <img
              src='../img/logo.png'
              alt='logo'
              className='w-[5rem] h-[3rem] md:w-[8rem] md:h-[4rem]'
            />
          </Link>
        </div>
        <div>
          <ImMenu
            className='w-[2rem] h-[2rem] md:hidden text-[#091751] cursor-pointer'
            onClick={showMenu}
          />
        </div>
        <div
          className={
            toggleMenu
              ? 'absolute top-[1rem] right-0 shadow-lg bg-[aliceblue] transition-all duration-300 ease-in ease-in p-6 z-10 rounded-md flex flex-col gap-5'
              : 'hidden md:flex md:justify-between md:w-[26rem] md:min-w-[26rem] md:overflow-hidden md:items-center'
          }
        >
          <ul className=''>
            <ol className='flex flex-col md:flex-row gap-5'>
              <li>
                <Link onClick={handleLinkClick} to='/' className='font-medium'>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleLinkClick}
                  to='/about-us'
                  className='font-medium'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleLinkClick}
                  to='/our-services'
                  className='font-medium'
                >
                  Our Services
                </Link>
              </li>
            </ol>
          </ul>
          <div className='p-[.4rem]'>
            <Link
              onClick={handleLinkClick}
              to='/contact-us'
              className='border-2 p-2 border-[#4A5CA2] rounded-md text-[#4c67cf] font-medium text-[13px] font-[inter] hover:bg-blue-400 hover:border-0 hover:text-white'
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
