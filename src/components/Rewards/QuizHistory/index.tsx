import SectionSaprator from "@/components/SecSaprator";
import React, { useState } from "react";
import classNames from "classnames";
import Slider from "react-slick";
import style from "./QuizHistory.module.css";
import Accordiannn from "../Accordian/Accordian";
import Pagination from "@/components/Pagination";

const QuizHistory = () => {
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
  const [list, setList] = useState<Sliders[]>([
    {
      date: "27 july",
      heading: " What is the largest ever prize pool for a gaming tournament?",
      winnername: " @winner_nemel",
    },
    {
      date: "27 july",
      heading: " What is the largest ever prize pool for a gaming tournament?",
      winnername: " @winner_nemel",
    },
    {
      date: "27 july",
      heading: " What is the largest ever prize pool for a gaming tournament?",
      winnername: " @winner_nemel",
    },
    {
      date: "27 july",
      heading: " What is the largest ever prize pool for a gaming tournament?",
      winnername: " @winner_nemel",
    },
    {
      date: "27 july",
      heading: " What is the largest ever prize pool for a gaming tournament?",
      winnername: " @winner_nemel",
    },
  ]);
  const [openTab, setOpenTab] = useState<number | null>(1);
  const [open, setOpen] = useState<boolean | null>(false);
  const [isDarkTheme, setIsDarkTheme] = useState<string>("");

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
  return (
    <>
      <section className="quiz_history_wrapper">
        <div className="global-section-width">
          <div className="2xl:container">
            <div className="mt-[52px] ">
              <SectionSaprator title="Quiz history" />
            </div>
            <div className="tabss relative mt-[56px]">
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
              <div className="mb-6 ">
                <div className="tab-content tab-space w-full  h-full  	">
                  <div
                    className={
                      openTab === 1 ? "  rounded-lg	 overflow-hidden	" : "hidden"
                    }
                    id="link1"
                  >
                    <div className="for-you-section  pt-[51px]  ">
                      {list.map((e, idx) => (
                        <div key={idx} className="mb-[13px]">
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
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
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
              {/* <div className="absolute top-[0px] right-[0px] ">
                <select className="w-[300px] py-[20px] bg-[#2E2A2B] border-[1px] border-brandLightOpacity50 rounded-lg pl-[18px] absolute right-[0px] montserratfont text-[16px] font-medium capitalize leading-normal color-brandLightOpacity70">
                  <option
                    value="1"
                    className="montserratfont text-[16px] font-medium capitalize leading-normal color-brandLightOpacity70 py-[12px]"
                  >
                    One
                  </option>
                  <option value="2">Two</option>
                </select>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuizHistory;
