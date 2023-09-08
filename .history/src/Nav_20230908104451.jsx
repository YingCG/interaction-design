import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  let navigate = useNavigate();

  return (
    <div>
      Nav
      <div onClick={() => navigate("/about")} key={index}></div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}
