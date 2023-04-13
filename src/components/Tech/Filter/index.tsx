import Image from "next/image";
import React, { useState } from "react";
import laptop from "../../../assets/tech/filter/laptop.png";
import desktop from "../../../assets/tech/filter/desktop.png";
import accessorie from "../../../assets/tech/filter/accessorie.png";
import game from "../../../assets/tech/filter/game.png";
import component from "../../../assets/tech/filter/component.png";
const FilterTabs = () => {
  const images = [
    { picture: laptop, name: "Laptops" },
    { picture: desktop, name: "Desktops" },
    { picture: accessorie, name: "Accessories" },
    { picture: game, name: "Games" },
    { picture: component, name: "Components" },
    { picture: null, name: "Others" },
  ];

  const [no, setNo] = useState<number>(0);
  const hadldeclick = (e: number) => setNo(e);

  return (
    <div className="FilterTabs pt-16 mw-xl:pt-12 mw-md:pt-[20px]">
      <div className="flex items-center">
        <h4 className="montserratfont font-semibold test-base  leadiing-5 dark:text-brandLightOpacity100	pr-4">
          FILTERS:
        </h4>
        <div className="flex mw-xl:w-full mw-xl:justify-between mw-11:overflow-scroll	">
          {images.map((element, index) => {
            return (
              <div
                className={`flex items-center border  rounded px-3.5 py-2.5 mr-6 mw-xl:mr-[11px]
                 cursor-pointer ${
                   no === index
                     ? "dark:border-brand border-brandDark2 "
                     : "dark:border-brandLightOpacity100 border-brandLightOpacity100"
                 } `}
                key={index}
                onClick={() => hadldeclick(index)}
              >
                {element.picture && (
                  <Image
                    src={element.picture}
                    alt="name"
                    className="inline mw-lg:min-w-[20px] mw-lg:min-h-[20px]  "
                  />
                )}

                <span
                  className={` ${
                    element.picture ? "pl-2" : "pl-0"
                  }  inline montserratfont  test-base leading-5  ${
                    no === index
                      ? "dark:text-brand font-semibold	"
                      : "dark:text-brandLightOpacity70 font-medium"
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
