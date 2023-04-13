import Image from "next/image"
import React, { useState } from "react"
import leftside from "../../../../assets/images/hero/hero-section-left-side.png"
import book1 from "../../../../assets/egaming/led.png"
import book2 from "../../../../assets/egaming/chip.png"
import icon1 from "../../../../assets/egaming/CITYPNG.png"
import whiteteam from "../../../../assets/egaming/whiteteam.png"
import blackteam from "../../../../assets/egaming/blackteam.png"
import image1 from "../../../../assets/egaming/image1.png"
import image2 from "../../../../assets/egaming/image2.png"
import image3 from "../../../../assets/egaming/image3.png"
import bookmark from "../../../../assets/latest-news/bookmark.png"
import image4 from "../../../../assets/egaming/image4.png"
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
      <section className="esport_all_wrapper">
        <div className="global-section-width  ">
          <div className="2xl:container pt-[12px]">
            <div className="flex mw-lg:flex-col justify-between">
              <div className="w-[62%] mw-xl:w-1/2 mw-lg:w-full ">
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
                                <div className="text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20  hover:text-brandDark2 dark:text-brandLightOpacity70">
                                  News
                                </div>
                                <div className="text-textColorGray bg-grayCard px-2 py-1.5 rounded text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20   hover:text-brandDark2  dark:text-brandLightOpacity70">
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
                              <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard dark:text-brandLightOpacity100 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20  hover:bg-borderEditProfile cursor-pointer rounded-3xl">
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
                </div>
              </div>
              <div className="w-[36%] mw-xl:w-1/2  mw-lg:w-full">
                <div
                  className={`${styles.right_section} overflow-y-auto border-2 dark:border-brandLightOpacity10  versus_card_right_section bg-brandLightOpacity10 pt-[22px] pl-[24px] pr-[24px] h-[610px] rounded`}
                >
                  <div className={`${styles.esporting_versus_wrapper}`}>
                    <div className="first_battle">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Image src={icon1} alt="icon" />
                          <p className="ml-[12px] montserratfont text-sm	leading-[17px] font-medium	dark:text-brandLightOpacity70">
                            LPL 2023 Spring
                          </p>
                        </div>
                        <p className="montserratfont text-[#E5E5E5] text-sm	leading-[17px] font-semibold	tracking-wider uppercase	px-[8px] py-[5px] bg-[#D91618] rounded-sm	">
                          Live
                        </p>
                      </div>
                      <div className="teams_section mt-[16px] pb-[16px] flex justify-around border-b-2 dark:border-brandLightOpacity10">
                        <div className="first_team flex">
                          <div>
                            <Image src={whiteteam} alt="" />
                          </div>
                          <div className="ml-[12px]  text-center">
                            <h4 className="montserratfont font-bold	 text-base	leading-[20px] dark:text-[#E5E5E5]">
                              Team Liquid
                            </h4>
                            <p className="montserratfont text-lg leading-[22px]	dark:text-[#E5E5E5] font-bold	mt-[8px]">
                              2
                            </p>
                          </div>
                        </div>
                        <div className="vs">
                          <p className="montserratfont text-sm	leading-[17px] font-medium	dark:text-brandLightOpacity70">
                            VS
                          </p>
                        </div>
                        <div className="second_team flex">
                          <div>
                            <Image src={blackteam} alt="" />
                          </div>
                          <div className="ml-[12px]  text-center">
                            <h4 className="montserratfont font-bold	 text-base	leading-[20px] dark:text-[#E5E5E5]">
                              Team Spirit
                            </h4>
                            <p className="montserratfont text-lg leading-[22px]	dark:text-[#E5E5E5] font-bold	mt-[8px]">
                              0
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="teams_section2 mt-[16px] pb-[16px] flex justify-around border-b-2 dark:border-brandLightOpacity10 flex-col	">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Image src={icon1} alt="icon" />
                            <p className="ml-[12px] montserratfont text-sm	leading-[17px] font-medium	dark:text-brandLightOpacity70">
                              LPL 2023 Spring
                            </p>
                          </div>
                          <p className="montserratfont text-[#E5E5E5] text-sm	leading-[17px] font-semibold	tracking-wider uppercase	px-[8px] py-[5px] bg-[#D91618] rounded-sm	">
                            Live
                          </p>
                        </div>
                        <div className="pt-[16px]">
                          <div className="first_team flex relative pl-[42px]">
                            <div>
                              <Image
                                src={image1}
                                alt=""
                                className="absolute z-[4]"
                              />
                              <Image
                                src={image2}
                                alt=""
                                className="absolute left-[75px] z-[3]"
                              />
                              <Image
                                src={image3}
                                alt=""
                                className="absolute left-[105px] z-[2]"
                              />
                              <Image
                                src={image4}
                                alt=""
                                className="absolute left-[135px] z-[1]"
                              />
                            </div>
                          </div>
                          <div className="ml-[12px] ml-[90px] text-center">
                            <h4 className="montserratfont font-medium	 text-base py-[14px]	leading-[20px] dark:text-brandLightOpacity70">
                              +10 more teams
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="teams_section2 mt-[16px] pb-[16px] flex justify-around border-b-2 dark:border-brandLightOpacity10 flex-col	">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Image src={icon1} alt="icon" />
                            <p className="ml-[12px] montserratfont text-sm	leading-[17px] font-medium	dark:text-brandLightOpacity70">
                              LPL 2023 Spring
                            </p>
                          </div>
                          <p className="montserratfont dark:text-brandLightOpacity70 text-sm	leading-[17px] font-medium		tracking-wider 	px-[8px] py-[5px] dark:bg-brandLightOpacity10 rounded-sm	">
                            In 32 mins
                          </p>
                        </div>
                        <div className="pt-[16px]">
                          <div className="first_team flex relative pl-[42px]">
                            <div>
                              <Image
                                src={image1}
                                alt=""
                                className="absolute z-[4]"
                              />
                              <Image
                                src={image2}
                                alt=""
                                className="absolute left-[75px] z-[3]"
                              />
                              <Image
                                src={image3}
                                alt=""
                                className="absolute left-[105px] z-[2]"
                              />
                              <Image
                                src={image4}
                                alt=""
                                className="absolute left-[135px] z-[1]"
                              />
                            </div>
                          </div>
                          <div className="ml-[12px] ml-[90px] text-center">
                            <h4 className="montserratfont font-medium	 text-base py-[14px]	leading-[20px] dark:text-brandLightOpacity70">
                              +10 more teams
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="battle-4 pt-[16px]">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Image src={icon1} alt="icon" />
                            <p className="ml-[12px] montserratfont text-sm	leading-[17px] font-medium	darktext-brandLightOpacity70">
                              LPL 2023 Spring
                            </p>
                          </div>
                          <p className="montserratfont text-[#E5E5E5] text-sm	leading-[17px] font-semibold	tracking-wider uppercase	px-[8px] py-[5px] bg-[#D91618] rounded-sm	">
                            Live
                          </p>
                        </div>
                        <div className="teams_section mt-[16px] pb-[16px] flex justify-around border-b-2 dark:border-brandLightOpacity10">
                          <div className="first_team flex">
                            <div>
                              <Image src={whiteteam} alt="" />
                            </div>
                            <div className="ml-[12px]  text-center">
                              <h4 className="montserratfont font-bold	 text-base	leading-[20px] dark:text-[#E5E5E5]">
                                Team Liquid
                              </h4>
                              <p className="montserratfont text-lg leading-[22px]	dark:text-[#E5E5E5] font-bold	mt-[8px]">
                                2
                              </p>
                            </div>
                          </div>
                          <div className="vs">
                            <p className="montserratfont text-sm	leading-[17px] font-medium	dark:text-brandLightOpacity70">
                              VS
                            </p>
                          </div>
                          <div className="second_team flex">
                            <div>
                              <Image src={blackteam} alt="" />
                            </div>
                            <div className="ml-[12px]  text-center">
                              <h4 className="montserratfont font-bold	 text-base	leading-[20px] dark:text-[#E5E5E5]">
                                Team Spirit
                              </h4>
                              <p className="montserratfont text-lg leading-[22px]	dark:text-[#E5E5E5] font-bold	mt-[8px]">
                                0
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="battle-5 pt-[16px]">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Image src={icon1} alt="icon" />
                            <p className="ml-[12px] montserratfont text-sm	leading-[17px] font-medium	dark:text-brandLightOpacity70">
                              LPL 2023 Spring
                            </p>
                          </div>
                          <p className="montserratfont text-brandLightOpacity70 text-sm	leading-[17px] font-medium	tracking-wider 	px-[8px] py-[5px] bg-brandLightOpacity10 rounded-sm	">
                            Completed
                          </p>
                        </div>
                        <div className="teams_section mt-[16px] pb-[16px] flex justify-around border-brandLightOpacity10">
                          <div className="first_team flex">
                            <div>
                              <Image src={whiteteam} alt="" />
                            </div>
                            <div className="ml-[12px]  text-center">
                              <h4 className="montserratfont font-bold	 text-base	leading-[20px] dark:text-[#E5E5E5]">
                                Team Liquid
                              </h4>
                              <p className="montserratfont dark:text-lg leading-[22px]	dark:text-[#E5E5E5] font-bold	mt-[8px]">
                                2
                              </p>
                            </div>
                          </div>
                          <div className="vs">
                            <p className="montserratfont text-sm	leading-[17px] font-medium	dark:text-brandLightOpacity70">
                              VS
                            </p>
                          </div>
                          <div className="second_team flex">
                            <div>
                              <Image src={blackteam} alt="" />
                            </div>
                            <div className="ml-[12px]  text-center">
                              <h4 className="montserratfont font-bold	 text-base	leading-[20px] dark:text-[#E5E5E5]">
                                Team Spirit
                              </h4>
                              <p className="montserratfont text-lg leading-[22px]	dark:text-[#E5E5E5] font-bold	mt-[8px]">
                                0
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
