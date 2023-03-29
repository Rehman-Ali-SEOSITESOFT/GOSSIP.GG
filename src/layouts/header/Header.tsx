"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/images/header/main-logo.png";
import search from "../../assets/images/header/search.png";
import moon from "../../assets/images/header/moon.png";
import sun from "../../assets/images/header/sun.png";
import close from "../../assets/images/header/close-search.png";
import { useTheme } from "next-themes";
import styles from "./Header.module.css";
import LoginModal from "@/components/loginModal";
import ChoiceTopicModel from "@/components/choiceTopicsModel";
import WelcomeGossip from "@/components/welcomeModel/Index";
import profile from "../../assets/profile/profile-icon.png";
const Header = () => {
  interface MenuList {
    name: string;
    link: string;
  }
  const { theme, setTheme } = useTheme();
  const [menu, setMenu] = useState<MenuList[]>([
    {
      name: "Home",
      link: "/",
    },
    {
      name: "gossip",
      link: "/",
    },
    {
      name: "esports",
      link: "/",
    },
    {
      name: "gaming",
      link: "/",
    },
    {
      name: "tech",
      link: "/",
    },
  ]);
  const [searchOpen, setSearchOpen] = useState<Boolean>(true);

  const [searchText, setSearchText] = useState<string>("");
  const hanldeClose = () => {
    setSearchOpen(!searchOpen);
  };
  const hanldeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  const hanldeSearch = () => {
    console.log(searchText);
  };

  const [open, setOpen] = useState(false);
  const [choicModelOpen, setChoicModelOpen] = useState<Boolean>(false);
  const [welcomeGoggip, setWelcomeGoggip] = useState<Boolean>(true);
  const onClickOpenModal = () => {
    setOpen(!open);
  };

  const choicTopicModel = () => {
    setChoicModelOpen(!choicModelOpen);
  };
  const welcomGossipModel = () => {
    setWelcomeGoggip(!welcomeGoggip);
  };

  return (
    <header className={`${styles.main_header} relative z-[2]`}>
      <div className={`${styles.header_width} `}>
        <div
          className={`2xl:container header_container ${styles.header_container} `}
        >
          <div className="flex  flex-wrap items-center justify-between">
            <div className={`xl:w-1/4 lg:w-1/5  w-3/6  ${styles.header__left}`}>
              <div className={styles.logo}>
                <Image src={logo} alt="Gossip GG" />
              </div>
            </div>
            {searchOpen ? (
              <div className={`${styles.header__center} xl:w-3/6 lg:w-1/1  `}>
                <div className="header-navigation">
                  <ul className="flex flex-wrap  justify-center">
                    {menu.map((elme, index) => {
                      return (
                        <li key={index}>
                          <a
                            href={elme.link}
                            className="font-bold leading-5 no-underline uppercase text-brandLightOpacity100 hover:text-brand hover:font-extrabold sm:text-brandLightOpacity70 "
                          >
                            {elme.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ) : (
              <div
                className={`xl:w-3/6 lg:w-1/1 ${
                  searchOpen
                    ? `${styles.seach__deve}`
                    : `${styles.seach__deve} ${styles.open}`
                } `}
              >
                <div className={`${styles.serach_btn} relative `}>
                  <input
                    value={searchText}
                    className="w-full border-none "
                    onChange={hanldeChange}
                    placeholder="Search"
                  />
                  <span onClick={hanldeSearch}>
                    <Image src={search} alt="search " />
                  </span>
                </div>
              </div>
            )}

            <div className={`xl:w-1/4 lg:w-1/5	w-3/6 ${styles.header__right}`}>
              <div className={`${styles.header__right} flex justify-end `}>
                {searchOpen ? (
                  <>
                    <div
                      className={`${styles.search__btn} ${styles.icons} bg-brandLightOpacity10 hover:bg-brandLightOpacity50`}
                      onClick={hanldeClose}
                    >
                      <span>
                        <Image src={search} alt="search " />
                      </span>
                    </div>
                    {/* <div
                      onClick={onClickOpenModal}
                      className={`${styles.login__btn} ${styles.icons} text-brandLightOpacity100 bg-brandLightOpacity10 hover:bg-brandLightOpacity50`}
                    >
                      <span> Login</span>
                    </div> */}
                    <div
                      className={`${styles.profile_box} px-4 cursor-pointer relative`}
                    >
                      <Image src={profile} alt="Demo" />

                      <div className="absolute w-[240px] py-7	px-4	 dark:bg-brandDark1 right-0 left-auto">
                        <div className="deail ">
                          <h2 className="text-lg dark:text-brand font-bold montserratfont">
                            Naveen
                          </h2>
                          <label
                            htmlFor=""
                            className="montserratfont text-xs	font-medium dark:text-brandLightOpacity70"
                          >
                            abc@xyz.in
                          </label>
                        </div>
                        <div className="settings">
                          <h5 className="text-base leading-5 montserratfont font-semibold	dark:text-brandLightOpacity100">
                            Edit Profile
                          </h5>
                          <h5>Manage Preferences</h5>
                        </div>
                        <div className="logout">
                          <h5>Log Out</h5>
                        </div>
                      </div>
                    </div>
                    {/* <div
                      onClick={choicTopicModel}
                      className={`${styles.login__btn} ${styles.icons} text-brandLightOpacity100 bg-brandLightOpacity10 hover:bg-brandLightOpacity50`}
                    >
                      <span> Choice </span>
                    </div> */}

                    <div
                      className={`${styles.theme__btn} ${styles.icons} bg-brandLightOpacity10 hover:bg-brandLightOpacity50`}
                      onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                      }
                    >
                      <span>
                        {theme === "light" ? (
                          <Image src={moon} alt="moon light icon" />
                        ) : (
                          <Image src={sun} alt="moon light icon" />
                        )}
                      </span>
                    </div>
                  </>
                ) : (
                  <div
                    className={`${styles.close__btn} ${styles.icons}`}
                    onClick={hanldeClose}
                  >
                    <span>
                      <Image src={close} alt="close " />
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`hidden mw-lg:block mw-lg:z-10 ${styles.fixed__bottom__header} fixed bottom-0 left-0 right-0 bg-brandDark2`}
        >
          <div className="xl:w-3/6 lg:w-1/1 ">
            <div className="header-navigation">
              <ul className="flex flex-wrap  justify-center mw-sm:justify-between">
                {menu.map((elme, index) => {
                  return (
                    <li key={index}>
                      <a
                        href={elme.link}
                        className={`font-bold leading-5 no-underline uppercase text-brandLightOpacity100 hover:text-brand hover:font-extrabold text-brandLightOpacity100 mw-sm:text-brandLightOpacity70 ${
                          index === 0 && `${styles.active}`
                        }`}
                      >
                        {elme.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <LoginModal open={open} onClickOpenModal={onClickOpenModal} />
      {/* <ChoiceTopicModel
        openmodel={choicModelOpen}
        choicTopicModel={choicTopicModel}
      /> */}
      {/* <WelcomeGossip
        welcomeGoggip={welcomeGoggip}
        welcomGossipModel={welcomGossipModel}
      /> */}
    </header>
  );
};

export default Header;
