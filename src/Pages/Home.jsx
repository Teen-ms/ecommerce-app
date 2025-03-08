import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Productcard from "../Components/ProductCard";
import '../App.css';
import HeroPage from "./HeroPage";
// import NewData from "./NewData";




function Home() {
  const [allproduct, setAllproduct] = useState([]);
  const [filteredValue, setFilteredValue] = useState([]);

  const getallproduct = async () => {
    try {
      const response = await fetch(`http://localhost:3000/product_data`);
      const data = await response.json();
      console.log("Fetched Data:", data);
      setAllproduct(data);
      setFilteredValue(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getallproduct();
  }, []);

  const search = (e) => {
    const v = e.target.value;
    const searchValue = allproduct.filter((item) =>
      item.title.toLowerCase().includes(v.toLowerCase())
    );
    setFilteredValue(searchValue);
  };

  return (
    <>
 
   
<HeroPage/>
{/* search bar  */}
    <div class="spectacledcoder-search-bar mt-10">
        <img class="search-icon" width="30" height="30" src="https://img.icons8.com/sf-black/500/000000/search.png" alt="search"/>
        <input type="text" name="search" onChange={search} placeholder="Search SpectacledCoder or type a URL" class="spectacledcoder-search-input" autocomplete="on"/>
 
    </div>

    <div className="w-full flex justify-center gap-8 mt-10">
  <div className="h-40 w-40 rounded-full overflow-hidden">
    <Link to={"http://localhost:5173/women"}>
    <img
      src="https://img.freepik.com/free-photo/happy-woman-yellow-sweater_23-2148510273.jpg?t=st=1740941723~exp=1740945323~hmac=9900744ac3bfa59d6de3b4f9eff7ca886f4cc843c8a075ece9ff47e4a14491cb&w=900"
      className="h-full w-full object-cover"
    /></Link>
  </div>
  
  <div className="h-40 w-40 rounded-full overflow-hidden">
    <Link to={"http://localhost:5173/men"}>
    <img
      src="https://img.freepik.com/premium-photo/portrait-young-woman-standing-against-yellow-background_1048944-2891124.jpg?w=1380"
      className="h-full w-full object-cover"
    /></Link>
  </div>

  <div className="h-40 w-40 rounded-full overflow-hidden">
    <Link to={"http://localhost:5173/kids"}>
    <img
      src="https://media.istockphoto.com/id/1148276111/photo/happy-little-brother-and-sister-on-orange-background.jpg?s=2048x2048&w=is&k=20&c=5wJITEjyGsCndq0-2KNKBycNKJx-_mOFECEygGcb0R0="
      className="h-full w-full object-cover"
    /></Link>
  </div>
</div>

    
    {/* product card mapping */}
      <div className="container mt-20 px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  ">
          {filteredValue.map((product) => (
            <Productcard key={product.id} product={{ ...product, qty: 1 }} />
          ))}
        </div>
      </div>
{/*    */}
    </>
  );
}

export default Home;
