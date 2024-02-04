import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logoutSuccess } from "../redux/slices/auth";

const Navbar = () => {
  const userInfo = useSelector((state) => state.auth);
  const cartItems = useSelector((state) => state.cart.cartItems.length);
  const dispatch = useDispatch();
  const navItemClicked = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };
  return (
    <div className="bg-[#0477ec] text-white w-full flex justify-between items-center h-[60px] max-w-[1640px] max-auto px-4">
      <h3 className="text-2xl ml-20 font-bold cursor-pointer">
        <NavLink to="/">ShopKart.</NavLink>
      </h3>

      <ul className="m-20 h-full text-md flex items-center gap-x-2">
        <li className="p-4 cursor-pointer">
          <NavLink style={navItemClicked} to="/">
            Products
          </NavLink>
        </li>
        {userInfo.user ? (
          <>
            <li className="p-4 cursor-pointer">
              <NavLink style={navItemClicked} to="/favourites">Favourites</NavLink>
            </li>
            <li className="p-4 cursor-pointer">
              <NavLink style={navItemClicked} to="/orders">Orders</NavLink>
            </li>
            <li className="p-4 cursor-pointer">
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
    </div>
  );
};

export default Navbar;
