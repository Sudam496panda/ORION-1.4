import React from "react";
import pop1 from "../assets/po1.png";
 import pop2 from "../assets/po2.png";
 import pop3 from "../assets/po3.png";
const popular= () => {
    const popularitem = [
        {
            id: 1,
            image:pop1,
            name: "Jordan Air Rev",
            title:"Golf Shoes",
               Data:"MRP:₹ 21 695.00",
        },
   {
            id: 2,
            image:pop2,
            name: "Luka 4 PF 'Bloodline'",
            title:"Basketball Shoes",
               Data:"MRP:<₹ >11 895.00",
        },
     {
            id: 3,
            image:pop3,
            name: "Air Jordan Mule",
            title:"Golf Shoes",
            Data:"MRP:₹ 8 895.00",
        },
    ]
    return (
        
            <div className="papular">
                  <div className="h2">
                     <h1>SHOP JORDAN ESSENTIALS</h1>
                  </div>
    <div className="papulars-list">
         
            {popularitem.map((papularitems) => (
            <div className="papularobj" key={papularitems.id}>
             
                    <img src={papularitems.image} alt={papularitems.title} className="pop-img" />
                    <h3>{papularitems.name}</h3>
                   <h4>{papularitems.title}</h4>

                   <h2>{papularitems.Data}</h2>
                </div>
                 
            ))}
        </div>
        </div>
);
};
export default popular;
    