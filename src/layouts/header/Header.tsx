"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../assets/images/header/main-logo.png";
import search from "../../assets/images/header/search.png";
import moon from "../../assets/images/header/moon.png";
import sun from "../../assets/images/header/sun.png";
// type SuggestionType = { name: string; link: string };
// export interface IResult {
//   documents: SuggestionType[];
// }
const Header = () => {
  type MenuList = [{ name: string; link: string }];
  // const [menu, setMenu] = useState<IResult>(
  //   {
  //     name: "Home",
  //     link: "/",
  //   },
  //   {
  //     name: "gossip",
  //     link: "/",
  //   },
  //   {
  //     name: "esports",
  //     link: "/",
  //   },
  //   {
  //     name: "gaming",
  //     link: "/",
  //   },
  //   {
  //     name: "tech",
  //     link: "/",
  //   },
  // );
  const [menu, setMenu] = useState<MenuList>([
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
  console.log(menu);
  return (
    <header>
      <div className="header_width">
        <div className="container">
          <div className="flex  flex-wrap items-center">
            <div className="md:w-1/4	header__left ">
              <div className="logo">
                <Image src={logo} alt="Gossip GG" />
              </div>
            </div>
            <div className="md:w-3/6 header__center">
              <div className="header-navigation">
                <ul className="flex flex-wrap justify-between">
                  {menu.map((elme, index) => {
                    return (
                      <li key={index}>
                        <a href="#">{elme.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="md:w-1/4	header__right">
              <div className="header__right flex justify-end">
                <div className="search__btn icons">
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
