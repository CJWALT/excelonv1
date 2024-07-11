import React, {createContext} from 'react';

const WhatsAppContext = createContext();

    export const WhatsAppProvider = ({ children })=>{ 

    const sendWhatsappMessage = ( phoneNumber, message)=>{ 
        const url =  `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    const handleOpenWhatsappClick = (messageText)=>{ 
        const telNum = process.env.REACT_APP_CLIENT_NUMBER;
        const message = messageText;
  
        sendWhatsappMessage(telNum, message)
      }

       console.log(process.env.REACT_APP_CLIENT_NUMBER)

   const sendEmail = (email, name, message)=>{ 
            const recipient = process.env.REACT_APP_CLIENT_EMAIL;
            const subject = encodeURIComponent(`Message from ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
            window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
          };
     

    return (
        <WhatsAppContext.Provider value = {{ sendWhatsappMessage, handleOpenWhatsappClick, sendEmail}}>
                {
                    children
                }
                </WhatsAppContext.Provider>
    )
}

export default WhatsAppContext;