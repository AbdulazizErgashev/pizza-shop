import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import Bag from "../assets/bag.png";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["Home", "Menu", "Events", "About us"];

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <nav className="navbar-bg sticky top-0 z-50">
      <div className="max-w-[85.438rem] mx-auto py-8 md:py-10 px-4 md:px-0 flex items-center justify-between relative">
        <div className="cursor-pointer flex-shrink-0">
          <img src={Logo} alt="Logo" className="w-32" />
        </div>

        <ul className="hidden lg:flex gap-20 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link) => (
            <li key={link} className="cursor-pointer text-[#A3A3A3] text-lg">
              {link}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <button className="login-btn text-white font-medium text-lg px-6 py-2 cursor-pointer hidden lg:block">
            Log in
          </button>
          <button className="cursor-pointer">
            <img src={Bag} alt="Bag" className="w-8 h-8" />
          </button>
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-orange-400"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden"
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-gradient-to-b from-[#1e0c00] via-[#1f0700] to-[#170a00] transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden shadow-lg`}
      >
        <div className="flex flex-col items-center gap-6 py-10">
          <div className="flex justify-end w-full pr-4 pt-4">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-orange-400"
            >
              <X size={28} />
            </button>
          </div>

          {navLinks.map((link) => (
            <li
              key={link}
              className="list-none cursor-pointer text-[#A3A3A3] text-lg hover:text-white transition"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </li>
          ))}
          <button className="login-btn text-white font-medium text-lg px-10 py-2 cursor-pointer">
            Log in
          </button>
        </div>
      </div>
    </nav>
  );
}
