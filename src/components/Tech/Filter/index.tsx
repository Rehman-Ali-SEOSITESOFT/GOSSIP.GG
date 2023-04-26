import Image from "next/image";
import React, { useEffect, useState } from "react";

import laptop from "../../../assets/tech/filter/d-laptop.png";
import desktop from "../../../assets/tech/filter/d-desktop.png";
import accessorie from "../../../assets/tech/filter/d-accessories.png";
import game from "../../../assets/tech/filter/d-game.png";
import component from "../../../assets/tech/filter/d-component.png";

import d_a_laptop from "../../../assets/tech/filter/d-a-laptop.png";
import d_a_desktop from "../../../assets/tech/filter/d-a-desktop.png";
import d_a_accesories from "../../../assets/tech/filter/d-a-accessories.png";
import d_a_game from "../../../assets/tech/filter/d-a-game.png";
import d_a_component from "../../../assets/tech/filter/d-a-component.png";

import l_laptop from "../../../assets/tech/filter/l-laptop.png";
import l_desktop from "../../../assets/tech/filter/l-desktop.png";
import l_accesories from "../../../assets/tech/filter/l-accessories.png";
import l_game from "../../../assets/tech/filter/l-game.png";
import l_component from "../../../assets/tech/filter/l-component.png";
import { useTheme } from "next-themes";
const FilterTabs = () => {
  const images = [
    { l_pic: l_laptop, d_ac_pic: d_a_laptop, pic: laptop, name: "Laptops" },
    { l_pic: l_desktop, d_ac_pic: d_a_desktop, pic: desktop, name: "Desktops" },
    {
      l_pic: l_accesories,
      d_ac_pic: d_a_accesories,
      pic: accessorie,
      name: "Accessories",
    },
    { l_pic: l_game, d_ac_pic: d_a_game, pic: game, name: "Games" },
    {
      l_pic: l_component,
      d_ac_pic: d_a_component,
      pic: component,
      name: "Components",
    },
    { l_pic: null, d_ac_pic: null, pic: null, name: "Others" },
  ];

  const [no, setNo] = useState<number>(0);
  const hadldeclick = (e: number) => setNo(e);
  const { theme, setTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState<any>("");
  useEffect(() => {
    setIsDarkTheme(theme === "dark" ? "dark" : "light");
  }, [theme]);
  return (
    <div className="FilterTabs pt-16 mw-xl:pt-12 mw-lg:pt-7	  mw-md:pt-[20px]">
      <div className="flex items-center mw-lg:flex-col mw-lg:items-start">
        <h4 className="montserratfont font-semibold test-base  leadiing-5 dark:text-brandLightOpacity100	pr-4 mw-lg:pb-4 ">
          FILTERS:
        </h4>
        <div className="flex mw-xl:w-full mw-xl:justify-start mw-11:flex-wrap	">
          {images.map((element, index) => {
            return (
              <div
                className={`flex items-center border  rounded px-3.5 py-2.5 mw-sm:p-2 mw-sm:h-fit mr-6 mw-xl:mr-[11px] 
                 cursor-pointer ${
                   no === index
                     ? "dark:border-brand border-brandDark2 bg-grayCard"
                     : "dark:border-brandLightOpacity100 border-brandDark2"
                 } mw-9:mb-4 mw-sm:mr-[6px]`}
                key={index}
                onClick={() => hadldeclick(index)}
              >
                {element.pic && (
                  <Image
                    src={
                      no === index
                        ? isDarkTheme === "dark"
                          ? element.d_ac_pic
                          : element.l_pic
                        : isDarkTheme === "dark"
                        ? element.pic
                        : element.l_pic
                    }
                    alt="name"
                    className="inline mw-lg:min-w-[20px] mw-lg:min-h-[20px]   mw-sm:min-h-[16px]   mw-sm:min-w-[16px]  mw-sm:w-full"
                  />
                )}

                <span
                  className={` ${
                    element.pic ? "pl-2  mw-sm:pl-1" : "pl-0"
                  }  inline montserratfont  text-base mw-sm:text-sm leading-5  ${
                    no === index
                      ? "dark:text-brand font-semibold"
                      : "dark:text-brandLightOpacity70 font-medium hover:dark:text-brandLightOpacity100 text-textColorGray hover:text-brandDark2 "
                  }`}
                >
                  {element.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterTabs;
