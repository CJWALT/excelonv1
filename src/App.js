import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


import Homepage from './pages/Homepage'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChooseUs from './components/ChooseUs';

import OurServices from './components/OurServices';
import ContactUs from './pages/ContactUs';
import Popular from './components/Popular';
import { WhatsAppProvider } from './WhatsAppContext';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Tnc from './pages/Tnc';
import HelpnSupport from './pages/HelpnSupport';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  )
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { 
        index:true,
        element:<Homepage/>
      },
      {
        path: "about-us",
        element: <ChooseUs />
      },
      {
        path: "our-services",
        element: <OurServices />
      },
      {
        path: "contact-us",
        element: <ContactUs />
      },
      {
        path: "popular",
        element: <Popular />
      },
      {
        path: "tnc",
        element: <Tnc />
      },
      {
        path: "helpnsupport",
        element: <HelpnSupport />
      }
    ]
  }
]);

function App() {

    useEffect(() => {
      AOS.init(
        {once:true,}
      );
    }, []);
  
  return  <WhatsAppProvider>
            <RouterProvider router={router} />;
        </WhatsAppProvider>
  
}

export default App;