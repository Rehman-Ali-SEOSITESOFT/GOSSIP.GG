import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";

import chevronsright from "../../../../../assets/esports/chevrons-right.png";
const MobileSliderValorant = (props: any) => {
  return (
    <>
      <Carousel
        responsive={props.responsive}
        className="valorant-slider"
        ssr
        partialVisbile
        itemClass="image-item"
      >
        {props.item.map((element: any, index: number) => {
          return (
            <div
              key={index}
              className="w-full max-w-[97%] rounded border  dark:border-brandLightOpacity10 bg-white hover:border-brandDark1 hover:dark:border-brand hover:dark:shadow-[0_0_8px_0_#ed4e50] hover:shadow-[0_0_8px_0_#e5e5e5] m-1 dark:bg-brandDark1 border-inherit dark:border-brandDark1 border  p-2.5"
            >
              <div className="img-wrapper h-[150px]">
                <Image
                  src={element.image}
                  alt={element.title}
                  className="w-full h-full rounded-sm	"
                />
              </div>
              <div className="detail">
                <h4 className="text-brandDark2 dark:text-brandLightOpacity100  font-bold montserratfont texe-base leading-5   pt-4">
                  {element.title}
                </h4>
                <div className="flex flex-row  py-2.5 ">
                  <div className="icon-img w-[40px] h-[40px]">
                    <Image
                      src={element.icon_img}
                      alt={element.title}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col pl-2">
                    <p className="text-brandDark2 dark:text-brandLightOpacity100 text-xs montserratfont	leading-[15px]  font-medium ">
                      DEC 02, 2022 - JAN 18, 2023
                    </p>
                    <p className=" text-brandDark2 dark:text-brandLightOpacity100 font-medium pt-1.5 flex items-center text-xs montserratfont leading-[15px]">
                      South Asia
                      <span className="h-1 w-1 bg-brandDark2 opacity-70 dark:opacity-100    dark:bg-brandLightOpacity100 inline-block rounded-full ml-[7px] mr-[8px]"></span>
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
    </>
  );
};

export default MobileSliderValorant;
