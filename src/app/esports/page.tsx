"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import style from "./esports.module.css";
import EsportsSlider from "../../components/NewEsports/EsportsEventsSlider/index";
import LatestTrendingHero from "@/components/NewEsports/LatestTrendingHero";
import ReleventTabs from "@/components/NewEsports/RevelentTabs";
import resp1 from "../../assets/newsports/resp1.png";
import resp2 from "../../assets/newsports/resp2.png";
import resp3 from "../../assets/newsports/resp3.png";
import RespSection from "@/components/NewEsports/RespNewSection";
const Esports = () => {
  interface RESPDATA {
    herobg: any;
    titlee: String;
  }
  const [respData, setRespData] = useState<RESPDATA[]>([
    {
      herobg: resp1,
      titlee:
        "Star Wars Jedi 3 Apparently Confirmed By Cal Kestis Actor Cameron Monaghan",
    },
    {
      herobg: resp2,
      titlee:
        "Intel Gamer Days LAN Fest By OMEN Recap - Meet And Greet, Valorant Tournament, Cosplay, Community Events And More",
    },
    {
      herobg: resp3,
      titlee:
        "Indian Esports Team At The Asian Games Hangzhou: Games And Schedule",
    },
  ]);
  const [isDarkTheme, setIsDarkTheme] = useState<string>("");
  const [mobilepage, setMobilePage] = useState<number[]>([1, 2, 3, 4, 10]);
  const [mobileSelectNumber, setMobileSelectNumber] = useState<number>(1);

  const [openTab, setOpenTab] = useState<number | null>(1);
  const mobile = (e: number) => {
    setMobileSelectNumber(e);
  };

  const { theme } = useTheme();
  useEffect(() => {
    setIsDarkTheme(theme === "dark" ? "dark" : "light");
  }, [theme]);

  return (
    <>
      <section>
        <div className="global-section-width">
          <div className="2xl-container">
            <div className="quiz_history_tabs relative">
              <div className="tabss  mt-[28px] mw-md:mt-[14px]">
                <ul className="flex full listTabUser before:content-[''] before:w-full before:max-w-[1390px] before:left-0 before:right-0 before:top-[31px] before:absolute before:m-auto before:h-[1px] dark:before:bg-brandLightOpacity10 before:bg-grayCard ">
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
                      ESPORTS EVENTS
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
                      LIVE MATCHES
                    </a>
                  </li>
                </ul>
                <div className="mb-6  mw-lg:mt-[0px]">
                  <div className="tab-content tab-space w-full  h-full  	">
                    <div
                      className={
                        openTab === 1 ? " rounded-lg	 overflow-hidden" : "hidden"
                      }
                      id="link1"
                    >
                      <EsportsSlider />
                      <div className="hidden mw-md:block">
                        {respData.map((e, idx) => {
                          return (
                            <RespSection
                              key={idx}
                              herobg={e.herobg}
                              titlee={e.titlee}
                            />
                          );
                        })}
                      </div>
                      <LatestTrendingHero />
                      <ReleventTabs />
                    </div>
                  </div>
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    <div className="for-you-section  pt-[51px]  mw-md:pt-[32px]">
                      <div className=""></div>

                      <div className={style.main_pagination_gap}>
                        <div className="2xl:container mw-sm:border-b dark:border-b-brandLightOpacity10 border-b-borderEditProfile">
                          <div className="flex w-full pt-[16px] pb-[64px] mw-md:pt-[32px] mw-md:pb-[48px]  pagi">
                            <div className="w-[450px] m-auto">
                              <div className="pagination flex justify-between items-center">
                                <div className="back-arrow inline-block bg-grayCard dark:bg-brandDark1 dark:hover:bg-brandLightOpacity10 w-[32px] h-[32px] leading-[32px] flex justify-center items-center rounded-2xl cursor-pointer hover:bg-borderEditProfile"></div>
                                <div className="mw-sm1:hidden count-number flex items-center justify-between w-[calc(100%_-_100px)]	"></div>
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
                                <div className="next-arrow inline-block bg-grayCard hover:bg-borderEditProfile  dark:bg-brandDark1 dark:hover:bg-brandLightOpacity10 w-[31px] h-[32px] leading-[32px] flex justify-center items-center  rounded-2xl rotate-180	cursor-pointer pr-[2px]"></div>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Esports;
