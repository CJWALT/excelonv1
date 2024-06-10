import React from 'react'
import { Link } from 'react-router-dom'

function OurServices() {


  // const services = [

  //   { 
  //     title: 'real estate sales',
  //     para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur deserunt delectus iure magnam ipsum esse laboriosam sint beatae quia ipsa earum reiciendis, maxime officia sequi!',
  //     link:'learn more'
  //   }
  // ]



  return (
    <div className="w-[90%] mx-auto py-[4rem] max-w-[1440px]">
        
          <h2 className='text-[#091751] font-[limelight] text-[1.9rem] text-center'>Our Services</h2>
          <small className='text-center mb-[1rem] text-[.7rem] block'>our remarkable services</small>
          <div className='md:flex-row md:justify-center flex-wrap flex gap-8 flex-col items-center '>
            <div className=' w-[17.6rem] max-w-[20rem] hover:bg-white hover:text-[#383f5a] hover:border-2 border-[#383f5a] bg-[#383F5A] text-white p-4 text-center'>
              <h5 className=' font-[mada] font-regular text-[1.3rem]'>
                Real Estate Sales
              </h5>
              <p className='mt-[.5rem] font-[mada] font-light text-[.8rem]'>Buy, sell, and manage properties with expert guidance. We provide efficient, reliable, and professional real estate services.</p>
              <div className='mt-4 flex justify-end'>
                <button> Learn more</button>
                </div>  
            </div>
            <div className=' w-[17.6rem] max-w-[20rem] hover:bg-white hover:text-[#383f5a] hover:border-2 border-[#383f5a] bg-[#383F5A] text-white p-4 text-center'>
              <h5 className=' font-[mada] font-regular text-[1.3rem]'>
                Shortlet Aparment bookings
              </h5>
              <p className='mt-[.5rem] font-[mada] font-light text-[.8rem]'>Book modern, comfortable short-term rentals for business or leisure stays, ensuring a hassle-free experience.</p>
              <div className='mt-4 flex justify-end'>
                <button> Learn more</button>
                </div>  
            </div>
            <div className=' w-[17.6rem] max-w-[20rem] hover:bg-white hover:text-[#383f5a] hover:border-2 border-[#383f5a] bg-[#383F5A] text-white p-4 text-center'>
              <h5 className=' font-[mada] font-regular text-[1.3rem]'>
                Auto Sales & Importation
              </h5>
              <p className='mt-[.5rem] font-[mada] font-light text-[.8rem]'>Purchase and import new or pre-owned vehicles with ease and reliability. We handle all the details for you.</p>
              <div className='mt-4 flex justify-end'>
                <button> Learn more</button>
                </div>  
            </div>
            <div className=' w-[17.6rem] max-w-[20rem] hover:bg-white hover:text-[#383f5a] hover:border-2 border-[#383f5a] bg-[#383F5A] text-white p-4 text-center'>
              <h5 className=' font-[mada] font-regular text-[1.3rem]'>
                Car Pre-order
              </h5>
              <p className='mt-[.5rem] font-[mada] font-light text-[.8rem]'>Pre-order cars tailored to your specifications with our seamless and personalized service.</p>
              <div className='mt-4 flex justify-end'>
                <button> Learn more</button>
                </div>  
            </div>
            <div className=' w-[17.6rem] max-w-[20rem] hover:bg-white hover:text-[#383f5a] hover:border-2 border-[#383f5a] bg-[#383F5A] text-white p-4 text-center'>
              <h5 className=' font-[mada] font-regular text-[1.3rem]'>
                Car Swap & Upgrading
              </h5>
              <p className='mt-[.5rem] font-[mada] font-light text-[.8rem]'>Trade in and upgrade your vehicle effortlessly with our expert assistance, getting the best value for your car.</p>
              <div className='mt-4 flex justify-end'>
                <button> Learn more</button>
                </div>  
            </div>
          </div>
         
    </div>
  )
}

export default OurServices
