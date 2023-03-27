import React from "react";

const SectionSaprator = (props: any) => {
  return (
    <div className="section-saprator flex flex-row items-center mb-6 mt-[88px]">
      <p className="text-brandDark2 font-bold font-sec-saprate-18 dark:text-secSaprator">
        {props.title}
      </p>
      <div className="bg-gradient-to-r from-brandDark2  h-0.5  min-w-[86%] ml-3 dark:from-secSaprator"></div>
    </div>
  );
};

export default SectionSaprator;
