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
import arrow from "../../../assets/user-profile/back.png";

import { useTheme } from "next-themes";
const QuizHistory = () => {
  const { theme } = useTheme();
  0;
  const dropDownRef = useRef<any | null>(null);
  const [page, setPage] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const [dropDownList, setDropDownList] = useState<string[]>([
    "Today",
    "Yesterday",
    "Last Week",
    "Last 10 Days",
    "Custom",
  ]);
  const [selectedValue, setSelectedValue] = useState<string>("Please select");
  const [selectNumber, setSelectNumber] = useState<number>(1);
  const [mobilepage, setMobilePage] = useState<number[]>([1, 2, 3, 4, 10]);
  const [mobileSelectNumber, setMobileSelectNumber] = useState<number>(1);
  const [opendropDown, setOpenDropdown] = useState<Boolean>(false);

  interface Sliders {
    id: any;
    date: string;
    heading: string;
    winnername: string;
  }

  const [list, setList] = useState<Sliders[]>([
    {
      id: 1,
      date: "27 July",
      heading: " What is the largest ever prize pool for a gaming tournament?",
      winnername: " @winner_nemel",
    },
    {
      id: 2,
      date: "26 July",
      heading: " What is the largest ever prize pool for a gaming tournament?",
      winnername: " @winner_nemel",
    },
    {
      id: 3,
      date: "25 July",
      heading: " What is the largest ever prize pool for a gaming tournament?",
      winnername: " @winner_nemel",
    },
    {
      id: 4,
      date: "24 July",
      heading: " What is the largest ever prize pool for a gaming tournament?",
      winnername: " @winner_nemel",
    },
    {
      id: 5,
      date: "23 July",
      heading: " What is the largest ever prize pool for a gaming tournament?",
      winnername: " @winner_nemel",
    }
  ]);
  const [openTab, setOpenTab] = useState<number | null>(1);
  const [open, setOpen] = useState<boolean | null>(false);
  const [isDarkTheme, setIsDarkTheme] = useState<string>("");
  const [value, setValue] = useState(new Date());

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const _handleClose = () => {
    setSelectedValue("");
    setOpenDateModal(false);
  };

  const onClickOpen = () => {
    setOpenDropdown(!opendropDown);
  };

  const onSelectValue = (e: any) => {
    setOpenDropdown(!opendropDown);
    setSelectedValue(e);
    if (e === "Custom") {
      setOpenDateModal(true);
    }
  };

  const [openDateModal, setOpenDateModal] = useState<Boolean>(false);

  const _handleSave = () => {
    setState(state);
    setSelectedValue(
      state[0].startDate.getDate() +
        "-" +
        state[0].startDate.getMonth() +
        "-" +
        state[0].startDate.getFullYear() +
        " To " +
        state[0].endDate.getDate() +
        "-" +
        state[0].endDate.getMonth() +
        "-" +
        state[0].endDate.getFullYear()
    );
    setOpenDateModal(false);
    console.log(state);
  };
  const hanldeNumberSelect = (e: number) => {
    setSelectNumber(e);
  };
  const mobile = (e: number) => {
    setMobileSelectNumber(e);
  };

  useEffect(() => {
    setIsDarkTheme(theme === "dark" ? "dark" : "light");
  }, [theme]);
  console.log(selectedValue, "selected value");





  return (
    <>
      <section className="quiz_history_wrapper ">
        <div className="global-section-width ">
          <div className="2xl:container ">
            <div className="mt-[52px] mw-md:mt-[28px]">
              <SectionSaprator title="Quiz history" />
            </div>
            <div className="quiz_history_tabs relative">
              <div className="tabss  mt-[32px] mw-md:mt-[0px]">
                <ul className="flex full listTabUser before:content-[''] before:w-full before:max-w-[1390px] before:left-0 before:right-0 before:top-[31px] before:absolute before:m-auto before:h-[1px] dark:before:bg-brandLightOpacity10 before:bg-grayCard">
                  <li className="">
                    <a
                      className={
                        "text-base   mw-sm1:text-sm   montserratfont  leading-5   capitalize  pb-[8px] mw-sm4:text-[12px] mw-sm4:leading-normal capitalize mw-sm5:fontbold" +
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
                        "text-base   mw-sm1:text-sm   montserratfont  leading-5   capitalize  pb-[8px]  mw-sm4:text-[12px] mw-sm4:leading-normal capitaliz" +
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
                <div className="mb-6 mw-lg:mt-[91px] ">
                  <div className="tab-content tab-space w-full  h-full  	">
                    <div
                      className={
                        openTab === 1
                          ? "  rounded-lg	 overflow-hidden	"
                          : "hidden"
                      }
                      id="link1"
                    >
                      <div className="for-saved-section text-center pt-[51px]">
                        {selectedValue == "Please select" ||
                        selectedValue == "Today" ? (
                          <>
                            {" "}
                            <p className="montserratfont text-[16px] font-normal leading-normal dark:text-[#E5E5E5] pt-[94px]">
                              Your have not yet played any quizzes!
                            </p>
                            <h5 className="text-brandDark2 dark:text-brandLightOpacity100 font-semibold test-base leading-5  montserratfont pt-[32px]	pb-[95px] ">
                              Play today&#39;s quiz &nbsp;
                              <a
                                href="#"
                                className="underline underline-offset-4 "
                              >
                                here&nbsp;
                              </a>
                            </h5>
                          </>
                        ) : (
                          <div className="text-start">
                            <Accordiannn />
                          </div>
                        )}

                        {/* accordian section is here but hide */}

                        {/* accordian section ends here */}
                      </div>
                    </div>
                  </div>
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    <div className="for-you-section  pt-[51px]  mw-md:pt-[32px]">
                      {/* <Accordiannn /> */}

                      <div className="">
                        <Accordiannn />
                      </div>

                      <div className={style.main_pagination_gap}>
                        <div className="2xl:container mw-sm:border-b dark:border-b-brandLightOpacity10 border-b-borderEditProfile">
                          <div className="flex w-full pt-[16px] pb-[64px] mw-md:pt-[32px] mw-md:pb-[48px]  pagi">
                            <div className="w-[450px] m-auto">
                              <div className="pagination flex justify-between items-center">
                                <div className="back-arrow inline-block bg-grayCard dark:bg-brandDark1 dark:hover:bg-brandLightOpacity10 w-[32px] h-[32px] leading-[32px] flex justify-center items-center rounded-2xl cursor-pointer hover:bg-borderEditProfile">
                                  <Image
                                    src={arrow}
                                    alt="back-arrow"
                                    className="	 brightness-0	dark:brightness-100	w-[8px]"
                                  />
                                </div>
                                <div className="mw-sm1:hidden count-number flex items-center justify-between w-[calc(100%_-_100px)]	">
                                  {page.map((element, index) => {
                                    return index === 5 ? (
                                      <span
                                        key={index}
                                        className="inline-block w-[25px] h-[25px]  montserratfont font-normal text-base rounded-2xl	 leading-5 text-brandDark2	dark:text-brandLightOpacity100  text-center leading-[30px] 	"
                                      >
                                        ...
                                      </span>
                                    ) : (
                                      <span
                                        key={index}
                                        className={`inline-block w-[32px] h-[32px]  montserratfont font-normal text-base rounded-2xl	leading-5 text-brandDark2	dark:text-brandLightOpacity100  text-center leading-[30px] cursor-pointer	  border ${
                                          selectNumber === index
                                            ? " dark:bg-brandLightOpacity10 bg-white  border-brandDark2 dark:border-brandLightOpacity100 "
                                            : "bg-none border-none"
                                        }`}
                                        onClick={() =>
                                          hanldeNumberSelect(index)
                                        }
                                      >
                                        {element}
                                      </span>
                                    );
                                  })}
                                </div>
                                <div className="hidden mw-sm1:flex count-number  items-center justify-between w-[calc(100%_-_100px)]	">
                                  {mobilepage.map((element, index) => {
                                    return index === 3 ? (
                                      <span
                                        key={index}
                                        className={`inline-block w-[25px] h-[25px]  montserratfont font-normal text-base rounded-2xl	 leading-5 text-brandDark2	dark:text-brandLightOpacity100  text-center leading-[30px]`}
                                      >
                                        ...
                                      </span>
                                    ) : (
                                      <span
                                        key={index}
                                        className={`inline-block w-[30px] h-[30px]  montserratfont font-normal text-base rounded-2xl leading-[30px] text-brandDark2 border	dark:text-brandLightOpacity100  text-center cursor-pointer ${
                                          mobileSelectNumber === index
                                            ? " dark:bg-brandLightOpacity10  border-brandDark2 dark:border-brandLightOpacity100 "
                                            : "bg-none border-none"
                                        }`}
                                        onClick={() => mobile(index)}
                                      >
                                        {element}
                                      </span>
                                    );
                                  })}
                                </div>
                                <div className="next-arrow inline-block bg-grayCard hover:bg-borderEditProfile  dark:bg-brandDark1 dark:hover:bg-brandLightOpacity10 w-[31px] h-[32px] leading-[32px] flex justify-center items-center  rounded-2xl rotate-180	cursor-pointer pr-[2px]">
                                  <Image
                                    src={arrow}
                                    alt="back-arrow"
                                    className="brightness-0	dark:brightness-100	w-[8px] "
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <Pagination /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`absolute top-[-22px] right-[0px] mw-lg:left-[0px] mw-lg:top-[50px] mw-lg:z-[4] ${style.selectBOOX}`}
              >
                <h4 className="mw-lg:block text-[14px] montserratfont font-normal leading-normal text-brandDark2 dark:text-[#E5E5E5] mb-[4px] mw-md:text-[10px]">
                  Timeframe
                </h4>
                {openDateModal ? (
                  <>
                    <div className="flex flex-col">
                      <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setState([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={state}
                      />
                      <div className="flex">
                        <button
                          onClick={_handleSave}
                          className="border-[1px] border-brandLightOpacity50 montserratfont text-[16px] bg-[#FFFFFF]   py-[8px] text-[#000] text-semibold w-[50%]"
                        >
                          Ok
                        </button>
                        <button
                          onClick={_handleClose}
                          className="border-[1px] border-brandLightOpacity50 montserratfont text-[16px] bg-[#FFFFFF]   py-[8px] text-[#000] text-semibold w-[50%]"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div
                    ref={dropDownRef}
                    className=" relative mw-12:w-[40%]  mw-9:w-[48%] mw-md:z-[4]"
                  >
                    <div
                      onClick={() => onClickOpen()}
                      className=" px-4 bg-bodycolor flex flex-row justify-between items-center h-[60px] mw-sm1:h-[45px]   rounded-lg w-[302px] mx-13:w-[270px] mw-12:w-[300px] border border-brandDark2 dark:border-brandLightOpacity50 mw-sm1:rounded dark:bg-[#221E1F] mw-sm4:w-[160px] mw-sm4:px-[14px]"
                    >
                      <p className="montserratfont capitalize font-semibold text-brandDark1 dark:text-brandLightOpacity70 mw-sm:text-xs mw-sm:leading-normal mw-sm3:text-[14px] mw-sm3:font-medium mw-sm3:leading-normal ">
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
                            className={`h-[44px] hover:dark:bg-brandLightOpacity10 hover:bg-brandLightOpacity100  flex flex-row justify-between items-center pl-[16px] pr-[20px] 
                           ${
                             isDarkTheme === "dark"
                               ? "darkchecked "
                               : "lightcheched"
                           }`}
                            onClick={() => onSelectValue(item)}
                          >
                            <p className="montserratfont leading-normal dark:text-brandLightOpacity100 text-[16px] font-medium text-brandDark2 pl-[8px] mw-md:text-[14px] ">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
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
