import React, { useState } from 'react'

function ContactUs() {



    const [contactField, setContactField] = useState({
        name:'',
        email:'',
        message:'',
    })

    


    // const contactUs = ()=>{ 



    // }

    const handleChange = (e)=>{ 
        e.preventDefault();
        setContactField({ 
            ...contactField, 
            [e.target.name]: e.target.value,
        })

    }
  return (
    <div>
      contact us baby

      <form action="" className='border-2 border-red-400'>
        <input type="text" name='name' id='name' value={contactField.name} onChange={handleChange}  placeholder='email'required />
        <input type="text" name='email' id='email' value={contactField.email} onChange={handleChange} placeholder='email' required />
        <input type="text" name='message' id='message' value={contactField.message} onChange={handleChange} placeholder='email' required />

        <button className='border-2 border-red-400'>Send</button>
      
      </form>
    </div>
  )
}

export default ContactUs
