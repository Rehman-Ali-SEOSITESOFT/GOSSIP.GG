"use client";

import HeroSection from "@/components/herosection";
import LiveMatch from "@/components/liveMatches";
import Trending from "@/components/trending/Index";

export default function Home() {
  return (
    <section className="home-page">
      <Trending />
      <HeroSection />
      <LiveMatch />
    </section>
  );
}
