import React from "react";
import m1 from "../assets/mo1.png";
import m2 from "../assets/mo2.png";
import m3 from "../assets/mo3.png";
import m4 from "../assets/mo4.png";
import m5 from "../assets/mo5.png";
import m6 from "../assets/mo6.png";
import m7 from "../assets/mo7.png";

const mobile = () => {
    const mobileitem = [
        {
                 id: 1,
                 image:m1,
                 name: "Realme C61",
                 title:"Just ₹7,699",
                 
            },
             {
                 id: 2,
                 image:m2,
                 name: "Poco M6 Plus",
                 title:"Just ₹ 16,999",
                 
            },
             {
                 id: 3,
                 image:m3,
                 name: "Nothng Phone 2 Pro",
                 title:"From ₹ 17,999*",
                 
            },
             {
                 id: 4,
                 image:m4,
                 name: "Vivo T4 Ultra",
                 title:"From ₹ 4000/m",
                 
            },
             {
                 id: 5,
                 image:m5,
                 name: "POCO C75 5G",
                 title:"Just ₹ 7,699",
                 
            },
             {
                 id: 6,
                 image:m6,
                 name: "Motorola GO5",
                 title:"Just ₹ 7,299",
                 
            },
             {
                 id: 7,
                 image:m7,
                 name: "Galaxy S24 FE",
                 title:"Just ₹ 34,999*",
                 
            },
    ]
    return (
            <div className="mobile">
              
                <div className="mo">
                       <h1>Best Deals on Smartphones</h1>
                <div className="mobile1">
                    { mobileitem.map(( mobileitemitems) => (
                        <div className="mobile2" key={ mobileitemitems.id}>
                                    <img src={ mobileitemitems.image} alt={ mobileitemitems.title} className="pop-img" />
                            <h3>{ mobileitemitems.name}</h3>
                            <h4>{ mobileitemitems.title}</h4>
                         </div>
                    ))}
         
           
                </div>
          </div>
          </div>
         );
        };
        export default mobile;
 