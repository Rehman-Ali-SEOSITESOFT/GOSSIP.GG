import { useState, useRef, useEffect } from "react";

import Slider from "react-slick";
import Banner1 from "../../../../assets/images/profile/banner-1.png";
import Banner2 from "../../../../assets/images/profile/banner-2.png";
import Banner3 from "../../../../assets/images/profile/banner-3.png";
import Banner4 from "../../../../assets/images/profile/banner-4.png";
import Image from "next/image";
const BannerSlider = () => {
  interface BannerIamge {
    id: number;
    picture: any;
  }

  //  const itemBannerImage: BannerIamge[] = [
  //   {
  //     id: 1,
  //     picture: [
  //       {
  //         id: 1,
  //         picture: Banner1,
  //       },
  //       {
  //         id: 2,
  //         picture: Banner2,
  //       },
  //       {
  //         id: 3,
  //         picture: Banner3,
  //       },
  //       {
  //         id: 4,
  //         picture: Banner4,
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     picture: [
  //       {
  //         id: 1,
  //         picture: Banner1,
  //       },
  //       {
  //         id: 2,
  //         picture: Banner2,
  //       },
  //       {
  //         id: 3,
  //         picture: Banner3,
  //       },
  //       {
  //         id: 4,
  //         picture: Banner4,
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     picture: [
  //       {
  //         id: 1,
  //         picture: Banner1,
  //       },
  //       {
  //         id: 2,
  //         picture: Banner2,
  //       },
  //       {
  //         id: 3,
  //         picture: Banner3,
  //       },
  //       {
  //         id: 4,
  //         picture: Banner4,
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     picture: [
  //       {
  //         id: 1,
  //         picture: Banner1,
  //       },
  //       {
  //         id: 2,
  //         picture: Banner2,
  //       },
  //       {
  //         id: 3,
  //         picture: Banner3,
  //       },
  //       {
  //         id: 4,
  //         picture: Banner4,
  //       },
  //     ],
  //   },

  // ];

  const itemBannerImage: BannerIamge[] = [
    {
      id: 1,
      picture: Banner1,
    },
    {
      id: 2,
      picture: Banner2,
    },
    {
      id: 3,
      picture: Banner3,
    },
    {
      id: 4,
      picture: Banner4,
    },
  ];
  const [ImageItems, setImageItems] = useState(itemBannerImage);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="w-[100%]">
      {ImageItems.map((item, index) => (
        <div key={index} >
          <div className="grid grid-cols-2 gap-4">
           <Image src={Banner4} className="h-[94px] max-w-[224px]" alt="banner"/>
           <Image src={Banner3} className="h-[94px] max-w-[224px]" alt="banner"/>
           <Image src={Banner1} className="h-[94px] max-w-[224px]" alt="banner"/>
           <Image src={Banner2} className="h-[94px] max-w-[224px]" alt="banner"/>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default BannerSlider;
