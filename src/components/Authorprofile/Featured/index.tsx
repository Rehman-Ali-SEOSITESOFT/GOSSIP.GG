import Pagination from "@/components/Pagination"
import React, { useState } from "react"
import img1 from "../../../assets/user-saved/1.png"
import img2 from "../../../assets/user-saved/2.png"
import img3 from "../../../assets/user-saved/3.png"
import img4 from "../../../assets/user-saved/4.png"
import img5 from "../../../assets/user-saved/5.png"
import img6 from "../../../assets/user-saved/6.png"
import img7 from "../../../assets/user-saved/7.png"
import bookmark from "../../../assets/author-profile/bookmark.png"

import bookmakred from "../../../assets/user-for-you/fill-bookmark.png"
import Image from "next/image"

const FeaturedAuhor = () => {
  const items = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
  
  ]
  return (
    <>
      <div className="saved-component">
        <div className="items flex flex-wrap justify-between">
          {items.map((ele, index) => {
            return (
              <div
                className={`item py-4 rounded-sm w-[328px] h-[328px]  dark:bg-brandDark1 bg-white border border-grayCard	flex flex-col justify-between ${
                  index === 9 || index === 10 || index === 11 ? "mb-0" : "mb-12"
                }`}
                key={index}
              >
                <div className="save-img-wrap">
                  <Image src={ele} alt="Imag" className="m-auto" />
                </div>
                <div className="save-title-wrap">
                  <h4 className="montserratfont font-bold text-base leading-5 dark:text-brandLightOpacity100 text-brandDark2  pl-4">
                    Check out the Great Indian Amazon Sale this month from this
                    day onw...
                  </h4>
                </div>
                <div className="save-tagss-wrap flex justify-between items-end px-4">
                  <div className="flex ">
                    <div className=" montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                      News
                    </div>
                    <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                      Esports
                    </div>
                  </div>
                  <div className="icon  cursor-pointer">
                    {index === 1 ||
                    index === 3 ||
                    index === 5 ||
                    index === 7 ||
                    index === 9 ||
                    index === 10 ||
                    index === 11 ? (
                      <Image
                        src={bookmakred}
                        alt="bookmarked"
                        className="brightness-0	dark:brightness-100"
                      />
                    ) : (
                      <Image
                        src={bookmark}
                        alt="bookmarked"
                        className=" brightness-0 opacity-80 hover:opacity-100  dark:brightness-200"
                      />
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Pagination />
    </>
  )
}

export default FeaturedAuhor