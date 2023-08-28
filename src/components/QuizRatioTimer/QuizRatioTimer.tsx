import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";

const QuizRatioTimer = () => {
  const Completionist = () => (
    <span className="montserratfont text-[14px] font-semibold leading-[17.07px] ">
      Quiz Result <i className="fa-solid fa-angle-right"></i>
      <i className="fa-solid fa-angle-right"></i>
    </span>
  );
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state

      return (
        <>
          <Completionist />;
        </>
      );
    } else {
      // Render a countdown
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };
  //   console.log(comple, "child");
  return (
    <>
      <Countdown date={Date.now() + 5000} renderer={renderer} />
    </>
  );
};

export default QuizRatioTimer;
