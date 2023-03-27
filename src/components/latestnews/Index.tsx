import React, { useState } from "react";
import style from "./latestnew.module.css";
import new1 from "../../assets/latest-news/news1.png";
import new2 from "../../assets/latest-news/news2.png";
import new3 from "../../assets/latest-news/news3.png";
import new4 from "../../assets/latest-news/news4.png";
import new5 from "../../assets/latest-news/news5.png";
import new6 from "../../assets/latest-news/news6.png";
import Image from "next/image";
import SectionSaprator from "../secSaprator";

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
  return (
    <section className={style.latest_news_page}>
      <div className="global-section-width">
        <SectionSaprator title="Latest News" />
        <div className="2xl:container border border-grayCard rounded dark:border-brandLightOpacity10">
          <div className="flex flex-wrap pt-5  bg-white rounded dark:bg-brandDark1">
            {items.map((elem, index) => {
              return (
                <div
                  // p-5
                  className={`w-1/3  flex  pl-5    ${style.news_items} `}
                  key={index}
                >
                  <div
                    className={`${style.news_img_wrap} pr-4 ${
                      index + 1 === 1 || index + 1 === 2 || index + 1 === 3
                        ? "pt-0"
                        : "pt-5"
                    }   rounded-sm border-b border-b-grayCard pb-5`}
                  >
                    <Image
                      src={elem.picture}
                      alt="Latest new"
                      className="rounded-sm"
                    />
                  </div>
                  <div
                    className={`${
                      style.news_desc
                    }  pr-5 border-b border-b-grayCard pb-5  ${
                      index + 1 === 1 || index + 1 === 2 || index + 1 === 3
                        ? "pt-0"
                        : "pt-5"
                    } `}
                  >
                    <h4 className="text-base leading-5 text-brandDark2 font-bold montserratfont">
                      Bayes Esports appoints York Scheunemann as COO of reputed
                      gaming...
                    </h4>
                    <div className="tags flex py-4 montserratfont">
                      <div className="text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer  ">
                        News
                      </div>
                      <div className="text-textColorGray bg-grayCard px-2 py-1.5 rounded text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer">
                        Esports
                      </div>
                    </div>
                    <small className="text-textColorGray dark:text-brandLightOpacity70 text-xs montserratfont">
                      <span>
                        <i>3 hrs ago</i>
                      </span>
                      <span className="border-l border-l-textColorGray pl-2 ml-2 border-textColorGray">
                        5 min read
                      </span>
                    </small>
                  </div>
                  <div
                    className={`${
                      style.thumnail_img
                    }  pr-5  border-r-grayCard
                    ${
                      index + 1 === 1 || index + 1 === 2 || index + 1 === 3
                        ? "pt-0"
                        : "pt-5"
                    } 
                    ${
                      index + 1 === 3 || index + 1 === 6
                        ? "border-0"
                        : `border-r`
                    }`}
                  >
                    <div className="bookmark text-textColorGray hover:text-textColor">
                      <i className="fa-regular fa-bookmark "></i>
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
