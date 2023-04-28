import React from "react"

const AbsArticleBreadCrum = (props: any) => {
  return (
    <>
      <section className="global-section-width-article">
        <div className="2xl:container">
          <p className="montserratfont text-[16px] leading-[20px] text-brandLightOpacity70 font-medium pt-[34px] mw-md:text-[14px] mw-sm4:text-[10px] mw-md:pt-[24px] mw-sm4:pt-[16px]">
            Home &nbsp; <span>&#x3E;</span>
            <span>&#x3E;</span>&nbsp;&nbsp;
            {props.page1}&nbsp;&nbsp;
            <span>&#x3E;</span>
            <span>&#x3E;</span>&nbsp;
            {props.page2}
          </p>
        </div>
      </section>
    </>
  )
}

export default AbsArticleBreadCrum
