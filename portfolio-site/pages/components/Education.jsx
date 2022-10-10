import cntl from 'cntl';
import React from 'react';
import { MdOutlineSchool, MdSchool } from "react-icons/md";

const cfgjson = require("../../siteBuildConfig.json");
const cfg = JSON.parse(JSON.stringify(cfgjson));

const educationIconSize = 80;
const educationIconStyle = cntl`
  inline-block
`;
const skillsCardTitleStyle = cntl`
  text-lg
  text-textColor_LightMode
  dark:text-textColor_DarkMode
  font-bold
  pt-8
  pb-2
`;
const educationCardContainerStyle = cntl`
  lg:flex
  gap-10
`;
const educationCardStyle = cntl`
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
const educationH3Style = cntl`
  text-3xl
  py-1
  font-medium
  text-textColor_LightMode
  dark:text-textColor_DarkMode
`; 
const educationCardTitleStyle = cntl`
  text-lg
  text-textColor_LightMode
  dark:text-textColor_DarkMode
  font-bold
  pt-8
  pb-2
`;
const educationMajorParagraphStyle = cntl`
  font-normal
  py-2
  text-textColor_LightMode
  dark:text-textColor_DarkMode
`; 
const educationTechStackTitleStyle = cntl`
  py-4
  text-textColor_LightMode
  font-bold
  text-textColor_LightMode
  dark:text-textColor_DarkMode
`; 
const educationTechParagraphStyle = cntl`
  text-textColor_LightMode
  dark:text-textColor_DarkMode
  py-1
`;

export default function Education(props)  {
  const source = cfg.siteBuildConfig.educationSection;
    return (
        <section>
        <div>
          <h3 className={educationH3Style}>{source.title}</h3>
        </div>
        <div className={educationCardContainerStyle}>
          <div className={educationCardStyle}>
            {props.arg ? <MdSchool className={educationIconStyle} style={{color: "#164e63"}} size={educationIconSize} /> : <MdOutlineSchool className={educationIconStyle} style={{color: "#111827"}} size={educationIconSize} /> }
            <h3 className={educationCardTitleStyle}>
              {source.school3.schoolName}
            </h3>
            <p className={educationMajorParagraphStyle}>
               {source.school3.major}
            </p>
            <h4 className={educationTechStackTitleStyle}>{source.school3.degree}</h4>
            <p className={educationTechParagraphStyle}><span className="font-medium">Thesis: </span>{source.school3.thesis}</p>
          </div>
          <div className={educationCardStyle}>
            {props.arg ? <MdSchool className={educationIconStyle} style={{color: "#164e63"}} size={educationIconSize} /> : <MdOutlineSchool className={educationIconStyle} style={{color: "#111827"}} size={educationIconSize} /> }
            <h3 className={skillsCardTitleStyle}>
              {source.school2.schoolName}
            </h3>
            <p className={educationMajorParagraphStyle}>
               {source.school2.major}
            </p>
            <h4 className={educationTechStackTitleStyle}>{source.school2.degree}</h4>
            <p className={educationTechParagraphStyle}><span className="font-medium">Thesis: </span>{source.school2.thesis}</p>
          </div>
          <div className={educationCardStyle}>
            {props.arg ? <MdSchool className={educationIconStyle} style={{color: "#164e63"}} size={educationIconSize} /> : <MdOutlineSchool className={educationIconStyle} style={{color: "#111827"}} size={educationIconSize} /> }
            <h3 className={skillsCardTitleStyle}>
              {source.school1.schoolName}
            </h3>
            <p className={educationMajorParagraphStyle}>
               {source.school1.major}
            </p>
            <h4 className={educationTechStackTitleStyle}>{source.school1.degree}</h4>
            <p className={educationTechParagraphStyle}><span className="font-medium">Thesis: </span>{source.school1.thesis}</p>
          </div>
        </div>
      </section>
    )
}