import React from "react";
import su1 from "../assets/sh1.png";
import su2 from "../assets/sh2.png";
import su3 from "../assets/sh3.png";
import shopssitem from "./shopssitem";
const Shop = () => {
    const shops = [
        {
            id: 1,
            name: "Just In",
            image:su1,
        },
        {
            id: 2,
            name: "Air Jordan 4 RM",
            image: su2,
        },
        {
            id: 3,
            name: "Jordon Basketball Shoes",
            image:su3,
        },
    ]
    return (
        
            <div className="shoes">
                  <div className="h2">
                     <h1>SHOP JORDAN ESSENTIALS</h1>
                  </div>
    <div className="shooe-list">
         
            {shops.map((shopes) => (
            <div className="shopssitem" key={shopes.id}>
             
                    <img src={shopes.image} alt={shopes.title} className="sho-img" />
                    <h3>{shopes.name}</h3>
                   
                </div>
                 
            ))}
        </div>
        </div>
);
};
export default Shop;
    