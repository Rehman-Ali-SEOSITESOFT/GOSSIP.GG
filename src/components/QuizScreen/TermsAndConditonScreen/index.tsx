"use client";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useRef, useState } from "react";
import Close from "../../../assets/images/modal/close.png";
import Image from "next/image";

const TermsAndCondition = (props: any) => {
  const cancelButtonRef = useRef(null);
  interface TermsList {
    sr: number;
    description: string;
  }
  const [termData, setTermData] = useState<TermsList[]>([
    {
      sr: 1,
      description:
        "Gossip.gg reserves the right to choose the winners and make any changes to the same in case of fraudulent behavior from any participant.",
    },
    {
      sr: 2,
      description:
        "Gossip.gg reserves the right to make any changes to the declared prize.",
    },
    {
      sr: 3,
      description:
        "Gossip.gg is not responsible for any damaged goods delivered to the prize winners. Winners must take up any dispute with the manufacturers.",
    },
    {
      sr: 4,
      description:
        "Gossip.gg reserves the right to choose the winners and make any changes to the same in case of fraudulent behavior from any participant.",
    },
    {
      sr: 5,
      description:
        "Gossip.gg reserves the right to make any changes to the declared prize.",
    },
    {
      sr: 6,
      description:
        "Gossip.gg is not responsible for any damaged goods delivered to the prize winners. Winners must take up any dispute with the manufacturers.",
    },
    {
      sr: 7,
      description:
        "Gossip.gg reserves the right to choose the winners and make any changes to the same in case of fraudulent behavior from any participant.",
    },
    {
      sr: 8,
      description:
        "Gossip.gg reserves the right to make any changes to the declared prize.",
    },
    {
      sr: 9,
      description:
        "Gossip.gg is not responsible for any damaged goods delivered to the prize winners. Winners must take up any dispute with the manufacturers.",
    },
    {
      sr: 10,
      description:
        "Gossip.gg is not responsible for any damaged goods delivered to the prize winners. Winners must take up any dispute with the manufacturers.",
    },
  ]);

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
            <Dialog.Panel className="fixed inset-[70px] bg-bodycolor w-[375px]  mw-lg:inset-[30px] mw-sm:inset-0  mw-lg:left-auto max-h-[812px] mw-sm:w-full dark:bg-brandDark3 left-auto  overflow-y-auto scrollbar-thin   scrollbar-track-[transparent]  scrollbar-thumb-darkScollorBarColor  dark:scrollbar-track-[transparent] m-auto mw-sm:h-full  mw-sm:max-h-full">
              {/* top   */}
              <div className="flex flex-col  h-full">
                <div className="relative ">
                  <p className="pt-[16px] pl-[16px] text-[24px] font-bold dark:text-brandLightOpacity100 montserratfont text-left">
                    Terms and Conditions
                  </p>
                  <div
                    onClick={() => props.close()}
                    className="dark:bg-brandLightOpacity10 hover:bg-brandLightOpacity50 bg-brandLightOpacity30 hover:dark:bg-brandLightOpacity20  h-[40px] w-[40px] rounded-full absolute top-3 right-3 flex justify-center items-center content-center"
                  >
                    <Image
                      className="brightness-0 dark:brightness-100"
                      src={Close}
                      alt="Close"
                    />
                  </div>
                </div>
                <div className="mt-[16px]">
                  {termData.map((item, index) => (
                    <div
                      className="flex flex-row px-[16px] mb-[20px]"
                      key={index}
                    >
                      <span className="text-[14px] dark:text-brandLightOpacity100 montserratfont text-left">
                        {item.sr}.&nbsp;
                      </span>
                      <p className="text-[14px] dark:text-brandLightOpacity100 montserratfont text-left">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default TermsAndCondition;
