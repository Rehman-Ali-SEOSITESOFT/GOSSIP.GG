import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import typeComment from "../../../assets/esporting-events/typeComment.png";
import user from "../../../assets/esporting-events/user1.png";
import ThumbDark from "../../../assets/images/gossip/default-dark.png";
import image2 from "../../../assets/esportevents2/image2.png";
import image3 from "../../../assets/esportevents2/image3.png";
import image4 from "../../../assets/esportevents2/image4.png";
import image5 from "../../../assets/esportevents2/image5.png";
import ThumbDefault from "../../../assets/images/gossip/default.png";
import Clickedark from "../../../assets/images/gossip/click-dark.png";
import ThumbClicked from "../../../assets/images/gossip/clickced.png";

const Comments = () => {
  const { theme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState<string>("");
  useEffect(() => {
    setIsDarkTheme(theme === "dark" ? "dark" : "light");
  }, [theme]);
  return (
    <div className="global-section-width-article ">
      <div className="max-w-[968px]  pb-[24px] mw-lg:pt-7 mw-sm:pt-[16px] ">
        <div className="section-saprator flex flex-row items-center pb-[8px]  overflow-hidden mw-xl:m-0	">
          <p className="text-brandDark2 font-bold font-sec-saprate-18 dark:text-secSaprator w-auto min-w-fit mw-sm:pt-5 mw-sm:border-t dark:border-t-brandLightOpacity10 border-t-borderEditProfile mw-sm:w-full uppercase mw-sm:capitalize ">
            Comments
          </p>
          <div className="bg-gradient-to-r from-brandDark2 h-0.5  min-w-[86%] ml-3 dark:from-secSaprator mw-sm:hidden"></div>
        </div>
        <p className="montserratfont dark:text-brandLightOpacity70 text-brandDark2 text-[12px]">
          250 Comments
        </p>
      </div>
      <div className="w-full pt-[12px] rounded border border-brandLightOpacity100 dark:border-brandLightOpacity10 mw-sm1:px-[8px] px-[34px] max-w-[968px] dark:bg-brandDark1 bg-white">
        <div className="leave_comment_section bg-white dark:bg-commentBg rounded w-[100%] py-[12px] ">
          <div className="type_comment flex">
            <Image src={typeComment} alt="image" className="mr-[16px]" />
            <input
              placeholder="Type a Comment"
              type="text"
              className="block montserratfont focus:outline-none text-[12px] w-[100%] border-b-2 border-l-0 border-t-0 border-r-0  tex-textcolor dark:text-brandLightOpacity70 dark:border-brandLightOpacity10 bg-transparent placeholder:montserratfont placeholder:text-[12px] "
            />
          </div>

          <div className="main_comments_wrapper">
            <div className="comment_shown mt-[21px] flex items-center">
              <Image src={user} alt="" className="mr-[16px] " />
              <div className="comment_area ">
                <div className="name_time flex mb-[8px]">
                  <h6 className=" montserratfont leading-[15px] text-[12px] font-semibold text-textColor dark:text-[#E5E5E5]">
                    GameForLife
                  </h6>
                  <p className="montserratfont text-[12px] leading-[15px] font-normal text-brandLightOpacity70	ml-[4px]">
                    5 mins ago
                  </p>
                </div>
                <p className="montserratfont text-[14px] leading-[17px] text-textColor dark:text-brandLightOpacity70 font-medium	">
                  This is the best feature in the Hogwarts Universe!
                </p>
                <div className="likes_replays flex mt-[8px]">
                  <div className="flex items-center mr-[28px]">
                    <Image
                      src={isDarkTheme === "dark" ? ThumbDark : ThumbDefault}
                      alt=""
                      className="mr-[8px]  hover:brightness-100"
                    />
                    <p className="montserratfont text-[12px] leading-[15px] text-textColor dark:text-brandLightOpacity70 font-normal	">
                      34
                    </p>
                  </div>
                  <a
                    href="#"
                    className="montserratfont text-[12px] leading-[15px] font-semibold text-textColor dark:text-[#E5E5E5]"
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
                    <h6 className=" montserratfont leading-[15px] text-[12px] font-semibold text-textcolor dark:text-[#E5E5E5]">
                      HogwartzzGrl
                    </h6>
                    <p className="montserratfont text-[12px] leading-[15px] font-normal text-textcolor dark:text-brandLightOpacity70	ml-[4px]">
                      yesterday
                    </p>
                  </div>
                  <p className="montserratfont text-[14px] leading-[17px] text-textcolor dark:text-brandLightOpacity70 font-medium	">
                    I can’t imagine playing the game without Floo Flames.
                  </p>
                  <div className="likes_replays flex mt-[8px]">
                    <div className="flex items-center mr-[28px]">
                      <Image
                        src={isDarkTheme === "dark" ? ThumbDark : ThumbDefault}
                        alt=""
                        className="mr-[8px]"
                      />
                      <p className="montserratfont text-[12px] leading-[15px] text-textcolor dark:text-brandLightOpacity70 font-normal	">
                        34
                      </p>
                    </div>
                    <a
                      href="#"
                      className="montserratfont text-[12px] leading-[15px] font-semibold text-textcolor dark:text-[#E5E5E5]"
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
                    <h6 className=" montserratfont leading-[15px] text-[12px] font-semibold text-textcolor dark:text-[#E5E5E5]">
                      HogwartzzGrl
                    </h6>
                    <p className="montserratfont text-[12px] leading-[15px] font-normal text-textcolor dark:text-brandLightOpacity70	ml-[4px]">
                      yesterday
                    </p>
                  </div>
                  <p className="montserratfont text-[14px] leading-[17px] text-textcolor dark:text-brandLightOpacity70 font-medium	">
                    I can’t imagine playing the game without Floo Flames.
                  </p>
                  <div className="likes_replays flex mt-[8px]">
                    <div className="flex items-center mr-[28px]">
                      <Image
                        src={isDarkTheme === "dark" ? Clickedark : ThumbClicked}
                        alt=""
                        className="mr-[8px]"
                      />
                      <p className="montserratfont text-[12px] leading-[15px] text-textcolor dark:text-brandLightOpacity70 font-normal	">
                        34
                      </p>
                    </div>
                    <a
                      href="#"
                      className="montserratfont text-[12px] leading-[15px] font-semibold text-textcolor dark:text-[#E5E5E5]"
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
                    <h6 className=" montserratfont leading-[15px] text-[12px] font-semibold text-textcolor dark:text-[#E5E5E5]">
                      HogwartzzGrl
                    </h6>
                    <p className="montserratfont text-[12px] leading-[15px] font-normal text-textcolor dark:text-brandLightOpacity70	ml-[4px]">
                      yesterday
                    </p>
                  </div>
                  <p className="montserratfont text-[14px] leading-[17px] text-textcolor dark:text-brandLightOpacity70 font-medium	">
                    I can’t imagine playing the game without Floo Flames.
                  </p>
                  <div className="likes_replays flex mt-[8px]">
                    <div className="flex items-center mr-[28px]">
                      <Image
                        src={isDarkTheme === "dark" ? Clickedark : ThumbClicked}
                        alt=""
                        className="mr-[8px]"
                      />
                      <p className="montserratfont text-[12px] leading-[15px] text-textColor dark:text-brandLightOpacity70 font-normal	">
                        34
                      </p>
                    </div>
                    <a
                      href="#"
                      className="montserratfont text-[12px] leading-[15px] font-semibold text-textcolor dark:text-[#E5E5E5]"
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
                  <h6 className=" montserratfont leading-[15px] text-[12px] font-semibold text-textcolor dark:text-[#E5E5E5]">
                    GameForLife
                  </h6>
                  <p className="montserratfont text-[12px] leading-[15px] font-normal text-textcolor dark:text-brandLightOpacity70	ml-[4px]">
                    5 mins ago
                  </p>
                </div>
                <p className="montserratfont text-[14px] leading-[17px] text-textcolor dark:text-brandLightOpacity70 font-medium	">
                  I can’t imagine playing the game without Floo Flames, it’s my
                  most favorite thing ever!
                </p>
                <div className="likes_replays flex mt-[8px]">
                  <div className="flex items-center mr-[28px]">
                    <Image
                      src={isDarkTheme === "dark" ? Clickedark : ThumbClicked}
                      alt=""
                      className="mr-[8px]"
                    />
                    <p className="montserratfont text-[12px] leading-[15px] text-textcolor dark:text-brandLightOpacity70 font-normal	">
                      34
                    </p>
                  </div>
                  <a
                    href="#"
                    className="montserratfont text-[12px] leading-[15px] font-semibold text-textcolor dark:text-[#E5E5E5]"
                  >
                    Reply
                  </a>
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
      <div className="mt-[8px]">
            <p className="montserratfont text-[12px] leading-[15px] font-normal text-brandDark1	dark:text-brandLightOpacity70 cursor-pointer">
              View More Comments
            </p>
          </div>
        
    </div>
  );
};

export default Comments;
