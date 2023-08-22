import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import Slider from "react-slick";
import "./Accodiann.css";
import Image from "next/image";
import one from "../../../assets/rewards/one.png";
import two from "../../../assets/rewards/two.png";
import three from "../../../assets/rewards/three.png";
import luckywinner from "../../../assets/rewards/winner_list.png";
import prizeWinner from "../../../assets/rewards/winItem.png";
import Pagination from "@/components/Pagination";
const Accordiannn = (props: any) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const tools = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [isDarkTheme, setIsDarkTheme] = useState<string>("");
  return (
    <>
      <div className={`w-full  mainwrapper_accordoian`}>
        <div className="mx-auto w-full  rounded-2xl border border-brandLightOpacity50   pt-[22px] px-[66px]     bg-[#221E1F]">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between items-center rounded-lg bg-[#221E1F]   text-left text-sm font-medium text-purple-900  pb-[23px]">
                  <div className="flex items-center">
                    <div className="w-[150px] text-center">
                      <Slider
                        {...settings}
                        className={`${
                          isDarkTheme === "dark"
                            ? " light-arrow"
                            : " dark-arrow"
                        }`}
                      >
                        <div>
                          <p className="montserratfont text-[#ED4250] text-[20px] font-bold leading-normal">
                            {props.date}
                          </p>
                        </div>
                        <div>
                          <p className="montserratfont text-[#ED4250] text-[20px] font-bold leading-normal">
                            {props.date}
                          </p>
                        </div>
                      </Slider>
                    </div>
                    <div className="ml-[80px] ">
                      <h4 className="montserratfont text-[16px] font-bold leading-[24px] text-[#E5E5E5]">
                        {props.heading}
                      </h4>
                    </div>
                  </div>
                  <i
                    className={`fa-solid fa-angle-up text-[#ED4E50] text-[16px] ${
                      open ? "rotate-180 transform " : null
                    }`}
                  ></i>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-[51px] border-t-[1px] border-brandLightOpacity10 flex">
                  <div className=" w-6/12">
                    <div className="flex items-center">
                      <div className="flex relative">
                        <Image src={one} alt="" className="z-[2]" />
                        <Image
                          src={two}
                          alt=""
                          className="absolute right-[-10px] z-[1]"
                        />
                        <Image
                          src={three}
                          alt=""
                          className="absolute right-[-18px]"
                        />
                      </div>
                      <p className="montserratfont text-[12px] font-normal leading-normal text-brandLightOpacity90 ml-[30px]">
                        <span className="montserratfont text-[12px] font-semibold text-[#ED4E50]">
                          133
                        </span>
                        out of 560 participants answered this question
                        correctly.
                      </p>
                    </div>
                    <div className="accodiran_content_second flex mt-[18px]">
                      <h5 className="montserratfont text-[14px] font-medium	leading-normal text-brandLightOpacity70 border-r-[1px] border-brandLightOpacity10 pr-[16px]">
                        Correct Answer:
                        <span className="montserratfont text-[14px] font-medium	leading-normal text-[#ED4E50]">
                          Option B
                        </span>{" "}
                        2 Million
                      </h5>
                      <h5 className="montserratfont text-[14px] font-medium	leading-normal text-brandLightOpacity70 pl-[16px]">
                        Correct Answer:
                        <span className="montserratfont text-[14px] font-medium	leading-normal text-[#ED4E50]">
                          Option B
                        </span>{" "}
                        2 Million
                      </h5>
                    </div>
                    <div className="accoridan_content_thrird mt-[33px]">
                      <h4 className="montserratfont text-[16px] font-medium leadimg-normal text-[#ED4250]">
                        Did you know?
                      </h4>
                      <p className="montserratfont font-normal f_it leading-[24px] text-[14px] text-[#E5E5E5] pt-[7px] pr-[60px]">
                        Saudi Arabian esports tournament organiser Gamers8 has
                        announced a prize pool of $45million for its 2023 event,
                        dubbed 'The Land of Heroes'. The figure makes the prize
                        pool the largest in history, beating Dota 2's 2021
                        International figure of $40 million.
                      </p>
                    </div>
                  </div>
                  <div className="w-6/12">
                    <div className="second_slider">
                      <Slider
                        {...tools}
                        className={`${
                          isDarkTheme === "dark"
                            ? " light-arrow"
                            : " dark-arrow"
                        }`}
                      >
                        <div className="hello">
                          <div className="second flex justify-center">
                            <div className="first_">
                              <h4 className="montserratfont font-medium leading-normal text-[16px] text-[#ED4250] pb-[13px]">
                                Lucky Winners
                              </h4>
                              <div className="flex items-center bg-brandLightOpacity50 rounded px-[16px] py-[2px] mb-[6px]">
                                <Image src={luckywinner} alt="" />
                                <p className="montserratfont text-[14px] leading-normal font-normal text-[#E5E5E5] pl-[8px]">
                                  {props.winnername}
                                </p>
                              </div>
                              <div className="flex items-center bg-brandLightOpacity50 rounded px-[16px] py-[2px] mb-[6px]">
                                <Image src={luckywinner} alt="" />
                                <p className="montserratfont text-[14px] leading-normal font-normal text-[#E5E5E5] pl-[8px]">
                                  {props.winnername}
                                </p>
                              </div>
                              <div className="flex items-center bg-brandLightOpacity50 rounded px-[16px] py-[2px] mb-[6px]">
                                <Image src={luckywinner} alt="" />
                                <p className="montserratfont text-[14px] leading-normal font-normal text-[#E5E5E5] pl-[8px]">
                                  {props.winnername}
                                </p>
                              </div>
                              <div className="flex items-center bg-brandLightOpacity50 rounded px-[16px] py-[2px] mb-[6px]">
                                <Image src={luckywinner} alt="" />
                                <p className="montserratfont text-[14px] leading-normal font-normal text-[#E5E5E5] pl-[8px]">
                                  {props.winnername}
                                </p>
                              </div>
                              <div className="flex items-center bg-brandLightOpacity50 rounded px-[16px] py-[2px] mb-[6px]">
                                <Image src={luckywinner} alt="" />
                                <p className="montserratfont text-[14px] leading-normal font-normal text-[#E5E5E5] pl-[8px]">
                                  {props.winnername}
                                </p>
                              </div>
                            </div>
                            <div className="xyz ml-[20px]">
                              <div>
                                <h4 className="montserratfont font-medium leading-normal text-[16px] text-[#ED4250] pb-[13px] text-center">
                                  Pirze Won
                                </h4>
                                <Image src={prizeWinner} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hello">
                          <div className="second flex justify-center">
                            <div className="first_">
                              <h4 className="montserratfont font-medium leading-normal text-[16px] text-[#ED4250] pb-[13px]">
                                Lucky Winners
                              </h4>
                              <div className="flex items-center bg-brandLightOpacity50 rounded px-[16px] py-[2px] mb-[6px]">
                                <Image src={luckywinner} alt="" />
                                <p className="montserratfont text-[14px] leading-normal font-normal text-[#E5E5E5] pl-[8px]">
                                  {props.winnername}
                                </p>
                              </div>
                              <div className="flex items-center bg-brandLightOpacity50 rounded px-[16px] py-[2px] mb-[6px]">
                                <Image src={luckywinner} alt="" />
                                <p className="montserratfont text-[14px] leading-normal font-normal text-[#E5E5E5] pl-[8px]">
                                  {props.winnername}
                                </p>
                              </div>
                              <div className="flex items-center bg-brandLightOpacity50 rounded px-[16px] py-[2px] mb-[6px]">
                                <Image src={luckywinner} alt="" />
                                <p className="montserratfont text-[14px] leading-normal font-normal text-[#E5E5E5] pl-[8px]">
                                  {props.winnername}
                                </p>
                              </div>
                              <div className="flex items-center bg-brandLightOpacity50 rounded px-[16px] py-[2px] mb-[6px]">
                                <Image src={luckywinner} alt="" />
                                <p className="montserratfont text-[14px] leading-normal font-normal text-[#E5E5E5] pl-[8px]">
                                  {props.winnername}
                                </p>
                              </div>
                              <div className="flex items-center bg-brandLightOpacity50 rounded px-[16px] py-[2px] mb-[6px]">
                                <Image src={luckywinner} alt="" />
                                <p className="montserratfont text-[14px] leading-normal font-normal text-[#E5E5E5] pl-[8px]">
                                  {props.winnername}
                                </p>
                              </div>
                            </div>
                            <div className="xyz ml-[20px]">
                              <div>
                                <h4 className="montserratfont font-medium leading-normal text-[16px] text-[#ED4250] pb-[13px] text-center">
                                  Pirze Won
                                </h4>
                                <Image src={prizeWinner} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Slider>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </>
  );
};

export default Accordiannn;
