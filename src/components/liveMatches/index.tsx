import { Fragment } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Logo from "../../assets/images/live-match/logo.png";
import TeamOne from "../../assets/images/live-match/team-one.png";
import TeamTwo from "../../assets/images/live-match/team-two.png";
import Line from "../../assets/images/general/line.png";
const LiveMatch = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <Fragment>
      <div className="global-section-width">
        <Slider {...settings}>
          <div className="bg-white border-inherit border rounded-sm">
            <div className="flex flex-row justify-between items-center content-center p-4">
              <div className="flex items-center">
                <Image
                  className="max-w-[100%] max-h-[100%]"
                  src={Logo}
                  alt="Live Match logo"
                />
                <p className="text-base pl-3 text-brandDark2 font-text-live-page font-semibold">
                  LPL 2023 Spring
                </p>
              </div>
              <div className="bg-errorIndicator h-8 w-14 flex justify-center items-center rounded-sm">
                <p className="text-white font-text-live-page tracking-wider  ">
                  LIVE
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
                <Image src={Line} alt="saprator line" />
            </div>
            <div className=" p-4">
              
            </div>
            
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </Fragment>
  );
};

export default LiveMatch;
