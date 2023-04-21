"use client"
import React, { useEffect, useState } from "react"
import pc from "../../assets/new-category/d-desktop.png"
import mobile from "../../assets/new-category/d-mobile.png"
import console from "../../assets/new-category/d-game.png"

import d_a_pc from "../../assets/new-category/d-a-desktop.png"
import d_a_mobile from "../../assets/new-category/d-a-mobile.png"
import d_a_console from "../../assets/new-category/d-a-game.png"

import l_pc from "../../assets/new-category/l-desktop.png"
import l_mobile from "../../assets/new-category/l-mobile.png"
import L_console from "../../assets/new-category/l-game.png"

import Image from "next/image"
import { useTheme } from "next-themes"
const Filter = () => {
  const images = [
    { l_pic: l_pc, d_ac_pic: d_a_pc, pic: pc, name: "PC" },
    { l_pic: l_mobile, d_ac_pic: d_a_mobile, pic: mobile, name: "Mobile" },
    { l_pic: L_console, d_ac_pic: d_a_console, pic: console, name: "Console" },
  ]
  const [no, setNo] = useState<number>(0)
  const hadldeclick = (e: number) => setNo(e)
  const { theme, setTheme } = useTheme()
  const [isDarkTheme, setIsDarkTheme] = useState<any>("")
  useEffect(() => {
    setIsDarkTheme(theme === "dark" ? "dark" : "light")
  }, [theme])
  return (
    <>
      <div className="filter_section flex items-center mt-[64px] mb-[16px] mw-md:mt-[20px] mw-sm:flex-col mw-sm:items-start">
        <div className="filter_  mr-[16px] mw-sm:mb-[16px] ">
          <h4 className="text-base leading-5 montserratfont font-semibold	uppercase">
            Filters:
          </h4>
        </div>
        <div className="flex ">
          {images.map((element, index) => {
            return (
              <div
                className={`flex items-center border  rounded px-3.5 py-2.5 mw-sm:p-2 mw-sm:h-fit mr-6 mw-xl:mr-[11px] 
                 cursor-pointer ${
                   no === index
                     ? "dark:border-brand border-brandDark2 bg-grayCard"
                     : "dark:border-brandLightOpacity100 border-brandDark2"
                 } `}
                key={index}
                onClick={() => hadldeclick(index)}
              >
                {element.pic && (
                  <Image
                    src={
                      no === index
                        ? isDarkTheme === "dark"
                          ? element.d_ac_pic
                          : element.l_pic
                        : isDarkTheme === "dark"
                        ? element.pic
                        : element.l_pic
                    }
                    alt="name"
                    className="inline mw-lg:min-w-[20px] mw-lg:min-h-[20px]   mw-sm:min-h-[16px]   mw-sm:min-w-[16px]  mw-sm:w-full"
                  />
                )}

                <span
                  className={` ${
                    element.pic ? "pl-2  mw-sm:pl-1" : "pl-0"
                  }  inline montserratfont  text-base mw-sm:text-sm leading-5  ${
                    no === index
                      ? "dark:text-brand font-semibold"
                      : "dark:text-brandLightOpacity70 font-medium hover:dark:text-brandLightOpacity100 text-textColorGray hover:text-brandDark2 "
                  }`}
                >
                  {element.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Filter
