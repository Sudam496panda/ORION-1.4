import React from "react";

const  shopssitem= ({name,image }) => {
  return (
    <div className="sho">
        <img src={image}  className="sho-img"/>
          <h3 className="food">{name}</h3>
      </div>
  );
};

export default  shopssitem;