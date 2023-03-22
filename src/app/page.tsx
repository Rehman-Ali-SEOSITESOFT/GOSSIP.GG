"use client";

import LiveMatch from "@/components/liveMatches";
import Trending from "@/components/trending/Index";

export default function Home() {
  return (
    <section className="home-page">
      <Trending />
      <LiveMatch />
    </section>
  );
}
