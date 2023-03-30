import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import welcomeicon from "../../../assets/globals/welcome-icon.png";
import userimg from "../../../assets/globals/welcome-img.png";
import Image from "next/image";
import ChoiceTopicModel from "../ChoiceTopicsModel";

const WelcomeGossip = (props: any) => {
  const cancelButtonRef = useRef(null);
  const [open, setOpen] = useState(false);
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
          className="relative z-10 choiceselect"
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

          <div className="fixed inset-0 z-10 overflow-y-auto  ">
            <div className="flex w-full max-w-[624px]	m-auto  min-h-full  items-center justify-center py-8">
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
                  className={`relative transform overflow-hidden rounded-lg  w-full text-left transition-all dark:bg-brandDark2 shadow-3xshadow p-5	border-2 rounded-lg	 dark:border-brandLightOpacity10 pb-11	`}
                >
                  <div className="choiceModelMain text-center">
                    <div className="choiceheader pb-4 float-right">
                      <div
                        className="icon flex  dark:bg-brandLightOpacity10  justify-center items-center w-[40px] h-[40px] rounded-3xl cursor-pointer"
                        onClick={() => props.onClickOpenModal()}
                      >
                        <i className="text-xl fa-solid fa-xmark"></i>
                      </div>
                    </div>
                    <div className="welcome-icon clear-both ">
                      <Image src={welcomeicon} alt="icon" className="m-auto" />
                    </div>
                    <div className="titlesection text-center clear-both">
                      <h3 className="font-bold montserratfont text-2xl leading-7	dark:text-brandLightOpacity100 	mw-sm:text-xl	py-12 mw-sm:py-7">
                        Welcome to Gossip.gg, <br /> Naveen!
                      </h3>
                    </div>

                    <div className="text-center">
                      <Image src={userimg} alt="icon" className="m-auto" />
                      <p className="dark:text-brandLightOpacity70 text-base	leading-5	montserratfont pt-4 pb-12 mw-sm:pb-7">
                        Tell us a bit about your interests <br /> so we can
                        personalize your <br /> experience.
                      </p>
                    </div>
                    <div className={` flex flex-col  py-8	`}>
                      <a
                        onClick={onClickOpenModal}
                        className="done_btn w-300px bg-brand inline-block py-3	rounded-3xl	text-center m-auto text-lg	leading-6	mb-6 text-brandLightOpacity100	font-bold montserratfont cursor-pointer mw-sm:w-[250px]   mw-sm3:w-[100%] mw-sm:text-base mw-sm:text-semibold "
                      >
                        Continue
                      </a>

                      <a className="skip_btn   w-300px border border-brandLightOpacity100 inline-block py-3	rounded-3xl	text-center m-auto text-lg leading-6 text-brandLightOpacity100 font-bold montserratfont	cursor-pointer  mw-sm:w-[250px]   mw-sm3:w-[100%] mw-sm:text-base  mw-sm:text-semibold ">
                        Skip
                      </a>
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
