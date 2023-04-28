import React, { Component, useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Image1 from "../../../assets/images/article/slider1.png";
import Image2 from "../../../assets/images/article/slider2.png";
import Image3 from "../../../assets/images/article/slider3.png";
import Image4 from "../../../assets/images/article/slider4.png";
import Image4Big from "../../../assets/images/article/slider-4-big.png";
import Image5 from "../../../assets/images/article/slider5.png";
const NavSlider = () => {
  const slider1 = useRef<any | null>();
  const slider2 = useRef<any | null>();
  const [nav1, setNav1] = useState<any | null>(null);
  const [nav2, setNav2] = useState<any | null>(null);
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
  };
  // let product_id = '';
  useEffect(() => {
    // for slick carousel
    setNav1(slider1.current);
    setNav2(slider2.current);
    console.log(nav1, "nav1");
    console.log(nav2, "nav2");
    console.log(slider1, "slider1");
    console.log(slider2, "slider2");
  });
  const settingss = {
    slidesToShow: 3,
    slidesToScroll: 1,

    centerMode: true,
    centerPadding: "60px",
    //  dots: true,
    arrows: true,
    focusOnSelect: true,
    infinite: true,
  };


  return (
    <div className="global-section-width-article">
     <div className="w-full pt-[20px] max-w-[688px]">
        <Slider className="" asNavFor={nav2} ref={slider1} {...settings}>
          <div>
            <Image  src={Image4Big} alt="slider info" />
          </div>
          <div>
            <Image  src={Image4Big} alt="slider info" />
          </div>
          <div>
            <Image  src={Image4Big} alt="slider info" />
          </div>
          <div>
            <Image  src={Image4Big} alt="slider info" />
          </div>
          <div>
            <Image src={Image4Big} alt="slider info" />
          </div>
        </Slider>
        </div>
        <div className="max-w-[581px]">
        <Slider
          asNavFor={nav1}
          ref={slider2}
          swipeToSlide={true}
          {...settingss}
        >
          <div>
            <Image src={Image1} alt="slider info" />
          </div>
          <div>
            <Image src={Image2} alt="slider info" />
          </div>
          <div>
            <Image src={Image3} alt="slider info" />
          </div>
          <div>
            <Image src={Image4} alt="slider info" />
          </div>
          <div>
            <Image src={Image5} alt="slider info" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default NavSlider;
