import React, { useState } from "react";
import Image from "next/image";

import FilterTabs from "../Filter";
import ongoing1 from "../../../assets/tech/deals/ongoing-1.png";
import ongoing2 from "../../../assets/tech/deals/ongoing-2.png";
import ongoing3 from "../../../assets/tech/deals/ongoing-3.png";
import ongoing4 from "../../../assets/tech/deals/ongoing-4.png";
import ongoing5 from "../../../assets/tech/deals/ongoing-5.png";
import ongoing6 from "../../../assets/tech/deals/ongoing-6.png";
import ongoing7 from "../../../assets/tech/deals/ongoing-7.png";
import ongoing8 from "../../../assets/tech/deals/ongoing-8.png";

import upcomming1 from "../../../assets/tech/deals/upcomming-1.png";
import upcomming2 from "../../../assets/tech/deals/upcomming-2.png";
import upcomming3 from "../../../assets/tech/deals/upcomming-3.png";
import upcomming4 from "../../../assets/tech/deals/upcomming-4.png";
import upcomming5 from "../../../assets/tech/deals/upcomming-5.png";
import upcomming6 from "../../../assets/tech/deals/upcomming-6.png";
import upcomming7 from "../../../assets/tech/deals/upcomming-7.png";
import upcomming8 from "../../../assets/tech/deals/upcomming-8.png";

import SectionSaprator from "@/components/SecSaprator";
import downextendicon from "../../../assets/tech/down-extend.png";
import uparrow from "../../../assets/tech/uparrow.png";
import DealSlider from "./Slider";
import bookmark from "../../../assets/tech/bookmark.png";

const DeailTech = () => {
  const [onGoing, setOnGoing] = useState<any[]>([
    ongoing1,
    ongoing2,
    ongoing3,
    ongoing4,
    ongoing5,
    ongoing6,
    ongoing7,
    ongoing8,
    ongoing1,
    ongoing2,
    ongoing3,
    ongoing4,
    ongoing5,
    ongoing6,
    ongoing7,
    ongoing8,
  ]);
  const [upCommming, setUpComming] = useState<any[]>([
    upcomming1,
    upcomming2,
    upcomming3,
    upcomming4,
    upcomming5,
    upcomming6,
    upcomming7,
    upcomming8,
    upcomming1,
    upcomming2,
    upcomming3,
    upcomming4,
    upcomming5,
    upcomming6,
    upcomming7,
    upcomming8,
  ]);
  const [onGoingLimit, setOnGoingLimit] = useState<number>(8);
  const [upCommingLimit, setUpCommingLimit] = useState<number>(8);
  const hanldeOnGoing = () => {
    setOnGoingLimit(onGoingLimit + 8);
  };
  const hanldeUpcomming = () => {
    setUpCommingLimit(upCommingLimit + 8);
  };
  const hanldeCloseGoingLimited = () => {
    setOnGoingLimit(8);
  };
  const hanldeCloseUpCommingLimited = () => {
    setUpCommingLimit(8);
  };
  return (
    <section className="global-section-width">
      <div className="slider pt-11 mw-lg:pt-9 mw-sm:pt-7">
        <DealSlider />
      </div>
      <FilterTabs />
      <div className="2xl:container">
        <div className="pt-16 mw-lg:pt-7 mw-sm:pt-[16px]">
          <SectionSaprator title="Ongoing Deals" />
        </div>
        <div className="flex flex-wrap justify-between">
          {onGoing.slice(0, onGoingLimit).map((elem, index) => {
            return (
              <div
                className={
                  "max-w-[300px] mb-[24px] mx-14:max-w-[24%] w-full mw-md:max-w-[48%]      "
                }
                key={index}
              >
                <div className="img-wrapper  h-[250px] mw-lg:h-[200px] mw-sm:h-[180px] mw-sm3:h-[150px] rounded relative">
                  <Image src={elem} alt="hello" className="w-full h-full" />

                  {index === 0 || index === 4 || index === 8 || index === 12 ? (
                    <div className="picked bg-arrowicon bg-brand text-brandLightOpacity100 montserratfont font-bold text-base leading-5 text-center w-[148px] h-[40px] flex items-center justify-center rounded-r absolute left-0 top-[8px]  mw-sm:text-sm	">
                      AMAZON DEALS
                    </div>
                  ) : null}
                </div>
                <div className="description flex justify-between pt-3 ">
                  <h4 className="text-base leading-5 text-brandDark2 font-bold montserratfont dark:text-brandLightOpacity100 pr-2 deail-tab-com-title">
                    Check out the Great Indian Amazon Sale this month
                  </h4>
                  <div>
                    <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard dark:text-brandLightOpacity100 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20   hover:bg-borderEditProfile cursor-pointer rounded-3xl">
                      <Image
                        src={bookmark}
                        alt="bookmkard"
                        className=" brightness-0 dark:brightness-200"
                      />
                    </div>
                  </div>
                </div>
                <p className="montserratfont py-[8px] text-brandDark2 dark:text-brandLightOpacity100 font-medium text-sm">
                  13 Feb - 18 Mar
                </p>
                <div className="flex montserratfont">
                  <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                    News
                  </div>
                  <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                    Esports
                  </div>
                </div>
              </div>
            );
          })}
          {onGoing.length === onGoingLimit ? (
            <h5
              onClick={hanldeCloseGoingLimited}
              className="cursor-pointer pt-2 text-center m-auto mt-2"
            >
              <span className="montserratfont font-medium	capitalize text-base leading-5 dark:text-brandLightOpacity70 underline underline-offset-4	pr-2">
                See less
              </span>
              <Image
                src={uparrow}
                className="inline-block dark:brightness-100	 brightness-0	"
                alt="extend"
              />
            </h5>
          ) : (
            <h5
              onClick={hanldeOnGoing}
              className="cursor-pointer pt-2 text-center m-auto mt-2"
            >
              <span className="montserratfont font-medium	capitalize text-base leading-5 dark:text-brandLightOpacity70 underline underline-offset-4	pr-2">
                See more
              </span>
              <Image
                src={downextendicon}
                className="inline-block dark:brightness-100	 brightness-0	"
                alt="extend"
              />
            </h5>
          )}
        </div>
      </div>
      <div className="2xl:container">
        <div className="pt-16 mw-lg:pt-7 mw-sm:pt-[16px]">
          <SectionSaprator title="Upcoming  Deals" />
        </div>
        <div className="flex flex-wrap justify-between">
          {upCommming.slice(0, upCommingLimit).map((elem, index) => {
            return (
              <div
                className={
                  "max-w-[300px]  mb-[24px] mx-14:max-w-[24%] w-full mw-md:max-w-[48%]   "
                }
                key={index}
              >
                <div className="img-wrapper  h-[250px] mw-lg:h-[200px] mw-sm:h-[180px] mw-sm3:h-[150px] rounded relative">
                  <Image src={elem} alt="hello" className="w-full h-full" />

                  {index === 0 || index === 4 || index === 8 || index === 12 ? (
                    <div className="picked bg-arrowicon bg-brand text-brandLightOpacity100 montserratfont font-bold text-base leading-5 text-center w-[148px] h-[40px] flex items-center justify-center rounded-r absolute left-0 top-[8px]	  mw-sm:text-sm">
                      AMAZON DEALS
                    </div>
                  ) : null}
                </div>
                <div className="description flex justify-between pt-3 ">
                  <h4 className="text-base leading-5 text-brandDark2 font-bold montserratfont dark:text-brandLightOpacity100 pr-2 deail-tab-com-title">
                    Check out the Great Indian Amazon Sale this month
                  </h4>
                  <div>
                    <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard dark:text-brandLightOpacity100 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20  hover:bg-borderEditProfile cursor-pointer rounded-3xl">
                      <Image
                        src={bookmark}
                        alt="bookmkard"
                        className=" brightness-0 dark:brightness-200"
                      />
                    </div>
                  </div>
                </div>
                <p className="montserratfont py-[8px] text-brandDark2 dark:text-brandLightOpacity100 font-medium text-sm">
                  13 Feb - 18 Mar
                </p>
                <div className="flex montserratfont">
                  <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                    News
                  </div>
                  <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                    Esports
                  </div>
                </div>
              </div>
            );
          })}{" "}
          {upCommming.length === upCommingLimit ? (
            <h5
              onClick={hanldeCloseUpCommingLimited}
              className="cursor-pointer pb-28 mw-sm1:pb-12 text-center pt-4 m-auto"
            >
              <span className="montserratfont font-medium	capitalize text-base leading-5 dark:text-brandLightOpacity70 underline underline-offset-4	pr-2">
                See Less
              </span>
              <Image
                src={uparrow}
                className="inline-block dark:brightness-100	 brightness-0"
                alt="extend"
              />
            </h5>
          ) : (
            <h5
              onClick={hanldeUpcomming}
              className="cursor-pointer pb-28 mw-sm1:pb-12 text-center pt-4 m-auto"
            >
              <span className="montserratfont font-medium	capitalize text-base leading-5 dark:text-brandLightOpacity70 underline underline-offset-4	pr-2">
                See more
              </span>
              <Image
                src={downextendicon}
                className="inline-block dark:brightness-100	 brightness-0"
                alt="extend"
              />
            </h5>
          )}
        </div>
      </div>
    </section>
  );
};

export default DeailTech;
