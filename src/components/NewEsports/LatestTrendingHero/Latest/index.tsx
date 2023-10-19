import Image from "next/image";
import React from "react";
import "./latest.css";
const Latest = (props: any) => {
  const { image, latestNew } = props;
  return (
    <>
      <div className="latest_esports_wrapper flex items-start mt-[20px] mx-13:mb-[16px] mb-[22px] mx-14:mb-[20px] mx-13:mt-[16px] mw-xl:mt-[12px]">
        <div className="min-w-[150px] min-h-[88px]">
          <Image src={image} alt="" className="" />
        </div>
        <p className="montserratfont text-[13px] font-medium capitalize dark:text-[#E5E5E5] pl-[9px] leading-[18px] pr-[18px] mw-xl:text-[13px]">
          {latestNew}
        </p>
      </div>
    </>
  );
};

export default Latest;
