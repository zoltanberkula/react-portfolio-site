import cntl from 'cntl';
import React from 'react';
import {AiOutlineCloud, AiFillCloud} from "react-icons/ai";
import {HiChip, HiOutlineChip} from "react-icons/hi";
import {RiWindow2Fill, RiWindow2Line} from "react-icons/ri";

const cfgjson = require("../../siteBuildConfig.json");
const cfg = JSON.parse(JSON.stringify(cfgjson));

const skillsIconSize = 80;
const skillsIconStyle = cntl`
  inline-block
`;
const skillsCardContainerStyle = cntl`
  lg:flex
  gap-10
`;
const skillsCardStyle = cntl`
  text-center
  shadow-2xl
  shadow-gray-800
  p-10
  rounded-xl
  my-10
  bg-bgColor_CardLight
  dark:bg-bgColor_CardDark
  dark:bg-opacity-20 dark:shadow-md
`;
const skillsH3Style = cntl`
  text-3xl
  py-1
  font-medium
  text-textColor_LightMode
  dark:text-textColor_DarkMode
`; 
const skillsCardTitleStyle = cntl`
  text-lg
  text-textColor_LightMode
  dark:text-textColor_DarkMode
  font-bold
  pt-8
  pb-2
`;
const skillsDescrParagraphStyle = cntl`
  font-normal
  py-2
  text-textColor_LightMode
  dark:text-textColor_DarkMode
`; 
const skillsTechStackTitleStyle = cntl`
  py-4
  text-textColor_LightMode
  font-bold
  text-textColor_LightMode
  dark:text-textColor_DarkMode
`; 
const skillsTechParagraphStyle = cntl`
  text-textColor_LightMode
  dark:text-textColor_DarkMode
  py-1
`;

export default function Skills(props)  {
  const source = cfg.siteBuildConfig.skillsSection;
    return (
        <section>
        <div>
          <h3 className={skillsH3Style}>{source.title}</h3>
        </div>
        <div className={skillsCardContainerStyle}>
          <div className={skillsCardStyle}>
          {props.arg ? <HiChip style={{color: "#164e63"}} size={skillsIconSize} className={skillsIconStyle}/> :
            <HiOutlineChip style={{color: "#111827"}} size={skillsIconSize} className={skillsIconStyle}/>}
            <h3 className={skillsCardTitleStyle}>
              {source.skillSetTitle1}
            </h3>
            <p className={skillsDescrParagraphStyle}>
               {source.skillSetDescription1}
            </p>
            <h4 className={skillsTechStackTitleStyle}>{source.skillSetTechStackTitle1}</h4>
            <p className={skillsTechParagraphStyle}>{source.skillSetTechStack1.tech.lang}</p>
            <p className={skillsTechParagraphStyle}>{source.skillSetTechStack1.tech.platform}</p>
            <p className={skillsTechParagraphStyle}>{source.skillSetTechStack1.tech.ide}</p>
          </div>
          <div className={skillsCardStyle}>
            {props.arg ? <RiWindow2Fill style={{color: "#164e63"}} size={skillsIconSize} className={skillsIconStyle}/> :
            <RiWindow2Line style={{color: "#111827"}} size={skillsIconSize} className={skillsIconStyle}/>}
            <h3 className={skillsCardTitleStyle}>
              {source.skillSetTitle2}
            </h3>
            <p className={skillsDescrParagraphStyle}>
              {source.skillSetDescription2}
            </p>
            <h4 className={skillsTechStackTitleStyle}>{source.skillSetTechStackTitle2}</h4>
            <p className={skillsTechParagraphStyle}>{source.skillSetTechStack2.tech.framework1}</p>
            <p className={skillsTechParagraphStyle}>{source.skillSetTechStack2.tech.framework2}</p>
            <p className={skillsTechParagraphStyle}>{source.skillSetTechStack2.tech.stylesheet}</p>
          </div>
          <div className={skillsCardStyle}>
          {props.arg ? <AiFillCloud style={{color: "#164e63"}} size={skillsIconSize} className={skillsIconStyle}/> :
           <AiOutlineCloud style={{color: "#111827"}} size={skillsIconSize} className={skillsIconStyle}/>}
            <h3 className={skillsCardTitleStyle}>
              {source.skillSetTitle3}
            </h3>
            <p className={skillsDescrParagraphStyle}>
              {source.skillSetDescription3}
            </p>
            <h4 className={skillsTechStackTitleStyle}>{source.skillSetTechStackTitle3}</h4>
            <p className={skillsTechParagraphStyle}>{source.skillSetTechStack3.tech.provider}</p>
            <p className={skillsTechParagraphStyle}>{source.skillSetTechStack3.tech.services}</p>
            <p className={skillsTechParagraphStyle}>{source.skillSetTechStack3.tech.tools}</p>
          </div>
        </div>
      </section>
    );
    };