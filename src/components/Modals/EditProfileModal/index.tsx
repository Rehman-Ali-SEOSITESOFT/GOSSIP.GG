import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Close from "../../../assets/images/modal/close.png";
import Info from "../../../assets/images/general/info.png";
import Instgram from "../../../assets/images/footer/instagram.png";
import Twitter from "../../../assets/images/footer/twitter.png";
import Game from "../../../assets/images/general/game.png";
import Airplay from "../../../assets/images/general/airplay.png";
import Vector from "../../../assets/images/general/Vector.png";
import Nitendo from "../../../assets/images/general/Nintendo.png";
import Xbox from "../../../assets/images/general/Xbox.png";
import Playstation from "../../../assets/images/general/PlayStation.png";
import Banner3 from "../../../assets/images/profile/banner-3.png";
import Logo1 from "../../../assets/images/profile/logo-1.png";
import DisplaySlider from "./DisplayImageSlider";
import BannerSlider from "./BannerImageSlider";
const EditProfileModal = (props: any) => {
  const cancelButtonRef = useRef(null);
  const [openTab, setOpenTab] = useState<number | null>(1);

  interface GameList {
    name: string;
    picture: any;
  }

  interface PlatformList {
    name: string;
    picture: any;
  }


  const item: GameList[] = [
    {
      name: "Valorant",
      picture: Game,
    },
    {
      name: "Valorant",
      picture: Game,
    },
    {
      name: "Valorant",
      picture: Game,
    },
    {
      name: "Valorant",
      picture: Game,
    },
    {
      name: "Valorant",
      picture: Game,
    },
    {
      name: "Valorant",
      picture: Game,
    },
    {
      name: "Valorant",
      picture: Game,
    },
    {
      name: "Valorant",
      picture: Game,
    },
    {
      name: "Valorant",
      picture: Game,
    },
    {
      name: "Valorant",
      picture: Game,
    },
    {
      name: "Valorant",
      picture: Game,
    },
    {
      name: "Valorant",
      picture: Game,
    },
  ];
  const [gameItems, setGameItems] = useState(item);

  const itemPlatform: PlatformList[] = [
    {
      name: "PC",
      picture: Airplay,
    },
    {
      name: "Mobile",
      picture: Vector,
    },
    {
      name: "Playstation",
      picture: Playstation,
    },
    {
      name: "Xbox",
      picture: Xbox,
    },
    {
      name: "Nintendo",
      picture: Nitendo,
    },
  ];
  const [platformItems, setPlatformItems] = useState(itemPlatform);

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
                    <div className="flex flex-row justify-between mw-sm1:px-[10px]  pl-12 pt-4 pr-4">
                      <div className="">
                        <p className="text-[24px] pb-[5px] text-brandLightOpacity100 font-bold montserratfont">
                          Edit Profile
                        </p>
                        <p className="flex items-center text-xs text-brandLightOpacity70 font-normal montserratfont">
                          Naveen
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
                  <div className="flex flex-col mt-[40px]  ">
                    <div className="flex flex-wrap">
                      <div className=" ">
                        <ul
                          className="flex border dark:border-r-brandDark2  dark:border-l-brandDark2 dark:border-t-brandDark2 dark:border-b-brandLightOpacity10 mb-0 list-none flex-wrap pt-3 pb-2  flex-row"
                          role="tablist"
                        >
                          <li className="mw-sm1:mx-[10px] ml-[48px] mr-[36px]">
                            <a
                              className={
                                "text-base mw-sm3:text-[10px] mw-sm1:text-[12px]  montserratfont  leading-normal " +
                                (openTab === 1
                                  ? "dark:text-brand pb-[8px] font-bold border-2 dark:border-b-brand dark:border-t-brandDark2 dark:border-r-brandDark2 dark:border-l-brandDark2"
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
                          <li className="mr-[36px] mw-sm1:mr-[10px]">
                            <a
                              className={
                                "text-base mw-sm3:text-[10px] mw-sm1:text-[12px] montserratfont  leading-normal  " +
                                (openTab === 2
                                  ? "dark:text-brand pb-[8px] font-bold border-2 dark:border-b-brand dark:border-t-brandDark2 dark:border-r-brandDark2 dark:border-l-brandDark2"
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
                          <li className="mr-[90px] mw-sm1:mr-[0px]">
                            <a
                              className={
                                "text-base mw-sm3:text-[10px] mw-sm1:text-[12px] montserratfont  leading-normal " +
                                (openTab === 3
                                  ? "dark:text-brand pb-[8px] border-2 font-bold dark:border-b-brand dark:border-t-brandDark2 dark:border-r-brandDark2 dark:border-l-brandDark2"
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
                        <div className="relative flex flex-col min-w-0 break-words bg-brandDark2 w-full shadow-lg rounded">
                          <div className="mw-sm1:px-[10px] px-12  flex-auto">
                            <div className="tab-content tab-space">
                              <div
                                className={openTab === 1 ? "block mb-[85px]" : "hidden"}
                                id="link1"
                              >
                                <div className="mt-7">
                                  <p className="text-base text-brandLightOpacity100 montserratfont font-semibold ">
                                    Mantra
                                  </p>
                                  <p className=" pb-[16px] text-brandLightOpacity70 montserratfont text-xs font-normal">
                                    A oneliner you live by
                                  </p>
                                  <input
                                    className="text-brandLightOpacity100 border-brandLightOpacity10 hover:border hover:border-[#ffffff] border rounded w-full h-12 py-2 px-6 bg-brandDark2 focus:bg-brandDark3 focus:outline-none focus:shadow-outline focus:border-[#ffffff]"
                                    id="live"
                                    type="text"
                                    placeholder=""
                                  />
                                  <p className="pt-2 text-brandLightOpacity70 italic montserratfont text-xs font-normal">
                                    52 Characters remaining
                                  </p>
                                </div>
                                <div className="mt-12">
                                  <p className="text-base text-brandLightOpacity100 montserratfont font-semibold ">
                                    About
                                  </p>
                                  <p className=" pb-[16px] text-brandLightOpacity70 montserratfont text-xs font-normal">
                                    A brief description of yourself shown on
                                    your profile
                                  </p>
                                  <textarea
                                    className="h-[115px] text-brandLightOpacity100 border-brandLightOpacity10 hover:border hover:border-[#ffffff] border rounded w-full h-12 py-2 px-6 bg-brandDark2 focus:bg-brandDark3 focus:outline-none focus:shadow-outline focus:border-[#ffffff]"
                                    id="textarea"
                                  />
                                  <p className="pt-2 text-brandLightOpacity70 italic montserratfont text-xs font-normal">
                                    180 Characters remaining
                                  </p>
                                </div>
                                <div className="mt-12">
                                  <p className="text-base text-brandLightOpacity100 montserratfont font-semibold ">
                                    Social Handles
                                  </p>
                                  <p className=" pb-[16px] text-brandLightOpacity70 montserratfont text-xs font-normal">
                                    People who visit your profile will see your
                                    links
                                  </p>
                                  <div className="flex flex-row  items-center pb-2">
                                    <Image src={Info} alt="Info" />
                                    <p className="pl-2 montserratfont  font-normal text-brandLightOpacity70  text-xs ">
                                      Please provide your username
                                    </p>
                                  </div>
                                  <div className=" mw-sm3:flex-col flex justify-between w-[100%]">
                                    <div className="flex items-center mw-sm3:max-w-[100%] max-w-[45%]">
                                      <Image
                                        className="mr-2"
                                        src={Instgram}
                                        alt="Instagram"
                                      />
                                      <input
                                        className="text-brandLightOpacity100 border-brandLightOpacity10 hover:border hover:border-[#ffffff] border rounded w-full h-12 py-2 px-6 bg-brandDark2 focus:bg-brandDark3 focus:outline-none focus:shadow-outline focus:border-[#ffffff]"
                                        id="live"
                                        type="text"
                                        placeholder=""
                                      />
                                    </div>
                                    <div className="flex items-center mw-sm3:mt-2 mw-sm3:max-w-[100%] max-w-[45%]">
                                      <Image
                                        className="mr-2"
                                        src={Twitter}
                                        alt="Twitter"
                                      />
                                      <input
                                        className="text-brandLightOpacity100 border-brandLightOpacity10 hover:border hover:border-[#ffffff] border rounded w-full h-12 py-2 px-6 bg-brandDark2 focus:bg-brandDark3 focus:outline-none focus:shadow-outline focus:border-[#ffffff]"
                                        id="live"
                                        type="text"
                                        placeholder=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className={openTab === 2 ? "block mb-6" : "hidden"}
                                id="link2"
                              >
                                <div>
                                  <div className="mt-8 ">
                                    <Image
                                      className=""
                                      src={Banner3}
                                      alt="Banner"
                                    />
                                    <Image
                                      className="absolute top-20 left-[90px]"
                                      src={Logo1}
                                      alt="Logo"
                                    />
                                  </div>
                                </div>
                                <div className="border border-brandLightOpacity10 mt-[71px]"></div>
                                <div className="mt-4 max-w-[570px]">
                                  <p className="text-base mb-4 text-brandLightOpacity100 montserratfont font-semibold ">
                                    Display Image
                                  </p>
                                   <div className="max-w-[500px] pl-9">
                                   <DisplaySlider/>
                                   </div>
                                </div>
                                <div className="border border-brandLightOpacity10 mt-[22px]"></div>
                                <div className="mt-4">
                                  <p className="text-base mb-4 text-brandLightOpacity100 montserratfont font-semibold ">
                                    Banner Image
                                  </p>
                                  <div className="max-w-[500px] pl-9">
                                   <BannerSlider/>
                                   </div>
                                </div>
                                <div className="border border-brandLightOpacity10 mt-4"></div>
                              </div>
                              <div
                                className={openTab === 3 ? "block mb-[147px]" : "hidden"}
                                id="link3"
                              >
                                <div className="mt-[41px] ">
                                  <p className="mb-6 text-base text-brandLightOpacity100 montserratfont font-semibold">
                                    Game
                                  </p>
                                  <div className="flex flex-wrap max-w-[570px]  ">
                                    {gameItems.map((item, index) => (
                                      <div
                                        key={index}
                                        className="min-w-fit mr-4   mb-4  mw-sm:mb-2 mw-sm:mr-2 flex items-center justify-around border border-[#ffffff]  rounded-lg h-11"
                                      >
                                        <Image
                                          className="ml-3 mr-2 mw-sm:mr-1 mw-sm:ml-2"
                                          src={item.picture}
                                          alt="game icon"
                                        />
                                        <p className="mr-3 text-base mw-sm:mr-2 mw-sm:text-[14px] text-brandLightOpacity70 montserratfont font-normal ">
                                          {item.name}
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                <div className="mt-[88px]">
                                  <p className="text-base mb-6 text-brandLightOpacity100 montserratfont font-semibold">
                                    Platform
                                  </p>
                                  <div className="flex flex-wrap max-w-[570px]">
                                    {platformItems.map((item, index) => (
                                      <div
                                        key={index}
                                        className="min-w-fit mr-4   mb-4  mw-sm:mb-2 mw-sm:mr-2 flex items-center justify-around border border-[#ffffff]  rounded-lg h-11"
                                      >
                                        <Image
                                          className="ml-3 mr-2 mw-sm:mr-1 mw-sm:ml-2"
                                          src={item.picture}
                                          alt="game icon"
                                        />
                                        <p className="mr-3 text-base mw-sm:mr-2 mw-sm:text-[14px] text-brandLightOpacity70 montserratfont font-normal ">
                                          {item.name}
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <div className=" mb-[57px] flex justify-center ">
                                <button className="bg-brand mw-sm:w-60  mw-sm:text-sm w-300px  hover:bg-[#ec5d5f] h-12 text-white rounded-3xl montserratfont text-lg font-bold">
                                  Save Changes
                                </button>
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
