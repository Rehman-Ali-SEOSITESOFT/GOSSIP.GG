import Link from "next/link";
import React from "react";
import styles from "./DealsArticle.module.css";
import Image from "next/image";
import NavSlider from "../Article/Slider";
import DealsArticleTags from "./DealsArticleTags";
const DealsArticleMain = (props: any) => {
  return (
    <>
      <section className="article_banner_wrapper global-section-width-article">
        <div className="2xl:container">
          <div className="flex mw-lg:block">
            {/* left side starts here */}
            <div className="w-[calc(100%_-_0px)] mw-lg:w-[calc(100%_-_0px)] mx-14:w-[70%]">
              <div className="w-full">
                <div className="image_wrapper  h-[460px] w-[900px] mx-14:w-[750px] mw-xl:h-[auto] mw-12:w-[650px] mw-12:h-[auto] mw-11:w-[600px] mw-9:w-[100%] ">
                  <Image
                    src={props.bannerImage}
                    alt="banner image"
                    className=""
                  />
                  <p className="montserratfont text-[14px] leading-[17px] font-medium dark:text-brandLightOpacity70 pt-[8px]">
                    Image credit: Amazon.com
                  </p>
                </div>
                <div className="pr-[25px] mw-md:pr-[0px]  ">
                  <p className="robotoslub text-[16px] leading-[27px] tracking-[0.03em] dark:text-brandLightOpacity90 font-normal mw-md:text-[14px] mw-md:leading-[24px] pt-[40px] mw-lg:pt-[30px] mw-sm4:leading-[17px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries.
                  </p>
                  <h2 className="pt-[40px] pb-[24px] montserratfont text-[24px] leading-[30px] tracking-[0.05em] capitalize dark:text-[#E5E5E5] font-bold mw-md:pb-[20px] mw-md:pt-[20px] mw-md:text-[20px] mw-md:leading-[26px] mw-sm4:text-[14px] mw-sm4:leading-[30px] mw-sm4:pt-[16px] mw-sm4:pb-[8px]">
                    Floo flames - a new feature
                  </h2>
                  <p className="pb-[24px] robotoslub text-[16px] leading-[27px] tracking-[0.03em] dark:text-brandLightOpacity90 font-normal mw-md:text-[14px] mw-md:leading-[24px] mw-sm4:leading-[17px] mw-sm4:pb-[16px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                  </p>
                  <p className="robotoslub text-[16px] leading-[27px] tracking-[0.03em] dark:text-brandLightOpacity90 font-normal mw-md:text-[14px] mw-md:leading-[24px] mw-sm4:leading-[17px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                  </p>
                  <h2 className="pt-[40px] pb-[24px] montserratfont text-[24px] leading-[30px] tracking-[0.05em] capitalize dark:text-[#E5E5E5] font-bold mw-md:pb-[20px] mw-md:pt-[20px] mw-md:text-[20px] mw-md:leading-[26px] mw-sm4:pt-[16px] mw-sm4:pb-[8px] mw-sm4:text-[14px] mw-sm4:leading-[30px]">
                    Floo flames - a new feature
                  </h2>
                  <p className="pb-[24px] robotoslub text-[16px] leading-[27px] tracking-[0.03em] dark:text-brandLightOpacity90 font-normal mw-md:text-[14px] mw-md:leading-[24px] mw-sm4:leading-[17px] mw-sm4:pb-[12px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                  </p>
                  <p className="robotoslub text-[16px] leading-[27px] tracking-[0.03em] dark:text-brandLightOpacity90 font-normal mw-md:text-[14px] mw-md:leading-[24px] mw-sm4:leading-[17px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                  </p>
                </div>
                <div className="third_section mt-[64px]  mw-sm4:mt-[28px] ">
                  <div className="w-[80%] m-auto mw-sm1:w-[100%]">
                    {props.navImages !== null &&
                    props.navImages !== undefined ? (
                      <NavSlider
                        navImages={props.navImages}
                        mainImages={props.mainImages}
                      />
                    ) : (
                      <>
                        <Image
                          src={props.lowerImage}
                          alt="image "
                          className=""
                        />
                        <h4 className="montserratfont text-[14px] font-medium dark:text-brandLightOpacity70 pt-[8px]">
                          Image credit: Hogwrts.com
                        </h4>
                      </>
                    )}
                  </div>
                </div>
                <div className="fourth_section">
                  <h2 className="pt-[31px] pb-[24px] montserratfont text-[24px] leading-[30px] tracking-[0.05em] capitalize dark:text-[#E5E5E5] font-bold mw-md:pb-[20px] mw-md:pt-[20px] mw-md:text-[20px] mw-md:leading-[26px] mw-sm4:text-[14px] mw-sm4:leading-[30px] mw-sm4:pb-[8px]">
                    Floo flames - a new feature
                  </h2>
                  <p className="pb-[24px] robotoslub text-[16px] leading-[27px] tracking-[0.03em] dark:text-brandLightOpacity90 font-normal mw-md:text-[14px] mw-md:leading-[24px] mw-sm4:leading-[17px] mw-sm4:pb-[12px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                  </p>
                  <p className="robotoslub text-[16px] leading-[27px] tracking-[0.03em] dark:text-brandLightOpacity90 font-normal mw-md:text-[14px] mw-md:leading-[24px] mw-sm4:leading-[17px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                  </p>
                </div>
              </div>
            </div>

            {/* left side ends here */}

            {/* right side starts here */}
            <div className="ml-[32px] mw-lg:hidden">
              <h4 className="montserratfont text-[18px] font-bold uppercase leading-normal text-[#ED4E50]">
                Trending tags
              </h4>
              <DealsArticleTags />
            </div>

            {/* <div className="ml-[32px] mw-lg:ml-[0px] mw-lg:mt-[20px] mw-lg:pb-[33px] ">
              <div className="mw-sm1:border-t-2 dark:mw-sm1:border-brandLightOpacity10 mw-sm1:border-b-2 mw-sm1:pt-[16px]">
                <h4 className="text-[18px] leading-[22px] font-bold text-[#ED4E50] montserratfont uppercase pb-[16px] ">
                  LATEST
                </h4>
                <p className="montserratfont text-[16px] leading-[20px] font-bold dark:text-[#E5E5E5] pb-[20px] mw-12:text-[14px] mw-12:leading-[18px] mw-12:pb-[16px]">
                  MR Luna has announced he is stepping down as CEO
                </p>
                <p className="montserratfont text-[16px] leading-[20px] font-bold dark:text-[#E5E5E5] pb-[20px] mw-12:text-[14px] mw-12:leading-[18px] mw-12:pb-[16px]">
                  Legends of Runnetera 2023 Roadmap
                </p>
                <p className="montserratfont text-[16px] leading-[20px] font-bold dark:text-[#E5E5E5] pb-[20px] mw-12:text-[14px] mw-12:leading-[18px] mw-12:pb-[16px]">
                  What will Arcane Season 2 be about?
                </p>
                <p className="montserratfont text-[16px] leading-[20px] font-bold dark:text-[#E5E5E5] pb-[20px] mw-12:text-[14px] mw-12:leading-[18px] mw-12:pb-[16px]">
                  ARK Eggcellent Adventure Event 2023 - Possible Start Date
                </p>
              </div>
              <div className="related_topics">
                <h4 className="text-[18px] pt-[36px] mw-xl:pt-[0px] leading-[22px] font-bold text-[#ED4E50] montserratfont uppercase pb-[16px] mw-lg:pt-[20px] ">
                  Related Topics
                </h4>
                <div
                  className={`${styles.main_tags_wrapper}  mw-sm1:border-b-2  dark:mw-sm1:border-brandLightOpacity10 mw-sm1:pb-[12px]`}
                >
                  <Link
                    href=""
                    className={`${styles.tagss} bg-grayCard 
                  text-textColorGray hover:text-brandDark2 hover:bg-borderEditProfile dark:bg-brandLightOpacity10 dark:text-brandLightOpacity70 
                  dark:hover:text-brandLightOpacity100
                  dark:hover:bg-brandLightOpacity20 `}
                  >
                    Hogwarts
                  </Link>
                  <Link
                    href=""
                    className={`${styles.tagss} bg-grayCard 
                  text-textColorGray hover:text-brandDark2 hover:bg-borderEditProfile dark:bg-brandLightOpacity10 dark:text-brandLightOpacity70 
                  dark:hover:text-brandLightOpacity100
                  dark:hover:bg-brandLightOpacity20 `}
                  >
                    flame Throwers
                  </Link>
                  <Link
                    href=""
                    className={`${styles.tagss} bg-grayCard 
                  text-textColorGray hover:text-brandDark2 hover:bg-borderEditProfile dark:bg-brandLightOpacity10 dark:text-brandLightOpacity70 
                  dark:hover:text-brandLightOpacity100
                  dark:hover:bg-brandLightOpacity20 `}
                  >
                    Fire
                  </Link>
                  <Link
                    href=""
                    className={`${styles.tagss} bg-grayCard 
                  text-textColorGray hover:text-brandDark2 hover:bg-borderEditProfile dark:bg-brandLightOpacity10 dark:text-brandLightOpacity70 
                  dark:hover:text-brandLightOpacity100
                  dark:hover:bg-brandLightOpacity20 `}
                  >
                    Hogwarts
                  </Link>
                  <Link
                    href=""
                    className={`${styles.tagss} bg-grayCard 
                  text-textColorGray hover:text-brandDark2 hover:bg-borderEditProfile dark:bg-brandLightOpacity10 dark:text-brandLightOpacity70 
                  dark:hover:text-brandLightOpacity100
                  dark:hover:bg-brandLightOpacity20 `}
                  >
                    Wizards
                  </Link>
                  <Link
                    href=""
                    className={`${styles.tagss} bg-grayCard 
                  text-textColorGray hover:text-brandDark2 hover:bg-borderEditProfile dark:bg-brandLightOpacity10 dark:text-brandLightOpacity70 
                  dark:hover:text-brandLightOpacity100
                  dark:hover:bg-brandLightOpacity20 `}
                  >
                    Dragons
                  </Link>
                  <Link
                    href=""
                    className={`${styles.tagss} bg-grayCard 
                  text-textColorGray hover:text-brandDark2 hover:bg-borderEditProfile dark:bg-brandLightOpacity10 dark:text-brandLightOpacity70 
                  dark:hover:text-brandLightOpacity100
                  dark:hover:bg-brandLightOpacity20 `}
                  >
                    Hogwards
                  </Link>
                </div>
              </div>
            </div> */}
            {/* right side ends here */}
          </div>
        </div>
      </section>
      s
    </>
  );
};

export default DealsArticleMain;
