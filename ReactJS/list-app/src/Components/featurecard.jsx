
import React from "react";

const  featurecard= ({image,title,description }) => {
  return (
          <div className="food-item">
      <img src={image} alt={title} className="food-img" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
 
    
  );
};

export default  featurecard;
