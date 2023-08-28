"use client";
import Image from "next/image";
import eyeIcon from "../../../assets/esporting-events/eye.png";
import banner from "../../../assets/esporting-events/banner_.webp";
import tabImage from "../../../assets/esportevents2/tabVersionImage.png";
import style from "./EsportsEvents.module.css";
import msg from "../../../assets/esporting-events/message.png";
import bookmark from "../../../assets/esporting-events/bookmark.png";
import forward from "../../../assets/esporting-events/forward.png";
import typeComment from "../../../assets/esporting-events/typeComment.png";
import SectionSaprator from "@/components/SecSaprator";
import user from "../../../assets/esporting-events/user1.png";
import likes from "../../../assets/esporting-events/likes.png";
import DropDown from "./EsportsEventDropdown/DropDown";
import commentLogo from "../../../assets/esporting-events/commentLogo.png";
import twitter from "../../../assets/esporting-events/twitter.png";
import vrbox from "../../../assets/esporting-events/vrbox.png";
import heart from "../../../assets/esporting-events/heart.png";
import retweet from "../../../assets/esporting-events/retweet.png";
import youtube from "../../../assets/esporting-events/youtube.png";
import youtubepreview from "../../../assets/esporting-events/videopreview.png";
import pinkman from "../../../assets/esporting-events/pinkman.png";
import brandmark from "../../../assets/esporting-events/smallbrand.png";
import cod from "../../../assets/esporting-events/cod2.png";
import allup from "../../../assets/esporting-events/allup.png";
import aiming from "../../../assets/esporting-events/aiming.png";
import users from "../../../assets/esporting-events/userss.png";
import cube from "../../../assets/esporting-events/cube.png";
import trophy from "../../../assets/esporting-events/trophy.png";
import earth from "../../../assets/esporting-events/earth.png";
import profile from "../../../assets/esporting-events/profile.png";
import torurnament from "../../../assets/esporting-events/tournament.png";
import ValorantListing from "./ValorantListing/ValorantListing";
import darkuserss from "../../../assets/esporting-events/darkusers.png";
import darkcube from "../../../assets/esporting-events/darkcube.png";
import darktrophy from "../../../assets/esporting-events/darktrophy.png";
import darkearth from "../../../assets/esporting-events/darkearth.png";
import darkprofile from "../../../assets/esporting-events/darkProfile.png";
import darkclock from "../../../assets/esporting-events/darkclock.png";
import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import YouTube from "react-youtube";
import downarrow from "../../../assets/esports/down-arrow.png";
import LightArrow from "../../../assets/images/filters/lightdown.png";

const Page = () => {
  const { theme } = useTheme();

  interface List {
    title: string;
    lighticon: any;
    darkicon: any;
    detail: string;
  }

  const [list, setList] = useState<List[]>([
    {
      lighticon: users,
      darkicon: darkuserss,
      title: "Team Size",
      detail: "5v5 + 2 sustitutes",
    },
    {
      lighticon: cube,
      darkicon: darkcube,
      title: "Format",
      detail: "Single Elimination",
    },
    {
      lighticon: trophy,
      darkicon: darktrophy,
      title: "Prizepool",
      detail: "$35000",
    },
    {
      lighticon: earth,
      darkicon: darkearth,
      title: "Region",
      detail: "Southeast Asia",
    },
    {
      lighticon: profile,
      darkicon: darkprofile,
      title: "Sponsors",
      detail: "Intel.DHL",
    },
  ]);
  const opts = {
    width: "100%",
    height: "390",
    playerVars: {
      autoplay: 1,
    },
  };

  const _onReady = (event: any) => {
    event.target.pauseVideo();
  };
  //////////////////////////
  const dropDownRef = useRef<any | null>(null);
  const [opendropDown, setOpenDropdown] = useState<Boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>();
  const [dropDownList, setDropDownList] = useState<string[]>([
    "Today",
    "Yesterday",
    "Last Week",
    "Last 10 Days",
  ]);
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);
  // /// for close dropdown on outside click
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
    setSelectedValue(e);
  };

  const [isDarkTheme, setIsDarkTheme] = useState<string>("");
  useEffect(() => {
    setIsDarkTheme(theme === "dark" ? "dark" : "light");
  }, [theme]);

  return (
    <>
      <section className="esports_events_wrapper_">
        <div className="global-section-width">
          <div className="2xl:container">
            <div className="valo_community_cup mt-[44px]">
              <h2 className="montserratfont text-2xl   leading-[29px] font-bold	dark:text-[#E5E5E5] mw-sm:text-[16px] mw-sm:leading-[20px]">
                Valorant Community Cup#19
              </h2>
              <p className="mt-[10px] montserratfont text-[#008D52] font-medium	text-base	leading-[20px]  mw-sm:mt-[4px] mw-sm:text-[14px]">
                Registration Open
              </p>
              <div className="flex mt-[10px] mw-sm:mt-[4px]">
                <p className="montserratfont text-sm	leading-[17px] font-medium	dark:text-brandLightOpacity70">
                  200
                </p>
                <Image
                  src={eyeIcon}
                  alt=""
                  className="ml-[8px] brightness-0 dark:brightness-200"
                />
              </div>
            </div>
            <div className="banner_esports_event_ relative">
              <div className="mt-[20px]">
                <Image src={banner} alt="img" className="mw-9:hidden" />
                <Image
                  src={tabImage}
                  alt="img"
                  className="hidden mw-9:block w-[100%]"
                />
              </div>
              <button className="absolute right-[24px] bottom-[50px] bg-brandLightOpacity90 rounded-[20px] montserratfont text-[#221E1F] text-[16px] leading-[20px] font-semibold py-[10px] px-[16px]   mw-9:text-[14px] mw-sm:text-[12px] mw-sm:bottom-[30px] mw-sm:right-[14px] mw-sm:py-[8px] mw-sm:px-[12px]">
                Registrations Open
              </button>
            </div>
            <div className="intel_presents_valorant flex justify-between relative mw-9:flex-col-reverse">
              {/* left section starts here */}

              <div className="w-[70%] mt-[48px] mx-13:w-[65%] mw-11:w-[60%] mw-9:w-[100%] mw-9:mb-[0px] mw-9:mt-[36px]">
                <h2 className="montserratfont text-[32px] leading-[39px]  dark:text-[#E5E5E5] font-bold	mw-11:text-[26px] mw-9:text-[22px] mw-sm:text-[18px] mw-sm:leading-[24px]">
                  Intel Presents Valorant Community Cup#19
                </h2>
                <div className="mt-[20px] mw-11:mt-[16px]">
                  <p className="montserratfont font-normal leading-[17px] dark:text-[#E5E5E5]	text-sm	">
                    <span>John D</span> &nbsp; | &nbsp;Jan 30th,2023,18:08
                    &nbsp; |&nbsp; 5 min read
                  </p>
                </div>
                <div className="flex items-center mt-[20px] pb-[32px] mw-11:mt-[17px] mw-11:pb-[24px]">
                  <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard dark:text-brandLightOpacity100 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20  hover:bg-grayCardHover cursor-pointer rounded-3xl	mr-[28px]">
                    <Image
                      src={msg}
                      alt=""
                      width={14}
                      height={14}
                      className=" brightness-0 dark:brightness-200"
                    />
                  </div>
                  <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard dark:text-brandLightOpacity100 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20  hover:bg-grayCardHover cursor-pointer rounded-3xl	mr-[28px]">
                    <Image
                      src={bookmark}
                      alt=""
                      width={14}
                      height={14}
                      className=" brightness-0 dark:brightness-200"
                    />
                  </div>
                  <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard dark:text-brandLightOpacity100 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20  hover:bg-grayCardHover cursor-pointer rounded-3xl		">
                    <Image
                      src={forward}
                      alt=""
                      width={14}
                      height={14}
                      className=" brightness-0 dark:brightness-200"
                    />
                  </div>
                </div>
                <p className="robotoslub text-base	leading-[27px] font-normal	dark:text-brandLightOpacity90 tracking-[0.03em] mw-sm:text-[16px] mw-sm:leading-[22px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries.
                </p>
                <div className="about_tournament">
                  <h2 className="pt-[40px] pb-[24px] montserratfont dark:text-[#E5E5E5] tracking-[0.05em] text-2xl	leading-[30px ] font-bold	 mw-11:pt-[24px] mw-sm:text-[16px]  mw-sm:py-[16px]">
                    About The Tournament
                  </h2>
                  <p className="robotoslub font-normal	text-base	leading-[27px] tracking-[0.03em] dark:text-brandLightOpacity90 mw-sm:text-[16px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                  </p>
                  <p className="mt-[40px] robotoslub font-normal	text-base	leading-[27px] tracking-[0.03em] dark:text-brandLightOpacity90 mw-sm:text-[16px] mw-sm:mt-[16px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                  </p>
                  <div className="mt-[16px] mb-[60px] mw-sm3:mb-[20px]">
                    <a
                      href="#"
                      className=" underline	montserratfont text-base	leading-[20px] tracking-[0.05em] dark:text-brandLightOpacity70 font-medium	mw-sm3:text-[10px] mw-sm3:leading-[12px]"
                    >
                      See More
                    </a>
                  </div>
                  <div className={`${style.comments_section}`}>
                    <SectionSaprator title="Comments" />
                    <p className="mt-[-16px] montserratfont font-normal	text-xs	leading-[15px] dark:text-brandLightOpacity70">
                      250 Comments
                    </p>
                  </div>
                  <div className="mt-[24px] mb-[12px] leave_comment_section dark:bg-commentBg bg-[#fff]  rounded w-[100%] py-[12px] px-[34px] mw-sm3:py-[12px] mw-sm3:px-[6px]">
                    <div className="type_comment flex">
                      <Image
                        src={typeComment}
                        alt="image"
                        className="mr-[16px]"
                      />
                      <input
                        placeholder="Type a Comment"
                        type="text"
                        className="block text-[12px] w-[75%] border-b-2 dark:text-brandLightOpacity70 dark:border-brandLightOpacity10 bg-transparent placeholder:montserratfont placeholder:text-[12px] focus:outline-none"
                      />
                    </div>
                    <div className="comment_shown mt-[21px] flex items-center">
                      <Image src={user} alt="" className="mr-[16px] " />
                      <div className="comment_area ">
                        <div className="name_time flex mb-[8px]">
                          <h6 className=" montserratfont leading-[15px] text-[12px] font-semibold dark:text-[#E5E5E5]">
                            GameForLife
                          </h6>
                          <p className="montserratfont text-[12px] leading-[15px] font-normal dark:text-brandLightOpacity70	ml-[8px]">
                            5 mins ago
                          </p>
                        </div>
                        <p className="montserratfont text-[14px] leading-[17px] dark:text-brandLightOpacity70 font-medium	mw-sm3:text-[12px] mw-sm3:leading-[15px]">
                          This is the best feature in the Hogwarts Universe!
                        </p>
                        <div className="likes_replays flex mt-[8px]">
                          <div className="flex items-center mr-[28px]">
                            <Image
                              src={likes}
                              alt=""
                              className="mr-[8px] dark:brightness-[1.5] brightness-[0.5]"
                            />
                            <p className="montserratfont text-[12px] leading-[15px] dark:text-brandLightOpacity70 font-normal	">
                              34
                            </p>
                          </div>
                          <a
                            href="#"
                            className="montserratfont text-[12px] leading-[15px] font-semibold dark:text-[#E5E5E5]"
                          >
                            Reply
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-[33px] mw-sm3:mb-[24px]">
                    <p className="montserratfont text-[12px] leading-[15px] font-normal	dark:text-brandLightOpacity70 cursor-pointer mw-sm3:text-[10px] mx-sw3:leaing-[12px]">
                      View More Comments
                    </p>
                  </div>
                  <div className="update_wrapper mb-[60px] mw-sm3:mb-[24px]">
                    <SectionSaprator title="Update" />
                    <div className="udpates_ flex flex-row items-center mw-sm:justify-between">
                      <h2 className="montserratfont font-bold leading-[15px] dark:text-[#E5E5E5] mr-[16px] mt-[4px] mw-sm:text-[12px]">
                        Show Updates for:
                      </h2>
                      <div
                        ref={dropDownRef}
                        className=" relative mw-12:w-[40%]  mw-9:w-[48%]"
                      >
                        <div
                          onClick={() => onClickOpen()}
                          className=" px-4  flex flex-row justify-between items-center h-[60px] mw-sm1:h-[45px]   rounded-lg w-[302px] mx-13:w-[270px] mw-12:w-[100%] border border-brandDark2 dark:border-brandLightOpacity50 mw-sm1:rounded"
                        >
                          <p className="montserratfont font-semibold text-brandDark1 dark:text-brandLightOpacity100 mw-sm:text-xs mw-sm:leading-normal	">
                            {selectedValue}
                          </p>
                          <div className="flex items-center">
                            <Image
                              className={`${
                                opendropDown ? "rotate-180" : "rotate-0"
                              } mw-sm:w-[12px]  mw-sm:min-w-[12px] `}
                              src={
                                isDarkTheme === "dark" ? downarrow : LightArrow
                              }
                              alt="arrow icon"
                            />
                          </div>
                        </div>
                        {opendropDown && (
                          <div
                            className={`shadow-3xshadow absolute border-grayCard mt-[4px] rounded-lg border-2 border-brandDark2   m-h-[462px] w-[302px] right-0 left-auto  mw-9:right-auto mw-9:left-0   dark:border-brandLightOpacity10 bg-bodycolor dark:bg-brandDark1 mw-sm1:left-auto mw-sm1:right-0
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
                    </div>
                  </div>
                  <div className="comments_area_here_wrapper dark:bg-commentBg bg-[#fff] rounded py-[26px] px-[82px] mb-[88px]  mw-sm:py-[25px] mw-sm:px-[20px]">
                    <div
                      className="first_comment_area border-b-2
                       border-brandLightOpacity10"
                    >
                      <div className="flex justify-between">
                        <div className="left_first_comment_area flex items-center">
                          <Image src={commentLogo} alt="logo" />
                          <div className="name_handle ml-[16px]">
                            <h4 className="dark:text-[#E5E5E5] text-[16px] leading-[20px] montserratfont font-semibold	mw-sm:text-[14px] mw-sm:leading-[17px]">
                              Gossip.GG
                            </h4>
                            <p className="pt-[4px] montserratfont text-[14px] leading-[17px] font-normal	dark:text-brandLightOpacity70 mw-sm:text-[12px] mw-sm:leading-[15px]">
                              @sportskeeda
                            </p>
                          </div>
                        </div>
                        <div className="right_first_comment_area">
                          <Image src={twitter} alt="" />
                        </div>
                      </div>
                      <div className="narrtation_and_image pt-[28px] px-[50px]">
                        <h4 className="montserratfont text-[16px] leading-[20px] font-semibold	dark:text-[#E5E5E5]   mw-sm:text-[14px] mw-sm:leading-[17px]">
                          Can he win this time?
                        </h4>
                        <div className="flex justify-between items-center pt-[4px] pb-[8px]">
                          <p className="montserratfont text-[16px] leading-[20px] font-normal text-[#47A0B4] mw-sm:text-[12px] mw-sm:leading-[15px]">
                            #gamerlife #gossipgg #esports
                          </p>
                          <p className="montserratfont text-[14px] leading-[17px] dark:text-brandLightOpacity70  mw-sm:text-[10px] mw-sm:leading-[12px]">
                            Jan 30th, 2023, 18:08
                          </p>
                        </div>
                        <div>
                          <Image
                            src={vrbox}
                            alt=""
                            className="w-[496px] m-auto"
                          />
                          <div className="flex items-center pt-[20px] pb-[30px]">
                            <div className="flex items-center ">
                              <Image src={heart} alt="" />
                              <p className="pl-[13px] montserratfont text-[16px] leading-[20px] font-normal dark:text-[#fff]">
                                162
                              </p>
                            </div>
                            <div className="flex items-center ml-[8px]">
                              <Image
                                src={retweet}
                                alt=""
                                className="pt-[8px]"
                              />
                              <p className="pl-[4px] montserratfont text-[16px] leading-[20px] font-normal dark:text-[#fff]">
                                14
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="second_comment_wrapper pb-[36px] border-b-2
                  border-brandLightOpacity10"
                    >
                      <div className="flex justify-between pt-[36px] upper_section ">
                        <div className="left_first_comment_area flex items-center">
                          <Image src={commentLogo} alt="logo" />
                          <div className="name_handle ml-[16px]">
                            <h4 className="dark:text-[#E5E5E5] text-[16px] leading-[20px] montserratfont font-semibold	mw-sm:text-[14px] mw-sm:leading-[17px]">
                              Gossip.GG
                            </h4>
                            <p className="pt-[4px] montserratfont text-[14px] leading-[17px] font-normal	dark:text-brandLightOpacity70 mw-sm:text-[12px] mw-sm:leading-[15px]">
                              @Gossip.GG
                            </p>
                          </div>
                        </div>
                        <div className="right_second_comment_area">
                          <Image src={youtube} alt="" />
                        </div>
                      </div>
                      <div className="second_image_comment pt-[29px]">
                        <YouTube
                          videoId="sTnm5jvjgjM"
                          opts={opts}
                          onReady={_onReady}
                        />
                      </div>
                    </div>
                    <div
                      className="third_comment flex item-center mt-[32px] pb-[32px] border-b-2
                  border-brandLightOpacity10 mw-sm:py-[20px] mw-sm:mt-[0px]"
                    >
                      <div className="w-[40px] h-[40px] mw-sm:w-[70px]">
                        <Image
                          src={pinkman}
                          alt=""
                          className="mw-sm:w-[50px]"
                        />
                      </div>
                      <div className="content_area pl-[16px]">
                        <div className="content_area_top">
                          <h4 className="flex items-center montserratfont text-[18px] leading-[22px] font-bold text-[#ED4E50] mw-sm:text-[14px] mw-sm:leading-[17px]">
                            Esports Writer
                            <span>
                              <Image src={brandmark} alt="" />
                            </span>
                          </h4>
                          <p className="montserratfont text-[12px] leading-[15px] font-normal dark:text-brandLightOpacity70">
                            John D &nbsp;|&nbsp; Jan 30th, 2023, 18:08
                          </p>
                        </div>
                        <p className="pt-[16px] montserratfont font-normal text-[16px] leading-[27px] dark:text-[#E5E5E5] mw-sm:text-[12px] mw-sm:leading-[27px]">
                          The Last Of Us Part 2 may just be one of the most
                          unconventional stories ever told in gaming.
                        </p>
                      </div>
                    </div>
                    <div
                      className="third_comment flex item-center mt-[32px] pb-[32px] border-b-2
                  border-brandLightOpacity10 mw-sm:py-[20px] mw-sm:mt-[0px]"
                    >
                      <div className="w-[40px] h-[40px] mw-sm:w-[70px]">
                        <Image
                          src={pinkman}
                          alt=""
                          className="mw-sm:w-[50px]"
                        />
                      </div>
                      <div className="content_area pl-[16px]">
                        <div className="content_area_top">
                          <h4 className="flex items-center montserratfont text-[18px] leading-[22px] font-bold text-[#ED4E50] mw-sm:text-[14px] mw-sm:leading-[17px]">
                            Esports Writer
                            <span>
                              <Image src={brandmark} alt="" />
                            </span>
                          </h4>
                          <p className="montserratfont text-[12px] leading-[15px] font-normal dark:text-brandLightOpacity70">
                            John D &nbsp;|&nbsp; Jan 30th, 2023, 18:08
                          </p>
                        </div>
                        <p className="pt-[16px] montserratfont font-normal text-[16px] leading-[27px] dark:text-[#E5E5E5] mw-sm:text-[12px] mw-sm:leading-[27px]">
                          The Last Of Us Part 2 may just be one of the most
                          unconventional stories ever told in gaming.
                        </p>
                      </div>
                    </div>
                    <div className="third_comment flex item-center mt-[32px] pb-[32px] mw-sm:pb-[20px] ">
                      <div className="w-[40px] h-[40px] mw-sm:w-[70px]">
                        <Image
                          src={pinkman}
                          alt=""
                          className="mw-sm:w-[50px]"
                        />
                      </div>
                      <div className="content_area pl-[16px]">
                        <div className="content_area_top">
                          <h4 className="flex items-center montserratfont text-[18px] leading-[22px] font-bold text-[#ED4E50] mw-sm:text-[14px] mw-sm:leading-[17px]">
                            Esports Writer
                            <span>
                              <Image src={brandmark} alt="" />
                            </span>
                          </h4>
                          <p className="montserratfont text-[12px] leading-[15px] font-normal dark:text-brandLightOpacity70">
                            John D &nbsp;|&nbsp; Jan 30th, 2023, 18:08
                          </p>
                        </div>
                        <p className="pt-[16px] montserratfont font-normal text-[16px] leading-[27px] dark:text-[#E5E5E5] mw-sm:text-[12px] mw-sm:leading-[27px]">
                          The Last Of Us Part 2 may just be one of the most
                          unconventional stories ever told in gaming.
                        </p>
                        <Image
                          src={cod}
                          alt=""
                          className="w-[100%] pt-[36px] mw-sm:pt-[18px]"
                        />
                      </div>
                    </div>
                    <div className="last_comment  mt-[48px] pb-[32px] ">
                      <div className="w-[60px] h-[60px] m-auto text-center">
                        <Image
                          src={allup}
                          alt=""
                          className="w-[100%] dark:brightness-[1.5] brightness-[0.5]"
                        />
                      </div>
                      <div className="content_area pt-[16px] text-center">
                        <p className="montserratfont text-[14px] leading-[17px] font-medium	dark:text-brandLightOpacity70 pb-[4px]">
                          All Caught up
                        </p>
                        <p className="montserratfont font-medium text-[12px] leading-[15px] dark:text-brandLightOpacity50 ">
                          Check back tomorrow for latest updates
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* left section ends here */}

              {/* right section starts here */}

              <div className="mt-[48px] w-[28%] mb-[88px] mx-13:w-[34%] mw-11:w-[38%] mw-9:w-[100%] mw-9:mb-[0px]">
                <div className="valorant_sidebar_wrapper dark:bg-[#2E2A2B] bg-[#fff] rounded px-[17px] sticky top-[120px] mw-9:block">
                  <div
                    className={`${
                      isDarkTheme === "dark"
                        ? style.dark_valo_aim
                        : style.valo_aim
                    }  flex items-center pt-[41px] justify-center`}
                  >
                    <Image src={aiming} alt="" />
                    <h4 className="pl-[18px] montserratfont capitalize text-[24px] leading-[29px] font-semibold dark:text-[#E5E5E5]">
                      valorant
                    </h4>
                  </div>
                  <div className="listinng mt-[15px]">
                    {list.map((e, idx) => {
                      return (
                        <div className="pb-[14px]" key={idx}>
                          <ValorantListing
                            lighticon={e.lighticon}
                            darkicon={e.darkicon}
                            detail={e.detail}
                            title={e.title}
                          />
                        </div>
                      );
                    })}
                    <div className="flex pl-[9px]   pb-[34px] pt-[16px]">
                      <div className="w-[40px] h-[40px] dark:bg-brandLightOpacity10 rounded-full flex items-center justify-center bg-[#E9E8E9] dark:bg-brandLightOpacity10">
                        <Image
                          src={isDarkTheme === "dark" ? torurnament : darkclock}
                          alt="icon"
                          className=" "
                        />
                      </div>
                      <div className="name_size pl-[30px] ">
                        <h4 className="montserratfont text-[16px] leading-[20px] font-semibold dark:text-[#E5E5E5]">
                          Tournament&nbsp;
                        </h4>
                        <p className="pt-[8px] montserratfont text-[14px] leading-[17px] font-medium	dark:text-brandLightOpacity70">
                          Starts&nbsp; . Mar 30th, 2023,18:08
                        </p>
                        <p className="pt-[8px] montserratfont text-[14px] leading-[17px] font-medium	dark:text-brandLightOpacity70">
                          Ends &nbsp; &nbsp;. Mar 30th, 2023,18:08
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* right section ends here */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
