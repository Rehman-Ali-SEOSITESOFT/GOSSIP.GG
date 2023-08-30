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
import CountdownSection from "@/components/QuizScreen/CountDownSection";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);
  const router = useRouter();

  useEffect(() => {
    let user: any = localStorage.getItem("isLogin");
    setIsLoggedIn(user);
  }, []);
  const responsive = {
    tablet: {
      breakpoint: { max: 639, min: 360 },
      items: 1,
      paritialVisibilityGutter: 200,
      arrows: false,
    },
    tablet2: {
      breakpoint: { max: 510, min: 460 },
      items: 1,
      paritialVisibilityGutter: 150,
      arrows: false,
    },
    mobile: {
      breakpoint: { max: 460, min: 360 },
      items: 1,
      paritialVisibilityGutter: 60,
      arrows: false,
    },
  };

  return (
    <>
      <section className="home-page">
        <div className="pb-11  pt-6 mw-12:pb-7 mw-md:pb-[20px] mw-md:pt-[12px] ">
          <CountdownSection />
          <Trending />
        </div>
        <HeroSection />
        <EsportEvent responsive={responsive} />
        <LatestNews />
        {isLoggedIn && <ForYou />}
        <LiveMatch responsive={responsive} />
        {isLoggedIn && <EmailVerify />}
      </section>
    </>
  );
}
