import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-center py-10 text-white header item-center gap-x-5">
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to={"/movies"}
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Movie
      </NavLink>
    </header>
  );
};

export default Header;
