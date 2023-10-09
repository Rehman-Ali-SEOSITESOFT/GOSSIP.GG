import Image from "next/image";
import React from "react";
import "./DealsArticleLatest.css";
const DealsArticleLatest = (props: any) => {
  const { image, latestNew } = props;
  return (
    <>
      <div className="latest_esports_wrapper flex items-start mt-[20px] mb-[12px] ">
        <Image src={image} alt="" className="mw-md:w-[150px]" />
        <p className="montserratfont text-[13px] font-medium capitalize text-[#E5E5E5] pl-[9px] leading-[18px]  mw-xl:text-[12px]">
          {latestNew}
        </p>
      </div>
    </>
  );
};

export default DealsArticleLatest;
