import Image from "next/image"
import React, { useState } from "react"
import leftside from "../../../../assets/images/hero/hero-section-left-side.png"
import book1 from "../../../../assets/egaming/led.png"
import book2 from "../../../../assets/egaming/chip.png"
import styles from "./styles.module.css"
const HeroSection = () => {
  interface List {
    name: string
    picture: any
  }
  const [item, setItem] = useState<List[]>([
    {
      name: "Bayes Esports appoints York Scheunemann as COO of reputed gaming...",
      picture: book1,
    },
    {
      name: "Bayes Esports appoints York Scheunemann as COO of reputed gaming...",
      picture: book2,
    },
  ])
  return (
    <>
      <div className="global-section-width  ">
        <div className="2xl:container pt-[12px]">
          <div className="flex mw-lg:flex-col">
            <div className="w-7/12 mw-xl:w-1/2 mw-lg:w-full ">
              <div
                className={`${styles.left_side} h-[450px] mx-14:h-[400px] mw-sm:h-[350px] mw-sm3:h-[300px]`}
              >
                <Image
                  src={leftside}
                  className="w-full h-full object-cover"
                  alt="demo"
                />
                <div className={styles.overlay}></div>
                <h2 className={`${styles.title} text-brandLightOpacity100`}>
                  JONATHAN Stays Loyal to BGMI, No Plans to Shift to New State
                  Mobile Yet
                </h2>
              </div>
              <div className="bottom_image_section mt-[28px]">
                <div className="esport_hero_cardss ">
                  <div className="right-side flex flex-row items-start justify-between mx-14:pl-6 mw-lg:pl-0 mw-lg:py-5 mw-lg:h-auto ">
                    {item.map((elem, index) => {
                      return (
                        <div
                          className={`${styles.card_wrap} mw-sm:border-l-brand flex `}
                          key={index}
                        >
                          <div className="w-full max-w-[112px] max-h-[127px]">
                            <Image
                              src={elem.picture}
                              alt="demo "
                              className="h-full object-cover"
                            />
                          </div>
                          <div className="desc_wrapper 	pl-3.5		">
                            <h3 className="text-base font-bold  leading-5	 text-brandDark2 montserratfont dark:text-brandLightOpacity100 mw-11:h-[40px] mw-lg:h-auto overflow-hidden ">
                              {elem.name}
                            </h3>

                            <div className="tags flex pt-3.5 pb-[5px] montserratfont">
                              <div className="text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:text-brandLightOpacity70">
                                News
                              </div>
                              <div className="text-textColorGray bg-grayCard px-2 py-1.5 rounded text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:text-brandLightOpacity70">
                                Esports
                              </div>
                            </div>
                            <small className="text-textColorGray dark:text-brandLightOpacity70 text-xs mw-sm3:text-[10px]">
                              <span className="montserratfont">
                                {" "}
                                <i>3 hrs ago</i>{" "}
                              </span>{" "}
                              <span
                                className={`border-l border-l-textColorGray pl-2 ml-2 border-textColorGray   dark:border-l-brandLightOpacity70   `}
                              >
                                5 min read
                              </span>
                            </small>
                          </div>
                          <div className={"thumnail_wrapper"}>
                            <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard dark:text-brandLightOpacity100 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20  hover:bg-grayCardHover cursor-pointer rounded-3xl">
                              <i className="fa-regular fa-bookmark "></i>{" "}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="w- mw-xl:w-1/2  mw-lg:w-full">
              <div className="versus_card_right_section bg-brandLightOpacity10 pt-[24px] pl-[24px] pr-[24px] h-[610px] rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
