import React from "react";
 import fea1 from "../assets/fi1.png";
 import fea2 from "../assets/fi2.png";
 import fea3 from "../assets/fi3.png";
 


const Features = () => {
const features = [
    {
        id: 1,
        image: fea1,
        title: "Fast Delivery",
        description: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
    },
    {
        id: 2,
        image: fea2,
        title: "Easy To Use",
        description: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
    },
    {
        id: 3,
        image: fea3,
        title: "24/7 Support",
        description: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
    },
]
return  (
    <div className="features">
        <div className="main-part"> 
        <h1>What We Feature</h1>
        <p>Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Phasellus viverra orci sed risus tinci dunt tempor. Nulla malesuada vestibulum nibh.</p>
        </div>
        <div className="feature-cards">
            {features.map((feature) => (
                <div className="featurecard" key={feature.id}>
                    <img src={feature.image} alt={feature.title} className="fea-img" />
                    <h2>{feature.title}</h2>
                    <p>{feature.description}</p>
                </div>
            ))}
        </div>
        </div>
            );
            }
export default Features;        