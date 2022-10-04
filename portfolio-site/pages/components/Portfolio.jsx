import React from 'react';
import Image from "next/image";
//FILES_BEGIN
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
//FILES_END
export default function Portfolio() {
    return (
        <section>
          <div>
            <h3 className="text-3xl py-1 text-teal-600 font-medium">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Since the beggining of my journey as a freelance developer, I&aposve
              done remote work for
              <span className="text-teal-500"> agencies</span> consulted for{" "}
              <span className="text-teal-500">startups</span> and collaborated
              with talented people to create digital products for both business
              and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt=""
              />
            </div>
          </div>
        </section>
    )
}