import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import styles from "./choicestyle.module.css";
import { useTheme } from "next-themes";
const ChoicePreferenceTopicModel = (props: any) => {
  const cancelButtonRef = useRef(null);
  const {theme} = useTheme();
  interface infoList {
    id: number;
    name: string;
  }

  const item: infoList[] = [
    {
      id: 1,
      name: "Feature",
    },
    {
      id: 2,
      name: "News",
    },
    {
      id: 3,
      name: "Hogwarts",
    },
    {
      id: 4,
      name: "Xbox",
    },
    {
      id: 5,
      name: "PC",
    },
    {
      id: 6,
      name: "Mobile",
    },
    {
      id: 7,
      name: "Floo Flames",
    },
    {
      id: 8,
      name: "Flame Thrower",
    },
    {
      id: 9,
      name: "Playsation",
    },
    {
      id: 10,
      name: "PubG",
    },
    {
      id: 11,
      name: "Guides",
    },
  ];

  const itemEmpty: infoList[] = [];
  const [listItems, setListItems] = useState(item);
  const [esportList , setEsportsList] = useState(itemEmpty);
  const [gamingList , setGamingList] = useState(itemEmpty);
  const [techList , setTechList] = useState(itemEmpty);
  const [teamList , setTeamList] = useState(itemEmpty);
  const [xboxList , setxboxList] = useState(itemEmpty);
  const [mobileList , setMobileList] = useState(itemEmpty);
  const [dealList , setdealList] = useState(itemEmpty);
  const [goosipList , setgossipeList] = useState(itemEmpty);
  const [deal2List , setDeal2eList] = useState(itemEmpty);

  const onClickEsportList = (name: string, id : number) =>{
    let copyArr : Array<infoList> = [...esportList];
    let filterArr : Array<infoList> = copyArr.filter(item => item.name === name)
    let finalArr : Array<infoList> = [];
    if(filterArr.length > 0){
       finalArr = copyArr.filter(item => item.name !== name);
    } else{
      finalArr.push(...copyArr, {id: id , name: name})
    }  
    setEsportsList(finalArr);
  }

  const onClickGamingList = (name: string, id : number) =>{
    let copyArr : Array<infoList> = [...gamingList];
    let filterArr : Array<infoList> = copyArr.filter(item => item.name === name)
    let finalArr : Array<infoList> = [];
    if(filterArr.length > 0){
       finalArr = copyArr.filter(item => item.name !== name);
    } else{
      finalArr.push(...copyArr, {id: id , name: name})
    }  
    setGamingList(finalArr);
  }

  const onClickTechList = (name: string, id : number) =>{
    let copyArr : Array<infoList> = [...techList];
    let filterArr : Array<infoList> = copyArr.filter(item => item.name === name)
    let finalArr : Array<infoList> = [];
    if(filterArr.length > 0){
       finalArr = copyArr.filter(item => item.name !== name);
    } else{
      finalArr.push(...copyArr, {id: id , name: name})
    }  
    setTechList(finalArr);
  }


  const onClickTeamList = (name: string, id : number) =>{
    let copyArr : Array<infoList> = [...teamList];
    let filterArr : Array<infoList> = copyArr.filter(item => item.name === name)
    let finalArr : Array<infoList> = [];
    if(filterArr.length > 0){
       finalArr = copyArr.filter(item => item.name !== name);
    } else{
      finalArr.push(...copyArr, {id: id , name: name})
    }  
    setTeamList(finalArr);
  }

  const onClickXboxList = (name: string, id : number) =>{
    let copyArr : Array<infoList> = [...xboxList];
    let filterArr : Array<infoList> = copyArr.filter(item => item.name === name)
    let finalArr : Array<infoList> = [];
    if(filterArr.length > 0){
       finalArr = copyArr.filter(item => item.name !== name);
    } else{
      finalArr.push(...copyArr, {id: id , name: name})
    }  
    setxboxList(finalArr);
  }


  const onClickMobileList = (name: string, id : number) =>{
    let copyArr : Array<infoList> = [...mobileList];
    let filterArr : Array<infoList> = copyArr.filter(item => item.name === name)
    let finalArr : Array<infoList> = [];
    if(filterArr.length > 0){
       finalArr = copyArr.filter(item => item.name !== name);
    } else{
      finalArr.push(...copyArr, {id: id , name: name})
    }  
    setMobileList(finalArr);
  }


  const onClickDealList = (name: string, id : number) =>{
    let copyArr : Array<infoList> = [...dealList];
    let filterArr : Array<infoList> = copyArr.filter(item => item.name === name)
    let finalArr : Array<infoList> = [];
    if(filterArr.length > 0){
       finalArr = copyArr.filter(item => item.name !== name);
    } else{
      finalArr.push(...copyArr, {id: id , name: name})
    }  
    setdealList(finalArr);
  }


  const onClickGossipeList = (name: string, id : number) =>{
    let copyArr : Array<infoList> = [...goosipList];
    let filterArr : Array<infoList> = copyArr.filter(item => item.name === name)
    let finalArr : Array<infoList> = [];
    if(filterArr.length > 0){
       finalArr = copyArr.filter(item => item.name !== name);
    } else{
      finalArr.push(...copyArr, {id: id , name: name})
    }  
    setgossipeList(finalArr);
  }


  const onClickDeal2List = (name: string, id : number) =>{
    let copyArr : Array<infoList> = [...deal2List];
    let filterArr : Array<infoList> = copyArr.filter(item => item.name === name)
    let finalArr : Array<infoList> = [];
    if(filterArr.length > 0){
       finalArr = copyArr.filter(item => item.name !== name);
    } else{
      finalArr.push(...copyArr, {id: id , name: name})
    }  
    setDeal2eList(finalArr);
  }




  const onClickFollowArr = (name: string) =>{
    if(name === "esportList" ){
      if(esportList.length < 1 ){
        setEsportsList(item)
      }else{
        setEsportsList(itemEmpty);
      }
    }else if(name === "gamingList"){
      if(gamingList.length < 1 ){
        setGamingList(item)
      }else{
        setGamingList(itemEmpty);
      }
    } else if(name === "techList"){
      if(techList.length < 1 ){
        setTechList(item)
      }else{
        setTechList(itemEmpty);
      }
    } else if(name === "teamList"){
      if(teamList.length < 1 ){
        setTeamList(item)
      }else{
        setTeamList(itemEmpty);
      }
    } else if(name === "xboxList"){
      if(xboxList.length < 1 ){
        setxboxList(item)
      }else{
        setxboxList(itemEmpty);
      }
    } else if(name === "mobileList"){
      if(mobileList.length < 1 ){
        setMobileList(item)
      }else{
        setMobileList(itemEmpty);
      }
    } else if(name === "dealList"){
      if(dealList.length < 1 ){
        setdealList(item)
      }else{
        setdealList(itemEmpty);
      }
    } else if(name === "gossipList"){
      if(goosipList.length < 1 ){
        setgossipeList(item)
      }else{
        setgossipeList(itemEmpty);
      }
    } else{
        if(deal2List.length < 1 ){
          setDeal2eList(item)
        }else{
          setDeal2eList(itemEmpty);
        }
      
    }
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
                className={`relative transform overflow-hidden rounded-lg  w-full text-left transition-all bg-bodycolor dark:bg-brandDark2 shadow-3xshadow ${styles.panelChoice} p-5	border-2 rounded-lg	 dark:border-brandLightOpacity10 pb-11	h-[836px]`}
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
                      className="icon flex hover:bg-borderEditProfile cursor-pointer  bg-arrowicon dark:bg-brandLightOpacity10  justify-center items-center w-[40px] h-[40px] rounded-3xl cursor-pointer"
                      onClick={() => props.onClickOpenModal()}
                    >
                      <i className="text-xl fa-solid fa-xmark"></i>
                    </div>
                  </div>

                  <div
                    className={`${theme === 'dark' ? styles.selecttopic : styles.selecttopic_light} selecttopic p-4 pb-0  rounded border dark:border-brandLightOpacity10  bg-gradient-choicebg my-5 `}
                  >
                    <div className="slectopitons overflow-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-choosebox	dark:scrollbar-thumb-custom2 dark:scrollbar-track-custom rounded h-[646px] flex flex-wrap  ">
                      <div className="pr-4   min-h-sceen w-[100%]">
                        <div className="grid  max-w-xl mx-auto">
                          <div className="rounded min-h-fit  mb-4">
                            <details className="group">
                              <summary className={`${esportList.length > 0 ? 'bg-modalChoose':'bg-iconBackground'}  group-open:bg-modalChoose dark:bg-brandLightOpacity5  dark:group-open:bg-brandLightOpacity10 group-open:rounded group-open:border-l-2 group-open:border-l-brandDark2 dark:group-open:border-l-brand h-[64px] flex justify-between items-center font-medium cursor-pointer list-none`}>
                                <div className="flex ">
                                  <span className={`${esportList.length > 0 ? 'dark:text-brand text-brandDark2' : 'dark:text-brandLightOpacity100 text-brandDark2'} pl-6 pr-[5px] text-base montserratfont font-semibold `}>
                                    Esports
                                  </span>
                                  <span className={`${esportList.length > 0 && 'dark:text-brand'}  transition group-open:rotate-180`}>
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
                                <div 
                                onClick={() => onClickFollowArr('esportList')}
                                className="h-[32px] w-[91px] rounded-[20px] bg-modalBtn dark:bg-brandLightOpacity10 mr-6 flex justify-center items-center">
                                  <p className="font-medium montserratfont text-xs text-brandDark2 dark:text-brandLightOpacity100">
                                  {esportList.length > 0 ? `Clear (${esportList.length})` : 'Follow All'}
                                  </p>
                                </div>
                              </summary>
                              <div className="group-open:animate-fadeIn">
                                <div className="flex flex-wrap max-w-[470px]  ml-4">
                                  {listItems.map((item, index) => (
                                    <div
                                      key={index}
                                      className={`${esportList.filter(i => i.name === item.name).length > 0 ? 'bg-white dark:bg-brandDark2 border border-brandDark2  dark:border-brand' :  'bg-choosebox dark:bg-brandLightOpacity10' }   min-w-fit px-2 mr-4  py-[6px]  mt-4  flex items-center justify-center    rounded `}
                                      onClick={() => onClickEsportList(item.name, item.id)}
                                    >
                                      <p className={`${esportList.filter(i => i.name === item.name).length > 0 ? 'text-brandDark2 dark:text-brand' : "text-brandDark2 opacity-70 dark:opacity-100 dark:text-brandLightOpacity70" } text-xs   montserratfont font-medium`}>
                                        {item.name}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </details>
                          </div>
                          <div className="rounded min-h-fit  mb-4">
                            <details className="group">
                              <summary className={`${gamingList.length > 0 ? 'bg-modalChoose':'bg-iconBackground'}  group-open:bg-modalChoose dark:bg-brandLightOpacity5  dark:group-open:bg-brandLightOpacity10 group-open:rounded group-open:border-l-2 group-open:border-l-brandDark2 dark:group-open:border-l-brand h-[64px] flex justify-between items-center font-medium cursor-pointer list-none`}>
                                <div className="flex ">
                                  <span className={`${gamingList.length > 0 ? 'dark:text-brand text-brandDark2' : 'dark:text-brandLightOpacity100 text-brandDark2'} pl-6 pr-[5px] text-base montserratfont font-semibold `}>
                                    Gaming
                                  </span>
                                  <span className={`${gamingList.length > 0 && 'dark:text-brand'}  transition group-open:rotate-180`}>
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
                                <div 
                                onClick={() => onClickFollowArr('gamingList')}
                                className="h-[32px] w-[91px] rounded-[20px] bg-modalBtn dark:bg-brandLightOpacity10 mr-6 flex justify-center items-center">
                                  <p className="font-medium montserratfont text-xs text-brandDark2 dark:text-brandLightOpacity100">
                                  {gamingList.length > 0 ? `Clear (${gamingList.length})` : 'Follow All'}
                                  </p>
                                </div>
                              </summary>
                              <div className="group-open:animate-fadeIn">
                                <div className="flex flex-wrap max-w-[470px]  ml-4">
                                  {listItems.map((item, index) => (
                                    <div
                                      key={index}
                                      className={`${gamingList.filter(i => i.name === item.name).length > 0 ? 'bg-white dark:bg-brandDark2 border border-brandDark2  dark:border-brand' :  'bg-choosebox dark:bg-brandLightOpacity10' }   min-w-fit px-2 mr-4  py-[6px]  mt-4  flex items-center justify-center    rounded `}
                                      onClick={() => onClickGamingList(item.name, item.id)}
                                    >
                                      <p className={`${gamingList.filter(i => i.name === item.name).length > 0 ? 'text-brandDark2 dark:text-brand' : "text-brandDark2 opacity-70 dark:opacity-100 dark:text-brandLightOpacity70" } text-xs   montserratfont font-medium`}>
                                        {item.name}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </details>
                          </div>
                          <div className="rounded min-h-fit  mb-4">
                            <details className="group">
                              <summary className={`${techList.length > 0 ? 'bg-modalChoose':'bg-iconBackground'}  group-open:bg-modalChoose dark:bg-brandLightOpacity5  dark:group-open:bg-brandLightOpacity10 group-open:rounded group-open:border-l-2 group-open:border-l-brandDark2 dark:group-open:border-l-brand h-[64px] flex justify-between items-center font-medium cursor-pointer list-none`}>
                                <div className="flex ">
                                  <span className={`${techList.length > 0 ? 'dark:text-brand text-brandDark2' : 'dark:text-brandLightOpacity100 text-brandDark2'} pl-6 pr-[5px] text-base montserratfont font-semibold `}>
                                    Tech
                                  </span>
                                  <span className={`${techList.length > 0 && 'dark:text-brand'}  transition group-open:rotate-180`}>
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
                                <div 
                                onClick={() => onClickFollowArr('techList')}
                                className="h-[32px] w-[91px] rounded-[20px] bg-modalBtn dark:bg-brandLightOpacity10 mr-6 flex justify-center items-center">
                                  <p className="font-medium montserratfont text-xs text-brandDark2 dark:text-brandLightOpacity100">
                                  {techList.length > 0 ? `Clear (${techList.length})` : 'Follow All'}
                                  </p>
                                </div>
                              </summary>
                              <div className="group-open:animate-fadeIn">
                                <div className="flex flex-wrap max-w-[470px]  ml-4">
                                  {listItems.map((item, index) => (
                                    <div
                                      key={index}
                                      className={`${techList.filter(i => i.name === item.name).length > 0 ? 'bg-white dark:bg-brandDark2 border border-brandDark2  dark:border-brand' :  'bg-choosebox dark:bg-brandLightOpacity10' }   min-w-fit px-2 mr-4  py-[6px]  mt-4  flex items-center justify-center    rounded `}
                                      onClick={() => onClickTechList(item.name, item.id)}
                                    >
                                      <p className={`${techList.filter(i => i.name === item.name).length > 0 ? 'text-brandDark2 dark:text-brand' : "text-brandDark2 opacity-70 dark:opacity-100 dark:text-brandLightOpacity70" } text-xs   montserratfont font-medium`}>
                                        {item.name}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </details>
                          </div>
                            <div className="rounded min-h-fit  mb-4">
                            <details className="group">
                              <summary className={`${teamList.length > 0 ? 'bg-modalChoose':'bg-iconBackground'}  group-open:bg-modalChoose dark:bg-brandLightOpacity5  dark:group-open:bg-brandLightOpacity10 group-open:rounded group-open:border-l-2 group-open:border-l-brandDark2 dark:group-open:border-l-brand h-[64px] flex justify-between items-center font-medium cursor-pointer list-none`}>
                                <div className="flex ">
                                  <span className={`${teamList.length > 0 ? 'dark:text-brand text-brandDark2' : 'dark:text-brandLightOpacity100 text-brandDark2'} pl-6 pr-[5px] text-base montserratfont font-semibold `}>
                                    Team Fury
                                  </span>
                                  <span className={`${teamList.length > 0 && 'dark:text-brand'}  transition group-open:rotate-180`}>
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
                                <div 
                                onClick={() => onClickFollowArr('teamList')}
                                className="h-[32px] w-[91px] rounded-[20px] bg-modalBtn dark:bg-brandLightOpacity10 mr-6 flex justify-center items-center">
                                  <p className="font-medium montserratfont text-xs text-brandDark2 dark:text-brandLightOpacity100">
                                  {teamList.length > 0 ? `Clear (${teamList.length})` : 'Follow All'}
                                  </p>
                                </div>
                              </summary>
                              <div className="group-open:animate-fadeIn">
                                <div className="flex flex-wrap max-w-[470px]  ml-4">
                                  {listItems.map((item, index) => (
                                    <div
                                      key={index}
                                      className={`${teamList.filter(i => i.name === item.name).length > 0 ? 'bg-white dark:bg-brandDark2 border border-brandDark2  dark:border-brand' :  'bg-choosebox dark:bg-brandLightOpacity10' }   min-w-fit px-2 mr-4  py-[6px]  mt-4  flex items-center justify-center    rounded `}
                                      onClick={() => onClickTeamList(item.name, item.id)}
                                    >
                                      <p className={`${teamList.filter(i => i.name === item.name).length > 0 ? 'text-brandDark2 dark:text-brand' : "text-brandDark2 opacity-70 dark:opacity-100 dark:text-brandLightOpacity70" } text-xs   montserratfont font-medium`}>
                                        {item.name}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </details>
                          </div>
                            <div className="rounded min-h-fit  mb-4">
                            <details className="group">
                              <summary className={`${xboxList.length > 0 ? 'bg-modalChoose':'bg-iconBackground'}  group-open:bg-modalChoose dark:bg-brandLightOpacity5  dark:group-open:bg-brandLightOpacity10 group-open:rounded group-open:border-l-2 group-open:border-l-brandDark2 dark:group-open:border-l-brand h-[64px] flex justify-between items-center font-medium cursor-pointer list-none`}>
                                <div className="flex ">
                                  <span className={`${xboxList.length > 0 ? 'dark:text-brand text-brandDark2' : 'dark:text-brandLightOpacity100 text-brandDark2'} pl-6 pr-[5px] text-base montserratfont font-semibold `}>
                                    Xbox
                                  </span>
                                  <span className={`${xboxList.length > 0 && 'dark:text-brand'}  transition group-open:rotate-180`}>
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
                                <div 
                                onClick={() => onClickFollowArr('xboxList')}
                                className="h-[32px] w-[91px] rounded-[20px] bg-modalBtn dark:bg-brandLightOpacity10 mr-6 flex justify-center items-center">
                                  <p className="font-medium montserratfont text-xs text-brandDark2 dark:text-brandLightOpacity100">
                                  {xboxList.length > 0 ? `Clear (${xboxList.length})` : 'Follow All'}
                                  </p>
                                </div>
                              </summary>
                              <div className="group-open:animate-fadeIn">
                                <div className="flex flex-wrap max-w-[470px]  ml-4">
                                  {listItems.map((item, index) => (
                                    <div
                                      key={index}
                                      className={`${xboxList.filter(i => i.name === item.name).length > 0 ? 'bg-white dark:bg-brandDark2 border border-brandDark2  dark:border-brand' :  'bg-choosebox dark:bg-brandLightOpacity10' }   min-w-fit px-2 mr-4  py-[6px]  mt-4  flex items-center justify-center    rounded `}
                                      onClick={() => onClickXboxList(item.name, item.id)}
                                    >
                                      <p className={`${xboxList.filter(i => i.name === item.name).length > 0 ? 'text-brandDark2 dark:text-brand' : "text-brandDark2 opacity-70 dark:opacity-100 dark:text-brandLightOpacity70" } text-xs   montserratfont font-medium`}>
                                        {item.name}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </details>
                          </div>
                            <div className="rounded min-h-fit  mb-4">
                            <details className="group">
                              <summary className={`${mobileList.length > 0 ? 'bg-modalChoose':'bg-iconBackground'}  group-open:bg-modalChoose dark:bg-brandLightOpacity5  dark:group-open:bg-brandLightOpacity10 group-open:rounded group-open:border-l-2 group-open:border-l-brandDark2 dark:group-open:border-l-brand h-[64px] flex justify-between items-center font-medium cursor-pointer list-none`}>
                                <div className="flex ">
                                  <span className={`${mobileList.length > 0 ? 'dark:text-brand text-brandDark2' : 'dark:text-brandLightOpacity100 text-brandDark2'} pl-6 pr-[5px] text-base montserratfont font-semibold `}>
                                    Mobile
                                  </span>
                                  <span className={`${mobileList.length > 0 && 'dark:text-brand'}  transition group-open:rotate-180`}>
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
                                <div 
                                onClick={() => onClickFollowArr('mobileList')}
                                className="h-[32px] w-[91px] rounded-[20px] bg-modalBtn dark:bg-brandLightOpacity10 mr-6 flex justify-center items-center">
                                  <p className="font-medium montserratfont text-xs text-brandDark2 dark:text-brandLightOpacity100">
                                  {mobileList.length > 0 ? `Clear (${mobileList.length})` : 'Follow All'}
                                  </p>
                                </div>
                              </summary>
                              <div className="group-open:animate-fadeIn">
                                <div className="flex flex-wrap max-w-[470px]  ml-4">
                                  {listItems.map((item, index) => (
                                    <div
                                      key={index}
                                      className={`${mobileList.filter(i => i.name === item.name).length > 0 ? 'bg-white dark:bg-brandDark2 border border-brandDark2  dark:border-brand' :  'bg-choosebox dark:bg-brandLightOpacity10' }   min-w-fit px-2 mr-4  py-[6px]  mt-4  flex items-center justify-center    rounded `}
                                      onClick={() => onClickMobileList(item.name, item.id)}
                                    >
                                      <p className={`${mobileList.filter(i => i.name === item.name).length > 0 ? 'text-brandDark2 dark:text-brand' : "text-brandDark2 opacity-70 dark:opacity-100 dark:text-brandLightOpacity70" } text-xs   montserratfont font-medium`}>
                                        {item.name}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </details>
                          </div>
                            <div className="rounded min-h-fit  mb-4">
                            <details className="group">
                              <summary className={`${dealList.length > 0 ? 'bg-modalChoose':'bg-iconBackground'}  group-open:bg-modalChoose dark:bg-brandLightOpacity5  dark:group-open:bg-brandLightOpacity10 group-open:rounded group-open:border-l-2 group-open:border-l-brandDark2 dark:group-open:border-l-brand h-[64px] flex justify-between items-center font-medium cursor-pointer list-none`}>
                                <div className="flex ">
                                  <span className={`${dealList.length > 0 ? 'dark:text-brand text-brandDark2' : 'dark:text-brandLightOpacity100 text-brandDark2'} pl-6 pr-[5px] text-base montserratfont font-semibold `}>
                                    Deals
                                  </span>
                                  <span className={`${dealList.length > 0 && 'dark:text-brand'}  transition group-open:rotate-180`}>
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
                                <div 
                                onClick={() => onClickFollowArr('dealList')}
                                className="h-[32px] w-[91px] rounded-[20px] bg-modalBtn dark:bg-brandLightOpacity10 mr-6 flex justify-center items-center">
                                  <p className="font-medium montserratfont text-xs text-brandDark2 dark:text-brandLightOpacity100">
                                  {dealList.length > 0 ? `Clear (${dealList.length})` : 'Follow All'}
                                  </p>
                                </div>
                              </summary>
                              <div className="group-open:animate-fadeIn">
                                <div className="flex flex-wrap max-w-[470px]  ml-4">
                                  {listItems.map((item, index) => (
                                    <div
                                      key={index}
                                      className={`${dealList.filter(i => i.name === item.name).length > 0 ? 'bg-white dark:bg-brandDark2 border border-brandDark2  dark:border-brand' :  'bg-choosebox dark:bg-brandLightOpacity10' }   min-w-fit px-2 mr-4  py-[6px]  mt-4  flex items-center justify-center    rounded `}
                                      onClick={() => onClickDealList(item.name, item.id)}
                                    >
                                      <p className={`${dealList.filter(i => i.name === item.name).length > 0 ? 'text-brandDark2 dark:text-brand' : "text-brandDark2 opacity-70 dark:opacity-100 dark:text-brandLightOpacity70" } text-xs   montserratfont font-medium`}>
                                        {item.name}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </details>
                          </div>
                            <div className="rounded min-h-fit  mb-4">
                            <details className="group">
                              <summary className={`${goosipList.length > 0 ? 'bg-modalChoose':'bg-iconBackground'}  group-open:bg-modalChoose dark:bg-brandLightOpacity5  dark:group-open:bg-brandLightOpacity10 group-open:rounded group-open:border-l-2 group-open:border-l-brandDark2 dark:group-open:border-l-brand h-[64px] flex justify-between items-center font-medium cursor-pointer list-none`}>
                                <div className="flex ">
                                  <span className={`${goosipList.length > 0 ? 'dark:text-brand text-brandDark2' : 'dark:text-brandLightOpacity100 text-brandDark2'} pl-6 pr-[5px] text-base montserratfont font-semibold `}>
                                    Gossip
                                  </span>
                                  <span className={`${goosipList.length > 0 && 'dark:text-brand'}  transition group-open:rotate-180`}>
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
                                <div 
                                onClick={() => onClickFollowArr('gossipList')}
                                className="h-[32px] w-[91px] rounded-[20px] bg-modalBtn dark:bg-brandLightOpacity10 mr-6 flex justify-center items-center">
                                  <p className="font-medium montserratfont text-xs text-brandDark2 dark:text-brandLightOpacity100">
                                  {goosipList.length > 0 ? `Clear (${goosipList.length})` : 'Follow All'}
                                  </p>
                                </div>
                              </summary>
                              <div className="group-open:animate-fadeIn">
                                <div className="flex flex-wrap max-w-[470px]  ml-4">
                                  {listItems.map((item, index) => (
                                    <div
                                      key={index}
                                      className={`${goosipList.filter(i => i.name === item.name).length > 0 ? 'bg-white dark:bg-brandDark2 border border-brandDark2  dark:border-brand' :  'bg-choosebox dark:bg-brandLightOpacity10' }   min-w-fit px-2 mr-4  py-[6px]  mt-4  flex items-center justify-center    rounded `}
                                      onClick={() => onClickGossipeList(item.name, item.id)}
                                    >
                                      <p className={`${goosipList.filter(i => i.name === item.name).length > 0 ? 'text-brandDark2 dark:text-brand' : "text-brandDark2 opacity-70 dark:opacity-100 dark:text-brandLightOpacity70" } text-xs   montserratfont font-medium`}>
                                        {item.name}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </details>
                          </div>
                            <div className="rounded min-h-fit  mb-4">
                            <details className="group">
                              <summary className={`${deal2List.length > 0 ? 'bg-modalChoose':'bg-iconBackground'}  group-open:bg-modalChoose dark:bg-brandLightOpacity5  dark:group-open:bg-brandLightOpacity10 group-open:rounded group-open:border-l-2 group-open:border-l-brandDark2 dark:group-open:border-l-brand h-[64px] flex justify-between items-center font-medium cursor-pointer list-none`}>
                                <div className="flex ">
                                  <span className={`${deal2List.length > 0 ? 'dark:text-brand text-brandDark2' : 'dark:text-brandLightOpacity100 text-brandDark2'} pl-6 pr-[5px] text-base montserratfont font-semibold `}>
                                    Deals
                                  </span>
                                  <span className={`${deal2List.length > 0 && 'dark:text-brand'}  transition group-open:rotate-180`}>
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
                                <div 
                                onClick={() => onClickFollowArr('deal2List')}
                                className="h-[32px] w-[91px] rounded-[20px] bg-modalBtn dark:bg-brandLightOpacity10 mr-6 flex justify-center items-center">
                                  <p className="font-medium montserratfont text-xs text-brandDark2 dark:text-brandLightOpacity100">
                                  {deal2List.length > 0 ? `Clear (${deal2List.length})` : 'Follow All'}
                                  </p>
                                </div>
                              </summary>
                              <div className="group-open:animate-fadeIn">
                                <div className="flex flex-wrap max-w-[470px]  ml-4">
                                  {listItems.map((item, index) => (
                                    <div
                                      key={index}
                                      className={`${deal2List.filter(i => i.name === item.name).length > 0 ? 'bg-white dark:bg-brandDark2 border border-brandDark2  dark:border-brand' :  'bg-choosebox dark:bg-brandLightOpacity10' }   min-w-fit px-2 mr-4  py-[6px]  mt-4  flex items-center justify-center    rounded `}
                                      onClick={() => onClickDeal2List(item.name, item.id)}
                                    >
                                      <p className={`${deal2List.filter(i => i.name === item.name).length > 0 ? 'text-brandDark2 dark:text-brand' : "text-brandDark2 opacity-70 dark:opacity-100 dark:text-brandLightOpacity70" } text-xs   montserratfont font-medium`}>
                                        {item.name}
                                      </p>
                                    </div>
                                  ))}
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
