import React from 'react';

import {AiOutlineCloud, AiFillCloud} from "react-icons/ai"
import {HiChip, HiOutlineChip} from "react-icons/hi"
import {RiWindow2Fill, RiWindow2Line} from "react-icons/ri";

const cfg = require("../../siteBuildConfig.json");
const source = JSON.parse(JSON.stringify(cfg));

export default function Skills(props)  {
    return (
        <section>
        <div>
          <h3 className={source.siteBuildConfig.siteStyle.skillsH3Style}>{source.siteBuildConfig.sectionHeader}</h3>
        </div>
        <div className={source.siteBuildConfig.siteStyle.skillsCardContainerStyle}>
          <div className={source.siteBuildConfig.siteStyle.skillsCardStyle}>
          {props.arg ? <HiChip style={{color: "#164e63"}} size={source.siteBuildConfig.siteStyle.skillsIconSize} className={source.siteBuildConfig.siteStyle.skillsIconStyle} /> :
            <HiOutlineChip style={{color: "#111827"}} size={source.siteBuildConfig.siteStyle.skillsIconSize} className={source.siteBuildConfig.siteStyle.skillsIconStyle} />}
            <h3 className={source.siteBuildConfig.siteStyle.skillsCardTitleStyle}>
              {source.siteBuildConfig.embeddedSkillSetTitle}
            </h3>
            <p className={source.siteBuildConfig.siteStyle.skillsDescrParagraphStyle}>
               {source.siteBuildConfig.embeddedDescription}
            </p>
            <h4 className={source.siteBuildConfig.siteStyle.skillsTechStackTitleStyle}>{source.siteBuildConfig.techStackTitle}</h4>
            <p className={source.siteBuildConfig.siteStyle.skillsTechParagraphStyle}>{source.siteBuildConfig.techStack.embedded.lang}</p>
            <p className={source.siteBuildConfig.siteStyle.skillsTechParagraphStyle}>{source.siteBuildConfig.techStack.embedded.platform}</p>
            <p className={source.siteBuildConfig.siteStyle.skillsTechParagraphStyle}>{source.siteBuildConfig.techStack.embedded.ide}</p>
          </div>
          <div className={source.siteBuildConfig.siteStyle.skillsCardStyle}>
            {props.arg ? <RiWindow2Fill style={{color: "#164e63"}} size={source.siteBuildConfig.siteStyle.skillsIconSize} className={source.siteBuildConfig.siteStyle.skillsIconStyle} /> :
            <RiWindow2Line style={{color: "#111827"}} size={source.siteBuildConfig.siteStyle.skillsIconSize} className={source.siteBuildConfig.siteStyle.skillsIconStyle} />}
            <h3 className={source.siteBuildConfig.siteStyle.skillsCardTitleStyle}>
              {source.siteBuildConfig.webSkillSetTitle}
            </h3>
            <p className={source.siteBuildConfig.siteStyle.skillsDescrParagraphStyle}>
              {source.siteBuildConfig.webDescription}
            </p>
            <h4 className={source.siteBuildConfig.siteStyle.skillsTechStackTitleStyle}>{source.siteBuildConfig.techStackTitle}</h4>
            <p className={source.siteBuildConfig.siteStyle.skillsTechParagraphStyle}>{source.siteBuildConfig.techStack.web.framework1}</p>
            <p className={source.siteBuildConfig.siteStyle.skillsTechParagraphStyle}>{source.siteBuildConfig.techStack.web.framework2}</p>
            <p className={source.siteBuildConfig.siteStyle.skillsTechParagraphStyle}>{source.siteBuildConfig.techStack.web.stylesheet}</p>
          </div>
          <div className={source.siteBuildConfig.siteStyle.skillsCardStyle}>
          {props.arg ? <AiFillCloud style={{color: "#164e63"}} size={source.siteBuildConfig.siteStyle.skillsIconSize} className={source.siteBuildConfig.siteStyle.skillsIconStyle}/> :
           <AiOutlineCloud style={{color: "#111827"}} size={source.siteBuildConfig.siteStyle.skillsIconSize} className={source.siteBuildConfig.siteStyle.skillsIconStyle}/>}
            <h3 className={source.siteBuildConfig.siteStyle.skillsCardTitleStyle}>
              {source.siteBuildConfig.cloudSkillSetTitle}
            </h3>
            <p className={source.siteBuildConfig.siteStyle.skillsDescrParagraphStyle}>
              {source.siteBuildConfig.cloudDescription}
            </p>
            <h4 className={source.siteBuildConfig.siteStyle.skillsTechStackTitleStyle}>{source.siteBuildConfig.techStackTitle}</h4>
            <p className={source.siteBuildConfig.siteStyle.skillsTechParagraphStyle}>{source.siteBuildConfig.techStack.cloud.provider}</p>
            <p className={source.siteBuildConfig.siteStyle.skillsTechParagraphStyle}>{source.siteBuildConfig.techStack.cloud.services}</p>
            <p className={source.siteBuildConfig.siteStyle.skillsTechParagraphStyle}>{source.siteBuildConfig.techStack.cloud.tools}</p>
          </div>
        </div>
      </section>
    );
    };