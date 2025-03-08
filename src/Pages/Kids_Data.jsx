import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { ShoppingCart } from "lucide-react";

function Kids_Data() {
  const [KidData, setKidData] = useState([]);
  const Kids_function = async () => {
    const req = await fetch("http://localhost:3000/kids_data");
    const res = await req.json();
    setKidData(res);
    console.log(res);
  };
  useEffect(() => {
    Kids_function();
  }, []);

  return (
    <>
      <div className="flex flex-wrap ml-8 ">
        {KidData.map((item, index) => (
          <div key={index} className="ml-10 mt-10">
            <div className="w-80 h-120 bg-white rounded-lg shadow-lg p-4">
              <img
                src={item.images}
                alt="Blue Shoes"
                className="w-full h-80 object-cover rounded-md"
              />
              <div className="mt-4 text-center">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <div className="flex justify-between">
                  <span className="text-gray-700 mt-2 ml-7">${item.price}</span>
                  <Link to={`/productdesc/kids/${item.id}`}>
                    <button className="mt-2 flex items-center gap-1 text-blue-600">
                      <ShoppingCart size={20} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Kids_Data;
