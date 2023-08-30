"use client";

import { Dialog, Transition } from "@headlessui/react";

import React, { Fragment, useRef, useState } from "react";
import Banner from "../../../assets/quiz-model/banner.png";
import Product from "../../../assets/quiz-model/product.png";
import Close from "../../../assets/images/modal/close.png";
import Image from "next/image";
import CountdownSection from "../CountdownSec";
import InviteFriendSection from "../InviteFriendsSec";
import AnswerSubmitScreen from "../AnswerSubmittedScreen";
import CountDown from "../CountDownSection";

const QuestionScreen = (props: any) => {
  const cancelButtonRef = useRef(null);
  const [optionSelect, setOptionSelect] = useState<boolean>(false);
  const [optionNumber, setOptionNumber] = useState<number>(0);
  const questionList = [
    "$18.93 million​",
    "$24.54 million​",
    "$9.3 million​",
    "$40.01 million​",
  ];
  const questionOption = ["A", "B", "C", "D"];

  const onClickSelectOption = (val: number) => {
    setOptionNumber(val);
    setOptionSelect(true);
  };

  const [openQ, setOpenQ] = useState<Boolean>(false);

  const onClickSubmit = (e: any) => {
    props.close();
    setOpenQ(!openQ);
  };

  return (
    <>
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
              <Dialog.Panel className="fixed inset-[70px] w-[375px] left-auto bg-bodycolor mw-lg:inset-[30px] mw-sm:inset-0  mw-lg:left-auto max-h-[812px] mw-sm:w-full dark:bg-brandDark3 left-auto  overflow-y-auto scrollbar-thin  scrollbar-thumb-choosebox  scrollbar-track-[transparent]  scrollbar-thumb-darkScollorBarColor  dark:scrollbar-track-[transparent] m-auto mw-sm:h-full  mw-sm:max-h-full ">
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
                      className="bg-brandLightOpacity10 hover:bg-brandLightOpacity20  h-[40px] w-[40px] rounded-full absolute top-2 right-2 flex justify-center items-center content-center"
                    >
                      <Image src={Close} alt="Close" />
                    </div>
                  </div>
                  <InviteFriendSection />
                  {/* <CountdownSection /> */}
                  <CountDown />

                  <div className="mx-[16px] my-[13px]">
                    <Image
                      src={Product}
                      alt="Product"
                      className="w-full max-h-[210px] object-cover"
                    />
                  </div>
                  <div className="border-l-2 border-l-brand ml-[20px]">
                    <p className="pl-[10px] montserratfont text-[16px] font-semibold text-brandDark1 dark:text-brandLightOpacity100 text-left">
                      What is the largest ever prize pool for a gaming
                      tournament?
                    </p>
                  </div>
                  <div>
                    <div className="mt-5">
                      {questionList.map((item, index) => (
                        <div
                          key={index}
                          onClick={() => onClickSelectOption(index + 1)}
                          className={`min-w-fit mx-5   mb-3  mw-sm:mb-2 mw-sm:mx-5 flex flex-row items-center justify-center  border  hover:border-brandDark2 hover:dark:border-brand hover:dark:shadow-[0_0_8px_0_#ed4e50] ${
                            index + 1 == optionNumber
                              ? "bg-arrowicon dark:bg-[#141313] border-brandDark2  dark:border-brand"
                              : "dark:border-brandLightOpacity10 border-brandLightOpacity100  dark:bg-brandLightOpacity5"
                          }   rounded h-11`}
                        >
                          <p
                            className="pr-[0%] pl-[16px] font-bold dark:text-brandLightOpacity100
                            text-brandDark2 text-base mw-sm:text-[14px]  montserratfont"
                          >
                            {questionOption[index]}
                          </p>
                          <p
                            className={`pr-[40px] mx-auto hover:text-brandDark2 dark:hover:text-brandLightOpacity100 items-start  ${
                              index + 1 == optionNumber
                                ? "text-brandDark2 font-bold dark:text-brandLightOpacity100"
                                : "text-brandDark2  dark:text-brandLightOpacity100 dark:font-light font-medium"
                            } text-base  text-[14px]  montserratfont `}
                          >
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                    <a
                      onClick={(e) => onClickSubmit(e)}
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
      <AnswerSubmitScreen open={openQ} close={() => setOpenQ(!openQ)} />
    </>
  );
};

export default QuestionScreen;
