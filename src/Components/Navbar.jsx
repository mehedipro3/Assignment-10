import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);



  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/allVisa">All visa</NavLink></li>
      <li><NavLink to="/addVisa">Add Visa</NavLink></li>
      <li><NavLink to="/myAddedVisa">My added visa</NavLink></li>
      <li><NavLink to="/visaApplication">Visa applications</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">E-Visa</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-2">

        {user?.photoURL ? <div>
          <img className="w-10 rounded-full" src={user?.photoURL} alt="User Avatar" />
        </div> : ""}


        {user?.email ? (
          <button onClick={logOut} className="btn btn-neutral">LogOut</button>
        ) : (
          <>
            <Link to="/auth/login" className="btn btn-neutral">Login</Link>
            <Link to="/auth/register" className="btn btn-neutral">Register</Link>
          </>
        )}



      </div>
    </div>
  );
};

export default Navbar;