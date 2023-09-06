import React from "react";
import { Disclosure } from "@headlessui/react";
const FaqsAccordian = (props: any) => {
  return (
    <>
      <div className="w-full ">
        <div className="mx-auto w-full rounded-2xl   ">
          <Disclosure>
            {(panel) => {
              const { open, close } = panel;
              return (
                <>
                  <Disclosure.Button
                    onClick={() => {
                      if (!open) {
                        close();
                      }

                      // Now we call the function to close the other opened panels (if any)
                      props.toggle({ ...panel, key: props.index });
                    }}
                    className="flex w-full justify-between rounded-lg pt-[17px] pb-[17px] text-left items-center"
                  >
                    <p className="montserratfont text-brandDark2 text-[18px] font-medium leading-normal dark:text-[#E5E5E5] mw-lg:text-[16px] mw-md:text-[14px]">
                      {props.heading}
                    </p>
                    <i
                      className={`fa-solid fa-angle-down dark:text-[#E5E5E5] text-[16px] ${
                        open ? "rotate-180 transform" : null
                      }`}
                    ></i>
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-sm dark:text-[#fff] pb-[15px]">
                    If you&#39;re unhappy with your purchase for any reason,
                    email us within 90 days and we&#39;ll refund you in full, no
                    questions asked.
                  </Disclosure.Panel>
                </>
              );
            }}
          </Disclosure>
        </div>
      </div>
    </>
  );
};

export default FaqsAccordian;
