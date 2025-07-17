import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic here
    console.log("Logging in:", form);
  };

  return (
    <div className="min-h-screen bg-[#0e0d1b] flex items-center justify-center px-4">
      <div className="bg-[#1e1e2f] p-8 rounded-xl shadow-lg w-full max-w-md">
        <div className="text-center mb-6">
          <img
            src="https://nft-tailwind.preview.uideck.com/src/images/logo.svg"
            alt="Logo"
            className="mx-auto h-12"
          />
          <h1 className="text-2xl font-bold text-white mt-4">Welcome Back</h1>
          <p className="text-gray-400 text-sm">Log in to your NFT account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition"
          >
            Log In
          </button>
        </form>

        <div className="text-center text-sm text-gray-400 mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-indigo-500 hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;