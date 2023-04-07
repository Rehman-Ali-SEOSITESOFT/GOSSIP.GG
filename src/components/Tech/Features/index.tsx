import React from "react";
import FilterTabs from "../Filter";
import AsideBar from "../Asidebar";
import Pagination from "@/components/Pagination";
import toparrow from "../../../assets/user-for-you/fill-up-arrow.png";
import bottomarrow from "../../../assets/user-for-you/down-arrow.png";
import comment from "../../../assets/user-for-you/comment.png";
import bookmark from "../../../assets/user-for-you/bookmark.png";
import shared from "../../../assets/user-for-you/share.png";
import feactureauthor from "../../../assets/tech/feature-author.png";
import texticon from "../../../assets/author-profile/esport-icon.png";
import Image from "next/image";
const FeaturesTech = () => {
  const item = [1, 2, 3, 4, 5];
  return (
    <section className="FeaturesTeach global-section-width">
      <FilterTabs />
      <div className="2xl:container">
        <div className="flex">
          <div className="w-[calc(100%_-_250px)]">
            <div className="w-full pt-[22px]">
              {item.map((element, index) => {
                return (
                  <div
                    className="flex flex-col w-full max-w-[900px]  py-8 border-b border-grayCard dark:border-b-brandLightOpacity10 "
                    key={index}
                  >
                    <div className="top flex">
                      <div className="img max-w-[80px] w-full mr-3">
                        <Image src={feactureauthor} alt="author profile" />
                      </div>
                      <div className="detail">
                        <h2 className="title text-2xl leading-7 font-bold montserratfont text-brandDark2 dark:text-brandLightOpacity100 ">
                          John D
                        </h2>
                        <h5 className="rank text-lg leading-[22px] font-bold tracking-[0.03em] text-brand dark:text-brand montserratfont">
                          Esports Writer
                          <Image
                            src={texticon}
                            alt="text-icon"
                            className="inline-block pt-[5px]"
                          />
                        </h5>
                        <small className="py-4 ">
                          <span className="border-brandDark2   dark:border-l-brandLightOpacity100 text-brandDark2 dark:text-brandLightOpacity100 text-sm montserratfont leading-4 font-normal">
                            Jan 30th, 2023, 18:08
                          </span>
                          <span className="border-l border-l-brandDark2 pl-2 ml-2 border-brandDark2   dark:border-l-brandLightOpacity100  text-brandDark2 dark:text-brandLightOpacity100 text-sm montserratfont leading-4 font-normal">
                            5 min read
                          </span>
                        </small>
                      </div>
                    </div>
                    <div className="center flex pt-7">
                      <div className="center-left ">
                        <h2 className="montserratfont text-2xl leading-7 font-bold text-brandDark2 dark:text-brandLightOpacity100  pb-3">
                          The Last of Us Part II May Just be One of the Most
                          Unconventional Stories Ever Told in Gaming
                        </h2>
                        <p className="robotoslub text-base leading-7 tracking-[0.03em] dark:text-brandLightOpacity90 text-textColor opacity-90 font-normal pb-5">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry&#39;s standard dummy text ever since the
                          1500s, when an unknown printer took a galley of type
                          and scrambled it to make a type...
                        </p>
                      </div>
                      <div className="center-right pl-9  text-center">
                        <div className="up-arrow bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer">
                          <Image src={toparrow} alt="up arrow" />
                        </div>
                        <div className="count dark:text-brandLightOpacity100 montserratfont font-semibold text-base center leading-5 py-1  ">
                          17
                        </div>
                        <div className="down-arrow bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer">
                          <Image
                            src={bottomarrow}
                            alt="up arrow"
                            className="brightness-0 dark:brightness-100 "
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bottom flex shared--btns items-center h-[35px]">
                      <div className="flex py-4 montserratfont mr-[260px]">
                        <div className="text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                          News
                        </div>
                        <div className="text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                          Esports
                        </div>
                      </div>
                      <div className="shared-icons flex items-center">
                        <div className="icon bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer">
                          <Image
                            src={comment}
                            alt="comment"
                            className="dark:brightness-200 brightness-0 "
                          />
                        </div>
                        <div className="icon bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer mx-[28px]">
                          <Image
                            src={bookmark}
                            alt="comment"
                            className="dark:brightness-200 brightness-0 "
                          />
                        </div>
                        <div className="icon bg-grayCard dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 w-[32px] h-[32px] flex items-center justify-center rounded-3xl cursor-pointer">
                          <Image
                            src={shared}
                            alt="comment"
                            className="dark:brightness-200 brightness-0 "
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <AsideBar />
        </div>
        <Pagination />
      </div>
    </section>
  );
};

export default FeaturesTech;
