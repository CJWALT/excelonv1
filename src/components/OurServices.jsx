import React, { useContext } from 'react'
import WhatsAppContext from '../WhatsAppContext'



function OurServices() {


  
  const services = [

    { 
      title: 'Real Estate Sales',
      para: 'Buy, sell, and manage properties with expert guidance. We provide efficient, reliable, and professional real estate services.',
      link:'learn more'
    },
    { 
      title: 'Shortlet Apartment Bookings',
      para: 'Book modern, comfortable short-term rentals for business or leisure stays, ensuring a hassle-free experience.',
      link:'learn more'
    },
    { 
      title: 'Auto Sales & Importation',
      para: 'Purchase and import new or pre-owned vehicles with ease and reliability. We handle all the details for you.',
      link:'learn more'
    },
    { 
      title: 'Car Pre-order',
      para: 'Pre-order cars tailored to your specifications with our seamless and personalized service.',
      link:'learn more'
    },
    { 
      title: 'Car Swap & Upgrading',
      para: 'Trade in and upgrade your vehicle effortlessly with our expert assistance, getting the best value for your car.',
      link:'learn more'
    }
  ]

  
  const {handleOpenWhatsappClick} = useContext(WhatsAppContext)


  // const handleClick = (messageText)=>{ 
  //   const telNum = '+2348144356687';
  //   const message = messageText;

  //   sendWhatsappMessage(telNum, message)
  // }



  return (
    <div className="w-[90%] mx-auto py-[6rem] max-w-[1280px]">
        
          <h2 data-aos='flip-down' className='text-[#091751] font-[limelight] text-[1.9rem] text-center'>Our Services</h2>
          <small data-aos='zoom-out' className='text-center mb-[1rem] text-[.9rem] block'>our remarkable services</small>
          <div className='sm:flex-row sm:justify-center xl:w-[87%] xl:mx-auto flex-wrap flex gap-8 flex-col items-center '>

            {
              services.map((item, index)=>(
                <div key={index} data-aos='fade-up' className='sm:w-[16rem] transition ease-out duration-200 w-[19rem] lg:w-[17rem] xl:w-[19rem] max-w-[20rem] hover:bg-white hover:text-[#383f5a] hover:rounded hover:border-2 border-[#383f5a] bg-[#383F5A] text-white py-[1.4rem] px-[1rem] text-center'>
              <h5 data-aos='zoom-out' className=' font-[mada] font-bold text-[1.3rem] lg:text-[1.1rem] xl:text-[1.3rem]'>
                {item.title}
              </h5>
              <p data-aos='fade' className='mt-[.5rem] font-[mada] font-light text-[.8rem]'>{item.para}</p>
              <div className='mt-4 flex justify-end'>
                <button data-aos='fade-up' onClick={()=>handleOpenWhatsappClick(`Hello! I'm here to learn more about your ${item.title} service `)} className='font-bold underline hover:no-underline'> {item.link} </button>
                </div>  
            </div>
              ))}
          </div>
         
    </div>
  )
}

export default OurServices
