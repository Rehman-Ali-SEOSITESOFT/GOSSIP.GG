import SectionSaprator from "@/components/SecSaprator";
import React, { useState } from "react";

const QuizHistory = () => {
  const [openTab, setOpenTab] = useState<number | null>(1);
  const [open, setOpen] = useState<boolean | null>(false);
  const onClickOpenModal = () => {
    setOpen(!open);
  };
  return (
    <>
      <section className="quiz_history_wrapper">
        <div className="global-section-width">
          <div className="2xl:container">
            <div className="mt-[52px] ">
              <SectionSaprator title="Quiz history" />
            </div>
            <div className="tabss relative mt-[56px]">
              <ul className="flex full listTabUser before:content-[''] before:w-full before:max-w-[1390px] before:left-0 before:right-0 before:top-[31px] before:absolute before:m-auto before:h-[1px] dark:before:bg-brandLightOpacity10 before:bg-grayCard">
                <li className="">
                  <a
                    className={
                      "text-base   mw-sm1:text-sm   montserratfont  leading-5   capitalize  pb-[8px]  " +
                      (openTab === 1
                        ? " dark:text-brand border-b-2 border-brandDark2   dark:border-b-brand font-bold	"
                        : "dark:bg-brandDark2   dark:text-brandLightOpacity70 font-normal  ")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    For You
                  </a>
                </li>
                <li className="pl-[72px]  mw-md:pl-[30px] ">
                  <a
                    className={
                      "text-base   mw-sm1:text-sm   montserratfont  leading-5   capitalize  pb-[8px]  " +
                      (openTab === 2
                        ? " dark:text-brand border-b-2 border-brandDark2   dark:border-b-brand font-bold	"
                        : "dark:bg-brandDark2   dark:text-brandLightOpacity70 font-normal  ")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    For All Players
                  </a>
                </li>
              </ul>
              <div className="mb-6">
                <div className="tab-content tab-space w-full pt-12 h-full min-h-[800px] mw-md:min-h-[600px]	">
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  >
                    <div className="for-you-section text-center">
                      <p className="montserratfont font-normal text-base leading-5 dark:text-brandLightOpacity100 text-brandDark2">
                        You have not yet played any quizzes!
                      </p>
                      <h5 className="text-brandDark2 dark:text-brandLightOpacity100 font-semibold test-base leading-5  montserratfont py-12 pb-28">
                        Play today's quiz
                        <a href="#" className="underline underline-offset-4	">
                          &nbsp;here.
                        </a>
                      </h5>
                    </div>
                  </div>
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    <div className="for-you-section text-center">
                      <p className="montserratfont font-normal text-base leading-5 dark:text-brandLightOpacity100 text-brandDark2">
                        You have not yet played any quizzes!
                      </p>
                      <h5 className="text-brandDark2 dark:text-brandLightOpacity100 font-semibold test-base leading-5  montserratfont py-12 pb-28">
                        Play today's quiz
                        <a href="#" className="underline underline-offset-4	">
                          &nbsp;here for all players.
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="absolute top-[0px] right-[0px] ">
                <select className="w-[300px] py-[20px] bg-[#2E2A2B] border-[1px] border-brandLightOpacity50 rounded-lg pl-[18px] absolute right-[0px] montserratfont text-[16px] font-medium capitalize leading-normal color-brandLightOpacity70">
                  <option
                    value="1"
                    className="montserratfont text-[16px] font-medium capitalize leading-normal color-brandLightOpacity70 py-[12px]"
                  >
                    One
                  </option>
                  <option value="2">Two</option>
                </select>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuizHistory;
