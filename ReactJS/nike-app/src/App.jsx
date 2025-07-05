  
import React from "react";
import "./App.css";
import Topnav from "./Components/topnav";
import Secondnav from "./Components/secondnav";
 import Thirdnav from "./Components/thirdnav";
 import Fournav from "./fournav";
 import Shop from "./Components/shop";
 import Popular from "./Components/popular";
import Explore from "./Components/explore";
import Last from "./Components/last";
import Footer from "./Components/footer";
 const App = () => {
  return (
    <div>
  
       <Topnav />
       <Secondnav />
        <Thirdnav />
        <Fournav />
        <Shop />
        <Popular />
        <Explore />
        <Last />
        <Footer />
         </div>
  );
};

export default App;
