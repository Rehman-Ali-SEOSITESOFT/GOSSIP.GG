import Image from "next/image"
import React from "react"

const ValorantListing = (props: any) => {
  return (
    <>
      <aside className="">
        <div className="  flex pl-[9px] border-b-2 border-brandLightOpacity10  pb-[14px] pt-[16px]">
          <div className="w-[40px] h-[40px] dark:bg-brandLightOpacity10 rounded-full flex items-center bg-[#E9E8E9] justify-center ">
            <Image
              src={props.icon}
              alt="icon"
              className=" dark:brightness-[1.5] brightness-[0.5]"
            />
          </div>
          <div className="name_size pl-[30px] flex items-center">
            <h4 className="montserratfont text-[16px] leading-[20px] font-semibold dark:text-[#E5E5E5]">
              {props.title}&nbsp; . &nbsp;
            </h4>
            <p className="montserratfont text-[14px] leading-[17px] font-medium	dark:text-brandLightOpacity70">
              {props.detail}
            </p>
          </div>
        </div>
      </aside>
    </>
  )
}

export default ValorantListing
