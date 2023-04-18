"use client"
import AllEsports from "@/components/Esports/AllEsports/AllEsports"
import EsportsEvents from "@/components/Esports/EsportsEvent"
// import EsportsEvents from "@/components/Esports/EsportEvents/EsportsEvents"
import NewsEsports from "@/components/Esports/NewsEsports/NewsEsports"
import Valorant from "@/components/Esports/Valorant/Valorant"
import React, { useState } from "react"
import styles from "./esports.module.css"
import Trending from "@/components/Trending/Index"
import EsportsBgmi from "@/components/Esports/EsportsBgmi/EsportsBgmi"
const Page = () => {
  const [openTab, setOpenTab] = useState(2)
  const menulist = [
    { name: "all", data: <AllEsports /> },
    { name: "News", data: <NewsEsports /> },
    { name: "Esports Events", data: <EsportsEvents /> },
    { name: "BGMI ", data: <EsportsBgmi /> },
    { name: "Valorant", data: <Valorant /> },
  ]
  const hanldeOpenTab = (e: number) => {
    setOpenTab(e)
  }
  return (
    <>
      <section className="esports_page_wrapper">
        <div className="w-full text-center pt-[26px] pb-[36px]">
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
        <div className={`global-section-width ${styles.trending_wrapper}`}>
          <div className="2xl:container m-auto">
            <div
              className={`${styles.gaming_tabs_width} border-t border-b dark:border-brandLightOpacity10`}
            >
              <Trending />
            </div>
          </div>
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
