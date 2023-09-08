import React from "react";
import { Link } from "react-router-dom";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Nav() {
  let navigate = useNavigate();

  // const handleClick = () => {
  //   // 👇️ navigate programmatically
  //   navigate("/about");
  // };

  return (
    <div>
      Nav
      <Link to="/about" onClick={() => navigate("about")}>
        Navigate to About
      </Link>
      <Link to="/">Home</Link>
      <Outlet />
    </div>
  );
}
