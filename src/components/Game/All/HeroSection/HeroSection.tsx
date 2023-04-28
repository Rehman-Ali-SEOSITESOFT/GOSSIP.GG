import Image from "next/image";
import React, { useState, useEffect } from "react";
import leftside from "../../../../assets/images/hero/hero-section-left-side.png";
import book1 from "../../../../assets/images/hero/right-side-01.png";
import book2 from "../../../../assets/images/hero/right-side-012.png";
import book3 from "../../../../assets/images/hero/right-side-03.png";
import bookmark from "../../../../assets/gaming/bookmark.png";
import styles from "./styles.module.css";
import { useTheme } from "next-themes";
const HeroSection = () => {
  interface List {
    name: string;
    picture: any;
  }

  const { theme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState<string>("");
  useEffect(() => {
    setIsDarkTheme(theme === "dark" ? "dark" : "light");
  }, [theme]);
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

  const [item2, setItem2] = useState<List[]>([
    {
      name: "Bayes Esports appoints York Scheunemann as COO of reputed gaming company      ",
      picture: book1,
    },
    {
      name: "Bayes Esports appoints York Scheunemann as COO of reputed gaming company      ",
      picture: book2,
    },
  ]);
  return (
    <>
      <section className={`${styles.mainGameAllWrapper}`}>
        <div className="global-section-width  ">
          <div className="2xl:container pt-[12px]">
            <div className="flex mw-lg:flex-col">
              <div className="w-7/12 mw-xl:w-1/2 mw-11:h-[420px]  mw-sm:h-[280px] mw-sm3:h-[215px] mw-lg:w-full  ">
                <div
                  className={`${styles.left_side} h-[450px]  mw-11:h-[420px] mw-sm:h-[280px] mw-sm3:h-[215px] relative rounded	overflow-hidden`}
                >
                  <Image
                    src={leftside}
                    className="w-full h-full object-cover"
                    alt="demo"
                  />
                  <div className={styles.overlay}></div>
                  <h2 className={`${styles.title} text-brandLightOpacity100`}>
                    JONATHAN Stays Loyal to BGMI, No Plans to Shift to New State
                    Mobile Yet
                  </h2>
                </div>
              </div>
              <div className="w-5/12 mw-xl:w-1/2  mw-11:h-[420px]  mw-lg:w-full mw-lg:h-auto">
                <div className="mw-lg:hidden right-side pl-8 mx-14:pl-6 mw-lg:pl-0 mw-lg:py-5 h-[450px] mw-11:h-[420px]  mw-lg:h-auto flex flex-col justify-between ">
                  {item.map((elem, index) => {
                    return (
                      <div
                        className={` mw-sm:border-l-brand flex `}
                        key={index}
                      >
                        <div className="max-w-[200px] w-full mw-11:max-w-[170px] mw-11:h-[130px]">
                          <Image
                            src={elem.picture}
                            alt="demo "
                            className="h-full object-cover"
                          />
                        </div>
                        <div className="desc_wrapper pr-5	pl-3.5	mw-11:pr-3.5	mw-11:h-[130px] 	">
                          <h3 className="text-base font-bold  leading-5	 text-brandDark2 montserratfont dark:text-brandLightOpacity100 mw-11:text-[15px] mw-lg:text-base ">
                            
                            {elem.name}
                          </h3>

                          <div className="tags flex pt-3.5 pb-3 montserratfont">
                            <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                              News
                            </div>
                            <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10    hover:text-brandDark2 dark:hover:bg-brandLightOpacity20    dark:hover:text-brandLightOpacity100    dark:text-brandLightOpacity70">
                              Esports
                            </div>
                          </div>
                          <small className="text-textColorGray dark:text-brandLightOpacity70 text-xs mw-sm3:text-[10px]">
                            <span className="montserratfont">
                              
                              <i>3 hrs ago</i>
                            </span>
                            <span
                              className={`border-l border-l-textColorGray pl-2 ml-2 border-textColorGray   dark:border-l-brandLightOpacity70   `}
                            >
                              5 min read
                            </span>
                          </small>
                        </div>
                        <div className={"thumnail_wrapper"}>
                          <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard dark:text-brandLightOpacity100 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20  hover:bg-borderEditProfile cursor-pointer rounded-3xl">
                            <Image
                              src={bookmark}
                              className=" brightness-0 dark:brightness-200"
                              alt="book"
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="hidden mw-lg:flex  right-side pl-8 mx-14:pl-6 mw-lg:pl-0 mw-lg:py-[28px] h-[450px] mw-11:h-[420px]  mw-lg:h-auto mw-lg:flex-row mw-sm:flex-col  mw-lg:h-auto  justify-between">
                  {item2.map((elem, index) => {
                    return (
                      <div
                        className={` mw-sm:border-l-2 pl-2 mw-sm:border-l-brand flex  mw-lg:w-[49%] mw-sm:w-full ${
                          index === 0 ? "mw-sm:mb-7" : "mb-0"
                        }`}
                        key={index}
                      >
                        <div className="max-w-[200px] w-full mw-11:max-w-[170px] mw-11:h-[130px] mw-lg:min-w-[110px] mw-lg:max-w-[110px] mw-sm1:min-w-[100px] mw-sm1:min-w-[100px] mw-sm:h-[100px]">
                          <Image
                            src={elem.picture}
                            alt="demo "
                            className="h-full object-cover"
                          />
                        </div>
                        <div className="desc_wrapper pr-5	pl-3.5	mw-11:pr-3.5	mw-11:h-[130px] mw-sm:h-[100px]	">
                          <h3 className="text-base font-bold  leading-5	 text-brandDark2 montserratfont dark:text-brandLightOpacity100 mw-11:text-[15px] mw-lg:text-base hero-section-tech-title mw-sm:text-sm mw-sm:leading-[17px]">
                            
                            {elem.name}
                          </h3>
                          <div className="tags flex pt-3.5 pb-3 mw-sm:pt-2.5 mw-sm:pb-2    montserratfont">
                            <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                              News
                            </div>
                            <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10    hover:text-brandDark2 dark:hover:bg-brandLightOpacity20    dark:hover:text-brandLightOpacity100    dark:text-brandLightOpacity70">
                              Esports
                            </div>
                          </div>
                          <small className="text-textColorGray dark:text-brandLightOpacity70 text-xs mw-sm3:text-[10px]">
                            <span className="montserratfont">
                              
                              <i>3 hrs ago</i>
                            </span>
                            <span
                              className={`border-l border-l-textColorGray pl-2 ml-2 border-textColorGray   dark:border-l-brandLightOpacity70   `}
                            >
                              5 min read
                            </span>
                          </small>
                        </div>
                        <div className={"thumnail_wrapper"}>
                          <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard dark:text-brandLightOpacity100 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20  hover:bg-borderEditProfile cursor-pointer rounded-3xl">
                            <Image
                              src={bookmark}
                              className=" brightness-0 dark:brightness-200"
                              alt="book"
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
    </>
  );
};

export default HeroSection;
