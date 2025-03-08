import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function ClothCard() {
const [ElectronicCard,setElectroniccard]=useState([])
const Elecfunction= async ()=>{
  const response=await fetch(`https://fakestoreapi.in/api/products`) 
  const data=await response.json()
  setElectroniccard(data.products)
  console.log(data.products)

}

useEffect(()=>{
  Elecfunction()
},[])


  return (
    <>
    <div className='w-full ml-20'>
      <div className=" w-full flex flex-wrap ">
      {/* {ElectronicCard.map((item,idx)=>{
        return(
          <>
          <div className='border-2 w-[200px] p-8 mt-10 ml-40 rounded-lg'>
            <img
            key={idx}
            src={item.image}
            alt=""
            className="w-full h-28 object-cover"
            />
            <div className="p-2">
              <p className="text-black-800 font-medium m-0 truncate">{item.title}</p>
              <div className="flex justify-between items-center mt-1">
                <span className="text-sm font-bold text-black-500">${item.price}</span>
              </div>
              <Link to={`/Product2/${item.id}`}>
                <button className="w-full px-2 py-1 mt-2 bg-gray-900 text-white rounded-md shadow-md transition-all duration-300 hover:bg-green-500 hover:shadow-lg text-xs">
                  Read More
                </button>
              </Link>
            </div>
            </div>
            </>
        )
        })} */}

{ElectronicCard.map((item, idx) => {
  return (
   
   
  <>
  <div className=''>

    <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden ml-5 mt-10 ">
      {/* Product Image */}
      <img
        src={item.image}// Replace with actual image URL
        alt="Women Printed Night Suit"
        className="w-full h-80 object-cover"
      />
      <p className="text-lg text-gray-900 font-bold">{item.model}</p>
      <div className="p-4 ">
        {/* Rating Section */}
        <div className="flex items-center space-x-2 bg-gray-100 px-2 py-1 rounded-md w-max">
          <span className="text-sm font-semibold text-gray-800">4.4</span>
          <span className="text-green-500">★</span>
          <span className="text-sm text-gray-600">| 119</span>
          <div className=' w-10 text-3xl '>
          <p className='text-lg ml-20 font-bold'>${item.price}</p>
          </div>
        </div>

        {/* <h3 className='text-lg font-bold'>{item.category}</h3> */}
        {/* Product Name */}
        {/* <h4 className="mt-2  font-semibold text-gray-900"></h4>
        
         */}
        {/* Price */}
        
        <Link to={`/Product2/${item.id}`}>
         <button className="w-20 px-2 py-1 mt-5 bg-gray-900 text-white rounded-md shadow-md transition-all duration-300 hover:bg-green-500 hover:shadow-lg text-xs">
             Read More
          </button>
         </Link>
      </div>
    </div>
    </div>
    </>
  );
})}
          </div>
    </div>
    </>
  )
}

export default ClothCard;

