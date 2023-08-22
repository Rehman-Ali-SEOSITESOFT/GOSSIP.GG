"use client";
import React, { useState } from "react";
import logo from "../../assets/quiz-model/logo.png";
import greencircle from "../../assets/quiz-model/green-icon.svg";
import doublearrow from "../../assets/quiz-model/duble-arrow.png";
import close from "../../assets/quiz-model/close.png";
import Image from "next/image";
import IntroScreen from "../QuizScreen/IntroScreen";
import QuestionScreen from "../QuizScreen/QuestionScreen";
import AnswerSubmitScreen from "../QuizScreen/AnswerSubmittedScreen";
import TermsAndCondition from "../QuizScreen/TermsAndConditonScreen";
import WinnerScreenTwo from "../QuizScreen/WinnerScreenTwo";
import AddScreen from "../QuizScreen/AdScreen";

const QuizRatio = () => {
  const [openIntro, setOpenIntro] = useState<Boolean>(true);
  const [closeQuizBox, setCloseQuizBox] = useState<Boolean>(true);

  const hanldeClosedQuiz = () => {
    console.log("closed");
    setCloseQuizBox(!closeQuizBox);
  };
  const hanldeOpenedQuiz = () => {
    setOpenIntro(!openIntro);
  };
  const openedQuizBox = () => {
    console.log("working");
    setCloseQuizBox(!closeQuizBox);
  };

  return (
    <>
      <div className="quiz-ration fixed right-[15px] bottom-[100px] w-full max-w-[130px] ">
        {/*   QUIZED BOX */}

        <div
          className={`relative  ${
            closeQuizBox ? "quiz-box-opened" : "quiz-box-closed"
          }`}
        >
          <div
            className="closed absolute right-0 top-[-10px]  bg-brandLightOpacity100  dark:bg-brandLightOpacity10 dark:hover:bg-brandLightOpacity20 cursor-pointer	  z-10	 rounded-3xl	"
            onClick={hanldeClosedQuiz}
          >
            <span className="block p-1">
              <Image src={close} alt="" className="w-4 h-4	" />
            </span>
          </div>
          <div className="logo-close  pl-2.5 pb-2.5	 relative">
            <div
              className="logo-quiz-brand bg-brand w-[89px] h-[89px] drop-box-shadow rounded-full cursor-pointer	"
              onClick={hanldeOpenedQuiz}
            >
              <span className="green-cicle absolute right-[12px]">
                <Image src={greencircle} alt="" className="w-4 h-4" />
              </span>

              <span className="circle-logo">
                <Image src={logo} alt="" className=" w-[89px] h-[89px]" />
              </span>

              <span className="quiz-title flex items-center justify-center h-full">
                <h4 className="logo text-white text-center text-base leading-normal	 font-semibold	montserratfont capitalize ">
                  quiz{" "}
                  <span>
                    {" "}
                    <Image src={doublearrow} className="inline-block" alt="" />
                  </span>
                </h4>
              </span>
            </div>
          </div>
          <div className="timer quiz-timer  flex flex-col items-center justify-center bg-brand rounded-full w-[130px] h-[43px]">
            <p className="m-0 leading-3	text-[10px] montserratfont capitalize  font-medium text-white">
              Quiz ends in
            </p>
            <h4 className="text-base text-white montserratfont capitalize font-bold">
              00 : 57 : 00
            </h4>
          </div>
        </div>

        {/*   QUIZED BUTTON */}
        <div className={`relative cursor-pointer `}>
          <div
            onClick={openedQuizBox}
            className={`timer quiz-timer  flex flex-col items-center justify-center bg-brand rounded-full w-[130px] h-[43px] ${
              closeQuizBox ? "quiz-btn-closed" : "quiz-btn-opened"
            }`}
          >
            <span className="text-white montserratfont text-base font-bold leading-normal">
              Quiz
            </span>
          </div>
        </div>
      </div>

      <IntroScreen open={openIntro} close={hanldeOpenedQuiz} />
      {/* <AddScreen open={openIntro} close={hanldeOpenedQuiz} /> */}
      {/* <QuestionScreen open={openIntro} close={hanldeOpenedQuiz} /> */}
      {/* <AnswerSubmitScreen open={openIntro} close={hanldeOpenedQuiz} /> */}
      {/* <TermsAndCondition open={openIntro} close={hanldeOpenedQuiz} /> */}
      {/* <WinnerScreenTwo open={openIntro} close={hanldeOpenedQuiz} /> */}
      {/* <QuizStartTiemScreen open={openIntro} close={hanldeOpenedQuiz} /> */}
      {/* <AnsweredIncorrectly open={openIntro} close={hanldeOpenedQuiz} /> */}
    </>
  );
};

export default QuizRatio;
