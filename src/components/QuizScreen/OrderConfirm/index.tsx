"use client";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useRef, useState } from "react";
import Close from "../../../assets/images/modal/close.png";
import Gift from "../../../assets/quiz-model/gift.png";
import Image from "next/image";

const OrderConfirm = (props: any) => {
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
            <Dialog.Panel className="fixed inset-[70px] w-[375px]  mw-lg:inset-[30px] mw-sm:inset-0  mw-lg:left-auto max-h-[812px] mw-sm:w-full dark:bg-brandDark3 left-auto  overflow-y-auto scrollbar-thin   scrollbar-track-bodycolor  scrollbar-thumb-darkScollorBarColor  dark:scrollbar-track-brandDark2 ">
              {/* top   */}
              <div className="flex flex-col  h-full">
                <div className="relative ">
                  <div
                    onClick={() => props.close()}
                    className="bg-brandLightOpacity10 hover:bg-brandLightOpacity100  h-[40px] w-[40px] rounded-full absolute top-3 right-3 flex justify-center items-center content-center"
                  >
                    <Image src={Close} alt="Close" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center mt-[172px] px-[40px]">
                  <p className="montserratfont text-[18px] dark:text-[#ffff] font-semibold">Order Confirmed!</p>
                  <p className="montserratfont text-[14px] pt-[16px] dark:text-brandLightOpacity100 ">Your product will be shipped to you soon! Please check your email for more details about your package.</p>
                   <div className="mt-[56px]">
                   <Image src={Gift} alt="gift"/>
                   </div>
                </div>
                <div className="mt-[90px]">
                  <a
                   onClick={() => props.close()}
                    className={`done_btn h-[42px] flex  items-center  justify-center content-center mt-[8px] w-[230px] bg-brand   hover:bg-[#ec5d5f] rounded-3xl	text-center m-auto text-[16px]	leading-6	mb-6 text-white dark:text-brandLightOpacity100	font-semibold montserratfont cursor-pointer mw-sm:w-[250px]   mw-sm3:w-[100%] mw-sm:text-base mw-sm:text-semibold`}
                  >
                    Done
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

export default OrderConfirm;
