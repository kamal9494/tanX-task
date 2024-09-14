import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/slices/auth";
import { toast } from "sonner";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loading = useSelector((state) => state.auth.registerLoading);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(registerUser({ email, password, name }));
      const data = result?.payload;
      const error = result?.error;

      if(error) {
        toast.error(error.message || "Registration failed");
        return;
      }

      if (data) {
        toast.success(`Logged in as ${data.user.name}`);
        nav("/");
        setEmail("");
        setPassword("");
        setName("");
      }
    } catch (error) {
      console.error("An error occurred during registration:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="bg-[#e5eef8] h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div className="bg-[#fff] w-[400px] p-7 rounded-lg shadow-md flex flex-col gap-6">
          <h2 className="font-semibold text-3xl">Register</h2>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              className="bg-[#f1f5f9] p-3 rounded-full w-full"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="bg-[#f1f5f9] p-3 rounded-full w-full"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="bg-[#f1f5f9] p-3 rounded-full w-full"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex justify-between items-center">
            <p className="text-[#3a84ea]">
              <NavLink to="/login">Already a user? Login here</NavLink>
            </p>
            <button
              type="submit"
              className={`w-[110px] p-2 bg-[#1c73e7] text-white rounded-full ${
                loading || !email || !password || !name
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={loading || !email || !password || !name}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
