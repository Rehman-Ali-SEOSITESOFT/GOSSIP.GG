import { Dialog, Transition } from "@headlessui/react";

import React, { Fragment, useRef } from "react";

const IntroScreen = (props: any) => {
  const cancelButtonRef = useRef(null);
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
        <div className="fixed inset-[70px] left-auto mw-lg:inset-[30px] mw-sm:inset-0  mw-lg:left-auto z-10 overflow-y-auto scrollbar-thin  scrollbar-thumb-choosebox  scrollbar-track-bodycolor  scrollbar-thumb-darkScollorBarColor  dark:scrollbar-track-brandDark2 ">
          <div className="flex  max-w-[375px] h-full mw-sm:max-w-full mw-sm:w-full max-h-[812px] mw-sm:max-h-full  items-end justify-center p-4 text-center sm:items-center sm:p-0 dark:bg-brandDark3 mw-sm:items-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative dark:bg-brandDark3 transform overflow-hidden  transition-all h-full ">
                fugiat harum dolorem eaque quas. Tempora ea et distinctio animi?
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default IntroScreen;
