import React from "react";
import logo from "../../assets/image/logo.png";
import logo1 from "../../assets/image/call.svg";

function Header() {
  return (
    <header className="flex justify-between items-center p-4 md:px-16 bg-white shadow-sm">
      <div className="flex items-center space-x-2">
        <img
          src={logo}
          alt="Anya's Wellness Logo"
          className="w-40 h-20 object-contain"
        />
      </div>

      <div className="flex items-center border border-yellow-200 bg-yellow-100 rounded overflow-hidden">
        <div className="p-3 bg-white flex items-center justify-center">
          <div className="w-5 h-5">
            <img src={logo1} alt="call logo" />
          </div>
        </div>
        <span className="px-4 py-2 text-lg font-bold text-brown-800">
          +91 9526 813 000
        </span>
      </div>
    </header>
  );
}

export default Header;
