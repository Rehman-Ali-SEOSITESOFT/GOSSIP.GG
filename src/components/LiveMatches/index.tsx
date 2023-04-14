import { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Logo from "../../assets/images/live-match/logo.png";
import LogoDark from "../../assets/images/live-match/dark-logo.png";
import TeamOne from "../../assets/images/live-match/team-one.png";
import TeamTwo from "../../assets/images/live-match/team-two.png";
import Line from "../../assets/images/general/Line.png";
import DarkLine from "../../assets/images/general/dark-line.png";
import SectionSaprator from "../SecSaprator";
import style from "./liveMatch.module.css";
import { useTheme } from "next-themes";

const LiveMatch = () => {
  interface MatchList {
    match_title: string;
    team_one_title: string;
    team_one_score: number;
    match_status: string;
    team_two_title: string;
    team_two_score: number;
  }
  const { theme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState<string>("");
  useEffect(() => {
    setIsDarkTheme(theme === "dark" ? "dark" : "light");
  }, [theme]);
  const [matchData, setMatchData] = useState<MatchList[]>([
    {
      match_title: "LPL 2023 Spring",
      team_one_title: "Team Liquid",
      team_one_score: 2,
      match_status: "LIVE",
      team_two_title: "Team Spirit",
      team_two_score: 0,
    },
    {
      match_title: "LPL 2023 Spring",
      team_one_title: "Team Liquid",
      team_one_score: 2,
      match_status: "In 32 mins",
      team_two_title: "Team Spirit",
      team_two_score: 0,
    },
    {
      match_title: "LPL 2023 Spring",
      team_one_title: "Team Liquid",
      team_one_score: 2,
      match_status: "Completed",
      team_two_title: "Team Spirit",
      team_two_score: 0,
    },
    {
      match_title: "LPL 2023 Spring",
      team_one_title: "Team Liquid",
      team_one_score: 2,
      match_status: "LIVE",
      team_two_title: "Team Spirit",
      team_two_score: 0,
    },
    {
      match_title: "LPL 2023 Spring",
      team_one_title: "Team Liquid",
      team_one_score: 2,
      match_status: "In 32 mins",
      team_two_title: "Team Spirit",
      team_two_score: 0,
    },
    {
      match_title: "LPL 2023 Spring",
      team_one_title: "Team Liquid",
      team_one_score: 2,
      match_status: "Completed",
      team_two_title: "Team Spirit",
      team_two_score: 0,
    },
  ]);

  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerPadding: '40px',
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1144,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },

      {
        breakpoint: 690,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
        },
      },
    ],
  };
  return (
    <section className="live-matches mb-[88px]">
      <div className="global-section-width ">
        <div className="pt-[88px] mw-lg:pt-7 mw-sm:pt-[16px]">
          <SectionSaprator title="LIVE MATCHES" />
        </div>
        <Slider
          className={`live-matches-slider ${
            isDarkTheme === "dark" ? " dark-arrow" : " light-arrow"
          }`}
          {...settings}
        >
          {matchData.map((item, index) => (
            <div
              className="border  dark:border-brandLightOpacity10 bg-white hover:border-brandDark1 hover:dark:border-brand hover:dark:shadow-[0_0_8px_0_#ed4e50] hover:shadow-[0_0_8px_0_#e5e5e5] m-1  dark:bg-brandDark1 border-inherit dark:border-brandDark1 border rounded"
              key={index}
            >
              <div className="flex flex-row justify-between items-center content-center p-4">
                <div className="flex items-center">
                  <Image
                    className="max-w-[100%] max-h-[100%]"
                    src={isDarkTheme === "dark" ? LogoDark : Logo}
                    alt="Live Match logo"
                  />
                  <p
                    className={`${style.font_live_match_16} pl-3 text-brandDark2 dark:text-brandLightOpacity100 ${style.font_text_live_page} font-semibold`}
                  >
                    {item.match_title}
                  </p>
                </div>
                {item.match_status !== "LIVE" ? (
                  <div className="bg-grayCard dark:bg-brandLightOpacity10 opacity-100 h-8 max-w-[25%]  text-[14px]  flex justify-center items-center rounded-sm min-w-fit">
                    <p className="text-brandDark2 dark:text-brandLightOpacity100 opacity-70 montserratfont font-medium mw-sm3:text-[8px]  text-[14px]  px-2 ">
                      {item.match_status}
                    </p>
                  </div>
                ) : (
                  <div className="bg-errorIndicator h-8 w-14 flex justify-center items-center rounded-sm min-w-fit">
                    <p
                      className={`text-white montserratfont  text-[14px]  tracking-wider  mw-sm3:text-[8px]  `}
                    >
                      {item.match_status}
                    </p>
                  </div>
                )}
              </div>
              <div className="flex justify-center items-center mw-sm1:hidden">
                <Image
                  src={isDarkTheme === "dark" ? DarkLine : Line}
                  className="w-[90%]"
                  alt="saprator line"
                />
              </div>
              <div className=" p-4 flex flex-row justify-between mw-sm1:hidden ">
                <div className="flex flex-row justify-between">
                  <div>
                    <Image src={TeamOne} alt="Team logo" />
                  </div>
                  <div className="flex flex-col justify-center items-center pl-3">
                    <p
                      className={`text-brandDark2 dark:text-brandLightOpacity100 ${style.font_text_live_page} font-bold ${style.font_live_match_18}`}
                    >
                      {item.team_one_title}
                    </p>
                    <p
                      className={`text-brandDark2 dark:text-brandLightOpacity100 ${style.font_text_live_page} text-1xl ${style.font_live_match_22} font-extrabold`}
                    >
                      {item.team_one_score}
                    </p>
                  </div>
                </div>
                <div className="  ">
                  <p
                    className={`${style.font_live_match_16} font-text-live-pag text-brandDark2 dark:text-brandLightOpacity100 opacity-70`}
                  >
                    vs
                  </p>
                </div>
                <div className=" flex flex-row justify-between">
                  <div>
                    <Image src={TeamTwo} alt="Team logo" />
                  </div>
                  <div className="flex flex-col justify-center items-center  pl-3">
                    <p
                      className={`text-brandDark2 dark:text-brandLightOpacity100 ${style.font_text_live_page} font-bold ${style.font_live_match_18}`}
                    >
                      {item.team_two_title}
                    </p>
                    <p
                      className={`text-brandDark2 dark:text-brandLightOpacity100 ${style.font_text_live_page} text-1xl ${style.font_live_match_22} font-extrabold`}
                    >
                      {item.team_two_score}
                    </p>
                  </div>
                </div>
              </div>
              <div className=" hidden p-4 flex flex-row justify-between mw-sm1:block border-t-inherit border-t dark:border-t-brandLightOpacity10">
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-row justify-center items-center">
                    <Image src={TeamOne} alt="Team logo" />
                    <p
                      className={`text-brandDark2 dark:text-brandLightOpacity100 pl-3 ${style.font_text_live_page} font-bold ${style.font_live_match_18}`}
                    >
                      {item.team_one_title}
                    </p>
                  </div>
                  <p
                    className={`text-brandDark2 dark:text-brandLightOpacity100 ${style.font_text_live_page} text-1xl ${style.font_live_match_22} font-extrabold`}
                  >
                    {item.team_one_score}
                  </p>
                </div>
                <div className="flex flex-row justify-between items-center mt-4">
                  <div className="flex flex-row justify-center items-center">
                    <Image src={TeamTwo} alt="Team logo" />
                    <p
                      className={`text-brandDark2 dark:text-brandLightOpacity100 pl-3 ${style.font_text_live_page} font-bold ${style.font_live_match_18}`}
                    >
                      {item.team_two_title}
                    </p>
                  </div>
                  <p
                    className={`text-brandDark2 dark:text-brandLightOpacity100 ${style.font_text_live_page} text-1xl ${style.font_live_match_22} font-extrabold`}
                  >
                    {item.team_two_score}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default LiveMatch;
