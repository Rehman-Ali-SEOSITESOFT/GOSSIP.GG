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
  const [items, setItems] = useState(item)
  return (
    <>
      <div className="features_gaming_section dark:bg-brandDark1 bg-white pt-[24px] pb-[24px] pl-[0px] pr-[0px]  rounded border-grayCard border">
        <div className="flex flex-wrap pt-0 pb-0  bg-white rounded dark:bg-brandDark1">
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
                    Most Important Games of the Modern Era
                  </h4>
                  <p className="font-normal	text-xs	robotoslub pt-[8px] brandLightOpacity90">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when...{" "}
                  </p>
                  <p className="user_name montserratfont text-xs font-medium dark:text-[#E5E5E5] pt-[8px]">
                    -John D
                  </p>
                  <div className="tags flex pt-3.5 pb-3 montserratfont ">
                    <div className="text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:text-brandLightOpacity70">
                      News
                    </div>
                    <div className="text-textColorGray bg-grayCard px-2 py-1.5 rounded text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:text-brandLightOpacity70">
                      Esports
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bookmark text-textColorGray hover:text-textColor  dark:text-brandLightOpacity70 dark:hover:text-brandLightOpacity100">
                    <i className="fa-regular fa-bookmark cursor-pointer	"></i>
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
