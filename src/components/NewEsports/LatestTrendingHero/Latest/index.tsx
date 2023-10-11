import Image from "next/image";
import React from "react";
import "./latest.css";
const Latest = (props: any) => {
  const { image, latestNew } = props;
  return (
    <>
      <div className="latest_esports_wrapper flex items-start mt-[20px] mb-[27px] ">
        <div className="min-w-[150px]">
          <Image src={image} alt="" className="" />
        </div>
        <p className="montserratfont text-[13px] font-medium capitalize dark:text-[#E5E5E5] pl-[9px] leading-[18px] pr-[18px] mw-xl:text-[12px]">
          {latestNew}
        </p>
      </div>
    </>
  );
};

export default Latest;
