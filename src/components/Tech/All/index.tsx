import React, { useState } from "react";
import LatestNews from "@/components/LatestNews/Index";
import ForYou from "@/components/ForYou/Index";
import AllHeroSection from "./HeroSection";
import AllReviews from "./Reviews";
import GamingFeatures from "@/components/Gamings/GamingFeatures/GamingFeatures";
import TechFecture from "./Feacture";
import AllDeail from "./Deails";
const MainTech = () => {
  return (
    <section className="MainTech mt-[-5px] ">
      <AllHeroSection />
      <LatestNews />
      <AllReviews />
      <TechFecture />
      <AllDeail />
    </section>
  );
};

export default MainTech;
