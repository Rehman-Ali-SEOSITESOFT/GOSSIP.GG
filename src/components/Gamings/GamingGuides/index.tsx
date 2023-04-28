"use client";
import SectionSaprator from "@/components/SecSaprator";
import React from "react";
import Review from "../Reviews";
import ViewMore from "../ViewMore/ViewMore";
import GamingFeatures from "../GamingFeatures/GamingFeatures";

const index = () => {
  return (
    <>
      <section className="gaming_guide_wrapper">
        <div className="global-section-width">
          <div className="2xl:container">
            <div className="feature_main_wrapper pt-[52px] mw-sm:pt-[20px]">
              <SectionSaprator title="Features" />
              <GamingFeatures />
              <div className="mt-[16px] mw-sm:mt-[4px]">
                <ViewMore />
              </div>
            </div>
            <div className="pt-[52px] mw-sm:pt-[20px] ">
              <SectionSaprator title="Reviews" />
            </div>
            <div className="reviews_main_wrapper mw-sm:mt-[-12px]">
              <Review />
            </div>
            <div className="view pb-[120px] mw-sm:pb-[40px]">
              <ViewMore />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
