import React from 'react';

import {AiOutlineCloud, AiFillCloud,
  AiFillCode, AiOutlineCode,
} from "react-icons/ai"

import { IoBrowsersOutline, IoBrowsers } from "react-icons/io"

const iconStyle = "inline-block"
const cardStyle = "text-center shadow-2xl shadow-gray-800 p-10 rounded-xl my-10 bg-bgColor_CardLight dark:bg-bgColor_CardDark dark:bg-opacity-20 dark:shadow-md"


export default function Skills(props)  {
    return (
        <section>
        <div>
          <h3 className="text-3xl py-1 font-medium text-textColor_LightMode dark:text-textColor_DarkMode">Skills</h3>
        </div>
        <div className="lg:flex gap-10">
          <div className={cardStyle}>
          {props.arg ? <AiFillCode style={{color: "#164e63"}} size={100} className="inline-block" /> :
            <AiOutlineCode style={{color: "#111827"}} size={100} className="inline-block" />}
            <h3 className="text-lg text-textColor_LightMode dark:text-textColor_DarkMode font-medium pt-8 pb-2">
              Embedded Systems & IoT
            </h3>
            <p className="py-2 ">
              Developing firmware for microcontrollers such as ATmega2560, ATmega328p, ESP8266, ESP32 {" "}
            </p>
            <h4 className="py-4 text-textColor_LightMode font-medium">Technology Stack</h4>
            <p className="text-textColor_LightMode dark:text-textColor_DarkMode py-1">C/C++</p>
            <p className="text-textColor_LightMode dark:text-textColor_DarkMode py-1">Arduino/ESP-IDF</p>
            <p className="text-textColor_LightMode dark:text-textColor_DarkMode py-1">PlatformIO</p>
          </div>
          <div className={cardStyle}>
            {props.arg ? <AiFillCloud style={{color: "#164e63"}} size={100} className="inline-block" /> :
            <AiOutlineCloud style={{color: "#111827"}} size={100} className={iconStyle} />}
            <h3 className="text-lg font-medium pt-8 pb-2">
              Web Development
            </h3>
            <p className="py-2 ">
              Developing a dynamic web app for data telemetry and visualization with backend using close to hardware modules implemented from scratch.
            </p>
            <h4 className="py-4 text-textColor_LightMode font-medium">Technology Stack</h4>
            <p className="text-textColor_LightMode dark:text-textColor_DarkMode py-1">Node.js</p>
            <p className="text-textColor_LightMode dark:text-textColor_DarkMode py-1">React.js</p>
            <p className="text-textColor_LightMode dark:text-textColor_DarkMode py-1">TailwindCSS</p>
          </div>
          <div className={cardStyle}>
          {props.arg ? <AiFillCloud style={{color: "#164e63"}} size={100} className="inline-block"/> :
           <AiOutlineCloud style={{color: "#111827"}} size={100} className="inline-block"/>}
            <h3 className="text-lg font-medium pt-8 pb-2">
              Cloud, Backend & DevOps
            </h3>
            <p className="py-2 ">
              Creating a Cloud Infrastructure used for data telemetry and remote control using services provided by GCP, easy infrastructure deployment using IaC.
            </p>
            <h4 className="py-4 text-textColor_LightMode font-medium">Technology Stack</h4>
            <p className="text-textColor_LightMode dark:text-textColor_DarkMode py-1">Google Cloud Platform</p>
            <p className="text-textColor_LightMode dark:text-textColor_DarkMode py-1">IoT Core, PubSub, Cloud Functions, Firebase</p>
            <p className="text-textColor_LightMode dark:text-textColor_DarkMode py-1">Terraform, Docker</p>
          </div>
        </div>
      </section>
    );
    };