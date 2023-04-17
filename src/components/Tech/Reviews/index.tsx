import Image from "next/image";
import React from "react";
import review1 from "../../../assets/tech/reviewtab/1.png";
import review2 from "../../../assets/tech/reviewtab/2.png";
import review3 from "../../../assets/tech/reviewtab/3.png";
import review4 from "../../../assets/tech/reviewtab/4.png";
import review5 from "../../../assets/tech/reviewtab/5.png";
import review6 from "../../../assets/tech/reviewtab/6.png";
import review7 from "../../../assets/tech/reviewtab/7.png";
import review8 from "../../../assets/tech/reviewtab/8.png";
import review9 from "../../../assets/tech/reviewtab/9.png";
import review10 from "../../../assets/tech/reviewtab/10.png";
import review11 from "../../../assets/tech/reviewtab/11.png";
import review12 from "../../../assets/tech/reviewtab/12.png";
import AsideBar from "../Asidebar";
import Pagination from "@/components/Pagination";
import FilterTabs from "../Filter";
import bookmark from "../../../assets/tech/bookmark.png";
import addvertisement from "../../../assets/esports/advertisement.png";
const ReviewTech = () => {
  const imagesList = [
    review1,
    review2,
    review3,
    review4,
    review5,
    review6,
    review7,
    review8,
    review9,
    review10,
    review11,
    review12,
  ];
  const imagesList2 = [
    review1,
    review2,
    review3,
    review4,
    review5,
    review6,
    review7,
    review8,
    review9,
    review10,
    review11,
  ];

  return (
    <section className="global-section-width">
      <FilterTabs />

      <div className="2xl:container">
        <div className="flex mw-md:hidden">
          <div className="w-[calc(100%_-_250px)] mw-lg:w-[calc(100%_-_230px)]">
            <div className="flex flex-wrap mw-xl:justify-between mw-lg:mt-[28px]">
              {imagesList.map((elem, index) => {
                return (
                  <div
                    className="w-[270px] mw-12:w-[31%] mr-[40px] mx-13:mr-[25px]  mw-xl:mr-[0] mt-12 mw-lg:w-[48%] mw-lg:mt-[20px]"
                    key={index}
                  >
                    <div className="img-wrapper  h-[305px] mw-12:h-[250px] mw-11:h-[220px] mw-lg:h-[200px] mw-sm:h-[180px] mw-sm3:h-[150px] rounded relative">
                      <Image
                        src={elem}
                        alt="hello"
                        className="w-full h-full mw-11:object-cover rounded"
                      />

                      <div className="review w-[60px] h-[60px] bg-arrowicon bg-brand flex justify-center items-center rounded-[50px] absolute top-[8px] right-[8px] mw-sm:w-[50px] mw-sm:h-[50px]">
                        <span className="montserratfont font-bold text-lg leading-[22px] text-brandLightOpacity100 mw-sm:text-sm ">
                          4/5
                        </span>
                      </div>
                    </div>
                    <div className="description flex justify-between pt-3 ">
                      <h4 className="text-base leading-5 text-brandDark2 font-bold montserratfont dark:text-brandLightOpacity100 pr-2">
                        Check out the Great Indian Amazon Sale this month
                      </h4>
                      <div>
                        <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard dark:text-brandLightOpacity100 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20    hover:bg-grayCardHover cursor-pointer rounded-3xl ">
                          <Image
                            src={bookmark}
                            alt="demo"
                            className=" brightness-0 dark:brightness-200"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex py-4 montserratfont">
                      <div className="text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                        News
                      </div>
                      <div className="text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                        Esports
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <AsideBar />
        </div>
        <div className="hidden mw-md:flex">
          <div className="w-full">
            <div className="flex flex-wrap justify-between">
              {imagesList2.map((elem, index) => {
                return (
                  <>
                    {index === 6 ? (
                      <div className="border-y	b border-y-grayCard dark:border-y-brandLightOpacity10 w-full pl-[40px] py-8 mw-sm3:pl-[10px]">
                        <h4 className="montserratfont font-medium text-xs leading-[15px] dark:text-brandLightOpacity70 text-textColor pb-[10px]">
                          Advertisement
                        </h4>
                        <Image src={addvertisement} alt="demo" />
                      </div>
                    ) : (
                      <>
                        <div
                          className="w-[270px] mw-12:w-[31%] mr-[40px] mx-13:mr-[25px]  mw-xl:mr-[0] mt-12 mw-lg:w-[48%] mw-lg:mt-[20px]"
                          key={index}
                        >
                          <div className="img-wrapper  h-[305px] mw-12:h-[250px] mw-11:h-[220px] mw-lg:h-[200px] mw-sm:h-[180px] mw-sm3:h-[150px] rounded relative">
                            <Image
                              src={elem}
                              alt="hello"
                              className="w-full h-full mw-11:object-cover rounded"
                            />

                            <div className="review w-[60px] h-[60px] bg-arrowicon bg-brand flex justify-center items-center rounded-[50px] absolute top-[8px] right-[8px] mw-sm:w-[40px] mw-sm:h-[40px]">
                              <span className="montserratfont font-bold text-lg leading-[22px] text-brandLightOpacity100 mw-sm:text-sm ">
                                4/5
                              </span>
                            </div>
                          </div>
                          <div className="description flex justify-between pt-3 ">
                            <h4 className="text-base leading-5 text-brandDark2 font-bold montserratfont dark:text-brandLightOpacity100 pr-2 review-title mw-sm:text-sm mw-sm:leading-[17px] mw-sm:font-semibold">
                              Check out the Great Indian Amazon Sale this month
                            </h4>
                            <div>
                              <div className="bookmark flex items-center justify-center w-8 h-8 bg-grayCard dark:text-brandLightOpacity100 dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20    hover:bg-grayCardHover cursor-pointer rounded-3xl ">
                                <Image
                                  src={bookmark}
                                  alt="demo"
                                  className=" brightness-0 dark:brightness-200"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex py-4 montserratfont">
                            <div className="text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                              News
                            </div>
                            <div className="text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                              Esports
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <Pagination />
      </div>
    </section>
  );
};

export default ReviewTech;
