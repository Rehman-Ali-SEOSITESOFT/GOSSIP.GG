import Filter from "@/components/Filter/Filter"
import Image from "next/image"
import React, { useState } from "react"
import user1 from "../../../assets/features-category/featureUser1.png"
import user2 from "../../../assets/features-category/featureUser1.png"
import user3 from "../../../assets/features-category/featureUser1.png"
import user4 from "../../../assets/features-category/featureUser1.png"
import user5 from "../../../assets/features-category/featureUser1.png"
import downarrow from "../../../assets/user-for-you/down-arrow.png"
import downarrowColor from "../../../assets/user-for-you/fill-down-arrow.png"
import uparrow from "../../../assets/user-for-you/up-arrow.png"
import uparrowColor from "../../../assets/user-for-you/fill-up-arrow.png"
import comment from "../../../assets/user-for-you/comment.png"
import bookmark from "../../../assets/user-for-you/bookmark.png"
import bookmarkfill from "../../../assets/user-for-you/fill-bookmark.png"
import sharedbtn from "../../../assets/user-for-you/share.png"
import brandmarker from "../../../assets/features-category/brandmark-design.png"
import rog1 from "../../../assets/features-category/rog1.png"
import rog2 from "../../../assets/features-category/rog2.png"
import Pagination from "@/components/Pagination"
const Features = () => {
  const [userDetil, setUserDetail] = useState<any[]>([
    user1,
    user2,
    user3,
    user4,
    user5,
  ])
  return (
    <>
      <section className="gaming_features_tab_wrapper">
        <div className="global-section-width">
          <div className="2xl:container">
            <div>
              <Filter />
            </div>
            <div className="features_list_section flex justify-between	">
              <div className="userforyou--items 	w-4/5">
                {userDetil.map((elemet, index) => {
                  return (
                    <div
                      className="item flex justify-between py-12 flex-col		border-b border-grayCard dark:border-b-brandLightOpacity10 "
                      key={index}
                    >
                      <div className="item-iamge-wrap flex items-center">
                        <Image
                          src={elemet}
                          alt="Image"
                          className="max-w-[270px] w-auto rounded"
                        />
                        <div className="user_detail ml-[12px]">
                          <h4 className="font-sec-saprate-18 leading-[22px] font-bold	dark:text-[#E5E5E5]">
                            John D
                          </h4>
                          <h2 className="flex items-center font-sec-saprate-18 leading-[22px] font-bold	 text-[#ED4E50]">
                            Esports Writer
                            <span className="h-[28px] w-[28px]">
                              <Image src={brandmarker} alt="" />
                            </span>
                          </h2>
                          <p className="text-sm	leading-[17px] font-normal montserratfont	dark:text-[#E5E5E5]">
                            Jan 30th, 2023, 18:08 | 5 min read
                          </p>
                        </div>
                      </div>
                      <div className="second_half flex ">
                        <div className="item-iamge-description  flex flex-col justify-between	">
                          <h2 className="pt-[26px] pr-[30px]  montserratfont text-2xl	 leading-7 font-bold	 text-brandDark2 dark:text-brandLightOpacity100">
                            The Last of Us Part II May Just be One of the Most
                            Unconventional Stories Ever Told in Gaming
                          </h2>

                          <p className="mt-[12px] pb-[18px] pr-[30px] robotoslub text-base leading-7 tracking-[0.03em] dark:text-brandLightOpacity90 text-textColor opacity-90	font-normal pb-1">
                            "The Last of Us Part II may just be the most
                            defining moment for storytelling in videogames. The
                            game accomplishes a rare feat in storytelling by
                            taking away one of the medium&#39;s key aspects,
                            agency."
                          </p>
                          <div className="flex shared--btns items-center h-[35px]">
                            <div className="flex py-4 montserratfont mr-[126px]">
                              <div className="text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:text-brandLightOpacity70">
                                News
                              </div>
                              <div className="text-textColorGray bg-grayCard px-2 py-1.5 rounded text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:text-brandLightOpacity70">
                                Esports
                              </div>
                            </div>
                            <div className="shared-icons flex items-center">
                              <div className="icon bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer">
                                <Image
                                  src={comment}
                                  alt="up-arrow"
                                  className="dark:brightness-200 brightness-0 "
                                />
                              </div>
                              <div className="icon bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer mx-[28px]">
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
                              <div className="icon bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer">
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
                          <div className="up-arrow bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer">
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
                          <div className="count dark:text-brandLightOpacity100 montserratfont font-semibold	 text-base center	leading-5 py-1		">
                            17
                          </div>
                          <div className="down-arrow bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer">
                            <Image
                              src={index === 1 ? downarrowColor : downarrow}
                              alt="down-arrow"
                              className="brightness-0 dark:brightness-100	"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="right_side_category">
                <Image src={rog1} alt="" className="pt-[48px]" />
                <Image src={rog2} alt="" className="mt-[32px]" />
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
