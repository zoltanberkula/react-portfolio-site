import Head from "next/head";
import { useState } from "react";
//COMPONENTS_BEGIN
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Education from "./components/Education";
//COMPONENTS_END

export default function Resume() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>BZ</title>
        <meta />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-bgColor_LightMode px-10 md:px-20 lg:px-40 dark:bg-bgColor_DarkMode">
        <Navbar arg={darkMode} cb={setDarkMode} />
        <Introduction arg={darkMode} />
        <Skills arg={darkMode} />
        <Education />
      </main>
    </div>
  );
}
