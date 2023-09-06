import React, { useState } from "react";
const CountDown = (props) => {
  const [second, setSecond] = useState(59);
  const [mintues, setMintues] = useState(2);
  const [hour, setHour] = useState(2);
  const [days, setDays] = useState(2);

  let countDownDate = new Date("Aug 31, 2025 14:58:15").getTime();

  setTimeout(() => {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
    setHour(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMintues(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSecond(Math.floor((distance % (1000 * 60)) / 1000));
  }, 1000);

  return (
    <div className="">
      <div className="flex flex-row items-center justify-center my-2">
        <p className="pr-[18px] text-brandDark2 dark:text-brand text-[11px] montserratfont italic ">
          {props.title}:
        </p>

        <div className="flex flex-col items-center">
          <h3 className="countdown text-lg font-medium montserratfont leading-[22px] text-brandDark2 dark:text-brand ">
            <span
              className="inline-block pr-[2px]"
              style={{ "--value": hour }}
            />
            :
            <span className="inline-block" style={{ "--value": mintues }} />
            :
            <span
              className="bottom-second inline-block ml-[2px]"
              style={{ "--value": second }}
            />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
