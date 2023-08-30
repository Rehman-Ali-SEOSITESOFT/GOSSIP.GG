"use client";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useRef, useState } from "react";
import Close from "../../../assets/images/modal/close.png";
import Product from "../../../assets/quiz-model/product.png";
import Image from "next/image";
import OrderConfirm from "../OrderConfirm";
import PersonalInformation from "../PersonalInformation";

const OrderSummary = (props: any) => {
  const cancelButtonRef = useRef(null);

  const [openQ, setOpenQ] = useState<Boolean>(false);

  const onClickOrderConfirmScreen = (e: any) => {
    props.close();
    setOpenQ(!openQ);
  };

  const [openW, setOpenW] = useState<Boolean>(false);

  const onClickPersonalInfo = (e: any) => {
    props.close();
    setOpenW(!openW);
  };

  return (
    <>
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
              <Dialog.Panel className="fixed bg-bodycolor inset-[70px] w-[375px]  mw-lg:inset-[30px] mw-sm:inset-0  mw-lg:left-auto max-h-[812px] mw-sm:w-full dark:bg-brandDark3 left-auto  overflow-y-auto scrollbar-thin   scrollbar-track-bodycolor  scrollbar-thumb-darkScollorBarColor  dark:scrollbar-track-brandDark2 ">
                {/* top   */}
                <div className="flex flex-col  h-full">
                  <div className="relative ">
                    <p className="pt-[16px] pl-[16px] text-[24px] font-bold dark:text-brandLightOpacity100 montserratfont text-left">
                      Order Summary
                    </p>
                    <div
                      onClick={() => props.close()}
                      className="dark:bg-brandLightOpacity10 hover:bg-brandLightOpacity50 bg-brandLightOpacity30 hover:dark:bg-brandLightOpacity20  h-[40px] w-[40px] rounded-full absolute top-3 right-3 flex justify-center items-center content-center"
                    >
                      <Image
                        src={Close}
                        className="brightness-0 dark:brightness-100"
                        alt="Close"
                      />
                    </div>
                  </div>
                  <div className="mx-[16px] mt-[4px] ">
                    <p
                      onClick={(e) => onClickPersonalInfo(e)}
                      className="border-b-[1px] w-fit cursor-pointer leading-none border-b-brandDark2 dark:border-b-brandLightOpacity70  montserratfont text-[14px] text-brandDark2 dark:text-brandLightOpacity70 font-normal"
                    >
                      &lt;&lt;&nbsp;Go to personal information
                    </p>
                  </div>
                  <div className="mx-[16px] mt-[24px]">
                    <p className="montserratfont leading-[23px] text-left font-semibold dark:text-brandLightOpacity100 text-[16px]">
                      Congratulations! Confirm your details and make this yours!
                    </p>
                    <div className="mt-[16px]">
                      <Image src={Product} alt="Product" />
                    </div>
                    <p className="pt-[14px] montserratfont text-left font-medium text-[14px] dark:text-brandLightOpacity100">
                      Samsung QN90B QLED TV (45 inch)&nbsp;<span>-</span>&nbsp;1
                      unit
                    </p>
                    <p className="montserratfont text-[14px] dark:text-brandLightOpacity70 text-left ">
                      Snow white color, leather belt
                    </p>
                    <div className="text-left p-[12px] w-[343px] h-[227px] bg-brandLightOpacity50 dark:bg-brandLightOpacity5 border-[1px] border-brandLightOpacity100 dark:border-brandLightOpacity10 rounded mt-[20px]">
                      <p className="montserratfont font-semibold dark:text-brandLightOpacity100 text-[16px]">
                        Delivery Address
                      </p>
                      <p className="montserratfont pt-[10px]  dark:text-brandLightOpacity100 text-[14px] font-light">
                        Naveen G
                      </p>
                      <p className="montserratfont dark:text-brandLightOpacity100 text-[14px] font-light">
                        ABC Building Second floor 2B
                      </p>
                      <p className="montserratfont dark:text-brandLightOpacity100 text-[14px] font-light">
                        Abc road near abc bank
                      </p>
                      <p className="montserratfont dark:text-brandLightOpacity100 text-[14px] font-light">
                        Indiranagar
                      </p>
                      <p className="montserratfont dark:text-brandLightOpacity100 text-[14px] font-light">
                        Bengaluru, Karnatka 560037
                      </p>
                      <p className="montserratfont pt-[8px] dark:text-brandLightOpacity100 text-[14px] font-light">
                        Mobile -<span className="font-semibold">123456788</span>
                      </p>
                      <p className="montserratfont cursor-pointer pt-[8px] dark:text-brandLightOpacity70 text-[12px] border-b-[1px] w-fit leading-none border-b-brandLightOpacity70">
                        Change Address
                      </p>
                    </div>
                    <p className="pl-[8px] pt-[8px] italic text-left montserratfont text-[14px] dark:text-brandLightOpacity70">
                      Estimated delivery by
                      <span className="text-brandDark3 font-medium dark:text-brandLightOpacity100">
                        24 July
                      </span>
                    </p>
                  </div>
                  <div className="mt-[25px]">
                    <a
                      onClick={(e) => onClickOrderConfirmScreen(e)}
                      className={`done_btn h-[42px] flex  items-center  justify-center content-center mt-[8px] w-[230px] bg-brand   hover:bg-[#ec5d5f] rounded-3xl	text-center m-auto text-[16px]	leading-6	 text-white dark:text-brandLightOpacity100	font-semibold montserratfont cursor-pointer mw-sm:w-[230px]  mw-sm3:text-[14px]  mw-sm3:w-[55%] mw-sm:text-base mw-sm:text-semibold`}
                    >
                      Confirm
                    </a>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <OrderConfirm open={openQ} close={() => setOpenQ(!openQ)} />
      <PersonalInformation open={openW} close={() => setOpenW(!openW)} />
    </>
  );
};

export default OrderSummary;
