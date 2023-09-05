import React, { useEffect, useState, Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import Slider from "react-slick";
import "./Accodiann.css";
import Image from "next/image";
import one from "../../../assets/rewards/one.png";
import two from "../../../assets/rewards/two.png";
import three from "../../../assets/rewards/three.png";
import luckywinner from "../../../assets/rewards/winner_list.png";
import prizeWinner from "../../../assets/rewards/winItem.png";
import { useTheme } from "next-themes";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
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

  const [open, setOpen] = React.useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  useEffect(() => {
    setIsDarkTheme(theme === "dark" ? "dark" : "light");
  }, [theme]);


  return (
    <>
      {/* <div className={`w-full  mainwrapper_accordoian`}>
        <div className="mx-auto w-full px-[17px] rounded-[8px] border dark:border-brandLightOpacity50   pt-[22px]    dark:bg-[#221E1F] mw-lg:px-[0px] mw-lg:pt-[16px]">
          <Disclosure
            key={props.index}
            as="div"
            // open={(props.activeDisclosurePanel === null && props.index === 0) ? true : false}
            // defaultOpen={props.activeDisclosurePanel === null && props.index === 0 ? true : false }
            // defaultOpen={ (props.index === 0) ? true :  false }
            defaultOpen={( props.index === 0) ? true : false} 
         >
            { (panel) => {
              const { open, close } = panel;
               return(
                
              <>
                <Disclosure.Button
                  onClick={ () => {                        
                    if(props.activeDisclosurePanel === null && props.index === 0){
                      close();
                    }
                     
                    if (!open) {
                      // On the first click, the panel is opened but the "open" prop's value is still false. Therefore the falsey verification
                      // This will make so the panel close itself when we click it while open 
                      close(); 
                    }

                    // Now we call the function to close the other opened panels (if any)
                    props.toggle({ ...panel, key: props.index });
                  }}
                  className="flex w-full px-[58px] justify-between items-center rounded-lg text-left text-sm font-medium text-purple-900  pb-[23px] mw-lg:pb-[16px] mw-lg:flex-col"
                >
                  <div className="flex justify-between w-[100%] items-center mw-lg:justify-center">
                    <div className="first_section text-center flex items-center ">
                      <p
                        className={`montserratfont text-brandDark2 dark:text-[#ED4250] text-[20px] mw-lg:text-[16px] mw-md:text-[14px]  leading-normal ${
                          open ? "font-bold " : "font-semibold"
                        }`}
                      >
                        {props.date}
                      </p>
                      <div className="ml-[26px] mw-lg:ml-[0px] mw-lg:mt-[15px] mw-lg:hidden">
                        <h4
                          className={`${
                            open ? "font-bold" : "font-medium"
                          } montserratfont text-brandDark2 text-[16px] leading-normal dark:text-[#E5E5E5] mw-md:text-[14px] `}
                        >
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

                  <div className="ml-[80px] mw-lg:ml-[0px] mw-lg:mt-[16px] hidden mw-lg:block">
                    <h4
                      className={`${
                        open ? "font-bold" : "font-medium"
                      }  montserratfont text-[16px]   leading-normal text-brandDark2 dark:text-[#E5E5E5] mw-md:text-[14px] mw-sm:text-center`}
                    >
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
                        Correct Answer:{" "}
                        <span className="montserratfont text-[14px] font-medium	leading-normal text-[#ED4E50]">
                          Option B
                        </span>{" "}
                        2 Million
                      </h5>
                      <h5 className="montserratfont text-[14px] font-medium	leading-normal text-brandDark2 dark:text-brandLightOpacity70 pl-[16px] mw-md:pl-[0px] mw-sm3:text-[12px] ">
                        Your Answer:{" "}
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
                            Prizes Won
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
                                  Prizes Won
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
                                  Prizes Won
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
              )
            }}
          </Disclosure>
        </div>
      </div> */}
      <div className="w-full  mainwrapper_accordoian mb-[16px]">
        <div className="mx-auto w-full px-[17px] rounded-[8px] border dark:border-brandLightOpacity50   pt-[18px]    dark:bg-[#221E1F] mw-lg:px-[0px] mw-lg:pt-[16px] ">
          <Accordion open={open === 1} className="">
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="flex w-full px-[58px] justify-between items-center rounded-lg text-left text-sm font-medium text-purple-900  pb-[29px] mw-lg:pb-[16px] mw-lg:flex-col border-none mw-sm4:pt-[0px] mw-sm4:px-[23px]"
            >
              <div className="flex justify-between w-[100%] items-center mw-lg:justify-center">
                <div className="first_section text-center flex items-center ">
                  <p
                    className={`montserratfont text-brandDark2 dark:text-[#ED4250] text-[20px] mw-lg:text-[16px] mw-md:text-[14px]  leading-normal ${
                      open === 1 ? "font-bold " : "font-semibold"
                    }`}
                  >
                    27 july
                  </p>
                  <div className="ml-[26px] mw-lg:ml-[0px] mw-lg:mt-[15px] mw-lg:hidden">
                    <h4
                      className={`${
                        open === 1 ? "font-bold" : "font-medium"
                      } montserratfont text-brandDark2 text-[16px] leading-normal dark:text-[#E5E5E5] mw-md:text-[14px] `}
                    >
                      What is the largest ever prize pool for a gaming
                      tournament?
                    </h4>
                  </div>
                </div>

                <i
                  className={`fa-solid fa-angle-down text-brandDark2 dark:text-[#ED4E50] text-[16px] mw-lg:ml-[8px] ${
                    open === 1 ? "rotate-180 transform " : null
                  }`}
                ></i>
              </div>

              <div className="ml-[80px] mw-lg:ml-[0px] mw-lg:mt-[16px] hidden mw-lg:block">
                <h4
                  className={`${
                    open === 1 ? "font-bold" : "font-medium"
                  }  montserratfont text-[16px]   leading-normal text-brandDark2 dark:text-[#E5E5E5] mw-md:text-[14px] mw-sm:text-center`}
                >
                  What is the largest ever prize pool for a gaming tournament?
                </h4>
              </div>
            </AccordionHeader>
            <AccordionBody className="px-[30px] pt-[18px] pb-[51px] border-t-[1px] dark:border-brandLightOpacity10 flex  mw-lg:flex-col mw-md:px-[16px]">
              <div className=" w-6/12 mx-13:w-[47.5%] mw-lg:w-full">
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
                    out of 560 participants answered this question correctly.
                  </p>
                </div>
                <div className="accodiran_content_second flex mt-[18px] mw-md:flex-col mw-md:mt-[16px]">
                  <h5 className="montserratfont text-[14px] font-medium	leading-normal text-brandDark2 dark:text-brandLightOpacity70 border-r-[1px] border-brandLightOpacity10 pr-[16px] mw-md:border-none mw-sm3:text-[12px] ">
                    Correct Answer:{" "}
                    <span className="montserratfont text-[14px] font-medium	leading-normal text-[#ED4E50]">
                      Option B
                    </span>{" "}
                    2 Million
                  </h5>
                  <h5 className="montserratfont text-[14px] font-medium	leading-normal text-brandDark2 dark:text-brandLightOpacity70 pl-[16px] mw-md:pl-[0px] mw-sm3:text-[12px] ">
                    Your Answer:{" "}
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
                    dubbed &#39;The Land of Heroes&#39;. The figure makes the
                    prize pool the largest in history, beating Dota 2&#39;s 2021
                    International figure of $40 million.
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
                        Prizes Won
                      </h4>
                    </div>
                  </div>
                  <Slider
                    {...tools}
                    className={`${
                      isDarkTheme === "dark" ? " dark-arrow" : " light-arrow"
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
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                        </div>
                        <div className="xyz ml-[20px] mw-lg:ml-[0px] ">
                          <div className="mw-md:mt-[16px]">
                            <h4
                              className="montserratfont font-medium leading-normal text-[16px] dark:text-[#ED4250] pb-[13px] text-center hidden mw-lg:block mw-lg:pt-[16px]
                                 mw-md:pt-[0px] mw-sm4:text-[14px] font-semibold leading-normal mw-sm4:pb-[8px]"
                            >
                              Prizes Won
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
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                        </div>
                        <div className="xyz ml-[20px] mw-lg:ml-[0px] ">
                          <div className="mw-md:mt-[16px] mw-lg:ml-[0px] ">
                            <h4
                              className="montserratfont font-medium leading-normal text-[16px] dark:text-[#ED4250] pb-[13px] text-center hidden mw-lg:block mw-lg:pt-[16px]
                                 mw-md:pt-[0px] mw-sm4:text-[14px] font-semibold leading-normal mw-sm4:pb-[8px]"
                            >
                              Prizes Won
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
            </AccordionBody>
          </Accordion>
        </div>
      </div>
      <div className="w-full  mainwrapper_accordoian mb-[16px]">
        <div className="mx-auto w-full px-[17px] rounded-[8px] border dark:border-brandLightOpacity50   pt-[18px]    dark:bg-[#221E1F] mw-lg:px-[0px] mw-lg:pt-[16px]">
          <Accordion open={open === 2} className="">
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="flex w-full px-[58px] justify-between items-center rounded-lg text-left text-sm font-medium text-purple-900  pb-[29px] mw-lg:pb-[16px] mw-lg:flex-col border-none mw-sm4:pt-[0px]  mw-sm4:px-[23px]"
            >
              <div className="flex justify-between w-[100%] items-center mw-lg:justify-center">
                <div className="first_section text-center flex items-center ">
                  <p
                    className={`montserratfont text-brandDark2 dark:text-[#ED4250] text-[20px] mw-lg:text-[16px] mw-md:text-[14px]  leading-normal ${
                      open === 2 ? "font-bold " : "font-semibold"
                    }`}
                  >
                    26 july
                  </p>
                  <div className="ml-[26px] mw-lg:ml-[0px] mw-lg:mt-[15px] mw-lg:hidden">
                    <h4
                      className={`${
                        open === 2 ? "font-bold" : "font-medium"
                      } montserratfont text-brandDark2 text-[16px] leading-normal dark:text-[#E5E5E5] mw-md:text-[14px] `}
                    >
                      What is the largest ever prize pool for a gaming
                      tournament?
                    </h4>
                  </div>
                </div>

                <i
                  className={`fa-solid fa-angle-down text-brandDark2 dark:text-[#ED4E50] text-[16px] mw-lg:ml-[8px] ${
                    open === 2 ? "rotate-180 transform " : null
                  }`}
                ></i>
              </div>

              <div className="ml-[80px] mw-lg:ml-[0px] mw-lg:mt-[16px] hidden mw-lg:block">
                <h4
                  className={`${
                    open === 2 ? "font-bold" : "font-medium"
                  }  montserratfont text-[16px]   leading-normal text-brandDark2 dark:text-[#E5E5E5] mw-md:text-[14px] mw-sm:text-center`}
                >
                  What is the largest ever prize pool for a gaming tournament?
                </h4>
              </div>
            </AccordionHeader>
            <AccordionBody className="px-[30px] pt-[18px] pb-[51px] border-t-[1px] dark:border-brandLightOpacity10 flex  mw-lg:flex-col mw-md:px-[16px]">
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
                    out of 560 participants answered this question correctly.
                  </p>
                </div>
                <div className="accodiran_content_second flex mt-[18px] mw-md:flex-col mw-md:mt-[16px]">
                  <h5 className="montserratfont text-[14px] font-medium	leading-normal text-brandDark2 dark:text-brandLightOpacity70 border-r-[1px] border-brandLightOpacity10 pr-[16px] mw-md:border-none mw-sm3:text-[12px] ">
                    Correct Answer:{" "}
                    <span className="montserratfont text-[14px] font-medium	leading-normal text-[#ED4E50]">
                      Option B
                    </span>{" "}
                    2 Million
                  </h5>
                  <h5 className="montserratfont text-[14px] font-medium	leading-normal text-brandDark2 dark:text-brandLightOpacity70 pl-[16px] mw-md:pl-[0px] mw-sm3:text-[12px] ">
                    Your Answer:{" "}
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
                    dubbed &#39;The Land of Heroes&#39;. The figure makes the
                    prize pool the largest in history, beating Dota 2&#39;s 2021
                    International figure of $40 million.
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
                        Prizes Won
                      </h4>
                    </div>
                  </div>
                  <Slider
                    {...tools}
                    className={`${
                      isDarkTheme === "dark" ? " dark-arrow" : " light-arrow"
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
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                        </div>
                        <div className="xyz ml-[20px] mw-lg:ml-[0px] ">
                          <div className="mw-md:mt-[16px]">
                            <h4
                              className="montserratfont font-medium leading-normal text-[16px] dark:text-[#ED4250] pb-[13px] text-center hidden mw-lg:block mw-lg:pt-[16px]
                                 mw-md:pt-[0px] mw-sm4:text-[14px] font-semibold leading-normal mw-sm4:pb-[8px]"
                            >
                              Prizes Won
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
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                        </div>
                        <div className="xyz ml-[20px] mw-lg:ml-[0px] ">
                          <div className="mw-md:mt-[16px] mw-lg:ml-[0px] ">
                            <h4
                              className="montserratfont font-medium leading-normal text-[16px] dark:text-[#ED4250] pb-[13px] text-center hidden mw-lg:block mw-lg:pt-[16px]
                                 mw-md:pt-[0px] mw-sm4:text-[14px] font-semibold leading-normal mw-sm4:pb-[8px]"
                            >
                              Prizes Won
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
            </AccordionBody>
          </Accordion>
        </div>
      </div>
      <div className="w-full  mainwrapper_accordoian mb-[16px]">
        <div className="mx-auto w-full px-[17px] rounded-[8px] border dark:border-brandLightOpacity50   pt-[18px]    dark:bg-[#221E1F] mw-lg:px-[0px] mw-lg:pt-[16px]">
          <Accordion open={open === 3} className="">
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="flex w-full px-[58px] justify-between items-center rounded-lg text-left text-sm font-medium text-purple-900  pb-[29px] mw-lg:pb-[16px] mw-lg:flex-col border-none mw-sm4:pt-[0px]  mw-sm4:px-[23px]"
            >
              <div className="flex justify-between w-[100%] items-center mw-lg:justify-center">
                <div className="first_section text-center flex items-center ">
                  <p
                    className={`montserratfont text-brandDark2 dark:text-[#ED4250] text-[20px] mw-lg:text-[16px] mw-md:text-[14px]  leading-normal ${
                      open === 3 ? "font-bold " : "font-semibold"
                    }`}
                  >
                    25 july
                  </p>
                  <div className="ml-[26px] mw-lg:ml-[0px] mw-lg:mt-[15px] mw-lg:hidden">
                    <h4
                      className={`${
                        open === 3 ? "font-bold" : "font-medium"
                      } montserratfont text-brandDark2 text-[16px] leading-normal dark:text-[#E5E5E5] mw-md:text-[14px] `}
                    >
                      What is the largest ever prize pool for a gaming
                      tournament?
                    </h4>
                  </div>
                </div>

                <i
                  className={`fa-solid fa-angle-down text-brandDark2 dark:text-[#ED4E50] text-[16px] mw-lg:ml-[8px] ${
                    open === 3 ? "rotate-180 transform " : null
                  }`}
                ></i>
              </div>

              <div className="ml-[80px] mw-lg:ml-[0px] mw-lg:mt-[16px] hidden mw-lg:block">
                <h4
                  className={`${
                    open === 3 ? "font-bold" : "font-medium"
                  }  montserratfont text-[16px]   leading-normal text-brandDark2 dark:text-[#E5E5E5] mw-md:text-[14px] mw-sm:text-center`}
                >
                  What is the largest ever prize pool for a gaming tournament?
                </h4>
              </div>
            </AccordionHeader>
            <AccordionBody className="px-[30px] pt-[18px] pb-[51px] border-t-[1px] dark:border-brandLightOpacity10 flex  mw-lg:flex-col mw-md:px-[16px]">
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
                    out of 560 participants answered this question correctly.
                  </p>
                </div>
                <div className="accodiran_content_second flex mt-[18px] mw-md:flex-col mw-md:mt-[16px]">
                  <h5 className="montserratfont text-[14px] font-medium	leading-normal text-brandDark2 dark:text-brandLightOpacity70 border-r-[1px] border-brandLightOpacity10 pr-[16px] mw-md:border-none mw-sm3:text-[12px] ">
                    Correct Answer:{" "}
                    <span className="montserratfont text-[14px] font-medium	leading-normal text-[#ED4E50]">
                      Option B
                    </span>{" "}
                    2 Million
                  </h5>
                  <h5 className="montserratfont text-[14px] font-medium	leading-normal text-brandDark2 dark:text-brandLightOpacity70 pl-[16px] mw-md:pl-[0px] mw-sm3:text-[12px] ">
                    Your Answer:{" "}
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
                    dubbed &#39;The Land of Heroes&#39;. The figure makes the
                    prize pool the largest in history, beating Dota 2&#39;s 2021
                    International figure of $40 million.
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
                        Prizes Won
                      </h4>
                    </div>
                  </div>
                  <Slider
                    {...tools}
                    className={`${
                      isDarkTheme === "dark" ? " dark-arrow" : " light-arrow"
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
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                        </div>
                        <div className="xyz ml-[20px] mw-lg:ml-[0px] ">
                          <div className="mw-md:mt-[16px]">
                            <h4
                              className="montserratfont font-medium leading-normal text-[16px] dark:text-[#ED4250] pb-[13px] text-center hidden mw-lg:block mw-lg:pt-[16px]
                                 mw-md:pt-[0px] mw-sm4:text-[14px] font-semibold leading-normal mw-sm4:pb-[8px]"
                            >
                              Prizes Won
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
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                        </div>
                        <div className="xyz ml-[20px] mw-lg:ml-[0px] ">
                          <div className="mw-md:mt-[16px] mw-lg:ml-[0px] ">
                            <h4
                              className="montserratfont font-medium leading-normal text-[16px] dark:text-[#ED4250] pb-[13px] text-center hidden mw-lg:block mw-lg:pt-[16px]
                                 mw-md:pt-[0px] mw-sm4:text-[14px] font-semibold leading-normal mw-sm4:pb-[8px]"
                            >
                              Prizes Won
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
            </AccordionBody>
          </Accordion>
        </div>
      </div>
      <div className="w-full  mainwrapper_accordoian mb-[16px]">
        <div className="mx-auto w-full px-[17px] rounded-[8px] border dark:border-brandLightOpacity50   pt-[18px]    dark:bg-[#221E1F] mw-lg:px-[0px] mw-lg:pt-[16px]">
          <Accordion open={open === 4} className="">
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className="flex w-full px-[58px] justify-between items-center rounded-lg text-left text-sm font-medium text-purple-900  pb-[29px] mw-lg:pb-[16px] mw-lg:flex-col border-none mw-sm4:pt-[0px]  mw-sm4:px-[23px]"
            >
              <div className="flex justify-between w-[100%] items-center mw-lg:justify-center">
                <div className="first_section text-center flex items-center ">
                  <p
                    className={`montserratfont text-brandDark2 dark:text-[#ED4250] text-[20px] mw-lg:text-[16px] mw-md:text-[14px]  leading-normal ${
                      open === 4 ? "font-bold " : "font-semibold"
                    }`}
                  >
                    24 july
                  </p>
                  <div className="ml-[26px] mw-lg:ml-[0px] mw-lg:mt-[15px] mw-lg:hidden">
                    <h4
                      className={`${
                        open === 3 ? "font-bold" : "font-medium"
                      } montserratfont text-brandDark2 text-[16px] leading-normal dark:text-[#E5E5E5] mw-md:text-[14px] `}
                    >
                      What is the largest ever prize pool for a gaming
                      tournament?
                    </h4>
                  </div>
                </div>

                <i
                  className={`fa-solid fa-angle-down text-brandDark2 dark:text-[#ED4E50] text-[16px] mw-lg:ml-[8px] ${
                    open === 4 ? "rotate-180 transform " : null
                  }`}
                ></i>
              </div>

              <div className="ml-[80px] mw-lg:ml-[0px] mw-lg:mt-[16px] hidden mw-lg:block">
                <h4
                  className={`${
                    open === 4 ? "font-bold" : "font-medium"
                  }  montserratfont text-[16px]   leading-normal text-brandDark2 dark:text-[#E5E5E5] mw-md:text-[14px] mw-sm:text-center`}
                >
                  What is the largest ever prize pool for a gaming tournament?
                </h4>
              </div>
            </AccordionHeader>
            <AccordionBody className="px-[30px] pt-[18px] pb-[51px] border-t-[1px] dark:border-brandLightOpacity10 flex  mw-lg:flex-col mw-md:px-[16px]">
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
                    out of 560 participants answered this question correctly.
                  </p>
                </div>
                <div className="accodiran_content_second flex mt-[18px] mw-md:flex-col mw-md:mt-[16px]">
                  <h5 className="montserratfont text-[14px] font-medium	leading-normal text-brandDark2 dark:text-brandLightOpacity70 border-r-[1px] border-brandLightOpacity10 pr-[16px] mw-md:border-none mw-sm3:text-[12px] ">
                    Correct Answer:{" "}
                    <span className="montserratfont text-[14px] font-medium	leading-normal text-[#ED4E50]">
                      Option B
                    </span>{" "}
                    2 Million
                  </h5>
                  <h5 className="montserratfont text-[14px] font-medium	leading-normal text-brandDark2 dark:text-brandLightOpacity70 pl-[16px] mw-md:pl-[0px] mw-sm3:text-[12px] ">
                    Your Answer:{" "}
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
                    dubbed &#39;The Land of Heroes&#39;. The figure makes the
                    prize pool the largest in history, beating Dota 2&#39;s 2021
                    International figure of $40 million.
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
                        Prizes Won
                      </h4>
                    </div>
                  </div>
                  <Slider
                    {...tools}
                    className={`${
                      isDarkTheme === "dark" ? " dark-arrow" : " light-arrow"
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
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                        </div>
                        <div className="xyz ml-[20px] mw-lg:ml-[0px] ">
                          <div className="mw-md:mt-[16px]">
                            <h4
                              className="montserratfont font-medium leading-normal text-[16px] dark:text-[#ED4250] pb-[13px] text-center hidden mw-lg:block mw-lg:pt-[16px]
                                 mw-md:pt-[0px] mw-sm4:text-[14px] font-semibold leading-normal mw-sm4:pb-[8px]"
                            >
                              Prizes Won
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
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                        </div>
                        <div className="xyz ml-[20px] mw-lg:ml-[0px] ">
                          <div className="mw-md:mt-[16px] mw-lg:ml-[0px] ">
                            <h4
                              className="montserratfont font-medium leading-normal text-[16px] dark:text-[#ED4250] pb-[13px] text-center hidden mw-lg:block mw-lg:pt-[16px]
                                 mw-md:pt-[0px] mw-sm4:text-[14px] font-semibold leading-normal mw-sm4:pb-[8px]"
                            >
                              Prizes Won
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
            </AccordionBody>
          </Accordion>
        </div>
      </div>
      <div className="w-full  mainwrapper_accordoian mb-[16px]">
        <div className="mx-auto w-full px-[17px] rounded-[8px] border dark:border-brandLightOpacity50   pt-[18px]  dark:bg-[#221E1F] mw-lg:px-[0px] mw-lg:pt-[16px]">
          <Accordion open={open === 5} className="">
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className="flex w-full px-[58px] justify-between items-center rounded-lg text-left text-sm font-medium text-purple-900  pb-[29px] mw-lg:pb-[16px] mw-lg:flex-col border-none mw-sm4:pt-[0px]  mw-sm4:px-[23px]"
            >
              <div className="flex justify-between w-[100%] items-center mw-lg:justify-center">
                <div className="first_section text-center flex items-center ">
                  <p
                    className={`montserratfont text-brandDark2 dark:text-[#ED4250] text-[20px] mw-lg:text-[16px] mw-md:text-[14px]  leading-normal ${
                      open === 5 ? "font-bold " : "font-semibold"
                    }`}
                  >
                    23 july
                  </p>
                  <div className="ml-[26px] mw-lg:ml-[0px] mw-lg:mt-[15px] mw-lg:hidden">
                    <h4
                      className={`${
                        open === 5 ? "font-bold" : "font-medium"
                      } montserratfont text-brandDark2 text-[16px] leading-normal dark:text-[#E5E5E5] mw-md:text-[14px] `}
                    >
                      What is the largest ever prize pool for a gaming
                      tournament?
                    </h4>
                  </div>
                </div>

                <i
                  className={`fa-solid fa-angle-down text-brandDark2 dark:text-[#ED4E50] text-[16px] mw-lg:ml-[8px] ${
                    open === 5 ? "rotate-180 transform " : null
                  }`}
                ></i>
              </div>

              <div className="ml-[80px] mw-lg:ml-[0px] mw-lg:mt-[16px] hidden mw-lg:block">
                <h4
                  className={`${
                    open === 5 ? "font-bold" : "font-medium"
                  }  montserratfont text-[16px]   leading-normal text-brandDark2 dark:text-[#E5E5E5] mw-md:text-[14px] mw-sm:text-center`}
                >
                  What is the largest ever prize pool for a gaming tournament?
                </h4>
              </div>
            </AccordionHeader>
            <AccordionBody className="px-[30px] pt-[18px] pb-[51px] border-t-[1px] dark:border-brandLightOpacity10 flex  mw-lg:flex-col mw-md:px-[16px]">
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
                    out of 560 participants answered this question correctly.
                  </p>
                </div>
                <div className="accodiran_content_second flex mt-[18px] mw-md:flex-col mw-md:mt-[16px]">
                  <h5 className="montserratfont text-[14px] font-medium	leading-normal text-brandDark2 dark:text-brandLightOpacity70 border-r-[1px] border-brandLightOpacity10 pr-[16px] mw-md:border-none mw-sm3:text-[12px] ">
                    Correct Answer:{" "}
                    <span className="montserratfont text-[14px] font-medium	leading-normal text-[#ED4E50]">
                      Option B
                    </span>{" "}
                    2 Million
                  </h5>
                  <h5 className="montserratfont text-[14px] font-medium	leading-normal text-brandDark2 dark:text-brandLightOpacity70 pl-[16px] mw-md:pl-[0px] mw-sm3:text-[12px] ">
                    Your Answer:{" "}
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
                    dubbed &#39;The Land of Heroes&#39;. The figure makes the
                    prize pool the largest in history, beating Dota 2&#39;s 2021
                    International figure of $40 million.
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
                        Prizes Won
                      </h4>
                    </div>
                  </div>
                  <Slider
                    {...tools}
                    className={`${
                      isDarkTheme === "dark" ? " dark-arrow" : " light-arrow"
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
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                        </div>
                        <div className="xyz ml-[20px] mw-lg:ml-[0px] ">
                          <div className="mw-md:mt-[16px]">
                            <h4
                              className="montserratfont font-medium leading-normal text-[16px] dark:text-[#ED4250] pb-[13px] text-center hidden mw-lg:block mw-lg:pt-[16px]
                                 mw-md:pt-[0px] mw-sm4:text-[14px] font-semibold leading-normal mw-sm4:pb-[8px]"
                            >
                              Prizes Won
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
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                          <div className="flex items-center bg-grayCard dark:bg-[#2C2829] rounded px-[16px] py-[2px] mb-[6px]">
                            <Image src={luckywinner} alt="" />
                            <p className="montserratfont text-[14px] leading-normal font-normal dark:text-[#E5E5E5] pl-[8px]">
                              @winner_nemel
                            </p>
                          </div>
                        </div>
                        <div className="xyz ml-[20px] mw-lg:ml-[0px] ">
                          <div className="mw-md:mt-[16px] mw-lg:ml-[0px] ">
                            <h4
                              className="montserratfont font-medium leading-normal text-[16px] dark:text-[#ED4250] pb-[13px] text-center hidden mw-lg:block mw-lg:pt-[16px]
                                 mw-md:pt-[0px] mw-sm4:text-[14px] font-semibold leading-normal mw-sm4:pb-[8px]"
                            >
                              Prizes Won
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
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Accordiannn;
