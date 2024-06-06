import React from 'react'


import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


function Faq() {
  return (
    <div className='bg-[#4A5CA2] py-[5rem]'>
        <div className='w-[90%] max-w-[1440px] w-[90%] mx-auto text-white flex flex-col gap-8'>
            <div className=''>
                <h2 className='font-[limelight] text-[2.1rem]'>FAQ</h2>
                <small className='blockborder-2 border-red-400'>Excelon Properties Lorem ipsum dolor sit amet Lorem ipsum dolor sit.</small>
            </div>
        <div className='flex flex-col gap-2'>
            <Accordion className='border-b-2 pb-2 border-[#091751] block'>
                <AccordionSummary
                expandIcon={'+'}
                aria-controls="panel1-content"
                id="panel1-header"
                
                className='flex flex-row justify-between'>
                        <h5 className='text-[1.3rem] font-[limelight]'>Why Excelon Properties? </h5> 
                            </AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, inventore.</AccordionDetails>
            </Accordion>










            <span className='border-b-2 pb-2 border-[#091751] block'>
                <span className='flex flex-row justify-between'>
                <h5 className='text-[1.3rem] font-[limelight]'>Why Excelon Properties? </h5>  <span className='block'>+</span>
                    </span>
                <small className='hidden'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, inventore.</small>
            </span>
            <span className='border-b-2 pb-2 border-[#091751] block'>
                <span className='flex flex-row justify-between'>
                <h5 className='text-[1.3rem] font-[limelight]'>Why Excelon Properties? </h5>  <span className='block'>+</span>
                    </span>
                <small className='hidden'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, inventore.</small>
            </span>
           
        </div>
        </div>
     
    </div>
  )
}

export default Faq
