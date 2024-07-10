import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logoutSuccess } from "../redux/slices/auth";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const userInfo = useSelector((state) => state.auth);
  const cartItems = useSelector((state) => state.cart.cartItems.length);
  const [menu, setMenu] = useState(true);
  const dispatch = useDispatch();
  const nav = useRef(null);
  const navItemClicked = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (nav.current && !nav.current.contains(e.target)) {
        setMenu(true);
        console.log("closing");
      }
    };
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <div className="relative z-50">
      <div
        id="nav"
        ref={nav}
        className="bg-[#0477ec] text-white w-full flex justify-between items-center h-[60px] max-w-full max-auto px-4"
      >
        <h3 className="text-2xl ml-20 font-bold cursor-pointer">
          <NavLink to="/">ShopKart.</NavLink>
        </h3>

        <ul className="m-20 h-full text-md md:flex items-center gap-x-2 hidden">
          <li className="p-4 cursor-pointer">
            <NavLink style={navItemClicked} to="/">
              Products
            </NavLink>
          </li>
          {userInfo.user ? (
            <>
              <li className="p-4 cursor-pointer">
                <NavLink style={navItemClicked} to="/favourites">
                  Favourites
                </NavLink>
              </li>
              <li className="p-4 cursor-pointer">
                <NavLink style={navItemClicked} to="/orders">
                  Orders
                </NavLink>
              </li>
              <li className="px-4 cursor-pointer">
                <button
                  className="bg-red-500 p-3 rounded-md text-white"
                  onClick={() => dispatch(logoutSuccess())}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li className="p-4 cursor-pointer">
              <NavLink style={navItemClicked} to="/login">
                Login
              </NavLink>
            </li>
          )}
          <li className="p-3 h-full flex items-center relative w-fit cursor-pointer">
            <NavLink style={navItemClicked} to="/cart">
              <FaShoppingCart size={25} />
              <div className="absolute top-0 right-0 bg-red-500 px-2 w-fit h-[20px] flex justify-center items-center rounded-full text-sm ">
                {cartItems}
              </div>
            </NavLink>
          </li>
        </ul>
        <div className="flex gap-5 md:hidden">
          <NavLink className="relative" style={navItemClicked} to="/cart">
            <FaShoppingCart size={25} />
            <div className="absolute top-[-15px] right-[-10px] bg-red-500 px-2 w-fit h-[20px] flex justify-center items-center rounded-full text-sm ">
              {cartItems}
            </div>
          </NavLink>
          <AiOutlineMenu
            className="cursor-pointer"
            onClick={() => setMenu((prev) => !prev)}
            size={25}
          />
        </div>
      </div>
      <div
        className={`bg-white -z-10 absolute w-full flex flex-col transition-all
      ${menu ? "top-[-500%]" : "top-[100%]"} 
      `}
      >
        <ul className="p-5 h-full text-lg flex flex-col items-center gap-2 md:hidden gap-x-2">
          <li className="p-4 cursor-pointer">
            <NavLink style={navItemClicked} to="/">
              Products
            </NavLink>
          </li>
          {userInfo.user ? (
            <>
              <li className="p-4 cursor-pointer">
                <NavLink style={navItemClicked} to="/favourites">
                  Favourites
                </NavLink>
              </li>
              <li className="p-4 cursor-pointer">
                <NavLink style={navItemClicked} to="/orders">
                  Orders
                </NavLink>
              </li>
              <li className="px-4 cursor-pointer">
                <button
                  className="bg-red-500 w-[150px] p-3 rounded-full text-white"
                  onClick={() => dispatch(logoutSuccess())}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li className="p-4 cursor-pointer">
              <NavLink style={navItemClicked} to="/login">
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
