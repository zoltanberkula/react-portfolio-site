import Head from "next/head";
import { useState } from "react";
//COMPONENTS_BEGIN
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Education from "./components/Education";
//COMPONENTS_END
const siteBuildConfig = require("../public/siteBuildConfig.json");
//const source = JSON.parse(JSON.stringify(siteBuildConfig));

const source = {
  siteBuildConfig: {
    title: "Zoltán Berkula Resume",
    sectionHeader: "Skills",
    embeddedSkillSetTitle: "Embedded Systems & IoT",
    webSkillSetTitle: "Web development",
    cloudSkillSetTitle: "Cloud, Backend & DevOps",
    techStackTitle: "Technology Stack",
    embeddedDescription:
      "Developing firmware for microcontrollers such as ATmega2560, ATmega328p, ESP8266, ESP32",
    webDescription:
      "Developing a dynamic web app for data telemetry and visualization with backend using close to hardware modules implemented from scratch.",
    cloudDescription:
      "Creating a Cloud Infrastructure used for data telemetry and remote control using services provided by GCP, easy infrastructure deployment using IaC.",
    techStack: {
      embedded: {
        lang: "C/C++",
        platform: "Arduino/ESP_IDF",
        ide: "PlatformIO, Espressif IDE",
      },
      web: {
        framework1: "Node.js",
        framework2: "React.js",
        stylesheet: "TailwindCSS",
      },
      cloud: {
        provider: "Google Cloud Platform",
        services: "IoT Core, PubSub, Cloud Functions, Firebase",
        tools: "Terraform, Docker",
      },
    },
    siteStyle: {
      mainStyle:
        "bg-bgColor_LightMode px-10 md:px-20 lg:px-40 dark:bg-bgColor_DarkMode",
      skillsIconStyle: "inline-block",
      skillsIconSize: 80,
      skillsCardContainerStyle: "lg:flex gap-10",
      skillsCardStyle:
        "text-center shadow-2xl shadow-gray-800 p-10 rounded-xl my-10 bg-bgColor_CardLight dark:bg-bgColor_CardDark dark:bg-opacity-20 dark:shadow-md",
      skillsH3Style:
        "text-3xl py-1 font-medium text-textColor_LightMode dark:text-textColor_DarkMode",
      skillsCardTitleStyle:
        "text-lg text-textColor_LightMode dark:text-textColor_DarkMode font-bold pt-8 pb-2",
      skillsDescrParagraphStyle:
        "font-normal py-2 text-textColor_LightMode dark:text-textColor_DarkMode ",
      skillsTechStackTitleStyle:
        "py-4 text-textColor_LightMode font-bold text-textColor_LightMode dark:text-textColor_DarkMode",
      skillsTechParagraphStyle:
        "text-textColor_LightMode dark:text-textColor_DarkMode py-1",
    },
  },
};

export default function Resume() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>{source.siteBuildConfig.title}</title>
        <meta />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={source.siteBuildConfig.siteStyle.mainStyle}>
        <Navbar arg={darkMode} cb={setDarkMode} />
        <Introduction arg={darkMode} />
        <Skills arg={darkMode} source={source} />
        <Education />
      </main>
    </div>
  );
}
