import React from "react";
import { IoIosPhonePortrait } from "react-icons/io";

export const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <h1>BAGG</h1>
        <nav className="navigation">
          <ul>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Company</a>
            </li>
            <li>
              <a href="">Products</a>
            </li>
          </ul>
          <div className="nav-btn">
            <div>
              <IoIosPhonePortrait className="green" />
            </div>
            <li>
              <a href="">Download</a>
            </li>
          </div>
        </nav>
      </div>
    </>
  );
};
