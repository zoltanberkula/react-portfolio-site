import React from 'react';
import Image from "next/image";
//FILES_BEGIN
import uniLight from "../../public/uniLightMode.png";
import uniDark from "../../public/uniDarkMode.png";
//FILES_END

export default function Education(props)  {
    return (
        <section>
        <div>
          <h3 className="text-3xl py-1 font-medium text-textColor_LightMode dark:text-textColor_DarkMode">Education</h3>
        </div>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-2xl shadow-gray-800 p-10 rounded-xl my-10 bg-bgColor_CardLight dark:bg-bgColor_CardDark dark:bg-opacity-20 dark:shadow-md">
            {props.arg ? <Image src={uniDark} width={100} height={100} alt="" /> : <Image src={uniLight} width={100} height={100} alt="" /> }
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
            {props.arg ? <Image src={uniDark} width={100} height={100} alt="" /> : <Image src={uniLight} width={100} height={100} alt="" /> }
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
            {props.arg ? <Image src={uniDark} width={100} height={100} alt="" /> : <Image src={uniLight} width={100} height={100} alt="" /> }
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