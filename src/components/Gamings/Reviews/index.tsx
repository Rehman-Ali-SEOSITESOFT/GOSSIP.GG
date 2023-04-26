"use client"
import Image from "next/image"
import React, { useState, useEffect } from "react"
import image1 from "../../../assets/gaming/odyssey.png"
import image2 from "../../../assets/gaming/pubg.png"
import image3 from "../../../assets/gaming/cod.png"
import image4 from "../../../assets/gaming/odyssey.png"
import bookmark from "../../../assets/gaming/bookmark.png"
import bookmarkDark from "../../../assets/gaming/bookmark-dark.png"
import { useTheme } from "next-themes"
const Review = () => {
  const [list, setList] = useState<any[]>([image1, image2, image3, image4])
  const { theme } = useTheme()
  const [isDarkTheme, setIsDarkTheme] = useState<string>("")
  useEffect(() => {
    setIsDarkTheme(theme === "dark" ? "dark" : "light")
  }, [theme])
  return (
    <>
      <div className="review_card_wrapper flex   flex-wrap justify-between">
        {list.map((ele, idx) => {
          return (
            <div
              className="review_card_main_wrapper pb-[16px] mw-lg:pb-[0px] mw-lg:w-[49%] mw-lg:mb-[32px]"
              key={idx}
            >
              <div className="img_wrapper relative">
                <Image src={ele} alt="Image" className=" mw-lg:w-[100%] " />
                <div className="ratio absolute top-2 right-2.5 rounded-full w-[60px] h-[60px]	bg-brand flex justify-center items-center  mw-sm:h-[40px]  mw-sm:w-[40px]">
                  <p className="text-[#E5E5E5] montserratfont text-lg font-bold leading-[22px]  mw-sm:text-[14px]  mw-sm:leading-[17px]">
                    4/5
                  </p>
                </div>
              </div>
              <div className="review_card_content pt-[12px] flex justify-between mw-md:hidden">
                <div className="title_disp">
                  <h4 className="montserratfont font-bold text-base dark:text-[#E5E5E5] leading-5  text-[#221e1f] mw-sm:text-[14px] mw-sm:text-semibold mw-sm:leading-[17px]">
                    One Piece Odyssey
                  </h4>
                  <p className="montserratfont text-sm font-normal  text-[#221e1f] dark:text-[#E5E5E5] leading-[17px] pt-[5px]">
                    Panic Barn
                  </p>
                  <p className="montserratfont  text-xs italic leading-[15px] font-normal dark:text-brandLightOpacity70 text-brandDark2 pt-[5px]">
                    Adventure,Indie,Puzzle
                  </p>
                </div>
                <div className="bookmark_check rounded-full bg-grayCard w-8 h-8 dark:bg-brandLightOpacity10 flex items-center justify-center cursor-pointer dark:hover:bg-brandLightOpacity20    hover:bg-grayCardHover">
                  <Image
                    src={isDarkTheme === "dark" ? bookmark : bookmarkDark}
                    alt="bookmark"
                  />
                </div>
              </div>
              <div className="mobile_card_wrapper hidden mw-md:block">
                <div className="title_mobile_v mt-[8px]">
                  <h4 className="montserratfont font-bold text-base dark:text-[#E5E5E5] leading-5  text-[#221e1f] mw-sm:text-[14px] mw-sm:text-semibold mw-sm:leading-[17px]">
                    One Piece Odyssey
                  </h4>
                  <div className="sub_tag_wrapper flex justify-between items-center">
                    <div className="">
                      <p className="montserratfont text-sm font-normal  text-[#221e1f] dark:text-[#E5E5E5] leading-[17px] pt-[5px]">
                        Panic Barn
                      </p>
                      <p className="montserratfont  text-xs italic leading-[15px] font-normal dark:text-brandLightOpacity70 text-brandDark2 pt-[5px]">
                        Adventure
                      </p>
                    </div>
                    <div className="mt-[11px] bookmark_check rounded-full bg-grayCard w-8 h-8 dark:bg-brandLightOpacity10 flex items-center justify-center cursor-pointer dark:hover:bg-brandLightOpacity20    hover:bg-grayCardHover">
                      <Image
                        src={isDarkTheme === "dark" ? bookmark : bookmarkDark}
                        alt="bookmark"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Review
