import React, { useState } from "react"
import LatestNews from "@/components/LatestNews/Index"
import ForYou from "@/components/ForYou/Index"
import AllHeroSection from "./HeroSection"
import AllReviews from "./Deails"
const MainTech = () => {
  return (
    <section className="MainTech mt-[-5px] ">
      <AllHeroSection />
      <LatestNews />
      <AllReviews />
    </section>
  )
}

export default MainTech
