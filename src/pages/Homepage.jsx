import React from 'react'
import Hero from '../components/Hero'
import ChooseUs from '../components/ChooseUs'
import OurServices from '../components/OurServices'
import Popular from '../components/Popular'
import Testimonial from '../components/Testimonial'
import Faq from '../components/Faq'

const Homepage = () => {
  return (
    <div>
        
        <Hero/>
        <ChooseUs/>
        <OurServices />
        <Testimonial />
        <Popular/>
        <Faq/>
      
    </div>
  )
}

export default Homepage
