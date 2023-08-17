"use client";
import Trending from "@/components/Trending/Index";
import React from "react";
import image1 from "../../assets/rewards/one.png";
import image2 from "../../assets/rewards/two.png";
import image3 from "../../assets/rewards/three.png";
import Image from "next/image";
import HeroSection from "@/components/Rewards/HeroSection/HeroSection";
import PreviousGiveAways from "@/components/Rewards/PreviousGiveAways";

const page = () => {
  return (
    <>
      <section className="rewards_page_mian_wrapper">
        <div className="global-section-width border-b border-grayCard dark:border-brandLightOpacity10 p-0 mw-lg:bg-bodycolor mw-lg:dark:bg-brandDark2 mw-lg:sticky top-[71px] mw-sm3:top-[62px] mw-lg:z-[8]	">
          <div className="2xl-container">
            <div className="bg-brandLightOpacity10 rounded-[20px] pb-[9px] pt-[9px] pl-[22px] pr-[22px] flex justify-between	items-center mt-[7px] mb-[32px]">
              <p className="text-brand text-sm font-bold tracking-[1.4px] uppercase montserratfont">
                Daily Quiz <span> In 2:45:30 </span>
              </p>
              <p className="text-[12px] font-semibold	text-whitecolor montserratfont">
                Play everyday between 5 p.m. and 8 p.m. and stand a chance to
                win the latest Samsung phone and other exciting prizes!
              </p>
              <div className="flex items-center">
                <div className="flex items-center relative">
                  <Image
                    src={image1}
                    alt=""
                    className="w-[24px] h-[24px] absolute left-[-28px] z-[1]"
                  />
                  <Image
                    src={image2}
                    alt=""
                    className="w-[24px] h-[24px] absolute left-[-12px]"
                  />
                  <Image src={image3} alt="" className="w-[24px] h-[24px] " />
                </div>
                <div className="ml-[5px]">
                  <p className="montserratfont text-[12px] font-normal text-[#E5E5E5]">
                    and 54 others are playing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4">
          <Trending />
        </div>
        <HeroSection />
        <PreviousGiveAways />
      </section>
    </>
  );
};

export default page;
