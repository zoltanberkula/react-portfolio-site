import Head from "next/head";
import { useState } from "react";
//COMPONENTS_BEGIN
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Education from "./components/Education";
//COMPONENTS_END
const siteBuildConfig = require("../siteBuildConfig.json");
const source = JSON.parse(JSON.stringify(siteBuildConfig));

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
