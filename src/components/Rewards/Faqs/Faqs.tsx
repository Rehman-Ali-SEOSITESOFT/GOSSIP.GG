import React, { useState } from "react";
import FaqsAccordian from "./FaqsAccordian/FaqsAccordian";

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
  return (
    <>
      <section className="mb-[88px]">
        <div className="global-section-width ">
          <div className="2xl:container">
            <div className="mb-[10px]">
              <h4 className="montserratfont text-[24px] leading-normal font-bold text-[#ED4E50]">
                FAQs
              </h4>
            </div>
            <div className="faqs_accordians bg-[#2E2A2B] rounded-[8px] px-[24px] ">
              {list.map((e, idx) => (
                <div
                  key={idx}
                  className="border-b-[1px] border-brandLightOpacity10"
                >
                  <FaqsAccordian heading={e.heading} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;
