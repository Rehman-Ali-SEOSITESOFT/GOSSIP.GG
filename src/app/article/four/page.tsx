"use client"
import AbsBannerArticle from "@/components/AbsArticleContent/AbsBannerArticle/AbsBannerArticle"
import AbsHeadingArticle from "@/components/AbsArticleContent/AbsHeadingArticle/AbsHeadingArticle"
import React, { useState } from "react"
import bannerImage from "../../../assets/articlebannerimage/banner4.png"
import four from "../../../assets/articlebannerimage/two.png"
import ListBox from "@/components/Article/Listing"
import Comments from "@/components/Article/Comments"
import UserLogoSection from "@/components/Article/UserInfoSection"
import ReadMoreLikeThis from "@/components/Article/ReadMore"

const Page = () => {
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
    <section>
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
              />
            </div>
          )
        })}
      </div>
      <ListBox />
      <div className="mt-[48px]">
        <UserLogoSection />
      </div>
      <div className="mt-[10px]">
        <Comments />
      </div>
      <ReadMoreLikeThis />
    </section>
  );
};

export default Page;
