import React from 'react'
import Markdown from './Markdown'
import './Main.css'
import { MdOutlineThumbUpOffAlt } from "react-icons/md";

const Main = () => {
  return (
    <div className="main-content">
    <a className="fileLocation-folder">Learn </a><span> / </span>
    <a className="fileLocation-file">C++, C and Assembler </a><span> / </span>
    <h1>Introduction to C/C++ support in Visual Studio</h1>
    <div className="articleDetail">
        <div>
            <span className="articleNo">Article · 20/05/2025 · </span>
            <span className="contributors">8 contributors</span>
        </div>
        <div className="feedbackBtn"><MdOutlineThumbUpOffAlt className='material-symbols-outlined'/><span>Feedback</span></div>
    </div>
    <h3 className="aboutArticle minecraft">In this article</h3>
    <a href="#" className="quote">Visual Studio 2022 installation<br />Next Step</a>
    <p className="impText">If you have not installed Visual Studio and the Microsoft C and C++ tools yet, here's how
        to get started</p>
    <Markdown/>
</div>
  )
}

export default Main