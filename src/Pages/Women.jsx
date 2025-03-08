import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { ShoppingCart } from "lucide-react";

function Women() {
  const [womenData, setwomenData]=useState([])
  const Woman_function= async()=>{
    const req= await fetch("http://localhost:3000/women_clothes")
    const res=await req.json()
    setwomenData(res)
    console.log(res)

  }
  useEffect(() => {
    Woman_function();
  }, []);
 
    return (
      <>
      <div className='flex flex-wrap ml-8'>  
{womenData.map((item, index) => (
  
 

 <div key={index} className='ml-10 mt-10'>

  <div className="w-80 h-110 bg-white rounded-lg shadow-lg p-4">
      <img
        src={item.images}
        alt="Blue Shoes"
        className="w-full h-80 object-cover rounded-md"
      />
      <div className="mt-4 text-center">
      <h2 className="text-lg font-bold">{item.title}</h2>
        <div className='flex justify-between'>

        <span className="text-gray-700 mt-2 ml-7">${item.price}</span>
        <Link to={`/productdesc/women/${item.id}`}>
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
    )

  }
export default Women;


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// function Women() {
//   const [womenData, setWomenData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchWomenData = async () => {
//       try {
//         const req = await fetch("http://localhost:3000/women_clothes");
//         if (!req.ok) throw new Error(`HTTP error! Status: ${req.status}`);
//         const res = await req.json();
//         setWomenData(res);
//       } catch (error) {
//         console.error("Error fetching women products:", error);
//         setError(error.message);
//       }
//     };

//     fetchWomenData();
//   }, []);

//   if (error) return <p className="text-center text-red-500">Error: {error}</p>;

//   return (
//     <div className="flex flex-wrap ml-8">
//       {womenData.length === 0 ? (
//         <p className="text-center text-lg">Loading...</p>
//       ) : (
//         womenData.map((item) => (
//           <div key={item.id} className="ml-10 mt-10">
//             <div className="w-80 h-120 bg-white rounded-lg shadow-lg p-4">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-80 object-cover rounded-md"
//               />
//               <div className="mt-4 text-center">
//                 <h2 className="text-lg font-semibold">{item.title}</h2>
//                 <p className="text-green-600 font-bold text-xl">${item.price}</p>
                
//                 {/* Pass category "women" in the Link */}
//                 <Link to={`/productdesc/women/${item.id}`}>
//                   <button className="bg-black text-white px-4 py-2 rounded-md mt-2 hover:bg-gray-800">
//                     Buy Now
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default Women;
