<<<<<<< HEAD
import React, { useState } from "react"
import LatestNews from "@/components/LatestNews/Index"
import ForYou from "@/components/ForYou/Index"
import AllHeroSection from "./HeroSection"
import AllReviews from "./Deails"
=======
import React, { useState } from "react";
import LatestNews from "@/components/LatestNews/Index";
import ForYou from "@/components/ForYou/Index";
import AllHeroSection from "./HeroSection";
import AllReviews from "./Reviews";
import GamingFeatures from "@/components/Gamings/GamingFeatures/GamingFeatures";
import TechFecture from "./Feature";
import AllDeail from "./Deails";
>>>>>>> 6f9c5c27a6c8edd25dce64cf382cec5c29bdcf47
const MainTech = () => {
  return (
    <section className="MainTech mt-[-5px] ">
      <AllHeroSection />
      <LatestNews />
      <AllReviews />
      <TechFecture />
      <AllDeail />
    </section>
  )
}

export default MainTech
