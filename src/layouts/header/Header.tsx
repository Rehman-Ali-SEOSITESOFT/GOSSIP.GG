"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../assets/images/header/main-logo.png";
import search from "../../assets/images/header/search.png";
import moon from "../../assets/images/header/moon.png";
import sun from "../../assets/images/header/sun.png";
import close from "../../assets/images/header/close-search.png";
import { useTheme } from "next-themes";
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

  return (
    <header>
      <div className="header_width">
        <div className="2xl:container header_container before:bg-bodycolor after:bg-bodycolor dark:before:bg-brandDark2 dark:after:bg-brandDark2 ">
          <div className="flex  flex-wrap items-center justify-between">
            <div className="xl:w-1/4 lg:w-1/5  w-3/6  header__left ">
              <div className="logo">
                <Image src={logo} alt="Gossip GG" />
              </div>
            </div>
            {searchOpen ? (
              <div className="xl:w-3/6 lg:w-1/1  header__center">
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
                  searchOpen ? "seach--deve" : "seach--deve open"
                } `}
              >
                <div className="serach-btn relative ">
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

            <div className="xl:w-1/4 lg:w-1/5	w-3/6 header__right">
              <div className="header__right flex justify-end ">
                {searchOpen ? (
                  <>
                    <div
                      className="search__btn icons bg-brandLightOpacity10 hover:bg-brandLightOpacity50"
                      onClick={hanldeClose}
                    >
                      <span>
                        <Image src={search} alt="search " />
                      </span>
                    </div>
                    <div className="login__btn icons text-brandLightOpacity100 bg-brandLightOpacity10 hover:bg-brandLightOpacity50">
                      <span> Login</span>
                    </div>

                    <div
                      className="theme__btn icons bg-brandLightOpacity10 hover:bg-brandLightOpacity50"
                      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    >
                      <span>
                        {theme === 'light' ? (
                          <Image src={moon} alt="moon light icon" />
                        ) : (
                          <Image src={sun} alt="moon light icon"  />
                        )}
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="close__btn icons " onClick={hanldeClose}>
                    <span>
                      <Image src={close} alt="close " />
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden mw-lg:block mw-lg:z-10 fixed__bottom__header fixed bottom-0 left-0 right-0 bg-brandDark2">
          <div className="xl:w-3/6 lg:w-1/1 ">
            <div className="header-navigation">
              <ul className="flex flex-wrap  justify-center mw-sm:justify-between">
                {menu.map((elme, index) => {
                  return (
                    <li key={index}>
                      <a
                        href={elme.link}
                        className={`font-bold leading-5 no-underline uppercase text-brandLightOpacity100 hover:text-brand hover:font-extrabold text-brandLightOpacity100 mw-sm:text-brandLightOpacity70 ${
                          index === 0 && "active"
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
    </header>
  );
};

export default Header;
