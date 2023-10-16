import React, { useState } from "react";
interface TABDATA {
  tabImage: any;
  paragraph: String;
  button2: String;
  button1: String;
}
const LatestTabsEsport = ({ OpenTab }: any) => {
  const [openTab, setOpenTab] = useState<number | null>(1);
  const [mobilepage, setMobilePage] = useState<number[]>([1, 2, 3, 4, 10]);
  const [mobileSelectNumber, setMobileSelectNumber] = useState<number>(1);
  const mobile = (e: number) => {
    setMobileSelectNumber(e);
  };
  console.log(OpenTab, "oepn tabs is here");
  return (
    <>
      <div className="stickymenu pt-[28px] pb-[31px]">
        <ul className="flex full listTabUser   before:max-w-[1390px] before:left-0 before:right-0 before:top-[31px] before:absolute before:m-auto mw-lg:flex-col">
          <div className="flex w-[63%] mw-lg:w-[100%] ">
            <li className="">
              <a
                className={
                  "text-[18px]   mw-sm1:text-sm   montserratfont  leading-5 font-light	  capitalize  pb-[8px] mw-sm4:text-[12px] mw-sm4:leading-normal capitalize " +
                  (openTab === 1
                    ? " dark:text-[#E5E5E5] dark:text-[#E5E5E5]   font-semibold	"
                    : "dark:bg-brandDark2   dark:text-brandLightOpacity70 font-light	")
                }
                onClick={(e) => {
                  e.preventDefault();
                  OpenTab(1);
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Relevant
              </a>
            </li>
            <li className="pl-[20px]  mw-md:pl-[30px] ">
              <a
                className={
                  "text-[18px]   mw-sm1:text-sm   montserratfont  leading-5 font-light	  capitalize  pb-[8px] mw-sm4:text-[12px] mw-sm4:leading-normal capitalize" +
                  (openTab === 2
                    ? " dark:text-[#E5E5E5] dark:text-[#E5E5E5]   font-semibold	"
                    : "dark:bg-brandDark2   dark:text-brandLightOpacity70 font-light ")
                }
                onClick={(e) => {
                  e.preventDefault();
                  OpenTab(2);
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Latest
              </a>
            </li>
            <li className="pl-[20px]  mw-md:pl-[30px] ">
              <a
                className={
                  "text-[18px]   mw-sm1:text-sm   montserratfont  leading-5 font-light	  capitalize  pb-[8px] mw-sm4:text-[12px] mw-sm4:leading-normal capitalize" +
                  (openTab === 3
                    ? " dark:text-[#E5E5E5] dark:text-[#E5E5E5]   font-semibold	"
                    : "dark:bg-brandDark2   dark:text-brandLightOpacity70 font-light ")
                }
                onClick={(e) => {
                  e.preventDefault();
                  OpenTab(3);
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Top
              </a>
            </li>
            <li className="pl-[20px]  mw-md:pl-[30px] ">
              <a
                className={
                  "text-[18px]   mw-sm1:text-sm   montserratfont  leading-5 font-light	  capitalize  pb-[8px] mw-sm4:text-[12px] mw-sm4:leading-normal capitalize" +
                  (openTab === 4
                    ? "dark:text-[#E5E5E5] dark:text-[#E5E5E5]   font-semibold	"
                    : "dark:bg-brandDark2   dark:text-brandLightOpacity70 font-light  ")
                }
                onClick={(e) => {
                  e.preventDefault();
                  OpenTab(4);
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                For You
              </a>
            </li>
          </div>
          <li>
            <div className="flex mw-lg:mt-[21px]">
              <div className="montserratfont text-textColorGray bg-grayCard px-[12px] py-[8px]  rounded-[16px] mr-2 text-[14px] leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                All
              </div>
              <div className="montserratfont text-textColorGray bg-grayCard px-[12px] py-[8px]  rounded-[16px] mr-2 text-[14px] leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                Gaming
              </div>
              <div className="montserratfont text-textColorGray bg-grayCard px-[12px] py-[8px] rounded-[16px] mr-2 text-[14px] leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                Esports
              </div>
              <div className="montserratfont text-textColorGray bg-grayCard px-[12px] py-[8px]  rounded-[16px] mr-2 text-[14px] leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                Gossip
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LatestTabsEsport;
