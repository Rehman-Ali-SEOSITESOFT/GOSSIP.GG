"use client";
import Image from "next/image";
import React, { useState } from "react";
import leftside from "../../assets/images/hero/hero-section-left-side.png";
import book1 from "../../assets/images/hero/right-side-01.png";
import book2 from "../../assets/images/hero/right-side-012.png";
import book3 from "../../assets/images/hero/right-side-03.png";
import bookmark from "../../assets/images/hero/bookmark.png";
import ClickBookmark from "../../assets/images/hero/click-markup.png";
// import styles from "./herosection.module.css"
const HeroSection = () => {
  interface List {
    name: string;
    picture: any;
  }
  const [item, setItem] = useState<List[]>([
    {
      name: "MR Luna has announced he is stepping down as CEO",
      picture: book1,
    },
    {
      name: "Esports Gambling Report, January 2023 is a big...",
      picture: book2,
    },
    {
      name: "Bayes Esports appoints York Scheunemann as COO",
      picture: book3,
    },
  ]);
  return (
    <section
      className={`pt-3 mw-md:pt-11 home-herosection mw-md:border-t border-grayCard  dark:border-brandLightOpacity10	`}
    >
      <div className="global-section-width">
        <div className="2xl:container">
          <div className="flex mw-lg:flex-col">
            <div className="w-7/12 mw-xl:w-1/2 mw-lg:w-full ">
              <div
                className={` left_side h-[450px] mx-14-h[420px] mw-sm:h-[280px] mw-sm3:h-[215px] relative rounded`}
              >
                <Image
                  src={leftside}
                  className="w-full h-full object-cover rounded"
                  alt="demo"
                />
                <div className="overlay rotate-180	rounded	 absolute inset-0"></div>
                <h2
                  className={`title montserratfont font-extrabold	 text-[22px] leading-[27px]  text-brandLightOpacity100  absolute left-[26px] bottom-[26px] right-[26px] mw-sm:text-base mw-sm:leading-5 mw-sm:fontbold mw-sm:left-[12px] mw-sm:bottom-[12px] mw-sm:right-[12px] `}
                >
                  JONATHAN Stays Loyal to BGMI, No Plans to Shift to New State
                  Mobile Yet
                </h2>
              </div>
            </div>
            <div className="w-5/12 mw-xl:w-1/2 block mw-lg:hidden mw-lg:w-full">
              <div className="right-side pl-8 mx-14:pl-6 mw-lg:pl-0 mw-lg:py-5 h-[450px] mx-14-h[420px]  mw-lg:h-auto flex flex-col justify-between">
                {item.map((elem, index) => {
                  return (
                    <div
                      className="single_item mw-sm:border-l-brand flex"
                      key={index}
                    >
                      <div className="image_wrapper w-full max-w-[200px] h-[132px] ">
                        <Image
                          src={elem.picture}
                          alt="demo "
                          className="h-full object-cover"
                        />
                      </div>
                      <div className="desc_wrapper pl-5	pr-3 mx-14:flex mx-14:justify-between mx-14:flex-col mx-14:h-full	">
                        <h3 className="text-base font-bold  leading-5	 text-brandDark2 montserratfont dark:text-brandLightOpacity100 mw-11:h-[40px] mw-lg:h-auto  ">
                          {elem.name}
                        </h3>
                        <p className="text-xs text-textColor robotoslub py-2.5 mx-14:py-2 mw-sm:hidden dark:text-brandLightOpacity90 hero-section-description ">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when...
                        </p>
                        <small className="text-textColorGray dark:text-brandLightOpacity70 text-xs mw-sm3:text-[10px]">
                          <span className="montserratfont">
                            <i>3 hrs ago</i>
                          </span>
                          <span className="border-l border-l-textColorGray pl-2 ml-2 border-textColorGray   dark:border-l-brandLightOpacity70   ">
                            5 min read
                          </span>
                        </small>
                      </div>
                      <div className="thumnail_wrapper">
                        <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard dark:text-brandLightOpacity100 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20  hover:bg-borderEditProfile cursor-pointer rounded-3xl">
                          {index === 2 ? (
                            <Image src={ClickBookmark} alt="boomark" />
                          ) : (
                            <Image
                              src={bookmark}
                              alt="boomark"
                              className=" brightness-0 dark:brightness-200"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-5/12 mw-xl:w-1/2 hidden mw-lg:block mw-lg:w-full">
              <div className="right-side pl-8 mx-14:pl-6 mw-lg:pl-0 mw-lg:py-5 h-[450px] mx-14-h[420px]  mw-lg:h-auto flex flex-col justify-between mw-lg:flex-row mw-sm:flex-col">
                {item.slice(0, 2).map((elem, index) => {
                  return (
                    <div
                      className={`single_item mw-sm:border-l-brand flex mw-lg:w-[48%] mw-sm:w-full mw-sm:border-l-2 mw-sm:dark:border-brand mw-sm:pl-2 ${
                        index === 0 ? "mb-7" : "mb-0"
                      }`}
                      key={index}
                    >
                      <div className="image_wrapper w-full max-w-[200px] h-[132px] mw-sm:h-[100px] mw-sm:w-full mw-sm:min-w-[100px] mw-sm:max-w-[100px]">
                        <Image
                          src={elem.picture}
                          alt="demo "
                          className="h-full object-cover rounded-sm	"
                        />
                      </div>
                      <div className="desc_wrapper pl-[12px]	pr-3 mx-14:flex mx-14:justify-between mx-14:flex-col h-[132px] mw-sm:h-auto	mw-sm:justify-start">
                        <h3 className="text-sm  font-bold  leading-[17px]	 text-brandDark2 montserratfont dark:text-brandLightOpacity100    ">
                          {elem.name}
                        </h3>

                        <small className="text-textColorGray dark:text-brandLightOpacity100  text-xs pt-2  ">
                          <span className="montserratfont text-xs	">
                            <i>3 hrs ago</i>
                          </span>
                          <span className="border-l border-l-textColorGray pl-2 ml-2 border-textColorGray  text-xs	  dark:border-l-brandLightOpacity100   ">
                            5 min read
                          </span>
                        </small>
                      </div>
                      <div className="thumnail_wrapper">
                        <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard dark:text-brandLightOpacity100 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20  hover:bg-borderEditProfile cursor-pointer rounded-3xl">
                          <Image
                            src={bookmark}
                            alt="boomark"
                            className=" brightness-0 dark:brightness-200"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
