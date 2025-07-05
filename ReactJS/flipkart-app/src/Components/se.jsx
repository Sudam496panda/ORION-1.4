import React from "react";
import s1 from "../assets/se1.png";
import s2 from "../assets/se2.png";
import s3 from "../assets/se3.png";
import s4 from "../assets/se4.png";
import s5 from "../assets/se5.png";
import s6 from "../assets/se6.png";
import s7 from "../assets/se7.png";
import s8 from "../assets/se8.png";
import s9 from "../assets/se9.png";

const sec = () => {
    return(
<div className="sec">
    <div className="sec1">
   <div className="img">
    <img src={s1}/>
    <h4>Grocery</h4>
   </div>
   <div className="img">
<img src={s2}/>
<h4>Mobiles</h4>
   </div>
   <div className="img">
    <img src={s3} style={{marginTop:"-9px",height:"80px"}}/>
      <h4>Fashion</h4>
   </div>
   <div className="img">
    <img src={s4}/>
     <h4>Electronics</h4>
   </div>
   <div className="img">
    <img src={s5} style={{marginTop:"-10px"}}/>
    <h4>Home & Furniture</h4>
   </div>
   <div className="img">
    <img src={s6} style={{marginTop:"-10px",height:"80px"}}/>
      <h4>Appliances</h4>
   </div>
   <div className="img" style={{marginTop:"-1px"}}>
    <img src={s7} style={{height:"90px"}}/>
    <h4>Flight Booking</h4>
   </div>
   <div className="img">
    <img src={s8} style={{marginTop:"-10px"}}/>
    <h4>Beauty,Toys & More</h4>
   </div>
   <div className="img">
    <img src={s9} style={{marginTop:"-8px"}}/>
    <h4>Two Wheelers</h4>
   </div>
</div>
</div>
    );
};
export default sec;