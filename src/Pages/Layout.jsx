import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Footer'

function Layout(props){
  return (
    <div>
    <Navbar  cart={props.cart}/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Layout
