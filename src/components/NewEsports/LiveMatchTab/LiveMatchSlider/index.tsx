"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import icon from "../../../../assets/newsports/icons.png";
import Image from "next/image";
import Slider from "react-slick";
import styles from "./LiveMatchSlider.module.css";
import teamtag from "../../../../assets/newsports/teamtag.png";
const LiveMatchSlider = () => {
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
      {
        breakpoint: 400,
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
  }
  const [sliderData, setSliderData] = useState<Sliders[]>([
    {
      id: 1,
      title: "Acer India Predator League 2024: Valorant",
      heading: "Live",
      date: "Dec 01, 2022 - Jan 18, 2023",
      sexondteam: "Reckoning Esports",
    },
    {
      id: 2,
      title: "Intel Gamer Days X MSI LAN Fest",
      heading: "Past",
      date: "Dec 01, 2022 - Jan 18, 2023",
      sexondteam: "SuperStarr Gamerz",
    },
    {
      id: 3,
      title: "Acer India Predator League 2024: Valorant",
      heading: "In 2 days",
      date: "Dec 01, 2022 - Jan 18, 2023",
      sexondteam: "Reckoning Esports",
    },
    {
      id: 4,
      title: "Intel Gamer Days X MSI LAN Fest",
      heading: "Past",
      date: "Dec 01, 2022 - Jan 18, 2023",
      sexondteam: "SuperStarr Gamerz",
    },
    {
      id: 5,
      title: "Acer India Predator League 2024: Valorant",
      heading: "Live",
      date: "Dec 01, 2022 - Jan 18, 2023",
      sexondteam: "Reckoning Esports",
    },
    {
      id: 6,
      title: "Acer India Predator League 2024: Valorant",
      heading: "Live",
      date: "Dec 01, 2022 - Jan 18, 2023",
      sexondteam: "SuperStarr Gamerz",
    },
  ]);
  const [tags, setTags] = useState([
    {
      name: "Hogwarts",
      link: "/tag-search",
    },
    {
      name: "Flame Throwers",
      link: "/tag-search",
    },
    {
      name: "Hogwarts Championship",
      link: "/tag-search",
    },
    {
      name: "Fire",
      link: "/tag-search",
    },
    {
      name: "Hogwarts",
      link: "/tag-search",
    },
    {
      name: "Wizards",
      link: "/tag-search",
    },
    {
      name: "Dragons",
      link: "/tag-search",
    },
    {
      name: "Fire Balls",
      link: "/tag-search",
    },
    {
      name: "Hogwarts",
      link: "/tag-search",
    },
    {
      name: "Flame Throwers",
      link: "/tag-search",
    },
    {
      name: "Hogwarts",
      link: "/tag-search",
    },
    {
      name: "Flame Throwers",
      link: "/tag-search",
    },
    {
      name: "Hogwarts",
      link: "/tag-search",
    },
    {
      name: "Flame Throwers",
      link: "/tag-search",
    },
  ]);
  const { theme, setTheme } = useTheme();

  const [isDarkTheme, setIsDarkTheme] = useState<string>("");
  useEffect(() => {
    setIsDarkTheme(theme === "dark" ? "dark" : "light");
  }, [theme]);
  return (
    <>
      <section
        className={`${styles.trending} trending new_esports_slider pt-[26px] pb-[26px] border-b-[1px] border-brandLightOpacity10 mw-md:pt-[16px] mw-md:pb-[40px] mw-md:border-b-[0px] `}
      >
        <div className="2xl:container">
          <Slider
            {...settings}
            className={`${styles.trend_right} ${
              styles.trendingteass
            } trendingteass newtrean${
              isDarkTheme === "dark" ? " dark-arrow" : " light-arrow"
            } trend_right_ arrow_slider`}
          >
            {sliderData.map((e, index) => {
              return (
                <div
                  className={`content_wrapper  border dark:border-brandLightOpacity10 dark:bg-[#2E2A2B] rounded-[4px] ${styles.mainSliderWrap} mw-lg:flex-col`}
                  key={index}
                >
                  <div className={`${styles.pararotate} mw-lg:hidden`}>
                    <p
                      className={`montserratfont text-[10px] font-semibold   
                     ${
                       e.heading === "Live"
                         ? "bg-[#D91618] text-[#E5E5E5]"
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
                  <div
                    className={`${styles.right_content} py-[8px] pr-[12px] pl-[8px] mw-lg:ml-[0px] mw-lg:py-[6px]`}
                  >
                    <div className="flex items-center">
                      <Image src={icon} alt="" className="mw-lg:hidden" />
                      <h4 className="montserratfont text-[12px]  mw-lg:text-[12px] font-normal leading-normal dark:text-[#E5E5E5] pl-[9px]">
                        {e.title}
                      </h4>
                    </div>
                    <div className="flex items-center mt-[6px] ">
                      <div className="flex items-center">
                        <Image src={teamtag} alt="" />
                        <h4 className="montserratfont text-[14px] font-semibold dark:text-[#E5E5E5] leading-normal pl-[8px]">
                          Team Liquid
                        </h4>
                      </div>
                      <h4 className="montserratfont text-[12px] font-medium leading-normal dark:text-brandLightOpacity70 px-[8px]">
                        VS
                      </h4>
                      <div className="flex items-center">
                        <Image src={teamtag} alt="" />
                        <h4 className="montserratfont text-[14px] font-semibold dark:text-[#E5E5E5] leading-normal pl-[8px]">
                          {e.sexondteam}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default LiveMatchSlider;
