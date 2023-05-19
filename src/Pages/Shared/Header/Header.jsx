import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const navigation = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/allToys">All Toys</Link>
      </li>
      {user && (
        <div className="md:flex">
          <li>
            <Link to="/myToys">My Toys</Link>
          </li>
          <li>
            <Link to="/addToy">Add a Toy</Link>
          </li>
        </div>
      )}
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </>
  );
  const authenticationMenu = (
    <>
      {user ? (
        <div className="flex items-center">
          <Link className="text-lg rounded-md text-gray-100 py-2 px-5 bg-orange-400 border-none hover:bg-orange-600 mr-5">
            <button
              onClick={() => {
                logoutUser().then();
              }}
            >
              Logout
            </button>
          </Link>

          <Link>
            <div
              className="tooltip tooltip-bottom "
              data-tip={user.displayName}
            >
              <img
                className="w-12 h-12 object-contain rounded-full"
                src={user.photoURL}
                alt=""
              />
            </div>
          </Link>
        </div>
      ) : (
        <Link
          className="text-lg rounded-md text-gray-100 py-2 px-5 bg-orange-400 border-none hover:bg-orange-600 mr-5"
          to="/login"
        >
          Login
        </Link>
      )}
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
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <img className="md:w-10 w-8" src={logo} alt="" />
          <Link to="/">
            <h2 className="font-bold text-xl md:text-3xl text-gray-700">ToyTree</h2>
          </Link>
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
