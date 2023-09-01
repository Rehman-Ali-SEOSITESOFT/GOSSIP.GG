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
import QuizStartTiemScreen from "../QuizScreen/QuizStartTimeScreen";
import AnsweredIncorrectly from "../QuizScreen/AnsweredIncorrectly";
import AnsweredCorrectly from "../QuizScreen/AnsweredCorrectly";
import PrizeOfTheDay from "../QuizScreen/PrizeOfTheDay";
import QuizEnded from "../QuizScreen/QuizEnded";
import OrderConfirm from "../QuizScreen/OrderConfirm";
import OrderSummary from "../QuizScreen/OrderSummary";
import PersonalInformation from "../QuizScreen/PersonalInformation";
import Countdown from "react-countdown";
import NewIntroScreen from "../QuizScreen/NewIntroScreen";

const QuizRatio = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const onClickPlay = () => {
    setOpen(!open);
  };

  const Completionist = () => (
    <span
      onClick={() => onClickPlay()}
      className="cursor-pointer montserratfont text-[14px] font-semibold leading-[17.07px] "
    >
      Quiz Result <i className="fa-solid fa-angle-right"></i>
      <i className="fa-solid fa-angle-right"></i>
    </span>
  );

  const [openIntro, setOpenIntro] = useState<Boolean>(false);
  const [closeQuizBox, setCloseQuizBox] = useState<Boolean>(true);
  const [hello, setHello] = useState<String>("Quiz Result");
  const [completed, setCompleted] = useState<Boolean>(false);
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

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state

      return (
        <>
          <Completionist />
        </>
      );
    } else {
      // Render a countdown
      return (
        <div className="timer quiz-timer  flex flex-col items-center justify-center bg-brand rounded-full w-[130px] h-[43px]">
          <p
            className={` m-0 leading-3	text-[10px] montserratfont capitalize  font-medium text-white`}
          >
            Quiz ends in
          </p>
          <span>
            {hours}:{minutes}:{seconds}
          </span>
        </div>
      );
    }
  };

  return (
    <>
      <div className="quiz-ration fixed right-[15px] bottom-[100px]	 w-full max-w-[130px] ">
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
              <Image
                src={close}
                className="brightness-0 dark:brightness-100 w-4 h-4"
                alt=""
              />
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
                  quiz
                  <span>
                    <Image src={doublearrow} className="inline-block" alt="" />
                  </span>
                </h4>
              </span>
            </div>
          </div>
          <div className="timer quiz-timer  flex flex-col items-center justify-center bg-brand rounded-full w-[130px] h-[43px]">
            {/* <p
              className={` m-0 leading-3	text-[10px] montserratfont capitalize  font-medium text-white`}
            >
              Quiz ends in
            </p> */}

            <h4 className="text-base text-white montserratfont capitalize font-bold">
              {open ? (
                <Completionist />
              ) : (
                <Countdown date={Date.now() + 10000} renderer={renderer} />
              )}
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
      {/* <IntroScreen open={openIntro} close={hanldeOpenedQuiz} /> */}
      <NewIntroScreen open={openIntro} close={hanldeOpenedQuiz} />

      {/* <WinnerScreenTwo open={openIntro} close={hanldeOpenedQuiz} /> */}
      <AddScreen open={open} close={onClickPlay} isSeeResult={true} />
      {/* <AddScreen open={openIntro} close={hanldeOpenedQuiz} /> */}
      {/* <QuestionScreen open={openIntro} close={hanldeOpenedQuiz} /> */}
      {/* <AnswerSubmitScreen open={openIntro} close={hanldeOpenedQuiz} /> */}
      {/* <TermsAndCondition open={openIntro} close={hanldeOpenedQuiz} /> */}
      {/* <WinnerScreenTwo open={openIntro} close={hanldeOpenedQuiz} /> */}

      {/* <QuizStartTiemScreen open={openIntro} close={hanldeOpenedQuiz} /> */}
      {/* <AnsweredIncorrectly open={openIntro} close={hanldeOpenedQuiz} /> */}
      {/* <AnsweredCorrectly open={openIntro} close={hanldeOpenedQuiz} /> */}
      {/* <QuizEnded open={openIntro} close={hanldeOpenedQuiz} /> */}
      {/* <PrizeOfTheDay open={openIntro} close={hanldeOpenedQuiz} /> */}
      {/* <OrderConfirm open={openIntro} close={hanldeOpenedQuiz} /> */}
      {/* <OrderSummary open={openIntro} close={hanldeOpenedQuiz} /> */}
      {/* <PersonalInformation open={openIntro} close={hanldeOpenedQuiz} /> */}
    </>
  );
};

export default QuizRatio;
