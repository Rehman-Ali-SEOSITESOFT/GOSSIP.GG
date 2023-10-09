"use client";
import React, { useState } from "react";
import bannerImage from "../../assets/articlebannerimage/banner4.png";
import four from "../../assets/articlebannerimage/two.png";
import AbsArticleBreadCrum from "@/components/AbsArticleContent/AbsArticleBreadCrum/AbsArticleBreadCrum";
import AbsHeadingArticle from "@/components/AbsArticleContent/AbsHeadingArticle/AbsHeadingArticle";
import AbsBannerArticle from "@/components/AbsArticleContent/AbsBannerArticle/AbsBannerArticle";
import ListBox from "@/components/Article/Listing";
import UserLogoSection from "@/components/Article/UserInfoSection";
import Comments from "@/components/Article/Comments";
import ReadMoreLikeThis from "@/components/Article/ReadMore";
import DealsArticleMain from "@/components/DealsArticle";
import style from "./dealsArticle.module.css";
const DealsArticle = () => {
  interface List {
    bannerImage: any;
    lowerImage: any;
  }
  const [list, setList] = useState<List[]>([
    {
      bannerImage: bannerImage,
      lowerImage: four,
    },
  ]);
  return (
    <>
      <section className={style.deals_article_wrapper}>
        <div>
          <AbsArticleBreadCrum
            page1="Gaming"
            page2=" All Floo Flame Location and how to fast travel in Hogwarts"
          />
        </div>
        <div className={style.heading_section}>
          <AbsHeadingArticle articleHeading="The best deals on Amazon’s Great Indian Summer Sale - April 2023" />
        </div>
        <div className="mt-[32px]">
          {list.map((e, idx) => {
            return (
              <div key={idx}>
                <DealsArticleMain
                  bannerImage={e.bannerImage}
                  lowerImage={e.lowerImage}
                />
              </div>
            );
          })}
        </div>
        <div className="pt-12">
          <ListBox />
        </div>
        <div className="mt-[48px]">
          <UserLogoSection />
        </div>
        <div className="mt-[10px]">
          <Comments />
        </div>
        <ReadMoreLikeThis />
      </section>
    </>
  );
};

export default DealsArticle;
