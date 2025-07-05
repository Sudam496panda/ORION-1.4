
import React from "react";

const  Foodsitem= ({image,name,description }) => {
  return (
     
    <div className="imgbox">
      <div className="img">
        <img src={image}  className="food-img"/>
          <h3 className="food">{name}</h3>
          <p className="para">{description}</p>
        </div>
      </div>
 
    
  );
};

export default  Foodsitem;
