import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

export default function AppLayout() {
  return (
    <div className='bg-[#F5F5F5] '>
      <Navbar/>
        <Outlet/>
        <Footer />
    </div>
  )
}
