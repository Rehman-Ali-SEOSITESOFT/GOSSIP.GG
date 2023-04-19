import React, { useState } from "react"

import Image from "next/image"
import downarrow from "../../../assets/user-for-you/down-arrow.png"
import downarrowColor from "../../../assets/user-for-you/fill-down-arrow.png"
import uparrow from "../../../assets/user-for-you/up-arrow.png"
import uparrowColor from "../../../assets/user-for-you/fill-up-arrow.png"
import comment from "../../../assets/user-for-you/comment.png"
import bookmark from "../../../assets/user-for-you/bookmark.png"
import bookmarkfill from "../../../assets/user-for-you/fill-bookmark.png"
import sharedbtn from "../../../assets/user-for-you/share.png"
import user1 from "../../../assets/user-for-you/user-1.png"
import user2 from "../../../assets/user-for-you/user-2.png"
import user3 from "../../../assets/user-for-you/user-3.png"
import user4 from "../../../assets/user-for-you/user-4.png"
import user5 from "../../../assets/tech/hero-bg.png"
import user6 from "../../../assets/tech/ne.png"
import muser1 from "../../../assets/esports/m-news-01.png"
import muser2 from "../../../assets/esports/m-news-02.png"
import muser3 from "../../../assets/esports/m-news-03.png"
import muser4 from "../../../assets/esports/m-news-04.png"
import muser5 from "../../../assets/esports/m-news-05.png"
import muser6 from "../../../assets/esports/m-news-06.png"

import AsideBar from "../Asidebar"
import Pagination from "@/components/Pagination"
import FilterTabs from "../Filter"
import add from "../../../assets/esports/advertisement.png"
const NewsTech = () => {
  const userDetil = [user1, user2, user3, user4, user5, user6]
  const mobileuser = [muser1, muser2, muser3, muser4, muser5, muser6]
  return (
    <section className="global-section-width">
      <FilterTabs />
      <div className="2xl:container">
        <div className="flex relative mw-md:hidden">
          <div className="w-[calc(100%_-_250px)] mw-lg:w-[calc(100%_-_230px)]">
            <div className="w-full">
              {userDetil.map((elemet, index) => {
                return (
                  <div
                    className="item flex justify-between py-12	border-b border-grayCard dark:border-b-brandLightOpacity10 pr-5	 mw-lg:pr-0"
                    key={index}
                  >
                    <div className="item-iamge-wrap max-w-[270px] mw-11:max-w-[230px] mw-11:min-w-[230px]  h-[240px] mw-9:min-w-[190px] mw-9:h-[200px] mw-9:w-full">
                      <Image
                        src={elemet}
                        alt="Image"
                        className="max-w-[270px] mw-11:max-w-[100%] h-full object-cover w-auto rounded"
                      />
                    </div>
                    <div className="item-iamge-description px-6  mw-lg:px-4  mw-9:px-2 flex flex-col justify-between	">
                      <h2 className="montserratfont text-2xl	 leading-7 font-bold	 text-brandDark2 dark:text-brandLightOpacity100 news-title mw-11:text-xl	">
                        Bayes Esports appoints York Scheunemann as COO of their
                        company
                      </h2>
                      <small className="py-4 mw-lg:py-2 mw-9:py-[5px]	">
                        <a
                          href="#"
                          className="underline text-brandDark2 mr-[21px] dark:text-brandLightOpacity100 text-sm	 montserratfont leading-4	font-normal underline-offset-2 mw-9:text-[12px]	"
                        >
                          John D
                        </a>
                        <span className="border-l border-l-brandDark2 pl-[18px] mr-[18px] border-brandDark2   dark:border-l-brandLightOpacity100 text-brandDark2 dark:text-brandLightOpacity100 text-sm	 montserratfont leading-4	 font-normal  mw-9:text-[12px]">
                          Jan 30th, 2023, 18:08
                        </span>
                        <span className="border-l border-l-brandDark2 pl-[18px] border-brandDark2   dark:border-l-brandLightOpacity100  text-brandDark2 dark:text-brandLightOpacity100 text-sm  mw-9:text-[12px]	 montserratfont leading-4	font-normal">
                          5 min read
                        </span>
                      </small>
                      <p className="robotoslub text-base leading-7 tracking-[0.03em] dark:text-brandLightOpacity90 text-textColor opacity-90	font-normal pb-1 news-desc mw-9:text-[15px] mw-9:leading-[25px]">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&#39;s standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type...
                      </p>
                      <div className="flex pt-[10px] shared--btns items-center h-[35px] mw-11:justify-between">
                        <div className="flex montserratfont mr-[126px] mw-12:mr-[100px] mw-11:mr-0">
                          <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                            News
                          </div>
                          <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                            Esports
                          </div>
                        </div>
                        <div className="shared-icons flex items-center">
                          <div className="icon bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile">
                            <Image
                              src={comment}
                              alt="up-arrow"
                              className="dark:brightness-200 brightness-0 "
                            />
                          </div>
                          <div className="icon bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer mx-[28px] mw-lg:mx-[15px]  hover:bg-borderEditProfile">
                            <Image
                              src={
                                index === 1 || index === 3
                                  ? bookmarkfill
                                  : bookmark
                              }
                              alt="up-arrow"
                              className={`${
                                index === 1 || index === 3
                                  ? "dark:brightness-100 brightness-0"
                                  : "dark:brightness-100 brightness-0"
                              }`}
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
                    <div className="item-iamge-arrows text-center">
                      <div className="up-arrow bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile">
                        <Image
                          src={
                            index === 0 || index === 3 ? uparrowColor : uparrow
                          }
                          alt="up-arrow"
                          className={`${
                            index === 0 || index === 3
                              ? " dark:brightness-100 brightness-100"
                              : " dark:brightness-100 brightness-0"
                          }  `}
                        />
                      </div>
                      <div className="count dark:text-brandLightOpacity100 montserratfont font-semibold	 text-base center	leading-5 py-1		">
                        17
                      </div>
                      <div className="down-arrow bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile">
                        <Image
                          src={index === 1 ? downarrowColor : downarrow}
                          alt="down-arrow"
                          className="brightness-0 dark:brightness-100	"
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <AsideBar />
        </div>
        <div className="mobile-view hidden mw-md:block  ">
          <div className="flex flex-wrap jusitfy-between">
            {mobileuser.map((elemet, index) => {
              return (
                <div
                  className="item  py-6	border-b border-grayCard dark:border-b-brandLightOpacity10 pr-5	 mw-lg:pr-0 w-full"
                  key={index}
                >
                  {index === 4 ? (
                    <div className="pl-[40px] py-[8px] mw-sm3:pl-[10px]">
                      <h4 className="montserratfont font-medium text-xs	leading-[15px] dark:text-brandLightOpacity70 text-textColor pb-[10px]">
                        Advertisement
                      </h4>
                      <Image
                        src={add}
                        alt="advertisement"
                        className="w-full max-w-[300px]"
                      />
                    </div>
                  ) : (
                    <>
                      <div className="flex justify-between items-center">
                        <div className="item-iamge-wrap w-full max-w-[295px] h-auto mw-sm3:h-[175px] pr-4">
                          <Image src={elemet} alt="Image" className="rounded" />
                        </div>
                        <div className="item-iamge-arrows text-center">
                          <div className="up-arrow bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile">
                            <Image
                              src={
                                index === 0 || index === 3
                                  ? uparrowColor
                                  : uparrow
                              }
                              alt="up-arrow"
                              className={`${
                                index === 0 || index === 3
                                  ? " dark:brightness-100 brightness-100"
                                  : " dark:brightness-100 brightness-0"
                              }  `}
                            />
                          </div>
                          <div className="count dark:text-brandLightOpacity100 montserratfont font-semibold	 text-base center	leading-5 py-1">
                            17
                          </div>
                          <div className="down-arrow bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile">
                            <Image
                              src={index === 1 ? downarrowColor : downarrow}
                              alt="down-arrow"
                              className="brightness-0 dark:brightness-100	"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="item-iamge-description flex flex-col justify-between	">
                        <h2 className="montserratfont  text-brandDark2 dark:text-brandLightOpacity100 news-title  my-[10px] text-base font-bold leading-[17px]	">
                          Bayes Esports appoints York Scheunemann as COO of
                          reputed gaming company
                        </h2>

                        <p className="robotoslub tracking-[0.03em] dark:text-brandLightOpacity90 text-textColor opacity-90	font-normal	 text-sm leading-[20px] pb-1 news-desc ">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry&#39;s standard dummy text ever since the
                          1500s, when an unknown printer took a galley of type
                          and scrambled it to make a type...
                        </p>
                        <small className="py-4	flex justify-between">
                          <div className="">
                            <a
                              href="#"
                              className="underline text-brandDark2 dark:text-brandLightOpacity100 text-sm	 montserratfont leading-4	font-normal underline-offset-2 mw-9:text-[12px]	"
                            >
                              John D
                            </a>
                          </div>
                          <div className="">
                            <span className=" text-brandDark2 dark:text-brandLightOpacity100 text-sm	 montserratfont leading-4	font-normal underline-offset-2 mw-9:text-[12px]">
                              Jan 30th, 2023, 18:08
                            </span>
                            <span className="border-l border-l-brandDark2 pl-2 ml-2 border-brandDark2   dark:border-l-brandLightOpacity100  text-brandDark2 dark:text-brandLightOpacity100 text-sm  mw-9:text-[12px]	 montserratfont leading-4	font-normal">
                              5 min read
                            </span>
                          </div>
                        </small>
                        <div className="flex shared--btns items-center h-[35px] mw-11:justify-between">
                          <div className="flex py-4 montserratfont mr-[126px] mw-12:mr-[100px] mw-11:mr-0">
                            <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                              News
                            </div>
                            <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                              Esports
                            </div>
                          </div>
                          <div className="shared-icons flex items-center">
                            <div className="icon bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer  hover:bg-borderEditProfile">
                              <Image
                                src={comment}
                                alt="up-arrow"
                                className="dark:brightness-200 brightness-0 "
                              />
                            </div>
                            <div className="icon bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer mx-[28px] mw-lg:mx-[15px]  hover:bg-borderEditProfile">
                              <Image
                                src={
                                  index === 1 || index === 3
                                    ? bookmarkfill
                                    : bookmark
                                }
                                alt="up-arrow"
                                className={`${
                                  index === 1 || index === 3
                                    ? "dark:brightness-100 brightness-0"
                                    : "dark:brightness-100 brightness-0"
                                }`}
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
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>
        <Pagination />
      </div>
    </section>
  )
}

export default NewsTech
