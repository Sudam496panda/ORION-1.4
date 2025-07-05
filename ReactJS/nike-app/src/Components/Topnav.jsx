import React from "react";
import im from "../assets/fo.jpg";
const topnav = () => {
    return (
        <div className="topnav">
            <img src={im} alt="Nike Logo" className="topnav__logo" />
        <div className="topnav__left">
            <ul>
                <li> 
                    <a href="" className="find">Find a Store  |</a>
                </li>
                <li>
                    <a href="" className="help">Help  |</a>
                </li>
                <li>
                    <a href="">Join Us  |</a>
                </li>
                <li>
                    <a href="">Sign In</a>
                </li>
            </ul>
            </div>
             
                 
                </div>
    );
};
export default topnav; 