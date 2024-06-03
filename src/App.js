import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import OurServices from './pages/OurServices';
import AboutUs from './pages/AboutUs';
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
        element: <AboutUs />
      },
      {
        path: "our-services",
        element: <OurServices />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;