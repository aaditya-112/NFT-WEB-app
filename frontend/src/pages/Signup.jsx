import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle signup logic here
    console.log("Signing up:", form);
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
          <h1 className="text-2xl font-bold text-white mt-4">Create Account</h1>
          <p className="text-gray-400 text-sm">Join the NFT platform today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Username</label>
            <input
              type="text"
              name="username"
              required
              value={form.username}
              onChange={handleChange}
              placeholder="Your username"
              className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

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
            Sign Up
          </button>
        </form>

        <div className="text-center text-sm text-gray-400 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-500 hover:underline">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
