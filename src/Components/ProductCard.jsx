import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";


function ProductCard({ product }) {
  const { title, images, price, id } = product;

  return (
    <>

<div className="bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg mt-10 shadow-lg w-64 overflow-hidden">
        <div className="relative">
          <img
            src={images}
            alt="Chair"
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-bold">{title}</h2>
          <div className="flex justify-between">
          <span className="text-gray-700 mt-2">${price}</span>
          <Link to={`/productdesc/product/${id}`}>
          <button className="mt-2 flex items-center gap-1 text-blue-600">
            <ShoppingCart size={20} />
          </button>
          </Link></div>
        </div>
      </div>
    </div>

    </>
  );
}

export default ProductCard;

