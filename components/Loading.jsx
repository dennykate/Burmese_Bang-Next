import React from "react";
import Lottie from "lottie-react";

import WalkingLady from "../assets/walking-lady.json";

const Loading = () => {
  return (
    <div className="w-full h-[300px] my-[10px] flex justify-center items-center bg-gray-800">
      <div className="w-[200px]">
        <Lottie animationData={WalkingLady} />
      </div>
    </div>
  );
};

export default Loading;
