import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Nav() {
  // let navigate = useNavigate();

  // const handleClick = () => {
  //   // 👇️ replace set to true
  //   navigate("/about", { replace: true });
  // };

  return (
    <div>
      Nav
      {/* <Link to="/about" onClick={handleClick}>
        Navigate to About
      </Link> */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Outlet />
    </div>
  );
}
