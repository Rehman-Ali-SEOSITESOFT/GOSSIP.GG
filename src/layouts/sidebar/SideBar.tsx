"use client";
import React from "react";
import style from "./Sidebar.module.css";
import Image from "next/image";
import cancel from "../../assets/head/cancel.png";
import logo from "../../assets/head/mobilelogo.png";
import Trending from "@/components/Trending/Index";
import Link from "next/link";
import image1 from "../../assets/rewards/one.png";
import image2 from "../../assets/rewards/two.png";
import image3 from "../../assets/rewards/three.png";
import TrendingTags from "@/components/NewEsports/LatestTrendingHero/TrendingTags";
import CountDownTimer from "@/components/Rewards/CountDownTimer/CountDownTimer";
import SidebarFooter from "../SidebarFooter/SidebarFooter";
const SideBar = ({ isOpen, onClose }) => {
  interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
  }
  const sidebarClass = isOpen ? style.sidebarOpen : style.sidebarClosed;

  return (
    <>
      <aside>
        <div className={sidebarClass}>
          <div className="flex justify-between items-center px-[16px]">
            <Image src={logo} alt="" />
            <Image src={cancel} alt="" onClick={onClose} />
          </div>
          <div
            className={`${style.trendPad} border-t-[1px] border-brandLightOpacity10 border-b-[1px] `}
          >
            <Trending />
          </div>
          <div className={style.middle_section}>
            <div>
              <ul
                className={`${style.menu_items} border-b-[1px] border-brandLightOpacity10 pb-[18px] px-[16px]`}
              >
                <li className="montserratfont text-[14px] font-medium leading-normal uppercase text-brandLightOpacity70 tracking-[0.7px] mt-[16px]">
                  <Link href="/gossip">Gossip</Link>
                </li>
                <li className="montserratfont text-[14px] font-medium leading-normal uppercase text-brandLightOpacity70 tracking-[0.7px] mt-[16px]">
                  <Link href="/esports">Esport</Link>
                </li>
                <li className="montserratfont text-[14px] font-medium leading-normal uppercase text-brandLightOpacity70 tracking-[0.7px] mt-[16px]">
                  <Link href="/gaming">Gaming</Link>
                </li>
                <li className="montserratfont text-[14px] font-medium leading-normal uppercase text-brandLightOpacity70 tracking-[0.7px] mt-[16px]">
                  <Link href="/tech">Tech</Link>
                </li>
                <li className="montserratfont text-[14px] font-medium leading-normal uppercase text-brandLightOpacity70 tracking-[0.7px] mt-[16px]">
                  <Link href="/rewards">Rewards</Link>
                </li>
              </ul>
            </div>
            <div className="pt-[28px] px-[16px]">
              <h4 className="montserratfont text-[16px] font-bold capitalize text-[#ED4E50] leading-normal">
                Gossip Daily Quiz
              </h4>
              <div className="relative mt-[12px] mb-[12px]">
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
                <div className="mt-[8px]">
                  <p className="montserratfont text-[14px] font-medium leading-normal text-[#E5E5E5]">
                    Play everyday between 5 p.m. and 8 p.m. and stand a chance
                    to win the latest Samsung phone and other exciting prizes!
                  </p>
                </div>
                <p className="text-[12px] font-semibold montserratfont text-[#ED4E50] leading-normal mt-[8px]">
                  In{" "}
                  <span className=" inline-block	 w-[60px]">
                    <CountDownTimer />
                  </span>
                  <i className="fa-solid fa-angle-right"></i>
                  <i className="fa-solid fa-angle-right"></i>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-[40px] bg-[#141313] pb-[20px]">
            <SidebarFooter />
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
