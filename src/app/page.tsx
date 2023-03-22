"use client";

import HeroSection from "@/components/herosection";
import LiveMatch from "@/components/liveMatches";
import EsportEvent from "@/components/esportEvents"
import Trending from "@/components/trending/Index";

export default function Home() {
  return (
    <section className="home-page">
      <Trending />
      <HeroSection />
      <EsportEvent/>
      <LiveMatch />
    </section>
  );
}
