import React from "react"
import pc from "../../assets/new-category/pc.png"
import mobile from "../../assets/new-category/mobile.png"
import console from "../../assets/new-category/console.png"
import Image from "next/image"
const Filter = () => {
  return (
    <>
      <div className="filter_section flex items-center mt-[64px] mb-[16px]">
        <div className="filter_  mr-[16px]">
          <h4 className="text-base leading-5 montserratfont font-semibold	uppercase">
            Filters:
          </h4>
        </div>
        <div className="flex items-center mw-sm3:overflow-x-scroll">
          <button className="flex montserratfont text-base leading-5 text-[#ED4E50] items-center py-[10px] border border-[#ED4E50] px-[12px] rounded mr-[24px] mw-md:mr-[11px] mw-md:text-[14px] mw-md:leading-[17px] mw-sm:p-[8px]">
            <span className="inline mr-[8px]">
              <Image
                src={pc}
                alt="pc icon"
                className="inline mw-lg:min-w-[14px] mw-lg:min-h-[10px] "
              />
            </span>
            PC
          </button>
          <button className="flex montserratfont text-base leading-5 dark:text-brandLightOpacity70 items-center py-[10px] px-[12px] dark:border border  dark:border-[#E5E5E5] border-[#221E1F] rounded mr-[24px] mw-md:mr-[11px] mw-md:text-[14px] mw-md:leading-[17px] mw-sm:p-[8px]">
            <span className="inline mr-[8px]">
              <Image
                src={mobile}
                alt="mobile"
                className="inline mw-lg:min-w-[14px] mw-lg:min-h-[10px] "
              />
            </span>{" "}
            Mobile
          </button>
          <button className="flex montserratfont text-base leading-5 dark:text-brandLightOpacity70 items-center py-[10px] px-[12px] border dark:border-[#E5E5E5] border-[#221E1F] rounded mr-[24px] mw-md:mr-[11px] mw-md:text-[14px] mw-md:leading-[17px] mw-sm:p-[8px]">
            <span className="inline mr-[8px]">
              <Image
                src={console}
                alt="console"
                className="inline mw-lg:min-w-[14px] mw-lg:min-h-[10px] "
              />
            </span>{" "}
            Console
          </button>
        </div>
      </div>
    </>
  )
}

export default Filter
