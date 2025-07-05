import React from "react";
import d1 from "../assets/dr1.png";
import d2 from "../assets/dr2.png";
import d3 from "../assets/dr3.png";
import d4 from "../assets/dr4.png";
import d5 from "../assets/dr5.png";
import d6 from "../assets/dr6.png";
import d7 from "../assets/dr7.png";
const dress = () => {
 const dressitem = [
    {
         id: 1,
         image:d1,
         name: "Dresses...",
         title:"Under ₹ 499",
         
    },
        {
         id: 2,
         image:d2,
         name: "Kurta Sets",
         title:"Under ₹ 499",
         
    },
        {
         id: 3,
         image:d3,
         name: "Women's Heels",
         title:"Under ₹ 499",
         
    },
        {
         id: 4,
         image:d4,
         name: "Popular picks!",
         title:"Under ₹ 499",
         
    },
        {
         id: 5,
         image:d5,
         name: "Bestselling Sarees",
         title:"Under ₹ 499",
         
    },
        {
         id: 6,
         image:d6,
         name: "USPA,Allen Solly",
         title:"55-80% Off",
         
    },
 
 ]
 return (
    <div className="dress1">
      
        <div className="dr">
               <h1>499 Only</h1>
        <div className="dress2">
            {dressitem.map((item) => (
                <div className="dress" key={item.id}>
                            <img src={item.image} alt={item.title} className="pop-img" />
                    <h3>{item.name}</h3>
                    <h4>{item.title}</h4>
                 </div>
            ))}
 
  <img src={d7} style={{height:"450px", marginTop:"-99px",marginLeft:"11px"}} alt="flip Logo"  />
        </div>
  </div>
  </div>
 );
};
export default dress;