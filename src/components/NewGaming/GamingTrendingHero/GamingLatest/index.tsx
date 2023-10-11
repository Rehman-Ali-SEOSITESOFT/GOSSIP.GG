import Image from "next/image";
import React from "react";

const GamingLatest = (props: any) => {
  const { image, latestNew } = props;
  return (
    <>
      <div className="latest_esports_wrapper flex items-start mt-[20px] mb-[27px] mw-lg:mt-[16px] mw-lg:mb-[0px]">
        <div className="min-w-[150px]">
          <Image src={image} alt="" className="" />
        </div>
        <p className="montserratfont text-[13px] font-medium capitalize text-[#E5E5E5] pl-[9px] leading-[18px] pr-[18px] mw-xl:text-[12px]">
          {latestNew}
        </p>
      </div>
    </>
  );
};

export default GamingLatest;
