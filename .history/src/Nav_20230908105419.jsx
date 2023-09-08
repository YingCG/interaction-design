import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  let navigate = useNavigate();

  const handleClick = () => {
    // 👇️ navigate programmatically
    navigate("/about");
  };

  return (
    <div>
      Nav
      <button onClick={handleClick}>Navigate to About</button>
      <Link to="/">Home</Link>
      {/* <Link to="/about">About</Link> */}
    </div>
  );
}
