import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  let navigate = useNavigate();

  // const handleClick = () => {
  //   // 👇️ navigate programmatically
  //   navigate("/about");
  // };

  return (
    <div>
      Nav
      <Link onClick={() => navigate("about")}>Navigate to About</Link>
      <Link to="/">Home</Link>
    </div>
  );
}
