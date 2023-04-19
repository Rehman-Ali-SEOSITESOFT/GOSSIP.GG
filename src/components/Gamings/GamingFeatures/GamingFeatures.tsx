import React, { useState } from "react"
import style from "./GamingFeatures.module.css"
import image1 from "../../../assets/gaming/image1.png"
import image2 from "../../../assets/gaming/image1.png"
import image3 from "../../../assets/gaming/image1.png"
import image4 from "../../../assets/gaming/image1.png"
import bookmark from "../../../assets/gaming/bookmark.png"
import Image from "next/image"
const GamingFeatures = () => {
  interface List {
    name: string
    picture: any
  }
  const item: List[] = [
    {
      name: "demo ",
      picture: image1,
    },
    {
      name: "demo ",
      picture: image2,
    },
    {
      name: "demo ",
      picture: image3,
    },
    {
      name: "demo ",
      picture: image4,
    },
  ]
  const data: List[] = [
    {
      name: "demo ",
      picture: image1,
    },
    {
      name: "demo ",
      picture: image2,
    },
  ]
  const [items2, setItems2] = useState(data)
  const [items, setItems] = useState(item)
  return (
    <>
      <div className="mw-lg:hidden features_gaming_section dark:bg-brandDark1 bg-white pt-[24px] pb-[24px] pl-[0px] pr-[0px]  rounded border-grayCard border mw-sm:pb-[16px]">
        <div className="flex flex-wrap pt-0 pb-0   bg-white rounded dark:bg-brandDark1 ">
          {items.map((elem, index) => {
            return (
              <div
                className={`w-1/2 ${
                  index === 0 || index === 1 ? "pt-0" : "pt-5"
                } pl-[32px]	 pr-[32px]	 pb-0		  mw-12:w-1/2 mw-lg:w-full flex   ${
                  style.news_items
                }  border-grayCard  dark:border-brandLightOpacity10 ${
                  index === 1
                    ? "mw-12:border-r-grayCard mw-12:dark:border-r-brandLightOpacity10"
                    : ""
                }  `}
                key={index}
              >
                <div
                  className={`${style.news_img_wrap} rounded-sm border-grayCard  mw-12:border-b-grayCard  dark:border-brandLightOpacity10 `}
                >
                  <Image
                    src={elem.picture}
                    alt="Latest new"
                    className="rounded-sm object-cover"
                  />
                </div>
                <div
                  className={`${style.news_desc} border-grayCard dark:border-brandLightOpacity10`}
                >
                  <h4 className="text-base leading-5 text-brandDark2 font-bold montserratfont dark:text-brandLightOpacity100 pr-[16px]">
                    Hellblade: Senua&#39;s Sacrifice Might Just be One of the
                    Most Important Games of the Modern era
                  </h4>
                  <p className="font-normal	text-xs	robotoslub pt-[8px] dark:text-brandLightOpacity90">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when...
                  </p>
                  <p className="user_name montserratfont text-xs font-medium dark:text-[#E5E5E5] pt-[8px]">
                    -John D
                  </p>
                  <div className="tags flex pt-3.5 pb-3 montserratfont ">
                    <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:text-brandLightOpacity70">
                      News
                    </div>
                    <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:text-brandLightOpacity70">
                      Esports
                    </div>
                  </div>
                </div>
                <div
                  className={`${style.book} border-grayCard dark:border-brandLightOpacity10`}
                >
                  <div className="bookmark flex items-center justify-center w-8 h-8 dark:text-brandLightOpacity100    cursor-pointer rounded-3xl">
                    <Image
                      src={bookmark}
                      alt=""
                      className=" brightness-0 dark:brightness-200"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="hidden mw-lg:block ">
        <div className="flex justify-between mw-sm:flex-col">
          {items2.map((e, idx) => {
            return (
              <div
                className="border dark:border-brandLightOpacity10  main_feature_tab_version w-[48%] mw-sm:w-[98%] mw-sm:mb-[16px] flex items-start dark:bg-[#2E2A2B] rounded pt-[10px] pl-[10px] pb-[14px] pr-[10px] "
                key={idx}
              >
                <div className="w-[100px] h-[60px] mr-[9px]">
                  <Image src={image1} alt="profile" className="w-full h-auto" />
                </div>
                <div>
                  <h4 className="montserratfont text-[14px] leading-[17px] dark:text-[#E5E5E5] font-semibold mb-[10px]">
                    Bayes Esports appoints York Scheunemann as COO of reputed
                  </h4>
                  <p className="robotoslub text-[12px] leading-[16px] font-normal dark:text-brandLightOpacity90 pb-[12px]">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when...
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="montserratfont text-[12px] leading-[15px] dark:text-[#E5E5E5] ">
                      -John Dasasasas
                    </p>

                    <Image src={bookmark} alt="bookmark" className="" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default GamingFeatures
