"use client";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useRef, useState } from "react";
import Banner from "../../../assets/quiz-model/banner.png";
import Close from "../../../assets/images/modal/close.png";
import Image from "next/image";
import InviteFriendSection from "../InviteFriendsSec";
import Sad from "../../../assets/quiz-model/sad.png";
import Win1 from "../../../assets/quiz-model/win1.png";
import Win2 from "../../../assets/quiz-model/win2.png";
import Win3 from "../../../assets/quiz-model/win3.png";
import Win4 from "../../../assets/quiz-model/win4.png";
import Win5 from "../../../assets/quiz-model/win5.png";
import { Switch } from "@headlessui/react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
const AnsweredIncorrectly = (props: any) => {
  const cancelButtonRef = useRef(null);
  const [enabled, setEnabled] = useState<boolean | any>(false);
  console.log("enabled", enabled);
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
            <Dialog.Panel className="fixed bg-bodycolor inset-[70px] w-[375px]  mw-lg:inset-[30px] mw-sm:inset-0  mw-lg:left-auto max-h-[812px] mw-sm:w-full dark:bg-brandDark3 left-auto  overflow-y-auto scrollbar-thin    scrollbar-track-bodycolor  scrollbar-thumb-darkScollorBarColor  dark:scrollbar-track-brandDark2 ">
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
                <div className="ml-4 mt-2">
                  <p className="text-[12px] italic montserratfont dark:text-brandLightOpacity70 text-left">
                    Correct Answer:
                    <span className="text-brand">
                      &nbsp;Option B&nbsp;
                    </span>
                    2 Million
                  </p>
                </div>
                <div className="flex flex-col items-center mt-[24px]">
                  <Image src={Sad} alt="Sad Emoji" />
                  <p className="montserratfont dark:text-brand font-semibold text-[16px]">
                    Uh-Oh!
                  </p>
                  <p className="montserratfont text-[14px] dark:text-brandLightOpacity100">
                    Looks like you answered this quiz incorrectly.
                  </p>
                  <div className="">
                    <div className="oultine-none mt-[2px] ">
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex flex-row item-center  focus:outline-none ">
                              <span className="text-[12px] montserratfont font-light dark:text-[#818181]">
                                Here’s how you can get better
                              </span>
                              <ChevronUpIcon
                                className={`${
                                  open ? "rotate-180 transform" : ""
                                } h-5 w-5 dark:text-[#818181]`}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="pt-[4px]">
                              <p className="italic text-left text-[12px] montserratfont font-light dark:text-brandLightOpacity70">
                                <span>&#x2022;&nbsp; </span>Read more articles
                              </p>
                              <p className="text-left italic text-[12px] montserratfont font-light dark:text-brandLightOpacity70">
                                <span>&#x2022;&nbsp; </span>Pay attention to
                                details
                              </p>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col  mt-[14px]">
                  <div className="mb-[12px] flex flex-col items-center justify-center"></div>

                  <div className=" ">
                    <div className="px-[1px] flex flex-row items-center justify-center mb-[4px] ">
                      <div className="bg-gradient-to-l  min-w-[22%] from-brandDark2 h-0.5    dark:from-secSaprator "></div>
                      <p className="px-[6px] montserratfont text-[14px] font-medium dark:text-brand">
                        TODAY&#39;S LUCKY WINNERS
                      </p>
                      <div className="bg-gradient-to-r  min-w-[22%] from-brandDark2 h-0.5    dark:from-secSaprator "></div>
                    </div>
                    <div className="flex flex-wrap mx-[25px] item-center justify-center mb-[40px]">
                      <div className="w-[33.33%] flex flex-col items-center">
                        <Image src={Win1} alt="Winner logo" />
                        <p className="text-[12px] mt-[-7px] dark:text-brandLightOpacity100 font-medium montserratfont">
                          @Naveen
                        </p>
                      </div>
                      <div className="w-[33.33%] flex flex-col items-center">
                        <Image src={Win2} alt="Winner logo" />
                        <p className="text-[12px] mt-[-7px] dark:text-brandLightOpacity100 font-medium montserratfont">
                          @Naveen
                        </p>
                      </div>
                      <div className="w-[33.33%] flex flex-col items-center">
                        <Image src={Win3} alt="Winner logo" />
                        <p className="text-[12px] mt-[-7px] dark:text-brandLightOpacity100 font-medium montserratfont">
                          @Naveen
                        </p>
                      </div>
                      <div className="w-[33.33%] flex flex-col items-center">
                        <Image src={Win4} alt="Winner logo" />
                        <p className="text-[12px] mt-[-7px] dark:text-brandLightOpacity100 font-medium montserratfont">
                          @Naveen
                        </p>
                      </div>
                      <div className="w-[33.33%] flex flex-col items-center">
                        <Image src={Win5} alt="Winner logo" />
                        <p className="text-[12px] mt-[-7px] dark:text-brandLightOpacity100 font-medium montserratfont">
                          @Naveen
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="px-[22px]">
                    <p className="text-left text-brandDark2 dark:text-brandLightOpacity100 montserratfont text-[16px] font-medium ">
                      Play again tomorrow?
                    </p>
                    <div className="mt-[10px] flex flex-row justify-between items-center">
                      <p className="text-[14px] montserratfont font-medium dark:text-brandLightOpacity70">
                        Remind me
                      </p>
                      <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={`${
                          enabled ? "bg-brandDark2 dark:bg-[#ed4e50]" : "bg-brandLightOpacity100 dark:bg-[#292828]"
                        } relative inline-flex  h-[24px] w-[56px] items-center rounded-full outline-none`}
                      >
                        <span
                          className={`${
                            enabled
                              ? "translate-x-9  bg-brandLightOpacity100"
                              : "translate-x-1 bg-swtichTip"
                          } inline-block h-4 w-4 transform rounded-full
                           transition`}
                        />
                      </Switch>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="cursor-pointer text-[12px] dark:text-brandLightOpacity70 montserratfont mt-[40px] pb-[4px]">
                    Terms and conditions
                  </p>
                  <a
                    className={`done_btn h-[42px] flex  items-center  justify-center content-center mt-[8px] w-[230px] bg-brand   hover:bg-[#ec5d5f] rounded-3xl	text-center m-auto text-[16px]	leading-6	mb-6 text-white dark:text-brandLightOpacity100	font-semibold montserratfont cursor-pointer mw-sm:w-[230px]  mw-sm3:text-[14px]  mw-sm3:w-[55%] mw-sm:text-base mw-sm:text-semibold`}
                  >
                    Go to Home Page
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

export default AnsweredIncorrectly;
