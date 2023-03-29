import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Card from "../../assets/images/esport-event/card.png";
import Icon from "../../assets/images/esport-event/icon.png";
import Logo from "../../assets/images/esport-event/logo.png";
import RightIcon from "../../assets/images/esport-event/right.png";
import Line from "../../assets/images/general/Line.png";
import SectionSaprator from "../secSaprator";
import style from "./esportEvents.module.css";
import { useTheme } from "next-themes";
import DarkLine from "../../assets/images/general/dark-line.png";
const EsportEvent = () => {
  interface EventList {
    event_title: string;
    date: string;
    country: string;
    prize: string;
  }
  const { theme } = useTheme();

  const [eventData, setEventData] = useState<EventList[]>([
    {
      event_title: "DOTA Pro Circuit 2023 Tour 1",
      date: "sat, feb 02 - THU, MAR 18",
      country: "South Asia",
      prize: " $4500",
    },
    {
      event_title: "DOTA Pro Circuit 2023 Tour 1",
      date: "sat, feb 02 - THU, MAR 18",
      country: "South Asia",
      prize: " $4500",
    },
    {
      event_title: "DOTA Pro Circuit 2023 Tour 1",
      date: "sat, feb 02 - THU, MAR 18",
      country: "South Asia",
      prize: " $4500",
    },
    {
      event_title: "DOTA Pro Circuit 2023 Tour 1",
      date: "sat, feb 02 - THU, MAR 18",
      country: "South Asia",
      prize: " $4500",
    },
    {
      event_title: "DOTA Pro Circuit 2023 Tour 1",
      date: "sat, feb 02 - THU, MAR 18",
      country: "South Asia",
      prize: " $4500",
    },
    {
      event_title: "DOTA Pro Circuit 2023 Tour 1",
      date: "sat, feb 02 - THU, MAR 18",
      country: "South Asia",
      prize: " $4500",
    },
  ]);

  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },

      {
        breakpoint: 690,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <section className="Esport-events">
      <div className="global-section-width">
        <SectionSaprator title="ESPORTS EVENTS" />
        <Slider {...settings}>
          {eventData.map((item, index) => (
            <div
              className="bg-white hover:border-brandDark1 hover:dark:border-brand hover:dark:shadow-[0_0_8px_0_#ed4e50] hover:shadow-[0_0_8px_0_#e5e5e5] m-1 dark:bg-brandDark1 border-inherit dark:border-brandDark1 border rounded-sm p-2.5"
              key={index}
            >
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
                  <Image src={Logo} alt="event logo" />
                  <div className="flex flex-col pl-2">
                    <p
                      className={`text-brandDark2 dark:text-brandLightOpacity100 ${style.font_esport_event_12} font-semibold `}
                    >
                      SAT, FEB 02 - THU, MAR 18
                    </p>
                    <p
                      className={`${style.font_esport_event_12} text-brandDark2 dark:text-brandLightOpacity100 font-semibold pt-1.5`}
                    >
                      South Asia <span></span> Prizepool $4500
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
                  className={`text-brandDark2 dark:text-brandLightOpacity100 ${style.font_esport_event_12} font-semibold pr-1.5 `}
                >
                  Registration Open
                </p>
                <Image className="pl-1.5" src={RightIcon} alt="Right Icon" />
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex mt-4 mw-sm:hidden">
            <div className="w-full">
              <a
                href="#"
                className="text-textColorGray dark:text-brandLightOpacity70 montserratfont font-base  leading-5"
              >
                View more <span>&#x3E;</span>
                <span>&#x3E;</span>
                <span>&#x3E;</span>
              </a>
            </div>
          </div>
      </div>
    </section>
  );
};

export default EsportEvent;
