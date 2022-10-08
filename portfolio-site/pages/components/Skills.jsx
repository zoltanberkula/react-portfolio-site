import cntl from 'cntl';
import React from 'react';
import {AiOutlineCloud, AiFillCloud} from "react-icons/ai"
import {HiChip, HiOutlineChip} from "react-icons/hi"
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
          <h3 className={skillsH3Style}>{source.sectionHeader}</h3>
        </div>
        <div className={skillsCardContainerStyle}>
          <div className={skillsCardStyle}>
          {props.arg ? <HiChip style={{color: "#164e63"}} size={skillsIconSize} className={skillsIconStyle} /> :
            <HiOutlineChip style={{color: "#111827"}} size={skillsIconSize} className={skillsIconStyle} />}
            <h3 className={skillsCardTitleStyle}>
              {source.embeddedSkillSetTitle}
            </h3>
            <p className={skillsDescrParagraphStyle}>
               {source.embeddedDescription}
            </p>
            <h4 className={skillsTechStackTitleStyle}>{source.techStackTitle}</h4>
            <p className={skillsTechParagraphStyle}>{source.techStack.embedded.lang}</p>
            <p className={skillsTechParagraphStyle}>{source.techStack.embedded.platform}</p>
            <p className={skillsTechParagraphStyle}>{source.techStack.embedded.ide}</p>
          </div>
          <div className={skillsCardStyle}>
            {props.arg ? <RiWindow2Fill style={{color: "#164e63"}} size={skillsIconSize} className={skillsIconStyle} /> :
            <RiWindow2Line style={{color: "#111827"}} size={skillsIconSize} className={skillsIconStyle} />}
            <h3 className={skillsCardTitleStyle}>
              {source.webSkillSetTitle}
            </h3>
            <p className={skillsDescrParagraphStyle}>
              {source.webDescription}
            </p>
            <h4 className={skillsTechStackTitleStyle}>{source.techStackTitle}</h4>
            <p className={skillsTechParagraphStyle}>{source.techStack.web.framework1}</p>
            <p className={skillsTechParagraphStyle}>{source.techStack.web.framework2}</p>
            <p className={skillsTechParagraphStyle}>{source.techStack.web.stylesheet}</p>
          </div>
          <div className={skillsCardStyle}>
          {props.arg ? <AiFillCloud style={{color: "#164e63"}} size={skillsIconSize} className={skillsIconStyle}/> :
           <AiOutlineCloud style={{color: "#111827"}} size={skillsIconSize} className={skillsIconStyle}/>}
            <h3 className={skillsCardTitleStyle}>
              {source.cloudSkillSetTitle}
            </h3>
            <p className={skillsDescrParagraphStyle}>
              {source.cloudDescription}
            </p>
            <h4 className={skillsTechStackTitleStyle}>{source.techStackTitle}</h4>
            <p className={skillsTechParagraphStyle}>{source.techStack.cloud.provider}</p>
            <p className={skillsTechParagraphStyle}>{source.techStack.cloud.services}</p>
            <p className={skillsTechParagraphStyle}>{source.techStack.cloud.tools}</p>
          </div>
        </div>
      </section>
    );
    };