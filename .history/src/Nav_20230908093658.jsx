import React from "react";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  let navigate = useNavigate();

  return (
    <div>
      Nav
      <Link to="/about">About</Link>
      <Link to="/about">Product</Link>
    </div>
  );
}
