import React from 'react';
import Image from "next/image";
//FILES_BEGIN
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
//FILES_END
export default function Skills(props)  {
    return (
        <section>
        <div>
          <h3 className="text-3xl py-1 text-teal-600 font-medium">Experience and skills</h3>
          <p className="text-md py-2 leading-8 text-gray-800">
            Since the beggining of my journey as a sofware engineer, Ive
            gained experience and skills in several technologies consulted and collaborated
            with talented people to develop <span className="text-teal-500"> hardware, </span><span className="text-teal-500">software</span> and <span className="text-teal-500">firmware </span>for products intended for both business
            and consumer use
          </p>
          <p className="text-md py-2 leading-8 text-gray-800">
            {" "}
            I offer from a wide range of services, including brand design,
            programming and teaching.
          </p>
        </div>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white dark:text-black">
            <Image src={code} width={100} height={100} alt="" />
            <h3 className="text-lg font-medium pt-8 pb-2">
              Embedded Systems & IoT
            </h3>
            <p className="py-2 ">
              Developing firmware for microcontrollers such as ATmega2560, ATmega328p, ESP8266, ESP32 {" "}
            </p>
            <h4 className="py-4 text-teal-600">Technology Stack</h4>
            <p className="text-gray-800 py-1">C/C++</p>
            <p className="text-gray-800 py-1">Arduino/ESP-IDF</p>
            <p className="text-gray-800 py-1">PlatformIO</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
            <Image src={code} width={100} height={100} alt="" />
            <h3 className="text-lg font-medium pt-8 pb-2">
              Web Development
            </h3>
            <p className="py-2 ">
              Developing a dynamic web app for data telemetry and visualization with backend and close to hardware modules implemented from scratch.
            </p>
            <h4 className="py-4 text-teal-600">Technology Stack</h4>
            <p className="text-gray-800 py-1">Node.js</p>
            <p className="text-gray-800 py-1">React.js</p>
            <p className="text-gray-800 py-1">TailwindCSS</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
            <Image src={code} width={100} height={100} alt="" />
            <h3 className="text-lg font-medium pt-8 pb-2">
              Cloud, Backend & DevOps
            </h3>
            <p className="py-2 ">
              Creating a Cloud Infrastructure used for data telemetry and remote control using services provided by GCP, easy infrastructure deploy using IaC.
            </p>
            <h4 className="py-4 text-teal-600">Technology Stack</h4>
            <p className="text-gray-800 py-1">Google Cloud Platform</p>
            <p className="text-gray-800 py-1">IoT Core, PubSub, Cloud Functions, Firebase</p>
            <p className="text-gray-800 py-1">Terraform</p>
          </div>
        </div>
      </section>
    )
}