 import React from "react";
import { Link, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div id="navbar">
      <ul>
        <li>
          <Link to="/">Grocery</Link>
        </li>
        <li>
          <Link to="/mobiles">Mobile</Link>
        </li>
        <li>
          <Link to="/fashion">Fashion</Link>
        </li>
        <li>
          <Link to="/electronics">Electronics</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;