import Image from "next/image";
import React from "react";
import "./RespSection.css";
const RespSection = (props: any) => {
  const { herobg, titlee } = props;
  return (
    <>
      <div className="mb-[16px] w-[48%] mw-md:w-[100%]">
        <div className="relative  overflow-hidden ">
          <Image src={herobg} alt="image" className="w-[100%]" />
          <div className={`overlayy overlay  absolute inset-0 `}></div>
          <div className="absolute bottom-[9px] left-[12px]">
            <h4 className="montserratfont text-[16px] font-bold leading-normal text-[#E5E5E5] pr-[18px]">
              {titlee}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default RespSection;
