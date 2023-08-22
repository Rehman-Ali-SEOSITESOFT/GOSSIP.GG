import { Dialog, Transition } from "@headlessui/react";

import React, { Fragment, useEffect, useRef, useState } from "react";
import doublearrow from "../../../assets/quiz-model/duble-arrow.png";
import Image from "next/image";
import Link from "next/link";
import closebtn from "../../../assets/quiz-model/close-add.png";

const AddScreen = (props: any) => {
  const cancelButtonRef = useRef(null);
  const [addDisabled, setAddDisabled] = useState<Boolean>(false);

  const [timer, setTimer] = useState<Number>(3);

  const hanldeClosedAddScreen = () => {
    console.log("closing testing......");
    // setAddDisabled(!addDisabled);
  };

  // const timerfuntion = () => {
  //   setInterval(() => {
  //     setTimer(timer - 1);
  //   }, 1000);
  // };
  // useEffect(() => {
  //   if (timer === 1) {
  //     clearInterval(timerfuntion());
  //     setAddDisabled(true);
  //   } else if (timer > 1) {
  //     timerfuntion();
  //   }
  // }, []);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("working");
  //     setTimer(timer - 1);
  //   }, 1000); // Decrement every second

  //   if (timer === 0) {
  //     setAddDisabled(true);
  //   }
  //   return () => {
  //     clearInterval(interval); // Clean up the interval when the component unmounts
  //   };
  // }, []);

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
            <Dialog.Panel className="fixed inset-[70px] w-[375px] left-auto mw-lg:inset-[30px] mw-sm:inset-0  mw-lg:left-auto max-h-[812px] mw-sm:w-full dark:bg-brandDark3 left-auto  overflow-x-hidden scrollbar-thin  scrollbar-thumb-choosebox  scrollbar-track-bodycolor  scrollbar-thumb-darkScollorBarColor  dark:scrollbar-track-brandDark2 ">
              {/* top   */}
              <div className="relative flex  flex-col justify-between h-full add-screen bg-cover	bg-[100%] ">
                <div
                  className={`top-side flex flex-col justify-between h-full p-5 z-10`}
                >
                  <div className="flex justify-between items-center">
                    <div className="w-[28px] h-[28px] bg-[rgba(20,19,19,0.10)] rounded-3xl leading-[28px]">
                      <span className="text-lg leading-normal font-semibold montserratfont text-brandLightOpacity100">
                        0
                      </span>
                    </div>
                    <div
                      className="cursor-pointer"
                      onClick={hanldeClosedAddScreen}
                    >
                      <Image src={closebtn} alt="lgo" />
                    </div>
                  </div>
                  <div className="bottom-side">
                    <button
                      className="bg-brand/[0.5]  max-w-[177px] w-full h-[42px] flex items-center justify-between rounded-3xl m-auto pl-[27px] pr-[15px]	 hover:bg-[#ec5d5f] cursor-pointer disabled:hover:bg-brand/[0.5] disabled:hover:cursor-default	"
                      disabled={addDisabled ? false : true}
                      onClick={() => console.log("working")}
                    >
                      <span className="inline-block montserratfont text-[#fff]  text-base font-semibold">
                        Start Quiz
                      </span>
                      <span className="inline-block  ">
                        <Image
                          src={doublearrow}
                          alt="lgo"
                          className="flashanimted"
                        />
                      </span>
                    </button>
                    <div className="pr-[30px] pb-[17px] pt-[80px] text-end">
                      <button
                        disabled={addDisabled ? false : true}
                        // href="#"
                        onClick={() => console.log("visiting now.....")}
                        className=" montserratfont text-base font-medium	leading-normal underline underline-offset-2	text-shadow text-brandLightOpacity90 hover:text-[#fff] disabled:hover:text-brandLightOpacity90 disabled:hover:cursor-default"
                      >
                        Visit Now{" "}
                      </button>
                    </div>
                  </div>
                </div>
                {addDisabled ? (
                  <div className="backdrop-[2px] absolute inset-0 h-full add-screen-bg-filter"></div>
                ) : null}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default AddScreen;
