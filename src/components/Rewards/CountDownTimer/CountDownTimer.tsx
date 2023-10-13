import React from "react";
import Countdown from "react-countdown";
const CountDownTimer = () => {
  const Completionist = () => <span>You are good to go!</span>;
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span>
          <span className="pr-[5px]"> {hours}</span>:
          <span className="px-[5px]">{minutes}</span>:
          <span className="pl-[5px]">{seconds}</span>
        </span>
      );
    }
  };

  return (
    <>
      <Countdown date={Date.now() + 500000000} renderer={renderer} />
    </>
  );
};

export default CountDownTimer;
