import React from "react";
import FlipCountdown from "@rumess/react-flip-countdown";
const CountdownSection = () => {
  return (
    <div className="flex flex-row items-center justify-center my-2">
      <p className="pr-[18px] text-brand text-[11px] montserratfont italic ">
        Time Left:
      </p>
      <div className="">
        <FlipCountdown
          hideYear
          hideMonth
          size="extra-small"
          hideDay
          endAt={"2023-12-12 01:26:58"} // Date/Time
        />
      </div>
    </div>
  );
};

export default CountdownSection;
