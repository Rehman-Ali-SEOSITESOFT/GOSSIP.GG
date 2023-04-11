import React from "react"
import HeroSection from "./HeroSection/HeroSection"
import SectionSaprator from "@/components/SecSaprator"
import LatestNews from "./LatestNews/LatestNews"
import AllEsportsEvents from "./AllEsportsEvent/AllEsportsEvents"
import AllValorant from "./Valorant/AllValorant"

const AllEsports = () => {
  return (
    <>
      <section className="All_Exports_wrapper">
        <div className="pt-[32px]">
          <HeroSection />
        </div>
        <div className="latest_news">
          <LatestNews />
        </div>
        <div className="esports_eventss">
          <AllEsportsEvents />
        </div>
        <div className="all_varo">
          <AllValorant />
        </div>
      </section>
    </>
  )
}

export default AllEsports
