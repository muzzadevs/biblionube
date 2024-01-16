import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaFolderOpen } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

const Sidebar = () => {
  const location = useLocation();
  const [selectedRoute, setSelectedRoute] = useState(location.pathname);

  useEffect(() => {
    setSelectedRoute(location.pathname);
  }, [location.pathname]);

  const handleButtonClick = (route) => {
    setSelectedRoute(route);
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link
            to="/"
            className={`navButton ${selectedRoute === "/" ? "active" : ""}`}
          >
            <IoHome size={"1em"} color="white" />
            <div
              className="navButtonText"
              onClick={() => handleButtonClick("/")}
              style={{ color: "white" }}
            >
              Inicio
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/archivos"
            className={`navButton ${
              selectedRoute === "/archivos" ? "active" : ""
            }`}
          >
            <FaFolderOpen size={"1em"} color="white" />
            <div
              className="navButtonText"
              onClick={() => handleButtonClick("/archivos")}
              style={{ color: "white" }}
            >
              Archivos
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/contacto"
            className={`navButton ${
              selectedRoute === "/contacto" ? "active" : ""
            }`}
          >
            <IoMdContact size={"1em"} color="white" />
            <div
              className="navButtonText"
              onClick={() => handleButtonClick("/contacto")}
              style={{ color: "white" }}
            >
              Contacto
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
