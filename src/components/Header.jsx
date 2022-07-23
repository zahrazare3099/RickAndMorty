import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <div className="Header d-flex flex-column w-100">
      <div
        className="p-4 w-100 d-flex flex-fill justify-content-between "
        style={{ backgroundColor: "#EEEEEE" }}
      >
        <div className="d-flex col-3">
          <span>Rick & Morty</span>
          <span className="text-info px-1">Wiki</span>
        </div>
        <div className="d-flex col-2 text-muted justify-content-around font-size-bold">
          <Link to="/Location" className="text-muted text-decoration-none">
            <span
              className="menuItem hover-overlay mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
            >
              Location
            </span>
          </Link>

          <Link to="/Episod" className="text-muted text-decoration-none px-1">
            <span className="menuItem"> Episod</span>
          </Link>

          <Link to="/Characters" className="text-muted text-decoration-none">
            <span className="menuItem"> Characters </span>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
