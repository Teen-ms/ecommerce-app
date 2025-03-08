// import React from "react";
// import '../App.css'

// const HeroPage = () => {
//   return (
//     <div className="relative w-full h-dvh bg-pink-100 flex items-center justify-center p-10 bg-[url()]">
//       <div className="max-w-5xl flex flex-col md:flex-row items-center">
//         {/* Left Side - Text Content */}
//          <div className="md:w-1/2 text-center md:text-left">
//           <h1 className="text-5xl font-bold text-gray-900 mb-4">
//             Big Sales & New Arrivals
//           </h1>
//           <p className="text-gray-700 text-lg mb-6">
//             The collection is a fresh take on sophisticated grunge and urban street style, with distinct silhouettes.
//           </p>
//           <div className="flex gap-4 justify-center md:justify-start">
//             <button className="bg-red-500 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-lg hover:bg-red-600">
//               Shop Now
//             </button>
//             <button className="border-2 border-red-500 text-red-500 py-3 px-6 rounded-lg text-lg font-semibold shadow-lg hover:bg-red-500 hover:text-white">
//               <i className="fas fa-shopping-cart"></i>
//             </button>
//           </div>
//         </div> 
        
//         {/* Right Side - Image */}
//         <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
//           <img
//              src="/woman-showing-her-purchases-red-background-high-quality-photo_114579-22940-removebg-preview (1).png"
//             alt="Shopping Woman"
//             className=" w-full h-auto ml-30 md:max-w-md "
//           />


//         {/* https://cdn.pixabay.com/photo/2024/02/21/11/17/ai-generated-8587423_1280.png */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroPage;

// import React from "react";

// const SalonLandingPage = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-white p-10">
//       <div className="max-w-5xl flex flex-col md:flex-row items-center gap-8">
//         {/* Left Section - Text Content */}
//         <div className="md:w-1/2 space-y-6">
//           <h1 className="text-5xl font-bold text-black leading-tight">
//             Welcome to <span className="block">Luxe Salon</span>
//           </h1>
//           <p className="text-gray-600 text-lg">
//             We provide the best professional hair care and styling services tailored for you.
//           </p>
//           <button className="bg-black text-white px-6 py-3 rounded-full flex items-center hover:bg-gray-800 transition">
//             Book an Appointment →
//           </button>
//         </div>

//         {/* Right Section - Images */}
//         <div className="md:w-1/2 relative flex justify-center">
//           {/* Main Salon Image */}
//           <img
//             src="https://media.istockphoto.com/id/1193750118/photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.jpg?s=2048x2048&w=is&k=20&c=Yyvg4vrUdJ7RXvtEvh_qEuAdE4sQkARcK8fE7YcdFNU="
//             alt="Salon Interior"
//             className="w-full h-screen rounded-lg shadow-lg"
//           />

//           {/* Small Images (Stylists at Work) */}
//           <img
//             src="https://cdn.pixabay.com/photo/2024/02/21/11/17/ai-generated-8587423_1280.png"
//             alt="Stylist working"
//             className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 rounded-lg shadow-lg border-4 border-white"
//           />

//           <img
//             src="/imresizer-1740565077945-removebg-preview.png"
//             alt="Haircut session"
//             className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 rounded-lg shadow-lg border-4 border-white"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SalonLandingPage;



import React from "react";
import { motion } from "framer-motion";

const SalonLandingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-10 bg-amber-600">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center relative">
        {/* Left Section - Text Content */}
        <div className="md:w-1/2 space-y-8 z-10 p-6 flex flex-col items-start text-left">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-6xl font-extrabold text-black leading-tight font-serif"
      >
        Welcome to Digital <br />
        <span className="text-pink-600">Mart</span>
      </motion.h1>


      <motion.button 
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }}
        className="bg-black text-white px-8 py-3 rounded-full flex items-center justify-center hover:bg-gray-800 transition shadow-xl"
      >
        Book an Appointment →
      </motion.button>
    </div>

        {/* Right Section - Background Image with Small Overlapping Images */}
        <div className="md:w-1/2 relative flex justify-center md:justify-end mt-8 md:mt-0">
          {/* Background Image (Main Salon Image) */}
          <div className="relative w-full md:w-[500px] h-[300px] md:h-[400px]">
            <img
              src="https://img.freepik.com/free-photo/pretty-young-stylish-woman-pink-luxury-dress-using-mobile-phone-holding-shopping-bags_285396-9673.jpg?t=st=1740594071~exp=1740597671~hmac=0d356b37d8658bc992521a6b7eba3d0c0b3d3dc25c60c2e2eddb24d5cda4d3c6&w=1380"
              alt="Salon Interior"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />

            {/* Small Image 1 - Bottom Left */}
            <img
              src="https://www.shutterstock.com/shutterstock/photos/2107187642/display_1500/stock-photo-sales-consultant-advises-man-who-chooses-new-smartphone-in-store-of-household-appliances-2107187642.jpg"
              alt="Stylist working"
              className="absolute bottom-[-40px] left-[-40px] w-32 h-32 md:w-40 md:h-40 rounded-lg shadow-lg border-4 border-white"
            />

            {/* Small Image 2 - Top Right */}
            <img
              src="https://img.freepik.com/premium-photo/hands-holding-black-t-shirt-hanger_53876-109734.jpg?w=740"
              alt="Haircut session"
              className="absolute top-[-40px] right-[-40px] w-32 h-32 md:w-40 md:h-40 rounded-lg shadow-lg border-4 border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalonLandingPage;
