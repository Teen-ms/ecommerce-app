// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const Productdesc = ({ addtocart }) => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [selectedColor, setSelectedColor] = useState('default'); 
//   const [selectedSize, setSelectedSize] = useState('default'); 

//   const colorImages = {
//     gray: 'https://via.placeholder.com/400x300?text=Gray+Shoe',
//     black: 'https://via.placeholder.com/400x300?text=Black+Shoe',
//     white: 'https://via.placeholder.com/400x300?text=White+Shoe',
//     default: 'https://via.placeholder.com/400x300?text=Default+Shoe',
//   };

//   const sizeDimensions = {
//     '40.5': { width: 300, height: 200 },
//     '41': { width: 320, height: 220 },
//     '42': { width: 340, height: 240 },
//     '43': { width: 360, height: 260 },
//     '43.5': { width: 380, height: 280 },
//     '44': { width: 400, height: 300 },
//     '44.5': { width: 420, height: 320 },
//     '45': { width: 440, height: 340 },
//     '46': { width: 460, height: 360 },
//     default: { width: 400, height: 300 },
//   };

//   useEffect(() => {
//     const getsingleproduct = async () => {
//       try {
//         const res = await fetch(`http://localhost:3000/product_data/${id}`);
//         const data = await res.json();
//         setProduct({ ...data, quantity: 1 });
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       }
//     };

//     getsingleproduct();
//   }, [id]);

//   const handleSizeChange = (size) => setSelectedSize(size);
//   const handleColorChange = (color) => setSelectedColor(color);

//   if (!product) {
//     return <p className="text-center text-lg">Loading...</p>;
//   }

//   return (
//     <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10 grid grid-cols-2 gap-8">
//       {/* Left Section: Image */}
//       <div>
//         <img
//           src={selectedColor === 'default' ? product.images : colorImages[selectedColor]}
//           alt={product.title}
//           className="rounded-lg"
//           style={{
//             width: sizeDimensions[selectedSize].width,
//             height: sizeDimensions[selectedSize].height,
//           }}
//         />
//       </div>

//       {/* Right Section: Product Info */}
//       <div>
//         <h1 className="text-2xl font-bold">{product.title}</h1>
//         <div className="flex items-center mt-2 text-yellow-500">
//           ★★★★☆ <span className="text-gray-500 ml-2">42 reviews</span>
//         </div>
//         <p>{product.description}</p>
//         <p className="text-3xl font-bold mt-4">${product.price}</p>

//         {/* Color Selection */}
//         <div className="mt-4">
//           <h3 className="text-lg font-semibold">Choose Color</h3>
//           <div className="flex gap-2 mt-2">
//             {Object.keys(colorImages).map((color) => (
//               color !== "default" && (
//                 <button
//                   key={color}
//                   className={`w-10 h-10 rounded-full border-2 ${
//                     selectedColor === color ? "border-black" : "border-gray-300"
//                   }`}
//                   style={{ backgroundColor: color }}
//                   onClick={() => handleColorChange(color)}
//                 />
//               )
//             ))}
//           </div>
//         </div>

//         {/* Size Selection */}
//         <div className="mt-6">
//           <h3 className="text-lg font-semibold">Size (EU Men)</h3>
//           <div className="grid grid-cols-4 gap-2 mt-2">
//             {Object.keys(sizeDimensions).map((size) => (
//               size !== "default" && (
//                 <button
//                   key={size}
//                   className={`border px-4 py-2 rounded-lg ${
//                     selectedSize === size ? 'bg-black text-white' : 'hover:bg-gray-200'
//                   }`}
//                   onClick={() => handleSizeChange(size)}
//                 >
//                   {size}
//                 </button>
//               )
//             ))}
//           </div>
//         </div>

//         {/* Add to Cart */}
//         <button
//           onClick={() => addtocart(product)}
//           className="w-full mt-6 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800"
//         >
//           Add to Cart
//         </button>

//         <p className="text-center text-gray-600 mt-4">Free delivery on orders over $30.00</p>
//       </div>
//     </div>
//   );
// };

// export default Productdesc;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Productdesc = ({ addToCart}) => {
  const { category, id } = useParams(); // Get category & id from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        let apiUrl = "";
        
        // Determine which API to fetch data from
        if (category === "women") {
          apiUrl = `http://localhost:3000/women_clothes/${id}`;
        } else if (category === "men") {
          apiUrl = `http://localhost:3000/men_data/${id}`;
        } else if (category === "kids") {
          apiUrl = `http://localhost:3000/kids_data/${id}`;
        } else {
          apiUrl = `http://localhost:3000/product_data/${id}`;
        }

        const res = await fetch(apiUrl);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        const data = await res.json();
        setProduct({ ...data, quantity: 1 });

      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
  


    fetchProduct();
  }, [category, id]);

  if (!product) return <p className="text-center text-lg">Loading...</p>;

  return (
    <div className="max-w-6xl h-full  mx-auto p-6 bg-white rounded-lg shadow-md mt-10 grid grid-cols-2 gap-8">
      {/* Left Section: Image */}
      <div>
        <img
          src={product.images}
          alt={product.title}
          className="rounded-lg w-full h-140 object-cover"
        />
      </div>
     
      {/* Right Section: Product Info */}
      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p>{product.description}</p>
        <p className="text-3xl font-bold mt-4">${product.price}</p>

        {/* Add to Cart */}
        {/* <button
          onClick={() =>  addToCart (product)}
          className="w-full mt-6 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800"
        >
          Add to Cart
        </button> */}
      <button
  onClick={() => {
    if (typeof addToCart === "function") {
      addToCart(product);
    } else {
      console.error("addToCart is not defined or is not a function");
    }
  }}
  className="w-full mt-6 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800"
>
  Add to Cart
</button>



      </div>
    </div>
  );
};

export default Productdesc;
