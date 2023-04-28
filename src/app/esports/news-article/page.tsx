"use client"
import AbsBannerArticle from "@/components/AbsArticleContent/AbsBannerArticle/AbsBannerArticle"
import AbsHeadingArticle from "@/components/AbsArticleContent/AbsHeadingArticle/AbsHeadingArticle"
import React, { useState } from "react"
import bannerImage from "../../../assets/articlebannerimage/banner.png"
import one from "../../../assets/articlebannerimage/one.png"
import Comments from "@/components/Article/Comments"
import UserLogoSection from "@/components/Article/UserInfoSection"
import ReadMoreLikeThis from "@/components/Article/ReadMore"
import AbsArticleBreadCrum from "@/components/AbsArticleContent/AbsArticleBreadCrum/AbsArticleBreadCrum"

const Page = () => {
  interface List {
    bannerImage: any
    lowerImage: any
  }
  const [list, setList] = useState<List[]>([
    {
      bannerImage: bannerImage,
      lowerImage: one,
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
        <AbsHeadingArticle articleHeading="All Floo Flame locations and how to fast travel in the Hogwarts Universe " />
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
