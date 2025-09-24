import React from 'react'
import './Sidebar.css'
import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import OpenClose from '../assets/open_close.svg'

const menusModules = import.meta.glob("..//paths/*.json", { eager: true });

const Sidebar = () => {

    const location = useLocation();

    // const [menus, setMenus] = useState([
    //     {
    //         heading: "Hello",
    //         link: "Visual Red the gate of heaven"
    //     },
    //     {
    //         link: "Visual Red the gate of heaven"
    //     },
    //     {
    //         heading: "Go Die",
    //         link: "Visual Red the gate of heaven"
    //     },
    //     {
    //         link: "Visual Red the gate of heaven"
    //     },
    //     {
    //         link: "Visual Red the gate of heaven"
    //     },
    //     {
    //         heading: "Go Die",
    //         link: "Visual Red the gate of heaven"
    //     },
    //     {
    //         link: "Visual Red the gate of heaven"
    //     },
    //     {
    //         link: "Visual Red the gate of heaven"
    //     },{
    //         heading: "Go Die",
    //         link: "Visual Red the gate of heaven"
    //     },
    //     {
    //         link: "Visual Red the gate of heaven"
    //     },
    //     {
    //         link: "Visual Red the gate of heaven"
    //     },
    // ])

    // const [menus, setMenus] = useState(menusData);
    const [menus, setMenus] = useState([]);


    useEffect(() => {
        // last part of URL, e.g. /docs/article → "article"
        const path = location.pathname.split("/").pop();

        // Find JSON file that matches `article.json`, `tutorial.json`, etc.
        const filePath = `../paths/${path}.json`;

        if (menusModules[filePath]) {
            setMenus(menusModules[filePath].default); // JSON is under .default
            const json = menusModules[filePath].default;
            setMenus(json.menus || []); // ✅ only set the menus array
        } else {
            setMenus([]); // fallback if no matching file
        }
    }, [location]);

    // const Menu = ({menu})=>{
    //     return (
    //         <li><a href="#">{menu.link}</a></li>
    //     )
    // }

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };




    return (
        <>
            <div className="left-sidebar" style={{
                left: isOpen ? '0' : '-95%',
                transition: 'left 0.3s ease', // Smooth transition
            }} onClick={toggleSidebar}>
                <h2>Authority List</h2>
                <div className="menu">
                    <input type="search" id="filterSearch" placeholder="Filter by title" />
                    <ul className="titleMenu">
                        <li open className="toggle-menu">
                            <ul>
                                {/* {menus.map(items => {
                                return <><span key={menus.heading} className="toggle-head">{items.heading}</span><li><a key={menus.link} href="#">{items.link}</a></li></>
                            })} */}
                                {menus.map((items, index) => (
                                    <React.Fragment key={index}>
                                        {items.heading && <span className="toggle-head">{items.heading}</span>}
                                        <li><a href="#">{items.link}</a></li>
                                    </React.Fragment>
                                ))}
                            </ul>
                        </li>
                        {/* <li open className="toggle-menu">
                        <div id="output"></div>
                        </li> */}
                        <img className={isOpen ? "change rightArrow" : "rightArrow"} src={OpenClose} alt="" />
                    </ul>
                </div>
                <button className="download"><a href="#">Download PDF</a></button>
            </div>
        </>
    )
}

export default Sidebar