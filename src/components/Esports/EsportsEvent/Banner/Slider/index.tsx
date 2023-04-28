import React from "react";
import Slider from "react-slick";
import slider1 from "../../../../../assets/esports/exports-event-banner.png";
import Image from "next/image";
import { useTheme } from "next-themes";
const ExportEventBannerSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          dots: false,
        },
      },
    ],
  };
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Slider
        {...settings}
        className={` ${theme === "dark" ? " dark-arrow" : " light-arrow"}`}
      >
        <div className="min-h-[446px] mw-12:min-h-[400px] mw-md:min-h-[300px] mw-sm3:min-h-[220px]">
          <Image
            src={slider1}
            alt="img"
            className="object-cover w-full min-h-[446px] h-full mw-12:min-h-[400px] mw-md:min-h-[300px] mw-sm3:min-h-[220px]"
          />
        </div>
        <div className="min-h-[446px] mw-12:min-h-[400px] mw-md:min-h-[300px] mw-sm3:min-h-[220px]">
          <Image
            src={slider1}
            alt="img"
            className="object-cover w-full min-h-[446px] h-full mw-12:min-h-[400px] mw-md:min-h-[300px] mw-sm3:min-h-[220px]"
          />
        </div>
      </Slider>
      <div className="w-[192px] h-[40px] mw-sm3:w-fit mw-sm3:h-auto mw-sm3:px-2 mw-sm3:py-1.5 bg-brandLightOpacity90 rounded-3xl  flex items-center justify-center  absolute right-[24px] bottom-[41px] mw-sm1:text-sm mw-sm3:text-xs	">
        <a
          href="#"
          className="montserratfont font-semibold test-base leading-5 text-brandDark2 "
        >
          Registrations Open
        </a>
      </div>
    </>
  );
};

export default ExportEventBannerSlider;
