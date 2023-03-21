"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../assets/images/header/main-logo.png";
import search from "../../assets/images/header/search.png";
import moon from "../../assets/images/header/moon.png";
import sun from "../../assets/images/header/sun.png";

const Header = () => {
  interface MenuList {
    name: string;
    link: string;
  }

  const [menu, setMenu] = useState<MenuList[]>([
    {
      name: "Home",
      link: "/",
    },
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
  ]);
  const hanldeClose = () => {
    console.log("ier");
  };
  return (
    <header>
      <div className="header_width">
        <div className="2xl:container header_container">
          <div className="flex  flex-wrap items-center md:justify-between">
            <div className="xl:w-1/4 lg:w-1/5 w-3/6	header__left ">
              <div className="logo">
                <Image src={logo} alt="Gossip GG" />
              </div>
            </div>
            <div className="xl:w-3/6 lg:w-1/1	 header__center">
              <div className="header-navigation">
                <ul className="flex flex-wrap  justify-center">
                  {menu.map((elme, index) => {
                    return (
                      <li key={index}>
                        <a href={elme.link}>{elme.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="xl:w-1/4 lg:w-1/5	w-3/6 header__right">
              <div className="header__right flex justify-end">
                <div className="search__btn icons" onClick={hanldeClose}>
                  <span>
                    <Image src={search} alt="search" />
                  </span>
                </div>
                <div className="login__btn icons">
                  <span> Login</span>
                </div>
                <div className="theme__btn icons">
                  <span>
                    <Image src={moon} alt="moon light icon" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
