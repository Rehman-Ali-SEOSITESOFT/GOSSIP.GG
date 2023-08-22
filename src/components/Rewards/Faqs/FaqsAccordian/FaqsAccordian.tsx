import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
const FaqsAccordian = (props: any) => {
  return (
    <>
      <div className="w-full ">
        <div className="mx-auto w-full rounded-2xl   ">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg pt-[29px] pb-[16px] text-left ">
                  <p className="montserratfont text-[18px] font-semibold leading-normal text-[#fff] ">
                    {props.heading}
                  </p>
                  <i
                    className={`fa-solid fa-angle-up text-[#fff] text-[16px] ${
                      open ? "rotate-180 transform" : null
                    }`}
                  ></i>
                </Disclosure.Button>
                <Disclosure.Panel className="text-sm text-[#fff] pb-[15px]">
                  If you&#39;re unhappy with your purchase for any reason, email us
                  within 90 days and we&#39;ll refund you in full, no questions
                  asked.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </>
  );
};

export default FaqsAccordian;
