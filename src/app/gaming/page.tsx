"use client"
import HeroSection from "@/components/HeroSection"
import Trending from "@/components/Trending/Index"
import React from "react"
import GamingGuides from "../../components/Gamings/GamingGuides/index"
import LatestNews from "@/components/LatestNews/Index"
import ViewMore from "@/components/Gamings/ViewMore/ViewMore"
import ForYou from "@/components/ForYou/Index"
import SectionSaprator from "@/components/SecSaprator"
import styles from "./gaming.module.css"
import GuideGaming from "@/components/Gamings/GuidesGaming/GuideGaming"
const page = () => {
  return (
    <>
      <section className="gaming_page_wrapper">
        <div className="gaming_tabs_width border-t border-b border-brandLightOpacity10 py-4">
          <Trending />
        </div>

        <div className="gaming_tabs_hero_section pt-8 pb-[10px]">
          <HeroSection />
        </div>
        <div className="latest_news">
          <LatestNews />
          <div className="global-section-width">
            <div className="2xl:container">
              <div className="view_latest_news pb-0 pt-[16px]">
                <ViewMore />
              </div>
            </div>
          </div>
        </div>
        <div className="latest_news">
          <div className="global-section-width">
            <div className="2xl:container">
              <div className="view_latest_news pb-0 pt-[16px]">
                <SectionSaprator title="Guides" />
              </div>
            </div>
          </div>
          <div className={styles.for_your_section}>
            <GuideGaming />
          </div>
        </div>
        <div className="guides_"></div>
        <div className="gaming_guide_section ">
          <GamingGuides />
        </div>
      </section>
    </>
  )
}

export default page
