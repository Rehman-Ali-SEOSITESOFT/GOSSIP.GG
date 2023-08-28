import React, { useState } from "react";
import "./countdown.style.css";
const CountDownSection = () => {
  const [second, setSecond] = useState<number>(0);

  setTimeout(() => {
    setSecond(second + 1);
  }, 1000);
  return (
    <div className="p-[100px]">
      <div className="text-center overflow-hidden">
        <h5 className="text-brand montserratfont text-base  font-medium">
          <span className="inline-block">00</span> :
          <span className="inline-block"> 57</span> :
          <span className="top-second inline-block"> {second}</span>
        </h5>
        <h5 className="text-brand montserratfont text-lg  font-medium">
          <span className="inline-block">00</span> :
          <span className="inline-block"> 57</span> :
          <span className="second inline-block"> {second}</span>
        </h5>
        <h5 className="text-brand montserratfont  text-base  font-medium">
          <span className="inline-block">00</span> :
          <span className="inline-block"> 57</span> :
          <span className="bottom-second inline-block"> {second}</span>
        </h5>
      </div>
    </div>
  );
};

export default CountDownSection;
