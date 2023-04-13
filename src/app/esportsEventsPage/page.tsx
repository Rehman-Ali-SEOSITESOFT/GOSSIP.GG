"use client"
import React, { useState } from "react"
import eyeIcon from "../../assets/esporting-events/eye.png"
import banner from "../../assets/esporting-events/bannerimg1.png"
import msg from "../../assets/esporting-events/message.png"
import bookmark from "../../assets/esporting-events/bookmark.png"
import forward from "../../assets/esporting-events/forward.png"
import typeComment from "../../assets/esporting-events/typeComment.png"
import SectionSaprator from "@/components/SecSaprator"
import user from "../../assets/esporting-events/user1.png"
import likes from "../../assets/esporting-events/likes.png"
import commentLogo from "../../assets/esporting-events/commentLogo.png"
import twitter from "../../assets/esporting-events/twitter.png"
import vrbox from "../../assets/esporting-events/vrbox.png"
import heart from "../../assets/esporting-events/heart.png"
import retweet from "../../assets/esporting-events/retweet.png"
import youtube from "../../assets/esporting-events/youtube.png"
import youtubepreview from "../../assets/esporting-events/videopreview.png"
import pinkman from "../../assets/esporting-events/pinkman.png"
import brandmark from "../../assets/esporting-events/smallbrand.png"
import cod from "../../assets/esporting-events/cod2.png"
import allup from "../../assets/esporting-events/allup.png"
import aiming from "../../assets/esporting-events/aiming.png"
import users from "../../assets/esporting-events/userss.png"
import cube from "../../assets/esporting-events/cube.png"
import trophy from "../../assets/esporting-events/trophy.png"
import earth from "../../assets/esporting-events/earth.png"
import profile from "../../assets/esporting-events/profile.png"
import torurnament from "../../assets/esporting-events/tournament.png"
import Image from "next/image"
import style from "./esportsEventPage.module.css"
import ValorantListing from "@/components/Esports/EsportEvents/ValorantListing/ValorantListing"
const page = () => {
  interface List {
    title: string
    icon: any
    detail: string
  }
  const [list, setList] = useState<List[]>([
    {
      icon: users,
      title: "Team Size",
      detail: "5v5 + 2 sustitutes",
    },
    {
      icon: cube,
      title: "Format",
      detail: "Single Elimination",
    },
    {
      icon: trophy,
      title: "Prizepool",
      detail: "$35000",
    },
    {
      icon: earth,
      title: "Region",
      detail: "Southeast Asia",
    },
    {
      icon: profile,
      title: "Sponsors",
      detail: "Intel.DHL",
    },
  ])
  return (
    <>
      <section className="esports_events_wrapper_">
        <div className="global-section-width">
          <div className="2xl:container">
            <div className="valo_community_cup mt-[44px]">
              <h2 className="montserratfont text-2xl   leading-[29px] font-bold	text-[#E5E5E5]">
                {" "}
                Valorant Community Cup#19{" "}
              </h2>
              <p className="mt-[10px] montserratfont text-[#008D52] font-medium	text-base	leading-[20px] ">
                Registration Open
              </p>
              <div className="flex mt-[10px]">
                <p className="montserratfont text-sm	leading-[17px] font-medium	text-brandLightOpacity70">
                  200
                </p>
                <Image src={eyeIcon} alt="" className="ml-[8px]" />
              </div>
            </div>
            <div className="banner_esports_event_">
              <div className="mt-[20px]">
                <Image src={banner} alt="img" className="" />
              </div>
            </div>
            <div className="intel_presents_valorant flex justify-between">
              {/* left section starts here */}

              <div className="w-[70%] mt-[48px]">
                <h2 className="montserratfont text-[32px] leading-[39px]  text-[#E5E5E5] font-bold	">
                  Intel Presents Valorant Community Cup#19{" "}
                </h2>
                <div className="mt-[20px]">
                  <p className="montserratfont font-normal leading-[17px] text-[#E5E5E5]	text-sm	">
                    <span>John D</span> &nbsp; | &nbsp;Jan 30th,2023,18:08
                    &nbsp; |&nbsp; 5 min read
                  </p>
                </div>
                <div className="flex items-center mt-[20px] pb-[32px]">
                  <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard dark:text-brandLightOpacity100 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20  hover:bg-grayCardHover cursor-pointer rounded-3xl	mr-[28px]">
                    <Image src={msg} alt="" width={14} height={14} />
                  </div>
                  <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard dark:text-brandLightOpacity100 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20  hover:bg-grayCardHover cursor-pointer rounded-3xl	mr-[28px]">
                    <Image src={bookmark} alt="" width={14} height={14} />
                  </div>
                  <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard dark:text-brandLightOpacity100 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20  hover:bg-grayCardHover cursor-pointer rounded-3xl		">
                    <Image src={forward} alt="" width={14} height={14} />
                  </div>
                </div>
                <p className="robotoslub text-base	leading-[27px] font-normal	text-brandLightOpacity90 tracking-[0.03em]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries.
                </p>
                <div className="about_tournament">
                  <h2 className="pt-[40px] pb-[24px] montserratfont text-[#E5E5E5] tracking-[0.05em] text-2xl	leading-[30px ] font-bold	">
                    About The Tournament
                  </h2>
                  <p className="robotoslub font-normal	text-base	leading-[27px] tracking-[0.03em] text-brandLightOpacity90">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                  </p>
                  <p className="mt-[40px] robotoslub font-normal	text-base	leading-[27px] tracking-[0.03em] text-brandLightOpacity90">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                  </p>
                  <div className="rules_and_regulation">
                    <h2 className="pt-[40px] pb-[24px] montserratfont text-[#E5E5E5] tracking-[0.05em] text-2xl	leading-[30px ] font-bold	">
                      Rules And Regulations
                    </h2>
                    <p className="robotoslub font-normal	text-base	leading-[27px] tracking-[0.03em] text-brandLightOpacity90">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged.
                    </p>
                    <p className="mt-[40px] robotoslub font-normal	text-base	leading-[27px] tracking-[0.03em] text-brandLightOpacity90">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged.
                    </p>
                  </div>
                  <div className={`${style.comments_section}`}>
                    <SectionSaprator title="Comments" />
                    <p className="mt-[-16px] montserratfont font-normal	text-xs	leading-[15px] text-brandLightOpacity70">
                      250 Comments
                    </p>
                  </div>
                  <div className="mt-[24px] mb-[12px] leave_comment_section bg-commentBg rounded w-[100%] py-[12px] px-[34px]">
                    <div className="type_comment flex">
                      <Image
                        src={typeComment}
                        alt="image"
                        className="mr-[16px]"
                      />
                      <input
                        placeholder="Type a Comment"
                        type="text"
                        className="block text-[12px] w-[75%] border-b-2 text-brandLightOpacity70 border-brandLightOpacity10 bg-transparent placeholder:montserratfont placeholder:text-[12px] focus:outline-none"
                      />
                    </div>
                    <div className="comment_shown mt-[21px] flex items-center">
                      <Image src={user} alt="" className="mr-[16px] " />
                      <div className="comment_area ">
                        <div className="name_time flex mb-[8px]">
                          <h6 className=" montserratfont leading-[15px] text-[12px] font-semibold text-[#E5E5E5]">
                            GameForLife
                          </h6>
                          <p className="montserratfont text-[12px] leading-[15px] font-normal text-brandLightOpacity70	ml-[8px]">
                            5 mins ago
                          </p>
                        </div>
                        <p className="montserratfont text-[14px] leading-[17px] text-brandLightOpacity70 font-medium	">
                          This is the best feature in the Hogwarts Universe!
                        </p>
                        <div className="likes_replays flex mt-[8px]">
                          <div className="flex items-center mr-[28px]">
                            <Image src={likes} alt="" className="mr-[8px]" />
                            <p className="montserratfont text-[12px] leading-[15px] text-brandLightOpacity70 font-normal	">
                              34
                            </p>
                          </div>
                          <a
                            href="#"
                            className="montserratfont text-[12px] leading-[15px] font-semibold text-[#E5E5E5]"
                          >
                            Reply
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-[33px]">
                    <p className="montserratfont text-[12px] leading-[15px] font-normal	text-brandLightOpacity70 cursor-pointer">
                      View More Comments
                    </p>
                  </div>

                  <div className="comments_area_here_wrapper bg-commentBg rounded py-[26px] px-[82px] mb-[88px] ">
                    <div
                      className="first_comment_area border-b-2
                  border-brandLightOpacity10"
                    >
                      <div className="flex justify-between">
                        <div className="left_first_comment_area flex items-center">
                          <Image src={commentLogo} alt="logo" />
                          <div className="name_handle ml-[16px]">
                            <h4 className="text-[#E5E5E5] text-[16px] leading-[20px] montserratfont font-semibold	">
                              Gossip.GG
                            </h4>
                            <p className="pt-[4px] montserratfont text-[14px] leading-[17px] font-normal	text-brandLightOpacity70">
                              @sportskeeda
                            </p>
                          </div>
                        </div>
                        <div className="right_first_comment_area">
                          <Image src={twitter} alt="" />
                        </div>
                      </div>
                      <div className="narrtation_and_image pt-[28px] px-[50px]">
                        <h4 className="montserratfont text-[16px] leading-[20px] font-semibold	text-[#E5E5E5]">
                          Can he win this time?
                        </h4>
                        <div className="flex justify-between items-center pt-[4px] pb-[8px]">
                          <p className="montserratfont text-[16px] leading-[20px] font-normal text-[#47A0B4]">
                            #gamerlife #gossipgg #esports
                          </p>
                          <p className="montserratfont text-[14px] leading-[17px] text-brandLightOpacity70">
                            Jan 30th, 2023, 18:08
                          </p>
                        </div>
                        <div>
                          <Image src={vrbox} alt="" className="w-[100%]" />
                          <div className="flex items-center pt-[20px] pb-[30px]">
                            <div className="flex items-center ">
                              <Image src={heart} alt="" />
                              <p className="pl-[13px] montserratfont text-[16px] leading-[20px] font-normal text-[#fff]">
                                162
                              </p>
                            </div>
                            <div className="flex items-center ml-[8px]">
                              <Image
                                src={retweet}
                                alt=""
                                className="pt-[8px]"
                              />
                              <p className="pl-[4px] montserratfont text-[16px] leading-[20px] font-normal text-[#fff]">
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
                            <h4 className="text-[#E5E5E5] text-[16px] leading-[20px] montserratfont font-semibold	">
                              Gossip.GG
                            </h4>
                            <p className="pt-[4px] montserratfont text-[14px] leading-[17px] font-normal	text-brandLightOpacity70">
                              @Gossip.GG
                            </p>
                          </div>
                        </div>
                        <div className="right_second_comment_area">
                          <Image src={youtube} alt="" />
                        </div>
                      </div>
                      <div className="second_image_comment pt-[29px]">
                        <Image
                          src={youtubepreview}
                          alt=""
                          className="w-[100%]"
                        />
                      </div>
                    </div>
                    <div
                      className="third_comment flex item-center mt-[32px] pb-[32px] border-b-2
                  border-brandLightOpacity10"
                    >
                      <div className="w-[40px] h-[40px]">
                        <Image src={pinkman} alt="" />
                      </div>
                      <div className="content_area pl-[16px]">
                        <div className="content_area_top">
                          <h4 className="flex items-center montserratfont text-[18px] leading-[22px] font-bold text-[#ED4E50]">
                            Esports Writer{" "}
                            <span>
                              <Image src={brandmark} alt="" />
                            </span>
                          </h4>
                          <p className="montserratfont text-[12px] leading-[15px] font-normal text-brandLightOpacity70">
                            John D &nbsp;|&nbsp; Jan 30th, 2023, 18:08
                          </p>
                        </div>
                        <p className="pt-[16px] montserratfont font-normal text-[16px] leading-[27px] text-[#E5E5E5]">
                          The Last Of Us Part 2 may just be one of the most
                          unconventional stories ever told in gaming.
                        </p>
                      </div>
                    </div>
                    <div
                      className="third_comment flex item-center mt-[32px] pb-[32px] border-b-2
                  border-brandLightOpacity10"
                    >
                      <div className="w-[40px] h-[40px]">
                        <Image src={pinkman} alt="" />
                      </div>
                      <div className="content_area pl-[16px]">
                        <div className="content_area_top">
                          <h4 className="flex items-center montserratfont text-[18px] leading-[22px] font-bold text-[#ED4E50]">
                            Esports Writer{" "}
                            <span>
                              <Image src={brandmark} alt="" />
                            </span>
                          </h4>
                          <p className="montserratfont text-[12px] leading-[15px] font-normal text-brandLightOpacity70">
                            John D &nbsp;|&nbsp; Jan 30th, 2023, 18:08
                          </p>
                        </div>
                        <p className="pt-[16px] montserratfont font-normal text-[16px] leading-[27px] text-[#E5E5E5]">
                          The Last Of Us Part 2 may just be one of the most
                          unconventional stories ever told in gaming.
                        </p>
                      </div>
                    </div>
                    <div className="third_comment flex item-center mt-[32px] pb-[32px] ">
                      <div className="w-[40px] h-[40px]">
                        <Image src={pinkman} alt="" />
                      </div>
                      <div className="content_area pl-[16px]">
                        <div className="content_area_top">
                          <h4 className="flex items-center montserratfont text-[18px] leading-[22px] font-bold text-[#ED4E50]">
                            Esports Writer{" "}
                            <span>
                              <Image src={brandmark} alt="" />
                            </span>
                          </h4>
                          <p className="montserratfont text-[12px] leading-[15px] font-normal text-brandLightOpacity70">
                            John D &nbsp;|&nbsp; Jan 30th, 2023, 18:08
                          </p>
                        </div>
                        <p className="pt-[16px] montserratfont font-normal text-[16px] leading-[27px] text-[#E5E5E5]">
                          The Last Of Us Part 2 may just be one of the most
                          unconventional stories ever told in gaming.
                        </p>
                        <Image
                          src={cod}
                          alt=""
                          className="w-[100%] pt-[36px]"
                        />
                      </div>
                    </div>
                    <div className="last_comment  mt-[48px] pb-[32px] ">
                      <div className="w-[60px] h-[60px] m-auto text-center">
                        <Image src={allup} alt="" className="w-[100%]" />
                      </div>
                      <div className="content_area pt-[16px] text-center">
                        <p className="montserratfont text-[14px] leading-[17px] font-medium	text-brandLightOpacity70 pb-[4px]">
                          All Caught up
                        </p>
                        <p className="montserratfont font-medium text-[12px] leading-[15px] text-brandLightOpacity50 ">
                          Check back tomorrow for latest updates
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* left section ends here */}

              {/* right section starts here */}

              <div className="mt-[48px] w-[28%]">
                <div className="valorant_sidebar_wrapper bg-[#2E2A2B] rounded px-[17px]">
                  <div
                    className={`${style.valo_aim} flex items-center pt-[41px] justify-center`}
                  >
                    <Image src={aiming} alt="" />
                    <h4 className="pl-[18px] montserratfont capitalize text-[24px] leading-[29px] font-semibold text-[#E5E5E5]">
                      valorant
                    </h4>
                  </div>
                  <div className="listinng mt-[15px]">
                    {list.map((e, idx) => {
                      return (
                        <div className="pb-[14px]" key={idx}>
                          <ValorantListing
                            icon={e.icon}
                            detail={e.detail}
                            title={e.title}
                          />
                        </div>
                      )
                    })}
                    <div className="flex pl-[9px]   pb-[34px] pt-[16px]">
                      <div className="w-[40px] h-[40px] bg-brandLightOpacity10 rounded-full flex items-center justify-center ">
                        <Image src={torurnament} alt="icon" className=" " />
                      </div>
                      <div className="name_size pl-[30px] ">
                        <h4 className="montserratfont text-[16px] leading-[20px] font-semibold text-[#E5E5E5s]">
                          Tournament&nbsp;
                        </h4>
                        <p className="pt-[8px] montserratfont text-[14px] leading-[17px] font-medium	text-brandLightOpacity70">
                          Starts&nbsp; . Mar 30th, 2023,18:08
                        </p>
                        <p className="pt-[8px] montserratfont text-[14px] leading-[17px] font-medium	text-brandLightOpacity70">
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

export default page
