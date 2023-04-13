import React from "react";

const SectionSaprator = (props: any) => {
  return (
    // <div className="section-saprator flex flex-row items-center mb-6 mt-[88px] overflow-hidden mw-xl:m-0	mw-xl:py-8 mw-sm:py-5">
    <div className="section-saprator flex flex-row items-center pb-[24px]  overflow-hidden mw-xl:m-0	">
      <p className="text-brandDark2 font-bold font-sec-saprate-18 dark:text-secSaprator w-auto min-w-fit mw-sm:pt-5 mw-sm:border-t dark:border-t-brandLightOpacity10 border-t-borderEditProfile mw-sm:w-full uppercase">
        {props.title}
      </p>
      <div className="bg-gradient-to-r from-brandDark2 h-0.5  min-w-[86%] ml-3 dark:from-secSaprator mw-sm:hidden"></div>
    </div>
  );
};

export default SectionSaprator;
