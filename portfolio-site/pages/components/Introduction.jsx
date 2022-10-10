import cntl from "cntl";
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

import profilePic from "../../public/dev-zolko.jpg";
import profilePicDark from "../../public/dev-zolko-dark.jpg";

const jsoncfg = require("../../siteBuildConfig.json");
const cfg = JSON.parse(JSON.stringify(jsoncfg));

const textWrapper = cntl`
  text-center
  p-10
`;
const titleHeader = cntl`
  text-5xl
  py-2
  font-medium
  md:text-6xl
  text-textColor_LightMode
  dark:text-textColor_DarkMode
`;
const occupationHeader = cntl`
  text-2xl
  py-2
  md:text-3xl
  text-textColor_LightMode
  dark:text-textColor_DarkMode
`;
const introductionWrapper = cntl`
  text-md
  py-5
  leading-8
  md:text-xl
  max-w-lg
  mx-auto
  text-textColor_LightMode
  dark:text-textColor_DarkMode
`;
const socialWrapper = cntl`
  text-5xl
  flex 
  justify-center
  gap-16
  py-3
  text-gray-600
`;
const socialIcon = cntl`
  dark:text-iconColor_SocialDark
  text-iconColor_SocialLight
`;
const profile = cntl`
  mb-10
  shadow-2xl
  shadow-gray-800
  border-4
  relative
  mx-auto
  bg-gradient-to-b from-teal-500
  rounded-full
  w-80
  h-80
  mt-20
  overflow-hidden
  md:h-96
  md:w-96
  border-textColor_LightMode
  dark:border-textColor_DarkMode 
`;

export default function Introduction(props) {
  const source = cfg.siteBuildConfig.introductionSection;
    return (
      <div>
          <div className={textWrapper}>
            <h2 className={titleHeader}>
              {source.title}
            </h2>
            <h3 className={occupationHeader}>
              {source.occupation}
            </h3>
            <p className={introductionWrapper}>
             {source.introduction}
            </p>
          </div>
          <div className={socialWrapper}>
            <a href={source.instagramURL}>
              {props.arg ? <AiFillInstagram className={socialIcon}/> :
            <AiOutlineInstagram className={socialIcon}/>}</a>
            <a href={source.linkedinURL}>
              {props.arg ? <AiFillLinkedin className={socialIcon} /> :
            <AiOutlineLinkedin className={socialIcon}/>}</a>
            <a href={source.githubURL}>
              {props.arg ? <AiFillGithub className={socialIcon}/> :
            <AiOutlineGithub className={socialIcon}/>}</a>
          </div>
          <div className={profile}>
            {props.arg ? <Image src={profilePicDark} layout="fill" objectFit="cover" alt="" /> :
            <Image src={profilePic} layout="fill" objectFit="cover" alt="" />}
          </div>
      </div>
    )
}
