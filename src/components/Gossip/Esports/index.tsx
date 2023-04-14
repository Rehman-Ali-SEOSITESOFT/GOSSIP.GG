import React from "react";
import Post1 from "../../../assets/images/gossip/post1.png";
import Post2 from "../../../assets/images/gossip/post2.png";
import Post3 from "../../../assets/images/gossip/post3.png";
import downarrow from "../../../assets/user-for-you/down-arrow.png";
import uparrowColor from "../../../assets/user-for-you/fill-up-arrow.png";
import comment from "../../../assets/images/gossip/comment.png";
import bookmark from "../../../assets/user-for-you/bookmark.png";
import sharedbtn from "../../../assets/user-for-you/share.png";
import typeComment from "../../../assets/esporting-events/typeComment.png";
import user from "../../../assets/esporting-events/user1.png";
import likes from "../../../assets/esporting-events/likes.png";
import image2 from "../../../assets/esportevents2/image2.png";
import image3 from "../../../assets/esportevents2/image3.png";
import image4 from "../../../assets/esportevents2/image4.png";
import image5 from "../../../assets/esportevents2/image5.png";
import ThumbRed from "../../../assets/images/gossip/thumb-red.png";
import Complete from "../../../assets/images/gossip/complete.png";
import SectionSaprator from "@/components/SecSaprator";
import Image from "next/image";
const Esports = () => {
  return (
    <section className="w-[778px]  mw-lg:px-[20px] ">
        <div className=" mt-[48px]">
        <div className="section-saprator flex flex-row items-center pb-[24px]  overflow-hidden mw-xl:m-0	">
          <p className="text-brandDark2 font-bold font-sec-saprate-18 dark:text-secSaprator w-auto min-w-fit  mw-sm:w-full uppercase">
            Esports
          </p>
          <div className="bg-gradient-to-r from-brandDark2 h-0.5  min-w-[86%] ml-3 dark:from-secSaprator mw-sm:hidden"></div>
        </div>
        </div>
      <div className=" min-w-[100%]  mb-[24px] rounded dark:bg-brandDark1">
        <div className="px-[24px] py-[24px]">
          <p className="montserratfont mw-lg:text-[14px] font-bold  text-brandDark2 dark:text-brandLightOpacity100 text-[24px]">
            Bayes Esports appoints York Scheunemann as COO of their company
          </p>
          <small className="pt-[16px]">
            <a
              href="#"
              className="underline mw-lg:text-[12px] text-brandDark2 dark:text-brandLightOpacity100 text-sm	 montserratfont leading-4	font-normal underline-offset-2 mw-9:text-[12px]	"
            >
              John D
            </a>
            <span className="mx-[18px] mw-lg:mx-[8px] border-l w-[1px] border-l-brandDark2   dark:border-l-brandLightOpacity100"></span>
            <span className="  border-brandDark2  mw-lg:text-[12px] text-brandDark2 dark:text-brandLightOpacity100 text-sm	 montserratfont leading-4	 font-normal  mw-9:text-[12px]">
              Jan 30th, 2023, 18:08
            </span>
            <span className="mx-[18px] mw-lg:mx-[8px] border-l w-[1px] border-l-brandDark2   dark:border-l-brandLightOpacity100"></span>

            <span className=" border-brandDark2 mw-lg:text-[12px]   text-brandDark2 dark:text-brandLightOpacity100 text-sm  mw-9:text-[12px]	 montserratfont leading-4	font-normal">
              5 min read
            </span>
          </small>
          <p className="robotoslub font-normal mw-lg:text-[12px] pt-[16px] text-base text-brandLightOpacity90 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type...
          </p>
          <div className="relative">
          <Image className="my-[24px]" src={Post1} alt="post" />
          <span className="absolute right-[0px] mw-lg:top-[22px] top-[24px] bg-brand  flex items-center justify-center montserratfont text-brandLightOpacity100 h-[40px] w-[80px] mw-lg:h-[30px] mw-lg:w-[72px] mw-lg:text-[14px] font-medium text-base">LEAKS</span>
          </div>
          <div className=" flex flex-row justify-between border-t border-b border-t-brandLightOpacity10 border-b-brandLightOpacity10">
            <div className="my-[22px] item-iamge-arrows text-center flex flex-row">
              <div className="up-arrow bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile">
                <Image
                  src={uparrowColor}
                  alt="up-arrow"
                  className=" dark:brightness-100 brightness-100"
                />
              </div>
              <div className="px-4 mw-lg:text-[14px] count dark:text-brandLightOpacity100 montserratfont font-semibold	 text-base center	leading-5 py-1		">
                17
              </div>
              <div className="down-arrow bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile">
                <Image
                  src={downarrow}
                  alt="down-arrow"
                  className="brightness-0 dark:brightness-100	"
                />
              </div>
            </div>
            <div className="shared-icons flex items-center">
              <div className="relative icon bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile">
                <Image
                  src={comment}
                  alt="up-arrow"
                  className=" dark:brightness-200 brightness-0 "
                />
                <span className="absolute right-[-10px] top-[-4px] bg-brand font-medium flex items-center justify-center montserratfont text-brandLightOpacity100 h-[16px] w-[16px] rounded-full text-[11px]" >15</span>
              </div>
              <div className="icon bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer mx-[28px] mw-lg:mx-[15px]  hover:bg-borderEditProfile">
                <Image
                  src={bookmark}
                  alt="up-arrow"
                  className="dark:brightness-100 brightness-0"
                />
              </div>
              <div className="icon bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile">
                <Image
                  src={sharedbtn}
                  alt="up-arrow"
                  className="dark:brightness-200  brightness-0 "
                />
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className=" min-w-[100%]  mb-[24px] rounded dark:bg-brandDark1">
        <div className="px-[24px] py-[24px]">
          <p className="montserratfont font-bold mw-lg:text-[14px] text-brandDark2 dark:text-brandLightOpacity100 text-[24px]">
            Bayes Esports appoints York Scheunemann as COO of their company
          </p>
          <small className="pt-[16px]">
            <a
              href="#"
              className="underline mw-lg:text-[12px] text-brandDark2 dark:text-brandLightOpacity100 text-sm	 montserratfont leading-4	font-normal underline-offset-2 mw-9:text-[12px]	"
            >
              John D
            </a>
            <span className="mx-[18px] mw-lg:mx-[8px] border-l w-[1px] border-l-brandDark2   dark:border-l-brandLightOpacity100"></span>
            <span className="  border-brandDark2 mw-lg:text-[12px] text-brandDark2 dark:text-brandLightOpacity100 text-sm	 montserratfont leading-4	 font-normal  mw-9:text-[12px]">
              Jan 30th, 2023, 18:08
            </span>
            <span className="mx-[18px] mw-lg:mx-[8px] border-l w-[1px] border-l-brandDark2   dark:border-l-brandLightOpacity100"></span>

            <span className=" border-brandDark2 mw-lg:text-[12px]   text-brandDark2 dark:text-brandLightOpacity100 text-sm  mw-9:text-[12px]	 montserratfont leading-4	font-normal">
              5 min read
            </span>
          </small>
          <p className="robotoslub font-normal mw-lg:text-[12px] pt-[16px] text-base text-brandLightOpacity90 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type...
          </p>
          <Image className="my-[24px]" src={Post2} alt="post" />
          <div className=" flex flex-row justify-between border-t border-b border-t-brandLightOpacity10 border-b-brandLightOpacity10">
            <div className="my-[22px] item-iamge-arrows text-center flex flex-row">
              <div className="up-arrow bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile">
                <Image
                  src={uparrowColor}
                  alt="up-arrow"
                  className=" dark:brightness-100 brightness-100"
                />
              </div>
              <div className="px-4 mw-lg:text-[14px] count dark:text-brandLightOpacity100 montserratfont font-semibold	 text-base center	leading-5 py-1		">
                17
              </div>
              <div className="down-arrow bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile">
                <Image
                  src={downarrow}
                  alt="down-arrow"
                  className="brightness-0 dark:brightness-100	"
                />
              </div>
            </div>
            <div className="shared-icons flex items-center">
              <div className="relative icon bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile">
                <Image
                  src={comment}
                  alt="up-arrow"
                  className=" dark:brightness-200 brightness-0 "
                />
                <span className="absolute right-[-10px] top-[-4px] bg-brand font-medium flex items-center justify-center montserratfont text-brandLightOpacity100 h-[16px] w-[16px] rounded-full text-[11px]" >15</span>
              </div>
              <div className="icon bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer mx-[28px] mw-lg:mx-[15px]  hover:bg-borderEditProfile">
                <Image
                  src={bookmark}
                  alt="up-arrow"
                  className="dark:brightness-100 brightness-0"
                />
              </div>
              <div className="icon bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile">
                <Image
                  src={sharedbtn}
                  alt="up-arrow"
                  className="dark:brightness-200  brightness-0 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" min-w-[100%]  mb-[24px] rounded dark:bg-brandDark1">
        <div className="px-[24px] py-[24px]">
          <p className="montserratfont font-bold mw-lg:text-[14px]  text-brandDark2 dark:text-brandLightOpacity100 text-[24px]">
            Bayes Esports appoints York Scheunemann as COO of their company
          </p>
          <small className="pt-[16px]">
            <a
              href="#"
              className="underline text-brandDark2 mw-lg:text-[12px] dark:text-brandLightOpacity100 text-sm	 montserratfont leading-4	font-normal underline-offset-2 mw-9:text-[12px]	"
            >
              John D
            </a>
            <span className="mx-[18px] mw-lg:mx-[8px] border-l w-[1px] border-l-brandDark2   dark:border-l-brandLightOpacity100"></span>
            <span className="  border-brandDark2n mw-lg:text-[12px]  text-brandDark2 dark:text-brandLightOpacity100 text-sm	 montserratfont leading-4	 font-normal  mw-9:text-[12px]">
              Jan 30th, 2023, 18:08
            </span>
            <span className="mx-[18px]   mw-lg:mx-[8px] border-l w-[1px] border-l-brandDark2   dark:border-l-brandLightOpacity100"></span>

            <span className=" border-brandDark2  mw-lg:text-[12px]  text-brandDark2 dark:text-brandLightOpacity100 text-sm  mw-9:text-[12px]	 montserratfont leading-4	font-normal">
              5 min read
            </span>
          </small>
          <p className="robotoslub font-normal mw-lg:text-[12px] pt-[16px] text-base text-brandLightOpacity90 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type...
          </p>
          <Image className="my-[24px]" src={Post3} alt="post" />
          <div className=" flex flex-row justify-between border-t border-b border-t-brandLightOpacity10 border-b-brandLightOpacity10">
            <div className="my-[22px] item-iamge-arrows text-center flex flex-row">
              <div className="up-arrow bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile">
                <Image
                  src={uparrowColor}
                  alt="up-arrow"
                  className=" dark:brightness-100 brightness-100"
                />
              </div>
              <div className="px-4 mw-lg:text-[14px] count dark:text-brandLightOpacity100 montserratfont font-semibold	 text-base center	leading-5 py-1		">
                17
              </div>
              <div className="down-arrow bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile">
                <Image
                  src={downarrow}
                  alt="down-arrow"
                  className="brightness-0 dark:brightness-100	"
                />
              </div>
            </div>
            <div className="shared-icons flex items-center">
              <div className="relative icon bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile">
                <Image
                  src={comment}
                  alt="up-arrow"
                  className=" dark:brightness-200 brightness-0 "
                />
                <span className="absolute right-[-10px] top-[-4px] bg-brand font-medium flex items-center justify-center montserratfont text-brandLightOpacity100 h-[16px] w-[16px] rounded-full text-[11px]" >15</span>
              </div>
              <div className="icon bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer mx-[28px] mw-lg:mx-[15px]  hover:bg-borderEditProfile">
                <Image
                  src={bookmark}
                  alt="up-arrow"
                  className="dark:brightness-100 brightness-0"
                />
              </div>
              <div className="icon bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile">
                <Image
                  src={sharedbtn}
                  alt="up-arrow"
                  className="dark:brightness-200  brightness-0 "
                />
              </div>
            </div>
          </div>
          <div className="mt-[24px] mb-[12px] leave_comment_section bg-commentBg rounded w-[100%] py-[12px] ">
                    <div className="type_comment flex">
                      <Image
                        src={typeComment}
                        alt="image"
                        className="mr-[16px]"
                      />
                      <input
                        placeholder="Type a Comment"
                        type="text"
                        className="block montserratfont focus:outline-none text-[12px] w-[100%] border-b-2 border-l-0 border-t-0 border-r-0 text-brandLightOpacity70 border-brandLightOpacity10 bg-transparent placeholder:montserratfont placeholder:text-[12px] "
                      />
                    </div>

                    <div className="main_comments_wrapper">
                      <div className="comment_shown mt-[21px] flex items-center">
                        <Image src={user} alt="" className="mr-[16px] " />
                        <div className="comment_area ">
                          <div className="name_time flex mb-[8px]">
                            <h6 className=" montserratfont leading-[15px] text-[12px] font-semibold text-[#E5E5E5]">
                              GameForLife
                            </h6>
                            <p className="montserratfont text-[12px] leading-[15px] font-normal text-brandLightOpacity70	ml-[4px]">
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
                      <div className="sub_replies pl-[24px]">
                        <div className="comment_shown mt-[21px] flex items-center">
                          <Image src={image2} alt="" className="mr-[16px] " />
                          <div className="comment_area ">
                            <div className="name_time flex mb-[8px]">
                              <h6 className=" montserratfont leading-[15px] text-[12px] font-semibold text-[#E5E5E5]">
                                HogwartzzGrl
                              </h6>
                              <p className="montserratfont text-[12px] leading-[15px] font-normal text-brandLightOpacity70	ml-[4px]">
                                yesterday
                              </p>
                            </div>
                            <p className="montserratfont text-[14px] leading-[17px] text-brandLightOpacity70 font-medium	">
                              I can’t imagine playing the game without Floo
                              Flames.
                            </p>
                            <div className="likes_replays flex mt-[8px]">
                              <div className="flex items-center mr-[28px]">
                                <Image
                                  src={ThumbRed}
                                  alt=""
                                  className="mr-[8px]"
                                />
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
                        <div className="comment_shown mt-[21px] flex items-center">
                          <Image src={image3} alt="" className="mr-[16px] " />
                          <div className="comment_area ">
                            <div className="name_time flex mb-[8px]">
                              <h6 className=" montserratfont leading-[15px] text-[12px] font-semibold text-[#E5E5E5]">
                                HogwartzzGrl
                              </h6>
                              <p className="montserratfont text-[12px] leading-[15px] font-normal text-brandLightOpacity70	ml-[4px]">
                                yesterday
                              </p>
                            </div>
                            <p className="montserratfont text-[14px] leading-[17px] text-brandLightOpacity70 font-medium	">
                              I can’t imagine playing the game without Floo
                              Flames.
                            </p>
                            <div className="likes_replays flex mt-[8px]">
                              <div className="flex items-center mr-[28px]">
                                <Image
                                  src={ThumbRed}
                                  alt=""
                                  className="mr-[8px]"
                                />
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
                        <div className="comment_shown mt-[21px] flex items-center">
                          <Image src={image4} alt="" className="mr-[16px] " />
                          <div className="comment_area ">
                            <div className="name_time flex mb-[8px]">
                              <h6 className=" montserratfont leading-[15px] text-[12px] font-semibold text-[#E5E5E5]">
                                HogwartzzGrl
                              </h6>
                              <p className="montserratfont text-[12px] leading-[15px] font-normal text-brandLightOpacity70	ml-[4px]">
                                yesterday
                              </p>
                            </div>
                            <p className="montserratfont text-[14px] leading-[17px] text-brandLightOpacity70 font-medium	">
                              I can’t imagine playing the game without Floo
                              Flames.
                            </p>
                            <div className="likes_replays flex mt-[8px]">
                              <div className="flex items-center mr-[28px]">
                                <Image
                                  src={ThumbRed}
                                  alt=""
                                  className="mr-[8px]"
                                />
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
                      <div className="comment_shown mt-[21px] pb-[8px] flex items-center">
                        <Image src={image5} alt="" className="mr-[16px] " />
                        <div className="comment_area ">
                          <div className="name_time flex mb-[8px]">
                            <h6 className=" montserratfont leading-[15px] text-[12px] font-semibold text-[#E5E5E5]">
                              GameForLife
                            </h6>
                            <p className="montserratfont text-[12px] leading-[15px] font-normal text-brandLightOpacity70	ml-[4px]">
                              5 mins ago
                            </p>
                          </div>
                          <p className="montserratfont text-[14px] leading-[17px] text-brandLightOpacity70 font-medium	">
                          I can’t imagine playing the game without Floo
                              Flames, it’s my most favorite thing ever! </p>
                          <div className="likes_replays flex mt-[8px]">
                            <div className="flex items-center mr-[28px]">
                              <Image src={ThumbRed} alt="" className="mr-[8px]" />
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
                  </div>

                  <div className="mb-[36px]">
                    <p className="montserratfont text-[12px] leading-[15px] font-normal	text-brandLightOpacity70 cursor-pointer">
                      View Less Comments
                    </p>
                  </div>
        </div>
      </div>
      <div className="min-w-[100%] mt-[80px] mb-[88px] justify-center items-center flex flex-col ">
        <Image src={Complete} alt="complete load"/>
        <p className="montserratfont pt-[15px] text-brandDark1 dark:text-brandLightOpacity70 text-sm">All caught up </p>
        <p className="montserratfont pt-[4px] text-brandDark1 dark:text-brandLightOpacity50 text-xs">Check back tomorrow for latest updates</p>
      </div>
    </section>
  );
};

export default Esports;
