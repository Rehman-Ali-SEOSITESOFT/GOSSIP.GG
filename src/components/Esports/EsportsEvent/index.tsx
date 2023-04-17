"use client";
import ExportsEventBanner from "./Banner";
import Bgmi from "./Bgmi";
import FilterBy from "./FilterBy";
import Others from "./Others";
import CsGo from "./Csgo";
import Valorant from "./Valorant/index";
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
