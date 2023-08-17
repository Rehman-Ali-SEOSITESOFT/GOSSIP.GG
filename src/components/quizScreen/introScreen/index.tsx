"use client";

import { Dialog, Transition } from "@headlessui/react";

import React, { Fragment, useRef } from "react";
import logo from "../../../assets/quiz-model/title-logo.png";
import bottomlogo from "../../../assets/quiz-model/into-bottom-logo.png";
import background from "../../../assets/quiz-model/backgorund-img.png";
import doublearrow from "../../../assets/quiz-model/duble-arrow.png";
import Image from "next/image";

const IntroScreen = (props: any) => {
  const cancelButtonRef = useRef(null);
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
        <div className="fixed inset-[70px] left-auto mw-lg:inset-[30px] mw-sm:inset-0  mw-lg:left-auto z-10 overflow-y-auto scrollbar-thin  scrollbar-thumb-choosebox  scrollbar-track-bodycolor  scrollbar-thumb-darkScollorBarColor  dark:scrollbar-track-brandDark2 ">
          <div className="flex  max-w-[375px] h-full mw-sm:max-w-full mw-sm:w-full max-h-[812px] mw-sm:max-h-full  items-end justify-center p-4  sm:items-center sm:p-0 dark:bg-brandDark3 mw-sm:items-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative dark:bg-brandDark3 transform overflow-hidden  transition-all h-full ">
                <div className="flex justify-center items-center animate__animated animate__bounceInRight">
                  <div className="ml-[-40px]">
                    <Image src={logo} alt="lgo" />
                  </div>
                  <div className="ml-[-15px]">
                    <h4 className="text-brand capitalize font-bold text-[50px] leading-[45px] montserratfont">
                      gossip
                    </h4>
                    <p className="montserratfont text-brand text-xs	tracking-[3.6px] pl-2.5	 font-bold uppercase">
                      daily Quiz
                    </p>
                  </div>
                </div>
                <div className=" animate__animated  animate__rotateIn">
                  {" "}
                  <p>Answer one question and this could be yours!</p>
                  <button className="bg-brand  max-w-[177px] w-full h-[42px] flex items-center justify-between rounded-3xl m-auto pl-[27px] pr-[15px]	into-screen-btn">
                    <span className="inline-block montserratfont text-[#fff]  text-base font-semibold">
                      {" "}
                      Play Now{" "}
                    </span>
                    <span className="inline-block">
                      <Image src={doublearrow} alt="lgo" />
                    </span>
                  </button>
                  <Image src={background} alt="lgo" />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default IntroScreen;
