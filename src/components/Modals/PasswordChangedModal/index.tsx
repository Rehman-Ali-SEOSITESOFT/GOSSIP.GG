import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Banner from "../../../assets/images/modal/banner.png";
import Close from "../../../assets/images/modal/close.png";

const PasswrodChangeModal = (props: any) => {
  const cancelButtonRef = useRef(null);

  return (
    <>
      <Transition.Root show={props.open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={() => props.onClickOpenModal()}
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
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative shadow-3xshadow  transform overflow-hidden rounded-lg dark:bg-brandDark2 bg-white text-left  transition-all sm:my-8 ">
                  <div className="bg-brandDark2">
                    <div className="h-[181px]">
                      <Image
                        src={Banner}
                        className="max-w-[100%] h-full"
                        alt="banner logo"
                      />
                      <div
                        onClick={() => props.onClickOpenModal()}
                        className="h-10 w-10 rounded-full  dark:bg-brandLightOpacity5 flex justify-center items-center content-center absolute top-4 right-4 "
                      >
                        <Image src={Close} alt="google icon" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col border-2 rounded-b-lg dark:border-r-brandLightOpacity10 dark:border-l-brandLightOpacity10 dark:border-b-brandLightOpacity10  dark:border-t-brandDark2 ">
                    <div className=" mw-sm:pl-10 mw-sm:pr-10 pl-30 pr-30  mb-9">
                      <div className="flex flex-col items-center  mt-126px pb-10">
                        <p className="text-brandLightOpacity100 text-2xl montserratfont not-italic font-bold pb-6 mw-sm:text-lg ">
                          Password Changed
                        </p>
                        <p className="montserratfont text-center mw-sm:w-[100%] w-[40%]  pt-11 pb-[77px] text-brandLightOpacity70 not-italic text-lg mw-sm:text-[16px]">
                          Your Password has been reset successfully
                        </p>
                      </div>
                      <div className="flex flex-col items-center pb-48  ">
                        <button
                          onClick={() => props.onClickOpenModal()}
                          className="bg-brand mw-sm:w-60  outline-none mw-sm:text-sm w-300px  hover:bg-[#ec5d5f] h-12 text-white rounded-3xl montserratfont text-lg font-bold"
                        >
                          Ok
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default PasswrodChangeModal;
