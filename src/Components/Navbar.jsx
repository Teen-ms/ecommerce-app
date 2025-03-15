import { useState } from "react";
import { Menu } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar({ cart }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav className="bg-pink-700 px-4 h-20 py-2 ">
        {/* Logo */}
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-10">
      <img src="/6208b43c-9e2f-4716-9d20-d1b287a04de1-removebg-preview.png" className="h-20 w-60"></img>
        
        {/* <div className="text-2xl font-bold tracking-wide text-white">Digital Mart</div> */}

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-white m-5">
        
       
          <div  className="hover:underline"><NavLink to={`/home`}>Home</NavLink></div>
          
          <div  className="hover:underline"><NavLink to={`/about`}>About</NavLink></div>
          <div  className="hover:underline"><NavLink to={`/Electronics`}>Electronic</NavLink></div>
          <div  className="hover:underline"><NavLink to={`/contact`}>Contact</NavLink></div>
          <div  className="hover:underline"><NavLink to={`/login`}>Login</NavLink></div>
          <div  className="hover:underline"><NavLink to={`/CartPage`}><span>{cart.length}</span>Cart</NavLink></div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={24} />      
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-[#f5f0ed] text-black py-2 px-4 space-y-2 border-t border-black">
          <div className="hover:underline"><NavLink to={`/home`}>Home</NavLink></div>
          <div className="hover:underline"><NavLink to={`/about`}>About</NavLink></div>
          <div className="hover:underline"><NavLink to={`/Electronics`}>Electronic</NavLink></div>
          <div  className="hover:underline"><NavLink to={`/contact`}>Contact</NavLink></div>
          <div  className="hover:underline"><NavLink to={`/login`}>Login</NavLink></div>
          <div  className="hover:underline"><NavLink to={`/CartPage`}>Cart</NavLink></div>
        </div>
      )}
    </nav>  </>
  );

}

