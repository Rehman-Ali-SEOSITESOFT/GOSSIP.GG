"use client";

import React ,{ Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Image from "next/image";
import logo from "../../assets/images/header/main-logo.png";
import search from "../../assets/images/header/search.png";
import moon from "../../assets/images/header/moon.png";
import sun from "../../assets/images/header/sun.png";
import close from "../../assets/images/header/close-search.png";
import { useTheme } from "next-themes";
import styles from "./Header.module.css";
const Header = () => {
  interface MenuList {
    name: string;
    link: string;
  }
  const { theme, setTheme } = useTheme();
  const [menu, setMenu] = useState<MenuList[]>([
    {
      name: "Home",
      link: "/",
    },
    {
      name: "gossip",
      link: "/",
    },
    {
      name: "esports",
      link: "/",
    },
    {
      name: "gaming",
      link: "/",
    },
    {
      name: "tech",
      link: "/",
    },
  ]);
  const [searchOpen, setSearchOpen] = useState<Boolean>(true);
  const [searchText, setSearchText] = useState<string>("");
  const hanldeClose = () => {
    setSearchOpen(!searchOpen);
  };
  const hanldeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  const hanldeSearch = () => {
    console.log(searchText);
  };

  const [open, setOpen] = useState(true)
  const cancelButtonRef = useRef(null)


  return (
    <header className={styles.main_header}>
      <div
        className={`${styles.header_width} bg-brandDark3 border border-brand before:bg-brand after:bg-brand`}
      >
        <div
          className={`2xl:container header_container before:bg-bodycolor after:bg-bodycolor dark:before:bg-brandDark2 dark:after:bg-brandDark2 ${styles.header_container}`}
        >
          <div className="flex  flex-wrap items-center justify-between">
            <div className={`xl:w-1/4 lg:w-1/5  w-3/6  ${styles.header__left}`}>
              <div className={styles.logo}>
                <Image src={logo} alt="Gossip GG" />
              </div>
            </div>
            {searchOpen ? (
              <div className={`${styles.header__center} xl:w-3/6 lg:w-1/1  `}>
                <div className="header-navigation">
                  <ul className="flex flex-wrap  justify-center">
                    {menu.map((elme, index) => {
                      return (
                        <li key={index}>
                          <a
                            href={elme.link}
                            className="font-bold leading-5 no-underline uppercase text-brandLightOpacity100 hover:text-brand hover:font-extrabold sm:text-brandLightOpacity70 "
                          >
                            {elme.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ) : (
              <div
                className={`xl:w-3/6 lg:w-1/1 ${
                  searchOpen
                    ? `${styles.seach__deve}`
                    : `${styles.seach__deve} ${styles.open}`
                } `}
              >
                <div className={`${styles.serach_btn} relative `}>
                  <input
                    value={searchText}
                    className="w-full border-none "
                    onChange={hanldeChange}
                    placeholder="Search"
                  />
                  <span onClick={hanldeSearch}>
                    <Image src={search} alt="search " />
                  </span>
                </div>
              </div>
            )}

            <div className={`xl:w-1/4 lg:w-1/5	w-3/6 ${styles.header__right}`}>
              <div className={`${styles.header__right} flex justify-end `}>
                {searchOpen ? (
                  <>
                    <div
                      className={`${styles.search__btn} ${styles.icons} bg-brandLightOpacity10 hover:bg-brandLightOpacity50`}
                      onClick={hanldeClose}
                    >
                      <span>
                        <Image src={search} alt="search " />
                      </span>
                    </div>
                    <div
                      onClick={() => setOpen(true)}
                      className={`${styles.login__btn} ${styles.icons} text-brandLightOpacity100 bg-brandLightOpacity10 hover:bg-brandLightOpacity50`}
                    >
                      <span> Login</span>
                    </div>

                    <div
                      className={`${styles.theme__btn} ${styles.icons} bg-brandLightOpacity10 hover:bg-brandLightOpacity50`}
                      onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                      }
                    >
                      <span>
                        {theme === "light" ? (
                          <Image src={moon} alt="moon light icon" />
                        ) : (
                          <Image src={sun} alt="moon light icon" />
                        )}
                      </span>
                    </div>
                  </>
                ) : (
                  <div
                    className={`${styles.close__btn} ${styles.icons}`}
                    onClick={hanldeClose}
                  >
                    <span>
                      <Image src={close} alt="close " />
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`hidden mw-lg:block mw-lg:z-10 ${styles.fixed__bottom__header} fixed bottom-0 left-0 right-0 bg-brandDark2`}
        >
          <div className="xl:w-3/6 lg:w-1/1 ">
            <div className="header-navigation">
              <ul className="flex flex-wrap  justify-center mw-sm:justify-between">
                {menu.map((elme, index) => {
                  return (
                    <li key={index}>
                      <a
                        href={elme.link}
                        className={`font-bold leading-5 no-underline uppercase text-brandLightOpacity100 hover:text-brand hover:font-extrabold text-brandLightOpacity100 mw-sm:text-brandLightOpacity70 ${
                          index === 0 && `${styles.active}`
                        }`}
                      >
                        {elme.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Start */}
      <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        Deactivate account
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Are you sure you want to deactivate your account? All of your data will be permanently
                          removed. This action cannot be undone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Deactivate
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    {/* Modal End */}
    </header>
  );
};

export default Header;
