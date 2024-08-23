import React, { useState } from "react";
import logo from "../assets/img/Vector.png";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container mx-auto shadow-2xl px-4 ro">
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center">
          <img src={logo} className="w-[30px]" alt="logo" />
          <h2 className="text-[24px] ml-3 font-circular font-bold">Travlog</h2>
        </div>
        <div className="hidden md:flex space-x-8">
          <a className="font-circular text-textColor font-bold" href="#">
            Home
          </a>
          <a className="font-circular text-textColor2 font-bold" href="#">
            Discover
          </a>
          <a className="font-circular text-textColor2 font-bold" href="#">
            Special Deals
          </a>
          <a className="font-circular text-textColor2 font-bold" href="#">
            Contact
          </a>
        </div>

        {/* Buttons for Larger Screens */}
        <div className="hidden md:flex space-x-4">
          <button className="font-circular text-[14px] text-textColor font-bold">
            Login
          </button>
          <button className="font-circular text-[14px] bg-btnColor text-primary font-bold rounded-[30px] px-4 py-2">
            Sign Up
          </button>
        </div>
        <div className="md:hidden">
          <button className="bg-btnColor p-1 rounded-lg" onClick={toggleMenu}>
            {isMenuOpen ? (
              <IoClose className="text-3xl text-[#FFE0D5]" />
            ) : (
              <IoMenu className="text-3xl text-[#FFE0D5]" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-start space-y-4 py-4">
          <a className="font-circular text-textColor font-bold" href="#">
            Home
          </a>
          <a className="font-circular text-textColor2 font-bold" href="#">
            Discover
          </a>
          <a className="font-circular text-textColor2 font-bold" href="#">
            Special Deals
          </a>
          <a className="font-circular text-textColor2 font-bold" href="#">
            Contact
          </a>
          <button className="font-circular text-[14px] text-textColor font-bold w-full text-left">
            Login
          </button>
          <button className="font-circular text-[14px] bg-btnColor text-primary font-bold rounded-[30px] w-full text-left py-2">
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
