import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Banner from "../../../assets/images/modal/banner.png";
import Logo from "../../../assets/images/modal/logo.png";
import EyeOff from "../../../assets/images/modal/eye.png";
import Close from "../../../assets/images/modal/close.png";
import Eye from "../../../assets/images/modal/eye-off.png";
import PasswrodChangeModal from "../PasswordChangedModal";
import LightLogo from "../../../assets/images/modal/light-logo.png";
import DiscordLight from "../../../assets/images/modal/discord-light.png";
import GoogleLight from "../../../assets/images/modal/google-light.png";
import { useTheme } from "next-themes";

const ResetPasswordModal = (props: any) => {
  const cancelButtonRef = useRef(null);
  const { theme} = useTheme();

  const [open, setOpen] = useState<boolean | null>(false);
  const [show, setShow] = useState<boolean | null>(false);
  const [showCon, setShowCon] = useState<boolean | null>(false);

  const onClickOpenModal = () => {
    if (!open) {
      props.onClickOpenModal();
    }
    setOpen(!open);
  };

  const onClickShowPassword = () => {
    setShow(!show);
  };

  const onClickShowConPassword = () => {
    setShowCon(!showCon);
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
                <Dialog.Panel className="relative shadow-3xshadow  transform overflow-hidden rounded-lg dark:bg-brandDark2  text-left  transition-all sm:my-8 ">
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
                  <div className="flex flex-col bg-bodycolor dark:bg-brandDark2 border-2 rounded-b-lg dark:border-r-brandLightOpacity10 dark:border-l-brandLightOpacity10 dark:border-b-brandLightOpacity10  dark:border-t-brandDark2 ">
                    <div className=" mw-sm:pl-10 mw-sm:pr-10 pl-40 pr-40  mb-9">
                      <div className="flex flex-col items-center ">
                      <Image src={theme === 'dark' ? Logo : LightLogo} alt="logo" />
                        <p className="text-brandDark2 dark:text-brandLightOpacity100 text-2xl montserratfont not-italic font-bold pb-6 mw-sm:text-lg ">
                          Reset Password
                        </p>
                        {/* <div>
                        <input
                          className="border-brandLightOpacity10 border rounded w-full h-12 py-2 px-6 bg-brandDark3 focus:outline-none focus:shadow-outline focus:border-[#ffffff]"
                          id="password"
                          type="password"
                          placeholder="New Password"
                        />
                        <Image className="absolute top-4 right-4" src={Eye} alt="password icon" />

                        </div> */}   
                          <div className="relative w-[100%]">
                            <input
                             name="password"
                              type={show ? "text" : "password"}
                              placeholder="New Password"
                              className="border-brandLightOpacity10 hover:border hover:border-brandDark2 dark:hover:border-[#ffffff] dark:border-brandLightOpacity10 border border-choosebox rounded w-full h-12 py-2 px-6 bg-white dark:bg-brandDark3 focus:outline-none focus:shadow-outline focus:border-brandDark2 dark:focus:border-[#ffffff]"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                              <Image
                                className=""
                                src={show ? Eye : EyeOff}
                                alt="password icon"
                                onClick={() => onClickShowPassword()}
                              />
                            </div>
                          </div>
                          <div className="relative w-[100%] mt-[33px] mb-[39px]">
                            <input
                             name="con-password"
                              type={showCon ? "text" : "password"}
                              placeholder="Re-enter Password"
                              className="border-brandLightOpacity10 border hover:border hover:border-brandDark2 dark:hover:border-[#ffffff] dark:border-brandLightOpacity10 border border-choosebox rounded w-full h-12 py-2 px-6 bg-white dark:bg-brandDark3 focus:outline-none focus:shadow-outline focus:border-brandDark2 dark:focus:border-[#ffffff]"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                              <Image
                                className=""
                                src={showCon ? Eye : EyeOff}
                                alt="password icon"
                                onClick={() => onClickShowConPassword()}
                              />
                            </div>
                          </div>
                        
                        

                      
                      </div>

                      <div className="flex flex-col items-center mb-[289px]">
                        <button
                        onClick={onClickOpenModal}
                        className="bg-brand mw-sm:w-60  mw-sm:text-sm w-300px  hover:bg-[#ec5d5f] h-12 text-white rounded-3xl montserratfont text-lg font-bold">
                          Submit
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

      <PasswrodChangeModal open={open} onClickOpenModal={onClickOpenModal} />
    </>
  );
};

export default ResetPasswordModal;
