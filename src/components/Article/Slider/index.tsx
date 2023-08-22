import React, {  useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { useTheme } from "next-themes";
const NavSlider = (props: any) => {
  const slider1 = useRef<any | null>();
  const slider2 = useRef<any | null>();
  const [nav1, setNav1] = useState<any | null>(null);
  const [nav2, setNav2] = useState<any | null>(null);
  const { theme, setTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState<any>("");
  useEffect(() => {
    setIsDarkTheme(theme === "dark" ? "dark" : "light");
  }, [theme]);
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
  };
   useEffect(() => {
    // for slick carousel
    setNav1(slider1.current);
    setNav2(slider2.current);
  },[]);
  const settingss = {
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    arrows: true,
    focusOnSelect: true,
    infinite: true,
  };

  return (
    <div className="global-section-width-article">
      <div className="w-full pt-[20px] max-w-[688px] ">
        <Slider className="" asNavFor={nav2} ref={slider1} {...settings}>
          {props.mainImages.map((item: any, index: any) => (
            <div key={index}>
              <Image src={item} alt="slider info" />
            </div>
          ))}
        </Slider>
        <div className={`pl-[40px] pr-[40px] article-pages-slide `}>
          <Slider
            asNavFor={nav1}
            ref={slider2}
            swipeToSlide={true}
            {...settingss}
            className={`${
              isDarkTheme === "dark" ? "dark-arrow" : "light-arrow"
            } `}
          >
            {props.navImages.map((item: any, index: any) => (
              <div key={index}>
                <Image src={item} alt="slider info" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default NavSlider;
