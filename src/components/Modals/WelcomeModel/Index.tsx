import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Banner from "../../../assets/images/modal/banner.png";
import Close from "../../../assets/images/modal/close.png";
import { useTheme } from "next-themes";
import welcomeicon from "../../../assets/globals/welcome-icon.png";
import userimg from "../../../assets/globals/welcome-img.png";
import ChoiceTopicModel from "../ChoiceTopicsModel";
const WelcomeGossip = (props: any) => {
  const cancelButtonRef = useRef(null);
  const {theme} = useTheme();
  const [open, setOpen] = useState<boolean | null>(false);
  const onClickOpenModal = () => {
    if (!open) {
      props.onClickOpenModal();
    }
    setOpen(!open);
  };
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
                <Dialog.Panel
                  className="relative transform overflow-hidden rounded-lg  dark:bg-brandDark2  text-left  transition-all sm:my-8  shadow-3xshadow
                "
                >
                  <div className="bg-brandDark2">
                    <div className="h-[181px]">
                      <Image
                        src={Banner}
                        className="max-w-[100%] h-full"
                        alt="banner logo"
                      />
                      <div
                        onClick={() => props.onClickOpenModal()}
                        className="h-10 w-10 rounded-full  bg-brandLightOpacity5 hover:bg-[#353233]  flex justify-center items-center content-center absolute top-4 right-4 "
                      >
                        <Image src={Close} alt="google icon" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col bg-bodycolor dark:bg-brandDark2  border-2 rounded-b-lg dark:border-r-brandLightOpacity10 dark:border-l-brandLightOpacity10 dark:border-b-brandLightOpacity10  dark:border-t-brandDark2">
                    <div className=" mw-sm:pl-10 mw-sm:pr-10 pl-40 pr-40  mb-9">
                    <div className="welcome-icon clear-both ">
                      <Image src={welcomeicon} alt="icon" className="m-auto" />
                    </div>
                    <div className="titlesection text-center clear-both">
                      <h3 className="font-bold montserratfont text-2xl leading-7	dark:text-brandLightOpacity100 	mw-sm:text-xl	pb-6 ">
                        Welcome to Gossip.gg, <br /> Naveen!
                      </h3>
                    </div>

                    <div className="text-center">
                      <p className="dark:text-brandLightOpacity70 text-base	leading-5	montserratfont  pb-[52px]">
                        Tell us a bit about your interests <br /> so we can
                        personalize your <br /> experience.
                      </p>
                    </div>
                    <div className={` flex flex-col  mb-[250px]	`}>
                      <a
                        onClick={onClickOpenModal}
                        className="done_btn w-300px bg-brand hover:bg-[#ec5d5f] inline-block py-3	rounded-3xl	text-center m-auto text-lg	leading-6	mb-6 text-white dark:text-brandLightOpacity100	font-bold montserratfont cursor-pointer mw-sm:w-[250px]   mw-sm3:w-[100%] mw-sm:text-base mw-sm:text-semibold "
                      >
                        Continue
                      </a>

                      <a className="skip_btn   w-300px border  border-brandDark2 dark:border-brandLightOpacity100 inline-block py-3	rounded-3xl	text-center m-auto text-lg leading-6 text-brandDark2 dark:text-brandLightOpacity100 font-bold montserratfont	cursor-pointer  mw-sm:w-[250px]   mw-sm3:w-[100%] mw-sm:text-base  mw-sm:text-semibold ">
                        Skip
                      </a>
                    </div>                     
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <ChoiceTopicModel open={open} onClickOpenModal={onClickOpenModal} />
    </>
  );
};

export default WelcomeGossip;
