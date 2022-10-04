import React from 'react';
import Image from "next/image";
//FILES_BEGIN
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
//FILES_END
export default function Services() {
    return (
        <section>
          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Since the beggining of my journey as a freelance developer, I&aposve
              done remote work for
              <span className="text-teal-500"> agencies</span> consulted for{" "}
              <span className="text-teal-500">startups</span> and collaborated
              with talented people to create digital products for both business
              and consumer use.
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
                Beutiful designs
              </h3>
              <p className="py-2 ">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={code} width={100} height={100} alt="" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beutiful designs
              </h3>
              <p className="py-2 ">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={code} width={100} height={100} alt="" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beutiful designs
              </h3>
              <p className="py-2 ">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>
    )
}