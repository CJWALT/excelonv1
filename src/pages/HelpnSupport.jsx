import React from 'react'

const HelpnSupport = () => {
  return (
    <div className='w-[90%] mx-auto py-8 overflow-hidden p-4 font-[mada]'>

            <h2 className='text-center mb-[1rem] md:text-[1.7rem] text-[1rem] font-[poppins] font-bold'>Contact OUR HELP AND SUPPORT LINES TODAY </h2>

        <div className='flex-col py-8 sm:flex-row flex gap-8 justify-center h-auto'>
            <div className='md:w-[20rem] lg:w-[24rem] lg:max-w-[25rem] md:max-w-[21rem] mt-[2rem] sm:mt-0 px-3 py-6 rounded-lg text-center hover:shadow-none hover:border-2 hover:border-black shadow-md shadow-[#091751] gap-8 flex flex-col'>
                <h5 className='text-[1rem] md:text-[1.3rem] font-[poppins]'>Our telephone lines are available for your help and support:</h5>
               
               <div className='text-[.7rem] md:text-[1rem]'>
               <span className='block'>
                    Telephone-one (help and support) : +234 814 435 6687
                    </span>
                <span>
                 Our email is active as well (customer-care): excelonglobalresources@gmail.com 
                </span> 
                </div>     
            </div>          

            <div className='flex justify-center flex-col md:w-[20rem] lg:w-[24rem] lg:max-w-[25rem] md:max-w-[21rem] text-center rounded-md px-2 py-6 hover:shadow-none hover:border-2 hover:border-black shadow-md shadow-[#091751] '>
            <h5 className='text-[1rem] md:text-[1.4rem] font-[poppins]'> we welcome you at our office to talk more real estates: </h5>
                <span className='text-[.7rem] md:text-[1rem]'>
                Block 204/221 Akord Shopping Complex, Bogije, Ibeju-Lekki, Lagos State, Nigeria
                </span>
            </div>
            
        </div>
    </div>
  )
}

export default HelpnSupport
