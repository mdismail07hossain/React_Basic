import React from "react";
import { PiArrowFatLineDownFill } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="z-100">
      <div className="navbar bg-gray-300 font-bold ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a>About</a>
                <ul className="p-2">
                  <li>
                    <Link to="Presonal">Presonal</Link>
                  </li>
                  <li>
                    <Link to="Skill">Work Skills</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost text-xl">
            React ai
          </NavLink>
        </div>
        {/* lagre device  */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  
                >
               <div className="flex justify-center items-center gap-3">
               About 
               <PiArrowFatLineDownFill />
               </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] top-10 mt-3 w-52 p-2 shadow"
                >
                 <li>
                    <Link to="Presonal">Presonal</Link>
                  </li>
                  <li>
                    <Link to="Skill">Work Skills</Link>
                  </li>
                </ul>
              </div>
            </li>
           

            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
