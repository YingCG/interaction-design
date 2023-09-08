import React from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export default function Nav() {
  //   let navigate = useNavigate();

  return (
    <div>
      Nav
      <Link to="/about">About</Link>
      <Link to="/about">Product</Link>
    </div>
  );
}
