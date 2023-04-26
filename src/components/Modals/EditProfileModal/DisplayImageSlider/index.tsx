import { useState} from "react";
import Slider from "react-slick";
import Image from 'next/image';
import Logo1 from "../../../../assets/images/profile/logo-1.png";
import Logo2 from "../../../../assets/images/profile/logo-2.png";
import Logo3 from "../../../../assets/images/profile/logo-3.png";
import Logo4 from "../../../../assets/images/profile/logo-4.png";
import Logo5 from "../../../../assets/images/profile/logo-5.png";
import Logo6 from "../../../../assets/images/profile/logo-6.png";
import { useTheme } from "next-themes";
const Carousel = () => {
  interface DisplayIamge {
    id: number;
    picture: any;
  }

 const {theme} = useTheme();
   const itemDisplayImage: DisplayIamge[] = [
    {
      id: 1,
      picture: Logo1,
    },
    {
      id: 2,
      picture: Logo2,
    },
    {
      id: 3,
      picture: Logo3,
    },
    {
      id: 4,
      picture: Logo4,
    },
    {
      id: 5,
      picture: Logo5,
    },
    {
      id: 6,
      picture: Logo6,
    },
    {
      id: 7,
      picture: Logo1,
    },
    {
      id: 8,
      picture: Logo2,
    },
    {
      id: 9,
      picture: Logo3,
    },
    {
      id: 10,
      picture: Logo4,
    },
    {
      id: 11,
      picture: Logo5,
    },
    {
      id: 12,
      picture: Logo6,
    },
  ];
  const [displayImageItems, setDisplayImageItems] = useState(itemDisplayImage);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,

        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,

        },
      },
    ],
  };
  const [selecteitem, setSelectedItem] = useState<number>();
  const onClickSelect = (i : number) =>{
    setSelectedItem(i)
  }

  return (
    <Slider className={`displayImageProfile ${theme === "dark" ? " dark-arrow" : " light-arrow"}`} {...settings}>
      {displayImageItems.map((i, index) => (
        <div key={index}>
          <Image className={`h-[60px] w-[60px]  ${selecteitem ===  index ? ' border rounded-full border-brandDar2 dark:border-brandLightOpacity100 ' : ''}`}
          onClick={() => onClickSelect(index)}
          src={i.picture} alt="logo" />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
