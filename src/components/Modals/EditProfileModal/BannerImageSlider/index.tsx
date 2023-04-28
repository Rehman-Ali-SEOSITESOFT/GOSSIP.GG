import { useState } from "react";
import Slider from "react-slick";
import Banner1 from "../../../../assets/images/profile/banner-1.png";
import Banner2 from "../../../../assets/images/profile/banner-2.png";
import Banner3 from "../../../../assets/images/profile/banner-3.png";
import Banner4 from "../../../../assets/images/profile/banner-4.png";
import Image from "next/image";
import { useTheme } from "next-themes";

const BannerSlider = () => {
  interface BannerIamge {
    id: number;
    picture: any;
  }

  const { theme } = useTheme();
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

  const [selecteitem, setSelectedItem] = useState<string>();
  const onClickSelect = (n: number, i: number) => {
    setSelectedItem(n + "" + i);
  };

  return (
    <Slider
      {...settings}
      className={`w-[100%] bannerImageProfile ${
        theme === "dark" ? " dark-arrow" : " light-arrow"
      }`}
    >
      {ImageItems.map((item, index) => (
        <div key={index}>
          <div className="grid grid-cols-2 gap-4">
            <Image
              onClick={() => onClickSelect(1, index)}
              src={Banner4}
              className={`mw-sm:h-[60px] mw-sm:w-[123px] h-[94px] max-w-[224px] ${
                selecteitem === 1 + "" + index
                  ? " border border-brandDar2 dark:border-brandLightOpacity100 "
                  : ""
              }`}
              alt="banner"
            />
            <Image
              onClick={() => onClickSelect(2, index)}
              src={Banner3}
              className={`mw-sm:h-[60px] mw-sm:w-[123px]  h-[94px] max-w-[224px] ${
                selecteitem === 2 + "" + index
                  ? " border border-brandDar2 dark:border-brandLightOpacity100 "
                  : ""
              } `}
              alt="banner"
            />
            <Image
              onClick={() => onClickSelect(3, index)}
              src={Banner1}
              className={`mw-sm:h-[60px] mw-sm:w-[123px]  h-[94px] max-w-[224px] ${
                selecteitem === 3 + "" + index
                  ? " border border-brandDar2 dark:border-brandLightOpacity100 "
                  : ""
              } `}
              alt="banner"
            />
            <Image
              onClick={() => onClickSelect(4, index)}
              src={Banner2}
              className={`mw-sm:h-[60px] mw-sm:w-[123px]  h-[94px] max-w-[224px] ${
                selecteitem === 4 + "" + index
                  ? " border border-brandDar2 dark:border-brandLightOpacity100 "
                  : ""
              } `}
              alt="banner"
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default BannerSlider;
