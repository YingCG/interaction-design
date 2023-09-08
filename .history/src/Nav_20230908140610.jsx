import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      Nav
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Outlet />
    </div>
  );
}
