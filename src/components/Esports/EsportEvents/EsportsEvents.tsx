import Image from "next/image"
import React from "react"
import eyeIcon from "../../../assets/esporting-events/eye.png"
import banner from "../../../assets/esporting-events/bannerimg1.png"
import style from "./EsportsEvents.module.css"
import msg from "../../../assets/esporting-events/message.png"
import bookmark from "../../../assets/esporting-events/bookmark.png"
import forward from "../../../assets/esporting-events/forward.png"
import typeComment from "../../../assets/esporting-events/typeComment.png"
import SectionSaprator from "@/components/SecSaprator"
import user from "../../../assets/esporting-events/user1.png"
import likes from "../../../assets/esporting-events/likes.png"
import DropDown from "./EsportsEventDropdown/DropDown"
const EsportsEvents = () => {
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
            <div className="intel_presents_valorant">
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
                  typesetting industry. Lorem Ipsum has been the industry's
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
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <p className="mt-[40px] robotoslub font-normal	text-base	leading-[27px] tracking-[0.03em] text-brandLightOpacity90">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <div className="mt-[16px] mb-[60px]">
                    <a
                      href="#"
                      className=" underline	montserratfont text-base	leading-[20px] tracking-[0.05em] text-brandLightOpacity70 font-medium	"
                    >
                      See More
                    </a>
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
                  <div className="update_wrapper">
                    <SectionSaprator title="Update" />
                    <div className="udpates_">
                      <h2>Show Updates for:</h2>
                      <DropDown />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default EsportsEvents
