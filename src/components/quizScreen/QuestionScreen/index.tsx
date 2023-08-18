"use client";

import { Dialog, Transition } from "@headlessui/react";

import React, { Fragment, useRef, useState } from "react";
import Banner from "../../../assets/quiz-model/banner.png";
import Product from "../../../assets/quiz-model/product.png";
import Close from "../../../assets/images/modal/close.png";
import image1 from "../../../assets/rewards/one.png";
import image2 from "../../../assets/rewards/two.png";
import image3 from "../../../assets/rewards/three.png";
import Image from "next/image";

const QuestionScreen = (props: any) => {
  const cancelButtonRef = useRef(null);
  const [optionSelect, setOptionSelect] = useState<boolean>(false);
  const [optionNumber, setOptionNumber] = useState<number>(0);
  const questionList = ["$18.93 million​", "$24.54 million​", "$9.3 million​", "$40.01 million​"];
  const questionOption = ["A", "B", "C", "D"];

  const onClickOption = (e: any) => {
    e.preventDefault();
    // setOptionSelect(true);
  };

  const onClickSelectOption = (val: number) => {
    setOptionNumber(val);
    setOptionSelect(true);

  };

  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => props.close()}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-brandDark1 bg-opacity-80 transition-opacity" />
        </Transition.Child>

        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="fixed inset-[70px] w-[375px] left-auto mw-lg:inset-[30px] mw-sm:inset-0  mw-lg:left-auto max-h-[812px] mw-sm:w-full dark:bg-brandDark3 left-auto  overflow-y-auto scrollbar-thin  scrollbar-thumb-choosebox  scrollbar-track-bodycolor  scrollbar-thumb-darkScollorBarColor  dark:scrollbar-track-brandDark2 ">
              {/* top   */}
              <div className="flex flex-col  h-full">
                <div className="relative ">
                  <Image
                    src={Banner}
                    className="w-[100%] h-[100%]"
                    alt="Banner"
                  />
                  <div
                    onClick={() => props.close()}
                    className="bg-brandLightOpacity10 hover:bg-brandLightOpacity100  h-[40px] w-[40px] rounded-full absolute top-2 right-2 flex justify-center items-center content-center"
                  >
                    <Image src={Close} alt="Close" />
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center content-center  ">
                  <div className="flex items-center ml-[38px] mt-[12px] ">
                    <div className="flex items-center relative">
                      <Image
                        src={image1}
                        alt=""
                        className="w-[24px] h-[24px] absolute left-[-28px] z-[1]"
                      />
                      <Image
                        src={image2}
                        alt=""
                        className="w-[24px] h-[24px] absolute left-[-12px]"
                      />
                      <Image
                        src={image3}
                        alt=""
                        className="w-[24px] h-[24px] "
                      />
                    </div>
                    <div className="ml-[5px]">
                      <p className="montserratfont text-[12px] font-normal text-[#E5E5E5]">
                        and 54 others are playing
                      </p>
                    </div>
                  </div>
                  <p className=" mr-[16px] mt-[16px] text-brandLightOpacity70 border-b-[1px] border-b-brandLightOpacity70 leading-none min-w-min montserratfont text-[12px] font-medium">
                    Invite Friends
                  </p>
                </div>
                <div className="mx-[16px] my-[10px]">
                  <Image src={Product} alt="Product" />
                </div>
                <div className="border-l-2 border-l-brand ml-[20px]">
                  <p className="pl-[10px] montserratfont text-[16px] font-semibold text-brandLightOpacity100 text-left">
                    What is the largest ever prize pool for a gaming tournament?
                  </p>
                </div>
                <div>
                  <div className="mt-5">
                    {questionList.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => onClickSelectOption(index)}
                        className={`min-w-fit mx-5   mb-3  mw-sm:mb-2 mw-sm:mx-5 flex flex-row items-center justify-center  border hover:dark:border-brand hover:dark:shadow-[0_0_8px_0_#ed4e50] ${
                          index == optionNumber
                            ? "bg-arrowicon dark:bg-[#141313]   dark:border-brand"
                            : "dark:border-brandLightOpacity10 dark:bg-brandLightOpacity5"
                        } border-brandDark2   rounded h-11`}
                      >
                        <p
                          className="pr-[0%] pl-[16px] font-bold dark:text-brandLightOpacity100
                            text-brandDark2 text-base mw-sm:text-[14px]  montserratfont"
                        >
                              {questionOption[index]}
                        </p>
                        <p
                          className={`pr-[40px] mx-auto hover:text-brandDark2 dark:hover:text-brandLightOpacity100 items-start  ${
                            index == optionNumber
                              ? "text-brandDark2 font-bold dark:text-brandLightOpacity100"
                              : "text-brandDark2 dark:text-brandLightOpacity100 font-light"
                          } text-base  text-[14px]  montserratfont `}
                        >
                              {item}
                        </p>
                       

       

                      </div>
                    ))}
                  </div>
                  <a
                    onClick={(e) => onClickOption(e)}
                    className={`done_btn h-[42px] flex  items-center  justify-center content-center mt-[20px] w-[230px] bg-brand   hover:bg-[#ec5d5f] rounded-3xl	text-center m-auto text-[16px]	leading-6	mb-6 text-white dark:text-brandLightOpacity100	font-semibold montserratfont cursor-pointer mw-sm:w-[250px]   mw-sm3:w-[100%] mw-sm:text-base mw-sm:text-semibold ${
                      optionSelect === false ? "opacity-50	" : "opacity-100	"
                    }  `}
                  >
                    Submit
                  </a>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default QuestionScreen;
