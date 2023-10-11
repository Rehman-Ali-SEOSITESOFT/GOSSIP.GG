"use client";
import React, { useState } from "react";
import LiveMatchAllTab from "../LiveMatchAllTab";
import LiveMatchEsportEventTab from "../LiveMatchEsportEventTab";

const InnerTabsLiveMatches = () => {
  const [openTab, setOpenTab] = useState(0);

  const menulist = [
    { name: "all", data: <LiveMatchAllTab /> },
    { name: "Esports Events", data: <LiveMatchEsportEventTab /> },
  ];
  const hanldeOpenTab = (e: number) => {
    setOpenTab(e);
  };
  return (
    <>
      <section>
        <div className="py-[20px]">
          <div className="w-full text-center">
            <ul className="flex max-w-[460px] mw-sm:max-w-[300px]  w-full m-auto justify-center items-center">
              {menulist.map((el, index) => {
                return (
                  <li key={index} className="mr-[32px]">
                    <a
                      className={
                        "cursor-pointer capitalize montserratfont block  transition-all	duration-75 leading-loose	 mw-sm:leading-[18px] " +
                        (openTab === index
                          ? " scale-[1.1] dark:text-brand text-brandDark2 font-bold border-b-2 dark:border-brand border-brandDark2  mw-sm:text-base  mw-sm:font-semibold text-[18px]"
                          : "text-[16px] mw-sm:text-sm	 font-normal dark:text-brandLightOpacity100 text-brandDark2 ")
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
        </div>
        {menulist.map((el, i) => {
          return (
            openTab === i && (
              <div
                className="max-w-[1440px] w-full m-auto  tabtech border-t border-grayCard dark:border-brandLightOpacity10 p-0"
                key={i}
              >
                {el.data}
              </div>
            )
          );
        })}
      </section>
    </>
  );
};

export default InnerTabsLiveMatches;
