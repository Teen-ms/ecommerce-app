import React, { useState } from "react";

function CartPage({ cartPage, removeItem, quantity }) {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelectItem = (index) => {
    setSelectedItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };
  console.log("cartpage",cartPage)

  // const totalPrice = selectedItems.reduce((sum, item) => {
  //   const cartItem = cart[item];
  //   if (!cartItem || cartItem.price === undefined || cartItem.quantity === undefined) {
  //     return sum;
  //   }
  //   return sum + cartItem.price * cartItem.quantity;
  // }, 0);

  const totalPrice = cartPage.reduce((sum, item, index) => {
    return sum + (item.price * item.quantity);
  }, 0);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Cart Header */}
      <h1 className="text-center text-5xl font-extrabold text-gray-900 mb-8">
        Shopping Cart
      </h1>

      {/* Cart Items */}
      <div className="max-w-6xl mx-auto space-y-6">
        {(cartPage || []).map((item, index)=> (
          <div
            key={index}
            className="flex items-center justify-between bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Checkbox */}
            <input
              type="checkbox"
              checked={selectedItems.includes(index)}
              onChange={() => toggleSelectItem(index)}
              className="w-5 h-5 accent-purple-600 cursor-pointer"
            />

            {/* Product Image */}
            <img
              src={item.images}
              alt={item.name}
              className="w-24 h-30 ml-10 object-cover transform hover:scale-110 transition-transform duration-300"
            />

            {/* Product Name */}
            <h3 className="flex-1 ml-6 text-xl font-semibold text-gray-800">
              {item.name}
            </h3>

            {/* Price */}
            <p className="text-xl mr-10 font-bold text-gray-900">
              ${item.price.toFixed(2)}
            </p>
            
            {/* Quantity Controls */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => quantity("-", index)}
                className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200"
              >
                <span className="text-2xl font-bold text-gray-700">-</span>
              </button>
              <span className="text-xl font-semibold text-gray-800">
                {item.quantity}
              </span>
              <button
                onClick={() => quantity("+", index)}
                className="w-10 h-10  flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200"
              >
                <span className="text-2xl  font-bold text-gray-700">+</span>
              </button>
            </div>

            {/* Remove Button */}
            <button
              onClick={() => removeItem(index)}
              className="text-red-500 hover:text-red-700 transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* Checkout Section */}
      <div className="max-w-6xl mx-auto mt-8 bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-6">
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-gray-700">
            Selected Items ({selectedItems.length})
          </p>
          <p className="text-2xl font-bold text-gray-900">
            Total: ${totalPrice.toFixed(2)}
          </p>
          <button
            className="px-8 py-3 bg-gradient-to-r from-gray-900 to-gray-900 text-white font-semibold rounded-lg hover:from-gray-900 hover:to-gray-900 transition-all transform hover:scale-105"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;


