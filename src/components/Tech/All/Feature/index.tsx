import React from "react";
import Image from "next/image";
import SectionSaprator from "@/components/SecSaprator";
import img1 from "../../../../assets/tech/f-1.png";
import img2 from "../../../../assets/tech/f-2.png";
import img3 from "../../../../assets/tech/f-3.png";
import img4 from "../../../../assets/tech/f-4.png";
import bookmark from "../../../../assets/tech/bookmark.png";
const TechFeature = () => {
  const images = [img1, img2, img3, img4];
  return (
    <>
      <div className="global-section-width">
        <div className="pt-[88px]  mw-lg:pt-7 mw-sm:pt-[16px]">
          <SectionSaprator title="Features" />
        </div>
        <div className="2xl:container">
          <div className=" dark:bg-brandDark1 bg-white  rounded border-grayCard border mw-sm1:hidden">
            <div className="flex flex-wrap  pt-6 pb-6 px-8	mw-lg:px-6 bg-white rounded dark:bg-brandDark1 ">
              {images.map((elem, index) => {
                return (
                  <div
                    className={`w-1/2 flex justify-between border-grayCard  dark:border-brandLightOpacity10   ${
                      index === 1 || index === 3
                        ? "border-0 pl-8"
                        : "border-r pl-0"
                    } ${index === 2 || index === 3 ? "pt-6 " : "pt-0"} `}
                    key={index}
                  >
                    <div
                      className={` w-full max-w-[60px] block  border-grayCard  dark:border-brandLightOpacity10  ${
                        index === 2 || index === 3
                          ? "border-b-0"
                          : "border-b pb-6"
                      }`}
                    >
                      <Image
                        src={elem}
                        alt="Latest new"
                        className=" min-w-full  rounded-sm object-cover	 "
                      />
                    </div>
                    <div
                      className={`px-8 mw-lg:px-6 border-b border-grayCard  dark:border-brandLightOpacity10 ${
                        index === 2 || index === 3
                          ? "border-b-0"
                          : "border-b pb-6"
                      }  `}
                    >
                      <h4 className="text-base leading-5 text-brandDark2 font-bold montserratfont dark:text-brandLightOpacity100 capitalize tech-feature-title">
                        Hellblade: Senua&#39;s Sacrifice Might Just be One of
                        the Most Important Games of the Modern Era
                      </h4>
                      <p className="font-normal	text-xs	robotoslub pt-[8px] dark:text-brandLightOpacity90 tech-feature-dec">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when...
                      </p>
                      <p className="user_name montserratfont text-xs font-medium dark:text-brandLightOpacity100 pt-[8px]">
                        -John D
                      </p>
                      <div className="tags flex pt-3.5 montserratfont">
                        <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded mr-2 text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 dark:hover:text-brandLightOpacity100    hover:text-brandDark2   dark:text-brandLightOpacity70">
                          News
                        </div>
                        <div className="montserratfont text-textColorGray bg-grayCard px-2 py-1.5 rounded text-xs leading-4 font-medium hover:bg-grayCardHover cursor-pointer dark:bg-brandLightOpacity10    hover:text-brandDark2 dark:hover:bg-brandLightOpacity20    dark:hover:text-brandLightOpacity100    dark:text-brandLightOpacity70">
                          Esports
                        </div>
                      </div>
                    </div>
                    <div
                      className={index === 1 || index === 3 ? "py-0" : "pr-8 "}
                    >
                      <div
                        className={`bookmark text-textColorGray hover:text-textColor  dark:text-brandLightOpacity70 h-full border-b border-grayCard  dark:border-brandLightOpacity10 dark:hover:text-brandLightOpacity100 w-[12px] ${
                          index === 2 || index === 3 ? "border-b-0" : "border-b"
                        }`}
                      >
                        <Image
                          src={bookmark}
                          alt=""
                          className=" brightness-0 opacity-80 hover:opacity-100  dark:brightness-200"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="hidden mw-sm1:block">
            <div className=" mw-sm1:flex flex-wrap  ">
              {images.slice(0, 2).map((elem, index) => {
                return (
                  <div
                    className={`w-full flex justify-between border-grayCard  dark:border-brandLightOpacity10 border mb-4 bg-white rounded dark:bg-brandDark1 pt-[10px] px-[12px] pb-[16px]`}
                    key={index}
                  >
                    <div
                      className={` min-w-[60px] min-h-[60px] w-[60px]  block  border-grayCard  dark:border-brandLightOpacity10`}
                    >
                      <Image
                        src={elem}
                        alt="Latest new"
                        className=" min-w-full  rounded-sm object-cover	 "
                      />
                    </div>
                    <div className="pl-[10px]">
                      <h4 className="text-base leading-5 text-brandDark2 font-bold montserratfont dark:text-brandLightOpacity100 capitalize tech-feature-title">
                        Hellblade: Senua&#39;s Sacrifice Might Just be One of
                        the Most Important Games of the Modern Era
                      </h4>
                      <p className="font-normal	text-xs	robotoslub pt-[9px] mb-[9px] dark:text-brandLightOpacity90 tech-feature-dec">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when...
                      </p>
                      <div className="flex justify-between">
                        <p className="user_name montserratfont text-xs font-medium dark:text-brandLightOpacity100 pt-[8px] ">
                          -John D
                        </p>
                        <div
                          className={`bookmark text-textColorGray hover:text-textColor  dark:text-brandLightOpacity70 h-full  dark:hover:text-brandLightOpacity100 w-[12px] `}
                        >
                          <Image
                            src={bookmark}
                            alt=""
                            className=" brightness-0 opacity-80 hover:opacity-100  dark:brightness-200"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex pt-2">
            <div className="w-full">
              <a
                href="#"
                className="hover:text-[#000000] dark:hover:text-[white] text-textColorGray dark:text-brandLightOpacity70 montserratfont font-base  leading-5"
              >
                View more <span>&gt;</span>
                <span>&gt;</span>
                <span>&gt;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechFeature;
