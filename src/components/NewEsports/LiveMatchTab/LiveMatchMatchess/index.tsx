"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import icon from "../../../../assets/newsports/icons.png";
import Image from "next/image";
import Slider from "react-slick";
import styles from "./LiveMatchess.module.css";
import teamtag from "../../../../assets/newsports/teamtag.png";
import image1 from "../../../../assets/livematches/image1.png";
import image2 from "../../../../assets/livematches/image2.png";
import image3 from "../../../../assets/livematches/image3.png";
import image4 from "../../../../assets/livematches/image4.png";
import image5 from "../../../../assets/livematches/image5.png";
import iconss from "../../../../assets/livematches/club.png";
import bullet from "../../../../assets/livematches/bullet.png";
import whiteinf from "../../../../assets/livematches/infwhite.png";
import blackinf from "../../../../assets/livematches/blackinf.png";
import posicon from "../../../../assets/livematches/posicon.png";
import ViewMore from "@/components/Gamings/ViewMore/ViewMore";
import mobinf from "../../../../assets/newsports/mobing.png";
import ifn1 from "../../../../assets/livematchessstags/image1.png";
import ifn2 from "../../../../assets/livematchessstags/image2.png";
import ifn3 from "../../../../assets/livematchessstags/image3.png";
import ifn4 from "../../../../assets/livematchessstags/image4.png";
import mob1 from "../../../../assets/livematchessstags/mob1.png";
import mob2 from "../../../../assets/livematchessstags/mob2.png";
import mob3 from "../../../../assets/livematchessstags/mob3.png";
import mob4 from "../../../../assets/livematchessstags/mob4.png";

const LiveMatchMatchess = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
    ],
  };
  interface Sliders {
    id: any;
    heading: string;
    title: string;
    date: string;
    sexondteam: String;
    sideImage: any;
  }
  const [sliderData, setSliderData] = useState<Sliders[]>([
    {
      id: 1,
      title: "Intel Gamer Days X MSI LAN Fest",
      heading: "Ongoing",
      date: "Dec 01, 2022 - Jan 18, 2023",
      sexondteam: "Reckoning Esports",
      sideImage: image1,
    },
    {
      id: 2,
      title: "Intel Gamer Days X MSI LAN Fest",
      heading: "Past",
      date: "Dec 01, 2022 - Jan 18, 2023",
      sexondteam: "SuperStarr Gamerz",
      sideImage: image2,
    },
    {
      id: 3,
      title: "Acer India Predator League 2024: Valorant",
      heading: "In 2 days",
      date: "Dec 01, 2022 - Jan 18, 2023",
      sexondteam: "Reckoning Esports",
      sideImage: image3,
    },
    {
      id: 4,
      title: "Intel Gamer Days X MSI LAN Fest",
      heading: "Past",
      date: "Dec 01, 2022 - Jan 18, 2023",
      sexondteam: "SuperStarr Gamerz",
      sideImage: image4,
    },
    {
      id: 5,
      title: "Acer India Predator League 2024: Valorant",
      heading: "Ongoing",
      date: "Dec 01, 2022 - Jan 18, 2023",
      sexondteam: "Reckoning Esports",
      sideImage: image5,
    },
    {
      id: 6,
      title: "Acer India Predator League 2024: Valorant",
      heading: "Ongoing",
      date: "Dec 01, 2022 - Jan 18, 2023",
      sexondteam: "SuperStarr Gamerz",
      sideImage: image1,
    },
  ]);

  const { theme, setTheme } = useTheme();

  const [isDarkTheme, setIsDarkTheme] = useState<string>("");
  useEffect(() => {
    setIsDarkTheme(theme === "dark" ? "dark" : "light");
  }, [theme]);
  return (
    <>
      <section className="mt-[33px] flex mw-lg:flex-col">
        {/* left section starts here */}
        <div className="w-[45%] mw-lg:w-[100%]">
          <h4 className="montserratfont text-[18px] font-bold uppercase text-[#ED4E50] pb-[9px]">
            ESPORTS eVENTs
          </h4>
          {/* web version starts */}
          <div className=" border dark:border-brandLightOpacity10 rounded-[4px] overflow-y-hidden  mw-lg:hidden">
            <div
              className={`${styles.main_wrapper} ${styles.scrolling_bar} overflow-y-auto h-[565px] `}
            >
              {sliderData.map((e, index) => {
                return (
                  <div
                    className={`${
                      isDarkTheme === "dark"
                        ? `${styles.mainSliderWrap} `
                        : `${styles.lightVarient}`
                    } content_wrapper items-center dark:bg-[#2E2A2B]  mw-lg:flex-col py-[6px]`}
                    key={index}
                  >
                    <div className={`${styles.pararotate} mw-lg:hidden`}>
                      <p
                        className={`montserratfont text-[10px] font-semibold   
                     ${
                       e.heading === "Ongoing"
                         ? "bg-[#008D52] text-[#E5E5E5]"
                         : e.heading === "Past"
                         ? "bg-[#221E1F] text-[#E5E5E5]"
                         : e.id == 3
                         ? "text-[#221E1F] bg-[#e5e5e5]"
                         : ""
                     }   
                     `}
                      >
                        {e.heading}
                      </p>
                    </div>

                    <div className="hidden mw-lg:block mw-lg:flex mw-lg:justify-between	mw-lg:pt-[5px] mw-lg:pl-[8px] mw-lg:pr-[8px] mw-lg:border-b-[1px] mw-lg:border-brandLightOpacity10 mw-lg:pb-[4px]">
                      <Image src={icon} alt="" />
                      <p
                        className={`montserratfont text-[10px] font-semibold   
                     ${
                       e.heading === "Live"
                         ? "text-[#D91618]"
                         : e.heading === "Past"
                         ? "text-[#221E1F]"
                         : e.id == 3
                         ? "text-[#E5E5E5] "
                         : ""
                     }   
                     `}
                      >
                        {e.heading}
                      </p>
                    </div>
                    <div className="w-[157px] h-[88px] ml-[17px] ml-[8px]">
                      <Image
                        src={e.sideImage}
                        alt=""
                        className="w-[100%] h-auto"
                      />
                    </div>
                    <div
                      className={`${styles.right_content}  pr-[12px] pl-[8px]  mw-lg:ml-[0px] mw-lg:py-[6px]  `}
                    >
                      <div className="flex items-center">
                        <Image src={icon} alt="" className="mw-lg:hidden" />
                        <h4
                          className={`montserratfont text-[16px]  mw-lg:text-[12px] font-semibold         leading-normal dark:text-[#E5E5E5] pl-[8px] mx-13:text-[14px] ${styles.tileeee}`}
                        >
                          {e.title}
                        </h4>
                      </div>
                      <div className="flex items-center mt-[6px] ">
                        <div>
                          <Image src={iconss} alt="" />
                        </div>
                        <div className="pl-[8px] pt-[4px]">
                          <p className="montserratfont text-[12px] font-normal leading-normal dark:text-[#E5E5E5]">
                            Dec 01, 2022 - Jan 18, 2023
                          </p>
                          <div className="flex items-center">
                            <p className="montserratfont text-[12px] leading-normal font-normal dark:text-[#E5E5E5]">
                              South Asia
                            </p>

                            <Image src={bullet} alt="" className="mx-[8px]" />
                            <p className="montserratfont text-[12px] leading-normal font-normal dark:text-[#E5E5E5]">
                              Prizepool $4500
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* web version ends */}

          {/* mobile versions starts */}
          <div className="hidden mw-lg:block rounded-[2px] border dark:border-brandLightOpacity10  mw-lg:border-[0px] w-[100%]">
            {sliderData.map((e, index) => {
              return (
                <div
                  className={`${
                    isDarkTheme === "dark"
                      ? `${styles.mainSliderWrap} `
                      : `${styles.lightVarient}`
                  } content_wrapper w-[100%]    mw-lg:flex-col py-[6px] rounded-[2px] border dark:mw-lg:border-brandLightOpacity10 dark:mw-lg:bg-brandLightOpacity10 mw-lg:mb-[8px]`}
                  key={index}
                >
                  <div className={`${styles.pararotate} mw-lg:hidden`}>
                    <p
                      className={`montserratfont text-[10px] font-semibold   
                     ${
                       e.heading === "Ongoing"
                         ? "bg-[#008D52] text-[#E5E5E5]"
                         : e.heading === "Past"
                         ? "bg-[#221E1F] text-[#E5E5E5]"
                         : e.id == 3
                         ? "text-[#221E1F] bg-[#e5e5e5]"
                         : ""
                     }   
                     `}
                    >
                      {e.heading}
                    </p>
                  </div>

                  <div className="hidden mw-lg:block mw-lg:flex mw-lg:justify-start	mw-lg:pt-[5px] mw-lg:pl-[8px] mw-lg:pr-[8px] mw-lg:border-b-[0px] mw-lg:border-brandLightOpacity10 mw-lg:pb-[4px] items-center">
                    <Image src={icon} alt="" />
                    <p className="text-[12px] montserratfont font-semibold leading-normal dark:text-[#E5E5E5] pl-[8px]">
                      {e.title}
                    </p>
                    <p
                      className={`montserratfont text-[10px] font-semibold  mw-lg:hidden  
                     ${
                       e.heading === "Live"
                         ? "text-[#D91618]"
                         : e.heading === "Past"
                         ? "text-[#221E1F]"
                         : e.id == 3
                         ? "text-[#E5E5E5] "
                         : ""
                     }   
                     `}
                    >
                      {e.heading}
                    </p>
                  </div>
                  <div className="mw-lg:flex mw-lg:pt-[2px]">
                    <div className="w-[157px] h-[88px] ml-[17px] ml-[8px]">
                      <Image
                        src={e.sideImage}
                        alt=""
                        className="w-[100%] h-auto"
                      />
                    </div>
                    <div
                      className={`${styles.right_content}   pr-[0px] pl-[8px]  mw-lg:ml-[0px] mw-lg:pb-[0px]  `}
                    >
                      <div className="flex items-center">
                        <Image src={icon} alt="" className="mw-lg:hidden" />
                        <h4 className="montserratfont text-[16px]  mw-lg:text-[12px] font-semibold         leading-normal dark:text-[#E5E5E5] pl-[8px] mx-13:text-[14px] mw-lg:hidden">
                          {e.title}
                        </h4>
                      </div>
                      <div className="flex items-center mw-lg:flex-col mw-lg:items-start mt-[6px] ">
                        <div className="flex">
                          <Image src={iconss} alt="" />
                          <div className="pl-[9px]">
                            <p className="hidden montserratfont text-[12px] leading-normal font-normal dark:text-[#E5E5E5] mw-lg:block">
                              South Asia <br /> $4500
                            </p>
                          </div>
                        </div>
                        <div className="pl-[0px] pt-[4px] ">
                          <p className="montserratfont text-[12px] font-normal leading-normal dark:text-[#E5E5E5] mw-sm3:text-[11px]">
                            Dec 01, 2022 - Jan 18, 2023
                          </p>
                          <p
                            className={`${
                              styles.robo
                            } hidden mw-lg:block pt-[8px] text-[12px]  font-normal tracking-[0.6px] italic    ${
                              e.heading === "Ongoing"
                                ? "text-[#008D52]"
                                : e.heading === "Past"
                                ? "dark:text-[#E5E5E5]"
                                : e.id == 3
                                ? "dark:text-[#e5e5e5]"
                                : ""
                            } `}
                          >
                            {e.heading}
                          </p>
                          <div className="flex items-center">
                            <p className="montserratfont text-[12px] leading-normal font-normal dark:text-[#E5E5E5] mw-lg:hidden">
                              South Asia
                            </p>

                            <Image
                              src={bullet}
                              alt=""
                              className="mx-[8px] mw-lg:hidden"
                            />
                            <p className="montserratfont text-[12px] leading-normal font-normal dark:text-[#E5E5E5] mw-lg:hidden">
                              Prizepool $4500
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="mb-[40px] mt-[8px]">
              <ViewMore />
            </div>
          </div>
          {/* mobile versions ends */}
        </div>
        {/* left section ends here here */}

        {/* right section starts here */}

        <div className="w-[52%] mw-lg:w-[100%] ml-[25px] mw-lg:ml-[0px] relative mw-lg:hidden">
          <h4 className="montserratfont text-[18px] font-bold uppercase text-[#ED4E50] pb-[9px]">
            live matches
          </h4>
          <div>
            <div
              className={`${styles.main_wrapper} ${styles.scrolling_bar}  border dark:border-brandLightOpacity10 rounded-[4px]  h-[565px]  overflow-y-scroll`}
            >
              {/* first row starts here */}
              <div
                className={` content_wrapper  bg-[#2E2A2B]  ${styles.mainSliderWrap} mw-lg:flex-col `}
              >
                <div className={`${styles.pararotate_} mw-lg:hidden`}>
                  <p
                    className={`montserratfont text-[10px] font-semibold bg-[#D91618] text-[#e5e5e5]`}
                  >
                    Live
                  </p>
                </div>

                <div className="hidden mw-lg:block mw-lg:flex mw-lg:justify-between	mw-lg:pt-[5px] mw-lg:pl-[8px] mw-lg:pr-[8px] mw-lg:border-b-[1px] mw-lg:border-brandLightOpacity10 mw-lg:pb-[4px]">
                  <Image src={icon} alt="" />
                  <p
                    className={`montserratfont text-[10px] font-semibold   
                    
                     `}
                  >
                    Live
                  </p>
                </div>

                <div
                  className={`${styles.right_content_} w-[100%]  pl-[8px]  mw-lg:ml-[0px] mw-lg:py-[6px]  `}
                >
                  <div className="absolute left-[26px] top-[23px]">
                    <Image src={posicon} alt="" />
                  </div>
                  <div className="w-[100%]">
                    <div className="text-center pt-[8px] pb-[10px]">
                      <p className="montserratfont text-[14px] leading-normal font-medium dark:text-brandLightOpacity70">
                        Intel Gamer Days X ROG LAN Fest
                      </p>
                    </div>
                    <div className="flex items-center justify-center bg-brandLightOpacity10">
                      <div className="flex justify-center items-center">
                        <p className="text-[16px] font-medium leading-normal dark:text-[#e5e5e5] mr-[12px] mw-xl:text-[12px]">
                          Reckoning Esports
                        </p>
                        <Image src={whiteinf} alt="" />
                      </div>
                      <div className="mx-[12px]">
                        <h4 className="montserratfont text-[12px] font-medium leading-normal dark:text-brandLightOpacity70 dark:bg-[#514E4F] bg-brandLightOpacity90 p-[9px] mw-xl:text-[12px]">
                          VS
                        </h4>
                      </div>
                      <div className="flex justify-center items-center">
                        <Image src={blackinf} alt="" className="mr-[12px]" />
                        <p className="text-[16px] font-medium leading-normal dark:text-[#e5e5e5] mw-xl:text-[12px] ">
                          Orangutan Esports
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* first row ends here */}

              {/* second row starts hrer */}

              <div
                className={`content_wrapper bg-brandLightOpacity70  dark:bg-[#2E2A2B]  ${styles.mainSliderWrap} mw-lg:flex-col mt-[22px]`}
              >
                <div className={`${styles.pararotate_} mw-lg:hidden`}>
                  <p
                    className={`montserratfont text-[10px] font-semibold dark:text-[#221E1F] dark:bg-[#e5e5e5]`}
                  >
                    In 3 Days
                  </p>
                </div>

                <div className="hidden mw-lg:block mw-lg:flex mw-lg:justify-between	mw-lg:pt-[5px] mw-lg:pl-[8px] mw-lg:pr-[8px] mw-lg:border-b-[1px] mw-lg:border-brandLightOpacity10 mw-lg:pb-[4px]">
                  <Image src={icon} alt="" />
                  <p
                    className={`montserratfont text-[10px] font-semibold   
                    
                     `}
                  >
                    Live
                  </p>
                </div>

                <div
                  className={`${styles.right_content_} w-[100%]  pl-[8px]  mw-lg:ml-[0px] mw-lg:py-[6px]  `}
                >
                  <div className="absolute left-[26px] top-[23px]">
                    <Image src={posicon} alt="" />
                  </div>
                  <div className="w-[100%]">
                    <div className="text-center pt-[8px] pb-[10px]">
                      <p className="montserratfont text-[14px] leading-normal font-medium dark:text-brandLightOpacity70">
                        Intel Gamer Days X ROG LAN Fest
                      </p>
                    </div>
                    <div className="flex items-center justify-center bg-brandLightOpacity10">
                      <div className="flex justify-center items-center">
                        <p className="text-[16px] font-medium leading-normal dark:text-[#e5e5e5] mr-[12px] mw-xl:text-[12px]">
                          Reckoning Esports
                        </p>
                        <Image src={whiteinf} alt="" />
                      </div>
                      <div className="mx-[12px]">
                        <h4 className="montserratfont text-[12px] font-medium leading-normal dark:text-brandLightOpacity70 dark:bg-[#514E4F] bg-brandLightOpacity90 p-[9px] mw-xl:text-[12px]">
                          VS
                        </h4>
                      </div>
                      <div className="flex justify-center items-center">
                        <Image src={blackinf} alt="" className="mr-[12px]" />
                        <p className="text-[16px] font-medium leading-normal dark:text-[#e5e5e5] mw-xl:text-[12px]">
                          Orangutan Esports
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* second row ends here */}
              {/* third one starts hrer */}

              <div
                className={`content_wrapper  bg-[#2E2A2B]  ${styles.mainSliderWrap} mw-lg:flex-col mt-[22px]`}
              >
                <div className={`${styles.pararotate_} mw-lg:hidden`}>
                  <p
                    className={`montserratfont text-[10px] font-semibold bg-[#221E1F] text-[#e5e5e5]`}
                  >
                    Past
                  </p>
                </div>

                <div className="hidden mw-lg:block mw-lg:flex mw-lg:justify-between	mw-lg:pt-[5px] mw-lg:pl-[8px] mw-lg:pr-[8px] mw-lg:border-b-[1px] mw-lg:border-brandLightOpacity10 mw-lg:pb-[4px]">
                  <Image src={icon} alt="" />
                  <p
                    className={`montserratfont text-[10px] font-semibold   
                    
                     `}
                  >
                    Live
                  </p>
                </div>

                <div
                  className={`${styles.right_content_} w-[100%]  pl-[8px]  mw-lg:ml-[0px] mw-lg:py-[6px]  `}
                >
                  <div className="absolute left-[26px] top-[23px]">
                    <Image src={posicon} alt="" />
                  </div>
                  <div className="w-[100%]">
                    <div className="text-center pt-[8px] pb-[10px]">
                      <p className="montserratfont text-[14px] leading-normal font-medium dark:text-brandLightOpacity70">
                        Intel Gamer Days X ROG LAN Fest
                      </p>
                    </div>
                    <div className="flex items-center justify-center bg-brandLightOpacity10">
                      <div className="flex justify-center items-center">
                        <p className="text-[16px] font-medium leading-normal dark:text-[#e5e5e5] mr-[12px] mw-xl:text-[12px]">
                          Reckoning Esports
                        </p>
                        <Image src={whiteinf} alt="" />
                      </div>
                      <div className="mx-[12px]">
                        <h4 className="montserratfont text-[12px] font-medium leading-normal dark:text-brandLightOpacity70 dark:bg-[#514E4F] bg-brandLightOpacity90 p-[9px] mw-xl:text-[12px]">
                          VS
                        </h4>
                      </div>
                      <div className="flex justify-center items-center">
                        <Image src={blackinf} alt="" className="mr-[12px]" />
                        <p className="text-[16px] font-medium leading-normal dark:text-[#e5e5e5] mw-xl:text-[12px]">
                          Orangutan Esports
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* third one starts hrer */}

              {/* fouth one starts here */}
              <div
                className={` content_wrapper  dark:bg-[#2E2A2B] bg-brandLightOpacity70  ${styles.mainSliderWrap} mw-lg:flex-col mt-[20px]`}
              >
                <div className={`${styles.pararotate_} mw-lg:hidden`}>
                  <p
                    className={`montserratfont text-[10px] font-semibold bg-[#D91618] text-[#e5e5e5]`}
                  >
                    Live
                  </p>
                </div>

                <div className="hidden mw-lg:block mw-lg:flex mw-lg:justify-between	mw-lg:pt-[5px] mw-lg:pl-[8px] mw-lg:pr-[8px] mw-lg:border-b-[1px] mw-lg:border-brandLightOpacity10 mw-lg:pb-[4px]">
                  <Image src={icon} alt="" />
                  <p
                    className={`montserratfont text-[10px] font-semibold   
                    
                     `}
                  >
                    Live
                  </p>
                </div>

                <div
                  className={`${styles.right_content_} w-[100%]  pl-[8px]  mw-lg:ml-[0px] mw-lg:py-[6px]  `}
                >
                  <div className="absolute left-[26px] top-[23px]">
                    <Image src={posicon} alt="" />
                  </div>
                  <div className="w-[100%]">
                    <div className="text-center pt-[8px] pb-[10px]">
                      <p className="montserratfont text-[14px] leading-normal font-medium dark:text-brandLightOpacity70">
                        Intel Gamer Days X ROG LAN Fest
                      </p>
                    </div>
                    <div className="flex items-center justify-center bg-brandLightOpacity10">
                      <div className="wrap w-[100] flex justify-center items-center">
                        <div className="relative">
                          <Image src={ifn1} alt="" className="absolute z-[5]" />
                          <Image
                            src={ifn2}
                            alt=""
                            className="absolute left-[20px] z-[4]"
                          />
                          <Image
                            src={ifn3}
                            alt=""
                            className="absolute left-[50px] z-[3]"
                          />
                          <Image
                            src={ifn4}
                            alt=""
                            className="absolute left-[75px] z-[2]"
                          />
                          <Image
                            src={ifn2}
                            alt=""
                            className="absolute left-[104px] z-[1]"
                          />
                          <Image src={ifn1} alt="" className="" />
                        </div>
                        <p className="montserratfont text-[12px] leading-normal font-medium dark:text-brandLightOpacity70 ml-[110px]">
                          + 10 more teams
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* fourth one ends here */}

              {/* fifth starts here */}
              <div
                className={`content_wrapper  dark:bg-[#2E2A2B] bg-brandLightOpacity70  ${styles.mainSliderWrap} mw-lg:flex-col mt-[20px]`}
              >
                <div className={`${styles.pararotate_} mw-lg:hidden`}>
                  <p
                    className={`montserratfont text-[10px] font-semibold bg-[#D91618] text-[#e5e5e5]`}
                  >
                    Live
                  </p>
                </div>

                <div className="hidden mw-lg:block mw-lg:flex mw-lg:justify-between	mw-lg:pt-[5px] mw-lg:pl-[8px] mw-lg:pr-[8px] mw-lg:border-b-[1px] mw-lg:border-brandLightOpacity10 mw-lg:pb-[4px]">
                  <Image src={icon} alt="" />
                  <p
                    className={`montserratfont text-[10px] font-semibold   
                    
                     `}
                  >
                    Live
                  </p>
                </div>

                <div
                  className={`${styles.right_content_} w-[100%]  pl-[8px]  mw-lg:ml-[0px] mw-lg:py-[6px]  `}
                >
                  <div className="absolute left-[26px] top-[23px]">
                    <Image src={posicon} alt="" />
                  </div>
                  <div className="w-[100%]">
                    <div className="text-center pt-[8px] pb-[10px]">
                      <p className="montserratfont text-[14px] leading-normal font-medium dark:text-brandLightOpacity70">
                        Intel Gamer Days X ROG LAN Fest
                      </p>
                    </div>
                    <div className="flex items-center justify-center bg-brandLightOpacity10">
                      <div className="flex justify-center items-center">
                        <p className="text-[16px] font-medium leading-normal dark:text-[#e5e5e5] mr-[12px] mw-xl:text-[12px]">
                          Reckoning Esports
                        </p>
                        <Image src={whiteinf} alt="" />
                      </div>
                      <div className="mx-[12px]">
                        <h4 className="montserratfont text-[12px] font-medium leading-normal dark:text-brandLightOpacity70 dark:bg-[#514E4F] bg-brandLightOpacity90 p-[9px] mw-xl:text-[12px]">
                          VS
                        </h4>
                      </div>
                      <div className="flex justify-center items-center">
                        <Image src={blackinf} alt="" className="mr-[12px]" />
                        <p className="text-[16px] font-medium leading-normal dark:text-[#e5e5e5] mw-xl:text-[12px]">
                          Orangutan Esports
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* fifth ends here */}
              {/* sixth starts here */}
              <div
                className={`content_wrapper bg-brandLightOpacity70  dark:bg-[#2E2A2B]  ${styles.mainSliderWrap} mw-lg:flex-col mt-[22px]`}
              >
                <div className={`${styles.pararotate_} mw-lg:hidden`}>
                  <p
                    className={`montserratfont text-[10px] font-semibold dark:text-[#221E1F] bg-[#e5e5e5]`}
                  >
                    In 3 Days
                  </p>
                </div>

                <div className="hidden mw-lg:block mw-lg:flex mw-lg:justify-between	mw-lg:pt-[5px] mw-lg:pl-[8px] mw-lg:pr-[8px] mw-lg:border-b-[1px] mw-lg:border-brandLightOpacity10 mw-lg:pb-[4px]">
                  <Image src={icon} alt="" />
                  <p
                    className={`montserratfont text-[10px] font-semibold   
                    
                     `}
                  >
                    Live
                  </p>
                </div>

                <div
                  className={`${styles.right_content_} w-[100%]  pl-[8px]  mw-lg:ml-[0px] mw-lg:py-[6px]  `}
                >
                  <div className="absolute left-[26px] top-[23px]">
                    <Image src={posicon} alt="" />
                  </div>
                  <div className="w-[100%]">
                    <div className="text-center pt-[8px] pb-[10px]">
                      <p className="montserratfont text-[14px] leading-normal font-medium dark:text-brandLightOpacity70">
                        Intel Gamer Days X ROG LAN Fest
                      </p>
                    </div>
                    <div className="flex items-center justify-center bg-brandLightOpacity10">
                      <div className="flex justify-center items-center">
                        <p className="text-[16px] font-medium leading-normal dark:text-[#e5e5e5] mr-[12px] mw-xl:text-[12px]">
                          Reckoning Esports
                        </p>
                        <Image src={whiteinf} alt="" />
                      </div>
                      <div className="mx-[12px]">
                        <h4 className="montserratfont text-[12px] font-medium leading-normal dark:text-brandLightOpacity70 dark:bg-[#514E4F] bg-brandLightOpacity90 p-[9px] mw-xl:text-[12px]">
                          VS
                        </h4>
                      </div>
                      <div className="flex justify-center items-center">
                        <Image src={blackinf} alt="" className="mr-[12px]" />
                        <p className="text-[16px] font-medium leading-normal dark:text-[#e5e5e5] mw-xl:text-[12px]">
                          Orangutan Esports
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* sixth ends here */}
              {/* seventh starts here */}
              <div
                className={`content_wrapper  dark:bg-[#2E2A2B] bg-brandLightOpacity70  ${styles.mainSliderWrap} mw-lg:flex-col mt-[22px]`}
              >
                <div className={`${styles.pararotate_} mw-lg:hidden`}>
                  <p
                    className={`montserratfont text-[10px] font-semibold bg-[#221E1F] text-[#e5e5e5]`}
                  >
                    Past
                  </p>
                </div>

                <div className="hidden mw-lg:block mw-lg:flex mw-lg:justify-between	mw-lg:pt-[5px] mw-lg:pl-[8px] mw-lg:pr-[8px] mw-lg:border-b-[1px] mw-lg:border-brandLightOpacity10 mw-lg:pb-[4px]">
                  <Image src={icon} alt="" />
                  <p
                    className={`montserratfont text-[10px] font-semibold   
                    
                     `}
                  >
                    Live
                  </p>
                </div>

                <div
                  className={`${styles.right_content_} w-[100%]  pl-[8px]  mw-lg:ml-[0px] mw-lg:py-[6px]  `}
                >
                  <div className="absolute left-[26px] top-[23px]">
                    <Image src={posicon} alt="" />
                  </div>
                  <div className="w-[100%]">
                    <div className="text-center pt-[8px] pb-[10px]">
                      <p className="montserratfont text-[14px] leading-normal font-medium dark:text-brandLightOpacity70">
                        Intel Gamer Days X ROG LAN Fest
                      </p>
                    </div>
                    <div className="flex items-center justify-center bg-brandLightOpacity10">
                      <div className="flex justify-center items-center">
                        <p className="text-[16px] font-medium leading-normal dark:text-[#e5e5e5] mr-[12px] mw-xl:text-[12px]">
                          Reckoning Esports
                        </p>
                        <Image src={whiteinf} alt="" />
                      </div>
                      <div className="mx-[12px]">
                        <h4 className="montserratfont text-[12px] font-medium leading-normal dark:text-brandLightOpacity70 dark:bg-[#514E4F] bg-brandLightOpacity90 p-[9px] mw-xl:text-[12px]">
                          VS
                        </h4>
                      </div>
                      <div className="flex justify-center items-center">
                        <Image src={blackinf} alt="" className="mr-[12px]" />
                        <p className="text-[16px] font-medium leading-normal dark:text-[#e5e5e5] mw-xl:text-[12px]">
                          Orangutan Esports
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* seventh ends  here */}
              <div
                className={`content_wrapper  bg-brandLightOpacity70 dark:bg-[#2E2A2B]  ${styles.mainSliderWrap} mw-lg:flex-col mt-[22px]`}
              >
                <div className={`${styles.pararotate_} mw-lg:hidden`}>
                  <p
                    className={`montserratfont text-[10px] font-semibold bg-[#221E1F] text-[#e5e5e5]`}
                  >
                    Past
                  </p>
                </div>

                <div className="hidden mw-lg:block mw-lg:flex mw-lg:justify-between	mw-lg:pt-[5px] mw-lg:pl-[8px] mw-lg:pr-[8px] mw-lg:border-b-[1px] mw-lg:border-brandLightOpacity10 mw-lg:pb-[4px]">
                  <Image src={icon} alt="" />
                  <p
                    className={`montserratfont text-[10px] font-semibold   
                    
                     `}
                  >
                    Live
                  </p>
                </div>

                <div
                  className={`${styles.right_content_} w-[100%]  pl-[8px]  mw-lg:ml-[0px] mw-lg:py-[6px]  `}
                >
                  <div className="absolute left-[26px] top-[23px]">
                    <Image src={posicon} alt="" />
                  </div>
                  <div className="w-[100%]">
                    <div className="text-center pt-[8px] pb-[10px]">
                      <p className="montserratfont text-[14px] leading-normal font-medium dark:text-brandLightOpacity70">
                        Intel Gamer Days X ROG LAN Fest
                      </p>
                    </div>
                    <div className="flex items-center justify-center bg-brandLightOpacity10">
                      <div className="flex justify-center items-center">
                        <p className="text-[16px] font-medium leading-normal dark:text-[#e5e5e5] mr-[12px] mw-xl:text-[12px]">
                          Reckoning Esports
                        </p>
                        <Image src={whiteinf} alt="" />
                      </div>
                      <div className="mx-[12px]">
                        <h4 className="montserratfont text-[12px] font-medium leading-normal dark:text-brandLightOpacity70 dark:bg-[#514E4F] bg-brandLightOpacity90 p-[9px] mw-xl:text-[12px]">
                          VS
                        </h4>
                      </div>
                      <div className="flex justify-center items-center">
                        <Image src={blackinf} alt="" className="mr-[12px]" />
                        <p className="text-[16px] font-medium leading-normal dark:text-[#e5e5e5] mw-xl:text-[12px]">
                          Orangutan Esports
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden mw-lg:block">
          <h4 className="montserratfont text-[16px] font-bold uppercase text-[#ED4E50] pb-[9px]">
            live matches
          </h4>
          <div
            className={`${styles.main_wrapper}  border dark:border-brandLightOpacity10 rounded-[4px]  `}
          >
            <div
              className={`${
                isDarkTheme === "dark"
                  ? `${styles.mainSliderWrap} `
                  : `${styles.lightVarient}`
              } content_wrapper items-start dark:bg-[#2E2A2B]  mw-lg:flex-col `}
            >
              <div className={`${styles.pararotate__} `}>
                <p
                  className={`montserratfont text-[10px] font-semibold bg-[#D91618] text-[#E5E5E5]`}
                >
                  LIVE
                </p>
              </div>

              <div className="pt-[8px] w-[100%]">
                <div className="flex pl-[25px]  pb-[8px]">
                  <Image src={icon} alt="icon" />
                  <p className="montserratfont text-[10px] font-medium leading-normal dark:text-brandLightOpacity70 ml-[8px] ">
                    Intel Gamer Days X ROG LAN Fest
                  </p>
                </div>
                <div className="bg-brandLightOpacity10 pt-[8px] pl-[25px]">
                  <div className="flex items-center">
                    <Image src={mobinf} alt="" />
                    <p className="text-[12px] montserratfont font-medium leading-normal dark:text-[#e5e5e5] pl-[8px]">
                      Reckoning Esports
                    </p>
                  </div>
                  <div className="my-[2px] ">
                    <p className="montserratfont text-[8px] font-normal dark:text-brandLightOpacity70 pl-[25px]">
                      VS
                    </p>
                  </div>
                  <div className="flex items-center pb-[7px]">
                    <Image src={mobinf} alt="" />
                    <p className="text-[12px] montserratfont font-medium leading-normal dark:text-[#e5e5e5] pl-[8px]">
                      Reckoning Esports
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.main_wrapper}  border dark:border-brandLightOpacity10 rounded-[4px]  mt-[6px]`}
          >
            <div
              className={`${
                isDarkTheme === "dark"
                  ? `${styles.mainSliderWrap} `
                  : `${styles.lightVarient}`
              } content_wrapper items-start dark:bg-[#2E2A2B]  mw-lg:flex-col `}
            >
              <div className={`${styles.pararotate__} `}>
                <p
                  className={`montserratfont text-[10px] font-semibold text-[#221E1F] bg-[#E5E5E5]`}
                >
                  In 2 days
                </p>
              </div>

              <div className="pt-[8px] w-[100%]">
                <div className="flex pl-[25px]  pb-[8px]">
                  <Image src={icon} alt="icon" />
                  <p className="montserratfont text-[10px] font-medium leading-normal dark:text-brandLightOpacity70 ml-[8px] ">
                    Intel Gamer Days X ROG LAN Fest
                  </p>
                </div>
                <div className="bg-brandLightOpacity10 pt-[8px] pl-[25px]">
                  <div className="flex items-center">
                    <Image src={mobinf} alt="" />
                    <p className="text-[12px] montserratfont font-medium leading-normal dark:text-[#e5e5e5] pl-[8px]">
                      Reckoning Esports
                    </p>
                  </div>
                  <div className="my-[2px] ">
                    <p className="montserratfont text-[8px] font-normal dark:text-brandLightOpacity70 pl-[25px]">
                      VS
                    </p>
                  </div>
                  <div className="flex items-center pb-[7px]">
                    <Image src={mobinf} alt="" />
                    <p className="text-[12px] montserratfont font-medium leading-normal dark:text-[#e5e5e5] pl-[8px]">
                      Reckoning Esports
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.main_wrapper}  border dark:border-brandLightOpacity10 rounded-[4px]  mt-[6px]`}
          >
            <div
              className={`${
                isDarkTheme === "dark"
                  ? `${styles.mainSliderWrap} `
                  : `${styles.lightVarient}`
              } content_wrapper items-start dark:bg-[#2E2A2B]  mw-lg:flex-col `}
            >
              <div className={`${styles.pararotate__} `}>
                <p
                  className={`montserratfont text-[10px] font-semibold bg-[#D91618] text-[#E5E5E5]`}
                >
                  LIVE
                </p>
              </div>

              <div className="pt-[8px] w-[100%]">
                <div className="flex pl-[25px]  pb-[8px]">
                  <Image src={icon} alt="icon" />
                  <p className="montserratfont text-[10px] font-medium leading-normal dark:text-brandLightOpacity70 ml-[8px] ">
                    Intel Gamer Days X ROG LAN Fest
                  </p>
                </div>
                <div className="bg-brandLightOpacity10 pt-[8px] pl-[25px]">
                  <div className="flex items-center">
                    <Image src={mobinf} alt="" />
                    <p className="text-[12px] montserratfont font-medium leading-normal dark:text-[#e5e5e5] pl-[8px]">
                      Reckoning Esports
                    </p>
                  </div>
                  <div className="my-[2px] ">
                    <p className="montserratfont text-[8px] font-normal dark:text-brandLightOpacity70 pl-[25px]">
                      VS
                    </p>
                  </div>
                  <div className="flex items-center pb-[7px]">
                    <Image src={mobinf} alt="" />
                    <p className="text-[12px] montserratfont font-medium leading-normal dark:text-[#e5e5e5] pl-[8px]">
                      Reckoning Esports
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${styles.main_wrapper}  border dark:border-brandLightOpacity10 rounded-[4px]  mt-[6px]`}
          >
            <div
              className={`${
                isDarkTheme === "dark"
                  ? `${styles.mainSliderWrap} `
                  : `${styles.lightVarient}`
              } content_wrapper items-start dark:bg-[#2E2A2B]  mw-lg:flex-col `}
            >
              <div className={`${styles.pararotate__} `}>
                <p
                  className={`montserratfont text-[10px] font-semibold bg-[#D91618] text-[#E5E5E5]`}
                >
                  LIVE
                </p>
              </div>

              <div className="pt-[8px] w-[100%]">
                <div className="flex pl-[25px]  pb-[8px]">
                  <Image src={icon} alt="icon" />
                  <p className="montserratfont text-[10px] font-medium leading-normal dark:text-brandLightOpacity70 ml-[8px] ">
                    Intel Gamer Days X ROG LAN Fest
                  </p>
                </div>
                <div className="bg-brandLightOpacity10 py-[16px] pl-[25px]">
                  <div className="wrap w-[100] flex justify-start items-center">
                    <div className="relative">
                      <Image src={mob1} alt="" className="absolute z-[5]" />
                      <Image
                        src={mob2}
                        alt=""
                        className="absolute left-[20px] z-[4]"
                      />
                      <Image
                        src={mob3}
                        alt=""
                        className="absolute left-[38px] z-[3]"
                      />
                      <Image
                        src={mob4}
                        alt=""
                        className="absolute left-[55px] z-[2]"
                      />
                      <Image
                        src={mob2}
                        alt=""
                        className="absolute left-[75px] z-[1]"
                      />
                      <Image src={mob1} alt="" className="" />
                    </div>
                    <p className="montserratfont text-[12px] leading-normal font-medium dark:text-brandLightOpacity70 ml-[80px]">
                      + 10 more teams
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${styles.main_wrapper}  border dark:border-brandLightOpacity10 rounded-[4px]  mt-[6px]`}
          >
            <div
              className={`${
                isDarkTheme === "dark"
                  ? `${styles.mainSliderWrap} `
                  : `${styles.lightVarient}`
              } content_wrapper items-start dark:bg-[#2E2A2B]  mw-lg:flex-col `}
            >
              <div className={`${styles.pararotate__} `}>
                <p
                  className={`montserratfont text-[10px] font-semibold bg-[#221E1F] text-[#E5E5E5]`}
                >
                  Past
                </p>
              </div>

              <div className="pt-[8px] w-[100%]">
                <div className="flex pl-[25px]  pb-[8px]">
                  <Image src={icon} alt="icon" />
                  <p className="montserratfont text-[10px] font-medium leading-normal dark:text-brandLightOpacity70 ml-[8px] ">
                    Intel Gamer Days X ROG LAN Fest
                  </p>
                </div>
                <div className="bg-brandLightOpacity10 pt-[8px] pl-[25px]">
                  <div className="flex items-center">
                    <Image src={mobinf} alt="" />
                    <p className="text-[12px] montserratfont font-medium leading-normal dark:text-[#e5e5e5] pl-[8px]">
                      Reckoning Esports
                    </p>
                  </div>
                  <div className="my-[2px] ">
                    <p className="montserratfont text-[8px] font-normal dark:text-brandLightOpacity70 pl-[25px]">
                      VS
                    </p>
                  </div>
                  <div className="flex items-center pb-[7px]">
                    <Image src={mobinf} alt="" />
                    <p className="text-[12px] montserratfont font-medium leading-normal dark:text-[#e5e5e5] pl-[8px]">
                      Reckoning Esports
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.main_wrapper}  border dark:border-brandLightOpacity10 rounded-[4px]  mt-[6px]`}
          >
            <div
              className={`${
                isDarkTheme === "dark"
                  ? `${styles.mainSliderWrap} `
                  : `${styles.lightVarient}`
              } content_wrapper items-start dark:bg-[#2E2A2B]  mw-lg:flex-col `}
            >
              <div className={`${styles.pararotate__} `}>
                <p
                  className={`montserratfont text-[10px] font-semibold bg-[#D91618] text-[#E5E5E5]`}
                >
                  LIVE
                </p>
              </div>

              <div className="pt-[8px] w-[100%]">
                <div className="flex pl-[25px]  pb-[8px]">
                  <Image src={icon} alt="icon" />
                  <p className="montserratfont text-[10px] font-medium leading-normal dark:text-brandLightOpacity70 ml-[8px] ">
                    Intel Gamer Days X ROG LAN Fest
                  </p>
                </div>
                <div className="bg-brandLightOpacity10 pt-[8px] pl-[25px]">
                  <div className="flex items-center">
                    <Image src={mobinf} alt="" />
                    <p className="text-[12px] montserratfont font-medium leading-normal dark:text-[#e5e5e5] pl-[8px]">
                      Reckoning Esports
                    </p>
                  </div>
                  <div className="my-[2px] ">
                    <p className="montserratfont text-[8px] font-normal dark:text-brandLightOpacity70 pl-[25px]">
                      VS
                    </p>
                  </div>
                  <div className="flex items-center pb-[7px]">
                    <Image src={mobinf} alt="" />
                    <p className="text-[12px] montserratfont font-medium leading-normal dark:text-[#e5e5e5] pl-[8px]">
                      Reckoning Esports
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.main_wrapper}  border dark:border-brandLightOpacity10 rounded-[4px]  mt-[6px]`}
          >
            <div
              className={`${
                isDarkTheme === "dark"
                  ? `${styles.mainSliderWrap} `
                  : `${styles.lightVarient}`
              } content_wrapper items-start dark:bg-[#2E2A2B]  mw-lg:flex-col `}
            >
              <div className={`${styles.pararotate__} `}>
                <p
                  className={`montserratfont text-[10px] font-semibold text-[#221E1F] bg-[#E5E5E5]`}
                >
                  In 3 days
                </p>
              </div>

              <div className="pt-[8px] w-[100%]">
                <div className="flex pl-[25px]  pb-[8px]">
                  <Image src={icon} alt="icon" />
                  <p className="montserratfont text-[10px] font-medium leading-normal dark:text-brandLightOpacity70 ml-[8px] ">
                    Intel Gamer Days X ROG LAN Fest
                  </p>
                </div>
                <div className="bg-brandLightOpacity10 pt-[8px] pl-[25px]">
                  <div className="flex items-center">
                    <Image src={mobinf} alt="" />
                    <p className="text-[12px] montserratfont font-medium leading-normal dark:text-[#e5e5e5] pl-[8px]">
                      Reckoning Esports
                    </p>
                  </div>
                  <div className="my-[2px] ">
                    <p className="montserratfont text-[8px] font-normal dark:text-brandLightOpacity70 pl-[25px]">
                      VS
                    </p>
                  </div>
                  <div className="flex items-center pb-[7px]">
                    <Image src={mobinf} alt="" />
                    <p className="text-[12px] montserratfont font-medium leading-normal dark:text-[#e5e5e5] pl-[8px]">
                      Reckoning Esports
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LiveMatchMatchess;
