import Image from "next/image";
import React, { useState } from "react";
import leftside from "../../assets/images/hero/hero-section-left-side.png";
import book1 from "../../assets/images/hero/right-side-01.png";
import book2 from "../../assets/images/hero/right-side-012.png";
import book3 from "../../assets/images/hero/right-side-03.png";
const HeroSection = () => {
  return (
    <section className="herosection pt-3 mw-md:pt-11	">
      <div className="global-section-width">
        <div className="2xl:container">
          <div className="flex mw-lg:flex-col">
            <div className="w-7/12 mw-xl:w-1/2 mw-lg:w-full ">
              <div className="left-side ">
                <Image src={leftside} alt="demo" />
                <div className="overlay"></div>
                <h2 className="title text-brandLightOpacity100">
                  JONATHAN Stays Loyal to BGMI, No Plans to Shift to New State
                  Mobile Yet
                </h2>
              </div>
            </div>
            <div className="w-5/12 mw-xl:w-1/2  mw-lg:w-full">
              <div className="right-side pl-8 mx-14:pl-6 mw-lg:pl-0 mw-lg:py-5">
                <div className="single-item mw-sm:border-l-brand flex">
                  <div className="image-wrapper ">
                    <Image src={book1} alt="demo " />
                  </div>
                  <div className="desc-wrapper">
                    <h3 className="text-base font-bold text-brandDark2 cu_font_family dark:text-brandLightOpacity100">
                      MR Luna has announced he is stepping down as CEO
                    </h3>
                    <p className="text-xs text-textColor roboto_slab py-2.5 mx-14:py-2 mw-sm:hidden dark:text-brandLightOpacity90">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when...
                    </p>
                    <small className="text-textColorGray dark:text-brandLightOpacity70 text-xs">
                      <span>
                        {" "}
                        <i>3 hrs ago</i>{" "}
                      </span>{" "}
                      <span className="line border-l border-l-textColorGray dark:border-l-brandLightOpacity70	">
                        5 min read
                      </span>
                    </small>
                  </div>
                  <div className="thumnail-wrapper">
                    <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard dark:text-brandLightOpacity100 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity30  hover:bg-grayCardHover cursor-pointer rounded-3xl">
                      <i className="fa-regular fa-bookmark "></i>{" "}
                    </div>
                  </div>
                </div>
                <div className="single-item mw-sm:border-l-brand flex">
                  <div className="image-wrapper ">
                    <Image src={book2} alt="demo " />
                  </div>
                  <div className="desc-wrapper">
                    <h3 className="text-base font-bold text-brandDark2 cu_font_family dark:text-brandLightOpacity100">
                      Esports Gambling Report, January 2023 is a big...
                    </h3>
                    <p className="text-xs text-textColor roboto_slab py-2.5 mx-14:py-2 mw-sm:hidden dark:text-brandLightOpacity90">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when...
                    </p>
                    <small className="text-textColorGray dark:text-brandLightOpacity70 text-xs">
                      <span>
                        {" "}
                        <i>3 hrs ago</i>{" "}
                      </span>{" "}
                      <span className="line border-l border-l-textColorGray dark:border-l-brandLightOpacity70	">
                        5 min read
                      </span>
                    </small>
                  </div>
                  <div className="thumnail-wrapper">
                    <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard dark:text-brandLightOpacity100 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity30  hover:bg-grayCardHover cursor-pointer rounded-3xl">
                      <i className="fa-regular fa-bookmark "></i>{" "}
                    </div>
                  </div>
                </div>
                <div className="single-item mw-sm:border-l-brand flex">
                  <div className="image-wrapper ">
                    <Image src={book3} alt="demo " />
                  </div>
                  <div className="desc-wrapper">
                    <h3 className="text-base font-bold text-brandDark2 cu_font_family dark:text-brandLightOpacity100">
                      Bayes Esports appoints York Scheunemann as COO
                    </h3>
                    <p className="text-xs text-textColor roboto_slab py-2.5 mx-14:py-2 mw-sm:hidden dark:text-brandLightOpacity90">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when...
                    </p>
                    <small className="text-textColorGray dark:text-brandLightOpacity70 text-xs">
                      <span>
                        {" "}
                        <i>3 hrs ago</i>{" "}
                      </span>{" "}
                      <span className="line border-l border-l-textColorGray dark:border-l-brandLightOpacity70	">
                        5 min read
                      </span>
                    </small>
                  </div>
                  <div className="thumnail-wrapper">
                    <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard dark:text-brandLightOpacity100 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity30  hover:bg-grayCardHover cursor-pointer rounded-3xl">
                      <i className="fa-regular fa-bookmark "></i>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
