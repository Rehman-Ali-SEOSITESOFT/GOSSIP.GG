import React, { useState } from "react";
import LatestNews from "@/components/LatestNews/Index";
import AllHeroSection from "./HeroSection";
import AllReviews from "./Reviews";
import TechFeature from "./Feature";
import AllDeail from "./Deails";
const MainTech = () => {
  return (
    <section className="MainTech mt-[-5px] ">
      <AllHeroSection />
      <div className="latest-news">
        <LatestNews />
        <div className="global-section-width">
          <div className="2xl:container">
            <div className="flex pt-2 ">
              <div className="w-full">
                <a
                  href="#"
                  className="hover:text-[#000000] dark:hover:text-[white] text-textColorGray dark:text-brandLightOpacity70 montserratfont font-base  leading-5  mw-sm3:text-[10px]"
                >
                  View more <span>&gt;</span>
                  <span>&gt;</span>
                  <span>&gt;</span>
                </a>
              </div>{" "}
            </div>
          </div>{" "}
        </div>
      </div>
      <AllReviews />
      {/* <TechFeature /> */}
      <AllDeail />
    </section>
  );
};

export default MainTech;
