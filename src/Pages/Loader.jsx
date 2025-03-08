import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import React from "react";

const Loader = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("") // Replace with your Lottie URL
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading Lottie:", error));
  }, []);

  return animationData ? <Lottie animationData={animationData} loop={true} className="w-60" /> : <p>Loading...</p>;
};

export default Loader;
