import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import styles from "./choicestyle.module.css";
const ChoicePreferenceTopicModel = (props: any) => {
  const cancelButtonRef = useRef(null);
  interface infoList {
    id: number;
    name: string;
  }

  const item: infoList[] = [
    {
      id: 1,
      name: 'Feature',
    },
    {
      id: 2,
      name: 'News',
    },
    {
      id: 3,
      name: 'Hogwarts',
    },
    {
      id: 4,
      name: 'Xbox',
    },
    {
      id: 5,
      name: 'PC',
    },
    {
      id: 6,
      name: 'Mobile',
    },
    {
      id: 7,
      name: 'Floo Flames',
    },
    {
      id: 8,
      name: 'Flame Thrower',
    },
    {
      id: 9,
      name: 'Playsation',
    },
    {
      id: 10,
      name: 'PubG',
    },
    {
      id: 11,
      name: 'Guides',
    },
  ]
  const [listItems, setListItems] = useState(item);
  

  return (
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
                className={`relative transform overflow-hidden rounded-lg  w-full text-left transition-all bg-bodycolor dark:bg-brandDark2 shadow-3xshadow ${styles.panelChoice} p-5	border-2 rounded-lg	 dark:border-brandLightOpacity10 pb-11	`}
              >
                <div className="choiceModelMain">
                  <div className="choiceheader pb-8 flex justify-between">
                    <div className="titlesection pl-[25px] pt-[15px]">
                      <h3 className="font-bold montserratfont text-2xl leading-7 text-brandDark2	dark:text-brandLightOpacity100 pb-3.5	mw-sm:text-xl	">
                        Choose topics to follow
                      </h3>
                      <p className="montserratfont text-brandDark2 dark:text-brandLightOpacity70 text-base	leading-5">
                        You can always change these later.
                      </p>
                    </div>
                    <div
                      className="icon flex  bg-arrowicon dark:bg-brandLightOpacity10  justify-center items-center w-[40px] h-[40px] rounded-3xl cursor-pointer"
                      onClick={() => props.onClickOpenModal()}
                    >
                      <i className="text-xl fa-solid fa-xmark"></i>
                    </div>
                  </div>

                  <div
                    className={`${styles.selecttopic} selecttopic p-4 pb-0  rounded border dark:border-brandLightOpacity10  bg-gradient-choicebg my-5 `}
                  >
                    <div className="slectopitons overflow-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-choosebox	dark:scrollbar-thumb-custom2 dark:scrollbar-track-custom rounded h-[450px] flex flex-wrap  ">
                      <div className="pr-4   min-h-sceen w-[100%]">
                        <div className="grid  max-w-xl mx-auto">
                          <div className="bg-brandLightOpacity5 rounded min-h-fit mb-4 ">
                            <details className="group">
                              <summary className="group-open:bg-brandLightOpacity10 group-open:rounded group-open:border-l-2 group-open:border-l-brand h-[64px] flex justify-between items-center font-medium cursor-pointer list-none">
                                <div className="flex ">
                                  <span className="pl-6 pr-[5px] text-base montserratfont font-semibold text-brandLightOpacity100">
                                    Esports
                                  </span>
                                  <span className="transition group-open:rotate-180">
                                    <svg
                                      fill="none"
                                      height="24"
                                      shape-rendering="geometricPrecision"
                                      stroke="currentColor"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="1.5"
                                      viewBox="0 0 24 24"
                                      width="24"
                                    >
                                      <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                  </span>
                                </div>
                                <div className="h-[32px] w-[91px] rounded-[20px] bg-brandLightOpacity10 mr-6 flex justify-center items-center">
                                  <p className="font-medium montserratfont text-xs text-brandLightOpacity100">
                                    Follow All
                                  </p>
                                </div>
                              </summary>
                              <div className="group-open:animate-fadeIn bg-brandDark2 ">
                                <div className="flex flex-wrap max-w-[470px]  ml-4">
                                 {listItems.map((item, index) => 
                                  <div
                                  key={index}
                                  className="min-w-fit px-2 mr-4  py-[6px]  mt-4  flex items-center justify-center    rounded bg-brandLightOpacity10"
                                >
                                  <p className=" text-xs  text-brandDark2 dark:text-brandLightOpacity70 montserratfont font-medium">
                                    {item.name} 
                                  </p>
                                </div>
                                 )}
                                 
                                </div>
                              </div>
                            </details>
                          </div>
                          <div className="bg-brandLightOpacity5 rounded min-h-fit mb-4 ">
                            <details className="group">
                              <summary className="group-open:bg-brandLightOpacity10 group-open:rounded group-open:border-l-2 group-open:border-l-brand h-[64px] flex justify-between items-center font-medium cursor-pointer list-none">
                                <div className="flex ">
                                  <span className="pl-6 pr-[5px] text-base montserratfont font-semibold text-brandLightOpacity100">
                                    Gaming
                                  </span>
                                  <span className="transition group-open:rotate-180">
                                    <svg
                                      fill="none"
                                      height="24"
                                      shape-rendering="geometricPrecision"
                                      stroke="currentColor"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="1.5"
                                      viewBox="0 0 24 24"
                                      width="24"
                                    >
                                      <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                  </span>
                                </div>
                                <div className="h-[32px] w-[91px] rounded-[20px] bg-brandLightOpacity10 mr-6 flex justify-center items-center">
                                  <p className="font-medium montserratfont text-xs text-brandLightOpacity100">
                                    Follow All
                                  </p>
                                </div>
                              </summary>
                              <div className="group-open:animate-fadeIn bg-brandDark2 ">
                                <div className="flex flex-wrap max-w-[470px]  ml-4">
                                 {listItems.map((item, index) => 
                                  <div
                                  key={index}
                                  className="min-w-fit px-2 mr-4  py-[6px]  mt-4  flex items-center justify-center    rounded bg-brandLightOpacity10"
                                >
                                  <p className=" text-xs  text-brandDark2 dark:text-brandLightOpacity70 montserratfont font-medium">
                                    {item.name} 
                                  </p>
                                </div>
                                 )}
                                 
                                </div>
                              </div>
                            </details>
                          </div>
                          <div className="bg-brandLightOpacity5 rounded min-h-fit mb-4">
                            <details className="group">
                              <summary className="group-open:bg-brandLightOpacity10 group-open:rounded group-open:border-l-2 group-open:border-l-brand h-[64px] flex justify-between items-center font-medium cursor-pointer list-none">
                                <div className="flex ">
                                  <span className="pl-6 pr-[5px] text-base montserratfont font-semibold text-brandLightOpacity100">
                                    Tech
                                  </span>
                                  <span className="transition group-open:rotate-180">
                                    <svg
                                      fill="none"
                                      height="24"
                                      shape-rendering="geometricPrecision"
                                      stroke="currentColor"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="1.5"
                                      viewBox="0 0 24 24"
                                      width="24"
                                    >
                                      <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                  </span>
                                </div>
                                <div className="h-[32px] w-[91px] rounded-[20px] bg-brandLightOpacity10 mr-6 flex justify-center items-center">
                                  <p className="font-medium montserratfont text-xs text-brandLightOpacity100">
                                    Follow All
                                  </p>
                                </div>
                              </summary>
                              <div className="group-open:animate-fadeIn bg-brandDark2 ">
                                <div className="flex flex-wrap max-w-[470px]  ml-4">
                                 {listItems.map((item, index) => 
                                  <div
                                  key={index}
                                  className="min-w-fit px-2 mr-4  py-[6px]  mt-4  flex items-center justify-center    rounded bg-brandLightOpacity10"
                                >
                                  <p className=" text-xs  text-brandDark2 dark:text-brandLightOpacity70 montserratfont font-medium">
                                    {item.name} 
                                  </p>
                                </div>
                                 )}
                                 
                                </div>
                              </div>
                            </details>
                          </div>
                          <div className="bg-brandLightOpacity5 rounded min-h-fit mb-4">
                            <details className="group">
                              <summary className="group-open:bg-brandLightOpacity10 group-open:rounded group-open:border-l-2 group-open:border-l-brand h-[64px] flex justify-between items-center font-medium cursor-pointer list-none">
                                <div className="flex ">
                                  <span className="pl-6 pr-[5px] text-base montserratfont font-semibold text-brandLightOpacity100">
                                    Team Fury
                                  </span>
                                  <span className="transition group-open:rotate-180">
                                    <svg
                                      fill="none"
                                      height="24"
                                      shape-rendering="geometricPrecision"
                                      stroke="currentColor"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="1.5"
                                      viewBox="0 0 24 24"
                                      width="24"
                                    >
                                      <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                  </span>
                                </div>
                                <div className="h-[32px] w-[91px] rounded-[20px] bg-brandLightOpacity10 mr-6 flex justify-center items-center">
                                  <p className="font-medium montserratfont text-xs text-brandLightOpacity100">
                                    Follow All
                                  </p>
                                </div>
                              </summary>
                              <div className="group-open:animate-fadeIn bg-brandDark2 ">
                                <div className="flex flex-wrap max-w-[470px]  ml-4">
                                 {listItems.map((item, index) => 
                                  <div
                                  key={index}
                                  className="min-w-fit px-2 mr-4  py-[6px]  mt-4  flex items-center justify-center    rounded bg-brandLightOpacity10"
                                >
                                  <p className=" text-xs  text-brandDark2 dark:text-brandLightOpacity70 montserratfont font-medium">
                                    {item.name} 
                                  </p>
                                </div>
                                 )}
                                 
                                </div>
                              </div>
                            </details>
                          </div>
                          <div className="bg-brandLightOpacity5 rounded min-h-fit mb-4">
                            <details className="group">
                              <summary className="group-open:bg-brandLightOpacity10 group-open:rounded group-open:border-l-2 group-open:border-l-brand h-[64px] flex justify-between items-center font-medium cursor-pointer list-none">
                                <div className="flex ">
                                  <span className="pl-6 pr-[5px] text-base montserratfont font-semibold text-brandLightOpacity100">
                                  Xbox
                                  </span>
                                  <span className="transition group-open:rotate-180">
                                    <svg
                                      fill="none"
                                      height="24"
                                      shape-rendering="geometricPrecision"
                                      stroke="currentColor"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="1.5"
                                      viewBox="0 0 24 24"
                                      width="24"
                                    >
                                      <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                  </span>
                                </div>
                                <div className="h-[32px] w-[91px] rounded-[20px] bg-brandLightOpacity10 mr-6 flex justify-center items-center">
                                  <p className="font-medium montserratfont text-xs text-brandLightOpacity100">
                                    Follow All
                                  </p>
                                </div>
                              </summary>
                              <div className="group-open:animate-fadeIn bg-brandDark2 ">
                                <div className="flex flex-wrap max-w-[470px]  ml-4">
                                 {listItems.map((item, index) => 
                                  <div
                                  key={index}
                                  className="min-w-fit px-2 mr-4  py-[6px]  mt-4  flex items-center justify-center    rounded bg-brandLightOpacity10"
                                >
                                  <p className=" text-xs  text-brandDark2 dark:text-brandLightOpacity70 montserratfont font-medium">
                                    {item.name} 
                                  </p>
                                </div>
                                 )}
                                 
                                </div>
                              </div>
                            </details>
                          </div>
                          <div className="bg-brandLightOpacity5 rounded min-h-fit mb-4">
                            <details className="group">
                              <summary className="group-open:bg-brandLightOpacity10 group-open:rounded group-open:border-l-2 group-open:border-l-brand h-[64px] flex justify-between items-center font-medium cursor-pointer list-none">
                                <div className="flex ">
                                  <span className="pl-6 pr-[5px] text-base montserratfont font-semibold text-brandLightOpacity100">
                                  Mobile
                                  </span>
                                  <span className="transition group-open:rotate-180">
                                    <svg
                                      fill="none"
                                      height="24"
                                      shape-rendering="geometricPrecision"
                                      stroke="currentColor"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="1.5"
                                      viewBox="0 0 24 24"
                                      width="24"
                                    >
                                      <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                  </span>
                                </div>
                                <div className="h-[32px] w-[91px] rounded-[20px] bg-brandLightOpacity10 mr-6 flex justify-center items-center">
                                  <p className="font-medium montserratfont text-xs text-brandLightOpacity100">
                                    Follow All
                                  </p>
                                </div>
                              </summary>
                              <div className="group-open:animate-fadeIn bg-brandDark2 ">
                                <div className="flex flex-wrap max-w-[470px]  ml-4">
                                 {listItems.map((item, index) => 
                                  <div
                                  key={index}
                                  className="min-w-fit px-2 mr-4  py-[6px]  mt-4  flex items-center justify-center    rounded bg-brandLightOpacity10"
                                >
                                  <p className=" text-xs  text-brandDark2 dark:text-brandLightOpacity70 montserratfont font-medium">
                                    {item.name} 
                                  </p>
                                </div>
                                 )}
                                 
                                </div>
                              </div>
                            </details>
                          </div>
                          <div className="bg-brandLightOpacity5 rounded min-h-fit mb-4">
                            <details className="group">
                              <summary className="group-open:bg-brandLightOpacity10 group-open:rounded group-open:border-l-2 group-open:border-l-brand h-[64px] flex justify-between items-center font-medium cursor-pointer list-none">
                                <div className="flex ">
                                  <span className="pl-6 pr-[5px] text-base montserratfont font-semibold text-brandLightOpacity100">
                                  Deals
                                  </span>
                                  <span className="transition group-open:rotate-180">
                                    <svg
                                      fill="none"
                                      height="24"
                                      shape-rendering="geometricPrecision"
                                      stroke="currentColor"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="1.5"
                                      viewBox="0 0 24 24"
                                      width="24"
                                    >
                                      <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                  </span>
                                </div>
                                <div className="h-[32px] w-[91px] rounded-[20px] bg-brandLightOpacity10 mr-6 flex justify-center items-center">
                                  <p className="font-medium montserratfont text-xs text-brandLightOpacity100">
                                    Follow All
                                  </p>
                                </div>
                              </summary>
                              <div className="group-open:animate-fadeIn bg-brandDark2 ">
                                <div className="flex flex-wrap max-w-[470px]  ml-4">
                                 {listItems.map((item, index) => 
                                  <div
                                  key={index}
                                  className="min-w-fit px-2 mr-4  py-[6px]  mt-4  flex items-center justify-center    rounded bg-brandLightOpacity10"
                                >
                                  <p className=" text-xs  text-brandDark2 dark:text-brandLightOpacity70 montserratfont font-medium">
                                    {item.name} 
                                  </p>
                                </div>
                                 )}
                                 
                                </div>
                              </div>
                            </details>
                          </div>
                            <div className="bg-brandLightOpacity5 rounded min-h-fit mb-4">
                            <details className="group">
                              <summary className="group-open:bg-brandLightOpacity10 group-open:rounded group-open:border-l-2 group-open:border-l-brand h-[64px] flex justify-between items-center font-medium cursor-pointer list-none">
                                <div className="flex ">
                                  <span className="pl-6 pr-[5px] text-base montserratfont font-semibold text-brandLightOpacity100">
                                    Deals
                                  </span>
                                  <span className="transition group-open:rotate-180">
                                    <svg
                                      fill="none"
                                      height="24"
                                      shape-rendering="geometricPrecision"
                                      stroke="currentColor"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="1.5"
                                      viewBox="0 0 24 24"
                                      width="24"
                                    >
                                      <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                  </span>
                                </div>
                                <div className="h-[32px] w-[91px] rounded-[20px] bg-brandLightOpacity10 mr-6 flex justify-center items-center">
                                  <p className="font-medium montserratfont text-xs text-brandLightOpacity100">
                                    Follow All
                                  </p>
                                </div>
                              </summary>
                              <div className="group-open:animate-fadeIn bg-brandDark2 ">
                                <div className="flex flex-wrap max-w-[470px]  ml-4">
                                 {listItems.map((item, index) => 
                                  <div
                                  key={index}
                                  className="min-w-fit px-2 mr-4  py-[6px]  mt-4  flex items-center justify-center    rounded bg-brandLightOpacity10"
                                >
                                  <p className=" text-xs  text-brandDark2 dark:text-brandLightOpacity70 montserratfont font-medium">
                                    {item.name} 
                                  </p>
                                </div>
                                 )}
                                 
                                </div>
                              </div>
                            </details>
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
  );
};

export default ChoicePreferenceTopicModel;
