"use client";
import React, { useState } from "react";
import new1 from "../../../assets/latest-news/news1.png";
import new2 from "../../../assets/latest-news/news2.png";
import new3 from "../../../assets/latest-news/news3.png";
import new4 from "../../../assets/latest-news/news4.png";

import Image from "next/image";
import boomkark from "../../../assets/latest-news/bookmark.png";

import bookmar from "../../../assets/artices-images/bookmark.png";
import comment from "../../../assets/artices-images/comment.png";
import shared from "../../../assets/artices-images/shared.png";

import trendingLight from "../../../assets/globals/trending-light.png";
import trend from "../../../assets/artices-images/trend.png";
const ReadMoreLikeThis = () => {
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
  ];
  const [items, setItems] = useState(item);
  return (
    <div className="w-full max-w-[1440px] pl-[100px]  pr-[54px] mx-13:pl-[70px] mx-13:pr-[50px] mw-xl:pl-[50px]  mw-xl:pr-[40px]  mw-lg:pl-[16px] mw-lg:pr-[16px]  m-auto py-[88px] mw-sm:py-[16px] ">
      <div className="flex justify-between w-full mw-lg:flex-col">
        <div className="max-w-[850px]  mw-lg:w-full">
          <h4 className="text-brandDark2 font-bold montserratfont text-lg dark:text-secSaprator w-auto min-w-fit  uppercase mw-sm:capitalize leading-[22px] pb-6 mw-sm:border-t dark:border-t-brandLightOpacity10 border-t-borderEditProfile mw-sm:mt-[16px] mw-sm:pt-[16px]">
            read more like this
          </h4>
          <div className="mw-sm:hidden flex flex-wrap pt-5 pb-5  bg-white rounded dark:bg-brandDark1 mw-lg:flex border  border-grayCard dark:border-brandLightOpacity10 ">
            {items.map((elem, index) => {
              return (
                <div
                  className={`w-1/2 ${
                    index === 0 || index === 1 ? "pt-0" : "pt-5"
                  } pl-5 pr-5 pb-0  flex ${
                    index === 1 || index === 3 ? "border-r-0" : "border-r "
                  } border-grayCard  dark:border-brandLightOpacity10`}
                  key={index}
                >
                  <div
                    className={` ${
                      index === 2 || index === 3
                        ? "border-b-0 pb-[0]"
                        : "border-b pb-[20px]"
                    } rounded-sm border-grayCard  mw-12:border-b-grayCard  dark:border-brandLightOpacity10 max-w-[112px] min-w-[112px] min-h-[127px] mw-11:min-h-[90px]  mw-11:min-w-[90px] h-full  `}
                  >
                    <Image
                      src={elem.picture}
                      alt="Latest new"
                      className="rounded-sm w-full h-full max-h-[127px] object-cover"
                    />
                  </div>
                  <div
                    className={`pl-[16px] pr-[14px]  border-grayCard dark:border-brandLightOpacity10 mw-11:pl-[14px] mw-11:pl-[10px] ${
                      index === 3 || index === 2
                        ? "border-b-0 pb-[0]"
                        : "border-b pb-[20px]"
                    }`}
                  >
                    <h4
                      className={` text-base leading-5 text-brandDark2 font-bold montserratfont dark:text-brandLightOpacity100 news-desc aticle-title `}
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
                    <small className="text-textColorGray dark:text-brandLightOpacity70 text-xs montserratfont block">
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
                      index === 3 || index === 2 ? "border-b-0" : "border-b "
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
          <div className="hidden mw-sm:flex flex flex-wrap     ">
            {items.slice(0, 2).map((elem, index) => {
              return (
                <div
                  // p-5
                  className={`w-full rounded flex bg-white dark:bg-brandDark1 mb-5 border border-grayCard dark:border-brandLightOpacity10 p-3 `}
                  key={index}
                >
                  <div className={` rounded-sm w-full max-w-[100px] `}>
                    <Image
                      src={elem.picture}
                      alt="Latest new"
                      className="rounded-sm"
                    />
                  </div>
                  <div className={` pl-3`}>
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
                      <div className={""}>
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
        <div className="w-full pl-[20px]  mw-lg:w-full mw-lg:pl-0">
          <h4 className="text-brandDark2 font-bold montserratfont text-lg dark:text-secSaprator w-auto min-w-fit  uppercase mw-sm:capitalize leading-[22px]  pb-6 mw-lg:pt-6 mw-sm:border-t dark:border-t-brandLightOpacity10 border-t-borderEditProfile mw-sm:pt-[16px]">
            trending
          </h4>
          <div className="h-[340px] mw-11:h-fit flex flex-col justify-between">
            {[1, 2].map((element, index) => {
              return (
                <div
                  className={`flex justify-between border  border-grayCard dark:border-brandLightOpacity10 rounded p-2.5 pr-[7px] mw-lg:w-1/2 mw-sm:w-full bg-white  dark:bg-brandDark1 ${
                    index === 0 ? "mb-[13px]" : ""
                  }`}
                  key={index}
                >
                  <div
                    className="imgside w-full  max-w-[120px]    min-w-[120px] h-[140px] 
                  mw-11:min-h-[90px] mw-11:h-fit mw-11:min-w-[100px]"
                  >
                    <Image src={trend} alt="trend" className="w-full h-full" />
                  </div>
                  <div className="contentside flex justify-between flex-col h-[140px] mw-11:h-[125px] pl-4 mt-[-2px]">
                    <p className="pb-[2px]">
                      <Image
                        src={trendingLight}
                        alt="trending"
                        className={` inline-block w-5  brightness-0 dark:brightness-100 w-[20px] h-[20px]	`}
                      />
                      <span className=" text-textColorGray dark:text-brandLightOpacity70 text-xs leading-[15px] montserratfont italic pl-4 ">
                        17 votes on this article
                      </span>
                    </p>
                    <h5 className=" text-base leading-5 text-brandDark2 font-bold montserratfont dark:text-brandLightOpacity100  article-trend-title aticle-title">
                      7 Days To Die Alpha 21: Release Date Speculation, Update
                      Roadmap, And Other Things
                    </h5>
                    <small className="text-textColorGray dark:text-brandLightOpacity70 text-xs montserratfont block pb-[6px] pt-[8px]">
                      <span>
                        <i>3 hrs ago</i>
                      </span>
                      <span className="border-l border-l-textColorGray pl-2 ml-2 border-textColorGray dark:border-l-brandLightOpacity10">
                        5 min read
                      </span>
                    </small>
                    <div className="border-t  border-grayCard dark:border-brandLightOpacity10 flex justify-end items-center pt-[8px] mr-[8px]">
                      <div className="icon w-[24px] h-[24px] flex items-center justify-center rounded-3xl cursor-pointer   ">
                        <Image
                          src={bookmar}
                          alt=""
                          className="dark:brightness-200 brightness-0 "
                        />
                      </div>
                      <div className="border-x  border-grayCard dark:border-brandLightOpacity10  mx-[22px]  px-[22px] h-[20px] flex items-center ">
                        <div className="icon w-[24px] h-[24px] flex items-center justify-center rounded-3xl cursor-pointer  relative ">
                          <Image
                            src={comment}
                            alt=""
                            className="dark:brightness-200 brightness-0 "
                          />
                          <span className="absolute right-[-10px] top-[-4px] bg-brand font-medium flex items-center justify-center montserratfont text-brandLightOpacity100 h-[16px] w-[16px] rounded-full text-[11px]">
                            15
                          </span>
                        </div>
                      </div>
                      <div className="icon w-[24px] h-[24px] flex items-center justify-center rounded-3xl cursor-pointer   ">
                        <Image
                          src={shared}
                          alt=""
                          className="dark:brightness-200 brightness-0 "
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <div className="flex justify-between border  border-grayCard dark:border-brandLightOpacity10 rounded p-2.5 pr-[7px]">
            <div className="imgside w-full max-w-[120px] h-[145px]">
              <Image src={trend} alt="trend" className="w-full h-full" />
            </div>
            <div className="contentside flex justify-between flex-col h-[145px] pl-4 mt-[-8px]">
              <p>
                <Image
                  src={trendingLight}
                  alt="trending"
                  className={` inline-block w-5  brightness-0 dark:brightness-100 w-[20px] h-[20px]	`}
                />
                <span className=" text-textColorGray dark:text-brandLightOpacity70 text-xs leading-[15px] montserratfont italic pl-4">
                  17 votes on this article
                </span>
              </p>
              <h5 className=" text-base leading-5 text-brandDark2 font-bold montserratfont dark:text-brandLightOpacity100 py-[8px]">
                7 Days To Die Alpha 21: Release Date Speculation, Update
                Roadmap, And Other Things
              </h5>
              <small className="text-textColorGray dark:text-brandLightOpacity70 text-xs montserratfont block pb-[6px]">
                <span>
                  <i>3 hrs ago</i>
                </span>
                <span className="border-l border-l-textColorGray pl-2 ml-2 border-textColorGray dark:border-l-brandLightOpacity10">
                  5 min read
                </span>
              </small>
              <div className="border-t  border-grayCard dark:border-brandLightOpacity10 flex justify-end items-center pt-[8px] mr-[8px]">
                <div className="icon w-[24px] h-[24px] flex items-center justify-center rounded-3xl cursor-pointer   ">
                  <Image
                    src={bookmar}
                    alt=""
                    className="dark:brightness-200 brightness-0 "
                  />
                </div>
                <div className="border-x  border-grayCard dark:border-brandLightOpacity10  mx-[22px]  px-[22px] h-[20px] flex items-center ">
                  <div className="icon w-[24px] h-[24px] flex items-center justify-center rounded-3xl cursor-pointer  relative ">
                    <Image
                      src={comment}
                      alt=""
                      className="dark:brightness-200 brightness-0 "
                    />
                    <span className="absolute right-[-10px] top-[-4px] bg-brand font-medium flex items-center justify-center montserratfont text-brandLightOpacity100 h-[16px] w-[16px] rounded-full text-[11px]">
                      15
                    </span>
                  </div>
                </div>
                <div className="icon w-[24px] h-[24px] flex items-center justify-center rounded-3xl cursor-pointer   ">
                  <Image
                    src={shared}
                    alt=""
                    className="dark:brightness-200 brightness-0 "
                  />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ReadMoreLikeThis;
