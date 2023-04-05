"use client"
import SectionSaprator from "@/components/SecSaprator"
import React from "react"
import Review from "../Reviews"
import ViewMore from "../ViewMore/ViewMore"
import GamingFeatures from "../GamingFeatures/GamingFeatures"

const index = () => {
  return (
    <>
      <section className="gaming_guide_wrapper">
        <div className="global-section-width">
          <div className="2xl:container">
            <div className="feature_main_wrapper">
              <SectionSaprator title="Features" />
              <GamingFeatures />
            </div>
            <SectionSaprator title="Reviews" />
            <div className="reviews_main_wrapper">
              <Review />
            </div>
            <div className="view pb-[120px]">
              <ViewMore />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default index
