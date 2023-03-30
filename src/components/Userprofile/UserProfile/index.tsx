import React from "react";
import Image from "next/image";
import bannerimg from "../../../assets/user-profile/banner.png";
import profileimg from "../../../assets/user-profile/profile.png";
import pc from "../../../assets/user-profile/airplay.png";
import valorant from "../../../assets/user-profile/valorant.png";
import twitter from "../../../assets/user-profile/twitter.png";
import instagram from "../../../assets/user-profile/instagram.png";
import editprofile from "../../../assets/user-profile/edit.png";
import styles from "./style.module.css";
const ProfileDetail = () => {
  return (
    <>
      <div className={` ${styles.banner_image}  relative h-[190px]`}>
        <Image
          src={bannerimg}
          className="banner w-full h-full object-cover  "
          alt="banner "
        />
        <div className="dark:bg-brandLightOpacity10 rounded-3xl inline-block px-4	 py-2.5 absolute top-6	right-6	 cursor-pointer	">
          <Image
            src={editprofile}
            alt="edit user"
            className="inline-block w-[20px] h-[20px] mr-2	"
          />{" "}
          <span className="text-base  font-semibold leading-5	dark:text-brandLightOpacity100	montserratfont">
            Edit Profile
          </span>
        </div>
      </div>
      <div className="profile_description relative">
        <div className="profle-image ml-[50px]  mt-[-80px] h-[160px] w-[160px] ">
          <Image
            src={profileimg}
            className="w-full h-full object-cover"
            alt="profile-image"
          />
        </div>
        <div className="profile_detail flex  justify-between pt-[15px] pr-[80px] pb-[50px] pl-[80px]">
          <div className="about-user w-[65%] border-l-2	dark:border-brand pl-3">
            <h3 className="title text-2xl leading-7	font-bold montserratfont	 dark:text-brandLightOpacity100">
              Naveen
            </h3>
            <h5 className="rank text-lg leading-6 font-normal		tracking-[0.03em]	dark:text-brandLightOpacity100 robotoslub py-2.5	">
              I’m not a player, I’m a gamer.
            </h5>
            <p className="joined-data dark:text-brandLightOpacity70 font-medium montserratfont leading-4	 text-sm">
              Joined Feb 2023
            </p>
            <p className="about-user-description montserratfont text-base leading-7	font-normal dark:text-brandLightOpacity100 pt-5	">
              Naveen has been a passionate Esports fan since he was a kid. He
              has been a freelance Esports player since 2014 and has been on the
              Gossip team since the start.
            </p>
          </div>
          <div className="about-rank w-[45%]">
            <div className="plyaing-detail">
              <h4 className="text-base dark:text-brandLightOpacity100 leading-5">
                Currently playing:
              </h4>
              <div className="flex ">
                <div>
                  <Image alt="pc" src={pc} /> <span>PC</span>
                </div>
                <div>
                  <Image alt="pc" src={valorant} /> <span>Valorant</span>
                </div>
              </div>
            </div>
            <div className="more">
              <div className="saved">
                <h4>saved</h4>
                <p>50 articles</p>
              </div>
              <div className="social-link">
                <h4>Social Links:</h4>
                <div className="image">
                  <Image src={instagram} alt="" />
                  <Image src={twitter} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDetail;
