import React from "react";
import fo1 from "./assets/fo.jpg";
import fo2 from "./assets/wo.png";
const Fournav = () => {
    return (
<div className="fournav-container">
        <img src={fo1} alt="fournav"  />
        <div className="fournav">
            <ul>
                <li>
                    < a href="">New Releases</a>
                </li>
                <li>
                   < a href="">Jordan Sport</a>
                </li>
                <li>
                    < a href="">men</a>
                </li>
                <li>
                    < a href="">Women</a>
                    </li>
                <li>
                    < a href="">Kids</a>
                </li>
                </ul>

                </div>
                < img src={fo2} alt="fournav" className="fo2"/>
                <div className="fournav2">
                    <h3>Women's Air Jordan Collection</h3>
                    <h1>SHOW'EM UP</h1>
                    <p>Crafted for your flyest self, the new Air Jordan Collection brings iconic prints and elevated cuts.</p>
                    <button className="btn">shop</button>
                    </div>
                </div>
                );
                };
export default Fournav;