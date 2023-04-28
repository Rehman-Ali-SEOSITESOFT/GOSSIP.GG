import React, { useState, useEffect } from "react";
import style from "./latestnew.module.css";
import new1 from "../../assets/latest-news/news1.png";
import new2 from "../../assets/latest-news/news2.png";
import new3 from "../../assets/latest-news/news3.png";
import new4 from "../../assets/latest-news/news4.png";
import new5 from "../../assets/latest-news/news5.png";
import new6 from "../../assets/latest-news/news6.png";
import boomkark from "../../assets/latest-news/bookmark.png";
import Image from "next/image";
import SectionSaprator from "../SecSaprator";
import { useTheme } from "next-themes";

const LatestNews = () => {
  interface List {
    name: string;
    picture: any;
  }
  const item: List[] = [
    {
      name: "demo ",
      picture: new1,
    },
    {
      name: "demo ",
      picture: new2,
    },
    {
      name: "demo ",
      picture: new3,
    },
    {
      name: "demo ",
      picture: new4,
    },
    {
      name: "demo ",
      picture: new5,
    },
    {
      name: "demo ",
      picture: new6,
    },
  ];
  const [items, setItems] = useState(item);
  const { theme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState<string>("");
  useEffect(() => {
    setIsDarkTheme(theme === "dark" ? "dark" : "light");
  }, [theme]);
  return (
    <section className={style.latest_news_page}>
      <div className="global-section-width">
        <div className="pt-12 mw-lg:pt-7 mw-sm:pt-[16px] ">
          <SectionSaprator title="Latest News" />
        </div>
        <div className="2xl:container border border-grayCard rounded dark:border-brandLightOpacity10 mw-sm:broder-0 mw-sm:hidden">
          <div className="flex flex-wrap pt-5 pb-5  bg-white rounded dark:bg-brandDark1 mw-lg:hidden">
            {items.map((elem, index) => {
              return (
                <div
                  className={`w-1/3 ${
                    index === 0 || index === 1 || index === 2 ? "pt-0" : "pt-5"
                  } pl-5	 pr-5	 pb-0		  mw-12:w-1/3 mw-lg:w-full flex    
                  ${
                    index === 2 || index === 5 ? "border-r-0" : "border-r "
                  } border-grayCard  dark:border-brandLightOpacity10 ${
                    index === 2
                      ? "mw-12:border-r-grayCard mw-12:dark:border-r-brandLightOpacity10"
                      : ""
                  }  `}
                  key={index}
                >
                  <div
                    className={` ${
                      index === 3 || index === 4 || index === 5
                        ? "border-b-0 pb-[0]"
                        : "border-b pb-[20px]"
                    } rounded-sm border-grayCard  mw-12:border-b-grayCard  dark:border-brandLightOpacity10 max-w-[112px] min-w-[112px] min-h-[127px] mw-11:min-h-[90px]  mw-11:min-w-[90px] h-full  `}
                  >
                    <Image
                      src={elem.picture}
                      alt="Latest new"
                      className="rounded-sm w-full h-full object-cover"
                    />
                  </div>

                  <div
                    className={`px-[16px]  border-grayCard dark:border-brandLightOpacity10  ${
                      index === 3 || index === 4 || index === 5
                        ? "border-b-0 pb-[0]"
                        : "border-b pb-[20px]"
                    }`}
                  >
                    <h4
                      className={`${style.title_overHidden} text-base leading-5 text-brandDark2 font-bold montserratfont dark:text-brandLightOpacity100 `}
                    >
                      Bayes Esports appoints York Scheunemann as COO of reputed
                      gaming...
                    </h4>
                    <div className="tags flex pt-3.5 pb-3 montserratfont">
                      <div
                        className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100 
                        hover:text-brandDark2
                      dark:text-brandLightOpacity70"
                      >
                        News
                      </div>
                      <div
                        className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 
                        hover:text-brandDark2 dark:hover:bg-brandLightOpacity20 
                      dark:hover:text-brandLightOpacity100 
                      dark:text-brandLightOpacity70"
                      >
                        Esports
                      </div>
                    </div>
                    <small className="text-textColorGray dark:text-brandLightOpacity70 text-xs montserratfont">
                      <span>
                        <i>3 hrs ago</i>
                      </span>
                      <span className="border-l border-l-textColorGray pl-2 ml-2 border-textColorGray dark:border-l-brandLightOpacity10">
                        5 min read
                      </span>
                    </small>
                  </div>
                  <div
                    className={`border-grayCard  dark:border-brandLightOpacity10 ${
                      index === 3 || index === 4 || index === 5
                        ? "border-b-0"
                        : "border-b "
                    } `}
                  >
                    <div className="bookmark text-textColorGray hover:text-textColor  dark:text-brandLightOpacity70 dark:hover:text-brandLightOpacity100 w-[12px]">
                      <Image
                        src={boomkark}
                        alt="book"
                        className=" brightness-0 opacity-80 hover:opacity-100  dark:brightness-200"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="hidden mw-sm:hidden flex flex-wrap pt-5 pb-5  bg-white rounded dark:bg-brandDark1 mw-lg:flex ">
            {items.slice(0, 4).map((elem, index) => {
              return (
                <div
                  // p-5
                  className={`w-1/3  mw-lg:w-1/2 flex ${style.responsive} ${
                    index === 0 || index === 1 ? "pt-0" : "pt-5"
                  } border-r border-grayCard  dark:border-brandLightOpacity10
                    px-[20px] h-[135px]`}
                  key={index}
                >
                  <div
                    className={`${style.news_img_wrap}  rounded-sm ${
                      index === 0 || index === 1
                        ? "border-b pb-[15px]"
                        : "border-b-0"
                    } border-grayCard  mw-12:border-grayCard  dark:border-brandLightOpacity10 `}
                  >
                    <Image
                      src={elem.picture}
                      alt="Latest new"
                      className="rounded-sm min-h-[120px] h-full w-full max-w-[120px]"
                    />
                  </div>
                  <div
                    className={`${
                      style.news_desc
                    } border-grayCard dark:border-brandLightOpacity10 ${
                      index === 0 || index === 1
                        ? "border-b pb-[15px]"
                        : "border-b-0"
                    }`}
                  >
                    <h4
                      className={`${style.title_overHidden} text-base leading-5 text-brandDark2 font-bold montserratfont dark:text-brandLightOpacity100`}
                    >
                      Bayes Esports appoints York Scheunemann as COO of reputed
                      gaming...
                    </h4>
                    <div className="tags flex py-4 montserratfont">
                      <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity30 dark:text-brandLightOpacity70">
                        News
                      </div>
                      <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity30 dark:text-brandLightOpacity70">
                        Esports
                      </div>
                    </div>
                    <small className="text-textColorGray dark:text-brandLightOpacity70 text-xs montserratfont">
                      <span>
                        <i>3 hrs ago</i>
                      </span>
                      <span
                        className="montserratfont border-l border-l-textColorGray pl-2 ml-2 border-textColorGray
              dark:border-l-brandLightOpacity10"
                      >
                        5 min read
                      </span>
                    </small>
                  </div>
                  <div
                    className={`${style.thumnail_img} ${
                      index === 2 || index === 3 ? "border-b-0" : "border-b"
                    } border-grayCard  dark:border-brandLightOpacity10`}
                  >
                    <div className="bookmark text-textColorGray hover:text-textColor  dark:text-brandLightOpacity70 dark:hover:text-brandLightOpacity100  w-[12px]">
                      <Image
                        src={boomkark}
                        alt="bookmkar"
                        className=" brightness-0 opacity-80 hover:opacity-100  dark:brightness-200"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="2xl:container ">
          <div className="hidden mw-sm:flex flex flex-wrap     ">
            {items.slice(0, 2).map((elem, index) => {
              return (
                <div
                  // p-5
                  className={`w-full rounded flex ${style.mobile_responsive} bg-white dark:bg-brandDark1 mb-5 border border-grayCard dark:border-brandLightOpacity10 p-3 `}
                  key={index}
                >
                  <div className={`${style.news_img_wrap}  rounded-sm `}>
                    <Image
                      src={elem.picture}
                      alt="Latest new"
                      className="rounded-sm"
                    />
                  </div>
                  <div className={`${style.news_desc} pl-3`}>
                    <h4 className="text-sm leading-4 text-brandDark2 font-semibold montserratfont dark:text-brandLightOpacity100 tech-feature-dec">
                      Bayes Esports appoints York Scheunemann as COO of reputed
                      gaming...
                    </h4>
                    <div className="tags flex py-3 montserratfont">
                      <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                        News
                      </div>
                      <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                        Esports
                      </div>
                    </div>
                    <div className="flex justify-between items-end">
                      <small className="text-textColorGray dark:text-brandLightOpacity70 text-xs montserratfont">
                        <span>
                          <i>3 hrs ago</i>
                        </span>
                        <span className="montserratfont border-l border-l-textColorGray pl-2 ml-2 order-textColorGray dark:border-l-brandLightOpacity10 ">
                          5 min read
                        </span>
                      </small>
                      <div className={`${style.thumnail_img}`}>
                        <div className="bookmark text-textColorGray hover:text-textColor  dark:text-brandLightOpacity70 dark:hover:text-brandLightOpacity100">
                          <Image
                            src={boomkark}
                            alt="img"
                            className=" brightness-0 opacity-80 hover:opacity-100  dark:brightness-200"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
