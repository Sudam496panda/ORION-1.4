import React from "react";
import flpk from "../assets/flplogo.png";
 
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
 import { FiGift } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
const topnav = () => {
    return (
         
               <div className="topnav">
            <img src={flpk} style={{height:"45px"}}alt="flip Logo" className="topnav__logo" />
            <div className="search">
            {/* <CiSearch size={30}  style={{backgroundColor:"white",marginLeft:"20px"}}/> */}
         <input type="search" placeholder="Search for products,Brands and More"></input>
          </div>
          <div className="user">
<FaRegUserCircle size={25} style={{ marginTop:"10px",backgroundColor:"white"}}/>
     < a href="">Log in</a>
          </div>
          <div className="cart">
            <IoCartOutline size={28}  style={{ marginTop:"10px",backgroundColor:"white"}} />
    < a href=""> Cart</a>
          </div>
          <div className="seller">
           <FiGift size={25}  style={{ marginTop:"10px",backgroundColor:"white"}}/>   
          < a href="">Become a Seller</a>
          </div>
          <div className="dot">
<BsThreeDotsVertical size={25}  style={{ marginTop:"1px",backgroundColor:"white"}}/>
                 </div>
 
                 </div>
              
    );
};
export default topnav; 