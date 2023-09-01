import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useRef, useState } from "react";
import logo from "../../../assets/quiz-model/title-logo.png";
import bottomlogo from "../../../assets/quiz-model/into-bottom-logo-1.png";
import background from "../../../assets/quiz-model/backgorund-img.png";
import doublearrow from "../../../assets/quiz-model/duble-arrow.png";
import Image from "next/image";
import AddScreen from "../AdScreen";

const NewIntroScreen = (props) => {
  const cancelButtonRef = useRef(null);

  const [addTitleClass, setAddTitleClass] = useState(false);
  setTimeout(() => {
    setAddTitleClass(true);
  }, 0);
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
              <Dialog.Panel className="fixed inset-[70px] w-[375px] left-auto mw-lg:inset-[30px] mw-lg:left-auto mw-sm5:inset-[10px]  mw-sm3:w-[340px]  max-h-[812px]  m-auto   mw-sm:max-h-full  bg-bodycolor dark:bg-brandDark3 left-auto  overflow-x-hidden   scrollbar-thin  scrollbar-thumb-choosebox   scrollbar-thumb-darkScollorBarColor  dark:scrollbar-track-[transparent] scrollbar-track-[transparent]   ">
                <div className="min-h-[812px] w-[375px] mw-sm3:w-[340px]">
                  {/* top   */}
                  {/* <div className="flex flex-col justify-between h-full ">
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
                        <div className="bg-brand  max-w-[177px] w-full h-[42px] flex items-center justify-between rounded-3xl m-auto pl-[27px] pr-[15px]	into-screen-btn hover:bg-[#ec5d5f] cursor-pointer">
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
                </div> */}
                  <div className="flex justify-center items-center w-[243px] m-auto pt-[100px]">
                    <div className="logoed ml-[-20px]">
                      <Image
                        src={logo}
                        alt="lgo"
                        className={`min-w-[106px] h-[106px] ${
                          addTitleClass ? "logohide-show" : "logohide"
                        }`}
                      />
                    </div>
                    {/* <div className="ml-[-15px] animate__animated animate__bounceInRight"> */}
                    <div
                      className={`ml-[-15px]  tile-animtion ${
                        addTitleClass ? "add new-animtion" : ""
                      }`}
                    >
                      <h4 className="text-brand capitalize font-bold text-[50px] leading-[45px] montserratfont">
                        gossip
                      </h4>
                      <p className="montserratfont text-brand text-xs	tracking-[3.6px] pl-2.5 text-left	 font-bold uppercase">
                        daily Quiz
                      </p>
                    </div>
                  </div>
                  <div className="pt-[59px] pb-[50px] pl-[81px] pr-[85px]  text-rotated-left">
                    <p className="dark:text-brandLightOpacity100 text-center montserratfont text-base leading-[24px] font-medium  ">
                      Answer one question and this could be yours!
                    </p>
                  </div>
                  <div
                    className={`relative   h-[448px] ${
                      addTitleClass ? "" : "img-bottom"
                    }`}
                  >
                    <span className="block absolute inset-0  h-full">
                      <div className="absolute left-0 right-0 bottom-[130px] z-10">
                        <div className="bg-brand  max-w-[177px] w-full h-[42px] flex items-center justify-between rounded-3xl m-auto pl-[27px] pr-[15px]	into-screen-btn hover:bg-[#ec5d5f] cursor-pointer button-animtion">
                          <span className="inline-block montserratfont text-[#fff]  text-base font-semibold ">
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
                        className="h-full  rotad-left w-full object-cover"
                      />
                    </span>
                    <div
                      className={`image-bottom-to-top ${
                        addTitleClass ? "stoped-image" : ""
                      }`}
                    >
                      <Image src={bottomlogo} alt="lgo" />
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default NewIntroScreen;
