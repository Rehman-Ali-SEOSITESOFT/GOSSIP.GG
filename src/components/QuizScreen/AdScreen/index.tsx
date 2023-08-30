import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useRef, useState } from "react";
import doublearrow from "../../../assets/quiz-model/duble-arrow.png";
import Image from "next/image";
import closebtn from "../../../assets/quiz-model/close-add.png";
import QuestionScreen from "../QuestionScreen";
import WinnerScreenTwo from "../WinnerScreenTwo";

const AddScreen = (props: any) => {
  const cancelButtonRef = useRef(null);

  const [seconds, setSeconds] = useState<number>(5);
  const [addDisabled, setAddDisabled] = useState<boolean>(false);

  const timerFunction = () => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    setTimeout(() => {
      clearInterval(interval);
      setAddDisabled(true);
      setSeconds(0);
    }, 5000);
  };

  useEffect(() => {
    setSeconds(5);
    setAddDisabled(false);
    if (props.open === true) {
      timerFunction();
    }
  }, [props.open === true]);

  const [openQ, setOpenQ] = useState<Boolean>(false);

  const onClickStart = (e: any) => {
    props.close();
    setOpenQ(!openQ);
  };

  const [openW, setOpenW] = useState<Boolean>(false);

  const onClickViewWinnerScreen = (e: any) => {
    props.close();
    setOpenW(!openW);
  };

  return (
    <>
      <Transition.Root show={props.open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={() => {
            props.close();
          }}
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
                <div className="relative flex  flex-col justify-between h-full add-screen bg-cover	bg-[100%] ">
                  <div
                    className={`top-side flex flex-col justify-between h-full p-5 z-10`}
                  >
                    <div className="flex justify-between items-center">
                      {addDisabled ? (
                        <div className="w-[28px] h-[28px]  rounded-3xl leading-[28px]">
                          <span className="text-lg leading-normal font-semibold montserratfont"></span>
                        </div>
                      ) : (
                        <div className="w-[28px] h-[28px] bg-[rgba(20,19,19,0.10)] rounded-3xl leading-[28px]">
                          <span className="text-lg leading-normal font-semibold montserratfont text-brandLightOpacity100">
                            {seconds}
                          </span>
                        </div>
                      )}
                      <div
                        className="cursor-pointer"
                        onClick={() => props.close()}
                      >
                        <Image src={closebtn} alt="lgo" />
                      </div>
                    </div>
                    <div className="bottom-side">
                      <button
                        className="bg-brand/[0.5] outline-none  max-w-[177px] w-full h-[42px] flex items-center justify-between rounded-3xl m-auto pl-[27px] pr-[15px]	 hover:bg-[#ec5d5f] cursor-pointer disabled:hover:bg-brand/[0.5] disabled:hover:cursor-default	"
                        disabled={addDisabled ? false : true}
                        onClick={
                          props.isSeeResult
                            ? (e) => onClickViewWinnerScreen(e)
                            : (e) => onClickStart(e)
                        }
                      >
                        <span className="inline-block montserratfont text-[#fff]  text-base font-semibold">
                          {props.isSeeResult ? "View Result" : "Start Quiz"}
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
                          onClick={() => console.log("visiting now.....")}
                          className=" montserratfont text-base font-medium	leading-normal underline underline-offset-2	text-shadow text-brandLightOpacity90 hover:text-[#fff] disabled:hover:text-brandLightOpacity90 disabled:hover:cursor-default"
                        >
                          Visit Now
                        </button>
                      </div>
                    </div>
                  </div>
                  {addDisabled ? (
                    <div className="backdrop-[2px] absolute inset-0 h-full add-screen-bg-filter backdrop-blur-[2px]"></div>
                  ) : null}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <QuestionScreen open={openQ} close={() => setOpenQ(!openQ)} />
      <WinnerScreenTwo open={openW} close={() => setOpenW(!openW)} />
    </>
  );
};

export default AddScreen;
