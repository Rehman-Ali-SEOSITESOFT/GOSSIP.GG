import React, { useState } from "react";
import logo from "../../../assets/newsports/gossiplogo.png";
import image1 from "../../../assets/rewards/one.png";
import image2 from "../../../assets/rewards/two.png";
import image3 from "../../../assets/rewards/three.png";
import CountDownTimer from "@/components/Rewards/CountDownTimer/CountDownTimer";
import instagram from "../../../assets/newsports/instagram.png";
import twitter from "../../../assets/newsports/twitter.png";
import image from "../../../assets/newsports/image1.png";
import imagee2 from "../../../assets/newsports/image2.png";
import imagee3 from "../../../assets/newsports/image3.png";
import image4 from "../../../assets/newsports/image4.png";
import image5 from "../../../assets/newsports/image5.png";
import image6 from "../../../assets/newsports/image6.png";
import image7 from "../../../assets/newsports/image7.png";
import Link from "next/link";
import Image from "next/image";
import "./DealsArticleTags.css";
import Latest from "@/components/NewEsports/LatestTrendingHero/Latest";
import DealsArticleLatest from "../DealsArticleLatest";
const DealsArticleTags = () => {
  interface TagsList {
    name: string;
    link: string;
  }
  interface LATEST {
    image: any;
    latestNew: String;
  }
  const [tags, setTags] = useState<TagsList[]>([
    {
      name: "Hogwarts",
      link: "/tag-search",
    },

    {
      name: "Fire",
      link: "/tag-search",
    },

    {
      name: "Flame Throwers",
      link: "/tag-search",
    },
    {
      name: "Hogwarts",
      link: "/tag-search",
    },
    {
      name: "Wizards",
      link: "/tag-search",
    },
    {
      name: "Dragons",
      link: "/tag-search",
    },
    {
      name: "Fire Balls",
      link: "/tag-search",
    },
    {
      name: "Hogwarts",
      link: "/tag-search",
    },
    {
      name: "Flame Throwers",
      link: "/tag-search",
    },
  ]);
  const [latestNews, setLatestNews] = useState<LATEST[]>([
    {
      image: image,
      latestNew:
        "EA Sports UFC 5 Gameplay Deep Dive: New Ground-And-Pound System, free Referee Stoppages",
    },
    {
      image: imagee2,
      latestNew:
        "Global Esports Sign Former Guild Esports Player For VCT 2024 Roster",
    },
    {
      image: imagee3,
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
      <div className="trending_wrapper flex flex-wrap	mt-[20px] ">
        {tags.map((item, index) => {
          return (
            <Link
              href={item.link}
              className={`tags bg-grayCard 
                text-textColorGray hover:text-brandDark2 hover:bg-borderEditProfile dark:bg-brandLightOpacity10 dark:text-brandLightOpacity70 
                dark:hover:text-brandLightOpacity100
                dark:hover:bg-brandLightOpacity20 mr-[12px] mb-[12px]`}
              key={index}
            >
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
      <div className="daily_quizz_wrapper rounded bg-[#2E2A2B] border border-brandLightOpacity10 pt-[17px] px-[12px] ">
        <Image src={logo} alt="" />
        <div className="gossip_content pt-[8px]">
          <p className="text-[12px] font-semibold montserratfont text-[#ED4E50] leading-normal">
            In{" "}
            <span className=" inline-block	 w-[60px]">
              <CountDownTimer />
            </span>
            <i className="fa-solid fa-angle-right"></i>
            <i className="fa-solid fa-angle-right"></i>
          </p>
          <div className="relative mt-[8px] mb-[12px]">
            <div className="flex items-center">
              <div className="flex items-center ">
                <Image
                  src={image1}
                  alt=""
                  className="w-[24px] h-[24px] absolute left-[-3px] z-[2]"
                />
                <Image
                  src={image2}
                  alt=""
                  className="w-[24px] h-[24px] absolute left-[8px] z-[1]"
                />
                <Image
                  src={image3}
                  alt=""
                  className="w-[24px] h-[24px] absolute left-[15px] "
                />
              </div>
              <div className="ml-[50px]">
                <p className="montserratfont text-[12px] font-normal text-brandDark2 dark:text-[#E5E5E5]">
                  and 54 others are playing
                </p>
              </div>
            </div>
            <div className="mt-[12px]">
              <p className="montserratfont text-[14px] font-medium leading-normal text-[#E5E5E5]">
                Play everyday between 5 p.m. and 8 p.m. and stand a chance to
                win the latest Samsung phone and other exciting prizes!
              </p>
            </div>
            <button className="montserratfont text-[18px] font-bold text-center text-[#fff] py-[13px] px-[28px]  bg-[#ED4E50] rounded-[24px] w-[100%] mt-[18px] mb-[4px]">
              Play Now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[56px]">
        <h4 className="montserratfont text-[18px] font-bold uppercase dark:text-[#ED4E50] leading-normal">
          Latest
        </h4>
        {latestNews.map((e, idx) => {
          return (
            <DealsArticleLatest
              key={idx}
              image={e.image}
              latestNew={e.latestNew}
            />
          );
        })}
      </div>
      <div className="tag_last_section pt-[44px]">
        <p className="text-[12px] montserratfont font-normal text-brandLightOpacity90 leading-[16px]">
          Gossip.GG brings you the latest scoop from Gaming, Esports, Tech, and
          a whole lot more. From breaking the latest industry news to in-depth
          reviews and features, Gossip.GG has you covered.
        </p>
        <div className="flex mt-[12px]">
          <div className="h-[24px] hover:bg-brandLightOpacity20   cursor-pointer w-[24px]  rounded-3xl bg-brandDark1 flex justify-center  items-center">
            <Image
              src={instagram}
              alt="instagram"
              className="w-[14px] h-[14px]"
            />
          </div>
          <div className="h-[24px] hover:bg-brandLightOpacity20   cursor-pointer w-[24px] ml-[24px] rounded-3xl bg-brandDark1 flex justify-center  items-center">
            <Image
              src={twitter}
              alt="instagram"
              className="w-[14px] h-[14px]"
            />
          </div>
        </div>
      </div>
      <div className=" mt-[12px]">
        <ul className="flex list-none flex-wrap	">
          <li className="montserratfont text-[12px] text-[#E5E5E5] font-normal mr-[16px] mb-[8px]">
            <Link href="#">Disclaimer</Link>{" "}
          </li>
          <li className="montserratfont text-[12px] text-[#E5E5E5] font-normal mr-[16px] mb-[8px]">
            <Link href="#">Privacy Policy</Link>{" "}
          </li>
          <li className="montserratfont text-[12px] text-[#E5E5E5] font-normal mr-[16px] mb-[8px]">
            <Link href="#">Term of Use</Link>{" "}
          </li>
          <li className="montserratfont text-[12px] text-[#E5E5E5] font-normal mr-[16px] mb-[8px]">
            <Link href="#">Editorial Policy</Link>{" "}
          </li>
          <li className="montserratfont text-[12px] text-[#E5E5E5] font-normal mr-[16px] mb-[8px]">
            <Link href="#">About Us</Link>{" "}
          </li>
          <li className="montserratfont text-[12px] text-[#E5E5E5] font-normal mr-[16px] mb-[8px]">
            <Link href="#">Contact</Link>{" "}
          </li>
          <li className="montserratfont text-[12px] text-[#E5E5E5] font-normal mr-[16px] mb-[8px]">
            <Link href="#">Careers</Link>{" "}
          </li>
        </ul>
        <p className="montserratfont text-[12px] font-normal text-brandLightOpacity70 mt-[8px]">
          (c) 2023 Gossip.gg - All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default DealsArticleTags;
