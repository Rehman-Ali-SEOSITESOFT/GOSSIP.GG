"use client"
import React, { useState } from "react"
import AbsBannerArticle from "@/components/AbsArticleContent/AbsBannerArticle/AbsBannerArticle"
import AbsHeadingArticle from "@/components/AbsArticleContent/AbsHeadingArticle/AbsHeadingArticle"
import bannerImage from "../../../assets/articlebannerimage/banner2.png"
import two from "../../../assets/articlebannerimage/two.png"
import ArticlePropConsBox from "@/components/Article/ArticlePropConsBox"
import ReadMoreLikeThis from "@/components/Article/ReadMore"
import Comments from "@/components/Article/Comments"
import UserLogoSection from "@/components/Article/UserInfoSection"
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
  ])
  return (
    <section>
      <div>
        <AbsArticleBreadCrum
          page1="Gaming"
          page2=" All Floo Flame Location and how to fast travel in Hogwarts"
        />
      </div>
      <div className="heading_section">
        <AbsHeadingArticle articleHeading="Samsung QN90B QLED TV (45 inch)with amazing features" />
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
