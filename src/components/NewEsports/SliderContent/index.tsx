"use client";
import React from "react";
import icon from "../../../assets/newsports/icons.png";
import Image from "next/image";
const SliderContent = (props: any) => {
  const { heading, title, date } = props;
  return (
    <>
      <div className="content_wrapper border border-brandLightOpacity10 bg-[#2E2A2B] rounded-[4px] flex">
        <p className="montserratfont text-[10px] font-semibold  text-[#E5E5E5]  rotate-[270]  bg-[#008D52]">
          {heading}
        </p>

        <div className="right_content py-[12px] pr-[12px] pl-[8px]">
          <h4 className="montserratfont text-[14px] font-semibold leading-normal text-[#E5E5E5] ">
            {title} 
          </h4>
          <div className="flex">
            <Image src={icon} alt="" />
            <p className="montserratfont text-[14px] leading-normal font-normal text-[#E5E5E5]">
              {date}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderContent;
