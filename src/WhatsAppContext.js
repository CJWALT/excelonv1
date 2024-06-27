import React, {createContext} from 'react';

const WhatsAppContext = createContext();

    export const WhatsAppProvider = ({ children })=>{ 

    const sendWhatsappMessage = ( phoneNumber, message)=>{ 
        const url =  `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };
    return (
        <WhatsAppContext.Provider value = {{ sendWhatsappMessage }}>
                {
                    children
                }
                </WhatsAppContext.Provider>
    )
}

export default WhatsAppContext;