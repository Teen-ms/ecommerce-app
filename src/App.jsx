import React from 'react';
import { useState,useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import Cart from './Pages/CartPage';
import Productdesc from './Pages/Productdesc';
import Layout from './Pages/Layout';
import LoginPage from './Pages/LoginPage';
import ProtectedRoute from './Pages/ProtectedRoute';
import About from './Pages/About';
import Contact from './Pages/Contact';
import ClothCard from './Components/ClothCard';
import Productdesc2 from './Pages/Productdesc2';
import Women from './Pages/Women';
import MenData from './Pages/MenData';
import Kids_Data from './Pages/Kids_Data';


function App() {
  const [cart, setCart] = useState([]);

  const addTocart = (item) => {
    setCart([...cart, item]);
  };
  // Load cart from localStorage on mount

 
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);



  const removeitem = (ind) => {
    setCart(cart.filter((_, index) => index !== ind)); // Corrected filtering logic
  };

  const handleQuantityChange = (action, index) => {
    const updatedCart = cart.map((item, i) => {
      if (i === index) {
        const updatedQuantity = action === "+" ? item.quantity + 1 : Math.max(1, item.quantity - 1);
        return { ...item, quantity: updatedQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };
  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
    // Add logic to store the product in the cart
  };
  console.log(cart,"aapp")

  return (
    <>
  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout cart={cart}/>}>
          <Route path='/Home' element={<Home/>}/>
            <Route index element={<Home/>} />
            <Route path='/women' element={<Women/>}></Route>
            <Route path="/productdesc/:id" element={<Productdesc />} />
            <Route path='/men' element={<MenData />}></Route>
            <Route path='/Kids' element={<Kids_Data />}></Route>
            <Route path="/CartPage" element={<ProtectedRoute  Comp={Cart} cartPage={cart} removeItem={removeitem} quantity={   handleQuantityChange  }> </ProtectedRoute>}/>
            {/* <Route path="/Product/:id" element={<Productdesc addtocart={addTocart} />} /> */}
            <Route path="/productdesc/:category/:id" element={<Productdesc addToCart={addTocart} />} />
        
            <Route path="/Product2/:id" element={<Productdesc2 addtocart={addTocart} />} />
            <Route path='/login' element={<LoginPage/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/Electronics' element={<ClothCard/>}></Route>
           
          
           
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;