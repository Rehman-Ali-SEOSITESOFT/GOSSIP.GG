"use client";
import Trending from "@/components/Trending/Index";
import React, { useEffect, useState } from "react";
import image1 from "../../assets/rewards/one.png";
import image2 from "../../assets/rewards/two.png";
import image3 from "../../assets/rewards/three.png";
import Image from "next/image";
import HeroSection from "@/components/Rewards/HeroSection/HeroSection";
import PreviousGiveAways from "@/components/Rewards/PreviousGiveAways";
import QuizHistory from "@/components/Rewards/QuizHistory";
import Faqs from "@/components/Rewards/Faqs/Faqs";
import style from "./Rewards.module.css";
import CountDownTimer from "@/components/Rewards/CountDownTimer/CountDownTimer";
import { useTheme } from "next-themes";
const Rewards = () => {
  const { theme } = useTheme();

  const [isDarkTheme, setIsDarkTheme] = useState<string>("");
  useEffect(() => {
    setIsDarkTheme(theme === "dark" ? "dark" : "light");
  }, [theme]);
  return (
    <>
      <section className="rewards_page_mian_wrapper">
        <div className="global-section-width p-0 mw-lg:bg-bodycolor mw-lg:dark:bg-brandDark2 mw-lg:z-[8]">
          <div className="2xl-container">
            <div
              className={`${
                isDarkTheme === "dark"
                  ? style.quiz_timing_wrapper
                  : style.light_quiz_timing_wrapper
              } max-w-[100%] overflow-x-auto `}
            >
              <div
                className={`${style.scrolling_} bg-grayCard rounded-[20px] pb-[9px] pt-[9px] pl-[22px] pr-[22px]  mt-[7px] mb-[10px] flex w-[1280px] justify-start flex-nowrap justify-between items-center mw-md:mt-[10px] border border-brandLightOpacity50 dark:border-none`}
              >
                <div>
                  <p className="text-brand text-sm font-bold tracking-[1.4px] uppercase montserratfont mw-sm4:text-[12px]">
                    Daily Quiz{" "}
                    <span className="text-[14px] font-semibold mw-sm4:text-[12px] capitalize">
                      In <CountDownTimer />{" "}
                      <i className="fa-solid fa-angle-right"></i>
                      <i className="fa-solid fa-angle-right"></i>
                    </span>
                  </p>
                </div>
                <div className="ml-[15px]">
                  <p className="text-[12px] font-semibold	dark:text-[#E5E5E5] montserratfont mw-sm4:text-[12px]">
                    Play everyday between 5 p.m. and 8 p.m. and stand a chance
                    to win the latest Samsung phone and other exciting prizes!
                  </p>
                </div>
                <div className="ml-[50px]">
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
                      <Image
                        src={image3}
                        alt=""
                        className="w-[24px] h-[24px] "
                      />
                    </div>
                    <div className="ml-[5px]">
                      <p className="montserratfont text-[12px] font-normal text-brandDark2 dark:text-[#E5E5E5]">
                        and 54 others are playing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 mt-[6px] mw-md:pt-[10px] mw-md:mt-[0px] mw-md:pb-[0px]">
          <Trending />
        </div>
        <HeroSection />
        <PreviousGiveAways />
        <QuizHistory />
        <Faqs />
      </section>
    </>
  );
};

export default Rewards;
