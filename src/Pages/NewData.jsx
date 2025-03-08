import React, { useEffect, useState } from "react";

function NewData() {
  const [Ndata, setNdata] = useState([]);

  // Fetch API Data
  const fetchData = async () => {
    
      const response = await fetch("http://localhost:3000/product_data"); // API URL
      const data = await response.json();
      console.log("Fetched Data:", data); // Debugging API response
      setNdata(data); // Store in state
     console.log(data)
  }
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="w-full min-h-screenflex justify-center p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Ndata.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
            {/* Product Image */}
            <img
              src={item.images}
              alt={item.title}
              className="w-full h-52 object-cover rounded-md"
            />
            {/* Product Details */}
            <h2 className="text-lg font-semibold text-gray-800 mt-3">{item.title}</h2>
            <p className="text-lg font-bold text-green-600 mt-1">${item.price}</p>
            {/* Buy Now Button */}
            <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
              
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewData;
