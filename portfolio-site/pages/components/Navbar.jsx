import cntl from 'cntl';
import React from 'react';
import { 
  BsMoonFill,
  BsMoon,
 } from "react-icons/bs";

 const jsoncfg = require("../../siteBuildConfig.json");
 const cfg = JSON.parse(JSON.stringify(jsoncfg));

const nav = cntl`
  py-10
  mb-12
  flex
  justify-between
`;
const navHeader = cntl`
  text-xl
  font-bold
  text-textColor_LightMode
  dark:text-textColor_DarkMode
`;
const navUl = cntl`
  flex
  items-center
`;
const resumeSection = cntl`
  px-4
  py-2
  rounded-md
  ml-8
  font-medium
  text-textColor_LightMode
  dark:text-textColor_DarkMode
`;
const resumeButton = cntl`
  text-xl
  font-bold
  text-textColor_LightMode
  dark:text-textColor_DarkMode
`;
const modeSelectLight = cntl`
  cursor-pointer
  text-2xl
  text-iconColor_SocialLight
`;
const modeSelectDark = cntl`
  cursor-pointer
  text-2xl
  text-iconColor_SocialDark
`;

export default function Navbar(props)  {
  const source = cfg.siteBuildConfig.navbarSection;
    return (
        <nav className={nav}>
        <h1 className={navHeader}>{source.title}</h1>
        <ul className={navUl}>
          <li>
            <a
              className={resumeSection}
              href={source.resumeURL}
              >
              <span className={resumeButton}>{source.resumeTitle}</span>
            </a>
          </li>
              <li>
                {props.arg ? <BsMoon onClick={() => props.cb(!props.arg)} className={modeSelectDark} /> :
                 <BsMoonFill onClick={() => props.cb(!props.arg)} className={modeSelectLight} />}
              </li>
        </ul>
      </nav>
    )
}