import React from "react";
import "./header.component.css";
import { ReactComponent as Watermark } from "@svg/watermark.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header-left">
        <Watermark className={"icon big"} />
        <nav>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to="/projects"
          >
            Projects
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to="/about"
          >
            About
          </NavLink>
        </nav>
      </div>
      <span></span>
    </header>
  );
}
