import React from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import useEmblaCarousel from 'embla-carousel-react'



function Testimonial() {

    const [emblaRef] = useEmblaCarousel()

  return (
    
    <div className='mx-auto w-[90%] max-w-[1440px]'>
        <div>
            <h2 className='font-[limelight] text-[2rem] text-[#383F5A] '>Testimonials</h2>
                <small className='font-[inter] text-regular text-[.8rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque amet, fugiat fuga deserunt nihil?</small>

        </div>

        
        <div className='flex justify-center py-[1rem] items-center relative mt-[2rem]'>
          
            <div className='border-2 border-red-400 w-[50%] bg-white py-[2rem] border-2 border-blue-400 flex items-center flex-col justify-center'>
                        <div className=' font-[mada] text-center font-[mada] py-[1rem] bg-white w-[25rem] max-w-[21rem]'>
                            <p className='text-[.9rem]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, suscipit nemo. Quod voluptatum optio blanditiis unde ad ipsam voluptas libero.</p>
                                <small className='font-bold block mt-[1rem]'>IVan Rakit</small>
                        </div>
                        <img src='../img/auto.png' alt='testimonial one' className='p-2 bg-white w-[4rem] rounded-full absolute bottom-0 h-auto'/>
                    </div> 
                    <div className='absolute w-[25rem] flex justify-between'>
                            <small className='cursor-pointer'><FaArrowAltCircleLeft  className='w-[2rem] h-[1rem] '/></small>
                            <small className='cursor-pointer'><FaArrowAltCircleRight className='w-[2rem] h-[1rem] ' /></small>
                    </div>
            
            
           
                                  
        </div>
        
        
      </div>
    
  )
}

export default Testimonial
