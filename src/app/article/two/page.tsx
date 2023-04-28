"use client"
import React, { useState } from "react"
import AbsBannerArticle from "@/components/AbsArticleContent/AbsBannerArticle/AbsBannerArticle"
import AbsHeadingArticle from "@/components/AbsArticleContent/AbsHeadingArticle/AbsHeadingArticle"
import bannerImage from "../../../assets/articlebannerimage/banner2.png"
import two from "../../../assets/articlebannerimage/two.png"

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
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page
