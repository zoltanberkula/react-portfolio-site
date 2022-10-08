import React from 'react';

import {AiOutlineCloud, AiFillCloud} from "react-icons/ai"
import {HiChip, HiOutlineChip} from "react-icons/hi"
import {RiWindow2Fill, RiWindow2Line} from "react-icons/ri";

export default function Skills(props)  {
    return (
        <section>
        <div>
          <h3 className={props.source.siteBuildConfig.siteStyle.skillsH3Style}>{props.source.siteBuildConfig.sectionHeader}</h3>
        </div>
        <div className={props.source.siteBuildConfig.siteStyle.skillsCardContainerStyle}>
          <div className={props.source.siteBuildConfig.siteStyle.skillsCardStyle}>
          {props.arg ? <HiChip style={{color: "#164e63"}} size={props.source.siteBuildConfig.siteStyle.skillsIconSize} className={props.source.siteBuildConfig.siteStyle.skillsIconStyle} /> :
            <HiOutlineChip style={{color: "#111827"}} size={props.source.siteBuildConfig.siteStyle.skillsIconSize} className={props.source.siteBuildConfig.siteStyle.skillsIconStyle} />}
            <h3 className={props.source.siteBuildConfig.siteStyle.skillsCardTitleStyle}>
              {props.source.siteBuildConfig.embeddedSkillSetTitle}
            </h3>
            <p className={props.source.siteBuildConfig.siteStyle.skillsDescrParagraphStyle}>
               {props.source.siteBuildConfig.embeddedDescription}
            </p>
            <h4 className={props.source.siteBuildConfig.siteStyle.skillsTechStackTitleStyle}>{props.source.siteBuildConfig.techStackTitle}</h4>
            <p className={props.source.siteBuildConfig.siteStyle.skillsTechParagraphStyle}>{props.source.siteBuildConfig.techStack.embedded.lang}</p>
            <p className={props.source.siteBuildConfig.siteStyle.skillsTechParagraphStyle}>{props.source.siteBuildConfig.techStack.embedded.platform}</p>
            <p className={props.source.siteBuildConfig.siteStyle.skillsTechParagraphStyle}>{props.source.siteBuildConfig.techStack.embedded.ide}</p>
          </div>
          <div className={props.source.siteBuildConfig.siteStyle.skillsCardStyle}>
            {props.arg ? <RiWindow2Fill style={{color: "#164e63"}} size={props.source.siteBuildConfig.siteStyle.skillsIconSize} className={props.source.siteBuildConfig.siteStyle.skillsIconStyle} /> :
            <RiWindow2Line style={{color: "#111827"}} size={props.source.siteBuildConfig.siteStyle.skillsIconSize} className={props.source.siteBuildConfig.siteStyle.skillsIconStyle} />}
            <h3 className={props.source.siteBuildConfig.siteStyle.skillsCardTitleStyle}>
              {props.source.webSkillSetTitle}
            </h3>
            <p className={props.source.siteBuildConfig.siteStyle.skillsDescrParagraphStyle}>
              {props.source.siteBuildConfig.webDescription}
            </p>
            <h4 className={props.source.siteBuildConfig.siteStyle.skillsTechStackTitleStyle}>{props.source.siteBuildConfig.techStackTitle}</h4>
            <p className={props.source.siteBuildConfig.siteStyle.skillsTechParagraphStyle}>{props.source.siteBuildConfig.techStack.web.framework1}</p>
            <p className={props.source.siteBuildConfig.siteStyle.skillsTechParagraphStyle}>{props.source.siteBuildConfig.techStack.web.framework2}</p>
            <p className={props.source.siteBuildConfig.siteStyle.skillsTechParagraphStyle}>{props.source.siteBuildConfig.techStack.web.stylesheet}</p>
          </div>
          <div className={props.source.siteBuildConfig.siteStyle.skillsCardStyle}>
          {props.arg ? <AiFillCloud style={{color: "#164e63"}} size={props.source.siteBuildConfig.siteStyle.skillsIconSize} className={props.source.siteBuildConfig.siteStyle.skillsIconStyle}/> :
           <AiOutlineCloud style={{color: "#111827"}} size={props.source.siteBuildConfig.siteStyle.skillsIconSize} className={props.source.siteBuildConfig.siteStyle.skillsIconStyle}/>}
            <h3 className={props.source.siteBuildConfig.siteStyle.skillsCardTitleStyle}>
              {props.source.siteBuildConfig.cloudSkillSetTitle}
            </h3>
            <p className={props.source.siteBuildConfig.siteStyle.skillsDescrParagraphStyle}>
              {props.source.siteBuildConfig.cloudDescription}
            </p>
            <h4 className={props.source.siteBuildConfig.siteStyle.skillsTechStackTitleStyle}>{props.source.siteBuildConfig.techStackTitle}</h4>
            <p className={props.source.siteBuildConfig.siteStyle.skillsTechParagraphStyle}>{props.source.siteBuildConfig.techStack.cloud.provider}</p>
            <p className={props.source.siteBuildConfig.siteStyle.skillsTechParagraphStyle}>{props.source.siteBuildConfig.techStack.cloud.services}</p>
            <p className={props.source.siteBuildConfig.siteStyle.skillsTechParagraphStyle}>{props.source.siteBuildConfig.techStack.cloud.tools}</p>
          </div>
        </div>
      </section>
    );
    };