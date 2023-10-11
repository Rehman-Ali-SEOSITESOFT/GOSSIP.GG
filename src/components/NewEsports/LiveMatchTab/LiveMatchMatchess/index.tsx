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
      title: "Acer India Predator League 2024: Valorant",
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
      <section className="mt-[33px] flex">
        {/* left section starts here */}
        <div className="w-[45%] ">
          <h4 className="montserratfont text-[18px] font-bold uppercase text-[#ED4E50] pb-[9px]">
            ESPORTS eVENTs
          </h4>
          <div
            className={`${styles.main_wrapper}  border border-brandLightOpacity10 rounded-[4px]  h-[565px]  overflow-y-scroll`}
          >
            {sliderData.map((e, index) => {
              return (
                <div
                  className={`content_wrapper  bg-[#2E2A2B]  ${styles.mainSliderWrap} mw-lg:flex-col py-[6px]`}
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
                      <h4 className="montserratfont text-[16px]  mw-lg:text-[12px] font-semibold         leading-normal text-[#E5E5E5] pl-[8px]">
                        {e.title}
                      </h4>
                    </div>
                    <div className="flex items-center mt-[6px] ">
                      <div>
                        <Image src={iconss} alt="" />
                      </div>
                      <div className="pl-[8px] pt-[4px]">
                        <p className="montserratfont text-[12px] font-normal leading-normal text-[#E5E5E5]">
                          Dec 01, 2022 - Jan 18, 2023
                        </p>
                        <div className="flex items-center">
                          <p className="montserratfont text-[12px] leading-normal font-normal text-[#E5E5E5]">
                            South Asia
                          </p>

                          <Image src={bullet} alt="" className="mx-[8px]" />
                          <p className="montserratfont text-[12px] leading-normal font-normal text-[#E5E5E5]">
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
        {/* left section ends here here */}

        {/* right section starts here */}

        <div className="w-[52%] ml-[25px] relative">
          <h4 className="montserratfont text-[18px] font-bold uppercase text-[#ED4E50] pb-[9px]">
            live matches
          </h4>
          <div
            className={`${styles.main_wrapper}  border border-brandLightOpacity10 rounded-[4px]  h-[565px]  overflow-y-scroll`}
          >
            {/* first row starts here */}
            <div
              className={`content_wrapper  bg-[#2E2A2B]  ${styles.mainSliderWrap} mw-lg:flex-col `}
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
                      <p className="text-[16px] font-medium leading-normal dark:text-[#e5e5e5] mr-[12px]">
                        Reckoning Esports
                      </p>
                      <Image src={whiteinf} alt="" />
                    </div>
                    <div className="mx-[12px]">
                      <h4 className="montserratfont text-[14px] font-medium leading-normal dark:text-brandLightOpacity70 bg-[#514E4F] p-[9px]">
                        VS
                      </h4>
                    </div>
                    <div className="flex justify-center items-center">
                      <Image src={blackinf} alt="" className="mr-[12px]" />
                      <p className="text-[16px] font-medium leading-normal dark:text-[#e5e5e5] ">
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
              className={`content_wrapper  bg-[#2E2A2B]  ${styles.mainSliderWrap} mw-lg:flex-col mt-[22px]`}
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
                      <p className="text-[16px] font-medium leading-normal dark:text-[#e5e5e5] mr-[12px]">
                        Reckoning Esports
                      </p>
                      <Image src={whiteinf} alt="" />
                    </div>
                    <div className="mx-[12px]">
                      <h4 className="montserratfont text-[14px] font-medium leading-normal dark:text-brandLightOpacity70 bg-[#514E4F] p-[9px]">
                        VS
                      </h4>
                    </div>
                    <div className="flex justify-center items-center">
                      <Image src={blackinf} alt="" className="mr-[12px]" />
                      <p className="text-[16px] font-medium leading-normal dark:text-[#e5e5e5] ">
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
                  className={`montserratfont text-[10px] font-semibold bg-[#221E1F] dark:text-[#e5e5e5]`}
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
                      <p className="text-[16px] font-medium leading-normal dark:text-[#e5e5e5] mr-[12px]">
                        Reckoning Esports
                      </p>
                      <Image src={whiteinf} alt="" />
                    </div>
                    <div className="mx-[12px]">
                      <h4 className="montserratfont text-[14px] font-medium leading-normal dark:text-brandLightOpacity70 bg-[#514E4F] p-[9px]">
                        VS
                      </h4>
                    </div>
                    <div className="flex justify-center items-center">
                      <Image src={blackinf} alt="" className="mr-[12px]" />
                      <p className="text-[16px] font-medium leading-normal dark:text-[#e5e5e5] ">
                        Orangutan Esports
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* third one starts hrer */}
            {/* fifth starts here */}
            <div
              className={`content_wrapper  bg-[#2E2A2B]  ${styles.mainSliderWrap} mw-lg:flex-col mt-[20px]`}
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
                      <p className="text-[16px] font-medium leading-normal dark:text-[#e5e5e5] mr-[12px]">
                        Reckoning Esports
                      </p>
                      <Image src={whiteinf} alt="" />
                    </div>
                    <div className="mx-[12px]">
                      <h4 className="montserratfont text-[14px] font-medium leading-normal dark:text-brandLightOpacity70 bg-[#514E4F] p-[9px]">
                        VS
                      </h4>
                    </div>
                    <div className="flex justify-center items-center">
                      <Image src={blackinf} alt="" className="mr-[12px]" />
                      <p className="text-[16px] font-medium leading-normal dark:text-[#e5e5e5] ">
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
              className={`content_wrapper  bg-[#2E2A2B]  ${styles.mainSliderWrap} mw-lg:flex-col mt-[22px]`}
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
                      <p className="text-[16px] font-medium leading-normal dark:text-[#e5e5e5] mr-[12px]">
                        Reckoning Esports
                      </p>
                      <Image src={whiteinf} alt="" />
                    </div>
                    <div className="mx-[12px]">
                      <h4 className="montserratfont text-[14px] font-medium leading-normal dark:text-brandLightOpacity70 bg-[#514E4F] p-[9px]">
                        VS
                      </h4>
                    </div>
                    <div className="flex justify-center items-center">
                      <Image src={blackinf} alt="" className="mr-[12px]" />
                      <p className="text-[16px] font-medium leading-normal dark:text-[#e5e5e5] ">
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
              className={`content_wrapper  bg-[#2E2A2B]  ${styles.mainSliderWrap} mw-lg:flex-col mt-[22px]`}
            >
              <div className={`${styles.pararotate_} mw-lg:hidden`}>
                <p
                  className={`montserratfont text-[10px] font-semibold bg-[#221E1F] dark:text-[#e5e5e5]`}
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
                      <p className="text-[16px] font-medium leading-normal dark:text-[#e5e5e5] mr-[12px]">
                        Reckoning Esports
                      </p>
                      <Image src={whiteinf} alt="" />
                    </div>
                    <div className="mx-[12px]">
                      <h4 className="montserratfont text-[14px] font-medium leading-normal dark:text-brandLightOpacity70 bg-[#514E4F] p-[9px]">
                        VS
                      </h4>
                    </div>
                    <div className="flex justify-center items-center">
                      <Image src={blackinf} alt="" className="mr-[12px]" />
                      <p className="text-[16px] font-medium leading-normal dark:text-[#e5e5e5] ">
                        Orangutan Esports
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* seventh ends  here */}
            <div
              className={`content_wrapper  bg-[#2E2A2B]  ${styles.mainSliderWrap} mw-lg:flex-col mt-[22px]`}
            >
              <div className={`${styles.pararotate_} mw-lg:hidden`}>
                <p
                  className={`montserratfont text-[10px] font-semibold bg-[#221E1F] dark:text-[#e5e5e5]`}
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
                      <p className="text-[16px] font-medium leading-normal dark:text-[#e5e5e5] mr-[12px]">
                        Reckoning Esports
                      </p>
                      <Image src={whiteinf} alt="" />
                    </div>
                    <div className="mx-[12px]">
                      <h4 className="montserratfont text-[14px] font-medium leading-normal dark:text-brandLightOpacity70 bg-[#514E4F] p-[9px]">
                        VS
                      </h4>
                    </div>
                    <div className="flex justify-center items-center">
                      <Image src={blackinf} alt="" className="mr-[12px]" />
                      <p className="text-[16px] font-medium leading-normal dark:text-[#e5e5e5] ">
                        Orangutan Esports
                      </p>
                    </div>
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
