"use client";
import { useEffect, useState } from "react";
import HeroSection from "@/components/herosection";
import LiveMatch from "@/components/liveMatches";
import EsportEvent from "@/components/esportEvents";
import Trending from "@/components/trending/Index";
import LatestNews from "@/components/latestnews/Index";
import ForYou from "@/components/forYou/Index";
import EmailVerify from "@/components/emailVerify/Index";
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
      <Trending />
      <HeroSection />
      <EsportEvent />
      <LatestNews />
      {isLoggedIn && <ForYou />}
      <LiveMatch />
      {isLoggedIn && <EmailVerify />}
    </section>
  );
}
