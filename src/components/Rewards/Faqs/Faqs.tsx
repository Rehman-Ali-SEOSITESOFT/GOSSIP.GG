import React, { useState } from "react";
import FaqsAccordian from "./FaqsAccordian/FaqsAccordian";
import style from "./Faqs.module.css";
const Faqs = () => {
  interface Faqslist {
    heading: string;
  }
  const [list, setList] = useState<Faqslist[]>([
    {
      heading: "About the quiz",
    },
    {
      heading: "How to play",
    },
    {
      heading: "Terms and conditons",
    },
    {
      heading: "Disclaimer",
    },
    {
      heading: "Customer Support",
    },
  ]);

  const [activeDisclosurePanel, setActiveDisclosurePanel] = useState<any>(null);

  function togglePanels(newPanel) {
    if (activeDisclosurePanel) {
      if (
        activeDisclosurePanel.key !== newPanel.key &&
        activeDisclosurePanel.open
      ) {
        activeDisclosurePanel.close();
      }
    }

    setActiveDisclosurePanel({
      ...newPanel,
      open: !newPanel.open,
    });
  }

  return (
    <>
      <section className="mb-[88px] mw-md:mb-[40px]">
        <div className="global-section-width ">
          <div className="2xl:container">
            <div className="mb-[16px]">
              <h4 className="montserratfont text-[18px] leading-normal font-bold dark:text-[#ED4E50] mw-md:text-[20px] mw-sm4:text-[16px] mw-sm4:font-extrabold">
                FAQs
              </h4>
            </div>
            <div className="bg-[#fff] pr-[5px] dark:bg-[#2E2A2B]   rounded-[8px] border-grayCard border  ">
              <div
                className={`faqs_accordians bg-[#fff]  dark:bg-[#2E2A2B] pt-[13px] px-[24px] overflow-x-scroll ${style.scrooling} mr-[8px] `}
              >
                {list.map((e, idx) => (
                  <div
                    key={idx}
                    className="border-b-[1px] text-brandDark2 dark:border-brandLightOpacity10"
                  >
                    <FaqsAccordian
                      toggle={togglePanels}
                      index={idx}
                      heading={e.heading}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;
