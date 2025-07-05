import React  from "react";

  import { CiHeart ,CiSearch,CiBag1 } from "react-icons/ci" ;
  
 import logo from "../assets/R.jpg"; 
const Secondnav = () => {
    return (
        <div className="secondnav">
            <div className="secondnav__left">
 {/* <div className="so">
    <CiHeart />

 </div> */}
                <ul>
                    <li>
                        <img src={logo} alt="Nike Logo" className="secondnav__left--logo" />
                    </li>
                    <li>
                        <a href="" >New & Featured</a>
                        </li>
                    <li>
                        <a href="">Men</a>
                    </li>
                    <li>
                        <a href="">Women</a>
                    </li>
                    <li>
                        <a href="">Kids</a>
                    </li>
                    <li>
                        <a href="">Sale</a>
                    </li>
                    <li>
                        <a href="">SNKRS</a>
                    </li>
                    <li>
                        <button className="secondnav__left--btn"> < CiSearch className="ll"/> Search</button>
                    </li>
                    <li className="logo">
                          <CiHeart />
                          <CiBag1 />
                    </li>
                    </ul>
 
  
            </div>
           </div>
        );
    };
    export default Secondnav;