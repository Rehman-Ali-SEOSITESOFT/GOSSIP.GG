import React, { useState } from "react";
import Image from "next/image";
import downarrow from "../../assets/user-for-you/down-arrow.png";
import downarrowColor from "../../assets/user-for-you/fill-down-arrow.png";
import uparrow from "../../assets/user-for-you/up-arrow.png";
import uparrowColor from "../../assets/user-for-you/fill-up-arrow.png";
import comment from "../../assets/user-for-you/comment.png";
import bookmark from "../../assets/user-for-you/bookmark.png";
import bookmarkfill from "../../assets/user-for-you/fill-bookmark.png";
import sharedbtn from "../../assets/user-for-you/share.png";
import user1 from "../../assets/user-for-you/user-1.png";
import user2 from "../../assets/user-for-you/user-2.png";
import user3 from "../../assets/user-for-you/user-3.png";
import user4 from "../../assets/user-for-you/user-4.png";
import user5 from "../../assets/new-category/user5.png";
import user6 from "../../assets/new-category/user6.png";

const NewCategoryList = () => {
  const [userDetil, setUserDetail] = useState<any[]>([
    user1,
    user2,
    user3,
    user4,
    user5,
    user6,
  ]);
  return (
    <>
      <section className="newCategory_list">
        <div className="userforyou--items">
          {userDetil.map((elemet, index) => {
            return (
              <div
                className="item flex justify-between py-12	border-b border-grayCard dark:border-b-brandLightOpacity10 "
                key={index}
              >
                <div className="item-iamge-wrap max-w-[270px] h-[240px]">
                  <Image
                    src={elemet}
                    alt="Image"
                    className="max-w-[270px] w-auto rounded"
                  />
                </div>
                <div className="item-iamge-description px-6 flex flex-col justify-between	">
                  <h2 className="montserratfont text-2xl	 leading-7 font-bold	 text-brandDark2 dark:text-brandLightOpacity100">
                    Bayes Esports appoints York Scheunemann as COO of their
                    company
                  </h2>
                  <small className="py-4	">
                    <a
                      href="#"
                      className="underline text-brandDark2 dark:text-brandLightOpacity100 text-sm	 montserratfont leading-4	font-normal underline-offset-2	"
                    >
                      John D
                    </a>
                    <span className="border-l border-l-brandDark2 pl-2 ml-2 border-brandDark2   dark:border-l-brandLightOpacity100 text-brandDark2 dark:text-brandLightOpacity100 text-sm	 montserratfont leading-4	 font-normal">
                      Jan 30th, 2023, 18:08
                    </span>
                    <span className="border-l border-l-brandDark2 pl-2 ml-2 border-brandDark2   dark:border-l-brandLightOpacity100  text-brandDark2 dark:text-brandLightOpacity100 text-sm	 montserratfont leading-4	font-normal">
                      5 min read
                    </span>
                  </small>
                  <p className="robotoslub text-base leading-7 tracking-[0.03em] dark:text-brandLightOpacity90 text-textColor opacity-90	font-normal pb-[20px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type...
                  </p>
                  <div className="flex shared--btns items-center h-[35px]">
                    <div className="flex py-4 montserratfont mr-[126px]">
                      <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:text-brandLightOpacity70">
                        News
                      </div>
                      <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:text-brandLightOpacity70">
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
                            index === 1 || index === 3 ? bookmarkfill : bookmark
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
                      src={index === 0 || index === 3 ? uparrowColor : uparrow}
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
            );
          })}
        </div>
      </section>
    </>
  );
};

export default NewCategoryList;
