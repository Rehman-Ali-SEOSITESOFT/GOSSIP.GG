import SectionSaprator from "@/components/SecSaprator";
import React, { useState, Fragment, useRef, useEffect } from "react";
import classNames from "classnames";
import Slider from "react-slick";
import style from "./QuizHistory.module.css";
import Accordiannn from "../Accordian/Accordian";
import Pagination from "@/components/Pagination";
import { DateRange } from "react-date-range";
import "react-datepicker/dist/react-datepicker.css";
import "react-date-range/dist/styles.css"; // Import the styles
import "react-date-range/dist/theme/default.css";
import downarrow from "../../../assets/esports/down-arrow.png";
import LightArrow from "../../../assets/images/filters/lightdown.png";
import Image from "next/image";
// import { Menu, Transition } from "@headlessui/react";
import { useTheme } from "next-themes";
const QuizHistory = () => {
  const { theme } = useTheme();
  const dropDownRef = useRef<any | null>(null);
  const [dropDownList, setDropDownList] = useState<string[]>([
    "Today",
    "Yesterday",
    "Last Week",
    "Last 10 Days",
    "Custom",
  ]);
  const [selectedValue, setSelectedValue] = useState<string>();
  const [opendropDown, setOpenDropdown] = useState<Boolean>(false);
  interface EventList {
    event_title: string;
    date: string;
    country: string;
    prize: string;
  }
  interface Sliders {
    date: string;
    heading: string;
    winnername: string;
  }
  interface DateItems {
    date: boolean;
  }
  const [selectBox, setSelectBox] = useState({
    fordate: "",
  });
  const [list, setList] = useState<Sliders[]>([
    {
      date: "27 july",
      heading: " What is the largest ever prize pool for a gaming tournament?",
      winnername: " @winner_nemel",
    },
    {
      date: "26 july",
      heading: " What is the largest ever prize pool for a gaming tournament?",
      winnername: " @winner_nemel",
    },
    {
      date: "25 july",
      heading: " What is the largest ever prize pool for a gaming tournament?",
      winnername: " @winner_nemel",
    },
    {
      date: "24 july",
      heading: " What is the largest ever prize pool for a gaming tournament?",
      winnername: " @winner_nemel",
    },
    {
      date: "23 july",
      heading: " What is the largest ever prize pool for a gaming tournament?",
      winnername: " @winner_nemel",
    },
  ]);
  const [openTab, setOpenTab] = useState<number | null>(1);
  const [open, setOpen] = useState<boolean | null>(false);
  const [isDarkTheme, setIsDarkTheme] = useState<string>("");
  const [value, setValue] = useState(new Date());
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSelect = (ranges: any) => {
    setDateRange(ranges.selection);
  };
  const onClickOpenModal = () => {
    setOpen(!open);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const _handleSelectEvent = (item: any) => {
    console.log(item.target.value);
    setSelectBox({
      ...selectBox,
      [item.target.name]: item.target.value,
    });
  };
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const _handleClose = () => {
    setSelectedValue("");
  };
  function handleChange(value: any) {
    setValue(value);
  }

  const _handleCustom = () => {
    setSelectBox({
      fordate: "custom",
    });
  };
  const handleClickOutside = (e: any) => {
    if (dropDownRef.current !== null) {
      if (!dropDownRef.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    }
  };
  const onClickOpen = () => {
    setOpenDropdown(!opendropDown);
  };

  const onSelectValue = (e: any) => {
    setOpenDropdown(!opendropDown);

    setSelectedValue(e);

    console.log("value", e);
  };
  useEffect(() => {
    setIsDarkTheme(theme === "dark" ? "dark" : "light");
  }, [theme]);
  return (
    <>
      <section className="quiz_history_wrapper">
        <div className="global-section-width">
          <div className="2xl:container">
            <div className="mt-[52px] mw-sm4:mt-[28px]">
              <SectionSaprator title="Quiz history" />
            </div>
            <div className="quiz_history_tabs relative">
              <div className="tabss  mt-[32px]">
                <ul className="flex full listTabUser before:content-[''] before:w-full before:max-w-[1390px] before:left-0 before:right-0 before:top-[31px] before:absolute before:m-auto before:h-[1px] dark:before:bg-brandLightOpacity10 before:bg-grayCard">
                  <li className="">
                    <a
                      className={
                        "text-base   mw-sm1:text-sm   montserratfont  leading-5   capitalize  pb-[8px]  " +
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
                  <li className="pl-[72px]  mw-md:pl-[30px] ">
                    <a
                      className={
                        "text-base   mw-sm1:text-sm   montserratfont  leading-5   capitalize  pb-[8px]  " +
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
                      For All Players
                    </a>
                  </li>
                </ul>
                <div className="mb-6 mw-lg:mt-[91px]">
                  <div className="tab-content tab-space w-full  h-full  	">
                    <div
                      className={
                        openTab === 1
                          ? "  rounded-lg	 overflow-hidden	"
                          : "hidden"
                      }
                      id="link1"
                    >
                      <div className="for-you-section  pt-[51px]  ">
                        {list.map((e, idx) => (
                          <div key={idx} className="mb-[16px]">
                            <Accordiannn
                              date={e.date}
                              heading={e.heading}
                              winnername={e.winnername}
                            />
                          </div>
                        ))}

                        <div className={style.main_pagination_gap}>
                          <Pagination />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    <div className="for-saved-section text-center ">
                      <h5 className="text-brandDark2 dark:text-brandLightOpacity100 font-semibold test-base leading-5  montserratfont pt-12	pb-7 ">
                        <a href="#" className="underline underline-offset-4 ">
                          Continue reading&nbsp;
                        </a>
                        to save articles you like.
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`absolute top-[-22px] right-[0px] mw-lg:left-[0px] mw-lg:top-[50px]  ${style.selectBOOX}`}
              >
                <h4 className="mw-lg:block text-[14px] montserratfont font-normal leading-normal text-[#E5E5E5] mb-[4px]">
                  Timeframe
                </h4>
                {selectedValue === "Custom" ? (
                  <>
                    <div className="flex flex-col">
                      <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setState([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={state}
                      />
                      <button
                        onClick={_handleClose}
                        className="border-[1px] border-brandLightOpacity50 montserratfont text-[16px] bg-[#2E2A2B] mt-[4px] rounded py-[8px]"
                      >
                        Ok
                      </button>
                    </div>
                  </>
                ) : (
                  <div
                    ref={dropDownRef}
                    className=" relative mw-12:w-[40%]  mw-9:w-[48%]"
                  >
                    <div
                      onClick={() => onClickOpen()}
                      className=" px-4 bg-[#E2E2E2] flex flex-row justify-between items-center h-[60px] mw-sm1:h-[45px]   rounded-lg w-[302px] mx-13:w-[270px] mw-12:w-[300px] border border-brandDark2 dark:border-brandLightOpacity50 mw-sm1:rounded dark:bg-[#2E2A2B]"
                    >
                      <p className="montserratfont font-semibold text-brandDark1 dark:text-brandLightOpacity100 mw-sm:text-xs mw-sm:leading-normal	">
                        {selectedValue}
                      </p>
                      <div className="flex items-center">
                        <Image
                          className={`${
                            opendropDown ? "rotate-180" : "rotate-0"
                          } mw-sm:w-[12px]  mw-sm:min-w-[12px] `}
                          src={isDarkTheme === "dark" ? downarrow : LightArrow}
                          alt="arrow icon"
                        />
                      </div>
                    </div>
                    {opendropDown && (
                      <div
                        className={`shadow-3xshadow absolute border-grayCard mt-[4px] rounded-lg border-2 border-brandDark2   m-h-[462px] w-[302px]   dark:border-brandLightOpacity10 bg-bodycolor dark:bg-brandDark1 
                            min-h-min	 max-h-[462px] overflow-x-hidden  scrollbar-thin  scrollbar-thumb-brandLightOpacity50 dark:scrollbar-thumb-darkScollorBarColor scrollbar-track-[transparent] ${
                              isDarkTheme === "dark"
                                ? "dark-custom--scroll--filer "
                                : "light-custom--scroll--filer"
                            } `}
                      >
                        {dropDownList.map((item, index) => (
                          <div
                            key={index}
                            className={`h-[44px] hover:bg-brandLightOpacity10  flex flex-row justify-between items-center pl-[16px] pr-[20px] 
                           ${
                             isDarkTheme === "dark"
                               ? "darkchecked "
                               : "lightcheched"
                           }`}
                            onClick={() => onSelectValue(item)}
                          >
                            <p className="montserratfont text-brandDark2 dark:text-brandLightOpacity100 text-base  pl-[8px] ">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  // <select
                  //   className="relative w-[300px] py-[20px] bg-[#2E2A2B] border-[1px] border-brandLightOpacity50 rounded-lg px-[18px]  montserratfont text-[16px] font-medium capitalize leading-normal text-brandLightOpacity70 mw-lg:text-[14px] mw-lg:py-[18px] mw-lg:pl-[14px]"
                  //   onChange={_handleSelectEvent}
                  //   name="fordate"
                  // >
                  //   <option
                  //     value="1"
                  //     className="montserratfont text-[16px] font-medium capitalize leading-normal color-brandLightOpacity70 py-[12px]"
                  //   >
                  //     Today
                  //   </option>
                  //   <option value="2">Yesterday</option>
                  //   <option value="3">Last Week</option>
                  //   <option value="4">Last 10 Days</option>
                  //   <option value="custom">Custom</option>
                  // </select>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuizHistory;
