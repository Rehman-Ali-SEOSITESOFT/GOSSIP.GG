"use client";

import Link from "next/link";
import React, { useState } from "react";
import main from "../../../assets/artices-images/trend.png";
import amazon from "../../../assets/artices-images/amazon.png";
import d_c from "../../../assets/artices-images/dark-c.png";
import l_c from "../../../assets/artices-images/l-c.png";
import Image from "next/image";

const GammingArticlePropConsBox = () => {
  return (
    <div className="global-section-width-article	 ">
      <div className="w-full max-w-[940px] mt-12  dark:bg-brandDark1  bg-white border  border-grayCard dark:border-brandLightOpacity10 rounded mw-sm:border-0">
        <div className="title-s pb-[42px] pt-[30px] px-[30px]	flex items-center justify-between w-full mw-md:pt-[20px] mw-md:pl-[20px] mw-md:pr-[20px] mw-sm4:pr-[5px] mw-md:pb-[30px] mw-sm:flex-col mw-sm:items-start">
          <div className="img-title flex  mw-sm:mb-[20px]">
            <div className="img w-[150px] h-[115px] mw-md:w-[120px]  mw-md:max-w-full mw-md:h-[100px]">
              <Image
                src={main}
                alt="amazon"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="img-about pl-[26px] mw-md:pl-[10px]  mw-md:h-full flex flex-col justify-between">
              <h4 className="montserratfont font-bold  text-lg leading-[22px]	dark:text-brandLightOpacity100 text-brandDark1 mw-sm:text-base">
                Hogwarts Legacy
              </h4>
              <div className="desc flex items-center">
                <Image
                  src={amazon}
                  alt="amazaon"
                  className="w-[18px] h-[18px]"
                />
                <p className="flex items-center pl-[10px] pt-[5px] pb-[5px]">
                  <Image src={l_c} alt="amazaon" className="inline-block" />
                  <span className="block montserratfont font-medium text-base leading-5 dark:text-brandLightOpacity70 pl-[5px]">
                    90000
                  </span>
                </p>
              
              </div>
              <p className="montserratfont font-normal text-sm leading-[17px] dark:text-white text-brandDark2 pb-[5px] ">
                Release date : 14/4/23
              </p>
              <p className="montserratfont font-normal text-sm leading-[17px] dark:text-white text-brandDark2  pb-[5px]">
                Market Status : Launched
              </p>
              <p className="montserratfont font-normal text-sm leading-[17px] dark:text-white text-brandDark2 pb-[5px]">
                Publisher : EA
              </p>
              <p className="montserratfont font-normal text-sm leading-[17px] dark:text-white text-brandDark2">
                Developer : Infinity Ward
              </p>
            </div>
          </div>
          <div className="buy-now mw-sm:m-auto">
            <Link
              href="#"
              className=" flex border  border-brandDark1 dark:border-brandLightOpacity100  w-[230px] h-[48px] items-center justify-center rounded-3xl mw-md:w-[200px] mw-md:h-[40px] dark:hover:bg-[#353233] hover:bg-arrowicon	montserratfont font-bold text-lg	leading-[22px] capitalize dark:text-brandLightOpacity100 text-brandDark1 "
            >
              Know More
            </Link>
          </div>
        </div>
        <div className="description flex justify-between  mw-sm:flex-wrap">
          <div className="props w-full max-w-[275px] mw-sm:max-w-full mw-sm:order-2">
            <h5 className="montserratfont font-bold text-lg	 leading-[22px]	capitalize dark:text-brandLightOpacity100 text-brandDark1 border-y border-grayCard dark:border-brandLightOpacity10 py-4 pl-4">
              Props
            </h5>
            <ul className="list-disc	 pl-10px mr-[20px]	ml-[45px] mw-md:ml-[30px] mw-md:mr-[15px] py-6">
              <li className="font-medium text-base leading-[27px] tracking-[0.03em] dark:text-brandLightOpacity100 text-brandDark1  montserratfont  mw-md:text-sm ">
                Ergonomic design
              </li>
              <li className="font-medium text-base leading-[27px] tracking-[0.03em] dark:text-brandLightOpacity100 text-brandDark1 montserratfont  mw-md:text-sm ">
                Sharp low light mode
              </li>
              <li className="font-medium text-base leading-[27px] tracking-[0.03em] dark:text-brandLightOpacity100 text-brandDark1 montserratfont  mw-md:text-sm ">
                Android one certified
              </li>
            </ul>
          </div>
          <div className="cons  w-full max-w-[275px]  mw-sm:max-w-full border-x border-grayCard dark:border-brandLightOpacity10  mw-sm:border-0 mw-sm:order-3	">
            <h5 className="montserratfont font-bold text-lg	 leading-[22px]	capitalize dark:text-brandLightOpacity100 text-brandDark1 border-y border-grayCard dark:border-brandLightOpacity10 py-4 pl-4">
              Cons
            </h5>
            <ul className="list-disc pl-10px mr-[20px]	ml-[45px] py-6	mw-md:ml-[30px] mw-md:mr-[15px]">
              <li className="font-medium text-base leading-[27px] tracking-[0.03em] dark:text-brandLightOpacity100 text-brandDark1 montserratfont mw-md:text-sm ">
                
                Warm Tinge hDR photos
              </li>
              <li className="font-medium text-base leading-[27px] tracking-[0.03em] dark:text-brandLightOpacity100 text-brandDark1 montserratfont  mw-md:text-sm ">
                HDR playback not on netflix and amazon prime
              </li>
              <li className="font-medium text-base leading-[27px] tracking-[0.03em] dark:text-brandLightOpacity100 text-brandDark1 montserratfont mw-md:text-sm ">
                Punch hole is much bigger as compared to other phones with a
                similar design
              </li>
            </ul>
          </div>
          <div className="cons w-full max-w-[390px]  mw-sm:max-w-full	">
            <h5 className="montserratfont font-bold text-lg	 leading-[22px]	capitalize dark:text-brandLightOpacity100 text-brandDark1 border-y border-grayCard dark:border-brandLightOpacity10 py-4 pl-4">
              Rating
            </h5>

            <div className="px-[25px] pt-[22px] pb-[40px] mw-md:py-[20px] mw-md:pt-[15px] mw-md:pb-[30px]">
              <div className="review w-[82px] h-[82px] bg-arrowicon bg-brand flex justify-center items-center rounded-[50px]  mw-sm:w-[50px] mw-sm:h-[50px] mb-[5px]">
                <span className="montserratfont font-bold text-[22px] leading-[27px] text-brandLightOpacity100 mw-sm:text-sm ">
                  4.5/5
                </span>
              </div>

              <ul>
                <li className="">
                  <div className="slid-title-text flex justify-between pt-[33px] pb-[8px] mw-md:pt-[20px]">
                    <h4 className="montserratfont text-sm leading-[17px] capitalize dark:text-white font-normal">
                      Gameplay/ RPG elements
                    </h4>
                    <h4 className="montserratfont text-sm leading-[17px] capitalize dark:text-white font-normal">
                      4/5
                    </h4>
                  </div>
                  <div className="slid">
                    <div className="w-full rounded-lg h-3 border dark:border-brandLightOpacity20 border-grayCard">
                      <div
                        className={`bg-brand h-[10px] rounded-lg w-[45%]`}
                      ></div>
                    </div>
                  </div>
                </li>
                <li className="">
                  <div className="slid-title-text flex justify-between pt-[33px] pb-[8px] mw-md:pt-[20px]">
                    <h4 className="montserratfont text-sm leading-[17px] capitalize dark:text-white font-normal">
                      combat
                    </h4>
                    <h4 className="montserratfont text-sm leading-[17px] capitalize dark:text-white font-normal">
                      4/5
                    </h4>
                  </div>
                  <div className="slid">
                    <div className="w-full rounded-lg h-3 border dark:border-brandLightOpacity20 border-grayCard">
                      <div
                        className={`bg-brand h-[10px] rounded-lg w-[70%]`}
                      ></div>
                    </div>
                  </div>
                </li>
                <li className="">
                  <div className="slid-title-text flex justify-between pt-[33px] pb-[8px] mw-md:pt-[20px]">
                    <h4 className="montserratfont text-sm leading-[17px] capitalize dark:text-white font-normal">
                      Value for money
                    </h4>
                    <h4 className="montserratfont text-sm leading-[17px] capitalize dark:text-white font-normal">
                      4/5
                    </h4>
                  </div>
                  <div className="slid">
                    <div className="w-full rounded-lg h-3 border dark:border-brandLightOpacity20 border-grayCard">
                      <div
                        className={`bg-brand h-[10px] rounded-lg w-[35%]`}
                      ></div>
                    </div>
                  </div>
                </li>
                <li className="">
                  <div className="slid-title-text flex justify-between pt-[33px] pb-[8px] mw-md:pt-[20px]">
                    <h4 className="montserratfont text-sm leading-[17px] capitalize dark:text-white font-normal">
                      performance
                    </h4>
                    <h4 className="montserratfont text-sm leading-[17px] capitalize dark:text-white font-normal">
                      4/5
                    </h4>
                  </div>
                  <div className="slid">
                    <div className="w-full rounded-lg h-3 border dark:border-brandLightOpacity20 border-grayCard">
                      <div
                        className={`bg-brand h-[10px] rounded-lg w-[55%]`}
                      ></div>
                    </div>
                  </div>
                </li>
                <li className="">
                  <div className="slid-title-text flex justify-between pt-[33px] pb-[8px] mw-md:pt-[20px]">
                    <h4 className="montserratfont text-sm leading-[17px] capitalize dark:text-white font-normal">
                      graphics
                    </h4>
                    <h4 className="montserratfont text-sm leading-[17px] capitalize dark:text-white font-normal">
                      4/5
                    </h4>
                  </div>
                  <div className="slid">
                    <div className="w-full rounded-lg h-3 border dark:border-brandLightOpacity20 border-grayCard">
                      <div
                        className={`bg-brand h-[10px] rounded-lg w-[55%]`}
                      ></div>
                    </div>
                  </div>
                </li>
                <li className="">
                  <div className="slid-title-text flex justify-between pt-[33px] pb-[8px] mw-md:pt-[20px]">
                    <h4 className="montserratfont text-sm leading-[17px] capitalize dark:text-white font-normal">
                      sound design
                    </h4>
                    <h4 className="montserratfont text-sm leading-[17px] capitalize dark:text-white font-normal">
                      4/5
                    </h4>
                  </div>
                  <div className="slid">
                    <div className="w-full rounded-lg h-3 border dark:border-brandLightOpacity20 border-grayCard">
                      <div
                        className={`bg-brand h-[10px] rounded-lg w-[55%]`}
                      ></div>
                    </div>
                  </div>
                </li>
                <li className="">
                  <div className="slid-title-text flex justify-between pt-[33px] pb-[8px] mw-md:pt-[20px]">
                    <h4 className="montserratfont text-sm leading-[17px] capitalize dark:text-white font-normal">
                      story
                    </h4>
                    <h4 className="montserratfont text-sm leading-[17px] capitalize dark:text-white font-normal">
                      4/5
                    </h4>
                  </div>
                  <div className="slid">
                    <div className="w-full rounded-lg h-3 border dark:border-brandLightOpacity20 border-grayCard">
                      <div
                        className={`bg-brand h-[10px] rounded-lg w-[55%]`}
                      ></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GammingArticlePropConsBox;
