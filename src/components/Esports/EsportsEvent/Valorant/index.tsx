import React, { useState } from "react";
import img1 from "../../../../assets/esports/valorant-01.png";
import img2 from "../../../../assets/esports/valorant-02.png";
import img3 from "../../../../assets/esports/valorant-03.png";
import img4 from "../../../../assets/esports/valorant-04.png";

import icon1 from "../../../../assets/esports/v-mask-01.png";
import icon2 from "../../../../assets/esports/v-mask-02.png";
import icon3 from "../../../../assets/esports/v-mask-03.png";
import icon4 from "../../../../assets/esports/v-mask-04.png";
import chevronsright from "../../../../assets/esports/chevrons-right.png";
import Image from "next/image";
import SectionSaprator from "@/components/SecSaprator";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import marked from "../../../../assets/esports/markedtype-icon.png";

const Valorant = (props: any) => {
  interface List {
    image: any;
    title: string;
    icon_img: any;
  }
  const [item, setTiems] = useState<List[]>([
    {
      image: img1,
      title: "Valorant Champion Cup II",
      icon_img: icon1,
    },
    {
      image: img2,
      title: "Break of First Light",
      icon_img: icon2,
    },
    {
      image: img3,
      title: "TEC Valorant 1v1 Gold Series",
      icon_img: icon3,
    },
    {
      image: img4,
      title: "Wolfoxy - Valorant 5X5 - #382",
      icon_img: icon4,
    },
  ]);
  return (
    <div className="valorant-component">
      <div className="global-section-width">
        <div className="pt-16 mw-lg:pt-7 mw-sm:pt-[10px]">
          <div className="section-saprator flex flex-row items-center pb-[24px]  overflow-hidden mw-xl:m-0	">
            <p className="text-brandDark2 font-bold font-sec-saprate-18 dark:text-secSaprator w-auto min-w-fit mw-sm:pt-5  mw-sm:w-full uppercase">
              Valorant
            </p>
            <div className="bg-gradient-to-r from-brandDark2 h-0.5  min-w-[86%] ml-3 dark:from-secSaprator mw-sm:hidden"></div>
          </div>
        </div>

        <div className="2xl:container">
          <div className="mw-sm:hidden flex  justify-between  flex-wrap">
            {item.map((ele, index) => {
              return (
                <div
                  key={index}
                  className="w-[300px] max-w-[24%] mw-9:max-w-[48%] mw-9:w-full rounded border  dark:border-brandLightOpacity10 bg-white hover:border-brandDark1 hover:dark:border-brand hover:dark:shadow-[0_0_8px_0_#ed4e50] hover:shadow-[0_0_8px_0_#e5e5e5] m-1 dark:bg-brandDark1 border-inherit dark:border-brandDark1 border  p-2.5 mw-9:mb-[20px]"
                >
                  <div className="img-wrapper h-[150px] relative">
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
                  <div className="detail">
                    <h4 className="text-brandDark2 dark:text-brandLightOpacity100  font-bold montserratfont texe-base leading-5  pt-4 esport-event-valorant-title">
                      {ele.title}
                    </h4>
                    <div className="flex flex-row  py-2.5 ">
                      <div className="icon-img w-[40px] h-[40px] min-w-[40px] min-h-[40px]">
                        <Image
                          src={ele.icon_img}
                          alt={ele.title}
                          className="w-full h-full "
                        />
                      </div>
                      <div className="flex flex-col pl-2">
                        <p className="text-brandDark2 dark:text-brandLightOpacity100 text-xs montserratfont	leading-[15px]  font-medium mw-12:text-[10px]  mw-9:text-xs ">
                          DEC 02, 2022 - JAN 18, 2023
                        </p>
                        <p className=" text-brandDark2 dark:text-brandLightOpacity100 font-medium pt-1.5 flex items-center text-xs montserratfont leading-[15px] mw-12:text-[10px] mw-9:text-xs">
                          South Asia
                          <span className="h-1 w-1 bg-brandDark2 opacity-70 dark:opacity-100    dark:bg-brandLightOpacity100 inline-block rounded-full ml-[7px] mr-[8px] mw-12:text-[10px] mw-9:text-xs"></span>
                          Prizepool $4500
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row justify-center items-center pt-3 border-t border-grayCard dark:border-brandLightOpacity10">
                      <Link
                        href="/esports/event-detail"
                        className="montserratfont font-medium  text-xs leading-[15px]  capitalize  text-brandDark2 dark:text-brandLightOpacity100  "
                      >
                        registration open{" "}
                        <Image
                          src={chevronsright}
                          alt="arro"
                          className="inline-block ml-4 mt-[-1px]"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="hidden mw-sm:block ">
            <Carousel
              responsive={props.responsive}
              className="valorant-slider"
              ssr
              partialVisbile
              itemClass="image-item"
            >
              {item.map((ele, index) => {
                return (
                  <div
                    key={index}
                    className="w-full max-w-[97%]  rounded border  dark:border-brandLightOpacity10 bg-white hover:border-brandDark1 hover:dark:border-brand hover:dark:shadow-[0_0_8px_0_#ed4e50] hover:shadow-[0_0_8px_0_#e5e5e5] m-1 dark:bg-brandDark1 border-inherit dark:border-brandDark1 border  p-2.5 mw-9:mb-[20px]"
                  >
                    <div className="img-wrapper h-[150px] relative">
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
                    <div className="detail">
                      <h4 className="text-brandDark2 dark:text-brandLightOpacity100  font-bold montserratfont texe-base leading-5  pt-4 esport-event-valorant-title">
                        {ele.title}
                      </h4>
                      <div className="flex flex-row  py-2.5 ">
                        <div className="icon-img w-[40px] h-[40px] min-w-[40px] min-h-[40px]">
                          <Image
                            src={ele.icon_img}
                            alt={ele.title}
                            className="w-full h-full "
                          />
                        </div>
                        <div className="flex flex-col pl-2">
                          <p className="text-brandDark2 dark:text-brandLightOpacity100 text-xs montserratfont	leading-[15px]  font-medium mw-12:text-[10px]  mw-9:text-xs ">
                            DEC 02, 2022 - JAN 18, 2023
                          </p>
                          <p className=" text-brandDark2 dark:text-brandLightOpacity100 font-medium pt-1.5 flex items-center text-xs montserratfont leading-[15px] mw-12:text-[10px] mw-9:text-xs">
                            South Asia
                            <span className="h-1 w-1 bg-brandDark2 opacity-70 dark:opacity-100    dark:bg-brandLightOpacity100 inline-block rounded-full ml-[7px] mr-[8px] mw-12:text-[10px] mw-9:text-xs"></span>
                            Prizepool $4500
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row justify-center items-center pt-3 border-t border-grayCard dark:border-brandLightOpacity10">
                        <Link
                          href="/esports/event-detail"
                          className="montserratfont font-medium  text-xs leading-[15px]  capitalize  text-brandDark2 dark:text-brandLightOpacity100  "
                        >
                          registration open{" "}
                          <Image
                            src={chevronsright}
                            alt="arro"
                            className="inline-block ml-4 mt-[-1px]"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
          <div className="w-full pt-4 ">
            <a
              href="/viewmore?valorant-events=valorant-events"
              className="text-textColorGray dark:text-brandLightOpacity70 montserratfont font-base  leading-5 font-medium	 dark:hover:text-white hover:underline
              dark:hover:decoration-white 
              hover:decoration-black 
              hover:text-black"
            >
              <span className="view-more"> View all Valorant events</span>
              <span>&gt;</span>
              <span>&gt;</span>
              <span>&gt;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Valorant;
