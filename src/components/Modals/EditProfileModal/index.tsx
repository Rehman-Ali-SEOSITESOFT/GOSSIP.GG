import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Close from "../../../assets/images/modal/close.png";

const EditProfileModal = (props: any) => {
  const cancelButtonRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [openForgotPasswordModal, setOpenForgotPasswordModal] = useState(false);

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

  const [openTab, setOpenTab] = React.useState(1);
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
                <Dialog.Panel className="relative shadow-3xshadow  transform overflow-hidden rounded-lg dark:bg-brandDark2 bg-brandDark2 text-left  transition-all sm:my-8   border-2  dark:border-brandLightOpacity10   ">
                  <div className="bg-brandDark2">
                    <div className="flex flex-row justify-between  pl-12 pt-4 pr-4">
                      <div className="">
                        <p className="text-[24px] pb-[5px] text-brandLightOpacity100 font-bold montserratfont">
                          Edit Profile
                        </p>
                        <p className="flex items-center text-xs text-brandLightOpacity70 font-normal montserratfont">
                          Naveen{" "}
                          <span className="h-4 w-[1px]  mx-3 dark:bg-brandLightOpacity70 inline-block "></span>{" "}
                          Joined Feb 2023
                        </p>
                      </div>
                      <div
                        onClick={() => props.onClickOpenModal()}
                        className="h-10 w-10 rounded-full  dark:bg-brandLightOpacity5 flex justify-center items-center content-center"
                      >
                        <Image src={Close} alt="google icon" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <div className="mb-9">
                      <div className="flex flex-wrap">
                        <div className="w-full">
                          <ul
                            className="flex border dark:border-r-brandDark2  dark:border-l-brandDark2 dark:border-t-brandDark2 dark:border-b-brandLightOpacity10 mb-0 list-none flex-wrap pt-3  flex-row"
                            role="tablist"
                          >
                            <li className="-mb-px mr-2  last:mr-0 flex-auto text-center">
                              <a
                                className={
                                  "text-base  block leading-normal " +
                                  (openTab === 1
                                    ? "dark:text-brand font-bold border-2 dark:border-b-brand dark:border-t-brandDark2 dark:border-r-brandDark2 dark:border-l-brandDark2"
                                    : "dark:bg-brandDark2  font-normal dark:text-brandLightOpacity70")
                                }
                                onClick={(e) => {
                                  e.preventDefault();
                                  setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                              >
                                Profile Information
                              </a>
                            </li>
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                              <a
                                className={
                                  "text-base  block leading-normal " +
                                  (openTab === 2
                                    ? "dark:text-brand font-bold border-2 dark:border-b-brand dark:border-t-brandDark2 dark:border-r-brandDark2 dark:border-l-brandDark2"
                                    : "dark:bg-brandDark2  font-nomral dark:text-brandLightOpacity70")
                                }
                                onClick={(e) => {
                                  e.preventDefault();
                                  setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                              >
                                Profile Images
                              </a>
                            </li>
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                              <a
                                className={
                                  "text-base  block leading-normal " +
                                  (openTab === 3
                                    ? "dark:text-brand border-2 font-bold dark:border-b-brand dark:border-t-brandDark2 dark:border-r-brandDark2 dark:border-l-brandDark2"
                                    : "dark:bg-brandDark2 font-nomral  dark:text-brandLightOpacity70")
                               }
                                onClick={(e) => {
                                  e.preventDefault();
                                  setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                              >
                                Currently Playing
                              </a>
                            </li>
                          </ul>
                          <div className="relative flex flex-col min-w-0 break-words bg-brandDark2 w-full mb-6 shadow-lg rounded">
                            <div className="px-4 py-5 flex-auto">
                              <div className="tab-content tab-space">
                                <div
                                  className={openTab === 1 ? "block" : "hidden"}
                                  id="link1"
                                >
                                  <p>
                                    Collaboratively administrate empowered
                                    markets via plug-and-play networks.
                                    Dynamically procrastinate B2C users after
                                    installed base benefits.
                                    <br />
                                    <br /> Dramatically visualize customer
                                    directed convergence without revolutionary
                                    ROI.
                                  </p>
                                </div>
                                <div
                                  className={openTab === 2 ? "block" : "hidden"}
                                  id="link2"
                                >
                                  <p>
                                    Completely synergize resource taxing
                                    relationships via premier niche markets.
                                    Professionally cultivate one-to-one customer
                                    service with robust ideas.
                                    <br />
                                    <br />
                                    Dynamically innovate resource-leveling
                                    customer service for state of the art
                                    customer service.
                                  </p>
                                </div>
                                <div
                                  className={openTab === 3 ? "block" : "hidden"}
                                  id="link3"
                                >
                                  <p>
                                    Efficiently unleash cross-media information
                                    without cross-media value. Quickly maximize
                                    timely deliverables for real-time schemas.
                                    <br />
                                    <br /> Dramatically maintain
                                    clicks-and-mortar solutions without
                                    functional solutions.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
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
    </>
  );
};

export default EditProfileModal;
