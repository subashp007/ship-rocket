import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/brands/shiprocket_logo.svg";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

function MobileNav() {
  const [isOpenHamburger, setIsOpenHamburger] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpenHamburger) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpenHamburger]);

  return (
    <nav className="fixed sm:hidden top-4 z-30 flex bg-white p-4 w-full items-center justify-between rounded-full shadow-2xl">
      {/* Overlay (Prevents scrolling) */}
      {isOpenHamburger && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setIsOpenHamburger(false)}
        ></div>
      )}

      <ul className="relative z-30 flex justify-between gap-4 w-full items-center">
        <li>
          <Link to="/home">
            <img src={Logo} alt="Logo" className="w-40" />
          </Link>
        </li>

        {/* Hamburger Icon */}
        <li>
          {isOpenHamburger ? (
            <button
              className="self-end text-2xl"
              onClick={() => setIsOpenHamburger(false)}
            >
              <IoClose />
            </button>
          ) : (
            <RxHamburgerMenu
              className="cursor-pointer text-2xl"
              onClick={() => setIsOpenHamburger(true)}
            />
          )}
        </li>
      </ul>

      {/* Mobile Menu */}
      {isOpenHamburger && (
        <div className="fixed top-24 w-fit mx-auto h-fit inset-0 bg-white shadow-lg p-6 flex flex-col gap-4 z-50 rounded-lg">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center justify-between">
              <button>Platform</button>
              <FaChevronRight />
            </li>
            <li className="flex items-center justify-between">
              <Link to="/">Pricing</Link>
            </li>
            <li className="flex items-center justify-between">
              <button>Partners</button>
              <FaChevronRight />
            </li>
            <li>
              <Link to="/">Track Order</Link>
            </li>
            <li className="flex items-center justify-between">
              <button>Resources</button>
              <FaChevronRight />
            </li>
            <li>
              <Link to="/" onClick={() => setIsOpenHamburger(false)}>
                Quick
              </Link>
            </li>
          </ul>

          {/* Login & Signup Buttons */}
          <div className="flex items-center justify-between gap-2 mt-4">
            <button className="border border-blue-600 opacity-50 w-fit text-blue-600 px-8 p-2 rounded-md">
              Track Order
            </button>
            <button className="border w-fit px-10 p-2 bg-blue-600 rounded-md text-white">
              Sign Up for free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default MobileNav;
