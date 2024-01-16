import React from "react";
import { FaBook } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <FaBook
          color="#6c63ff"
          style={{ marginRight: "10px" }}
          size={"1.75em"}
        />
        <p>biblionube</p>
      </div>
    </div>
  );
};

export default Navbar;
