"use client";
import { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import LiveMatch from "@/components/LiveMatches";
import EsportEvent from "@/components/EsportEvents";
import Trending from "@/components/Trending/Index";
import LatestNews from "@/components/LatestNews/Index";
import ForYou from "@/components/ForYou/Index";
import EmailVerify from "@/components/EmailVerify/Index";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);
  const router = useRouter();

  useEffect(() => {
    let user: any = localStorage.getItem("isLogin");
    setIsLoggedIn(user);
    // router.refresh();
  }, []);

  return (
    <section className="home-page">
      <div className="pb-11  pt-6 mw-12:pb-7 mw-md:pb-[20px] mw-md:pt-[12px] ">
        <Trending />
      </div>
      <HeroSection />
      <EsportEvent />
      <LatestNews />
      {isLoggedIn && <ForYou />}
      <LiveMatch />
      {isLoggedIn && <EmailVerify />}
    </section>
  );
}
