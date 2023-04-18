"use client";

import AllAuthor from "@/components/Authorprofile/All";
import AuthorEditProfile from "@/components/Authorprofile/EditorProfile/AuthorEditProfile";
import FeaturedAuhor from "@/components/Authorprofile/Featured";
import PopularAuthor from "@/components/Authorprofile/Popular";

import React, { useState } from "react";

const Page = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <section className="user-profile">
      <div className="user-section-width">
        <div className="2xl:container">
          <div className="flex">
            <div className="w-full border border-borderEditProfile dark:border-brandLightOpacity10 rounded-lg bg-white dark:bg-userprofilebg mt-[78px] mb-[88px]">
              <AuthorEditProfile />
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
                  All (239)
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
                  Popular(12)
                </a>
              </li>
              <li className="pl-[72px]">
                <a
                  className={
                    "text-base mw-sm3:text-[10px] mw-sm1:text-[12px]  montserratfont  leading-5   capitalize  pb-[8px]  " +
                    (openTab === 3
                      ? " dark:text-brand border-b-2 border-brandDark2   dark:border-b-brand font-bold	"
                      : "dark:bg-brandDark2   dark:text-brandLightOpacity70 font-normal  ")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Featured (7)
                </a>
              </li>
            </ul>
            <div className="tab-content tab-space w-full pt-12	">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
              <AllAuthor />
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <PopularAuthor />
              </div>
              <div className={openTab === 3 ? "block" : "hidden"} id="link3">
              <FeaturedAuhor />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
