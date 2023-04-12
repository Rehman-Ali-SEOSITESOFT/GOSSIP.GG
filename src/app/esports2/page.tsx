"use client";
import ExportsEventBanner from "@/components/Esports2/Banner";
import Bgmi from "@/components/Esports2/Bgmi";
import FilterBy from "@/components/Esports2/FilterBy";
import Others from "@/components/Esports2/Others";
import CsGo from "@/components/Esports2/Csgo";
import Valorant from "@/components/Esports2/Valorant/index";
import React from "react";

const Page = () => {
  return (
    <section className="exports-event pb-[88px]">
      <ExportsEventBanner />
      <FilterBy />
      <Valorant />
      <Bgmi />
      <CsGo />
      <Others />
    </section>
  );
};

export default Page;
