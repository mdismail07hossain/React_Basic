import { PiArrowFatLineDownFill } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ toggle, toggleHandler }) => {
  return (
    <div className="z-100 text-[--theme-color1]" >
      <div className="navbar font-bold ">
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
              className="menu menu-sm dropdown-content rounded-box z-50 mt-3 w-52 p-2 shadow"
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

        {/* Large devices */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <div className="dropdown">
                <div tabIndex={0} role="button">
                  <div className="flex justify-center items-center gap-3">
                    About
                    <PiArrowFatLineDownFill />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content rounded-box z-[1] top-10 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link to="Presonal" className="hover:text-blue-500">Presonal</Link>
                  </li>
                  <li>
                    <Link to="Skill" className="hover:text-blue-500">Work Skills</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>

            {/* Toggle Theme */}
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                className="theme-controller"
                checked={toggle} // Check the box if toggle is true
                onChange={toggleHandler} // Handle change on checkbox
              />

              {/* Sun icon (light mode) */}
              <svg
                className={`swap-off h-10 w-10 fill-current ${toggle ? "hidden" : "inline"}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* Moon icon (dark mode) */}
              <svg
                className={`swap-on h-10 w-10 fill-current ${toggle ? "inline" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
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
