import React from "react"
import HeroSection from "./HeroSection/HeroSection"
import SectionSaprator from "@/components/SecSaprator"
import LatestNews from "./LatestNews/LatestNews"
import AllEsportsEvents from "./AllEsportsEvent/AllEsportsEvents"
import AllValorant from "./Valorant/AllValorant"
import AllBgmi from "./AllBgmi/AllBgmi"
import BgmiEvents from "../EsportsBgmi/BgmiEvents/BgmiEvents"

const AllEsports = () => {
  const responsive = {
    tablet: {
      breakpoint: { max: 639, min: 360 },
      items: 1,
      paritialVisibilityGutter: 200,
      arrows: false,
    },
    tablet2: {
      breakpoint: { max: 510, min: 460 },
      items: 1,
      paritialVisibilityGutter: 150,
      arrows: false,
    },
    mobile: {
      breakpoint: { max: 460, min: 360 },
      items: 1,
      paritialVisibilityGutter: 60,
      arrows: false,
    },
  }
  return (
    <>
      <section className="All_Exports_wrapper">
        <div className="pt-[32px]">
          <HeroSection />
        </div>
        <div className="latest_news">
          <LatestNews />
        </div>
        <div className="esports_eventss global-section-width">
          <div className="2xl:container">
            <div className="mt-[52px]">
              <SectionSaprator title="Esports Events" />
            </div>
            <BgmiEvents responsive={responsive} />
          </div>
         </div>
        <div className="all_varo">
          <AllValorant />
        </div>
        <div className="all_bgmi">
          <AllBgmi />
        </div>
      </section>
    </>
  )
}

export default AllEsports
