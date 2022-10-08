import React from 'react';

import {AiOutlineCloud, AiFillCloud} from "react-icons/ai"
import {HiChip, HiOutlineChip} from "react-icons/hi"
import {RiWindow2Fill, RiWindow2Line} from "react-icons/ri";

const iconStyle = "inline-block"
const iconSize = 80;
const cardContainerStyle = "lg:flex gap-10";
const cardStyle = "text-center shadow-2xl shadow-gray-800 p-10 rounded-xl my-10 bg-bgColor_CardLight dark:bg-bgColor_CardDark dark:bg-opacity-20 dark:shadow-md";
const h3Style = "text-3xl py-1 font-medium text-textColor_LightMode dark:text-textColor_DarkMode";
const cardTitleStyle ="text-lg text-textColor_LightMode dark:text-textColor_DarkMode font-bold pt-8 pb-2";
const descrParagraphStyle = "font-normal py-2 text-textColor_LightMode dark:text-textColor_DarkMode ";
const techStackTitleStyle = "py-4 text-textColor_LightMode font-bold text-textColor_LightMode dark:text-textColor_DarkMode";
const techParagraphStyle = "text-textColor_LightMode dark:text-textColor_DarkMode py-1";

const embeddedTechStack = {
  lang: "C/C++",
  platform: "Arduino/ESP_IDF",
  ide: "PlatformIO",
}
const webTechStack = {
  framework1: "Node.js",
  framework2: "React.js",
  stylesheet: "TailwindCSS",
}
const cloudTechStack = {
  platform: "Google Cloud Platform",
  services: "IoT Core, PubSub, Cloud Functions, Firebase",
  tools: "Terraform, Docker",
}

export default function Skills(props)  {
    return (
        <section>
        <div>
          <h3 className={h3Style}>Skills</h3>
        </div>
        <div className={cardContainerStyle}>
          <div className={cardStyle}>
          {props.arg ? <HiChip style={{color: "#164e63"}} size={iconSize} className={iconStyle} /> :
            <HiOutlineChip style={{color: "#111827"}} size={iconSize} className={iconStyle} />}
            <h3 className={cardTitleStyle}>
              Embedded Systems & IoT
            </h3>
            <p className={descrParagraphStyle}>
              Developing firmware for microcontrollers such as ATmega2560, ATmega328p, ESP8266, ESP32 {" "}
            </p>
            <h4 className={techStackTitleStyle}>Technology Stack</h4>
            <p className={techParagraphStyle}>{embeddedTechStack.lang}</p>
            <p className={techParagraphStyle}>{embeddedTechStack.platform}</p>
            <p className={techParagraphStyle}>{embeddedTechStack.ide}</p>
          </div>
          <div className={cardStyle}>
            {props.arg ? <RiWindow2Fill style={{color: "#164e63"}} size={iconSize} className={iconStyle} /> :
            <RiWindow2Line style={{color: "#111827"}} size={iconSize} className={iconStyle} />}
            <h3 className={cardTitleStyle}>
              Web Development
            </h3>
            <p className={descrParagraphStyle}>
              Developing a dynamic web app for data telemetry and visualization with backend using close to hardware modules implemented from scratch.
            </p>
            <h4 className={techStackTitleStyle}>Technology Stack</h4>
            <p className={techParagraphStyle}>{webTechStack.framework1}</p>
            <p className={techParagraphStyle}>{webTechStack.framework2}</p>
            <p className={techParagraphStyle}>{webTechStack.stylesheet}</p>
          </div>
          <div className={cardStyle}>
          {props.arg ? <AiFillCloud style={{color: "#164e63"}} size={iconSize} className={iconStyle}/> :
           <AiOutlineCloud style={{color: "#111827"}} size={iconSize} className={iconStyle}/>}
            <h3 className={cardTitleStyle}>
              Cloud, Backend & DevOps
            </h3>
            <p className={descrParagraphStyle}>
              Creating a Cloud Infrastructure used for data telemetry and remote control using services provided by GCP, easy infrastructure deployment using IaC.
            </p>
            <h4 className={techStackTitleStyle}>Technology Stack</h4>
            <p className={techParagraphStyle}>{cloudTechStack.platform}</p>
            <p className={techParagraphStyle}>{cloudTechStack.services}</p>
            <p className={techParagraphStyle}>{cloudTechStack.tools}</p>
          </div>
        </div>
      </section>
    );
    };