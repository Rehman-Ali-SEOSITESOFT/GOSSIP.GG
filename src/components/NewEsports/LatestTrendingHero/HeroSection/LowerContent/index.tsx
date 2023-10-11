import Image from "next/image";
import React from "react";
import "./lowerContent.css";
const LowerContentHeroSection = (props: any) => {
  const { contentIamge, discription, para } = props;
  return (
    <>
      <div className="content_wrapper flex dark:bg-[#2E2A2B] my-[20px] rounded border">
        <Image
          src={contentIamge}
          alt=""
          className="w-[280px] mw-xl:w-[200px] mw-xl:h-[150px]"
        />
        <div className="content-right pr-[13px] pl-[13px] pt-[10px] pb-[10px]">
          <h4 className="montserratfont text-[14px] font-bold dark:text-[#E5E5E5] capitalize ">
            {discription}
          </h4>
          <p className="montserratfont text-[12px] font-normal dark:text-brandLightOpacity90 leading-normal pt-[8px]">
            {para}
          </p>
          <div className="bottom_section flex mt-[6px] justify-between	items-end">
            <div className="buttonss flex">
              <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                News
              </div>
              <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                Esports
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-[12px] montserratfont italic font-normal dark:text-brandLightOpacity90 ">
                3 hrs ago
              </span>
              <span className="montserratfont border-l border-l-textColorGray pl-2 ml-2 border-textColorGray   dark:border-l-brandLightOpacity70 text-[12px] dark:text-brandLightOpacity90 font-normal h-[18px]">
                5 min read
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LowerContentHeroSection;
