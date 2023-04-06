"use client"
import HeroSection from "@/components/HeroSection"
import Trending from "@/components/Trending/Index"
import React, { useState } from "react"
import GamingGuides from "../../components/Gamings/GamingGuides/index"
import LatestNews from "@/components/LatestNews/Index"
import ViewMore from "@/components/Gamings/ViewMore/ViewMore"
import ForYou from "@/components/ForYou/Index"
import SectionSaprator from "@/components/SecSaprator"
import styles from "./gaming.module.css"
import GuideGaming from "@/components/Gamings/GuidesGaming/GuideGaming"
import NewCategory from "../../components/Game/news-category/NewsCategory"
import Guides from "@/components/Game/Guides/Guides"
import Reviews from "@/components/Game/Reviews/Reviews"
import Features from "@/components/Game/Features/Features"
import All from "../../components/Game/All/index"
const Page = () => {
  const [openTab, setOpenTab] = useState(0)
  const menulist = [
    { name: "all", data: <All /> },
    { name: "News", data: <NewCategory /> },
    { name: "features", data: <Features /> },
    { name: "guides", data: <Guides /> },
    { name: "reviews", data: <Reviews /> },
  ]
  const hanldeOpenTab = (e: number) => {
    setOpenTab(e)
  }

  return (
    <>
      <section className="gaming_page_wrapper">
        <div className="w-full text-center pt-[26px] pb-[28px]">
          <ul className="flex w-[460px] m-auto justify-between">
            {menulist.map((el, index) => {
              return (
                <li key={index}>
                  <a
                    className={
                      "cursor-pointer capitalize montserratfont block  transition-all	duration-75 leading-loose	 " +
                      (openTab === index
                        ? "scale-[1.1] dark:text-brand text-brandDark2 font-bold border-b-2 dark:border-brand border-brandDark2"
                        : "text-base font-normal dark:text-brandLightOpacity100 text-brandDark2")
                    }
                    onClick={() => hanldeOpenTab(index)}
                    data-toggle="tab"
                    // href={`#link${index}`}
                    role="tablist"
                  >
                    {el.name}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="gaming_tabs_width border-t border-b dark:border-brandLightOpacity10 ">
          <Trending />
        </div>

        <div className="guides_"></div>
        {/* <div className="gaming_guide_section ">
          <GamingGuides />
        </div> */}
        {menulist.map((el, i) => {
          return (
            openTab === i && (
              <div
                className="max-w-[1440px] w-full m-auto  tabtech  border-grayCard dark:border-brandLightOpacity10 p-0"
                key={i}
              >
                {el.data}
              </div>
            )
          )
        })}
      </section>
    </>
  )
}

export default Page
