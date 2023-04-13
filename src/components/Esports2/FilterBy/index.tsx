import Image from "next/image";
import React, { useState, Fragment } from "react";
import downarrow from "../../../assets/esports/down-arrow.png";
// import { MultiSelect } from "react-multi-select-component";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Dropdown } from "flowbite-react";
const FilterBy = () => {
  const [sortBy, setSortBy] = useState<string[]>([
    "Popularity",
    "Recently Added",
    "Prizepool",
    "A to Z",
    "Z to A",
  ]);
  const [sort, setSort] = useState<number | null>(null);
  const hanldeSorting = (num: number) => {
    setSort(num);
  };

  const options = [
    { label: "Grapes", value: "grapes" },
    { label: "Mango", value: "mango" },
    { label: "Strawberry ", value: "strawberry" },
  ];

  const [selected, setSelected] = useState([]);

  return (
    <div className="filter-by-esport-event pt-16	">
      <div className="global-section-width">
        <h5 className="montserratfont font-semibold	text-base leading-5 dark:text-brandLightOpacity100 uppercase">
          FILTER by:
        </h5>

        <Dropdown label="Dropdown button">
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        {/* <p className="montserratfont font-medium text-sm leading-[17px]	dark:text-brandLightOpacity70">
          None applied
        </p>
        <p className="underline montserratfont text-sm font-medium	leading-[17px]	dark:text-brandLightOpacity70 cursor-pointer">
          Reset
        </p> */}
        <h1 className="montserratfont dark:text-brandLightOpacity100 font-bold	text-lg	leading-[22px] py-8	">
          Showing 1-20 of 24 Events
        </h1>
        <div className="sorby flex items-center">
          <h2 className="montserratfont font-semibold	text-base leading-5 dark:text-brandLightOpacity100 uppercase inline-block mr-[17px]">
            SORT by:
          </h2>{" "}
          <div className="">
            {sortBy.map((el, index) => {
              return (
                <p
                  key={index}
                  className={`py-2.5 px-4 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 rounded-[20px] mr-[8px] inline-block montserratfont font-medium test-base leading-5 cursor-pointer  ${
                    sort === index
                      ? "border dark:border-brandLightOpacity100 dark:bg-brandLightOpacity10"
                      : "border-0"
                  }`}
                  onClick={() => hanldeSorting(index)}
                >
                  {el}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBy;
