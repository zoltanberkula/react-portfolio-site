import React from 'react';
import { 
  BsFillMoonStarsFill,
  BsMoonFill,
  BsMoon,
 } from "react-icons/bs";

export default function Navbar(props)  {
    return (
        <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl font-medium text-textColor_LightMode dark:text-textColor_DarkMode">zoltanberkula</h1>
        <ul className="flex items-center">
          <li>
            <a
              className="px-4 py-2 rounded-md ml-8 font-medium text-textColor_LightMode dark:text-textColor_DarkMode"
              href="#"
              >
              <span className="text-xl font-medium text-textColor_LightMode dark:text-textColor_DarkMode">RESUME</span>
            </a>
          </li>
              <li>
                {props.arg ? <BsMoon onClick={() => props.cb(!props.arg)} className="cursor-pointer text-2xl text-iconColor_SocialDark" /> : <BsMoonFill onClick={() => props.cb(!props.arg)} className="cursor-pointer text-2xl text-iconColor_SocialLight" />}
              </li>
        </ul>
      </nav>
    )
}