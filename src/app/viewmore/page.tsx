"use client";
import ExportsEventBanner from "@/components/Esports/EsportsEvent/Banner";
import FilterBy from "@/components/Esports/EsportsEvent/FilterBy";
import React, { useState } from "react";
import img1 from "../../assets/esports/other-01.png";
import img2 from "../../assets/esports/other-02.png";
import img3 from "../../assets/esports/other-03.png";
import img4 from "../../assets/esports/other-04.png";
import img5 from "../../assets/esports/other-05.png";
import img6 from "../../assets/esports/other-06.png";
import img7 from "../../assets/esports/other-07.png";
import img8 from "../../assets/esports/other-08.png";
import icon1 from "../../assets/esports/v-mask-01.png";
import icon2 from "../../assets/esports/b-mask-02.png";
import icon3 from "../../assets/esports/v-mask-03.png";
import chevronsright from "../../assets/esports/chevrons-right.png";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Trending from "@/components/Trending/Index";
import AllEsports from "@/components/Esports/AllEsports/AllEsports";
import NewsEsports from "@/components/Esports/NewsEsports/NewsEsports";
import EsportsBgmi from "@/components/Esports/EsportsBgmi/EsportsBgmi";
import EsportsEvents from "@/components/Esports/EsportsEvent";
import Valorant from "@/components/Esports/Valorant/Valorant";
import marked from "../../assets/esports/markedtype-icon.png";

import Link from "next/link";

const Page = () => {
  interface List {
    image: any;
    title: string;
    icon_img: any;
  }
  const [item, setTiems] = useState<List[]>([
    {
      image: img1,
      title: "DOTA Pro Circuit 2023 Tour 1.",
      icon_img: icon3,
    },
    {
      image: img2,
      title: "UMG Apex Legends Pro League",
      icon_img: icon2,
    },
    {
      image: img3,
      title: "DOTA Pro Circuit 2023 Tour 1",
      icon_img: icon3,
    },
    {
      image: img4,
      title: "AMD Presents Super Fan Cup",
      icon_img: icon1,
    },
    {
      image: img5,
      title: "AMD Presents Super Fan Cup",
      icon_img: icon1,
    },
    {
      image: img6,
      title: "DOTA Pro Circuit 2023 Tour 1",
      icon_img: icon3,
    },
    {
      image: img7,
      title: "UMG Apex Legends Pro League",
      icon_img: icon2,
    },
    {
      image: img8,
      title: "DOTA Pro Circuit 2023 Tour 1",
      icon_img: icon3,
    },
    {
      image: img1,
      title: "DOTA Pro Circuit 2023 Tour 1.",
      icon_img: icon3,
    },
    {
      image: img2,
      title: "UMG Apex Legends Pro League",
      icon_img: icon2,
    },
    {
      image: img3,
      title: "DOTA Pro Circuit 2023 Tour 1",
      icon_img: icon3,
    },
    {
      image: img4,
      title: "AMD Presents Super Fan Cup",
      icon_img: icon1,
    },
    {
      image: img5,
      title: "AMD Presents Super Fan Cup",
      icon_img: icon1,
    },
    {
      image: img6,
      title: "DOTA Pro Circuit 2023 Tour 1",
      icon_img: icon3,
    },
    {
      image: img7,
      title: "UMG Apex Legends Pro League",
      icon_img: icon2,
    },
    {
      image: img8,
      title: "DOTA Pro Circuit 2023 Tour 1",
      icon_img: icon3,
    },
    {
      image: img1,
      title: "DOTA Pro Circuit 2023 Tour 1.",
      icon_img: icon3,
    },
    {
      image: img2,
      title: "UMG Apex Legends Pro League",
      icon_img: icon2,
    },
    {
      image: img3,
      title: "DOTA Pro Circuit 2023 Tour 1",
      icon_img: icon3,
    },
    {
      image: img4,
      title: "AMD Presents Super Fan Cup",
      icon_img: icon1,
    },
    {
      image: img5,
      title: "AMD Presents Super Fan Cup",
      icon_img: icon1,
    },
    {
      image: img6,
      title: "DOTA Pro Circuit 2023 Tour 1",
      icon_img: icon3,
    },
    {
      image: img7,
      title: "UMG Apex Legends Pro League",
      icon_img: icon2,
    },
    {
      image: img8,
      title: "DOTA Pro Circuit 2023 Tour 1",
      icon_img: icon3,
    },
  ]);
  const [openTab, setOpenTab] = useState(2);
  const menulist = [
    { name: "all", data: <AllEsports /> },
    { name: "News", data: <NewsEsports /> },
    { name: "Esports Events", data: <EsportsEvents /> },
    { name: "BGMI ", data: <EsportsBgmi /> },
    { name: "Valorant", data: <Valorant /> },
  ];
  const hanldeOpenTab = (e: number) => {
    setOpenTab(e);
  };

  return (
    <section className="viewmore-esport-2">
      <div className="w-full  pt-[25px] pb-[30px] mw-lg:pt-[15px] mw-lg:pb-[20px]  mw-lg:sticky top-[71px] mw-sm3:top-[62px] mw-lg:z-[8] bg-bodycolor dark:bg-brandDark2">
        <ul className="flex max-w-[460px] mw-sm:max-w-[350px]  w-full m-auto justify-between ">
          {menulist.map((el, index) => {
            return (
              <li key={index}>
                <a
                  className={
                    "cursor-pointer capitalize montserratfont block  transition-all	duration-75 leading-loose	 mw-sm:leading-[18px]" +
                    (openTab === index
                      ? " scale-[1.1] dark:text-brand text-brandDark2 font-bold border-b-2 dark:border-brand border-brandDark2  mw-sm:text-base  mw-sm:font-semibold"
                      : "text-base mw-sm:text-sm	 font-normal dark:text-brandLightOpacity100 text-brandDark2")
                  }
                  onClick={() => hanldeOpenTab(index)}
                  data-toggle="tab"
                  role="tablist"
                >
                  {el.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className=" border-y border-grayCard dark:border-brandLightOpacity10 global-section-width">
        <div className="py-4">
          <Trending />
        </div>
      </div>
      <ExportsEventBanner />
      <FilterBy />
      <div className="view-more">
        <div className="global-section-width">
          <div className="2xl:container">
            <div className="flex mw-md:hidden justify-between  flex-wrap	">
              {item.map((ele, index) => {
                return (
                  <div
                    key={index}
                    className="w-[300px] max-w-[24%] mw-9:max-w-[48%] mw-9:w-full rounded border  dark:border-brandLightOpacity10 bg-white hover:border-brandDark1 hover:dark:border-brand hover:dark:shadow-[0_0_8px_0_#ed4e50] hover:shadow-[0_0_8px_0_#e5e5e5] m-1 dark:bg-brandDark1 border-inherit dark:border-brandDark1 border  p-2.5 mw-9:mb-[20px] mt-16 mw-9:mt-8"
                  >
                    <div className="img-wrapper h-[150px] relative">
                      <Image
                        src={ele.image}
                        alt={ele.title}
                        className="w-full h-full rounded-sm	"
                      />
                      <div className="absolute w-[32px] h-[32px] left-[10px] top-[10px]">
                        <Image
                          src={marked}
                          alt="marked"
                          className="h-full w-full object-cover rounded"
                        />
                      </div>
                    </div>
                    <div className="detail">
                      <h4 className="text-brandDark2 dark:text-brandLightOpacity100  font-bold montserratfont texe-base leading-5  pt-4 esport-event-valorant-title">
                        {ele.title}
                      </h4>
                      <div className="flex flex-row  py-2.5 ">
                        <div className="icon-img w-[40px] h-[40px]">
                          <Image
                            src={ele.icon_img}
                            alt={ele.title}
                            className="w-full h-full"
                          />
                        </div>
                        <div className="flex flex-col pl-2">
                          <p className="text-brandDark2 dark:text-brandLightOpacity100 text-xs montserratfont leading-[15px]  font-medium mw-12:text-[10px]  mw-9:text-xs ">
                            DEC 02, 2022 - JAN 18, 2023
                          </p>
                          <p className="  text-brandDark2 dark:text-brandLightOpacity100 font-medium pt-1.5 flex items-center text-xs montserratfont leading-[15px] mw-12:text-[10px] mw-9:text-xs">
                            South Asia
                            <span className="h-1 w-1 bg-brandDark2 opacity-70 dark:opacity-100 dark:bg-brandLightOpacity100 inline-block rounded-full ml-[7px] mr-[8px] mw-12:text-[10px] mw-9:text-xs"></span>
                            Prizepool $4500
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row justify-center items-center pt-3 border-t border-grayCard dark:border-brandLightOpacity10">
                        <a
                          href="#"
                          className="montserratfont font-medium  text-xs leading-[15px]  capitalize  text-brandDark2 dark:text-brandLightOpacity100  "
                        >
                          registration open
                          <Image
                            src={chevronsright}
                            alt="arro"
                            className="inline-block ml-4 mt-[-1px]"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="hidden mw-md:flex flex-wrap justify-between ">
              {item.map((ele, index) => {
                return (
                  <div
                    key={index}
                    className="w-[48%] mw-sm1:w-full rounded border  dark:border-brandLightOpacity10 bg-white hover:border-brandDark1 hover:dark:border-brand hover:dark:shadow-[0_0_8px_0_#ed4e50] hover:shadow-[0_0_8px_0_#e5e5e5] m-1 dark:bg-brandDark1 border-inherit dark:border-brandDark1 border  p-2.5 mw-9:mb-[16px] flex "
                  >
                    <div className="img-wrapper h-[120px] w-[145px] min-w-[145px] mw-sm3:h-[110px] mw-sm3:min-w-[110px] relative">
                      <Image
                        src={ele.image}
                        alt={ele.title}
                        className="w-full h-full rounded-sm	object-cover"
                      />
                      <div className="absolute w-[32px] h-[32px] left-[10px] top-[10px]">
                        <Image
                          src={marked}
                          alt="marked"
                          className="h-full w-full object-cover rounded"
                        />
                      </div>
                    </div>
                    <div className="detail pl-2 flex flex-col justify-between">
                      <h4 className="text-brandDark2 dark:text-brandLightOpacity100  font-bold montserratfont texe-sm leading-[17px] esport-event-valorant-title2 ">
                        {/* esport-event-valorant-title */}
                        {ele.title}
                      </h4>
                      <div className="flex flex-col">
                        <p className="text-brandDark2 dark:text-brandLightOpacity100 text-xs montserratfont	leading-[15px] uppercase  font-medium   ">
                          DEC 02, 2022 - JAN 18, 2023
                        </p>
                        <p className=" text-brandDark2 dark:text-brandLightOpacity100 font-medium pt-1.5 flex items-center text-xs montserratfont leading-[15px]  mw-9:text-xs">
                          South Asia
                          <span className="h-1 w-1 bg-brandDark2 opacity-70 dark:opacity-100    dark:bg-brandLightOpacity100 inline-block rounded-full ml-[2px] mr-[2px] text-xs"></span>
                          Prizepool $4500
                        </p>
                       </div>
                      <div className="flex items-center">
                        <div className="icon-img w-[28px] h-[28px] min-w-[28px] min-h-[28px]">
                          <Image
                            src={ele.icon_img}
                            alt={ele.title}
                            className="w-full h-full "
                          />
                        </div>

                        <div className="flex flex-row justify-center items-center border-l border-grayCard dark:border-brandLightOpacity10 ml-1.5 pl-1.5">
                          <Link
                            href="/esports/event-detail"
                            className="montserratfont font-medium  text-[10px] leading-[12px]  capitalize  text-brandDark2 dark:text-brandLightOpacity100  "
                          >
                            registration open
                            <Image
                              src={chevronsright}
                              alt="arro"
                              className="inline-block ml-2 mt-[-1px]"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <Pagination />
        </div>
      </div>
    </section>
  );
};

export default Page;
