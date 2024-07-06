import { useContext, useState } from "react"
import WhatsAppContext from "../WhatsAppContext";


const ContactForm = () => {

  const { sendEmail} = useContext(WhatsAppContext)

  const [emailField, setEmailField] = useState(
    {
      name:'',
      email:'',
      message:'',
      
    }
  )

  const handleFieldChange = (event)=>{ 

    const {name, value} =event.target;

    setEmailField((prev)=>({
      ...prev, 
      [name] : value
    }))

  }



  const handleEmailSend = (e) => {
    e.preventDefault();
      sendEmail(emailField.name, emailField.email, emailField.message)

  };

  return (
    <div >
     <div data-aos='fade-up' className="w-[90%]  mx-auto h-[40rem] justify-center flex  flex-col">
        <div className="flex gap-8 text-center relative flex-col">
        <h3 className="font-[Limelight] text-[#091751] text-[1.4rem] mb-[1rem]">Contact EXCELON PROPERTIES Today!</h3>
          <div className="flex flex-col gap-8 border-2 border-[#091751] rounded-lg px-[.7rem] py-[1rem] sm:p-8" >
            <input type="text" onChange={handleFieldChange} value={emailField.name} name="name" placeholder="Name:" className="shadow-lg shadow-red p-4 rounded-md focus:ring-1 focus:ring-[#091751]  focus:outline-none" required />
            <input type="email" onChange={handleFieldChange} value={emailField.email} name="email" placeholder="Email:" className="shadow-lg shadow-red p-4 rounded-md focus:ring-1 focus:ring-[#091751]  focus:outline-none" required />
            <textarea name="message" rows='3' onChange={handleFieldChange} value={emailField.message} placeholder="Message:" className="shadow-lg shadow-red p-4 rounded-md focus:ring-1 focus:ring-[#091751] resize-none  focus:outline-none" required></textarea>
            <button onClick={handleEmailSend} className="p-4 bg-[#091751] text-white rounded-md hover:bg-transparent hover:shadow-md hover:shadow-[#091751] hover:text-[#091751]">Send</button>
          </div>
        
        </div>
       
      </div>
      </div>
      
  
    
  );
};

export default ContactForm;