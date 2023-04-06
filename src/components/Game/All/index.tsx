import GuideGaming from "@/components/Gamings/GuidesGaming/GuideGaming"

import HeroSection from "../../../components/Game/All/HeroSection/HeroSection"
import LatestNews from "@/components/LatestNews/Index"
import SectionSaprator from "@/components/SecSaprator"
import GamingGuides from "../../../components/Gamings/GamingGuides/index"
import React from "react"

const index = () => {
  return (
    <>
      <section>
        <div className="gaming_tabs_hero_section pt-8 pb-[10px]">
          <HeroSection />
        </div>
        <div className="latest_news">
          <LatestNews />
        </div>
        <div className="latest_news">
          <div className="global-section-width">
            <div className="2xl:container">
              <div className="view_latest_news pb-0 pt-[16px]">
                <SectionSaprator title="Guides" />
              </div>
            </div>
          </div>
          <div>
            <GuideGaming />
          </div>
        </div>
        <div className="gaming_guide_section ">
          <GamingGuides />
        </div>
      </section>
    </>
  )
}

export default index
