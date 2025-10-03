import { react, useState } from 'react'
// import { useState } from "react";
// import Logo from '../assets/logo.png'
import Home from '../assets/home.png'
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import './Navbar.css'
import './GoldenStyle.css'
import { BiRadioCircle } from 'react-icons/bi';

const Navbar = ({ onToggleSidebar }) => {

    const [toggleClass, setToggleClass] = useState(false)

    const handleToggle = () => {
        setToggleClass(prevState => !prevState);
    };

    return (
        <>
            <div id="navigationBar">
                <div className="portalLinks">
                    <Link to="/"><img className="home" src={Home} alt="error loading" onClick={onToggleSidebar} /></Link>
                    {/* <Link to="../"><img src={Radio} alt="error loading" onClick={onToggleSidebar} /></Link> */}
                    <span className="horizontalBar golden-border"></span>
                    <ul>
                        <li><Link to="/Documentation" className='document-list'>Documentation</Link><IoIosArrowDown className='material-symbols-outlined not-imp' /></li>
                        <li><Link to="#" onClick={handleToggle} className='not-imp'>Upload</Link><IoIosArrowDown  className={ toggleClass ? 'hovered material-symbols-outlined not-imp' : 'material-symbols-outlined not-imp'} /></li>
                        <li><Link to="#" className='not-imp'>Species</Link><IoIosArrowDown className='material-symbols-outlined not-imp' /></li>
                        <li><Link to="#" className='not-imp'>Special</Link><IoIosArrowDown className='material-symbols-outlined not-imp' /></li>
                    </ul>
                </div>
                <div className="ExtraActivitybutton">
                    <CiSearch className='material-symbols-outlined' />
                    <a href="#">Sign in</a>
                </div>
            </div>

            {/* <div id="additionalBar">
            <ul>
                <li><a href="#" className="special">C++</a></li>
                <li><a href="#">Introduction to C</a><IoIosArrowDown className='material-symbols-outlined' /></li>
                <li><a href="#">Installing VS Code</a><IoIosArrowDown className='material-symbols-outlined' /></li>
                <li><a href="#">Libraries</a></li>
                <li><a href="#">Modules</a></li>
            </ul>
        </div> */}
        </>
    )
}

export default Navbar