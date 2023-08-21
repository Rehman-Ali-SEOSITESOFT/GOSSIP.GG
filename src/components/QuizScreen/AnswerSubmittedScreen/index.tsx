"use client";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useRef, useState } from "react";
import Banner from "../../../assets/quiz-model/banner.png";
import Close from "../../../assets/images/modal/close.png";
import Image from "next/image";
import InviteFriendSection from "../InviteFriendsSec";
import CountdownSection from "../CountdownSec";
import { Switch } from "@headlessui/react";
const AnswerSubmitScreen = (props: any) => {
  const cancelButtonRef = useRef(null);
  const [enabled, setEnabled] = useState<boolean|any>(false);
  console.log("enabled", enabled)
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
                <InviteFriendSection />
                <CountdownSection />
                <div className="flex flex-col items-center justify-center content-center">
                  <p className=" w-[286px] text-[16px] mt-[32px] montserratfont font-semibold text-brandLightOpacity100 ">
                    Well done, @Naveen! <br /> You have successfully submitted
                    your answer.
                  </p>
                  <div className="px-[22px] mt-[248px]">
                    <p className="text-left text-brandLightOpacity100 montserratfont text-[16px] font-medium ">
                      
                      Results will be announced at
                      <span className=" text-brand "> &nbsp;8:00 P.M.</span> tonight.
                    </p>
                    <div className="mt-[13px] flex flex-row justify-between items-center">
                      <p className="text-[14px] montserratfont font-medium dark:text-brandLightOpacity70">Remind me</p>
                      <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={`${
                          enabled ? "bg-[#ed4e50]" : "bg-[#292828]"
                        } relative inline-flex h-6 w-11 items-center rounded-full outline-none`}
                      >
                       
                        <span
                          className={`${
                            enabled ? "translate-x-6  bg-brandLightOpacity100" : "translate-x-1 bg-swtichTip"
                          } inline-block h-4 w-4 transform rounded-full
                           transition`}
                        />
                      </Switch>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] dark:text-brandLightOpacity70 montserratfont mt-[50px]">Terms and conditions</p>
                  <a
                    className={`done_btn h-[42px] flex  items-center  justify-center content-center mt-[8px] w-[230px] bg-brand   hover:bg-[#ec5d5f] rounded-3xl	text-center m-auto text-[16px]	leading-6	mb-6 text-white dark:text-brandLightOpacity100	font-semibold montserratfont cursor-pointer mw-sm:w-[250px]   mw-sm3:w-[100%] mw-sm:text-base mw-sm:text-semibold`}
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

export default AnswerSubmitScreen;