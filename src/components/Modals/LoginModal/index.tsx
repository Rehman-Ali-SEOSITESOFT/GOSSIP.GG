import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Banner from "../../../assets/images/modal/banner.png";
import Logo from "../../../assets/images/modal/logo.png";
import Discord from "../../../assets/images/modal/discord.png";
import Close from "../../../assets/images/modal/close.png";
import Google from "../../../assets/images/modal/google.png";

import SignupModal from "../SignupModal";
import ForgotPasswordModal from "../ForgotPasswordModal";

const LoginModal = (props: any) => {
  const cancelButtonRef = useRef(null);

  const [open, setOpen] = useState<boolean | null>(false);
  const [openForgotPasswordModal, setOpenForgotPasswordModal] = useState<boolean | null>(false);

  const onClickOpenModal = () => {
    if (!open) {
      props.onClickOpenModal();
    }
    setOpen(!open);
  };

  const onClickOpenForgotPasswordModal = () => {
    if (!openForgotPasswordModal) {
      props.onClickOpenModal();
    }
    setOpenForgotPasswordModal(!openForgotPasswordModal);
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
                  className="relative transform overflow-hidden rounded-lg dark:bg-brandDark2 bg-white text-left  transition-all sm:my-8  shadow-3xshadow
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
                        className="h-10 w-10 rounded-full  dark:bg-brandLightOpacity5 flex justify-center items-center content-center absolute top-4 right-4 "
                      >
                        <Image src={Close} alt="google icon" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col border-2 rounded-b-lg dark:border-r-brandLightOpacity10 dark:border-l-brandLightOpacity10 dark:border-b-brandLightOpacity10  dark:border-t-brandDark2">
                    <div className=" mw-sm:pl-10 mw-sm:pr-10 pl-40 pr-40  mb-9">
                      <div className="flex flex-col items-center ">
                        <Image src={Logo} alt="logo" />
                        <p className="text-brandLightOpacity100 text-2xl montserratfont not-italic font-bold pb-6 mw-sm:text-lg ">
                          Log In to Gossip.gg
                        </p>
                        <input
                          className="border-brandLightOpacity10 hover:border hover:border-[#ffffff] border rounded w-full h-12 py-2 px-6 bg-brandDark3 focus:outline-none focus:shadow-outline focus:border-[#ffffff]"
                          id="email"
                          type="text"
                          placeholder="Email"
                        />
                        <input
                          className="border-brandLightOpacity10 mt-4 mb-38px hover:border hover:border-[#ffffff] border rounded w-full h-12 py-2 px-6  bg-brandDark3 focus:outline-none focus:shadow-outline focus:border-[#ffffff]"
                          id="password"
                          type="password"
                          autoComplete="false"
                          placeholder="Password"
                        />
                      </div>

                      <div className="flex flex-row justify-between items-center mb-38px ">
                        <div className="flex flex-row items-center">
                          <input
                            type="checkbox"
                            className="h-5 w-5 text-green-600"
                          />
                          <p className="pl-2.5 montserratfont text-brandLightOpacity70 text-xs">
                            Remember me
                          </p>
                        </div>
                        <div>
                          <a
                            href="#"
                            onClick={() => onClickOpenForgotPasswordModal()}
                            className="montserratfont text-brandLightOpacity70 text-xs underline"
                          >
                            Forgot password?
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <button className="bg-brand mw-sm:w-60  mw-sm:text-sm w-300px  hover:bg-[#ec5d5f] h-12 text-white rounded-3xl montserratfont text-lg font-bold">
                          Log In
                        </button>
                        <p className="pt-3 montserratfont text-brandLightOpacity70 text-xs">
                          Dont&#39;t have and account?
                          <a
                            href="#"
                            onClick={() => onClickOpenModal()}
                            className="underline  font-medium pl-1.5"
                          >
                            Sign Up
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

      <SignupModal open={open} onClickOpenModal={onClickOpenModal} />
      <ForgotPasswordModal
        open={openForgotPasswordModal}
        onClickOpenModal={onClickOpenForgotPasswordModal}
      />
    </>
  );
};

export default LoginModal;
