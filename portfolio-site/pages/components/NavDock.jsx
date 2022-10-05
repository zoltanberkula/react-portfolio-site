import React from 'react';

import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from 'react-icons/bi';

export default function NavDock(){
    return(
        <nav>
            <a href="#" className="flex fixed rounded-lg"><AiOutlineHome /></a>
            <a href="#about" className="bg-transparent p-3 flex text-lg"><AiOutlineUser /></a>
            <a href="#experience" className="bg-transparent p-3 flex text-lg"><BiBook /></a>
            <a href="#services" className="bg-transparent p-3 flex text-lg"><RiServiceLine /></a>
            <a href="#contact" className="bg-transparent p-3 flex text-lg"><BiMessageSquareDetail /></a>
        </nav>
    )
}