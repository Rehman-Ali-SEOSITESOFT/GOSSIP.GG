import Image from "next/image";
import React from "react";
import comment from "../../../assets/user-for-you/comment.png";
import sharedbtn from "../../../assets/user-for-you/share.png";
import bookmarkfill from "../../../assets/user-for-you/fill-bookmark.png";
import uparrowColor from "../../../assets/user-for-you/fill-up-arrow.png";
import downarrow from "../../../assets/user-for-you/down-arrow.png";

const AbsHeadingArticle = (props: any) => {
  return (
    <>
      <section className=" global-section-width-article">
        <div className="2xl:container">
          <div className="heading_wrapper pt-[33px] flex mw-md:pt-[23px] mw-sm4:pt-[18px]">
            <div className="w-[65%] pr-[50px] mw-9:w-[100%] mw-sm5:pr-[10px] ">
              <h2 className="montserratfont text-[32px] leading-[39px] capitalize font-bold  dark:text-[#E5E5E5] mw-xl:text-[24px] mw-xl:leading-[32px]  mw-sm:text-[18px] mw-sm:leading-[22px]">
                {props.articleHeading}
              </h2>
              <div className="date_min_name mt-[21px] mw-sm:hidden">
                <p className="montserratfont text-[14px] leading-[17px] dark:text-[#E5E5E5] font-normal mw-sm4:text-[12px] mw-sm4:leading-[14px]">
                  <span className="underline decoration-solid ">John D</span>
                  &nbsp; | &nbsp; Jan 30th,2023,18:08 &nbsp; | &nbsp; 5 min read
                </p>
              </div>
              <div className="mobile_version flex justify-between">
                <div>
                  <div className="date_min_name mt-[21px] hidden mw-sm:block">
                    <p className="montserratfont text-[14px] leading-[17px] dark:text-[#E5E5E5] font-normal mw-sm4:text-[12px] mw-sm4:leading-[14px]">
                      <span className="underline decoration-solid ">
                        John D
                      </span>
                      &nbsp; | &nbsp; Jan 30th,2023,18:08 &nbsp; | &nbsp; 5 min
                      read
                    </p>
                  </div>
                  <div className="shared-icons flex items-center mt-[21px] ">
                    <div className="icon bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile">
                      <Image
                        src={comment}
                        alt="up-arrow"
                        className="dark:brightness-200 brightness-0 "
                      />
                    </div>
                    <div className="icon bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer mx-[28px] mw-lg:mx-[15px]  hover:bg-borderEditProfile">
                      <Image
                        src={bookmarkfill}
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

                <div className="item-iamge-arrows text-center ml-[61px] mw-sm1:ml-[20px] hidden  mw-sm:block">
                  <div className="up-arrow bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile">
                    <Image
                      src={uparrowColor}
                      alt="up-arrow"
                      className=" dark:brightness-100 brightness-0"
                    />
                  </div>
                  <div className="count dark:text-brandLightOpacity100 montserratfont font-semibold	 text-base center	leading-5 py-1		">
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
              </div>
            </div>
            <div className="item-iamge-arrows text-center ml-[61px] mw-sm1:ml-[20px] mw-sm:hidden">
              <div className="up-arrow bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile">
                <Image
                  src={uparrowColor}
                  alt="up-arrow"
                  className=" dark:brightness-100 brightness-0"
                />
              </div>
              <div className="count dark:text-brandLightOpacity100 montserratfont font-semibold	 text-base center	leading-5 py-1		">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default AbsHeadingArticle;
