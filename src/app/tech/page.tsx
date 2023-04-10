"use client";
import MainTech from "@/components/Tech/All";
import DeailTech from "@/components/Tech/Deals";
import FeaturesTech from "@/components/Tech/Features";
import NewsTech from "@/components/Tech/News";
import ReviewTech from "@/components/Tech/Reviews";
import Trending from "@/components/Trending/Index";
import React, { useState } from "react";

const Page = () => {
  const [openTab, setOpenTab] = useState(0);
  const menulist = [
    { name: "all", data: <MainTech /> },
    { name: "News", data: <NewsTech /> },
    { name: "reviews", data: <ReviewTech /> },
    { name: "features", data: <FeaturesTech /> },
    { name: "deals", data: <DeailTech /> },
  ];
  const hanldeOpenTab = (e: number) => {
    setOpenTab(e);
  };
  return (
    <section className="tech-page relative">
      <div className="global-section-width border-b border-grayCard dark:border-brandLightOpacity10 p-0  ">
        <div className="2xl:container pt-[25px] pb-[30px] ">
          <div className="w-full text-center">
            <ul className="flex w-[460px] m-auto justify-between">
              {menulist.map((el, index) => {
                return (
                  <li key={index}>
                    <a
                      className={
                        "cursor-pointer capitalize montserratfont block  transition-all	duration-75 leading-loose	 " +
                        (openTab === index
                          ? "scale-[1.1] dark:text-brand text-brandDark2 font-bold border-b-2 dark:border-brand border-brandDark2"
                          : "text-base font-normal dark:text-brandLightOpacity100 text-brandDark2")
                      }
                      onClick={() => hanldeOpenTab(index)}
                      data-toggle="tab"
                      // href={`#link${index}`}
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
      </div>

      <div className="py-4">
        <Trending />
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
  );
};

export default Page;
