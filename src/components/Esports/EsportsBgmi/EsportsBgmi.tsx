import BgmiTabs from "@/components/Esports/EsportsBgmi/BgmiTabs/BgmiTabs"
import React from "react"
import image1 from "../../../assets/esprotsbgmi/image1.png"
import Image from "next/image"
import SectionSaprator from "@/components/SecSaprator"
import BgmiEvents from "./BgmiEvents/BgmiEvents"
import BgmiNewsCards from "./BgmiNewsCards/BgmiNewsCards"
import rob1 from "../../../assets/esprotsbgmi/rob1.png"
import rob2 from "../../../assets/esprotsbgmi/rob2.png"
import Pagination from "@/components/Pagination"
import EsportsRightSidebar from "../EsportsRightSidebar/EsportsRightSidebar"

const EsportsBgmi = () => {
  return (
    <>
      <section className="esports-bgmi_wrapper">
        <div className="global-section-width">
          <div className="2xl:container ">
            <div className="top_section pt-[44px] flex justify-between pb-[42px]">
              <div className="w-[70%]">
                <h4 className="montserratfont text-[32px] leading-[39px] font-bold dark:text-[#E5E5E5] pb-[16px]">
                  Battlegrounds Mobile India
                </h4>
                <p className="montserratfont text-[14px] leading-[17px] font-normal dark:text-[#E5E5E5]">
                  First Person Shooter &nbsp; | &nbsp; Simulation Video Game
                  &nbsp;|&nbsp; X box Series X and Series S
                </p>
                <div className="tabs ">
                  <BgmiTabs />
                </div>
                <p className="montserratfont text-[16px] leading-[27px] dark:text-[#E5E5E5] font-normal ">
                  Battlegrounds Mobile India is the Indian version of PUBG
                  Mobile, exclusively for players in India. It is an online
                  multiplayer battle royale game developed and published by
                  Krafton. The game released on 2 July 2021 for Android devices,
                  and on 18 August 2021 for iOS devices.
                </p>
              </div>
              <div className="w-[26%]">
                <div className="img_wrapper">
                  <Image src={image1} alt="" />
                </div>
              </div>
            </div>

            <div className="bgmi_events">
              <div className="heading">
                <SectionSaprator title="BGMI EVENTS" />
              </div>
              <div>
                <BgmiEvents />
              </div>
            </div>
            <div className="bgmi_news third_section">
              <div className="bgmi_news_heading pt-[48px]">
                <SectionSaprator title="BGMI NEWS" />
              </div>
              <div className="flex justify-between relative">
                <div className="w-[78%]">
                  <BgmiNewsCards />
                </div>

                <EsportsRightSidebar />
              </div>
            </div>
            <div className="pagination">
              <Pagination />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default EsportsBgmi
