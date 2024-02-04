import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const LoginView = ({ children, role }) => {
  const userInfo = useSelector((state) => state.auth);
  if (userInfo.user) return <>{children}</>;
  else
    return (
      <div className="h-[80vh] flex items-center justify-center flex-col gap-5 text-md text-center">
        <div className="flex flex-col gap-2">
          <p>Please login to access this page</p>
        </div>
        <NavLink
          className="bg-[#0d6efd] w-[200px] p-1 px-2 rounded-md text-white text-center hover:bg-[#0b5ed7]"
          to="/login"
        >
          Login
        </NavLink>
      </div>
    );
};

export default LoginView;
