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
import fire2 from "../../../assets/rewards/Fire_perspective.png";
const HeroSection = () => {
  return (
    <>
      <section>
        <div className="global-section-width ">
          <div className="2xl:container">
            <div className="flex mw-lg:flex-col mt-[43px] mw-md:mt-[20px]">
              <div className="w-5/12 mw-xl:w-2/5 block  mw-lg:w-full">
                <div className="right-side pl-8 mx-14:pl-6 mw-lg:pl-0 mw-lg:py-5 mw-lg:h-auto flex flex-col justify-between mw-sm:py-[0px]">
                  <div className="left_top mb-[16px] mw-lg:mb-[0px]">
                    <div className="relative rounded-t-[4px] overflow-hidden	">
                      <Image
                        src={heroimage1}
                        alt=""
                        className="w-full h-full"
                      />
                      <div
                        className={`${style.overlayy} overlay  absolute inset-0 `}
                      ></div>
                      <div className="absolute top-[23px] left-[13px] flex mw-md:top-[16px]">
                        <div className="w-[50px] h-[50px] bg-[#141313] rounded-[50px] border border-[#ED4E50] flex items-center justify-center">
                          <Image
                            src={rocket}
                            alt=""
                            className="w-[35px] h-[33px]"
                          />
                        </div>
                        <div className="ml-[3px] flex flex-col justify-between">
                          <h4 className="montserratfont text-[20px] font-semibold	text-[#E5E5E5]">
                            @Naveen
                          </h4>
                          <p className="montserratfont text-[10px] font-medium	text-[#E5E5E5]">
                            Top 20% players today
                          </p>
                        </div>
                      </div>
                      <div className="absolute bottom-[17px]  flex">
                        <div className="ml-[16px] border-r-[1px] border-borderColor pr-[16px] mw-12:ml-[8px] mw-sm4:pr-[12px]">
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
                        <div className="ml-[11px] border-r-[1px] border-borderColor pr-[16px] mw-12:ml-[8px] mw-sm4:pr-[12px]">
                          <div className="flex items-center justify-center">
                            <Image src={target} alt="" className="" />
                            <h4 className="montserratfont font-semibold text-[32px] uppercase text-[#E5E5E5] ml-[6px] ">
                              12
                            </h4>
                          </div>
                          <p className="interfonts text-[10px] font-normal	text-[#E5E5E5] uppercase	">
                            Answered Correctly
                          </p>
                        </div>
                        <div className="ml-[11px] ">
                          <div className="flex items-center">
                            <Image src={trophy} alt="" className="" />
                            <h4 className="montserratfont font-semibold text-[32px] uppercase text-[#E5E5E5] ml-[6px]">
                              02
                            </h4>
                          </div>
                          <p className="interfonts text-[10px] font-normal	text-[#E5E5E5] uppercase	text-center">
                            Prize Won
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#141313] rounded-b-[4px]  pl-[24px] pb-[13px] flex  pr-[18px] mw-sm4:pl-[20px] mw-sm3:pl-[16px]">
                      <div className="">
                        <div className="flex items-center">
                          <Image
                            src={fire2}
                            alt=""
                            className="w-[33px] h-[40px] ml-[-10px]"
                          />
                          <h4 className="montserratfont text-[#ED4E50] text-[40px] font-semibold uppercase leading-normal	pl-[6px] mw-12:text-[36px] mw-sm4:text-[32px]">
                            02
                          </h4>
                        </div>
                        <h5 className="interfonts text-[14.4px] capitalize font-medium	leading-normal text-[#E5E5E5] ">
                          Day Streak
                        </h5>
                        <p className="montserratfont text-[10px] leading-normal font-normal text-brandLightOpacity70 mt-[4px]">
                          Last played yesterday
                        </p>
                      </div>
                      <div className="pl-[60px] mx-14:pl-[32px] mx-13:pl-[24px] mw-sm4:pl-[8px] pt-[25px]">
                        <div className="flex items-center">
                          <div className="h-[34px] ">
                            <p className="mr-[22px] interfonts text-[22px] font-bold capitalize text-[#ED4E50] leading-normal mw-12:mr-[16px] mw-12:text-[18px] mw-xl:text-[18px] mw-sm4:text-[16px]">
                              M
                            </p>
                            <Image
                              src={tick}
                              alt=""
                              className="mw-sm4:w-[16px] mw-sm4:h-[16px]"
                            />
                          </div>
                          <div className="h-[34px]">
                            <p className="mr-[12px] text-[22px] font-bold capitalize text-[#ED4E50] leading-normal mw-12:mr-[16px] mw-12:text-[18px] mw-xl:text-[18px] mw-sm4:text-[16px]">
                              T
                            </p>
                            <Image
                              src={tick}
                              alt=""
                              className="mw-sm4:w-[16px] mw-sm4:h-[16px]"
                            />
                          </div>
                          <div className="h-[34px]">
                            <p className="mr-[12px] h-[40px] w-[40px] bg-brandLightOpacity10 rounded-[50%] flex items-center justify-center text-[22px] font-normal capitalize text-brandLightOpacity70 leading-normal mw-12:mr-[16px] mw-12:text-[18px] mw-xl:text-[18px] mw-sm4:text-[16px]">
                              W
                            </p>
                          </div>
                          <div className="h-[34px]">
                            <p className="mr-[20px]  text-[22px] font-normal capitalize text-brandLightOpacity70 leading-normal mw-12:mr-[16px] mw-12:text-[18px] mw-xl:text-[18px] mw-sm4:text-[16px]">
                              Th
                            </p>
                          </div>
                          <div className="h-[34px]">
                            <p className="mr-[20px]  text-[22px] font-normal capitalize text-brandLightOpacity70 leading-normal mw-12:mr-[16px] mw-12:text-[18px] mw-xl:text-[18px] mw-sm4:text-[16px]">
                              F
                            </p>
                          </div>
                          <div className="h-[34px]">
                            <p className="mr-[20px]  text-[22px] font-normal capitalize text-brandLightOpacity70 leading-normal mw-12:mr-[16px] mw-12:text-[18px] mw-xl:text-[18px] mw-sm4:text-[16px]">
                              Sa
                            </p>
                          </div>
                          <div className="h-[34px]">
                            <p className="mr-[20px]  text-[22px] font-normal capitalize text-brandLightOpacity70 leading-normal mw-12:mr-[16px] mw-12:text-[18px] mw-xl:text-[18px] mw-sm4:text-[16px]">
                              Su
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mw-lg:text-center m-auto">
                    <p className="hidden w-[400px] ml-auto mr-auto  mw-lg:block montserratfont text-[12px] leading-normal font-medium	text-brandLightOpacity70 mt-[48px] mw-md:mt-[31px] text-start pl-[55px] mw-sm5:pl-[55px]">
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
              <div className="w-7/12  mw-xl:w-3/5 mw-lg:w-full relative mw-lg:mt-[48px] mw-md:mt-[31px]">
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
                <div className="absolute bottom-[24px] w-[54%] right-[24px] mw-sm4:right-[17px] mw-sm4:bottom-[8px] mw-sm4:w-[60%]">
                  {/* <Image
                      src={blur}
                      alt=""
                      className="w-[376px] h-[300px] mw-12:h-[280px] mw-md:w-[300px] mw-md:h-[250px] mw-sm:h-[220px] mw-sm4:h-[180px] mw-sm5:h-[155px]"
                    /> */}
                  <div
                    className={`${style.blurry} pt-[21px] pl-[16px] pb-[31px] mw-sm4:pt-[6px] mw-sm4:pl-[8px]  mw-sm4:pb-[12px]`}
                  >
                    <h6 className="montserratfont font-medium	tracking-[9.8px] text-[14px] text-[#fff] leading-normal ">
                      QUIZ
                    </h6>
                    <p
                      className={`${style.buttinn} montserratfont text-[32px] font-semibold leading-normal text-[#E5E5E5] pt-[22px] pb-[17px] mw-12:text-[28px] mw-md:text-[22px]  mw-sm:text-[20px] mw-sm:pt-[8px] mw-sm:pb-[6px] mw-sm4:text-[12px] mw-sm:pr-[70px]`}
                    >
                      Play today to win exciting prizes like these.
                    </p>
                    <button className="montserratfont text-[18px] font-semibold leading-normal text-[#fff] bg-[#ED4E50] rounded-[24px] pt-[13px] pb-[13px] pl-[29px] pr-[29px] mw-sm4:text-[9.75px] w-[200px] mw-sm:w-[120px] mw-sm:text-[12px] mw-sm4:pt-[4px] mw-sm4:pb-[4px]">
                      Play Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
