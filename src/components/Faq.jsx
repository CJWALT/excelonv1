 import React, { useState } from 'react'


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



function Faq() {



    
  return (
    <div className='bg-[#4A5CA2] py-[5rem]'>
        <div className='w-[90%] md:justify-between md:flex-row max-w-[1440px] w-[90%] mx-auto text-white flex flex-col gap-8'>
            <div className='md:w-[40%] lg:w-[30%] md:max-w-[45%] md:self-center'>
                <h2 data-aos='slide-up' className='font-[limelight] text-[2.1rem]'>FAQ</h2>
                <h4 data-aos='zoom-in'>
                    Frequently Asked Questions</h4>
                <small data-aos='fade' className='blockborder-2 border-red-400'>Find answers to common questions about our services, booking process, and how we can assist you effectively.</small>
            </div>
        <div className='flex flex-col gap-2' data-aos='fade-in'>
            <Accordion defaultExpanded 
             className='accordion-bg-none border-b-2 pb-2 border-[#091751] block'
               >
                <AccordionSummary
                expandIcon={<ExpandMoreIcon className='text-white'/>}
                aria-controls="panel1-content"
                id="panel1-header"
                
                className='flex flex-row justify-between'>
                        <h5 className='text-[1.3rem] text-white font-[limelight]'>Why Excelon Properties? </h5> 
                            </AccordionSummary>
                <AccordionDetails className='text-white font-[mada] text-[.8rem]'>Excelon Properties offers unparalleled service and expertise in real estate and automotive needs. </AccordionDetails>
            </Accordion>
            <Accordion className='accordion-bg-none border-b-2 pb-2 border-[#091751] block'
              >
                <AccordionSummary
                expandIcon={<ExpandMoreIcon className='text-white'/>}
                aria-controls="panel2-content"
                id="panel2-header"
                
                className='flex flex-row justify-between'>
                        <h5 className='text-[1.3rem] text-white font-[limelight]'>Can I swap my current car for a new one? </h5> 
                            </AccordionSummary>
                <AccordionDetails className='text-white font-[mada] text-[.8rem]'>Absolutely! We offer car swap and upgrading services to meet your needs.</AccordionDetails>
            </Accordion>
           
            <Accordion
            className='accordion-bg-none border-b-2 pb-2 border-[#091751] block'
              >
                <AccordionSummary
                expandIcon={<ExpandMoreIcon className='text-white'/>}
                aria-controls="panel2-content"
                id="panel2-header"
                
                className='flex flex-row justify-between'>
                        <h5 className='text-[1.3rem] text-white font-[limelight]'>What payment methods do you accept?</h5> 
                            </AccordionSummary>
                <AccordionDetails className='text-white font-[mada] text-[.8rem]'>We accept various payment methods, including bank transfers, credit/debit cards, and online payments.</AccordionDetails>
            </Accordion>
            
          </div>
        </div>
     
    </div>
  )
}

export default Faq
