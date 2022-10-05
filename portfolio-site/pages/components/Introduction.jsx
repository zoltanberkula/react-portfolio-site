import React from 'react';
import Image from "next/image";
import {
  AiFillLinkedin,
  AiOutlineLinkedin,
  AiFillInstagram,
  AiOutlineInstagram,
  AiFillGithub,
  AiOutlineGithub,
} from "react-icons/ai";

const igURL = "https://www.instagram.com/zltn_brkl/";
const liURL = "https://www.linkedin.com/in/zolt%C3%A1n-berkula-ba44a91b0/";
const ghURL = "https://github.com/Zolko1995";

//FILES_BEGIN
import profilePic from "../../public/dev-zolko.jpg";
import profilePicDark from "../../public/dev-zolko-dark.jpg";
//FILES_END
export default function Introduction(props) {
    return (
      <div>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 font-medium md:text-6xl text-textColor_LightMode dark:text-textColor_DarkMode">
              Zoltán Berkula
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl text-textColor_LightMode dark:text-textColor_DarkMode">
              Junior Sofware Engineer
            </h3>
            <p className="text-md py-5 leading-8 md:text-xl max-w-lg mx-auto text-textColor_LightMode dark:text-textColor_DarkMode">
              I am an ambitious self-taught software engineer with the interest
              not only in virtual but also in physical realisations of
              information technology, who likes new challenges and continuous
              learning. My career goal is building software and hardware that
              works together in harmony and makes our lives a bit easier.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href={igURL}>{props.arg ? <AiFillInstagram className="dark:text-iconColor_SocialDark"/> : <AiOutlineInstagram className="text-iconColor_SocialLight" />}</a>
            <a href={liURL}>{props.arg ? <AiFillLinkedin className="dark:text-iconColor_SocialDark" /> : <AiOutlineLinkedin className="text-iconColor_SocialLight"/>}</a>
            <a href={ghURL}>{props.arg ? <AiFillGithub className="dark:text-iconColor_SocialDark" /> : <AiOutlineGithub className="text-iconColor_SocialLight"/>}</a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 ">
            {props.arg ? <Image src={profilePicDark} layout="fill" objectFit="cover" alt="" /> :
            <Image src={profilePic} layout="fill" objectFit="cover" alt="" />}
          </div>
          </div>
    )
}