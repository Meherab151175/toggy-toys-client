import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import './NavBar.css'
import logo from '../../../assets/images/logo.webp'

const NavBar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [userInfo, setUserInfo] = useState({ name: 'John Doe', email: 'johndoe@example.com' });
    const {user,logOut} = useContext(AuthContext)
  console.log(user)
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    
    const handleLogout = ()=>{
      logOut()
      .then(()=>{
        // navigator('/')
      })
      .catch()
    }
    
  return (
    <div className="navbar text-white bg-[#333333] py-3 px-[5%]">
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
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-slate-950-600-100 rounded-box w-52"
          >
<li  className="hover:bg-white rounded-lg font-bold text-[18px] ">
          <NavLink  exact activeClassName="active" to='/'>Home</NavLink>
          </li>
          <li className="hover:bg-white rounded-lg font-bold text-[18px] ">
          <NavLink  activeClassName="active" to='/allToys'>All Toys</NavLink>
          </li>
          <li className="hover:bg-white rounded-lg font-bold text-[18px] ">
          <NavLink  activeClassName="active" to='/addToys'>Add Toys</NavLink>
          </li>
          <li className="hover:bg-white rounded-lg font-bold text-[18px] ">
          <NavLink  activeClassName="active" to='/myToys'>My Toys</NavLink>
          </li>
          <li className="hover:bg-white rounded-lg font-bold text-[18px] ">
          <Link to='/blog'>Blog</Link>
          </li>
          </ul>
        </div>
        <img src={logo} width='30px' alt="" />
        <a className="btn btn-ghost normal-case text-xl">The Toggy World</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li  className="hover:bg-white rounded-lg font-bold text-[18px] ">
          <NavLink  exact activeClassName="active" to='/'>Home</NavLink>
          </li>
          <li className="hover:bg-white rounded-lg font-bold text-[18px] ">
          <NavLink  activeClassName="active" to='/allToys'>All Toys</NavLink>
          </li>
          <li className="hover:bg-white rounded-lg font-bold text-[18px] ">
          <NavLink  activeClassName="active" to='/addToys'>Add Toys</NavLink>
          </li>
          <li className="hover:bg-white rounded-lg font-bold text-[18px] ">
          <NavLink  activeClassName="active" to='/myToys'>My Toys</NavLink>
          </li>
          <li className="hover:bg-white rounded-lg font-bold text-[18px] ">
          <Link to='/blog'>Blog</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? <div
          className=""
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative flex gap-5">
          <button onClick={handleLogout} className="text-white text-sm font-bold ">
              Logout
          </button>
            <img
              className="rounded-full w-10 h-10 cursor-pointer"
              src="path_to_profile_picture"
              alt="Profile"
            />
            {isHovered && (
              <div className="absolute top-full right-0 mt-2 bg-white p-2 rounded shadow">
                <p className="text-gray-800">{user?.displayName}</p>
                <p className="text-gray-500 text-sm">{user?.email}</p>
                
              </div>
            )}
          </div>
        </div> : 
        <>
          <Link to='/login'>Login</Link>
        </>}
      </div>
    </div>
  );
};

export default NavBar;
