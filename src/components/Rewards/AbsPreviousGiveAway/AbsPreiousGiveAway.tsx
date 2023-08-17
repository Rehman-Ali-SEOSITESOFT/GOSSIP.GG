import Image from "next/image";
import React from "react";

const AbsPreiousGiveAway = (props: any) => {
  return (
    <>
      <div className=" relative">
        <Image src={props.iamges} alt="" className="w-full h-full " />
        <span className="absolute montserratfont text-[21px] leading-normal font-bold text-[#E5E5E5] px-[16px] py-[9px] bg-[#ED4E50] bottom-[18px]">
          {props.qty}
        </span>
      </div>
    </>
  );
};

export default AbsPreiousGiveAway;
