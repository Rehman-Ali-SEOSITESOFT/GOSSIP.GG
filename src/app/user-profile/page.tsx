"use client";
import UserForYou from "@/components/Userprofile/UserForyou";
import ProfileDetail from "@/components/Userprofile/UserProfile";
import UserSaved from "@/components/Userprofile/UserSaved";
import React, { useState } from "react";

const Page = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <section className="user-profile">
      <div className="user-section-width">
        <div className="2xl:container">
          <div className="flex">
            <div className="w-full border border-borderEditProfile dark:border-brandLightOpacity10 rounded-lg bg-white dark:bg-userprofilebg mt-[78px] mb-[88px] mw-11:mt-[50px]  mw-11:mb-[60px]">
              <ProfileDetail />
            </div>
          </div>
        </div>
      </div>
      <div className="user-section-width relative">
        <div className="2xl:container">
          <div className="flex flex-col">
            <ul className="flex full listTabUser before:content-[''] before:w-full before:max-w-[1390px] before:left-0 before:right-0 before:top-[31px] before:absolute before:m-auto before:h-[1px] dark:before:bg-brandLightOpacity10 before:bg-grayCard">
              <li className="">
                <a
                  className={
                    "text-base mw-sm3:text-[10px] mw-sm1:text-[12px]  montserratfont  leading-5   capitalize  pb-[8px]  " +
                    (openTab === 1
                      ? " dark:text-brand border-b-2 border-brandDark2   dark:border-b-brand font-bold	"
                      : "dark:bg-brandDark2   dark:text-brandLightOpacity70 font-normal  ")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  For You
                </a>
              </li>
              <li className="pl-[72px]">
                <a
                  className={
                    "text-base mw-sm3:text-[10px] mw-sm1:text-[12px]  montserratfont  leading-5   capitalize  pb-[8px]  " +
                    (openTab === 2
                      ? " dark:text-brand border-b-2 border-brandDark2   dark:border-b-brand font-bold	"
                      : "dark:bg-brandDark2   dark:text-brandLightOpacity70 font-normal  ")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  saved(50)
                </a>
              </li>
            </ul>
            <div className="tab-content tab-space w-full pt-12	">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <UserForYou />
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <UserSaved />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
