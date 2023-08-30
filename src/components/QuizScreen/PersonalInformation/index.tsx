"use client";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useRef, useState, useEffect } from "react";
import Close from "../../../assets/images/modal/close.png";
import Info from "../../../assets/quiz-model/info.png";
import Upload from "../../../assets/quiz-model/upload.png";
import Loader from "../../../assets/quiz-model/loader.png";
import Tick from "../../../assets/quiz-model/tick.png";
import Image from "next/image";
import { useTheme } from "next-themes";

const PersonalInformation = (props: any) => {
  const cancelButtonRef = useRef(null);
  const { theme } = useTheme();

  const [isDarkTheme, setIsDarkTheme] = useState<string>("");
  useEffect(() => {
    setIsDarkTheme(theme === "dark" ? "dark" : "light");
  }, [theme]);

  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<any>(null);
  const [files, setFiles] = useState<any>([]);

  function handleChange(e: any) {
    e.preventDefault();
    console.log("File has been added");
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files);
      for (let i = 0; i < e.target.files["length"]; i++) {
        setFiles((prevState: any) => [...prevState, e.target.files[i]]);
      }
    }
  }

  function handleSubmitFile(e: any) {
    if (files.length === 0) {
      // no file has been submitted
    } else {
      // write submit logic here
    }
  }

  function handleDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      for (let i = 0; i < e.dataTransfer.files["length"]; i++) {
        setFiles((prevState: any) => [...prevState, e.dataTransfer.files[i]]);
      }
    }
  }

  function handleDragLeave(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }

  function handleDragOver(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function handleDragEnter(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function removeFile(fileName: any, idx: any) {
    const newArr = [...files];
    newArr.splice(idx, 1);
    setFiles([]);
    setFiles(newArr);
  }

  function openFileExplorer() {
    inputRef.current.value = "";
    inputRef.current.click();
  }

  const [loader, setLoader] = useState<Boolean>(false);
  const [isVerfied, seIsVerified] = useState<Boolean>(false);
  const onClickVerify = (e: any) => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      seIsVerified(true);
    }, 2000);
  };

  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => props.close()}
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

        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="fixed bg-bodycolor  inset-[70px] w-[375px]  mw-lg:inset-[30px] mw-sm:inset-0  mw-lg:left-auto max-h-[812px] mw-sm:w-full dark:bg-[#221e1f] left-auto  overflow-y-auto scrollbar-thin   scrollbar-track-[transparent]  scrollbar-thumb-darkScollorBarColor  dark:scrollbar-track-[transparent] m-auto mw-sm:h-full  mw-sm:max-h-full">
              {/* top   */}
              <div className="flex flex-col  h-full">
                <div className="relative ">
                  <p className="pt-[16px] pl-[16px] text-[24px] font-bold dark:text-brandLightOpacity100 montserratfont text-left">
                    Perosnal Inforamtion
                  </p>
                  <div
                    onClick={() => props.close()}
                    className="dark:bg-brandLightOpacity10 hover:bg-brandLightOpacity50 bg-brandLightOpacity30 hover:dark:bg-brandLightOpacity20  h-[40px] w-[40px] rounded-full absolute top-3 right-3 flex justify-center items-center content-center"
                  >
                    <Image
                      className="brightness-0 dark:brightness-100"
                      src={Close}
                      alt="Close"
                    />
                  </div>
                </div>
                <div className="mx-[16px] mt-[4px] flex flex-row items-start ">
                  <Image
                    className="mt-[2px] brightness-0 dark:brightness-100"
                    src={Info}
                    alt="Info"
                  />
                  <p className="pl-[6px] text-left montserratfont text-[12px] dark:text-brandLightOpacity70">
                    We will fetch your personal details from <br /> the
                    government database
                  </p>
                </div>
                <div className="px-[16px]">
                  <p className="pt-[38px]  montserratfont font-semibold text-[16px] dark:text-brandLightOpacity100 text-left">
                    PAN Card Details
                  </p>
                  <input
                    className="mt-[16px] border-brandLightOpacity10  montserratfont hover:border hover:border-brandDark2 dark:hover:border-[#ffffff]  dark:border-brandLightOpacity10 border border-choosebox  rounded w-full h-12 py-2 px-6 bg-white dark:bg-brandDark3 focus:outline-none focus:shadow-outline focus:border-brandDark2 dark:focus:border-[#ffffff]"
                    id="card-name"
                    type="text"
                    placeholder="Name as per PAN Card*"
                  />
                  <input
                    className="mt-[16px] border-brandLightOpacity10  montserratfont hover:border hover:border-brandDark2 dark:hover:border-[#ffffff]  dark:border-brandLightOpacity10 border border-choosebox  rounded w-full h-12 py-2 px-6 bg-white dark:bg-brandDark3 focus:outline-none focus:shadow-outline focus:border-brandDark2 dark:focus:border-[#ffffff]"
                    id="number"
                    type="text"
                    placeholder="PAN Card Number*"
                  />
                  <p className="pt-[32px]  montserratfont font-semibold text-[16px] dark:text-brandLightOpacity100 text-left">
                    PAN Card Image
                  </p>
                  {/* <div className="mt-[16px] border-dashed border-brandLightOpacity10  montserratfont hover:border hover:border-brandDark2 dark:hover:border-[#ffffff]  dark:border-brandLightOpacity30 border border-choosebox  rounded w-full h-[100px] py-2 px-6 bg-white dark:bg-brandDark3 focus:outline-none focus:shadow-outline focus:border-brandDark2 dark:focus:border-[#ffffff]"></div> */}

                  <div className="mt-[16px] border-dashed border-brandLightOpacity10  montserratfont hover:border hover:border-brandDark2 dark:hover:border-[#ffffff]  dark:border-brandLightOpacity30 border border-choosebox  rounded w-full h-[100px] py-2 px-6 bg-white dark:bg-brandDark3 focus:outline-none focus:shadow-outline focus:border-brandDark2 dark:focus:border-[#ffffff]">
                    <form
                      // className={`${
                      //   dragActive ? "bg-blue-400" : "bg-blue-100"
                      // }  p-4 w-1/3 rounded-lg  text-center flex flex-col items-center justify-center`}
                      onDragEnter={handleDragEnter}
                      onSubmit={(e) => e.preventDefault()}
                      onDrop={handleDrop}
                      onDragLeave={handleDragLeave}
                      onDragOver={handleDragOver}
                    >
                      {/* this input element allows us to select files for upload. We make it hidden so we can activate it when the user clicks select files */}
                      <input
                        placeholder="fileInput"
                        className="hidden"
                        ref={inputRef}
                        type="file"
                        multiple={true}
                        onChange={handleChange}
                        accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
                      />

                      {files.length < 1 ? (
                        <div className="flex flex-row items-start ">
                          <Image
                            className="pt-[7px] brightness-0 dark:brightness-100"
                            src={Upload}
                            alt="upload"
                          />
                          <p className="pl-[14px] pt-[4px] montserratfont font-medium text-[16px] dark:text-brandLightOpacity70 flex flex-col  ">
                            Drop file here
                            <span className="text-[12px] dark:text-brandLightOpacity100 font-normal">
                              or
                            </span>
                            <span
                              className="pt-[6px] text-[16px] dark:text-brandLightOpacity100 cursor-pointer border-b-[1px] border-b-brandLightOpacity70 leading-[15px] w-fit"
                              onClick={openFileExplorer}
                            >
                              Browse files
                            </span>
                          </p>
                        </div>
                      ) : (
                        <div className="flex  items-center justify-center content-center">
                          {files.map((file: any, idx: any) => (
                            <div key={idx} className="flex flex-row space-x-5">
                              <span>{file.name}</span>
                              <span
                                className="text-red-500 cursor-pointer"
                                onClick={() => removeFile(file.name, idx)}
                              >
                                remove
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                      {/* <button
          className="bg-black rounded-lg p-2 mt-3 w-auto"
          onClick={handleSubmitFile}
        >
          <span className="p-2 text-white">Submit</span>
        </button> */}
                    </form>
                  </div>
                  <div className="flex flex-row items-start mt-[14px]">
                    <div
                      onClick={(e) => onClickVerify(e)}
                      className={`done_btn bg-brandLightOpacity100 h-[32px] flex items-center justify-center content-center ${
                        isVerfied
                          ? "w-[100px] border dark:border-brandLightOpacity100 border-brandDark2"
                          : "w-[67px]"
                      }  dark:bg-brandLightOpacity10    rounded-3xl	text-center 	leading-6	 cursor-pointer mw-sm:w-[67px]   mw-sm3:w-[67px] mw-sm:text-[12px] mw-sm:text-medium`}
                    >
                      {loader ? (
                        <Image
                          src={Loader}
                          className="brightness-0 dark:brightness-100"
                          alt="loader"
                        />
                      ) : isVerfied ? (
                        <div className="flex flex-row  w-[100%] items-center justify-around">
                          <Image
                            className="ml-[8px] brightness-0 dark:brightness-100"
                            src={Tick}
                            alt="tick"
                          />
                          <p className="pr-[12px] text-[12px] text-brandDark2 dark:text-brandLightOpacity100 	font-medium montserratfont ">
                            Verified
                          </p>
                        </div>
                      ) : (
                        <p className="text-[12px] text-brandDark2 dark:text-brandLightOpacity100	font-medium montserratfont ">
                          Verify
                        </p>
                      )}
                    </div>
                  </div>

                  <p className="pt-[32px]  montserratfont font-semibold text-[16px] dark:text-brandLightOpacity100 text-left">
                    Delivery Address
                  </p>
                  <input
                    className="mt-[16px] border-brandLightOpacity10  montserratfont hover:border hover:border-brandDark2 dark:hover:border-[#ffffff]  dark:border-brandLightOpacity10 border border-choosebox  rounded w-full h-12 py-2 px-6 bg-white dark:bg-brandDark3 focus:outline-none focus:shadow-outline focus:border-brandDark2 dark:focus:border-[#ffffff]"
                    id="name"
                    type="text"
                    placeholder="Name*"
                  />
                  <input
                    className="mt-[16px] border-brandLightOpacity10  montserratfont hover:border hover:border-brandDark2 dark:hover:border-[#ffffff]  dark:border-brandLightOpacity10 border border-choosebox  rounded w-full h-12 py-2 px-6 bg-white dark:bg-brandDark3 focus:outline-none focus:shadow-outline focus:border-brandDark2 dark:focus:border-[#ffffff]"
                    id="contact"
                    type="text"
                    placeholder="Contact Number*"
                  />
                  <textarea
                    className="mt-[16px]  border-brandLightOpacity10  montserratfont hover:border hover:border-brandDark2 dark:hover:border-[#ffffff]  dark:border-brandLightOpacity10 border border-choosebox  rounded w-full  py-2 px-6 bg-white dark:bg-brandDark3 focus:outline-none focus:shadow-outline focus:border-brandDark2 dark:focus:border-[#ffffff]"
                    id="address"
                    rows={4}
                    placeholder="Address (House No.,Building, Area)*"
                  ></textarea>
                  <input
                    className="mt-[16px] border-brandLightOpacity10  montserratfont hover:border hover:border-brandDark2 dark:hover:border-[#ffffff]  dark:border-brandLightOpacity10 border border-choosebox  rounded w-full h-12 py-2 px-6 bg-white dark:bg-brandDark3 focus:outline-none focus:shadow-outline focus:border-brandDark2 dark:focus:border-[#ffffff]"
                    id="code"
                    type="text"
                    placeholder="PIN Code*"
                  />
                  <input
                    className="mt-[16px] border-brandLightOpacity10  montserratfont hover:border hover:border-brandDark2 dark:hover:border-[#ffffff]  dark:border-brandLightOpacity10 border border-choosebox  rounded w-full h-12 py-2 px-6 bg-white dark:bg-brandDark3 focus:outline-none focus:shadow-outline focus:border-brandDark2 dark:focus:border-[#ffffff]"
                    id="city"
                    type="text"
                    placeholder="City/district*"
                  />
                  <input
                    className="mt-[16px] border-brandLightOpacity10  montserratfont hover:border hover:border-brandDark2 dark:hover:border-[#ffffff]  dark:border-brandLightOpacity10 border border-choosebox  rounded w-full h-12 py-2 px-6 bg-white dark:bg-brandDark3 focus:outline-none focus:shadow-outline focus:border-brandDark2 dark:focus:border-[#ffffff]"
                    id="state"
                    type="text"
                    placeholder="State*"
                  />
                </div>
                <div
                  className={`flex flex-row justify-between items-center px-[16px] pt-[32px] ${
                    isDarkTheme === "dark" ? "darkchecked " : "lightcheched"
                  } `}
                >
                  <div className="flex flex-row items-center">
                    <input type="checkbox" className="h-5 w-5 text-green-600" />
                    <p className="pl-2.5 montserratfont text-brandDark2 font-medium  dark:text-brandLightOpacity70 text-[12px]">
                      Save details for next time
                    </p>
                  </div>
                </div>
                <div className="mt-[56px]">
                  <a
                    className={`done_btn h-[42px] flex  items-center  justify-center content-center mt-[8px] w-[230px] bg-brand   hover:bg-[#ec5d5f] rounded-3xl	text-center m-auto text-[16px]	leading-6	mb-6 text-white dark:text-brandLightOpacity100	font-semibold montserratfont cursor-pointer mw-sm:w-[250px]   mw-sm3:w-[100%] mw-sm:text-base mw-sm:text-semibold`}
                  >
                    Proceed
                  </a>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default PersonalInformation;
