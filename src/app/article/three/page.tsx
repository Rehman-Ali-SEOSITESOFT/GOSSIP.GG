"use client"
import AbsBannerArticle from "@/components/AbsArticleContent/AbsBannerArticle/AbsBannerArticle"
import AbsHeadingArticle from "@/components/AbsArticleContent/AbsHeadingArticle/AbsHeadingArticle"
import React, { useState } from "react"
import bannerImage from "../../../assets/articlebannerimage/banner3.png"
import three from "../../../assets/articlebannerimage/three.png"
import Comments from "@/components/Article/Comments"
import UserLogoSection from "@/components/Article/UserInfoSection"
import ReadMoreLikeThis from "@/components/Article/ReadMore"
import TechImage1 from "../../../assets/images/article/tech1.png";
import TechImage2 from "../../../assets/images/article/tech2.png";
import TechImage3 from "../../../assets/images/article/tech3.png";
import TechImage4 from "../../../assets/images/article/tech4.png";
import TechImage4Big from "../../../assets/images/article/tech-big-1.png";
import TechImage5 from "../../../assets/images/article/tech5.png";
import AbsArticleBreadCrum from "@/components/AbsArticleContent/AbsArticleBreadCrum/AbsArticleBreadCrum"


const Page = () => {
  interface List {
    bannerImage: any
    lowerImage: any
  }
  const [list, setList] = useState<List[]>([
    {
      bannerImage: bannerImage,
      lowerImage: three,
    },
  ]);
  const sliderNavImages = [
    TechImage1,
    TechImage2,
    TechImage3,
    TechImage4,
    TechImage5,
   ];

   const sliderMainImages=[
    TechImage4Big,
    TechImage4Big,
    TechImage4Big,
    TechImage4Big,
    TechImage4Big,
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

        <GammingArticlePropConsBox />
        <div className="mt-[48px]">
          <UserLogoSection />
        </div>
        <div className="mt-[10px]">
          <Comments />
        </div>
      </div>
      <ReadMoreLikeThis />
    </section>
  )
}

export default Page
