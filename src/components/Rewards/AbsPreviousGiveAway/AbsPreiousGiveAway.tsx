import Image from "next/image";
import React from "react";
import style from "./AbsPrevious.module.css";
const AbsPreiousGiveAway = (props: any) => {
  return (
    <>
      <div
        className={`${style.abspreviousgiven_wrapper} overflow-hidden group relative `}
      >
        <Image
          src={props.iamges}
          alt=""
          className="w-full h-full transition-transform transform scale-100 group-hover:scale-110 "
        />
        <span className="absolute montserratfont text-[21px] leading-[25.6px] font-bold text-[#E5E5E5] px-[16px] py-[9px] bg-brandDark3 dark:bg-[#ED4E50] bottom-[18px] mw-lg:text-[18px]  rounded-r-lg mw-md:uppercase mw-md:top-[8px] mw-md:bottom-auto mw-sm:text-[14px] mw-sm:px-[12px] mw-sm5:text-[12px] mw-sm5:py-[4px]">
          {props.qty}
        </span>
        <div className={`${style.overlaydiv} mw-lg:hidden`}>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-[0.5] transition-opacity px-[22px] py-[15px] text-center">
            <h5 className="text-[#E5E5E5] text-[18px] leading-normal font-bold montserratfont">
              {props.title}
            </h5>
            <p className=" text-[#E5E5E5] montserratfont font-medium leading-[22px] text-[14px] mt-[14px]">
              {props.overPara}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AbsPreiousGiveAway;
