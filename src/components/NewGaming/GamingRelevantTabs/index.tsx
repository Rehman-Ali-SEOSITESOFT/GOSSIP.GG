import Image from "next/image";
import React from "react";

const GamingRelevantTab = (props: any) => {
  const { tabImage, paragraph, button2, button1 } = props;
  return (
    <>
      <div className="tab_wrapper w-[32%] bg-brandLightOpacity10 rounded-[8px] mb-[40px]  border-brandLightOpacity10 border mw-lg:w-[49%] mw-sm:w-[100%] mw-lg:mb-[24px]">
        <Image src={tabImage} alt="image" className="mw-lg:w-[100%]" />
        <div className="overflow-hidden	bottom_section">
          <p className="montserratfont text-[16px] leading-normal font-medium text-[#E5E5E5] pt-[12px] pb-[20px] pr-[18px] pl-[12px] h-[104px] section_para mw-9:text-[16px] mw-9:h-[auto] mw-sm:pb-[12px]">
            {paragraph}
          </p>
          <div className="flex mb-[12px] px-[12px] ">
            <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
              {button2}
            </div>
            <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
              {button1}
            </div>
          </div>
          <div className="flex items-center pl-[12px] pb-[20px]">
            <span className="text-[12px] montserratfont italic font-normal text-brandLightOpacity90 ">
              3 hrs ago
            </span>
            <span className="montserratfont border-l border-l-textColorGray pl-2 ml-2 border-textColorGray   dark:border-l-brandLightOpacity70 text-[12px] text-brandLightOpacity90 font-normal h-[18px]">
              5 min read
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default GamingRelevantTab;
