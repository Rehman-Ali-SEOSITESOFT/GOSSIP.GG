"use client";
import AbsBannerArticle from "@/components/AbsArticleContent/AbsBannerArticle/AbsBannerArticle";
import AbsHeadingArticle from "@/components/AbsArticleContent/AbsHeadingArticle/AbsHeadingArticle";
import React, { useState } from "react";
import bannerImage from "../../../assets/articlebannerimage/banner3.png";
import three from "../../../assets/articlebannerimage/three.png";
import ReadMoreLikeThis from "@/components/Article/ReadMore";

const Page = () => {
  interface List {
    bannerImage: any;
    lowerImage: any;
  }
  const [list, setList] = useState<List[]>([
    {
      bannerImage: bannerImage,
      lowerImage: three,
    },
  ]);
  return (
    <section>
      <div className="global-section-width-article ">
        <div className="2xl:container">
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
              );
            })}
          </div>
        </div>
      </div>
      <ReadMoreLikeThis />
    </section>
  );
};

export default Page;
