import React, { useState } from "react";
import tab1 from "../../../../assets/newsports/tab1.png";
import tab2 from "../../../../assets/newsports/tab2.png";
import tab3 from "../../../../assets/newsports/tab3.png";
import tab4 from "../../../../assets/newsports/tab4.png";
import tab5 from "../../../../assets/newsports/tab5.png";
import tab6 from "../../../../assets/newsports/tab6.png";
import tab7 from "../../../../assets/newsports/tab7.png";
import tab8 from "../../../../assets/newsports/tab8.png";
import tab9 from "../../../../assets/newsports/tab9.png";
import tab10 from "../../../../assets/newsports/tab10.png";
import tab11 from "../../../../assets/newsports/tab11.png";
import ad1 from "../../../../assets/newsports/add1.png";
import ad2 from "../../../../assets/newsports/add2.png";
import Advertise from "@/components/NewEsports/RightSidebar";
import GamingRelevantTab from "..";
import Filter from "@/components/Filter/Filter";
import GamingFilter from "../../GamingFilter";
import EmptyTabs from "@/components/Emptytabs";
import { open } from "fs/promises";
import GameTabList from "../GameTabsList";
import TopButton from "@/components/TopButton/TopButton";
const GamingRelevantTabSection = () => {
  interface TABDATA {
    tabImage: any;
    paragraph: String;
    button2: String;
    button1: String;
  }
  const [tabData, setTabData] = useState<TABDATA[]>([
    {
      tabImage: tab1,
      paragraph:
        "Apex Legends Season 18 Resurrection Details: Revenant Revamped, Charge Rifle Update ",
      button2: "Baldurs gate 3 ",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab2,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free ",
      button2: "News ",
      button1: "Esports",
    },
    {
      tabImage: tab3,
      paragraph: "Apex Legends Season 18 Resurrection ",
      button2: "Baldurs gate 3 ",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab4,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free  ",
      button2: "Guides",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab5,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free   ",
      button2: "Features",
      button1: "Gaming",
    },
    {
      tabImage: tab6,
      paragraph:
        "Apex Legends Season 18 Resurrection Details: Revenant Revamped, Charge Rifle Update  ",
      button2: "FIFA",
      button1: "Championship",
    },
    {
      tabImage: tab7,
      paragraph:
        "Apex Legends Season 18 Resurrection Details: Revenant Revamped, Charge Rifle Update ",
      button2: "Baldurs gate 3 ",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab8,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free  ",
      button2: "News ",
      button1: "Esports",
    },
    {
      tabImage: tab9,
      paragraph: "Apex Legends Season 18 Resurrection  ",
      button2: "News ",
      button1: "Esports",
    },
    {
      tabImage: tab10,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free  ",
      button2: "Guides",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab11,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free   ",
      button2: "Guides",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab9,
      paragraph: "Apex Legends Season 18 Resurrection  ",
      button2: "News ",
      button1: "Esports",
    },
    {
      tabImage: tab1,
      paragraph:
        "Apex Legends Season 18 Resurrection Details: Revenant Revamped, Charge Rifle Update ",
      button2: "Baldurs gate 3 ",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab2,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free ",
      button2: "News ",
      button1: "Esports",
    },
    {
      tabImage: tab3,
      paragraph: "Apex Legends Season 18 Resurrection ",
      button2: "Baldurs gate 3 ",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab4,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free  ",
      button2: "Guides",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab5,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free   ",
      button2: "Features",
      button1: "Gaming",
    },
    {
      tabImage: tab6,
      paragraph:
        "Apex Legends Season 18 Resurrection Details: Revenant Revamped, Charge Rifle Update  ",
      button2: "FIFA",
      button1: "Championship",
    },
    {
      tabImage: tab7,
      paragraph:
        "Apex Legends Season 18 Resurrection Details: Revenant Revamped, Charge Rifle Update ",
      button2: "Baldurs gate 3 ",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab8,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free  ",
      button2: "News ",
      button1: "Esports",
    },
    {
      tabImage: tab9,
      paragraph: "Apex Legends Season 18 Resurrection  ",
      button2: "News ",
      button1: "Esports",
    },
    {
      tabImage: tab10,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free  ",
      button2: "Guides",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab11,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free   ",
      button2: "Guides",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab9,
      paragraph: "Apex Legends Season 18 Resurrection  ",
      button2: "News ",
      button1: "Esports",
    },
    {
      tabImage: tab1,
      paragraph:
        "Apex Legends Season 18 Resurrection Details: Revenant Revamped, Charge Rifle Update ",
      button2: "Baldurs gate 3 ",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab2,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free ",
      button2: "News ",
      button1: "Esports",
    },
    {
      tabImage: tab3,
      paragraph: "Apex Legends Season 18 Resurrection ",
      button2: "Baldurs gate 3 ",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab4,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free  ",
      button2: "Guides",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab5,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free   ",
      button2: "Features",
      button1: "Gaming",
    },
    {
      tabImage: tab6,
      paragraph:
        "Apex Legends Season 18 Resurrection Details: Revenant Revamped, Charge Rifle Update  ",
      button2: "FIFA",
      button1: "Championship",
    },
    {
      tabImage: tab7,
      paragraph:
        "Apex Legends Season 18 Resurrection Details: Revenant Revamped, Charge Rifle Update ",
      button2: "Baldurs gate 3 ",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab8,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free  ",
      button2: "News ",
      button1: "Esports",
    },
    {
      tabImage: tab9,
      paragraph: "Apex Legends Season 18 Resurrection  ",
      button2: "News ",
      button1: "Esports",
    },
    {
      tabImage: tab10,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free  ",
      button2: "Guides",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab11,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free   ",
      button2: "Guides",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab9,
      paragraph: "Apex Legends Season 18 Resurrection  ",
      button2: "News ",
      button1: "Esports",
    },
    {
      tabImage: tab1,
      paragraph:
        "Apex Legends Season 18 Resurrection Details: Revenant Revamped, Charge Rifle Update ",
      button2: "Baldurs gate 3 ",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab2,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free ",
      button2: "News ",
      button1: "Esports",
    },
    {
      tabImage: tab3,
      paragraph: "Apex Legends Season 18 Resurrection ",
      button2: "Baldurs gate 3 ",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab4,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free  ",
      button2: "Guides",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab5,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free   ",
      button2: "Features",
      button1: "Gaming",
    },
    {
      tabImage: tab6,
      paragraph:
        "Apex Legends Season 18 Resurrection Details: Revenant Revamped, Charge Rifle Update  ",
      button2: "FIFA",
      button1: "Championship",
    },
    {
      tabImage: tab7,
      paragraph:
        "Apex Legends Season 18 Resurrection Details: Revenant Revamped, Charge Rifle Update ",
      button2: "Baldurs gate 3 ",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab8,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free  ",
      button2: "News ",
      button1: "Esports",
    },
    {
      tabImage: tab9,
      paragraph: "Apex Legends Season 18 Resurrection  ",
      button2: "News ",
      button1: "Esports",
    },
    {
      tabImage: tab10,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free  ",
      button2: "Guides",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab11,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free   ",
      button2: "Guides",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab9,
      paragraph: "Apex Legends Season 18 Resurrection  ",
      button2: "News ",
      button1: "Esports",
    },
    {
      tabImage: tab1,
      paragraph:
        "Apex Legends Season 18 Resurrection Details: Revenant Revamped, Charge Rifle Update ",
      button2: "Baldurs gate 3 ",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab2,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free ",
      button2: "News ",
      button1: "Esports",
    },
    {
      tabImage: tab3,
      paragraph: "Apex Legends Season 18 Resurrection ",
      button2: "Baldurs gate 3 ",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab4,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free  ",
      button2: "Guides",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab5,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free   ",
      button2: "Features",
      button1: "Gaming",
    },
    {
      tabImage: tab6,
      paragraph:
        "Apex Legends Season 18 Resurrection Details: Revenant Revamped, Charge Rifle Update  ",
      button2: "FIFA",
      button1: "Championship",
    },
    {
      tabImage: tab7,
      paragraph:
        "Apex Legends Season 18 Resurrection Details: Revenant Revamped, Charge Rifle Update ",
      button2: "Baldurs gate 3 ",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab8,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free  ",
      button2: "News ",
      button1: "Esports",
    },
    {
      tabImage: tab9,
      paragraph: "Apex Legends Season 18 Resurrection  ",
      button2: "News ",
      button1: "Esports",
    },
    {
      tabImage: tab10,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free  ",
      button2: "Guides",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab11,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free   ",
      button2: "Guides",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab9,
      paragraph: "Apex Legends Season 18 Resurrection  ",
      button2: "News ",
      button1: "Esports",
    },
    {
      tabImage: tab1,
      paragraph:
        "Apex Legends Season 18 Resurrection Details: Revenant Revamped, Charge Rifle Update ",
      button2: "Baldurs gate 3 ",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab2,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free ",
      button2: "News ",
      button1: "Esports",
    },
    {
      tabImage: tab3,
      paragraph: "Apex Legends Season 18 Resurrection ",
      button2: "Baldurs gate 3 ",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab4,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free  ",
      button2: "Guides",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab5,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free   ",
      button2: "Features",
      button1: "Gaming",
    },
    {
      tabImage: tab6,
      paragraph:
        "Apex Legends Season 18 Resurrection Details: Revenant Revamped, Charge Rifle Update  ",
      button2: "FIFA",
      button1: "Championship",
    },
    {
      tabImage: tab7,
      paragraph:
        "Apex Legends Season 18 Resurrection Details: Revenant Revamped, Charge Rifle Update ",
      button2: "Baldurs gate 3 ",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab8,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free  ",
      button2: "News ",
      button1: "Esports",
    },
    {
      tabImage: tab9,
      paragraph: "Apex Legends Season 18 Resurrection  ",
      button2: "News ",
      button1: "Esports",
    },
    {
      tabImage: tab10,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free  ",
      button2: "Guides",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab11,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free   ",
      button2: "Guides",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab9,
      paragraph: "Apex Legends Season 18 Resurrection  ",
      button2: "News ",
      button1: "Esports",
    },
    {
      tabImage: tab1,
      paragraph:
        "Apex Legends Season 18 Resurrection Details: Revenant Revamped, Charge Rifle Update ",
      button2: "Baldurs gate 3 ",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab2,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free ",
      button2: "News ",
      button1: "Esports",
    },
    {
      tabImage: tab3,
      paragraph: "Apex Legends Season 18 Resurrection ",
      button2: "Baldurs gate 3 ",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab4,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free  ",
      button2: "Guides",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab5,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free   ",
      button2: "Features",
      button1: "Gaming",
    },
    {
      tabImage: tab6,
      paragraph:
        "Apex Legends Season 18 Resurrection Details: Revenant Revamped, Charge Rifle Update  ",
      button2: "FIFA",
      button1: "Championship",
    },
    {
      tabImage: tab7,
      paragraph:
        "Apex Legends Season 18 Resurrection Details: Revenant Revamped, Charge Rifle Update ",
      button2: "Baldurs gate 3 ",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab8,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free  ",
      button2: "News ",
      button1: "Esports",
    },
    {
      tabImage: tab9,
      paragraph: "Apex Legends Season 18 Resurrection  ",
      button2: "News ",
      button1: "Esports",
    },
    {
      tabImage: tab10,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free  ",
      button2: "Guides",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab11,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free   ",
      button2: "Guides",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab9,
      paragraph: "Apex Legends Season 18 Resurrection  ",
      button2: "News ",
      button1: "Esports",
    },
    {
      tabImage: tab1,
      paragraph:
        "Apex Legends Season 18 Resurrection Details: Revenant Revamped, Charge Rifle Update ",
      button2: "Baldurs gate 3 ",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab2,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free ",
      button2: "News ",
      button1: "Esports",
    },
    {
      tabImage: tab3,
      paragraph: "Apex Legends Season 18 Resurrection ",
      button2: "Baldurs gate 3 ",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab4,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free  ",
      button2: "Guides",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab5,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free   ",
      button2: "Features",
      button1: "Gaming",
    },
    {
      tabImage: tab6,
      paragraph:
        "Apex Legends Season 18 Resurrection Details: Revenant Revamped, Charge Rifle Update  ",
      button2: "FIFA",
      button1: "Championship",
    },
    {
      tabImage: tab7,
      paragraph:
        "Apex Legends Season 18 Resurrection Details: Revenant Revamped, Charge Rifle Update ",
      button2: "Baldurs gate 3 ",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab8,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free  ",
      button2: "News ",
      button1: "Esports",
    },
    {
      tabImage: tab9,
      paragraph: "Apex Legends Season 18 Resurrection  ",
      button2: "News ",
      button1: "Esports",
    },
    {
      tabImage: tab10,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free  ",
      button2: "Guides",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab11,
      paragraph:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free   ",
      button2: "Guides",
      button1: "Dungeons and dragons etc",
    },
    {
      tabImage: tab9,
      paragraph: "Apex Legends Season 18 Resurrection  ",
      button2: "News ",
      button1: "Esports",
    },
  ]);
  const [openTab, setOpenTab] = useState<number | null>(1);
  const [mobilepage, setMobilePage] = useState<number[]>([1, 2, 3, 4, 10]);
  const [mobileSelectNumber, setMobileSelectNumber] = useState<number>(1);
  const mobile = (e: number) => {
    setMobileSelectNumber(e);
  };
  return (
    <>
      <div className="quiz_history_tabs relative">
        <div className="tabss   mw-lg:mt-[48px] mw-sm4:mt-[6px]">
          {/* <ul className="flex full listTabUser   before:max-w-[1390px] before:left-0 before:right-0 before:top-[31px] before:absolute before:m-auto mw-lg:flex-col">
            <div className="flex w-[56%] mw-lg:w-[100%]">
              <li className="">
                <a
                  className={
                    "text-[18px]   mw-sm1:text-sm   montserratfont  leading-5 font-light	  capitalize  pb-[8px] mw-sm4:text-[16px] mw-sm4:leading-normal capitalize " +
                    (openTab === 1
                      ? " dark:text-[#E5E5E5] dark:text-[#E5E5E5]   font-semibold	"
                      : "dark:bg-brandDark2   dark:text-brandLightOpacity70 font-light	")
                  }
                  onClick={(e) => {
                    e.preventDefault();
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
                    "text-[18px]   mw-sm1:text-sm   montserratfont  leading-5 font-light	  capitalize  pb-[8px] mw-sm4:text-[16px] mw-sm4:leading-normal capitalize" +
                    (openTab === 2
                      ? " dark:text-[#E5E5E5] dark:text-[#E5E5E5]   font-semibold	"
                      : "dark:bg-brandDark2   dark:text-brandLightOpacity70 font-light ")
                  }
                  onClick={(e) => {
                    e.preventDefault();
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
                    "text-[18px]   mw-sm1:text-sm   montserratfont  leading-5 font-light	  capitalize  pb-[8px] mw-sm4:text-[16px] mw-sm4:leading-normal capitalize" +
                    (openTab === 3
                      ? " dark:text-[#E5E5E5] dark:text-[#E5E5E5]   font-semibold	"
                      : "dark:bg-brandDark2   dark:text-brandLightOpacity70 font-light ")
                  }
                  onClick={(e) => {
                    e.preventDefault();
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
                    "text-[18px]   mw-sm1:text-sm   montserratfont  leading-5 font-light	  capitalize  pb-[8px] mw-sm4:text-[16px] mw-sm4:leading-normal capitalize" +
                    (openTab === 4
                      ? "dark:text-[#E5E5E5] dark:text-[#E5E5E5]   font-semibold	"
                      : "dark:bg-brandDark2   dark:text-brandLightOpacity70 font-light  ")
                  }
                  onClick={(e) => {
                    e.preventDefault();
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
              <div className="flex mw-lg:mt-[31px] 	">
                <div className="montserratfont text-textColorGray bg-grayCard px-[12px] py-[8px]  rounded-[16px] mr-2 text-[14px] leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70  mw-sm4:text-[11px] ">
                  All
                </div>
                <div className="montserratfont text-textColorGray bg-grayCard px-[12px] py-[8px]  rounded-[16px] mr-2 text-[14px] leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70 mw-sm4:text-[11px]">
                  News
                </div>
                <div className="montserratfont text-textColorGray bg-grayCard px-[12px] py-[8px] rounded-[16px] mr-2 text-[14px] leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70 mw-sm4:text-[11px]">
                  Features
                </div>
                <div className="montserratfont text-textColorGray bg-grayCard px-[12px] py-[8px]  rounded-[16px] mr-2 text-[14px] leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70 mw-sm4:text-[11px]">
                  Guide
                </div>
                <div className="montserratfont text-textColorGray bg-grayCard px-[12px] py-[8px]  rounded-[16px] mr-2 text-[14px] leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70 mw-sm4:text-[11px] ">
                  Review
                </div>
              </div>
            </li>
          </ul> */}
          <GameTabList OpennTab={setOpenTab} />
          {openTab === 1 ? (
            <div className="mb-6 mw-lg:mt-[0px] flex justify-between   relative">
              <div className="w-[85%] mw-lg:w-[100%]">
                <GamingFilter />
                <TopButton />
                <div className="flex flex-wrap justify-between ">
                  {tabData.map((e, idx) => {
                    return (
                      <GamingRelevantTab
                        key={idx}
                        tabImage={e.tabImage}
                        paragraph={e.paragraph}
                        button1={e.button1}
                        button2={e.button2}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="mw-lg:hidden">
                <Advertise />
              </div>
            </div>
          ) : openTab === 2 ? (
            <div className="mb-6 mw-lg:mt-[0px]">
              <div className="for-you-section  pt-[51px]  mw-md:pt-[32px]">
                <div className="">
                  <h1 className="text-[#fff]">
                    <EmptyTabs />
                  </h1>
                </div>
              </div>
            </div>
          ) : openTab === 3 ? (
            <div className="for-you-section  pt-[51px]  mw-md:pt-[32px]">
              <h1 className="text-[#fff]">
                <EmptyTabs />
              </h1>
            </div>
          ) : openTab === 4 ? (
            <div className="for-you-section  pt-[51px]  mw-md:pt-[32px]">
              <h1 className="text-[#fff]">
                <EmptyTabs />
              </h1>
            </div>
          ) : (
            ""
          )}

          {/* <div className="mb-6 mw-lg:mt-[0px] ">
            <div className="tab-content tab-space w-full  h-full  	">
              <div
                className={
                  openTab === 1 ? " rounded-lg	 overflow-hidden" : "hidden"
                }
                id="link1"
              >
                <div className="flex justify-between mt-[47px]  relative">
                  <div className="w-[85%] mw-lg:w-[100%]">
                    <GamingFilter />
                    <div className="flex flex-wrap justify-between ">
                      {tabData.map((e, idx) => {
                        return (
                          <GamingRelevantTab
                            key={idx}
                            tabImage={e.tabImage}
                            paragraph={e.paragraph}
                            button1={e.button1}
                            button2={e.button2}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className="mw-lg:hidden">
                    <Advertise />
                  </div>
                </div>
              </div>
            </div>
            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
              <div className="for-you-section  pt-[51px]  mw-md:pt-[32px]">
                <div className="">
                  <h1 className="text-[#fff]">
                    <EmptyTabs />
                  </h1>
                </div>
              </div>
            </div>
            <div className={openTab === 3 ? "block" : "hidden"} id="link3">
              <div className="for-you-section  pt-[51px]  mw-md:pt-[32px]">
                <div className="">
                  <h1 className="text-[#fff]">
                    <EmptyTabs />
                  </h1>
                </div>
              </div>
            </div>
            <div className={openTab === 4 ? "block" : "hidden"} id="link4">
              <div className="for-you-section  pt-[51px]  mw-md:pt-[32px]">
                <div className=""></div>

                <h1 className="text-[#fff]">
                  <EmptyTabs />
                </h1>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default GamingRelevantTabSection;
