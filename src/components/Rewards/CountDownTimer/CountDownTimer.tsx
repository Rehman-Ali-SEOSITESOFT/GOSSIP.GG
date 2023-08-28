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
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };

  return (
    <>
      <Countdown date={Date.now() + 5000000000} renderer={renderer} />
    </>
  );
};

export default CountDownTimer;
