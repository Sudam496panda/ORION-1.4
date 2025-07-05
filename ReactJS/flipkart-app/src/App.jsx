import React from 'react'
import './App.css'
import Navbar from "./Components/Navbar";
import Topnav from "./Components/topnav";
import Se from "./Components/se";
import Second from "./Components/second";
import Dress from  "./Components/dress";
import Mobile from "./Components/mobile";
import Product from "./Components/product";
 import Last from "./Components/last";
 import { allRoutes } from "./AllRoutes";
import { BrowserRouter, Routes, Route } from "react-router";

export const example = createContext();

    const App = () => {
 
        const renderAllRoutes = () => {
    return allRoutes.map((route, index) => {
      return <Route key={index} path={route.path} element={route.Component} />;
    });
  };
  return (
   <div>
   {/* <Topnav />
    <Se /> 
   <Second />
   <Dress />
   <Mobile />
   <Product />
   <Last /> */}
      <example.Provider value={{ name: "flipkart" }}>
        <BrowserRouter>
          <Navbar />
          <Routes>{renderAllRoutes()}</Routes>
        </BrowserRouter>
      </example.Provider>
   </div>
  );
};

export default App;
