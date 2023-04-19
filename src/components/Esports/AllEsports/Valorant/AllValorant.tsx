import SectionSaprator from "@/components/SecSaprator"
import React, { useState } from "react"
import Card from "../../../../assets/esporting-events/image3.png"
import Icon from "../../../../assets/images/esport-event/icon.png"
import Logo from "../../../../assets/images/esport-event/logo.png"
import DarkLogo from "../../../../assets/images/esport-event/logo-dark.png"
import RightIcon from "../../../../assets/images/esport-event/right.png"
import DarkLine from "../../../../assets/images/general/dark-line.png"
import Line from "../../../../assets/images/general/Line.png"
import book1 from "../../../../assets/egaming/led.png"
import book2 from "../../../../assets/egaming/chip.png"
import image5 from "../../../../assets/esporting-events/image5.png"
import image6 from "../../../../assets/esporting-events/image6.png"
import image7 from "../../../../assets/esporting-events/image7.png"
import icon1 from "../../../../assets/egaming/CITYPNG.png"
import { useTheme } from "next-themes"
import style from "./AllValorant.module.css"
import Image from "next/image"
import ViewMore from "@/components/Gamings/ViewMore/ViewMore"
import bookmark from "../../../../assets/latest-news/bookmark.png"
const AllValorant = () => {
  const { theme } = useTheme()
  interface EventList {
    event_title: string
    date: string
    country: string
    prize: string
  }
  const [eventData, setEventData] = useState<EventList[]>([
    {
      event_title: "DOTA Pro Circuit 2023 Tour 1",
      date: "sat, feb 02 - THU, MAR 18",
      country: "South Asia",
      prize: " $4500",
    },
  ])
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
      picture: image6,
    },
    {
      name: "Bayes Esports appoints York Scheunemann as COO of reputed gaming...",
      picture: image7,
    },
    {
      name: "Bayes Esports appoints York Scheunemann as COO of reputed gaming...",
      picture: image5,
    },
  ])
  const [item2, setItem2] = useState<List[]>([
    {
      name: "Bayes Esports appoints York Scheunemann as COO of reputed gaming...",
      picture: book1,
    },
    {
      name: "Bayes Esports appoints York Scheunemann as COO of reputed gaming...",
      picture: image6,
    },
  ])
  return (
    <>
      <section className="valorant_wrapper">
        <div className="global-section-width ">
          <div className="2xl:contaier">
            <div className="mt-[52px] mw-md:mt-[16px]">
              <SectionSaprator title="Valorant" />
            </div>
            <div className="valorant_card_section flex justify-between">
              <div className="w-[23%] mx-13:w-[28%]	 mw-lg:hidden rounded border  dark:border-brandLightOpacity10 bg-white hover:border-brandDark1 hover:dark:border-brand hover:dark:shadow-[0_0_8px_0_#ed4e50] hover:shadow-[0_0_8px_0_#e5e5e5] m-1 dark:bg-brandDark1 border-inherit dark:border-brandDark1 border  p-2.5">
                <div className="">
                  <Image className="w-[100%]" src={Card} alt="card logo" />
                  <Image
                    src={Icon}
                    className="absolute top-4 ml-1.5"
                    alt="icon logo"
                  />
                </div>
                <div>
                  <p
                    className={`text-brandDark2 dark:text-brandLightOpacity100  font-bold ${style.font_esport_event_16} pt-4`}
                  >
                    DOTA Pro Circuit 2023 Tour 1
                  </p>
                  <div
                    className={`${style.image_wrapper__event} flex flex-row  pt-2.5 `}
                  >
                    <Image
                      src={theme === "dark" ? DarkLogo : Logo}
                      alt="event logo"
                    />
                    <div className="flex flex-col pl-2">
                      <p
                        className={`text-brandDark2 dark:text-brandLightOpacity100 ${style.font_esport_event_12} font-medium `}
                      >
                        DEC 02, 2022 - JAN 18, 2023
                      </p>
                      <p
                        className={`${style.font_esport_event_12} text-brandDark2 dark:text-brandLightOpacity100 font-medium pt-1.5 flex items-center`}
                      >
                        South Asia{" "}
                        <span className="h-1 w-1 bg-brandDark2 opacity-70 dark:opacity-100  dark:bg-brandLightOpacity100 inline-block rounded-full ml-[7px] mr-[8px]"></span>{" "}
                        Prizepool $4500
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center pt-2.5">
                  <Image
                    src={theme === "dark" ? DarkLine : Line}
                    alt="saprator line"
                  />
                </div>
                <div className="flex flex-row justify-center items-center pt-3">
                  <p
                    className={`text-brandDark2 dark:text-brandLightOpacity100 ${style.font_esport_event_12} font-medium pr-1.5 `}
                  >
                    Registration Open
                  </p>
                  <Image className="pl-1.5" src={RightIcon} alt="Right Icon" />
                </div>
              </div>
              <div className="w-[72%] mx-13:w-[67%] mw-lg:w-[100%]  valorant_ride_side mw-sm:hidden">
                <div className="right-side mt-[4px] flex flex-row flex-wrap	 items-start justify-between mx-14:pl-6 mw-lg:pl-0 mw-lg:py-5 mw-lg:h-auto ">
                  {item.map((elem, index) => {
                    return (
                      <div
                        className={`${style.card_wrap} mw-sm:border-l-brand flex w-[48%]  `}
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
                          <h3 className="latestNews_title_overHidden__0_UTk text-base leading-5 text-brandDark2 font-bold montserratfont dark:text-brandLightOpacity100  mw-lg:text-[14px] pr-[5px]">
                            {elem.name}
                          </h3>

                          <div className="tags flex pt-3.5 pb-[5px] montserratfont">
                            <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:text-brandLightOpacity70">
                              News
                            </div>
                            <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:text-brandLightOpacity70">
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
              <div className="hidden mw-sm:block ">
                {item2.map((elem, index) => {
                  return (
                    <div
                      className={`${style.card_wrap} mw-sm:border-l-brand flex w-[100%]  mb-[16px] `}
                      key={index}
                    >
                      <div className="w-full max-w-[100px] max-h-[127px]">
                        <Image
                          src={elem.picture}
                          alt="demo "
                          className="h-full object-cover"
                        />
                      </div>
                      <div className="desc_wrapper 	pl-3.5		">
                        <h3 className="latestnew_title_overHidden__kN_uk text-base leading-5 text-brandDark2 font-bold montserratfont dark:text-brandLightOpacity100 mw-sm:text-[14px]">
                          {elem.name}
                        </h3>

                        <div className="tags flex pt-3.5 pb-[5px] montserratfont">
                          <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:text-brandLightOpacity70">
                            News
                          </div>
                          <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:text-brandLightOpacity70">
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
            <div className="mt-[16px] mw-md:mt-[0px] ">
              <ViewMore />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AllValorant
