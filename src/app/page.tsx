"use client";

import HeroSection from "@/components/herosection";
import LiveMatch from "@/components/liveMatches";
<<<<<<< HEAD
import EsportEvent from "@/components/esportEvents";


=======
import Trending from "@/components/trending/Index";
>>>>>>> 6d3653b282be6f1ecea84761569d182cfa34e00f

export default function Home() {
  return (
<<<<<<< HEAD
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <EsportEvent/>
    <LiveMatch/>
    </>
  )
=======
    <section className="home-page">
      <Trending />
      <HeroSection />
      <LiveMatch />
    </section>
  );
>>>>>>> 6d3653b282be6f1ecea84761569d182cfa34e00f
}
