"use client"
import React, { useState, useEffect } from "react"
import eyeIcon from "../../../assets/esporting-events/eye.png"
import banner from "../../../assets/esporting-events/banner_.webp"
import tabImage from "../../../assets/esportevents2/tabVersionImage.png"
import msg from "../../../assets/esporting-events/message.png"
import bookmark from "../../../assets/esporting-events/bookmark.png"
import forward from "../../../assets/esporting-events/forward.png"
import typeComment from "../../../assets/esporting-events/typeComment.png"
import SectionSaprator from "@/components/SecSaprator"
import user from "../../../assets/esporting-events/user1.png"
import likes from "../../../assets/esporting-events/likes.png"
import aiming from "../../../assets/esporting-events/aiming.png"
import users from "../../../assets/esporting-events/userss.png"
import cube from "../../../assets/esporting-events/cube.png"
import trophy from "../../../assets/esporting-events/trophy.png"
import earth from "../../../assets/esporting-events/earth.png"
import profile from "../../../assets/esporting-events/profile.png"
import torurnament from "../../../assets/esporting-events/tournament.png"
import map from "../../../assets/esportevents2/pochinkimap.png"
import Image from "next/image"
import style from "./esportsEventPage.module.css"
import ValorantListing from "../event-detail/ValorantListing/ValorantListing"
import image1 from "../../../assets/esportevents2/image1.png"
import stroke from "../../../assets/esportevents2/stroke.png"
import insta from "../../../assets/esportevents2/instagram.png"
import twitters from "../../../assets/esportevents2/twitter.png"
import mail from "../../../assets/esportevents2/mail.png"
import linkedin from "../../../assets/esportevents2/linkedin.png"
import upwordarrow from "../../../assets/esportevents2/upword.png"
import downword from "../../../assets/esportevents2/downword.png"
import image2 from "../../../assets/esportevents2/image2.png"
import image3 from "../../../assets/esportevents2/image3.png"
import image4 from "../../../assets/esportevents2/image4.png"
import image5 from "../../../assets/esportevents2/image5.png"
import darkuserss from "../../../assets/esporting-events/darkusers.png"
import darkcube from "../../../assets/esporting-events/darkcube.png"
import darktrophy from "../../../assets/esporting-events/darktrophy.png"
import darkearth from "../../../assets/esporting-events/darkearth.png"
import darkprofile from "../../../assets/esporting-events/darkProfile.png"
import darkclock from "../../../assets/esporting-events/darkclock.png"

import { useTheme } from "next-themes"
const Page = () => {
  const { theme } = useTheme()
  interface List {
    title: string
    detail: string
    lighticon: any
    darkicon: any
  }
  const [isDarkTheme, setIsDarkTheme] = useState<string>()

  useEffect(() => {
    setIsDarkTheme(theme === "dark" ? "dark" : "light")
  }, [theme])

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
  ])
  return (
    <>
      <section className={`${style.esports_events_wrapper_2}`}>
        <div className="global-section-width">
          <div className="2xl:container">
            <div className="valo_community_cup mt-[44px]">
              <h2 className="montserratfont text-2xl   leading-[29px] font-bold	dark:text-[#E5E5E5] mw-sm:text-[16px] mw-sm:leading-[20px]">
                Valorant Community Cup#19
              </h2>
              <p className="mt-[10px] montserratfont text-[#008D52] font-medium	text-base	leading-[20px] mw-sm:mt-[4px] mw-sm:text-[14px]">
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
              <button className="absolute right-[24px] bottom-[50px] bg-brandLightOpacity90 rounded-[20px] montserratfont text-[#221E1F] text-[16px] leading-[20px] font-semibold py-[10px] px-[16px]          mw-9:text-[14px] mw-sm:text-[12px] mw-sm:bottom-[30px] mw-sm:right-[14px] mw-sm:py-[8px] mw-sm:px-[12px]">
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
                      className="brightness-0 dark:brightness-200"
                    />
                  </div>
                  <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard dark:text-brandLightOpacity100 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20  hover:bg-grayCardHover cursor-pointer rounded-3xl	mr-[28px]">
                    <Image
                      src={bookmark}
                      alt=""
                      width={14}
                      height={14}
                      className="brightness-0 dark:brightness-200"
                    />
                  </div>
                  <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard dark:text-brandLightOpacity100 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20  hover:bg-grayCardHover cursor-pointer rounded-3xl		">
                    <Image
                      src={forward}
                      alt=""
                      width={14}
                      height={14}
                      className="brightness-0 dark:brightness-200"
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
                  <div className="rules_and_regulation">
                    <h2 className="pt-[40px] pb-[24px] montserratfont dark:text-[#E5E5E5] tracking-[0.05em] text-2xl	leading-[30px ] font-bold	 mw-11:pt-[24px] mw-sm:text-[16px]  mw-sm:py-[16px]">
                      Rules And Regulations
                    </h2>
                    <p className="robotoslub font-normal	text-base	leading-[27px] tracking-[0.03em] dark:text-brandLightOpacity90 mw-sm:text-[16px] mw-sm:mt-[16px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged.
                    </p>
                    <p className="mt-[40px] robotoslub font-normal	text-base	leading-[27px] tracking-[0.03em] dark:text-brandLightOpacity90 mw-sm:text-[16px] mw-sm:mt-[16px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged.
                    </p>
                    <div className="royal_battle_field pt-[64px] pb-[39px] w-[80%] m-auto  mw-sm:py-[20px]">
                      <Image src={map} alt="" />
                      <p className="montserratfont text-[14px] leading-[17px] font-medium dark:text-brandLightOpacity70 pt-[8px ]">
                        Image credit: Hogwarts.com
                      </p>
                    </div>
                  </div>
                  <div className="format_eliminations pb-[48px]">
                    <h2 className=" pb-[24px] montserratfont dark:text-[#E5E5E5] tracking-[0.05em] text-2xl	leading-[30px ] font-bold	 mw-11:pt-[24px] mw-sm:text-[16px]  mw-sm:py-[16px]">
                      Formats And Eliminations
                    </h2>
                    <p className="robotoslub font-normal	text-base	leading-[27px] tracking-[0.03em] dark:text-brandLightOpacity90 mw-sm:text-[16px] mw-sm:mt-[16px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged.
                    </p>
                    <p className="mt-[40px] robotoslub font-normal	text-base	leading-[27px] tracking-[0.03em] dark:text-brandLightOpacity90 mw-sm:text-[16px] mw-sm:mt-[16px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged.
                    </p>
                  </div>
                  <div className="user_detail items-center flex pt-[53px] pb-[55px] border-t-2 border-b-2 dark:border-brandLightOpacity10  mw-9:flex-col mw-9:items-start mw-9:py-[20px]">
                    <div className="user_detail_section_left_side w-[32%] flex border-r-2 border-[#ED4E50] mw-9:w-[98%] mw-9:border-r-[0]">
                      <div className="image_wrap">
                        <Image src={image1} alt="" />
                      </div>
                      <div className="ml-[12px]">
                        <h4 className="montserratfont text-[18px] leading-[22px] font-bold dark:text-[#E5E5E5]">
                          John Dafgafgafg
                        </h4>
                        <p className="flex pt-[4px] items-center montserratfont text-[18px] font-bold leading-[22px] text-[#ED4E50]">
                          Esports Writer
                          <span className="h-[30px] w-[30px]">
                            <Image src={stroke} alt="" />
                          </span>
                        </p>
                        <div className="flex mt-[7px] mw-9:mb-[7px]">
                          <a href="#" className="mr-[16px]">
                            <Image
                              src={insta}
                              alt=""
                              className="brightness-0 dark:brightness-200"
                            />
                          </a>
                          <a href="#" className="mr-[16px]">
                            <Image
                              src={twitters}
                              alt=""
                              className="brightness-0 dark:brightness-200"
                            />
                          </a>
                          <a href="#" className="mr-[16px]">
                            <Image
                              src={mail}
                              alt=""
                              className="brightness-0 dark:brightness-200"
                            />
                          </a>
                          <a href="#" className="mr-[16px]">
                            <Image
                              src={linkedin}
                              alt=""
                              className="brightness-0 dark:brightness-200"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="right_side_user_detail_section w-[65%] mw-9:w-[98%] ">
                      <p className="ml-[15px] montserratfont text-[16px] leading-[27px] font-normal dark:text-[#E5E5E5] mw-sm:text-[14px] mw-sm:ml-[0px]  mw-sm:leading-[18px] mw-sm3:text-[12px] mw-sm3:leading-[14px]">
                        John is a professional Dota 2 player and a winner of
                        multiple championships. He has been a freelance Esports
                        journalist since 2013.professional Dota 2 player and a
                        winner of multiple championships. He has been a
                        freelance Esports journalist since
                      </p>
                    </div>
                  </div>
                  <div className="tags_wrapper pt-[32px] flex  mw-sm:pt-[20px]">
                    <div className="share_forward flex w-[32%]">
                      <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard dark:text-brandLightOpacity100 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20    hover:bg-grayCardHover cursor-pointer rounded-3xl mr-[32px]">
                        <Image
                          src={bookmark}
                          alt=""
                          className="dark:brightness-200 brightness-0 "
                        />
                      </div>
                      <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard dark:text-brandLightOpacity100 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20    hover:bg-grayCardHover cursor-pointer rounded-3xl">
                        <Image
                          src={forward}
                          alt=""
                          className="dark:brightness-200 brightness-0 "
                        />
                      </div>
                    </div>
                    <div className="arrows  w-[65%] flex ml-[150px] items-center">
                      <div className="up-arrow bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer">
                        <Image src={upwordarrow} alt="" className="" />
                      </div>
                      <div className="count dark:text-brandLightOpacity100 montserratfont font-semibold text-base center leading-5 py-1  mx-[16px]">
                        17
                      </div>
                      <div className="up-arrow bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer">
                        <Image
                          src={downword}
                          alt=""
                          className="dark:brightness-200 brightness-0 "
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pt-[58px] pb-[60px]  mw-sm:py-[20px]">
                    <a
                      href="#"
                      className="montserratfont underline text-[16px] leading-[20px] font-medium dark:text-brandLightOpacity70  mw-sm:text-[12px]"
                    >
                      See Less
                    </a>
                  </div>

                  <div className={`${style.comments_section}`}>
                    <SectionSaprator title="Comments" />
                    <p className="mt-[-16px] montserratfont font-normal	text-xs	leading-[15px] dark:text-brandLightOpacity70 ">
                      250 Comments
                    </p>
                  </div>
                  <div className="mt-[24px] mb-[12px] leave_comment_section dark:bg-commentBg bg-[#fff] rounded w-[100%] py-[12px] px-[34px] mw-sm3:py-[12px] mw-sm3:px-[6px]">
                    <div className="type_comment flex">
                      <Image
                        src={typeComment}
                        alt="image"
                        className="mr-[16px]"
                      />
                      <input
                        placeholder="Type a Comment"
                        type="text"
                        className="block focus:outline-none text-[12px] w-[75%] border-b-2 border-l-0 border-t-0 border-r-0 dark:text-brandLightOpacity70 dark:border-brandLightOpacity10  bg-transparent placeholder:montserratfont placeholder:text-[12px] "
                      />
                    </div>

                    <div className="main_comments_wrapper">
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
                          <p className="montserratfont text-[14px] leading-[17px] dark:text-brandLightOpacity70 font-medium	">
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
                      <div className="sub_replies pl-[24px]">
                        <div className="comment_shown mt-[21px] flex items-center">
                          <Image src={image2} alt="" className="mr-[16px] " />
                          <div className="comment_area ">
                            <div className="name_time flex mb-[8px]">
                              <h6 className=" montserratfont leading-[15px] text-[12px] font-semibold dark:text-[#E5E5E5]">
                                HogwartzzGrl
                              </h6>
                              <p className="montserratfont text-[12px] leading-[15px] font-normal dark:text-brandLightOpacity70	ml-[8px]">
                                yesterday
                              </p>
                            </div>
                            <p className="montserratfont text-[14px] leading-[17px] dark:text-brandLightOpacity70 font-medium	">
                              I can’t imagine playing the game without Floo
                              Flames, it’s my most favorite thing ever!
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
                        <div className="comment_shown mt-[21px] flex items-center">
                          <Image src={image3} alt="" className="mr-[16px] " />
                          <div className="comment_area ">
                            <div className="name_time flex mb-[8px]">
                              <h6 className=" montserratfont leading-[15px] text-[12px] font-semibold dark:text-[#E5E5E5]">
                                HogwartzzGrl
                              </h6>
                              <p className="montserratfont text-[12px] leading-[15px] font-normal dark:text-brandLightOpacity70	ml-[8px]">
                                yesterday
                              </p>
                            </div>
                            <p className="montserratfont text-[14px] leading-[17px] dark:text-brandLightOpacity70 font-medium	">
                              I can’t imagine playing the game without Floo
                              Flames, it’s my most favorite thing ever!
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
                        <div className="comment_shown mt-[21px] flex items-center">
                          <Image src={image4} alt="" className="mr-[16px] " />
                          <div className="comment_area ">
                            <div className="name_time flex mb-[8px]">
                              <h6 className=" montserratfont leading-[15px] text-[12px] font-semibold dark:text-[#E5E5E5]">
                                HogwartzzGrl
                              </h6>
                              <p className="montserratfont text-[12px] leading-[15px] font-normal dark:text-brandLightOpacity70	ml-[8px]">
                                yesterday
                              </p>
                            </div>
                            <p className="montserratfont text-[14px] leading-[17px] dark:text-brandLightOpacity70 font-medium	">
                              I can’t imagine playing the game without Floo
                              Flames, it’s my most favorite thing ever!
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
                      <div className="comment_shown mt-[21px] pb-[8px] flex items-center">
                        <Image src={image5} alt="" className="mr-[16px] " />
                        <div className="comment_area ">
                          <div className="name_time flex mb-[8px]">
                            <h6 className=" montserratfont leading-[15px] text-[12px] font-semibold dark:text-[#E5E5E5]">
                              GameForLife
                            </h6>
                            <p className="montserratfont text-[12px] leading-[15px] font-normal dark:text-brandLightOpacity70	ml-[8px]">
                              5 mins ago
                            </p>
                          </div>
                          <p className="montserratfont text-[14px] leading-[17px] dark:text-brandLightOpacity70 font-medium	">
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
                  </div>

                  <div className="mb-[33px]">
                    <p className="montserratfont text-[12px] leading-[15px] font-normal	dark:text-brandLightOpacity70 cursor-pointer">
                      View Less Comments
                    </p>
                  </div>
                  <div>
                    <SectionSaprator title="Updates" />
                  </div>
                  <div
                    className={`${style.updates_area_here_wrapper} text-center dark:bg-commentBg bg-[#fff] rounded px-[82px] mb-[88px]`}
                  >
                    <h4 className="montserratfont text-[32px] leading-[39px] font-bold dark:text-[#fff]  mw-sm:text-[22px]">
                      5 Days To Go!
                    </h4>
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
                    } flex items-center pt-[41px] justify-center`}
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
                            // icon={e.icon}
                            lighticon={e.lighticon}
                            darkicon={e.darkicon}
                            detail={e.detail}
                            title={e.title}
                          />
                        </div>
                      )
                    })}
                    <div className="flex pl-[9px]   pb-[34px] pt-[16px]">
                      <div className="w-[40px] h-[40px]  rounded-full flex items-center justify-center bg-[#E9E8E9] dark:bg-brandLightOpacity10">
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
  )
}

export default Page
