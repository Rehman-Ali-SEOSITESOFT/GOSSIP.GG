import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Banner from "../../assets/images/login/banner.png";
import Logo from "../../assets/images/login/logo.png";
import Discord from "../../assets/images/login/discord.png";
import Google from "../../assets/images/login/google.png";
import style from "./login.module.css";
const LoginModal = (props: any) => {
  const cancelButtonRef = useRef(null);
  return (
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg dark:bg-brandDark2 bg-white text-left shadow-xl transition-all sm:my-8 ">
                <div className="bg-brandDark2">
                  <div className={style.image_h}>
                    <Image
                      src={Banner}
                      className="max-w-[100&] h-full"
                      alt="banner logo"
                    />
                  </div>
                </div>
                <div className="flex flex-col ">
                  <div className=" pl-40 pr-40 ">
                    <div className="flex flex-col items-center ">
                      <Image src={Logo} alt="logo" />
                      <p>Log In to Gossip.gg</p>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Username"
                      />
                      <input
                        className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="******************"
                      />
                    </div>

                    <div className="flex flex-row justify-between items-center ">
                      <div>
                        <input type="checkbox" />
                        Remember me
                      </div>
                      <div>
                        <a href="">Forgot password?</a>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <button className="bg-brand w-300px h-12 text-white rounded-3xl">
                        Log In
                      </button>
                      <p>
                        Dont't have and account? <a href="#">Sign Up</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center ">
                 <div className="bg-gradient-to-l min-w-[35%] from-brandDark2 h-0.5    dark:from-secSaprator "></div>
                  <p className="px-2">Or continue with</p> 
                 <div className="bg-gradient-to-r min-w-[35%] from-brandDark2 h-0.5    dark:from-secSaprator "></div>
                  </div>
                  <div className="pl-40 pr-40" >
                    <div className="flex flex-row justify-center items-center">
                    <div className="h-16 w-16 rounded-full mr-5 dark:bg-brandLightOpacity5 bg-brandLightOpacity5 flex justify-center items-center content-center " >
                       <Image src={Google} alt="google icon"/>
                    </div>
                    <div className="h-16 w-16 rounded-full ml-5 dark:bg-brandLightOpacity5 bg-brandLightOpacity5 flex justify-center items-center content-center " >
                       <Image src={Discord} alt="google icon"/>
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
  );
};

export default LoginModal;
