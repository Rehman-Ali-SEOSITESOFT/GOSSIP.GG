"use client";
import ExportsEventBanner from "@/components/Esports2/Banner";
import Bgmi from "@/components/Esports2/Bgmi";
import Others from "@/components/Esports2/Others";
import Sogo from "@/components/Esports2/Scgo";
import Valorant from "@/components/Esports2/Valorant/index";
import React from "react";

const Page = () => {
  return (
    <section className="exports-event pb-[88px]">
      <ExportsEventBanner/>
      <Valorant />
      <Bgmi />
      <Sogo />
      <Others />
    </section>
  );
};

export default Page;
