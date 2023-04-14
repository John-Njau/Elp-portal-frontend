import React from "react";
import './scss/chapter.scss'
import Tuk from './images/Tukelc.png';
import ChapterData from './ChapterData'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import ChapterInfo from "./ChapterInfo";

const Chapters = ()=>{
    return(
        <>
        <ChapterInfo/>
        </>
    )

}

export default Chapters;