import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Shop from './pages/shop/Shop'
import Contact from './pages/contact/Contact'
import Layout from './components/Layout'
import './App.css'

function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />, 
      children: [
        { index: true, element: <Home /> }, 
        { path: 'about', element: <About /> },
        { path: 'shop', element: <Shop /> },
        { path: 'contact', element: <Contact /> },
      ],
    },
  ]);




  return (
    <>
    
    <RouterProvider router={router}/>
        
    </>
  )
}

export default App
