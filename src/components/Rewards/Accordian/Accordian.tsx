import React, { useEffect, useState } from "react";
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
import { useTheme } from "next-themes";
const Accordiannn = (props: any) => {
  const { theme, setTheme } = useTheme();
  interface YourComponentProps {
    data: Array<any>; // Replace with the actual data type
  }
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
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]); // Open the first disclosure by default

  const toggleDisclosure = (item: number) => {
    if (openIndexes.includes(item)) {
      setOpenIndexes(openIndexes.filter((i) => i !== item));
    } else {
      setOpenIndexes([...openIndexes, item]);
    }
  };
  useEffect(() => {
    setIsDarkTheme(theme === "dark" ? "dark" : "light");
  }, [theme]);
  return (
    <>
      <div className={`w-full  mainwrapper_accordoian`}>
        <div className="mx-auto w-full px-[17px] rounded-[8px] border dark:border-brandLightOpacity50   pt-[22px]    dark:bg-[#221E1F] mw-lg:px-[0px] mw-lg:pt-[16px]">
          <Disclosure as="div">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full px-[58px] justify-between items-center rounded-lg text-left text-sm font-medium text-purple-900  pb-[23px] mw-lg:pb-[16px] mw-lg:flex-col">
                  <div className="flex justify-between w-[100%] items-center mw-lg:justify-center">
                    <div className="first_section text-center flex items-center ">
                      <p className="montserratfont text-brandDark2 dark:text-[#ED4250] text-[20px] mw-lg:text-[16px] mw-md:text-[14px] font-bold leading-normal">
                        {props.date}
                      </p>
                      <div className="ml-[26px] mw-lg:ml-[0px] mw-lg:mt-[15px] mw-lg:hidden">
                        <h4 className="montserratfont text-brandDark2 text-[16px] font-medium leading-normal dark:text-[#E5E5E5] mw-md:text-[14px]">
                          {props.heading}
                        </h4>
                      </div>
                    </div>

                    <i
                      className={`fa-solid fa-angle-down text-brandDark2 dark:text-[#ED4E50] text-[16px] mw-lg:ml-[8px] ${
                        open ? "rotate-180 transform " : null
                      }`}
                    ></i>
                  </div>
                  {/* <i
                    className={`fa-solid fa-angle-up text-[#ED4E50] text-[16px] ${
                      open ? "rotate-180 transform " : null
                    }`}
                  ></i> */}

                  <div className="ml-[80px] mw-lg:ml-[0px] mw-lg:mt-[16px] hidden mw-lg:block">
                    <h4 className="montserratfont text-[16px] font-bold leading-normal text-brandDark2 dark:text-[#E5E5E5] mw-md:text-[14px] mw-sm:text-center">
                      {props.heading}
                    </h4>
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="px-[30px] pt-[18px] pb-[51px] border-t-[1px] dark:border-brandLightOpacity10 flex  mw-lg:flex-col mw-md:px-[16px]">
                  <div className=" w-6/12 mw-lg:w-full">
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
                      <p className="montserratfont text-[12px] font-normal leading-normal text-brandDark2 dark:text-[#E5E5E5] ml-[30px] mw-sm3:text-[10px] mw-sm3:font-normal ">
                        <span className="montserratfont text-[12px] font-semibold text-brandDark2  dark:text-[#ED4E50]">
                          133
                        </span>{" "}
                        out of 560 participants answered this question
                        correctly.
                      </p>
                    </div>
                    <div className="accodiran_content_second flex mt-[18px] mw-md:flex-col mw-md:mt-[16px]">
                      <h5 className="montserratfont text-[14px] font-medium	leading-normal text-brandDark2 dark:text-brandLightOpacity70 border-r-[1px] border-brandLightOpacity10 pr-[16px] mw-md:border-none mw-sm3:text-[12px] ">
                        Correct Answer:
                        <span className="montserratfont text-[14px] font-medium	leading-normal text-[#ED4E50]">
                          Option B
                        </span>{" "}
                        2 Million
                      </h5>
                      <h5 className="montserratfont text-[14px] font-medium	leading-normal text-brandDark2 dark:text-brandLightOpacity70 pl-[16px] mw-md:pl-[0px] mw-sm3:text-[12px] ">
                        Your Answer:
                        <span className="montserratfont text-[14px] font-medium	leading-normal text-[#ED4E50]">
                          Option B
                        </span>{" "}
                        2 Million
                      </h5>
                    </div>
                    <div className="accoridan_content_thrird mt-[33px] mw-md:mt-[15px] mw-sm3:mt[16px]">
                      <h4
                        className="montserratfont text-[16px] font-medium leadimg-normal 
                       dark:text-[#ED4250] mw-sm3:text-[14px] font-semibold   "
                      >
                        Did you know?
                      </h4>
                      <p className="montserratfont font-normal f_it leading-[24px] text-[14px] dark:text-[#E5E5E5] pt-[7px] pr-[60px] mw-lg:pr-[0px] mw-sm4:text-[12px] text-brandDark2 mw-md:leading-[16px]">
                        Saudi Arabian esports tournament organiser Gamers8 has
                        announced a prize pool of $45million for its 2023 event,
                        dubbed &#39;The Land of Heroes&#39;. The figure makes
                        the prize pool the largest in history, beating Dota
                        2&#39;s 2021 International figure of $40 million.
                      </p>
                    </div>
                  </div>
                  <div className="w-6/12 mw-lg:w-full">
                    <div className="second_slider">
                      <div className="flex mw-lg:hidden">
                        <div className="w-[45%]">
                          <h4 className="montserratfont text-center font-medium leading-normal text-[16px] dark:text-[#ED4250] pb-[13px] mw-md:text-center">
                            Lucky Winners
                          </h4>
                        </div>
                        <div className="w-[50%]">
                          <h4 className="montserratfont font-medium leading-normal text-[16px] dark:text-[#ED4250] pb-[13px] text-center">
                            Pirze Won
                          </h4>
                        </div>
                      </div>
                      <Slider
                        {...tools}
                        className={`${
                          isDarkTheme === "dark"
                            ? " dark-arrow"
                            : " light-arrow"
                        }`}
                      >
                        <div className="hello mw-md:mt-[40px] mw-sm:mt-[16px]">
                          <div className="second flex justify-center mw-lg:flex-col items-center">
                            <div className="first_ mw-lg:px-[80px] mw-sm4:px-[45px]">
                              <h4 className="montserratfont text-center font-medium leading-normal text-[16px] dark:text-[#ED4250] pb-[13px] mw-sm4:pb-[8px] mw-md:text-center hidden mw-lg:block mw-sm4:text-[14px] font-semibold leading-normal">
                                Lucky Winners
                              </h4>
                              <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded pl-[16px] py-[2px] mb-[6px] pr-[51px]">
                                <Image src={luckywinner} alt="" />
                                <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px] ">
                                  {props.winnername}
                                </p>
                              </div>
                              <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                                <Image src={luckywinner} alt="" />
                                <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                                  {props.winnername}
                                </p>
                              </div>
                              <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                                <Image src={luckywinner} alt="" />
                                <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                                  {props.winnername}
                                </p>
                              </div>
                              <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                                <Image src={luckywinner} alt="" />
                                <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                                  {props.winnername}
                                </p>
                              </div>
                              <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                                <Image src={luckywinner} alt="" />
                                <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                                  {props.winnername}
                                </p>
                              </div>
                            </div>
                            <div className="xyz ml-[20px] mw-lg:ml-[0px] ">
                              <div className="mw-md:mt-[16px]">
                                <h4
                                  className="montserratfont font-medium leading-normal text-[16px] dark:text-[#ED4250] pb-[13px] text-center hidden mw-lg:block mw-lg:pt-[16px]
                                 mw-md:pt-[0px] mw-sm4:text-[14px] font-semibold leading-normal mw-sm4:pb-[8px]"
                                >
                                  Pirze Won
                                </h4>
                                <div>
                                  <Image
                                    src={prizeWinner}
                                    alt=""
                                    className="mw-lg:m-auto"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hello mw-md:mt-[40px] mw-sm:mt-[16px]">
                          <div className="second flex justify-center mw-lg:flex-col items-center">
                            <div className="first_ mw-lg:px-[80px] mw-sm4:px-[45px]">
                              <h4 className="montserratfont text-center font-medium leading-normal text-[16px] dark:text-[#ED4250] pb-[13px] mw-sm4:pb-[8px] mw-md:text-center hidden mw-lg:block mw-sm4:text-[14px] font-semibold leading-normal">
                                Lucky Winners
                              </h4>
                              <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded pl-[16px] py-[2px] mb-[6px] pr-[51px]">
                                <Image src={luckywinner} alt="" />
                                <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px] ">
                                  {props.winnername}
                                </p>
                              </div>
                              <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                                <Image src={luckywinner} alt="" />
                                <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                                  {props.winnername}
                                </p>
                              </div>
                              <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                                <Image src={luckywinner} alt="" />
                                <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                                  {props.winnername}
                                </p>
                              </div>
                              <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                                <Image src={luckywinner} alt="" />
                                <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                                  {props.winnername}
                                </p>
                              </div>
                              <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                                <Image src={luckywinner} alt="" />
                                <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                                  {props.winnername}
                                </p>
                              </div>
                            </div>
                            <div className="xyz ml-[20px] mw-lg:ml-[0px] ">
                              <div className="mw-md:mt-[16px] mw-lg:ml-[0px] ">
                                <h4
                                  className="montserratfont font-medium leading-normal text-[16px] dark:text-[#ED4250] pb-[13px] text-center hidden mw-lg:block mw-lg:pt-[16px]
                                 mw-md:pt-[0px] mw-sm4:text-[14px] font-semibold leading-normal mw-sm4:pb-[8px]"
                                >
                                  Pirze Won
                                </h4>
                                <div>
                                  <Image
                                    src={prizeWinner}
                                    alt=""
                                    className="mw-lg:m-auto"
                                  />
                                </div>
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
