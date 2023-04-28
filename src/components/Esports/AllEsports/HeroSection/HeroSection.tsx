import Image from "next/image";
import React, { useState } from "react";
import leftside from "../../../../assets/images/hero/hero-section-left-side.png";
import book1 from "../../../../assets/egaming/led.png";
import book2 from "../../../../assets/egaming/chip.png";
import icon1 from "../../../../assets/egaming/CITYPNG.png";
import whiteteam from "../../../../assets/egaming/whiteteam.png";
import blackteam from "../../../../assets/egaming/blackteam.png";
import image1 from "../../../../assets/egaming/image1.png";
import image2 from "../../../../assets/egaming/image2.png";
import image3 from "../../../../assets/egaming/image3.png";
import bookmark from "../../../../assets/latest-news/bookmark.png";
import image4 from "../../../../assets/egaming/image4.png";
import styles from "./styles.module.css";
import { useTheme } from "next-themes";
const HeroSection = () => {
  const { theme } = useTheme();
  interface List {
    name: string;
    picture: any;
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
  ]);
  const [item2, setItem2] = useState<List[]>([
    {
      name: "Bayes Esports appoints York Scheunemann as COO of reputed gaming company      ",
      picture: book1,
    },
    {
      name: "Bayes Esports appoints York Scheunemann as COO of reputed gaming company      ",
      picture: book2,
    },
  ]);
  return (
    <>
      <section className="esport_all_wrapper">
        <div className="global-section-width  ">
          <div className="2xl:container pt-[12px]">
            <div className="flex mw-lg:flex-col justify-between">
              {/* left section start here */}
              <div className="w-[62%] mw-xl:w-[55%] mw-lg:w-full ">
                <div
                  className={`${styles.left_side} h-[450px] mx-14:h-[400px] ] mw-sm:h-[350px] mw-sm3:h-[300px]`}
                >
                  <Image
                    src={leftside}
                    className="w-full h-full object-cover mw-sm1:h-[350px]"
                    alt="demo"
                  />
                  <div className={styles.overlay}></div>
                  <h2 className={`${styles.title} text-brandLightOpacity100`}>
                    JONATHAN Stays Loyal to BGMI, No Plans to Shift to New State
                    Mobile Yet
                  </h2>
                </div>
                <div className="bottom_image_section mt-[28px] mw-lg:mt-[0px]">
                  <div className="esport_hero_cardss ">
                    <div className="hidden mw-lg:flex  right-side pl-8 mx-14:pl-6 mw-lg:pl-0 mw-lg:py-[28px] h-[450px] mw-11:h-[420px]  mw-lg:h-auto mw-lg:flex-row mw-sm:flex-col  mw-lg:h-auto  justify-between">
                      {item2.map((elem, index) => {
                        return (
                          <div
                            className={` mw-sm:border-l-2 pl-2 mw-sm:border-l-brand flex  mw-lg:w-[49%] mw-sm:w-full ${
                              index === 0 ? "mw-sm:mb-7" : "mb-0"
                            }`}
                            key={index}
                          >
                            <div className="max-w-[200px] w-full mw-11:max-w-[170px] mw-11:h-[130px] mw-lg:min-w-[110px] mw-lg:max-w-[110px] mw-sm1:min-w-[100px] mw-sm1:min-w-[100px] mw-sm:h-[100px]">
                              <Image
                                src={elem.picture}
                                alt="demo "
                                className="h-full object-cover"
                              />
                            </div>
                            <div className="desc_wrapper pr-5	pl-3.5	mw-11:pr-3.5	mw-11:h-[130px] mw-sm:h-[100px]	">
                              <h3 className="text-base font-bold  leading-5	 text-brandDark2 montserratfont dark:text-brandLightOpacity100 mw-11:text-[15px] mw-lg:text-base hero-section-tech-title mw-sm:text-sm mw-sm:leading-[17px]">
                                {elem.name}
                              </h3>
                              <div className="tags flex pt-3.5 pb-3 mw-sm:pt-2.5 mw-sm:pb-2    montserratfont">
                                <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                                  News
                                </div>
                                <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10    hover:text-brandDark2 dark:hover:bg-brandLightOpacity20    dark:hover:text-brandLightOpacity100    dark:text-brandLightOpacity70">
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
                                  className=" brightness-0 dark:brightness-200"
                                  alt="book"
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mw-lg:hidden right-side flex flex-row items-start justify-between mx-14:pl-6 mw-lg:pl-0 mw-lg:py-5 mw-lg:h-auto mw-sm:flex-col">
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
                              <h3 className="latestnew_title_overHidden__kN_uk text-base leading-5 text-brandDark2 font-bold montserratfont dark:text-brandLightOpacity100">
                                {elem.name}
                              </h3>

                              <div className="tags flex pt-3.5 pb-[5px] montserratfont">
                                <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20  hover:text-brandDark2 dark:text-brandLightOpacity70">
                                  News
                                </div>
                                <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20   hover:text-brandDark2  dark:text-brandLightOpacity70">
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
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              {/* left section ends here */}

              {/*right sections starts here  */}
              <div className="w-[36%] mw-xl:w-[42%]  mw-lg:w-full bg-brandLightOpacity10 pr-[5px] border-2 dark:border-brandLightOpacity10 ">
                <div
                  className={`${
                    theme === "dark" ? styles.right_section : styles.sec_section
                  } overflow-y-auto  versus_card_right_section pt-[22px] pl-[24px]  h-[610px] rounded mw-14:h-[562px] pr-[10px] pr-[24px]`}
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
                            <h4 className="montserratfont font-bold	 text-base	leading-[20px] dark:text-[#E5E5E5] mw-sm:text-[14px] mw-sm:leading-[15px]">
                              Team Liquid
                            </h4>
                            <p className="montserratfont text-lg leading-[22px]	dark:text-[#E5E5E5] font-bold	mt-[8px] mw-sm:text-[14px] mw-sm:leading-[15px]">
                              2
                            </p>
                          </div>
                        </div>
                        <div className="vs">
                          <p className="montserratfont text-sm	leading-[17px] font-medium	dark:text-brandLightOpacity70 mw-sm:text-[14px] mw-sm:leading-[15px]">
                            VS
                          </p>
                        </div>
                        <div className="second_team flex">
                          <div>
                            <Image src={blackteam} alt="" />
                          </div>
                          <div className="ml-[12px]  text-center">
                            <h4 className="montserratfont font-bold	 text-base	leading-[20px] dark:text-[#E5E5E5] mw-sm:text-[14px] mw-sm:leading-[15px]">
                              Team Spirit
                            </h4>
                            <p className="montserratfont text-lg leading-[22px]	dark:text-[#E5E5E5] font-bold	mt-[8px] mw-sm:text-[14px] mw-sm:leading-[15px]">
                              0
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="teams_section2 mt-[16px] pb-[16px] flex justify-around border-b-2 dark:border-brandLightOpacity10 flex-col	">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Image src={icon1} alt="icon" />
                            <p className="ml-[12px] montserratfont text-sm	leading-[17px] font-medium	dark:text-brandLightOpacity70 mw-sm:text-[14px] mw-sm:leading-[15px]">
                              LPL 2023 Spring
                            </p>
                          </div>
                          <p className="montserratfont text-[#E5E5E5] text-sm	leading-[17px] font-semibold	tracking-wider uppercase	px-[8px] py-[5px] bg-[#D91618] rounded-sm	mw-sm:text-[14px] mw-sm:leading-[15px]">
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
                          <div className="ml-[90px] text-center mw-sm3:ml-[180px]">
                            <h4 className="montserratfont font-medium	 text-base py-[14px]	leading-[20px] dark:text-brandLightOpacity70 mw-sm:text-[14px] mw-sm:leading-[15px] ">
                              +10 more teams
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="teams_section2 mt-[16px] pb-[16px] flex justify-around border-b-2 dark:border-brandLightOpacity10 flex-col	">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Image src={icon1} alt="icon" />
                            <p className="ml-[12px] montserratfont text-sm	leading-[17px] font-medium	dark:text-brandLightOpacity70 mw-sm:text-[14px] mw-sm:leading-[15px]">
                              LPL 2023 Spring
                            </p>
                          </div>
                          <p className="montserratfont dark:text-brandLightOpacity70 text-sm	leading-[17px] font-medium		tracking-wider 	px-[8px] py-[5px] dark:bg-brandLightOpacity10 rounded-sm	mw-sm:text-[14px] mw-sm:leading-[15px]">
                            In 32 mins
                          </p>
                        </div>
                        <div className="pt-[16px]">
                          <div className="first_team flex relative pl-[42px] ">
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
                          <div className="ml-[90px] text-center  mw-sm3:ml-[180px] ">
                            <h4 className="montserratfont font-medium	 text-base py-[14px]	leading-[20px] dark:text-brandLightOpacity70 mw-sm:text-[14px] mw-sm:leading-[15px]">
                              +10 more teams
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="battle-4 pt-[16px]">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Image src={icon1} alt="icon" />
                            <p className="ml-[12px] montserratfont text-sm	leading-[17px] font-medium	darktext-brandLightOpacity70 mw-sm:text-[14px] mw-sm:leading-[15px]">
                              LPL 2023 Spring
                            </p>
                          </div>
                          <p className="montserratfont text-[#E5E5E5] text-sm	leading-[17px] font-semibold	tracking-wider uppercase	px-[8px] py-[5px] bg-[#D91618] rounded-sm	mw-sm:text-[14px] mw-sm:leading-[15px]">
                            Live
                          </p>
                        </div>
                        <div className="teams_section mt-[16px] pb-[16px] flex justify-around border-b-2 dark:border-brandLightOpacity10">
                          <div className="first_team flex">
                            <div>
                              <Image src={whiteteam} alt="" />
                            </div>
                            <div className="ml-[12px]  text-center">
                              <h4 className="montserratfont font-bold	 text-base	leading-[20px] dark:text-[#E5E5E5] mw-sm:text-[14px] mw-sm:leading-[15px]">
                                Team Liquid
                              </h4>
                              <p className="montserratfont text-lg leading-[22px]	dark:text-[#E5E5E5] font-bold	mt-[8px] mw-sm:text-[14px] mw-sm:leading-[15px]">
                                2
                              </p>
                            </div>
                          </div>
                          <div className="vs">
                            <p className="montserratfont text-sm	leading-[17px] font-medium	dark:text-brandLightOpacity70 mw-sm:text-[14px] mw-sm:leading-[15px]">
                              VS
                            </p>
                          </div>
                          <div className="second_team flex">
                            <div>
                              <Image src={blackteam} alt="" />
                            </div>
                            <div className="ml-[12px]  text-center">
                              <h4 className="montserratfont font-bold	 text-base	leading-[20px] dark:text-[#E5E5E5] mw-sm:text-[14px] mw-sm:leading-[15px]">
                                Team Spirit
                              </h4>
                              <p className="montserratfont text-lg leading-[22px]	dark:text-[#E5E5E5] font-bold	mt-[8px] mw-sm:text-[14px] mw-sm:leading-[15px]">
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
                            <p className="ml-[12px] montserratfont text-sm	leading-[17px] font-medium	dark:text-brandLightOpacity70 mw-sm:text-[14px] mw-sm:leading-[15px]">
                              LPL 2023 Spring
                            </p>
                          </div>
                          <p className="montserratfont dark:text-brandLightOpacity70 text-sm	leading-[17px] font-medium	tracking-wider 	px-[8px] py-[5px] bg-brandLightOpacity10 rounded-sm	mw-sm:text-[14px] mw-sm:leading-[15px]">
                            Completed
                          </p>
                        </div>
                        <div className="teams_section mt-[16px] pb-[16px] flex justify-around border-brandLightOpacity10">
                          <div className="first_team flex">
                            <div>
                              <Image src={whiteteam} alt="" />
                            </div>
                            <div className="ml-[12px]  text-center">
                              <h4 className="montserratfont font-bold	 text-base	leading-[20px] dark:text-[#E5E5E5] mw-sm:text-[14px] mw-sm:leading-[15px]">
                                Team Liquid
                              </h4>
                              <p className="montserratfont dark:text-lg leading-[22px]	dark:text-[#E5E5E5] font-bold	mt-[8px] mw-sm:text-[14px] mw-sm:leading-[15px]">
                                2
                              </p>
                            </div>
                          </div>
                          <div className="vs">
                            <p className="montserratfont text-sm	leading-[17px] font-medium	dark:text-brandLightOpacity70 mw-sm:text-[14px] mw-sm:leading-[15px]">
                              VS
                            </p>
                          </div>
                          <div className="second_team flex">
                            <div>
                              <Image src={blackteam} alt="" />
                            </div>
                            <div className="ml-[12px]  text-center">
                              <h4 className="montserratfont font-bold	 text-base	leading-[20px] dark:text-[#E5E5E5] mw-sm:text-[14px] mw-sm:leading-[15px]">
                                Team Spirit
                              </h4>
                              <p className="montserratfont text-lg leading-[22px]	dark:text-[#E5E5E5] font-bold	mt-[8px] mw-sm:text-[14px] mw-sm:leading-[15px]">
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
              {/*right sections ends here  */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
