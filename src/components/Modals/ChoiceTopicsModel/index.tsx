import React, { Fragment, useEffect, useRef, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import styles from "./choicestyle.module.css"
const ChoiceTopicModel = (props: any) => {
  const cancelButtonRef = useRef(null)
  interface infoList {
    id: number;
    name: string;
  }
  const item: infoList[] = [
    {
      id: 1,
      name: "Gaming",
    },
    {
      id: 2,
      name: "Valorant",
    }, {
      id: 3,
      name: "OTC",
    }, {
      id: 4,
      name: "LOL",
    }, {
      id: 5,
      name: "Floo Flames",
    }, {
      id: 6,
      name: "Team Fury",
    }, {
      id: 7,
      name: "Graphic card",
    }, {
      id: 8,
      name: "Nvidia",
    }, {
      id: 9,
      name: "Gaming",
    }, {
      id: 10,
      name: "Valorant",
    }, {
      id: 11,
      name: "OTC",
    }, {
      id: 12,
      name: "LOL",
    }, {
      id: 13,
      name: "Floo Flames",
    }, {
      id: 14,
      name: "Team Fury",
    }, {
      id: 15,
      name: "Graphic card",
    }, {
      id: 16,
      name: "Nvidia",
    }, {
      id: 17,
      name: "Gaming",
    }, {
      id: 18,
      name: "Valorant",
    }, {
      id: 19,
      name: "OTC",
    }, {
      id: 20,
      name: "LOL",
    }, {
      id: 21,
      name: "Floo Flames",
    }, {
      id: 22,
      name: "Team Fury",
    }, {
      id: 23,
      name: "Graphic card",
    }, {
      id: 24,
      name: "Nvidia",
    }, {
      id: 25,
      name: "Gaming",
    }, {
      id: 26,
      name: "Valorant",
    }, {
      id: 27,
      name: "OTC",
    }, {
      id: 28,
      name: "LOL",
    }, {
      id: 29,
      name: "Floo Flames",
    }, {
      id: 30,
      name: "Team Fury",
    }, {
      id: 31,
      name: "Graphic card",
    }, {
      id: 32,
      name: "Nvidia",
    }, {
      id: 33,
      name: "Gaming",
    }, {
      id: 34,
      name: "Valorant",
    }, {
      id: 35,
      name: "OTC",
    }, {
      id: 36,
      name: "LOL",
    }, {
      id: 37,
      name: "Floo Flames",
    }, {
      id: 38,
      name: "Team Fury",
    }, {
      id: 39,
      name: "Graphic card",
    }, {
      id: 40,
      name: "Nvidia",
    }, {
      id: 41,
      name: "Gaming",
    }, {
      id: 42,
      name: "Valorant",
    }, {
      id: 43,
      name: "OTC",
    }, {
      id: 44,
      name: "LOL",
    }, {
      id: 45,
      name: "Floo Flames",
    }, {
      id: 46,
      name: "Team Fury",
    }, {
      id: 47,
      name: "Graphic card",
    }, {
      id: 48,
      name: "Nvidia",
    }, {
      id: 49,
      name: "Gaming",
    }, {
      id: 50,
      name: "Valorant",
    }, {
      id: 60,
      name: "OTC",
    }, {
      id: 61,
      name: "LOL",
    }, {
      id:62,
      name: "Floo Flames",
    }
  ];

  
  const itemEmpty: infoList[] = [];
  const [listItems, setListItems] = useState(item);
  const [selectedArr, setSelectedArr] = useState(itemEmpty);
  
  const onClickList = (name: string, id : number) =>{
    let copyArr : Array<infoList> = [...selectedArr];
    let filterArr : Array<infoList> = copyArr.filter(item => item.id === id)
    let finalArr : Array<infoList> = [];
    if(filterArr.length > 0){
       finalArr = copyArr.filter(item => item.id !== id);
    } else{
      finalArr.push(...copyArr, {id: id , name: name})
    }  
    setSelectedArr(finalArr);
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
                    <div className="icon dark:hover:bg-[#353233] hover:bg-borderEditProfile cursor-pointer flex dark:bg-[#2c2829]  bg-arrowicon justify-center items-center w-[40px] h-[40px] rounded-3xl 	">
                      <i className="text-xl fa-solid fa-angle-left"></i>
                    </div>
                    <div
                      className="icon flex dark:hover:bg-[#353233] hover:bg-borderEditProfile cursor-pointer  bg-arrowicon dark:bg-[#2c2829]  justify-center items-center w-[40px] h-[40px] rounded-3xl cursor-pointer"
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
                    className={`${styles.selecttopic} selecttopic p-4 pb-0  rounded border dark:border-brandLightOpacity10 bg-gradient-choicebg my-5 `}
                  >
                    <div className="slectopitons overflow-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-choosebox	dark:scrollbar-thumb-custom2 dark:scrollbar-track-custom rounded h-[450px] flex flex-wrap  ">
                      {listItems.map((e, i) => {
                        return (
                          <div
                            className={`box py-4  flex justify-center items-center w-[120px] h-[60px] mw-sm:w-[30%] mw-sm3:w-[45%]    text-center mr-3 mw-sm:mr-2 mw-sm:mb-2 	mb-3	montserratfont   leading-4	rounded    cursor-pointer ${selectedArr.filter((item: { id: number }) => item.id === e.id).length > 0 
                                ? "active font-semibold text-brandDark2  dark:text-brand border text-base bg-white dark:bg-brandDark2 border-brandDark2 dark:border-brand  "
                                : " hover:bg-[#cdcccd]  hover:text-brandDark2 dark:hover:text-brandLightOpacity100    dark:hover:bg-[#494647] text-brandDark2 dark:text-brandLightOpacity70 font-medium  bg-choosebox dark:bg-brandLightOpacity10 text-sm"
                              } `}
                            key={i}
                            onClick={() => onClickList(e.name, e.id)}

                          >
                            {e.name}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div className={`${styles.btns} flex flex-col	`}>
                    <a
                      onClick={onClickDone}
                      className={`done_btn w-300px bg-brand inline-block py-3 hover:bg-[#ec5d5f] rounded-3xl	text-center m-auto text-lg	leading-6	mb-6 text-white dark:text-brandLightOpacity100	font-bold montserratfont cursor-pointer mw-sm:w-[250px]   mw-sm3:w-[100%] mw-sm:text-base mw-sm:text-semibold ${selectedArr.length === 0  ? "opacity-50	" : "opacity-100	"
                        }  `}
                    >
                      Done
                    </a>

                    <a className="dark:hover:bg-[#353233] hover:bg-arrowicon skip_btn   w-300px border border-brandDark2 dark:border-brandLightOpacity100 inline-block py-3	rounded-3xl	text-center m-auto text-lg leading-6 text-brandDark2 dark:text-brandLightOpacity100 font-bold montserratfont	cursor-pointer   mw-sm:w-[250px]   mw-sm3:w-[100%] mw-sm:text-base  mw-sm:text-semibold">
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
