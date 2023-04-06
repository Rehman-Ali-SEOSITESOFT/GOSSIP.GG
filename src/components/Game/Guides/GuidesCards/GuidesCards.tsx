import Image from "next/image"
import React, { useState } from "react"
import image1 from "../../../../assets/select/image-react-1.png"
import image2 from "../../../../assets/select/image-react-2.png"
import image3 from "../../../../assets/select/image-react-3.png"
import image4 from "../../../../assets/select/image-react-4.png"
import image5 from "../../../../assets/gaming-guides-feature/image5.png"
import image6 from "../../../../assets/gaming-guides-feature/image6.png"
import image7 from "../../../../assets/gaming-guides-feature/image7.png"
import image8 from "../../../../assets/gaming-guides-feature/image8.png"
import image9 from "../../../../assets/gaming-guides-feature/image9.png"
import image10 from "../../../../assets/gaming-guides-feature/image10.png"
import image11 from "../../../../assets/gaming-guides-feature/image11.png"

const GuidesCards = () => {
  const [list, setList] = useState<any[]>([
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image11,
    image8,
    image9,
    image10,
    image11,
  ])
  return (
    <>
      <section className="guides_cards_inner_section ">
        <div className="flex mw-md:hidden  flex-wrap justify-between">
          {list.map((element, index) => {
            return (
              <div
                className="w-[30%] mw-lg:w-[46%] mw-sm3:w-full pt-[48px]"
                key={index}
              >
                <div className="img-wrapper h-[230px] mw-lg:h-[295px] mw-sm:h-[180px] mw-sm3:h-[150px] rounded">
                  <Image
                    src={element}
                    alt="Demo"
                    className="w-full h-full object-cover rounded	"
                  />
                </div>
                <div className="description flex justify-between pt-3	">
                  <h4 className="text-base leading-5 text-brandDark2 font-bold montserratfont dark:text-brandLightOpacity100 pr-2">
                    Check out the Great Indian Amazon Sale this month
                  </h4>
                  <div>
                    <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard dark:text-brandLightOpacity100 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20    hover:bg-grayCardHover cursor-pointer rounded-3xl">
                      <i className="fa-regular fa-bookmark"></i>
                    </div>
                  </div>
                </div>
                <div className="flex py-4 montserratfont">
                  <div className="text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:text-brandLightOpacity70">
                    News
                  </div>
                  <div className="text-textColorGray bg-grayCard px-2 py-1.5 rounded text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:text-brandLightOpacity70">
                    Esports
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default GuidesCards
