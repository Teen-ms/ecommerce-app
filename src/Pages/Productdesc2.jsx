import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Productdesc2 = ({ addtocart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.in/api/products/${id}`);
        const data = await res.json();
        setProduct(data.product);
        console.log(product)
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p className="text-center text-lg">Loading...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md grid grid-cols-2 gap-8 mb-20 mt-20">
      {/* Left Section: Image */}
      <div>
        <img
          src={product.image}
          alt={product.title}
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>

      {/* Right Section: Product Info */}
      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="mt-2 text-gray-700">{product.description}</p>
        <p className="text-3xl font-bold mt-4">${product.price}</p>

        <button
          onClick={() => addtocart(product)}
          className="w-full mt-6 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800"
        >
          Add to Cart
        </button>

        <p className="text-center text-gray-600 mt-4">
          Free delivery on orders over $30.00
        </p>
      </div>
    </div>
  );
};

export default Productdesc2;
