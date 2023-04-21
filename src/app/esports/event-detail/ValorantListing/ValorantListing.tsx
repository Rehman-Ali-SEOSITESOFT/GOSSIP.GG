import Image from "next/image"
import React, { useEffect, useState } from "react"
import { useTheme } from "next-themes"
const ValorantListing = (props: any) => {
  const { theme } = useTheme()
  const [isDarkTheme, setIsDarkTheme] = useState<string>()

  useEffect(() => {
    setIsDarkTheme(theme === "dark" ? "dark" : "light")
  }, [theme])

  return (
    <>
      <aside className="">
        <div className="  flex pl-[9px] border-b-2 border-brandLightOpacity10  pb-[14px] pt-[16px]">
          <div className="w-[40px] h-[40px] dark:bg-brandLightOpacity10 rounded-full flex items-center bg-[#E9E8E9] justify-center ">
            <Image
              src={isDarkTheme === "dark" ? props.lighticon : props.darkicon}
              alt="icon"
              className=" "
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
