import Image from "next/image";
import React from "react";
import "./lowerContent.css";
const LowerContentHeroSection = (props: any) => {
  const { contentIamge, discription, para } = props;
  return (
    <>
      <div className="content_wrapper flex dark:bg-[#2E2A2B] my-[20px] rounded dark:border-[0px] border">
        <Image
          src={contentIamge}
          alt=""
          className=" min-w-[280px] mw-xl:min-w-[240px] max-h-[158px]"
        />
        <div className="content-right pr-[13px] pl-[13px] pt-[10px] pb-[10px]">
          <h4 className="pr-[10px] montserratfont text-[14px] font-bold dark:text-[#E5E5E5] capitalize elieepisePara">
            {discription}
          </h4>
          <p className="hero_section_para montserratfont text-[12px] font-normal dark:text-brandLightOpacity90 leading-normal pt-[5px]">
            {para}
          </p>
          <div className="bottom_section flex mt-[6px] justify-between	items-end mx-13:mt-[22px]">
            <div className="buttonss flex">
              <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                News
              </div>
              <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                Esports
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-[12px] montserratfont italic font-normal dark:text-brandLightOpacity90 mw-12:text-[10px]">
                3 hrs ago
              </span>
              <span className="montserratfont border-l border-l-textColorGray pl-2 ml-2 border-textColorGray   dark:border-l-brandLightOpacity70 text-[12px] dark:text-brandLightOpacity90 font-normal h-[18px] mw-12:text-[10px]">
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
