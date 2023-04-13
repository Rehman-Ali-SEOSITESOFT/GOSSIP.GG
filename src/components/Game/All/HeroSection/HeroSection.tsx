import Image from "next/image"
import React, { useState, useEffect } from "react"
import leftside from "../../../../assets/images/hero/hero-section-left-side.png"
import book1 from "../../../../assets/images/hero/right-side-01.png"
import book2 from "../../../../assets/images/hero/right-side-012.png"
import book3 from "../../../../assets/images/hero/right-side-03.png"
import bookmark from "../../../../assets/gaming/bookmark.png"
import bookmarkDark from "../../../../assets/gaming/bookmark-dark.png"
import styles from "./styles.module.css"
import { useTheme } from "next-themes"
const HeroSection = () => {
  interface List {
    name: string
    picture: any
  }

  const { theme } = useTheme()
  const [isDarkTheme, setIsDarkTheme] = useState<string>("")
  useEffect(() => {
    setIsDarkTheme(theme === "dark" ? "dark" : "light")
  }, [theme])
  const [item, setItem] = useState<List[]>([
    {
      name: "MR Luna has announced he is stepping down as CEO",
      picture: book1,
    },
    {
      name: "Esports Gambling Report, January 2023 is a big...",
      picture: book2,
    },
    {
      name: "Bayes Esports appoints York Scheunemann as COO",
      picture: book3,
    },
  ])
  return (
    <>
      <section className={`${styles.mainGameAllWrapper}`}>
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
              </div>
              <div className="w-5/12 mw-xl:w-1/2  mw-lg:w-full">
                <div className="right-side pl-8 mx-14:pl-6 mw-lg:pl-0 mw-lg:py-5 h-[450px] mx-14:h-[400px]  mw-lg:h-auto flex flex-col justify-between">
                  {item.map((elem, index) => {
                    return (
                      <div
                        className={` mw-sm:border-l-brand flex `}
                        key={index}
                      >
                        <div className="w-full max-w-[200px]">
                          <Image
                            src={elem.picture}
                            alt="demo "
                            className="h-full object-cover"
                          />
                        </div>
                        <div className="desc_wrapper pr-5	pl-3.5		">
                          <h3 className="text-base font-bold  leading-5	 text-brandDark2 montserratfont dark:text-brandLightOpacity100 mw-11:h-[40px] mw-lg:h-auto overflow-hidden ">
                            {elem.name}
                          </h3>
                          {/* <p className="text-xs text-textColor robotoslub py-2.5 mx-14:py-2 mw-sm:hidden dark:text-brandLightOpacity90   overflow-hidden">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when...
                        </p> */}
                          <div className="tags flex pt-3.5 pb-3 montserratfont">
                            <div className="text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:text-brandLightOpacity70">
                              News
                            </div>
                            <div className="text-textColorGray bg-grayCard px-2 py-1.5 rounded text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:text-brandLightOpacity70">
                              Esports
                            </div>
                          </div>
                          <small className="text-textColorGray dark:text-brandLightOpacity70 text-xs mw-sm3:text-[10px]">
                            <span className="montserratfont">
                              <i>3 hrs ago</i>
                            </span>
                            <span
                              className={`border-l border-l-textColorGray pl-2 ml-2 border-textColorGray   dark:border-l-brandLightOpacity70   `}
                            >
                              5 min read
                            </span>
                          </small>
                        </div>
                        <div className={"thumnail_wrapper"}>
                          <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard dark:text-brandLightOpacity100 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20  hover:bg-grayCardHover cursor-pointer rounded-3xl">
                            <Image
                              src={
                                isDarkTheme === "dark" ? bookmark : bookmarkDark
                              }
                              alt="img"
                            />
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
