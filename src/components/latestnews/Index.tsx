import React from "react";
import style from "./latestnew.module.css";
import latesnewsimg from "../../assets/globals/latestmews.png";
import Image from "next/image";

const LatestNews = () => {
  return (
    <section className={style.latest_news_page}>
      <div className="global-section-width">
        <div className="2xl:container border border-grayCard rounded">
          <div className="flex">
            {["", "", ""].map((elem, index) => {
              return (
                <div
                  className={`w-1/3  flex  p-5 ${style.news_items}`}
                  key={index}
                >
                  <div className={`${style.news_img_wrap} pr-4`}>
                    <Image src={latesnewsimg} alt="Latest new" />
                  </div>
                  <div className={`${style.news_desc} `}>
                    <h4>
                      Bayes Esports appoints York Scheunemann as COO of reputed
                      gaming...
                    </h4>
                    <div className="tags">
                      <div>News</div>
                      <div>Esports</div>
                    </div>
                    <small>
                      <span>
                        <i>3 hrs ago</i>
                      </span>
                      <span>5 min read</span>
                    </small>
                  </div>
                  <div className={`${style.thumnail_img} pl-5`}>
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
