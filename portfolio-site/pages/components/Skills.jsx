import React from 'react';

import {AiOutlineCloud, AiFillCloud} from "react-icons/ai"
import {HiChip, HiOutlineChip} from "react-icons/hi"
import {RiWindow2Fill, RiWindow2Line} from "react-icons/ri";

const cfg = require("../siteBuildConfig.json");
const source = JSON.parse(JSON.stringify(cfg));

export default function Skills(props)  {
    return (
        <section>
        <div>
          <h3 className={source.skillsH3Style}>{source.sectionHeader}</h3>
        </div>
        <div className={source.skillsCardContainerStyle}>
          <div className={source.skillsCardStyle}>
          {props.arg ? <HiChip style={{color: "#164e63"}} size={source.skillsIconSize} className={source.skillsIconStyle} /> :
            <HiOutlineChip style={{color: "#111827"}} size={source.skillsIconSize} className={source.skillsIconStyle} />}
            <h3 className={source.skillsCardTitleStyle}>
              {source.embeddedSkillSetTitle}
            </h3>
            <p className={source.skillsDescrParagraphStyle}>
               {source.embeddedDescription}
            </p>
            <h4 className={source.skillsTechStackTitleStyle}>{source.techStackTitle}</h4>
            <p className={source.skillsTechParagraphStyle}>{source.techStack.embedded.lang}</p>
            <p className={source.skillsTechParagraphStyle}>{source.techStack.embedded.platform}</p>
            <p className={source.skillsTechParagraphStyle}>{source.techStack.embedded.ide}</p>
          </div>
          <div className={source.skillsCardStyle}>
            {props.arg ? <RiWindow2Fill style={{color: "#164e63"}} size={source.skillsIconSize} className={source.skillsIconStyle} /> :
            <RiWindow2Line style={{color: "#111827"}} size={source.skillsIconSize} className={source.skillsIconStyle} />}
            <h3 className={source.skillsCardTitleStyle}>
              {source.webSkillSetTitle}
            </h3>
            <p className={source.skillsDescrParagraphStyle}>
              {source.webDescription}
            </p>
            <h4 className={source.skillsTechStackTitleStyle}>{source.techStackTitle}</h4>
            <p className={source.skillsTechParagraphStyle}>{source.techStack.web.framework1}</p>
            <p className={source.skillsTechParagraphStyle}>{source.techStack.web.framework2}</p>
            <p className={source.skillsTechParagraphStyle}>{source.techStack.web.stylesheet}</p>
          </div>
          <div className={source.skillsCardStyle}>
          {props.arg ? <AiFillCloud style={{color: "#164e63"}} size={source.skillsIconSize} className={source.skillsIconStyle}/> :
           <AiOutlineCloud style={{color: "#111827"}} size={source.skillsIconSize} className={source.skillsIconStyle}/>}
            <h3 className={source.skillsCardTitleStyle}>
              {source.cloudSkillSetTitle}
            </h3>
            <p className={source.skillsDescrParagraphStyle}>
              {source.cloudDescription}
            </p>
            <h4 className={source.skillsTechStackTitleStyle}>{source.techStackTitle}</h4>
            <p className={source.skillsTechParagraphStyle}>{source.techStack.cloud.provider}</p>
            <p className={source.skillsTechParagraphStyle}>{source.techStack.cloud.services}</p>
            <p className={source.skillsTechParagraphStyle}>{source.techStack.cloud.tools}</p>
          </div>
        </div>
      </section>
    );
    };