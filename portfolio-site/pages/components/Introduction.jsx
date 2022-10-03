import React from 'react';
import Image from "next/image";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
//FILES_BEGIN
import profilePic from "../../public/dev-zolko.png";
//FILES_END
export const Introduction = (props) => {
    return (
      <div>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Zoltán Berkula
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              Junior Sofware Engineer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
              I am an ambitious self-taught software engineer with the interest
              not only in virtual but also in physical realisations of
              information technology, who likes new challenges and continuous
              learning. My career goal is building software and hardware that
              works together in harmony and makes our lives a bit easier.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillInstagram />
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 ">
            <Image src={profilePic} layout="fill" objectFit="cover" alt="" />
          </div>
          </div>
    )
}