import React from "react";
import Slider from "react-slick";
import slider1 from "../../../../assets/tech/deals/slider-1.gif";
import slider2 from "../../../../assets/tech/deals/slider-2.gif";
import Image from "next/image";
const DealSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <div className="2xl:container deailslider">
      <Slider {...settings}>
        <div className="h-[315px]">
          <Image
            src={slider1}
            alt="img"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="h-[315px]">
          <Image
            src={slider2}
            alt="img"
            className="object-cover w-full h-full"
          />
        </div>
      </Slider>
    </div>
  );
};

export default DealSlider;
