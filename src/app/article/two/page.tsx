"use client";
import React, { useState } from "react";
import AbsBannerArticle from "@/components/AbsArticleContent/AbsBannerArticle/AbsBannerArticle";
import AbsHeadingArticle from "@/components/AbsArticleContent/AbsHeadingArticle/AbsHeadingArticle";
import bannerImage from "../../../assets/articlebannerimage/banner2.png";
import two from "../../../assets/articlebannerimage/two.png";
import ArticlePropConsBox from "@/components/Article/ArticlePropConsBox";
import ReadMoreLikeThis from "@/components/Article/ReadMore";
import Comments from "@/components/Article/Comments";
import UserLogoSection from "@/components/Article/UserInfoSection";
import Image1 from "../../../assets/images/article/slider1.png";
import Image2 from "../../../assets/images/article/slider2.png";
import Image3 from "../../../assets/images/article/slider3.png";
import Image4 from "../../../assets/images/article/slider4.png";
import Image4Big from "../../../assets/images/article/slider-4-big.png";
import Image5 from "../../../assets/images/article/slider5.png";
import AbsArticleBreadCrum from "@/components/AbsArticleContent/AbsArticleBreadCrum/AbsArticleBreadCrum"

const Page = () => {
  interface List {
    bannerImage: any
    lowerImage: any
  }
  const [list, setList] = useState<List[]>([
    {
      bannerImage: bannerImage,
      lowerImage: two,
    },
  ]);
   const sliderNavImages = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
   ];

   const sliderMainImages=[
    Image4Big,
    Image4Big,
    Image4Big,
    Image4Big,
    Image4Big,
   ]

  return (
    <section>
      <div>
        <AbsArticleBreadCrum
          page1="Gaming"
          page2=" All Floo Flame Location and how to fast travel in Hogwarts"
        />
      </div>
      <div className="heading_section">
        <AbsHeadingArticle />
      </div>
      <div className="mt-[32px]">
        {list.map((e, idx) => {
          return (
            <div key={idx}>
              <AbsBannerArticle
                bannerImage={e.bannerImage}
                lowerImage={e.lowerImage}
                navImages={sliderNavImages}
                mainImages={sliderMainImages}
              />
            </div>
          )
        })}
      </div>
      <ArticlePropConsBox />
      <div className="mt-[48px]">
        <UserLogoSection />
      </div>
      <div className="mt-[10px]">
        <Comments />
      </div>
      <ReadMoreLikeThis />
    </section>
  )
}

export default Page
