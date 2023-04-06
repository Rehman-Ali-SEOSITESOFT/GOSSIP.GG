import React, { useState } from "react"
import Image from "next/image"
import image1 from "../../../assets/select/image-react-1.png"
import image2 from "../../../assets/select/image-react-2.png"
import image3 from "../../../assets/select/image-react-3.png"
import image4 from "../../../assets/select/image-react-4.png"
import ViewMore from "../ViewMore/ViewMore"
const GuideGaming = () => {
  const [list, setList] = useState<any[]>([image1, image2, image3, image4])

  return (
    <>
      <section className="Guides_wrapper">
        <div className="global-section-width">
          <div className="2xl:container">
            <div className="flex mw-md:hidden  flex-wrap justify-between">
              {list.map((element, index) => {
                return (
                  <div
                    className="w-[23.5%] mw-lg:w-[48%] mw-sm3:w-full"
                    key={index}
                  >
                    <div className="img-wrapper h-[230px] mw-lg:h-[200px] mw-sm:h-[180px] mw-sm3:h-[150px] rounded">
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
            <ViewMore />
          </div>
        </div>
      </section>
    </>
  )
}

export default GuideGaming