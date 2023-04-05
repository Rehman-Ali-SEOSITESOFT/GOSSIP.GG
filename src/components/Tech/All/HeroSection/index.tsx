import React, { useState } from "react";
import leftside from "../../../../assets/tech/hero-bg.png";
import book1 from "../../../../assets/tech/1.png";
import book2 from "../../../../assets/tech/2.png";
import book3 from "../../../../assets/tech/3.png";
import Image from "next/image";
import styles from "./style.module.css";

const AllHeroSection = () => {
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
    <>
      <div className="global-section-width  ">
        <div className="2xl:container pt-12">
          <div className="flex mw-lg:flex-col">
            <div className="w-7/12 mw-xl:w-1/2 mw-lg:w-full ">
              <div
                className={`left_side h-[450px] mx-14:h-[400px] mw-sm:h-[350px] mw-sm3:h-[300px] relative rounded	overflow-hidden`}
              >
                <Image
                  src={leftside}
                  className="w-full h-full object-cover rounded	"
                  alt="demo"
                />
                <div
                  className={`${styles.overlayallHeo} absolute inset-0 rounded	`}
                ></div>
                <h2
                  className={` montserratfont font-extrabold	text-brandLightOpacity100 text-[22px] leading-7 absolute left-[25px] right-[25px] bottom-[25px]`}
                >
                  JONATHAN Stays Loyal to BGMI, No Plans to Shift to New State
                  Mobile Yet
                </h2>
              </div>
            </div>
            <div className="w-5/12 mw-xl:w-1/2  mw-lg:w-full">
              <div className="right-side pl-8 mx-14:pl-6 mw-lg:pl-0 mw-lg:py-5 h-[450px] mx-14:h-[400px]  mw-lg:h-auto flex flex-col justify-between">
                {item.map((elem, index) => {
                  return (
                    <div className={` mw-sm:border-l-brand flex `} key={index}>
                      <div className="w-full max-w-[200px]">
                        <Image
                          src={elem.picture}
                          alt="demo "
                          className="h-full object-cover"
                        />
                      </div>
                      <div className="desc_wrapper pr-5	pl-3.5		">
                        <h3 className="text-base font-bold  leading-5	 text-brandDark2 montserratfont dark:text-brandLightOpacity100 mw-11:h-[40px] mw-lg:h-auto overflow-hidden ">
                          {" "}
                          {elem.name}{" "}
                        </h3>
                        {/* <p className="text-xs text-textColor robotoslub py-2.5 mx-14:py-2 mw-sm:hidden dark:text-brandLightOpacity90   overflow-hidden">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when...
                        </p> */}
                        <div className="tags flex pt-3.5 pb-3 montserratfont">
                          <div className="text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:text-brandLightOpacity70">
                            News
                          </div>
                          <div className="text-textColorGray bg-grayCard px-2 py-1.5 rounded text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:text-brandLightOpacity70">
                            Esports
                          </div>
                        </div>
                        <small className="text-textColorGray dark:text-brandLightOpacity70 text-xs mw-sm3:text-[10px]">
                          <span className="montserratfont">
                            {" "}
                            <i>3 hrs ago</i>{" "}
                          </span>{" "}
                          <span
                            className={`border-l border-l-textColorGray pl-2 ml-2 border-textColorGray   dark:border-l-brandLightOpacity70   `}
                          >
                            5 min read
                          </span>
                        </small>
                      </div>
                      <div className={"thumnail_wrapper"}>
                        <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard dark:text-brandLightOpacity100 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20  hover:bg-grayCardHover cursor-pointer rounded-3xl">
                          <i className="fa-regular fa-bookmark "></i>{" "}
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
    </>
  );
};

export default AllHeroSection;
