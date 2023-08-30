import React, { useState } from "react";
import "./countdown.style.css";
// import "./anim.css";
const CountDown = () => {
  const [second, setSecond] = useState(59);
  const [mintues, setMintues] = useState(2);
  const [hour, setHour] = useState(2);
  const [days, setDays] = useState(2);
  let countDownDate = new Date("Aug 31, 2023 14:58:15").getTime();

  setTimeout(() => {
    // setSecond(second - 1);

    // if (second === 1) {
    //   setSecond(59);
    // }

    let now = new Date().getTime();
    let distance = countDownDate - now;
    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));

    setHour(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMintues(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSecond(Math.floor((distance % (1000 * 60)) / 1000));

    // if (second >= 59) {
    //   setMintues(mintues - 1);
    // }

    // if (mintues === 0) {
    //   setHour(hour - 1);
    // }
    // if (hour === 0) {
    //   setHour(0);
    // }

    // if (mintues >) {
    //   setHour(hour - 1);
    // }
    // if (second <= 59) {
    //   setSecond(0);
    //   setMintues(mintues - 1);
    // }
  }, 1000);

  return (
    <div className="">
      <div className="flex flex-row items-center justify-center my-2">
        <p className="pr-[18px] text-brand text-[11px] montserratfont italic ">
          Time Left:
        </p>

        <div className="flex flex-col items-center">
          {/* <h3 className="countdown text-base font-medium montserratfont leading-[20px] ">
            <span className="inline-block">00</span>
            <span className="inline-block">&nbsp;&nbsp;57&nbsp;&nbsp;</span>
            <span className="bottom-second inline-block">
              {second.toString().padStart(2, "0")}
            </span>
          </h3> */}
          <h3 className="countdown text-lg font-medium montserratfont leading-[22px] text-brand ">
            {/* <span className="inline-block" style={{ "--value": days }} /> */}
            <span className="inline-block pr-[2px]" style={{ "--value": hour }} />
            :
            <span className="inline-block" style={{ "--value": mintues }} />
            :
            <span
              className="bottom-second inline-block"
              style={{ "--value": second }}
            />
          </h3>
          {/* <h3 className="countdown text-base font-medium montserratfont leading-[20px] ">
            <span className="inline-block">00</span>
            <span className="inline-block">&nbsp;&nbsp;57&nbsp;&nbsp;</span>
            <span className="bottom-second inline-block">
              {second.toString().padStart(2, "0")}
            </span>
          </h3> */}
        </div>
      </div>
    </div>
  );
};

export default CountDown;
