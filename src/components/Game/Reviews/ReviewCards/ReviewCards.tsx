import Image from "next/image"
import React, { useState } from "react"
import image1 from "../../../../assets/gaming/odyssey.png"
import image2 from "../../../../assets/gaming/pubg.png"
import image3 from "../../../../assets/gaming/cod.png"
import image4 from "../../../../assets/gaming/odyssey.png"
import bookmark from "../../../../assets/gaming/bookmark.png"
const ReviewCards = () => {
  const [list, setList] = useState<any[]>([
    image1,
    image2,
    image3,
    image4,
    image2,
    image3,
    image1,
    image4,
    image3,
    image2,
    image1,
    image4,
  ])

  return (
    <>
      <div className="review_card_wrapper flex mw-md:hidden  flex-wrap justify-between ">
        {list.map((ele, idx) => {
          return (
            <div
              className="review_card_main_wrapper pb-[16px] mw-lg:w-2/5 pt-[48px]"
              key={idx}
            >
              <div className="img_wrapper relative">
                <Image src={ele} alt="Image" className=" mw-lg:w-[100%] " />
                <div className="ratio absolute top-2 right-2.5 rounded-full w-[60px] h-[60px]	bg-brand flex justify-center items-center">
                  <p className="text-[#E5E5E5] montserratfont text-lg font-bold leading-[22px]">
                    4/5
                  </p>
                </div>
              </div>
              <div className="review_card_content pt-[12px] flex justify-between">
                <div className="title_disp">
                  <h4 className="montserratfont font-bold text-base dark:text-[#E5E5E5] leading-5  text-[#221e1f]">
                    One Piece Odyssey
                  </h4>
                  <p className="montserratfont text-sm font-normal  text-[#221e1f] dark:text-[#E5E5E5] leading-[17px] pt-[5px]">
                    Panic Barn
                  </p>
                  <p className=" montserratfont text-xs italic leading-[15px] font-normal brandLightOpacity70 pt-[5px]">
                    Adventure,Indie,Puzzle
                  </p>
                </div>
                <div className=" he bookmark_check rounded-full bg-grayCard w-8 h-8 dark:bg-brandLightOpacity10 flex items-center justify-center cursor-pointer dark:hover:bg-brandLightOpacity20    hover:bg-grayCardHover">
                  <Image
                    src={bookmark}
                    alt="bookmark"
                    className=" brightness-0 dark:brightness-200"
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ReviewCards
