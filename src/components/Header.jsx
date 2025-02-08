// // import React, { useState } from "react";
// // import Logo from "../assets/images/brands/shiprocket_logo.svg";
// // import { Link } from "react-router-dom";
// // import { FaChevronDown } from "react-icons/fa";

// // const nav = [
// //   "Product",
// //   "Platform",
// //   "Pricing",
// //   "Partners",
// //   "Track Order",
// //   "Resource",
// // ];

// // function Header() {
// //   const [activeDropdown, setActiveDropdown] = useState(false);

// //   return (
// //     <nav className="flex bg-white p-4 w-full">
// //       <img src={Logo} alt="Logo" className="w-40" />
// //       <ul className="flex gap-4 w-full items-center">
// //         {nav.map((item) => {
// //           <li className="text-black w-fit">
// //             {item}
// //             <FaChevronDown
// //               style={{
// //                 transition: "transform 0.2s",
// //                 transform:
// //                   activeDropdown === item ? "rotateX(180deg)" : "rotateX(0deg)",
// //               }}
// //             />
// //           </li>;
// //         })}
// //       </ul>
// //       <div className="flex gap-2">
// //         <button className="border border-blue-600 w-24 text-blue-600 p-2 rounded-xl">
// //           Log In
// //         </button>
// //         <button className="border w-24 p-2 bg-blue-600 rounded-xl text-white">
// //           Try for free
// //         </button>
// //       </div>
// //     </nav>
// //   );
// // }

// // export default Header;

// import React, { useState } from "react";
// import Logo from "../assets/images/brands/shiprocket_logo.svg";
// import { Link } from "react-router-dom";
// import { FaChevronDown } from "react-icons/fa";
// import ProductsLinkBox from "./Products/ProductsLinkBox";

// const nav = [
//   "Product",
//   "Platform",
//   "Pricing",
//   "Partners",
//   "Track Order",
//   "Resource",
// ];

// function Header() {
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   return (
//     <nav className="flex bg-white p-4 w-full justify-between items-center">
//       {/* Logo */}
//       <img src={Logo} alt="Logo" className="w-40" />

//       {/* Navigation Links */}
//       <ul className="flex gap-6 items-center">
//         {nav.map((item) => (
//           <li
//             key={item}
//             className="relative flex items-center gap-1 text-black cursor-pointer"
//             onMouseEnter={() => setActiveDropdown(item)}
//             onMouseLeave={() => setActiveDropdown(null)}
//           >
//             {item}
//             <FaChevronDown
//               style={{
//                 transition: "transform 0.2s",
//                 transform:
//                   activeDropdown === item ? "rotate(180deg)" : "rotate(0deg)",
//               }}
//             />
//           </li>
//         ))}
//         <li className="text-blue-500 hover:text-blue-400">Quick</li>
//       </ul>

//       {/* Buttons */}
//       <div className="flex gap-2">
//         <button className="border border-blue-600 w-24 text-blue-600 p-2 rounded-xl">
//           Log In
//         </button>
//         <button className="border w-24 p-2 bg-blue-600 rounded-xl text-white">
//           Try for free
//         </button>
//       </div>
//     </nav>
//   );
// }

// const Dropdown = ({ activeDropdown }) => {
//   return (
//     <div className="absolute w-fit border-4 border-red-600 bg-white text-black p-4 rounded shadow-md">
//       {activeDropdown === "Products" && <ProductsLinkBox />}
//     </div>
//   );
// };
// export default Header;

import React, { useState } from "react";
import Logo from "../assets/images/brands/shiprocket_logo.svg";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import ProductsLinkBox from "./Products/ProductsLinkBox";

const nav = [
  "Product",
  "Platform",
  "Pricing",
  "Partners",
  "Track Order",
  "Resource",
];

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="flex bg-white p-4 w-full justify-between items-center relative">
      {/* Logo */}
      <Link to="/">
        <img src={Logo} alt="Logo" className="w-40" />
      </Link>

      {/* Navigation Links */}
      <ul className="flex gap-6 items-center">
        {nav.map((item) => (
          <li
            key={item}
            className="relative flex items-center gap-1 text-black cursor-pointer"
            onMouseEnter={() => setActiveDropdown(item)}
            // onMouseLeave={() => setActiveDropdown(null)}
          >
            {item}
            <FaChevronDown
              style={{
                transition: "transform 0.2s",
                transform:
                  activeDropdown === item ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
            {activeDropdown === item && (
              <Dropdown activeDropdown={activeDropdown} />
            )}
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="flex gap-2">
        <button className="border border-blue-600 w-24 text-blue-600 p-2 rounded-xl">
          Log In
        </button>
        <button className="border w-24 p-2 bg-blue-600 rounded-xl text-white">
          Try for free
        </button>
      </div>
    </nav>
  );
}

const Dropdown = ({ activeDropdown }) => {
  return (
    <div className="fixed top-10 left-0 w-[500px] bg-white border border-gray-300 p-4 rounded shadow-lg z-50">
      {activeDropdown === "Product" && <ProductsLinkBox />}
      {activeDropdown === "Platform" && <div>Platform Content</div>}
      {activeDropdown === "Pricing" && <div>Pricing Content</div>}
      {activeDropdown === "Resource" && <div>Resource Content</div>}
    </div>
  );
};


export default Header;
