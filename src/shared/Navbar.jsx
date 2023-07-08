import { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navLink = (
    <>
      <li>
        <Link to="/posts">
          <a>Home</a>
        </Link>
      </li>
      {user ? (
        <li>
          <Link to="/createCommunity">Create Community</Link>
        </li>
      ) : (
        ""
      )}
      {user ? (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      ) : (
        ""
      )}
    </>
  );
    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-2xl font-bold">
            Travel <span className="text-orange-600"></span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        {user ? (
          <div className="navbar-end">
            <img
              src={user.photoURL}
              className="rounded-full h-12 w-12 me-4"
              alt=""
            />
            <button
              onClick={handleLogout}
              className="btn bg-red-600 hover:bg-red-700 text-white border-0"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="navbar-end">
            <Link to="/">
              <button className="btn bg-red-600 hover:bg-red-700 text-white border-0">
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    );
};

export default Navbar;