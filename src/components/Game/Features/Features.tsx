import Filter from "@/components/Filter/Filter"
import Image from "next/image"
import React, { useState } from "react"
import toparrow from "../../../assets/user-for-you/fill-up-arrow.png"
import bottomarrow from "../../../assets/user-for-you/down-arrow.png"
import comment from "../../../assets/user-for-you/comment.png"
import bookmark from "../../../assets/user-for-you/bookmark.png"
import shared from "../../../assets/user-for-you/share.png"
import feactureauthor from "../../../assets/tech/feature-author.png"
import Pagination from "@/components/Pagination"
import RightSidebar from "../rightbar2/RightSidebar"
import texticon from "../../../assets/author-profile/esport-icon.png"
import textIconColor from "../../../assets/author-profile/esport-icon-2.png"
import { useTheme } from "next-themes"
const Features = () => {
  const item = [1, 2, 3, 4, 5]
  const { theme } = useTheme()
  return (
    <>
      <section className="gaming_features_tab_wrapper">
        <div className="global-section-width">
          <div className="2xl:container">
            <div>
              <Filter />
            </div>
            <div className="flex mw-md:hidden">
              <div className="w-[calc(100%_-_250px)] mw-lg:w-[calc(100%_-_230px)]">
                <div className="w-full pt-[22px]">
                  {item.map((element, index) => {
                    return (
                      <div
                        className="flex flex-col w-full max-w-[900px]  py-8 border-b border-grayCard dark:border-b-brandLightOpacity10 "
                        key={index}
                      >
                        <div className="top flex items-center">
                          <div className="img max-w-[80px] w-full mr-3">
                            <Image src={feactureauthor} alt="author profile" />
                          </div>
                          <div className="detail">
                            <h2 className="title text-2xl leading-[22px] font-bold montserratfont text-brandDark2 dark:text-brandLightOpacity100 mw-lg:text-xl">
                              John D
                            </h2>
                            <h5 className="rank text-lg leading-[22px] font-bold tracking-[0.03em] text-brand dark:text-brand montserratfont h-[28px] mt-[-1px] mw-lg:text-base">
                              Esports Writer
                              {theme === "dark" ? (
                                <Image
                                  src={texticon}
                                  alt="text-icon"
                                  className="inline-block "
                                />
                              ) : (
                                <Image
                                  src={textIconColor}
                                  alt="text-icon"
                                  className="inline-block "
                                />
                              )}
                            </h5>
                            <small className="block h-[18px]">
                              <span className="border-brandDark2   dark:border-l-brandLightOpacity100 text-brandDark2 dark:text-brandLightOpacity100 text-sm montserratfont leading-4 font-normal">
                                Jan 30th, 2023, 18:08
                              </span>
                              <span className="border-l border-l-brandDark2 pl-3 ml-3 border-brandDark2   dark:border-l-brandLightOpacity100  text-brandDark2 dark:text-brandLightOpacity100 text-sm montserratfont leading-4 font-normal">
                                5 min read
                              </span>
                            </small>
                          </div>
                        </div>
                        <div className="center flex pt-7 mw-lg:pt-5">
                          <div className="center-left ">
                            <h2 className="montserratfont text-2xl leading-7 font-bold text-brandDark2 dark:text-brandLightOpacity100  mb-3 mw-lg:text-xl   mw-lg:mb-2 feature-title">
                              The Last of Us Part II May Just be One of the Most
                              Unconventional Stories Ever Told in Gaming
                            </h2>
                            <p className="robotoslub text-base leading-7 tracking-[0.03em] dark:text-brandLightOpacity90 text-textColor opacity-90 font-normal mb-5  feature-desc mw-lg:mb-2">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry&#39;s standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type...
                            </p>
                          </div>
                          <div className="center-right pl-9  text-center">
                            <div className="up-arrow bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer hover:bg-borderEditProfile">
                              <Image src={toparrow} alt="up arrow" />
                            </div>
                            <div className="count dark:text-brandLightOpacity100 montserratfont font-semibold text-base center leading-5 py-1  ">
                              17
                            </div>
                            <div className="down-arrow bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile">
                              <Image
                                src={bottomarrow}
                                alt="up arrow"
                                className="brightness-0 dark:brightness-100 "
                              />
                            </div>
                          </div>
                        </div>
                        <div className="bottom flex shared--btns items-center h-[35px]">
                          <div className="flex py-4 montserratfont mr-[260px] mw-lg:mr-[150px]">
                            <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                              News
                            </div>
                            <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                              Esports
                            </div>
                          </div>
                          <div className="shared-icons flex items-center">
                            <div className="icon bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile relative">
                              <Image
                                src={comment}
                                alt="comment"
                                className="dark:brightness-200 brightness-0 "
                              />
                              <span className="absolute right-[-10px] top-[-4px] bg-brand font-medium flex items-center justify-center montserratfont text-brandLightOpacity100 h-[16px] w-[16px] rounded-full text-[11px]">
                                15
                              </span>
                            </div>
                            <div className="icon bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer mx-[28px]  hover:bg-borderEditProfile">
                              <Image
                                src={bookmark}
                                alt="comment"
                                className="dark:brightness-200 brightness-0 "
                              />
                            </div>
                            <div className="icon bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile">
                              <Image
                                src={shared}
                                alt="comment"
                                className="dark:brightness-200 brightness-0 "
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <RightSidebar />
            </div>
            <div className="hidden mw-md:block">
              <div className="flex flex-wrap">
                {item.map((element, index) => {
                  return (
                    <div
                      className="flex flex-col w-full max-w-[900px] pt-12 "
                      key={index}
                    >
                      <div className="top flex items-center">
                        <div className="img max-w-[80px]  mw-sm:max-w-[60px] mw-sm:w-[60px] w-full mr-3">
                          <Image src={feactureauthor} alt="author profile" />
                        </div>
                        <div className="detail">
                          <h2 className="title text-base leading-5 font-bold montserratfont text-brandDark2 dark:text-brandLightOpacity100 mw-sm:text-sm mw-sm:leading-[17px] mb-[-3px]">
                            John D
                          </h2>
                          <h5 className="rank text-base leading-5 font-bold tracking-[0.03em] text-brand dark:text-brand montserratfont h-[28px] mt-[-1px]  mw-sm:text-sm mw-sm:leading-[17px]">
                            Esports Writer
                            {theme === "dark" ? (
                              <Image
                                src={texticon}
                                alt="text-icon"
                                className="inline-block "
                              />
                            ) : (
                              <Image
                                src={textIconColor}
                                alt="text-icon"
                                className="inline-block "
                              />
                            )}
                          </h5>
                          <small className="block h-[18px] mt-[-5px]">
                            <span className="border-brandDark2   dark:border-l-brandLightOpacity100 text-brandDark2 dark:text-brandLightOpacity100 text-sm montserratfont leading-4 font-normal  mw-sm:text-xs   mw-sm:leading-[15px]">
                              Jan 30th, 2023, 18:08
                            </span>
                            <span className="border-l border-l-brandDark2 pl-3 ml-3 border-brandDark2   dark:border-l-brandLightOpacity100  text-brandDark2 dark:text-brandLightOpacity100 text-sm montserratfont leading-4 font-normal mw-sm:text-xs   mw-sm:leading-[15px]">
                              5 min read
                            </span>
                          </small>
                        </div>
                      </div>
                      <div className="center flex pt-5 mw-sm:pt-3">
                        <div className="center-left ">
                          <h2 className="montserratfont text-base leading-5 font-bold text-brandDark2 dark:text-brandLightOpacity100  mb-3 feature-title mw-sm:text-sm mw-sm:leading-[17px]">
                            The Last of Us Part II May Just be One of the Most
                            Unconventional Stories Ever Told in Gaming
                          </h2>
                          <p className="robotoslub text-base leading-7 tracking-[0.03em] dark:text-brandLightOpacity90 text-textColor opacity-90 font-normal mb-5 feature-desc  mw-sm:text-xs  mw-sm:leading-[17px] mw-sm:mb-3">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&#39;s standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type...
                          </p>
                        </div>
                      </div>
                      <div className="bottom flex shared--btns items-center  justify-between items-center py-4 border-y border-grayCard dark:border-brandLightOpacity10 ">
                        <div className="center-right flex  text-center items-center ">
                          <div className="up-arrow bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer hover:bg-borderEditProfile">
                            <Image src={toparrow} alt="up arrow" />
                          </div>
                          <div className="count dark:text-brandLightOpacity100 montserratfont font-semibold text-base center leading-5 mw-sm:text-sm mw-sm:leading-[17px] px-2 ">
                            17
                          </div>
                          <div className="down-arrow bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile">
                            <Image
                              src={bottomarrow}
                              alt="up arrow"
                              className="brightness-0 dark:brightness-100 "
                            />
                          </div>
                        </div>
                        <div className="shared-icons flex items-center">
                          <div className="icon bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile relative">
                            <Image
                              src={comment}
                              alt="comment"
                              className="dark:brightness-200 brightness-0 "
                            />
                            <span className="absolute right-[-10px] top-[-4px] bg-brand font-medium flex items-center justify-center montserratfont text-brandLightOpacity100 h-[16px] w-[16px] rounded-full text-[11px]">
                              15
                            </span>
                          </div>
                          <div className="icon bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer mx-[26px]  hover:bg-borderEditProfile">
                            <Image
                              src={bookmark}
                              alt="comment"
                              className="dark:brightness-200 brightness-0 "
                            />
                          </div>
                          <div className="icon bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile">
                            <Image
                              src={shared}
                              alt="comment"
                              className="dark:brightness-200 brightness-0 "
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div>
              <Pagination />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
