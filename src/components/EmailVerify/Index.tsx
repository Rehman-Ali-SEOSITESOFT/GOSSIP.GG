import React from "react";

const EmailVerify = () => {
  return (
    <section className="emailverify dark:bg-brand py-1.5 fixed bottom-0 right-0 left-0 too-auto	mw-lg:bottom-[70px]">
      <div className="global-section-width">
        <div className="2xl:container">
          <div className="w-full">
            <p className="text-base mw-sm:text-sm	 leading-5 montserratfont font-semibold dark:text-brandLightOpacity100">
              Please verify your account to access all of our features.{" "}
              <a href="" className="underline underline-offset-2	">
                Re-send email
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailVerify;
