"use client";

import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useRef, useState } from "react";
import logo from "../../../assets/quiz-model/title-logo.png";
import bottomlogo from "../../../assets/quiz-model/into-bottom-logo-1.png";
import background from "../../../assets/quiz-model/backgorund-img.png";
import doublearrow from "../../../assets/quiz-model/duble-arrow.png";
import Image from "next/image";
import AddScreen from "../AdScreen";

const IntroScreen = (props: any) => {
  const cancelButtonRef = useRef(null);

  const [open, setOpen] = useState<Boolean>(false);
  const onClickPlay = () => {
    props.close();
    setOpen(!open);
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
              <Dialog.Panel className="fixed inset-[70px] w-[375px] left-auto mw-lg:inset-[30px] mw-sm:inset-0  mw-lg:left-auto max-h-[812px] mw-sm:max-w-[375px]  m-auto  mw-sm:inset-[10px] mw-sm:left-auto  mw-sm:max-h-full  bg-bodycolor dark:bg-brandDark3 left-auto mw-sm3:h-full mw-sm3:inset-0 mw-sm3:max-w-full mw-sm3:w-full  overflow-x-hidden   scrollbar-thin  scrollbar-thumb-choosebox   scrollbar-thumb-darkScollorBarColor  dark:scrollbar-track-[transparent] scrollbar-track-[transparent]   ">
                {/* top   */}
                <div className="flex flex-col justify-between h-full ">
                  <div className="flex justify-center items-center  pt-[60px]">
                    <div className="ml-[-40px]  logoed">
                      <Image src={logo} alt="lgo" />
                    </div>
                    <div className="ml-[-15px] animate__animated animate__bounceInRight">
                      <h4 className="text-brand capitalize font-bold text-[50px] leading-[45px] montserratfont">
                        gossip
                      </h4>
                      <p className="montserratfont text-brand text-xs	tracking-[3.6px] pl-2.5 text-left	 font-bold uppercase">
                        daily Quiz
                      </p>
                    </div>
                  </div>
                  <div className="pt-[50px] pb-[65px] px-[60px]  text-rotated-left">
                    <p className="dark:text-brandLightOpacity100 text-center montserratfont text-base leading-[24px] font-semibold  ">
                      Answer one question and this could be yours!
                    </p>
                  </div>

                  <div className="relative   h-[450px] ">
                    <span className="block  h-full">
                      <div className="absolute left-0 right-0 bottom-[130px] z-10">
                        <div
                          className="bg-brand  max-w-[177px] w-full h-[42px] flex items-center justify-between rounded-3xl m-auto pl-[27px] pr-[15px]	into-screen-btn hover:bg-[#ec5d5f] cursor-pointer"
                          onClick={() => onClickPlay()}
                        >
                          <span className="inline-block montserratfont text-[#fff]  text-base font-semibold">
                            Play Now
                          </span>
                          <span className="inline-block  ">
                            <Image
                              src={doublearrow}
                              alt="lgo"
                              className="flashanimted"
                            />
                          </span>
                        </div>
                      </div>
                      <Image
                        src={background}
                        alt="lgo"
                        className="h-full  rotad-left w-full"
                      />
                    </span>

                    <div className="absolute bottom-0 fade_Out_Up_Big ">
                      <Image src={bottomlogo} alt="lgo" />
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <AddScreen open={open} close={() => setOpen(!open)} isSeeResult={false} />
    </>
  );
};

export default IntroScreen;
