import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Card from '../../assets/images/esport-event/card.png';
import Icon from '../../assets/images/esport-event/icon.png';
import Logo from '../../assets/images/esport-event/logo.png';
import RightIcon from '../../assets/images/esport-event/right.png';
import Line from "../../assets/images/general/Line.png";

const EsportEvent = () => {
  interface EventList {
    event_title: string;
    date: string;
    country: string;
    prize: string;
  }

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
    // centerPadding: '40px',
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },

      {
        breakpoint: 690,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };


  // position: absolute;
  //   top: 8px;
  //   margin-left: 8px;

  return (
    <section className="Esport-events">
      <div className="global-section-width">
        <Slider {...settings}>
          {eventData.map((item, index) => (
            <div
              className="bg-white border-inherit border rounded-sm p-2.5"
              key={index}
            >
               <div  className="">
                 <Image className="w-[100%]" src={Card} alt="card logo"/>
                 <Image src={Icon} className="absolute top-4 ml-1.5" alt="icon logo"/>
               </div>
               <div>
                <p className=" text-brandDark2 font-bold font-esport-event-16 pt-4">
                DOTA Pro Circuit 2023 Tour 1  
                </p>
               <div className="flex flex-row  pt-2.5">
                <Image  src={Logo} alt="event logo"/>
                <div className="flex flex-col pl-2">
                  <p className=" text-brandDark2 font-esport-event-12 font-semibold ">SAT, FEB 02 - THU, MAR 18</p>
                  <p className="font-esport-event-12 text-brandDark2 font-semibold pt-1.5">South Asia <span></span> Prizepool $4500 </p>
                </div>
               </div>
                </div>
                <div className="flex justify-center items-center pt-2.5">
                <Image src={Line} alt="saprator line" />
              </div>  
              <div className="flex flex-row justify-center items-center pt-3">
                <p className="text-brandDark2 font-esport-event-12 font-semibold pr-1.5 ">Registration Open</p>
                <Image className="pl-1.5" src={RightIcon} alt="Right Icon"/> 
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default EsportEvent;
