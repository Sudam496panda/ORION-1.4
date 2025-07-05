import React from "react";
import { FaGift } from "react-icons/fa6";
import { GiFallingStar } from "react-icons/gi"
import { MdOutlineCardGiftcard } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import f1 from "../assets/fo1.svg";
const last = () => {
    return(
        <div className="last1">
            <div className="lastpo">
<div className="last2">
    <h2>ABOUT</h2>
    <ul type="none">
        <li>Contact Us</li>
        <li>About Us</li>
        <li>Careers</li>
        <li>Flipkart Stories</li>
        <li>Press</li>
        <li>Corporate Information</li>
    </ul>
</div>
<div className="last2">
    <h2>GROUP COMPANIES</h2>
    <ul type="none">
        <li>Myntra</li>
        <li>Cleartrip</li>
        <li>Shopsy</li>
    </ul>
</div>
<div className="last2">
    <h2>HELP</h2>
    <ul type="none">
        <li>Payments</li>
        <li>Shipping</li>
        <li>Cancellation & Returns</li>
        <li>FAQ</li>
    </ul>
</div>
<div className="last2">
    <h2>CONSUMER POLICY</h2>
    <ul type="none">
        <li>Cancellation & Returns</li>
        <li>Terms Of Use</li>
        <li>Security</li>
        <li>Privacy</li>
        <li>Sitemap</li>
        <li>Grievance Redressal</li>
        <li>EPR Compliance</li>
    </ul>
 </div>
 <hr style={{marginTop:"40px"}}/>
 <div className="last2" style={{marginRight:"20px"}}>
    <h2>Mail Us:</h2>
  <ul type="none">
  <li>Flipkart Internet Private limited,</li> 
    <li>Buildings Alyssa,Begonia &</li> 
     <li>Clove Embassy Tech Village,</li>
    <li>Outer Ring Road,Devarabeesanahalli Village,</li>
     <li>Bangaluru,560103,</li>
     <li>Karnataka,India </li>
 </ul>
 </div>
  <div className="last2" style={{marginRight:"35px"}}>
    <h2>Registered Office Address:</h2>
    <ul type="none">
   <li>Flipkart Internet Private limited,</li>
   <li>Buildings Alyssa,Begonia &</li>
   <li>Clove Embassy Tech Village,</li>
    <li>Outer Ring Road,Devarabeesanahalli Village,</li>
   <li>Bangaluru,560103,</li>
   <li>Karnataka,India</li>
   <li>CIN:U51109KA2012PTCO66107</li>
   <li>Telephone:<span  style={{color:"blue",backgroundColor:"black"}}>  044-45614700/044-67415800</span></li>
    </ul>
  </div>
 </div>
 <hr style={{marginTop:"50px"}}/>
 <div className="foot">
    <div className="fo">
        <FaGift style={{marginLeft:"75px", backgroundColor:"yellow", marginTop:"30px"}}/>
        <h3>Become a Seller</h3>
    </div>
     <div className="fo">
 <GiFallingStar style={{marginLeft:"75px", backgroundColor:"yellow", marginTop:"30px"}}/>
<h3>Advertise</h3>
     </div>
         <div className="fo">
<MdOutlineCardGiftcard style={{marginLeft:"75px", backgroundColor:"yellow", marginTop:"30px"}}/>
<h3>Gift Card</h3>
         </div>
          <div className="fo">
<IoIosHelpCircleOutline style={{marginLeft:"75px", backgroundColor:"yellow", marginTop:"30px"}} />
<h3>Help Center</h3> 
          </div>
  <div className="fo">
    <h3 style={{marginTop:"25px"}}><span style={{fontSize:"20px",backgroundColor:"black"}}>©</span> 2007-2025 Flipkart.com</h3>
  </div>
  <div className="img" style={{marginLeft:"30px", backgroundColor:" rgb(13, 10, 10)", marginTop:"20px"}}>
    <img src={f1} style={{marginLeft:"90px", height:"25px",backgroundColor:" rgb(13, 10, 10)"}}/>
  </div>
 </div>
</div>
       
    );
};
export default last;