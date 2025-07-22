import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // for hamburger icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-[#0F0F25]/60 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://nft-tailwind.preview.uideck.com/src/images/logo.svg"
            alt="Logo"
           className="h-10 max-w-full"
          />
         
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li>
            <Link to="/" className="hover:text-indigo-400 transition">Home</Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-indigo-400 transition">Login</Link>
          </li>
          <li>
            <Link to="/logout" className="hover:text-indigo-400 transition">Logout</Link>
          </li>
          <li>
            <Link to="/signup" className="hover:text-indigo-400 transition">Signin</Link>
          </li>
          <li>
            <Link to="/addnft" className="hover:text-indigo-400 transition">Create Item</Link>
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0F0F25] px-6 pb-6">
          <ul className="flex flex-col gap-4 mt-2 text-white font-medium">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-indigo-400 transition">Home</Link>
            </li>
            <li>
              <Link to="/login" onClick={() => setIsOpen(false)} className="hover:text-indigo-400 transition">Login</Link>
            </li>
            <li>
              <Link to="/logout" onClick={() => setIsOpen(false)} className="hover:text-indigo-400 transition">Logout</Link>
            </li>
            <li>
              <Link to="/signup" onClick={() => setIsOpen(false)} className="hover:text-indigo-400 transition">Signin</Link>
            </li>
            <li>
              <Link to="/addnft" onClick={() => setIsOpen(false)} className="hover:text-indigo-400 transition">Create Item</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;