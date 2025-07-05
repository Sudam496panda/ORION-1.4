import React from "react";
import img1 from "../assets/food1.png";
import img2 from "../assets/food2.jpg";
import img3 from "../assets/food3.jpg";
import img4 from "../assets/food4.jpg";
import img5 from "../assets/food5.jpg";
import img6 from "../assets/food6.jpg";
import Foodsitem from "./Foodsitem";
const Foods = () => {
    const foods = [
        {
            id: 1,
            image: img1,
            name:"Special Prawns ",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
        },
        {
            id: 2,
            image: img2,
            name:"Egg Omlet",
            description: "",
        },
        {
            id: 3,
            image: img3,
            name:"Egg Noodles",
            description: "Lorem ipsum dolor sit amet,consetetur sadipscing elitr,sed diam nonumy",
        },
        {
            id: 4,
            image: img4,
            name:" Sweet Corn",
            description: "Lorem ipsum dolor sit amet,consetetur sadipscing elitr,sed diam nonumy",
        
        },
          {
            id: 5,
            image: img5,
            name:" Cauli flower",
            description: "Lorem ipsum dolor sit amet,consetetur sadipscing elitr,sed diam nonumy",
        },
          {
            id: 6,
            image: img6,
            name:" Fresh Vegetables",
            description: "Lorem ipsum dolor sit amet,consetetur sadipscing elitr,sed diam nonumy",
        },
    ]

return (
    <div className="foods">
        <div id="head">
            <h2>Food & Grocery</h2>
    </div>
    <div className="food-list">
            {foods.map((item) => (
                    <Foodsitem
            image={item.image}
            name={item.name}
            description={item.description}
          />
                 
            ))}
        </div>
        </div>
);
};
export default Foods;