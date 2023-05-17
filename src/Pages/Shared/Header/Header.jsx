import React from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const navigation = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/allToys">All Toys</Link>
      </li>
      <li>
        <Link to="/myToys">My Toys</Link>
      </li>
      <li>
        <Link to="/addToy">Add a Toy</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </>
  );
  const authenticationMenu = (
    <>
      <Link
        className="text-lg rounded-md text-gray-100 py-2 px-5 bg-orange-400 border-none hover:bg-orange-600 mr-5"
        to="/login"
      >
        Login
      </Link>

      <Link className="text-lg rounded-md text-gray-100 py-2 px-5 bg-orange-400 border-none hover:bg-orange-600 mr-5">
        <button>Logout</button>
      </Link>

      <Link className="w-10">
        <img src={logo} alt="" />
      </Link>
    </>
  );
  return (
    <div className="navbar md:px-52 bg-white">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navigation}
            {authenticationMenu}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <img className="w-10" src={logo} alt="" />
          <h2 className="font-bold text-3xl text-gray-700">ToyTree</h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navigation}</ul>
      </div>
      <div className="navbar-end">{authenticationMenu}</div>
    </div>
  );
};

export default Header;
