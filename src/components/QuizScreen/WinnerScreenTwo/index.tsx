"use client";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Banner from "../../../assets/quiz-model/banner.png";
import Close from "../../../assets/images/modal/close.png";
import Image from "next/image";
import InviteFriendSection from "../InviteFriendsSec";
import Prize from "../../../assets/quiz-model/prize.png";
import WinLogo from "../../../assets/quiz-model/win-logo.png";
import { Switch } from "@headlessui/react";
import ReactCurvedText from "react-curved-text";
import logo from "../../../assets/quiz-model/title-logo.png";
import cong from "../../../assets/quiz-model/cong1.gif";
import crown from "../../../assets/quiz-model/con-crown.png";

const WinnerScreenTwo = (props: any) => {
  const cancelButtonRef = useRef(null);
  const [enabled, setEnabled] = useState<boolean | any>(false);
  const [animtedHide, setAnimatedHided] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimatedHided(true);
    }, 3000);
  }, []);
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
            <Dialog.Panel className="fixed inset-[70px] w-[375px]  mw-lg:inset-[30px] mw-sm:inset-0  mw-lg:left-auto max-h-[812px] mw-sm:w-full dark:bg-brandDark3 left-auto  overflow-x-hidden scrollbar-thin  scrollbar-thumb-choosebox  scrollbar-track-bodycolor  scrollbar-thumb-darkScollorBarColor  dark:scrollbar-track-brandDark2 ">
              {/* top   */}
              <div
                className={`flex flex-col  h-full animatedd-layer dark:bg-brandDark3  ${
                  animtedHide ? "content-hide" : "content-show"
                }`}
              >
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
                <div className="flex flex-col  mt-[14px]">
                  <div className="mb-[12px] flex flex-col items-center justify-center">
                    <ReactCurvedText
                      width={372}
                      height={80}
                      cx={185}
                      cy={113}
                      rx={140}
                      ry={90}
                      startOffset={35}
                      reversed={true}
                      text="CONGRATULATIONS!"
                      textProps={{
                        style: {
                          fontSize: 22,
                          fontFamily: "Montserrat, sans-serif",
                          letterSpacing: 4,
                          fontWeight: 600,
                        },
                      }}
                      textPathProps={{ fill: "#ed4e50" }}
                      tspanProps={{ dy: "0" }}
                    />

                    <div className="mt-[-40px] z-[2]">
                      <Image src={WinLogo} alt="winner logo" />
                      <p className="text-[12px] dark:text-brandLightOpacity100 font-semibold montserratfont">
                        @Naveen
                      </p>
                    </div>
                  </div>
                  <div className="px-4 mb-[50px]">
                    <div className="flex flex-row items-center justify-center mb-[4px] ">
                      <div className="bg-gradient-to-l mw-sm:min-w-[25%] min-w-[35%] from-brandDark2 h-0.5    dark:from-secSaprator "></div>
                      <p className="px-[7px] montserratfont mw-sm:text-sm text-[16px] font-medium dark:text-brand">
                        YOU WIN
                      </p>
                      <div className="bg-gradient-to-r mw-sm:min-w-[25%] min-w-[35%] from-brandDark2 h-0.5    dark:from-secSaprator "></div>
                    </div>
                    <Image src={Prize} alt="Prixe" />
                  </div>
                  <div className="px-[22px]">
                    <p className="text-left text-brandLightOpacity100 montserratfont text-[16px] font-medium ">
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
                          enabled ? "bg-[#ed4e50]" : "bg-[#292828]"
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
                  <p className="text-[12px] dark:text-brandLightOpacity70 montserratfont mt-[40px]">
                    Terms and conditions
                  </p>
                  <a
                    className={`done_btn h-[42px] flex  items-center  justify-center content-center mt-[8px] w-[230px] bg-brand   hover:bg-[#ec5d5f] rounded-3xl	text-center m-auto text-[16px]	leading-6	mb-6 text-white dark:text-brandLightOpacity100	font-semibold montserratfont cursor-pointer mw-sm:w-[250px]   mw-sm3:w-[100%] mw-sm:text-base mw-sm:text-semibold`}
                  >
                    Go to Home Page
                  </a>
                </div>
              </div>
              <div
                className={`absolute inset-0 main-box ${
                  animtedHide ? "bg-animtedd-true" : "bg-animtedd-flase"
                }`}
              >
                <div className="congrulation-bg h-full flex flex-col justify-between">
                  <div className="co-box min-h-[270px]">
                    <div className="flex justify-center items-center  pt-[60px]">
                      <div className="ml-[-40px]  ">
                        <Image src={logo} alt="lgo" />
                      </div>
                      <div className="ml-[-15px] ">
                        <h4 className="text-brand capitalize font-bold text-[50px] leading-[45px] montserratfont">
                          gossip
                        </h4>
                        <p className="montserratfont text-brand text-xs	tracking-[3.6px] pl-2.5 text-left	 font-bold uppercase">
                          daily Quiz
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="congrulation relative">
                    <div className="absolute top-[-30px] z-10 congrulation-curved">
                      <ReactCurvedText
                        width={372}
                        height={80}
                        cx={185}
                        cy={113}
                        rx={140}
                        ry={90}
                        startOffset={35}
                        reversed={true}
                        text="CONGRATULATIONS!"
                        textProps={{
                          style: {
                            fontSize: 22,
                            fontFamily: "Montserrat, sans-serif",
                            letterSpacing: 4,
                            fontWeight: 600,
                            textShadow: "0 0 12px #f1ad2a",
                          },
                        }}
                        textPathProps={{ fill: "#FFFFFF" }}
                        tspanProps={{ dy: "0" }}
                      />
                    </div>

                    <Image
                      src={cong}
                      alt="lgo"
                      className="w-[375px] h-[520px] object-cover	animted-congrul-bg"
                    />
                    <div className="w-[120px] h-[170px] imge-text-value absolute top-[30px] right-0 left-0 m-auto">
                      <Image src={crown} alt="lgo" className="h-full" />
                      <span className="montserratfont text-lg leading-[22px] text-center text-brandLightOpacity1">
                        @Naveen
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default WinnerScreenTwo;
