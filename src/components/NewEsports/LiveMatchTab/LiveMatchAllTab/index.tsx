"use client";
import React, { useState } from "react";
import Latest from "../../LatestTrendingHero/Latest";
import image from "../../../../assets/newsports/image1.png";
import image2 from "../../../../assets/newsports/image2.png";
import image3 from "../../../../assets/newsports/image3.png";
import image4 from "../../../../assets/newsports/image4.png";
import image5 from "../../../../assets/newsports/image5.png";
import image6 from "../../../../assets/newsports/image6.png";
import image7 from "../../../../assets/newsports/image7.png";
import HeroSection from "../../LatestTrendingHero/HeroSection";
import TrendingTags from "../../LatestTrendingHero/TrendingTags";
import LiveTabReleventTabs from "../LiveMatchRelevantTabs";
import LiveMatchMatchess from "../LiveMatchMatchess";
import RespSection from "../../RespNewSection";
import resp1 from "../../../../assets/newsports/resp1.png";
import resp2 from "../../../../assets/newsports/resp2.png";
import resp3 from "../../../../assets/newsports/resp3.png";
const LiveMatchAllTab = () => {
  interface LATEST {
    image: any;
    latestNew: String;
  }
  interface RESPDATA {
    herobg: any;
    titlee: String;
  }
  const [respData1, setRespData1] = useState<RESPDATA[]>([
    {
      herobg: resp1,
      titlee:
        "Star Wars Jedi 3 Apparently Confirmed By Cal Kestis Actor Cameron Monaghan",
    },
    {
      herobg: resp2,
      titlee:
        "Intel Gamer Days LAN Fest By OMEN Recap - Meet And Greet, Valorant Tournament, Cosplay, Community Events And More",
    },
  ]);
  const [respData, setRespData] = useState<RESPDATA[]>([
    {
      herobg: resp1,
      titlee:
        "Star Wars Jedi 3 Apparently Confirmed By Cal Kestis Actor Cameron Monaghan",
    },
    {
      herobg: resp2,
      titlee:
        "Intel Gamer Days LAN Fest By OMEN Recap - Meet And Greet, Valorant Tournament, Cosplay, Community Events And More",
    },
    {
      herobg: resp3,
      titlee:
        "Indian Esports Team At The Asian Games Hangzhou: Games And Schedule",
    },
  ]);
  const [latestNews, setLatestNews] = useState<LATEST[]>([
    {
      image: image,
      latestNew:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free Referee Stoppages",
    },
    {
      image: image2,
      latestNew:
        "Global Esports Sign Former Guild Esports Player For VCT 2024 Roster",
    },
    {
      image: image3,
      latestNew: "Moist Esports And Shopify Rebellion Merge Valorant Rosters",
    },
    {
      image: image4,
      latestNew:
        "BGIS 2023 Round 4 Day 1 Schedule, Groups, And Streaming Details",
    },
    {
      image: image5,
      latestNew:
        "Microsoft Dismissed Baldur's Gate 3 As A 'Second-Run Stadia PC RPG",
    },
    {
      image: image6,
      latestNew: "Medal Esports Sign 1TapGod To Valorant Roster",
    },
    {
      image: image7,
      latestNew:
        "Massive Xbox-Bethesda Leaks: Xbox-Nintendo Merger, New Controller, Xbox Console Refresh ",
    },
    {
      image: image5,
      latestNew:
        "Microsoft Dismissed Baldur's Gate 3 As A 'Second-Run Stadia PC RPG",
    },
  ]);
  return (
    <>
      <div className="hidden mw-lg:block mt-[40px] mw-sm4:mt-[0px]">
        <div className="flex justify-between mw-md:hidden">
          {respData1.map((e, idx) => {
            return (
              <RespSection key={idx} herobg={e.herobg} titlee={e.titlee} />
            );
          })}
        </div>
        <div className="hidden mw-md:block">
          {respData.map((e, idx) => {
            return (
              <RespSection key={idx} herobg={e.herobg} titlee={e.titlee} />
            );
          })}
        </div>
      </div>

      <div className="mt-[56px]">
        <div className="flex">
          <div className="w-[28%] mw-lg:w-[100%]">
            <h1 className="uppercase montserratfont text-[18px] font-bold text-[#ED4E50] ">
              Esports Latest
            </h1>
            <div>
              {latestNews.map((e, idx) => {
                return (
                  <Latest key={idx} image={e.image} latestNew={e.latestNew} />
                );
              })}
            </div>
          </div>
          <div className="w-[51%] mw-lg:hidden">
            <HeroSection />
          </div>
          <div className="w-[21%] pl-[18px] mw-lg:w-[100%]  mw-lg:pl-[0px] mw-lg:hidden">
            <h4 className="montserratfont text-[18px] font-bold uppercase text-[#ED4E50] leading-normal">
              trending tags
            </h4>
            <div className="mw-lg:hidden">
              <TrendingTags />
            </div>
          </div>
        </div>
      </div>
      <div>
        <LiveMatchMatchess />
      </div>
      <div>
        <LiveTabReleventTabs />
      </div>
    </>
  );
};

export default LiveMatchAllTab;
