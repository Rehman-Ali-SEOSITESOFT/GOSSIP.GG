import React from "react";
import Slider from "react-slick";
import slider1 from "../../../../assets/esports/exports-event-banner.png";
import slider2 from "../../../../assets/esports/exports-event-banner.png";
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
        <div className="min-h-[446px]">
          <Image
            src={slider1}
            alt="img"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="min-h-[446px]">
          <Image
            src={slider2}
            alt="img"
            className="object-cover w-full h-full"
          />
        </div>
      </Slider>
      <div className="w-[192px] h-[40px] dark:bg-brandLightOpacity90 rounded-3xl flex items-center justify-center  absolute right-[24px] bottom-[41px]	">
        <a
          href="#"
          className="montserratfont font-semibold test-base leading-5 dark:text-brandDark2 l"
        >
          Registrations Open
        </a>
      </div>
    </>
  );
};

export default ExportEventBannerSlider;
