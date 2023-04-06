"use client";
import Image from "next/image";
import React, { useState } from "react";
import notconnect from "../../assets/empty-user-proilfe/noun-connection.png";
import nounlowfuel from "../../assets/empty-user-proilfe/noun-low-fuel.png";
import EmptyProfileDetail from "@/components/Empty-profile/EditProfie";
import ChoicePreferenceTopicModel from "@/components/Modals/ChoicePreferenceTopicsModel";

const Page = () => {
  const [openTab, setOpenTab] = useState<number | null>(1);
  const [open, setOpen] = useState<boolean | null>(false);

  const onClickOpenModal = () => {
    setOpen(!open);
  };

  return (
    <section className="user-profile">
      <div className="user-section-width">
        <div className="2xl:container">
          <div className="flex">
            <div className="w-full border border-borderEditProfile dark:border-brandLightOpacity10 rounded-lg bg-white dark:bg-userprofilebg mt-[78px] mb-[88px]">
              <EmptyProfileDetail />
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
                  saved(-)
                </a>
              </li>
            </ul>
            <div className="tab-content tab-space w-full pt-12 h-full min-h-[800px]	">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <div className="for-you-section text-center">
                  <p className="montserratfont font-normal text-base leading-5 dark:text-brandLightOpacity100 text-brandDark2">
                    Recommended articles will appear here based on topics you
                    are following.
                  </p>
                  <h5 className="text-brandDark2 dark:text-brandLightOpacity100 font-semibold test-base leading-5  montserratfont py-12 pb-28">
                    Get started by
                    <a
                      href="#"
                      onClick={() => onClickOpenModal()}
                      className="underline underline-offset-4	"
                    >
                      &nbsp;adding your preferences.
                    </a>
                  </h5>
                  <Image
                    src={notconnect}
                    alt="Img "
                    className="m-auto  dark:brightness-100 brightness-0"
                  />
                </div>
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <div className="for-saved-section text-center ">
                  <h5 className="text-brandDark2 dark:text-brandLightOpacity100 font-semibold test-base leading-5  montserratfont pt-12	pb-7 ">
                    <a href="#" className="underline underline-offset-4 ">
                      Continue reading
                    </a>
                    to save articles you like.
                  </h5>
                  <Image
                    src={nounlowfuel}
                    alt="Img "
                    className="text-center m-auto dark:brightness-100 brightness-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChoicePreferenceTopicModel
        open={open}
        onClickOpenModal={onClickOpenModal}
      />
    </section>
  );
};

export default Page;
