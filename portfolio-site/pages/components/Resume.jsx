import cntl from 'cntl';
import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Introduction from './Introduction';
import Skills from './Skills';
import Education from './Education';

const cfg = require("../../siteBuildConfig.json");
const source = JSON.parse(JSON.stringify(cfg));

const mainStyle = cntl`
  bg-bgColor_LightMode
  px-10
  md:px-20
  lg:px-40
  dark:bg-bgColor_DarkMode
`;

export default function Resume(props)  {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>{source.siteBuildConfig.title}</title>
          <meta />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={mainStyle}>
          <Navbar arg={darkMode} cb={setDarkMode} />
          <Introduction arg={darkMode} />
          <Skills arg={darkMode} />
          <Education arg={darkMode}/>
        </main>
      </div>
    )
}