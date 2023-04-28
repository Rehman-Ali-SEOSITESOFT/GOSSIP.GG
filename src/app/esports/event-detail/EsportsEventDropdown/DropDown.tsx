import React, { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import style from "./Dropdown.module.css"
const DropDown = () => {
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ")
  }
  return (
    <>
      <div className={`${style.maindropdownWrapper}`}>
        <Menu
          as="div"
          className={`${style.mainwrap} relative inline-block text-left`}
        >
          <div>
            <Menu.Button
              className={` ${style.buttonDrop} montserratfont justify-between inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white  text-[#000] px-3 py-2 text-sm font-semibold dark:text-[red] shadow-sm hover:bg-gray-50`}
            >
              Last Week
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              className={`${style.menuitemwrapper} dark:bg-[#2e2a2b] absolute right-0 z-10 mt-2 w-[380px] origin-top-right   focus:outline-none mw-sm:w-[200px]`}
            >
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active
                          ? " text-[#E5E5E5] text-[16px] leading-[20px] font-normal montserratfont hover:bg-[#403D3E]"
                          : "text-[#E5E5E5] text-[16px] leading-[20px] font-normal	montserratfont hover:bg-[#403D3E]",
                        "block px-4 py-2 text-sm hover:bg-[#403D3E]"
                      )}
                    >
                      Today
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active
                          ? " text-[#E5E5E5] text-[16px] leading-[20px] font-normal montserratfont hover:bg-[#403D3E]"
                          : "text-[#E5E5E5] text-[16px] leading-[20px] font-normal	montserratfont hover:bg-[#403D3E]",
                        "block px-4 py-2 text-sm hover:bg-[#403D3E]"
                      )}
                    >
                      Yesterday
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active
                          ? " text-[#E5E5E5] text-[16px] leading-[20px] font-normal montserratfont hover:bg-[#403D3E]"
                          : "text-[#E5E5E5] text-[16px] leading-[20px] font-normal	montserratfont hover:bg-[#403D3E]",
                        "block px-4 py-2 text-sm hover:bg-[#403D3E]"
                      )}
                    >
                      Last Week
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active
                          ? " text-[#E5E5E5] text-[16px] leading-[20px] font-normal montserratfont hover:bg-[#403D3E]"
                          : "text-[#E5E5E5] text-[16px] leading-[20px] font-normal	montserratfont hover:bg-[#403D3E]",
                        "block px-4 py-2 text-sm hover:bg-[#403D3E]"
                      )}
                    >
                      Last 10 Days
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  )
}

export default DropDown
