 import React from "react";
import exp1 from "../assets/ex1.jpg";
import exp2 from "../assets/ex2.jpg"
const explore = () => {
return (
    <div className="expm">
        <h1>EXPLORE MORE FROM JORDAN</h1>
    <div className="exp">
        <div className="expimg">
              <img src={exp2} alt="Nike Logo" />
              <h3>Jordan Basketball</h3>
              <h2>Find The Shoe That Hoops Like You</h2>
              <button className="btn1">Learn More</button>
        </div>
          <div className="expimg">
              <img src={exp1} alt="Nike Logo" />
              <h2 className="h2"> Explore Jordan Basketball</h2>
              <button className="btn2">explore</button>
        </div>
    </div>
    </div>
);
};
export default explore;
   
 