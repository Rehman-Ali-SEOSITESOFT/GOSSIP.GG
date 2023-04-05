import React, { Fragment, useEffect, useRef, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import styles from "./choicestyle.module.css"
const ChoiceTopicModel = (props: any) => {
  const cancelButtonRef = useRef(null)

  const [items, setItems] = useState<string[]>([
    "Gaming",
    "Valorant",
    "OTC",
    "LOL",
    "Floo Flames",
    "Team Fury",
    "Graphic card",
    "Nvidia",
    "Gaming",
    "Valorant",
    "OTC",
    "LOL",
    "Floo Flames",
    "Team Fury",
    "Graphic card",
    "Nvidia",
    "Gaming",
    "Valorant",
    "OTC",
    "LOL",
    "Floo Flames",
    "Team Fury",
    "Graphic card",
    "Nvidia",
    "Gaming",
    "Valorant",
    "OTC",
    "LOL",
    "Floo Flames",
    "Team Fury",
    "Graphic card",
    "Nvidia",
    "Gaming",
    "Valorant",
    "OTC",
    "LOL",
    "Floo Flames",
    "Team Fury",
    "Graphic card",
    "Nvidia",
    "Gaming",
    "Valorant",
    "OTC",
    "LOL",
    "Floo Flames",
    "Team Fury",
    "Graphic card",
    "Nvidia",
    "Gaming",
    "Valorant",
    "OTC",
    "LOL",
    "Floo Flames",
    "Team Fury",
    "Graphic card",
    "Nvidia",
    "Gaming",
    "Valorant",
    "OTC",
    "LOL",
    "Floo Flames",
    "Team Fury",
    "Graphic card",
    "Nvidia",
    "Gaming",
    "Valorant",
    "OTC",
    "LOL",
    "Floo Flames",
    "Team Fury",
    "Graphic card",
    "Nvidia",
  ])

  let [addclass, setAdClass] = useState<number | null>(null)
  let [text, setTest] = useState<number | null>(null)
  const hanldeCheck = (event: any, id: number) => {
    setTest(id)
    setAdClass(id)
  }

  const onClickDone = () => {
    localStorage.setItem("isLogin", JSON.stringify(true))
    props.onClickOpenModal()
  }

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
                    <div className="icon flex bg-arrowicon  dark:bg-brandLightOpacity10 justify-center items-center w-[40px] h-[40px] rounded-3xl cursor-pointer	">
                      <i className="text-xl fa-solid fa-angle-left"></i>
                    </div>
                    <div
                      className="icon flex  bg-arrowicon dark:bg-brandLightOpacity10  justify-center items-center w-[40px] h-[40px] rounded-3xl cursor-pointer"
                      onClick={() => props.onClickOpenModal()}
                    >
                      <i className="text-xl fa-solid fa-xmark"></i>
                    </div>
                  </div>
                  <div className="titlesection text-center">
                    <h3 className="font-bold montserratfont text-2xl leading-7 text-brandDark2	dark:text-brandLightOpacity100 pb-3.5	mw-sm:text-xl	">
                      Choose topics to follow.
                    </h3>
                    <p className="montserratfont text-brandDark2 dark:text-brandLightOpacity70 text-base	leading-5">
                      You can always change these later.
                    </p>
                  </div>
                  <div
                    className={`${styles.selecttopic} selecttopic p-4 pb-0  rounded border border-brandLightOpacity10 bg-gradient-choicebg my-5 `}
                  >
                    <div className="slectopitons overflow-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-choosebox	dark:scrollbar-thumb-custom2 dark:scrollbar-track-custom rounded h-[450px] flex flex-wrap  ">
                      {items.map((e, i) => {
                        return (
                          <div
                            className={`box py-4 flex justify-center items-center w-[120px] h-[60px] mw-sm:w-[30%] mw-sm3:w-[45%]    text-center mr-3 mw-sm:mr-2 mw-sm:mb-2 	mb-3	montserratfont  font-medium leading-4	rounded hover:font-semibold  hover:text-brandDark2 dark:hover:text-brand hover:border hover:text-base hover:bg-white dark:hover:bg-brandDark2 hover:border-brandDark2 dark:hover:border-brand cursor-pointer ${
                              addclass === i
                                ? "active font-semibold text-brandDark2  dark:text-brand border text-base bg-white dark:bg-brandDark2 border-brandDark2 dark:border-brand "
                                : " text-brandDark2 dark:text-brandLightOpacity70  bg-choosebox dark:bg-brandLightOpacity10 text-xs"
                            } `}
                            key={i}
                            onClick={(e) => hanldeCheck(e, i)}
                          >
                            {e}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div className={`${styles.btns} flex flex-col	`}>
                    <a
                      onClick={onClickDone}
                      className={`done_btn w-300px bg-brand inline-block py-3	rounded-3xl	text-center m-auto text-lg	leading-6	mb-6 text-white dark:text-brandLightOpacity100	font-bold montserratfont cursor-pointer mw-sm:w-[250px]   mw-sm3:w-[100%] mw-sm:text-base mw-sm:text-semibold ${
                        text === null ? "opacity-50	" : "opacity-100	"
                      }  `}
                    >
                      Done
                    </a>

                    <a className="skip_btn   w-300px border border-brandDark2 dark:border-brandLightOpacity100 inline-block py-3	rounded-3xl	text-center m-auto text-lg leading-6 text-brandDark2 dark:text-brandLightOpacity100 font-bold montserratfont	cursor-pointer   mw-sm:w-[250px]   mw-sm3:w-[100%] mw-sm:text-base  mw-sm:text-semibold">
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
  )
}

export default ChoiceTopicModel
