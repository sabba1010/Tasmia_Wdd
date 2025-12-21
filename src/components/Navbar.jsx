import { FaSearch, FaUser, FaShoppingBag, FaBars } from "react-icons/fa";
import { useState } from "react";
import Discount from "./Discount";
import Logo from "../assets/logo/VelvetGlowLogo1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Discount />
      <div className="bg-base-100 px-4 sm:px-6 md:px-10 lg:px-20 shadow-sm">
        <div className="navbar py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Velvet Glow Logo" className="w-10 h-10" />
            <a className="text-2xl font-bold text-pink-600">Velvet Glow</a>
          </div>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal text-lg font-medium gap-4">
              <li><a>Home</a></li>
              <li><a>Shop</a></li>
              <li><a>Product</a></li>
              <li>
                <details>
                  <summary>Blog</summary>
                  <ul className="p-2 bg-base-100 z-10">
                    <li><a>Latest</a></li>
                    <li><a>Tips</a></li>
                  </ul>
                </details>
              </li>
              <li><a>Contact us</a></li>
            </ul>
          </div>
          <div className="flex items-center space-x-4 text-xl">
            <FaSearch className="cursor-pointer" />
            <FaShoppingBag className="cursor-pointer" />
            <FaUser className="cursor-pointer" />
            <div className="lg:hidden">
              <FaBars className="cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden mt-2">
            <ul className="menu bg-base-100 p-4 rounded-box space-y-2 text-base font-medium">
              <li><a>Home</a></li>
              <li><a>Shop</a></li>
              <li><a>Product</a></li>
              <li>
                <details>
                  <summary>Blog</summary>
                  <ul className="pl-4">
                    <li><a>Latest</a></li>
                    <li><a>Tips</a></li>
                  </ul>
                </details>
              </li>
              <li><a>Contact us</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

