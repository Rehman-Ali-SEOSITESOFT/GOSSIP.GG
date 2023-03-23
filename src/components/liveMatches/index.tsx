import { Fragment, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Logo from "../../assets/images/live-match/logo.png";
import TeamOne from "../../assets/images/live-match/team-one.png";
import TeamTwo from "../../assets/images/live-match/team-two.png";
import Line from "../../assets/images/general/Line.png";
import SectionSaprator from "../secSaprator";
const LiveMatch = () => {
  interface MatchList {
    match_title: string;
    team_one_title: string;
    team_one_score: number;
    match_status: string;
    team_two_title: string;
    team_two_score: number;
  }

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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
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
    ],
  };
  return (
    <section className="live-matches mb-10"  >
      <div className="global-section-width ">
      <SectionSaprator title="LIVE MATCHES"/>
        <Slider className="live-matches-slider " {...settings}>
          {matchData.map((item, index) => (
            <div
              className="bg-white hover:border-brandDark1 hover:dark:border-brand hover:dark:shadow-[0_0_8px_0_#ed4e50] hover:shadow-[0_0_8px_0_#e5e5e5] m-1  dark:bg-brandDark1 border-inherit dark:border-brandDark1 border rounded-sm "
              key={index}
            >
              <div className="flex flex-row justify-between items-center content-center p-4">
                <div className="flex items-center">
                  <Image
                    className="max-w-[100%] max-h-[100%]"
                    src={Logo}
                    alt="Live Match logo"
                  />
                  <p className="font-live-match-16 pl-3 text-brandDark2 dark:text-brandLightOpacity100 font-text-live-page font-semibold">
                    {item.match_title}
                  </p>
                </div>
                {item.match_status !== "LIVE" ? (
                  <div className="bg-grayCard dark:bg-brandLightOpacity10 opacity-100 h-8 max-w-[25%] flex justify-center items-center rounded-sm">
                    <p className="text-brandDark2 dark:text-brandLightOpacity100 font-text-live-page font-semibold font-live-match-14 px-2 ">
                      {item.match_status}
                    </p>
                  </div>
                ) : (
                  <div className="bg-errorIndicator h-8 w-14 flex justify-center items-center rounded-sm">
                    <p className="text-white font-text-live-page tracking-wider  ">
                      {item.match_status}
                    </p>
                  </div>
                )}
              </div>
              <div className="flex justify-center items-center mw-sm1:hidden">
                <Image src={Line} alt="saprator line" />
              </div>
              <div className=" p-4 flex flex-row justify-between mw-sm1:hidden ">
                <div className="flex flex-row justify-between">
                  <div>
                    <Image src={TeamOne} alt="Team logo" />
                  </div>
                  <div className="flex flex-col justify-center items-center pl-3">
                    <p className="text-brandDark2 dark:text-brandLightOpacity100 font-text-live-page font-bold font-live-match-18">
                      {item.team_one_title}
                    </p>
                    <p className="text-brandDark2 dark:text-brandLightOpacity100 font-text-live-page text-1xl font-live-match-22 font-extrabold">
                      {item.team_one_score}
                    </p>
                  </div>
                </div>
                <div className="  ">
                  <p className="font-live-match-16 font-text-live-pag text-brandDark2 dark:text-brandLightOpacity100 opacity-70">
                    vs
                  </p>
                </div>
                <div className=" flex flex-row justify-between">
                  <div>
                    <Image src={TeamTwo} alt="Team logo" />
                  </div>
                  <div className="flex flex-col justify-center items-center  pl-3">
                    <p className="text-brandDark2 dark:text-brandLightOpacity100 font-text-live-page font-bold font-live-match-18">
                      {item.team_two_title}
                    </p>
                    <p className="text-brandDark2 dark:text-brandLightOpacity100 font-text-live-page text-1xl font-live-match-22 font-extrabold">
                      {item.team_two_score}
                    </p>
                  </div>
                </div>
              </div>
              <div className=" hidden p-4 flex flex-row justify-between mw-sm1:block border-t-inherit border-t ">
               <div className="flex flex-row justify-between items-center">
               <div className="flex flex-row justify-center items-center">
                  <Image src={TeamOne} alt="Team logo" />
                  <p className="text-brandDark2 dark:text-brandLightOpacity100 pl-3 font-text-live-page font-bold font-live-match-18">
                    {item.team_one_title}
                  </p>
                </div>
                <p className="text-brandDark2 dark:text-brandLightOpacity100 font-text-live-page text-1xl font-live-match-22 font-extrabold">
                  {item.team_one_score}
                </p>
               </div>
               <div className="flex flex-row justify-between items-center mt-4">
               <div className="flex flex-row justify-center items-center">
                  <Image src={TeamTwo} alt="Team logo" />
                  <p className="text-brandDark2 dark:text-brandLightOpacity100 pl-3 font-text-live-page font-bold font-live-match-18">
                    {item.team_two_title}
                  </p>
                </div>
                <p className="text-brandDark2 dark:text-brandLightOpacity100 font-text-live-page text-1xl font-live-match-22 font-extrabold">
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
