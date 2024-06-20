import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


import Homepage from './pages/Homepage'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChooseUs from './components/ChooseUs';

import OurServices from './components/OurServices';
import ContactUs from './pages/ContactUs';
import Popular from './components/Popular';


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
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
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;