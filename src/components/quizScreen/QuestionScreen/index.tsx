"use client";

import { Dialog, Transition } from "@headlessui/react";

import React, { Fragment, useRef } from "react";
import Banner from "../../../assets/quiz-model/banner.png";
import Product from "../../../assets/quiz-model/product.png";
import Close from "../../../assets/images/modal/close.png";
import Image from "next/image";

const QuestionScreen = (props: any) => {
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
            <Dialog.Panel className="fixed inset-[70px] w-[375px] left-auto mw-lg:inset-[30px] mw-sm:inset-0  mw-lg:left-auto max-h-[812px] mw-sm:w-full dark:bg-brandDark3 left-auto  overflow-y-auto scrollbar-thin  scrollbar-thumb-choosebox  scrollbar-track-bodycolor  scrollbar-thumb-darkScollorBarColor  dark:scrollbar-track-brandDark2 ">
              {/* top   */}
              <div className="flex flex-col justify-between h-full">
                <div className="relative ">
                <Image src={Banner} alt="Banner" />
                <div 
                 onClick={() => props.close()}
                className="bg-brandLightOpacity10 hover:bg-brandLightOpacity100  h-[40px] w-[40px] rounded-full absolute top-2 right-2 flex justify-center items-center content-center" >
                <Image src={Close}  alt="Close"/>
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

export default QuestionScreen;
