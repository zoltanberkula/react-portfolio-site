import React from 'react';
import Image from "next/image";
//FILES_BEGIN
import embeddedLight from "../../public/embeddedLightMode.png";
import embeddedDark from "../../public/embeddedDarkMode.png";
import webLight from "../../public/webLightMode.png";
import webDark from "../../public/webDarkMode.png";
import cloudLight from "../../public/cloudLightMode.png";
import cloudDark from "../../public/cloudDarkMode.png";

//FILES_END


import { 
  AiOutlineCloud,
  AiFillCloud,
 } from "react-icons/ai";

export default function Education(props)  {
    return (
        <section>
        <div>
          <h3 className="text-3xl py-1 font-medium text-textColor_LightMode dark:text-textColor_DarkMode">Education</h3>
          {/* <p className="text-md py-2 leading-8 text-textColor_LightMode dark:text-textColor_DarkMode">
            Since the beggining of my journey as a sofware engineer, Ive
            gained experience and skills in several technologies consulted and collaborated
            with talented people to develop <span className="text-teal-500"> hardware, </span><span className="text-teal-500">software</span> and <span className="text-teal-500">firmware </span>for products intended for both business
            and consumer use
          </p> */}
        </div>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-2xl shadow-gray-800 p-10 rounded-xl my-10 bg-bgColor_CardLight dark:bg-bgColor_CardDark dark:bg-opacity-20 dark:shadow-md">
            {props.arg ? <Image src={webDark} width={100} height={100} alt="" /> : <Image src={webLight} width={100} height={100} alt="" /> }
            <h3 className="text-lg font-medium pt-8 pb-2">
              JSU
            </h3>
            <p className="py-2 ">
            Teaching of English Language and literature and Computer Science
            </p>
            <h4 className="py-4 text-teal-600">Post Graduate Doctoral degree</h4>
            <p className="text-gray-800 py-1"><span className="font-medium">Thesis: </span>The opportunities of the ESP32 development platform in education.</p>
          </div>
          <div className="text-center shadow-2xl shadow-gray-800 p-10 rounded-xl my-10 bg-bgColor_CardLight dark:bg-bgColor_CardDark dark:bg-opacity-20 dark:shadow-md">
            {props.arg ? <Image src={webDark} width={100} height={100} alt="" /> : <Image src={webLight} width={100} height={100} alt="" /> }
            <h3 className="text-lg font-medium pt-8 pb-2">
              JSU
            </h3>
            <p className="py-2 ">
            Teaching of English Language and literature and Computer Science
            </p>
            <h4 className="py-4 text-teal-600">Master&aposs degree</h4>
            <p className="text-gray-800 py-1"><span className="font-medium">Thesis: </span>The opportunities of the Arduino development platform in education.</p>
          </div>
          <div className="text-center shadow-2xl shadow-gray-800 p-10 rounded-xl my-10 bg-bgColor_CardLight dark:bg-bgColor_CardDark dark:bg-opacity-20 dark:shadow-md">
            {props.arg ? <Image src={webDark} width={100} height={100} alt="" /> : <Image src={webLight} width={100} height={100} alt="" /> }
            <h3 className="text-lg font-medium pt-8 pb-2">
              JSU
            </h3>
            <p className="py-2 ">
            Teaching of English Language and literature and Computer Science
            </p>
            <h4 className="py-4 text-teal-600">Bachelor&aposs degree</h4>
            <p className="text-gray-800 py-1"><span className="font-medium">Thesis: </span>The opportunities of the Arduino development platform.</p>
          </div>
        </div>
      </section>
    )
}