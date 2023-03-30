import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Banner from "../../../assets/images/modal/banner.png";
import Logo from "../../../assets/images/modal/logo.png";
import Discord from "../../../assets/images/modal/discord.png";
import Close from "../../../assets/images/modal/close.png";
import Google from "../../../assets/images/modal/google.png";
import style from "./signup.module.css";
import EmailModal from "../VerificationEmailModal";

const SignupModal = (props: any) => {
  const cancelButtonRef = useRef(null);

  const [open, setOpen] = useState(false);
  console.log("login====", props.open);
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
                <Dialog.Panel className="relative shadow-3xshadow  transform overflow-hidden rounded-lg dark:bg-brandDark2 bg-white text-left shadow-xl transition-all sm:my-8 ">
                  <div className="bg-brandDark2">
                    <div className="h-[181px]">
                      <Image
                        src={Banner}
                        className="max-w-[100&] h-full"
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
                  <div className="flex flex-col ">
                    <div className=" mw-sm:pl-10 mw-sm:pr-10 pl-40 pr-40  mb-9">
                      <div className="flex flex-col items-center ">
                        <Image src={Logo} alt="logo" />
                        <p className="text-brandLightOpacity100 text-2xl montserratfont not-italic font-bold pb-6 mw-sm:text-lg ">
                          Sign Up to Gossip.gg
                        </p>
                        <input
                          className="text-base font-medium  montserratfont border-brandLightOpacity10 border rounded w-full h-12 py-2 px-6 bg-brandDark3 focus:outline-none focus:shadow-outline focus:border-[#ffffff]"
                          id="name"
                          type="text"
                          placeholder="Name"
                        />
                        <input
                          className="text-base font-medium  montserratfont border-brandLightOpacity10 mt-4 border rounded w-full h-12 py-2 px-6 bg-brandDark3 focus:outline-none focus:shadow-outline focus:border-[#ffffff]"
                          id="email"
                          type="text"
                          placeholder="Email"
                        />
                        <input
                          className="text-base font-medium  montserratfont border-brandLightOpacity10 mt-4 mb-38px border rounded w-full h-12 py-2 px-6  bg-brandDark3 focus:outline-none focus:shadow-outline focus:border-[#ffffff]"
                          id="password"
                          type="password"
                          autoComplete="false"
                          placeholder="Create Password"
                        />
                      </div>

                      <div className="flex flex-col items-center">
                        <button
                          onClick={() => onClickOpenModal()}
                          className="bg-brand mw-sm:w-60  mw-sm:text-sm w-300px  hover:bg-[#ec5d5f] h-12 text-white rounded-3xl montserratfont text-lg font-bold"
                        >
                          Sign Up
                        </button>
                        <p className="pt-3 montserratfont text-brandLightOpacity70 text-xs">
                          Already have an account?{" "}
                          <a
                            href="#"
                            className=" pl-1.5 underline  font-medium"
                          >
                            Log In
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-row items-center justify-center ">
                      <div className="bg-gradient-to-l mw-sm:min-w-[25%] min-w-[35%] from-brandDark2 h-0.5    dark:from-secSaprator "></div>
                      <p className="px-2 montserratfont mw-sm:text-sm text-lg font-bold">
                        Or continue with
                      </p>
                      <div className="bg-gradient-to-r mw-sm:min-w-[25%] min-w-[35%] from-brandDark2 h-0.5    dark:from-secSaprator "></div>
                    </div>
                    <div className="mw-sm:pl-10 mw-sm:pr-10 pl-40 pr-40 mt-8 mb-68px">
                      <div className="flex flex-row justify-center items-center">
                        <div className="mw-sm:h-14 mw-sm:w-14 h-16 w-16 rounded-full mr-5 dark:bg-brandLightOpacity5 bg-brandLightOpacity5 flex justify-center items-center content-center ">
                          <Image src={Google} alt="google icon" />
                        </div>
                        <div className="mw-sm:h-14 mw-sm:w-14 h-16 w-16 rounded-full ml-5 dark:bg-brandLightOpacity5 bg-brandLightOpacity5 flex justify-center items-center content-center ">
                          <Image src={Discord} alt="google icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <EmailModal open={open} onClickOpenModal={onClickOpenModal} />
    </>
  );
};

export default SignupModal;
