import React from 'react'
import Hero from '../components/Hero'
import ChooseUs from '../components/ChooseUs'
import OurServices from '../components/OurServices'
import Popular from '../components/Popular'
import Testimonial from '../components/Testimonial'
import Faq from '../components/Faq'
import usePageSEO from '../hooks/usePageSeo'


const Homepage = () => {
  usePageSEO({ 
      title:'Excelon Properties and Auto deals',
      description:'Excelon properties where we deliver real estate services and and auto deals',
      image:'Excelon Properties and Auto deals',
  })
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
