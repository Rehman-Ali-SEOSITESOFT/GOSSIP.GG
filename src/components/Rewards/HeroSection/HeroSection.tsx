import Image from "next/image";
import React from "react";
import heroimage1 from "../../../assets/rewards/heroimge1.png";
import style from "./hero.module.css";
import heroimage2 from "../../../assets/rewards/heroImage2.png";
import fire from "../../../assets/rewards/fire.png";
import rocket from "../../../assets/rewards/rocket.png";
import remote from "../../../assets/rewards/playingremote.png";
import target from "../../../assets/rewards/target.png";
import trophy from "../../../assets/rewards/trohy.png";
import tick from "../../../assets/rewards/mark.png";
import gossipWinner from "../../../assets/rewards/rightGroup.png";
import blur from "../../../assets/rewards/blue.png";
import advertisment from "../../../assets/rewards/advertisement.png";
import tabHero from "../../../assets/rewards/tabHero.png";
import laptop from "../../../assets/rewards/laptoop.png";
const HeroSection = () => {
  return (
    <>
      <section>
        <div className="global-section-width ">
          <div className="2xl:container">
            <div className="flex mw-lg:flex-col mt-[51px] mw-md:mt-[20px]">
              <div className="w-5/12 mw-xl:w-2/5 block  mw-lg:w-full">
                <div className="right-side pl-8 mx-14:pl-6 mw-lg:pl-0 mw-lg:py-5 mw-lg:h-auto flex flex-col justify-between mw-sm:py-[0px]">
                  <div className="left_top mb-[16px]">
                    <div className="relative border-[1px] border-[#000]">
                      <Image
                        src={heroimage1}
                        alt=""
                        className="w-full h-full"
                      />
                      <div
                        className={`${style.overlayy} overlay  absolute inset-0 `}
                      ></div>
                      <div className="absolute top-[23px] left-[13px] flex">
                        <div className="w-[50px] h-[50px] bg-[#141313] rounded-[50px] border border-[#ED4E50] flex items-center justify-center">
                          <Image
                            src={rocket}
                            alt=""
                            className="w-[35px] h-[33px]"
                          />
                        </div>
                        <div className="ml-[10px]">
                          <h4 className="montserratfont text-[20px] font-semibold	text-[#E5E5E5]">
                            @Naveen
                          </h4>
                          <p className="montserratfont text-[10px] font-medium	text-[#E5E5E5]">
                            Top 20% players today
                          </p>
                        </div>
                      </div>
                      <div className="absolute bottom-[17px]  flex">
                        <div className="ml-[16px] border-r-[1px] border-borderColor pr-[12px] mw-12:ml-[8px]">
                          <div className="flex items-center">
                            <Image src={remote} alt="" className="" />
                            <h4 className="montserratfont font-semibold text-[32px] uppercase text-[#E5E5E5] ml-[6px]">
                              24
                            </h4>
                          </div>
                          <p className="interfonts text-[10px] font-normal	text-[#E5E5E5] uppercase	">
                            Quizzes Played
                          </p>
                        </div>
                        <div className="ml-[16px] border-r-[1px] border-borderColor pr-[12px] mw-12:ml-[8px]">
                          <div className="flex items-center">
                            <Image src={target} alt="" className="" />
                            <h4 className="montserratfont font-semibold text-[32px] uppercase text-[#E5E5E5] ml-[6px]">
                              12
                            </h4>
                          </div>
                          <p className="interfonts text-[10px] font-normal	text-[#E5E5E5] uppercase	">
                            Answered Correctly
                          </p>
                        </div>
                        <div className="ml-[16px] ">
                          <div className="flex items-center">
                            <Image src={trophy} alt="" className="" />
                            <h4 className="montserratfont font-semibold text-[32px] uppercase text-[#E5E5E5] ml-[6px]">
                              02
                            </h4>
                          </div>
                          <p className="interfonts text-[10px] font-normal	text-[#E5E5E5] uppercase	">
                            Prize Won
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#141313] rounded-b-lg  pl-[18px] pb-[13px] flex items-center pr-[18px]">
                      <div className="">
                        <div className="flex items-center">
                          <Image
                            src={fire}
                            alt=""
                            className="w-[38px] h-[44px]"
                          />
                          <h4 className="montserratfont text-[#ED4E50] text-[46.08px] font-semibold uppercase leading-normal	pl-[6px] mw-12:text-[40px]">
                            02
                          </h4>
                        </div>
                        <h5 className="interfonts text-[14.4px] capitalize font-medium	leading-normal text-[#E5E5E5] ">
                          Day Streak
                        </h5>
                        <p className="montserratfont text-[10px] leading-normal font-normal text-brandLightOpacity70">
                          Last played yesterday
                        </p>
                      </div>
                      <div className="ml-[60px] mw-12:ml-[40px]">
                        <div className="flex items-center">
                          <div className="h-[34px] ">
                            <p className="mr-[22px] interfonts text-[22px] font-bold capitalize text-[#ED4E50] leading-normal mw-12:mr-[12px] mw-12:text-[18px]">
                              M
                            </p>
                            <Image src={tick} alt="" />
                          </div>
                          <div className="h-[34px]">
                            <p className="mr-[22px] text-[22px] font-bold capitalize text-[#ED4E50] leading-normal mw-12:mr-[12px] mw-12:text-[18px]">
                              T
                            </p>
                            <Image src={tick} alt="" />
                          </div>
                          <div className="h-[34px]">
                            <p className="mr-[22px] text-[22px] font-normal capitalize text-brandLightOpacity70 leading-normal mw-12:mr-[12px] mw-12:text-[18px]">
                              W
                            </p>
                          </div>
                          <div className="h-[34px]">
                            <p className="mr-[22px]  text-[22px] font-normal capitalize text-brandLightOpacity70 leading-normal mw-12:mr-[12px] mw-12:text-[18px]">
                              Th
                            </p>
                          </div>
                          <div className="h-[34px]">
                            <p className="mr-[22px]  text-[22px] font-normal capitalize text-brandLightOpacity70 leading-normal mw-12:mr-[12px] mw-12:text-[18px]">
                              F
                            </p>
                          </div>
                          <div className="h-[34px]">
                            <p className="mr-[22px]  text-[22px] font-normal capitalize text-brandLightOpacity70 leading-normal mw-12:mr-[12px] mw-12:text-[18px]">
                              Sa
                            </p>
                          </div>
                          <div className="h-[34px]">
                            <p className="mr-[22px]  text-[22px] font-normal capitalize text-brandLightOpacity70 leading-normal mw-12:mr-[12px] mw-12:text-[18px]">
                              Su
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" mw-lg:text-center">
                    <p className="hidden mw-lg:block montserratfont text-[12px] leading-normal font-medium	text-brandLightOpacity70 mt-[48px]">
                      Advertisement
                    </p>
                    <Image
                      src={heroimage2}
                      alt=""
                      className="w-full h-full mw-lg:hidden"
                    />
                    <Image
                      src={advertisment}
                      alt=""
                      className=" mw-lg:m-auto mw-lg:block hidden "
                    />
                  </div>
                </div>
              </div>
              <div className="w-7/12  mw-xl:w-3/5 mw-lg:w-full relative mw-lg:mt-[48px]">
                <Image
                  src={gossipWinner}
                  alt=""
                  className="float-right	h-full mx-14:pl-[20px] mw-xl:pl-[25px]  mw-lg:hidden"
                />
                <Image
                  src={laptop}
                  alt=""
                  className="w-full h-full mw-lg:block hidden mw-sm:hidden"
                />
                <Image
                  src={tabHero}
                  alt=""
                  className="w-full h-full mw-sm:block hidden"
                />
                <div className="absolute bottom-[24px] right-[24px] mw-sm4:right-[17px] mw-sm4:bottom-[8px]">
                  <div className="relative">
                    <Image
                      src={blur}
                      alt=""
                      className="w-[376px] h-[300px] mw-12:h-[280px] mw-md:w-[300px] mw-md:h-[250px] mw-sm:h-[220px] mw-sm4:w-[230px] mw-sm4:h-[180px]"
                    />
                    <div className="absolute top-[21px] left-[16px] ">
                      <h6 className="montserratfont font-medium	tracking-[9.8px] text-[14px] text-[#fff] leading-normal ">
                        QUIZ
                      </h6>
                      <p className="montserratfont text-[32px] font-semibold leading-normal text-[#E5E5E5] pt-[22px] pb-[22px] mw-12:text-[28px] mw-md:text-[22px] mw-sm:text-[20px] mw-sm:pt-[6px] mw-sm:pb-[6px] mw-sm4:text-[14px]">
                        Play today to win <br /> exciting prizes like <br />
                        these.
                      </p>
                      <button className="montserratfont text-[18px] font-semibold leading-normal text-[#fff] bg-[#ED4E50] rounded-[10px] pt-[10px] pb-[10px] pl-[29px] pr-[29px] mw-sm4:text-[9.75px]">
                        Play Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="w-5/12 mw-xl:w-1/2 hidden mw-lg:block mw-lg:w-full">
                <div className="right-side pl-8 mx-14:pl-6 mw-lg:pl-0 mw-lg:py-5 h-[450px] mx-14-h[420px]  mw-lg:h-auto flex flex-col justify-between mw-lg:flex-row mw-sm:flex-col"></div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
