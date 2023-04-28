"use client"
import AbsBannerArticle from "@/components/AbsArticleContent/AbsBannerArticle/AbsBannerArticle"
import AbsHeadingArticle from "@/components/AbsArticleContent/AbsHeadingArticle/AbsHeadingArticle"
import React, { useState } from "react"
import bannerImage from "../../../assets/articlebannerimage/banner.png"
import one from "../../../assets/articlebannerimage/one.png"
import Comments from "@/components/Article/Comments"
import UserLogoSection from "@/components/Article/UserInfoSection"

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
  console.log(list)
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

        <div className="mt-[48px]">
          <UserLogoSection />
        </div>
        <div className="mt-[10px]">
          <Comments />
        </div>
      </div>
    </section>
  )
}

export default Page
