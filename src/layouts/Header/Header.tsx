"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Fragment } from "react";
import logo from "../../assets/images/header/main-logo.png";
import search from "../../assets/images/header/search.png";
import moon from "../../assets/images/header/moon.png";
import sun from "../../assets/images/header/sun.png";
import close from "../../assets/images/header/close-search.png";
import { useTheme } from "next-themes";
import styles from "./Header.module.css";
import profile from "../../assets/profile/profile-icon.png";
import LoginModal from "@/components/Modals/LoginModal";
import EditProfileModal from "@/components/Modals/EditProfileModal";
import { useRouter, usePathname } from "next/navigation";
import setting from "../../assets/profile/settings.png";
import settingLight from "../../assets/profile/setting-light.png";
import downloadarrow from "../../assets/profile/downarrow.png";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import Cross from "../../assets/images/general/x.png";
import Clock from "../../assets/images/general/clock.png";
import barndlogo from "../../assets/images/header/brand-responsive.png";
const Header = () => {
  interface MenuList {
    name: string;
    link: string;
  }
  interface searcList {
    id: number;
    name: string;
  }
  const headerSearchbarRef = useRef<any | null>(null);
  const { theme, setTheme } = useTheme();
  const [menu, setMenu] = useState<MenuList[]>([
    // {
    //   name: "Home",
    //   link: "/",
    // },
    {
      name: "gossip",
      link: "/gossip",
    },
    {
      name: "esports",
      link: "/esports",
    },
    {
      name: "gaming",
      link: "/gaming",
    },
    {
      name: "tech",
      link: "/tech",
    },
    {
      name: "rewards",
      link: "/rewards",
    },
  ]);
  const [recentSearchList, setrRecentSearchList] = useState<searcList[]>([
    {
      id: 0,
      name: "Hogwarts Championship Trophy Winner",
    },
    {
      id: 1,
      name: "Hogwarts Championship Date",
    },
    {
      id: 2,
      name: "Hogwarts Championship Trophy",
    },
  ]);

  const [searchOpen, setSearchOpen] = useState<Boolean>(true);
  const [searchText, setSearchText] = useState<string>("");
  const [isDarkTheme, setIsDarkTheme] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);
  const [open, setOpen] = useState(false);
  const [profileShow, setProfileShow] = useState<Boolean>(true);
  const [bgClassChange, setBgClassChange] = useState<any>(
    theme === "dark" ? "header_light_img" : "header_dark_img"
  );
  const currentPage = usePathname();

  useEffect(() => {
    let user: any = localStorage.getItem("isLogin");
    setIsLoggedIn(user);
    setBgClassChange(theme === "dark" ? "header_dark_img" : "header_light_img");
  }, []);
  useEffect(() => {
    setIsDarkTheme(theme === "dark" ? "dark" : "light");
  }, [theme]);

  const hanldeClose = () => {
    setSearchOpen(!searchOpen);
  };
  const hanldeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const onClickOpenModal = () => {
    setOpen(!open);
  };

  const onClicklogout = () => {
    localStorage.removeItem("isLogin");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  const hanldeChangeTheme = () => {
    setBgClassChange(theme === "dark" ? "header_light_img" : "header_dark_img");
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const onClickCloseSearchList = () => {
    setSearchText("");
  };
  const onClickRemoveItemList = (id: number) => {
    let arr: Array<searcList> = [];
    arr = [...recentSearchList];
    let newArr: Array<searcList> = arr.filter((item) => item.id !== id);
    setrRecentSearchList(newArr);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  // /// for close dropdown on outside click
  const handleClickOutside = (e: any) => {
    if (headerSearchbarRef.current !== null) {
      if (!headerSearchbarRef.current.contains(e.target)) {
        setSearchText("");
      }
    }
  };

  return (
    <header
      className={`${styles.main_header} relative z-[10] mw-lg:sticky top-0`}
    >
      <div className={`${styles.header_width} `}>
        <div
          // className={`2xl:container header_container ${styles.header_container} ${bgClassChange}   mw-lg:dark:bg-brandDark3 mw-lg:bg-brandDark2 px-[65px] h-[90px]  mx-14:h-full mx-14:px-[60px] mx-14:py-[20px]  mw-lg:px-[16px] mw-sm3:px-[15px] mw-sm3:py-[15px]`}
          className={` 2xl:container header_container   mw-lg:dark:bg-brandDark3 mw-lg:bg-brandDark2 px-[65px] h-[90px]  mx-14:h-full mx-14:px-[60px] mx-14:py-[20px]  mw-lg:px-[16px] mw-sm3:px-[15px] mw-sm3:py-[15px] ${styles.header_container} ${bgClassChange} `}
        >
          <div className="flex  h-full flex-wrap items-center justify-between">
            <div className={`xl:w-1/4 lg:w-1/5  w-3/6  ${styles.header__left}`}>
              <Link href="/" className={styles.logo}>
                <Image src={logo} alt="Gossip GG" />
              </Link>
            </div>
            {searchOpen ? (
              <div className={`${styles.header__center} xl:w-3/6 lg:w-1/1  `}>
                <div className="header-navigation">
                  {/* <ul className="flex flex-wrap  justify-center"> */}
                  <ul className="flex   justify-center">
                    {menu.map((elme, index) => {
                      return (
                        <li key={index}>
                          <Link
                            href={elme.link}
                            className={`${
                              currentPage === elme.link
                                ? "text-brand text-[18px] sm:text-brand font-extrabold"
                                : "text-brandLightOpacity100 text-base sm:text-brandLightOpacity100 font-bold"
                            }   leading-5 no-underline uppercase  hover:text-brand hover:font-extrabold `}
                          >
                            {elme.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ) : (
              <>
                <div
                  className={`xl:w-3/6 lg:w-1/1 ${
                    searchOpen
                      ? `${styles.seach__deve}`
                      : `${styles.seach__deve} ${styles.open}`
                  } mw-lg:flex mw-lg:items-center mw-lg:dark:bg-brandDark3 mw-lg:bg-brandDark2`}
                >
                  <Image
                    src={barndlogo}
                    alt="img"
                    className="hidden mw-lg:block mw-lg:mr-5 mw-sm:mr-2"
                  />
                  <div
                    ref={headerSearchbarRef}
                    className={`${styles.serach_btn}  relative   `}
                  >
                    <input
                      value={searchText}
                      className="w-full  montserratfont border border-brandLightOpacity10  bg-brandDark1 placeholder:text-brandLightOpacity70  text-brandLightOpacity70 montserratfont font-medium test-base leading-5"
                      onChange={hanldeChange}
                      placeholder="Search"
                    />
                    <Link
                      href="/search"
                      className="absolute top-[13px] right-7 "
                    >
                      <Image
                        src={search}
                        alt="search "
                        className="w-[22px] h-[22px] mw-lg:w-[17px] mw-lg:h-[17px] "
                      />
                    </Link>
                    {searchText !== "" && (
                      <>
                        <span
                          onClick={onClickCloseSearchList}
                          className="absolute h-8 flex items-center top-[8px] right-[60px] pr-4	border-r border-[#adacac]	 "
                        >
                          <Image
                            src={close}
                            alt="search "
                            className="w-[22px] h-[22px]"
                          />
                        </span>

                        <div className="absolute shadow-3xshadow  rounded border-[2px] border-brandLightOpacity10 left-6  mw-12:left-0 mw-12:right-0	 mt-[2px] bg-brandDark1 pb-2  w-[539px] mw-12:w-full">
                          {recentSearchList.length > 0 && (
                            <div className="h-[44px]  px-4 flex items-center ">
                              <p className="montserratfont text-brandLightOpacity100 font-normal text-sm">
                                Recent Search
                              </p>
                            </div>
                          )}
                          {recentSearchList.length > 0 ? (
                            recentSearchList.map((item, index) => (
                              <div
                                onClick={() => onClickRemoveItemList(item.id)}
                                className="flex flex-row h-[44px]  px-4 hover:bg-brandLightOpacity10  justify-between items-center"
                                key={index}
                              >
                                <div className="flex items-center ">
                                  <Image src={Clock} alt="clock" />
                                  <p className="montserratfont pl-[7px] text-brandLightOpacity100 font-normal text-sm ">
                                    {item.name}
                                  </p>
                                </div>
                                <Image src={Cross} alt="close" />
                              </div>
                            ))
                          ) : (
                            <div className="h-[44px]  flex justify-center items-center">
                              <p className="montserratfont pt-2 text-brandLightOpacity100 font-normal text-sm">
                                No matching results found.
                              </p>
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </>
            )}

            <div className={`xl:w-1/4 lg:w-1/5	w-3/6 ${styles.header__right}`}>
              <div
                className={`${styles.header__right} flex justify-end items-center`}
              >
                {searchOpen ? (
                  <>
                    <div
                      className={`${styles.search__btn} ${styles.icons} bg-brandLightOpacity10 hover:bg-brandLightOpacity20`}
                      onClick={hanldeClose}
                    >
                      <span>
                        <Image src={search} alt="search " />
                      </span>
                    </div>
                    {isLoggedIn ? (
                      <Menu
                        as="div"
                        className="relative inline-block text-left h-[40px] mw-sm:h-[35px] mw-sm3:h-[32px]"
                      >
                        <Menu.Button className="px-4 ">
                          <Image
                            src={profile}
                            alt="Demo"
                            className="mw-sm:w-[35px] mw-sm:h-[35px]"
                          />
                        </Menu.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute py-7	px-4 bg-white  z-10  w-[240px] dark:bg-brandDark1 right-[5px] top-[60px]  left-auto  border border-grayCard dark:border-brandLightOpacity10 rounded-lg">
                            <div
                              className={`${styles.triangleshap}  border-b-[10px] border-b-white	 dark:border-y-brandDark1`}
                            ></div>
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
                              <Menu.Item>
                                {({ active }) => (
                                  <Link href="/user-profile">
                                    <h5 className="text-base leading-5 montserratfont font-normal	dark:text-brandLightOpacity100 pt-2">
                                      View Profile
                                    </h5>
                                  </Link>
                                )}
                              </Menu.Item>
                            </div>
                            <div className="settings border-t border-b border-grayCard dark:border-brandLightOpacity10 my-3 py-3 pl-2">
                              <h5 className="text-base leading-5 montserratfont font-semibold	dark:text-brandLightOpacity100 ">
                                Settings
                                <span>
                                  <Image
                                    src={
                                      isDarkTheme === "dark"
                                        ? setting
                                        : settingLight
                                    }
                                    alt=""
                                    className="inline-block ml-3"
                                  />
                                </span>
                              </h5>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link href="/edit-user-profile">
                                    <h5 className="text-base leading-5 montserratfont font-normal	dark:text-brandLightOpacity100 py-3 pl-2">
                                      Edit Profile
                                    </h5>
                                  </Link>
                                )}
                              </Menu.Item>

                              <h5 className="text-base leading-5 montserratfont font-normal	dark:text-brandLightOpacity100 pl-2">
                                Manage Preferences
                              </h5>
                            </div>
                            <div onClick={onClicklogout} className="logout">
                              <h5 className="text-brandDark2 dark:text-brandLightOpacity100 text-base leading-5 montserratfont cursor-pointer">
                                Log Out
                              </h5>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    ) : (
                      <div
                        onClick={onClickOpenModal}
                        className={`${styles.login__btn} ${styles.icons} text-brandLightOpacity100 bg-brandLightOpacity10 hover:bg-brandLightOpacity20`}
                      >
                        <span>Log In</span>
                      </div>
                    )}

                    <div
                      className={`${styles.theme__btn} ${styles.icons} bg-brandLightOpacity10 hover:bg-brandLightOpacity20`}
                      onClick={hanldeChangeTheme}
                    >
                      <span>
                        {isDarkTheme == "dark" ? (
                          <Image src={sun} alt="sun icon" />
                        ) : (
                          <Image src={moon} alt="moon icon" />
                        )}
                      </span>
                    </div>
                  </>
                ) : (
                  <div
                    className={`${styles.close__btn} ${styles.icons} bg-brandLightOpacity10 hover:bg-brandLightOpacity20`}
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
                      <Link
                        href={elme.link}
                        className={`font-bold leading-5 no-underline uppercase  hover:text-brand hover:font-extrabold text-brandLightOpacity100 mw-sm:text-brandLightOpacity70 ${
                          currentPage === elme.link && `${styles.active}`
                        }`}
                      >
                        {elme.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <LoginModal open={open} onClickOpenModal={onClickOpenModal} />
    </header>
  );
};

export default Header;
