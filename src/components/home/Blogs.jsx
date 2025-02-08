// import { BsArrowRight } from "react-icons/bs";
// import product from "../../assets/images/blogs/Product-Ideas-For-Online-Selling.jpg";
// import otp from "../../assets/images/blogs/WhatsApp-OTP.jpg";
// import Grocery from "../../assets/images/blogs/Top-10-Grocery-Apps-in-India.jpg";

// const socialmedias = [
//   {
//     Image:product,
//     title: "eCommerce",
//     desc: "7 Best Product Ideas For Online Selling in 2025",
//   },
//   {
//     Image:otp,
//     title: "Shiprocket Engage 360",
//     desc: "WhatsApp OTP Guide: How to Send OTP on WhatsApp Easily",
//   },
//   {
//     Image:Grocery,
//     title: "Hyperlocal delivery",
//     desc: "Your Guide To Top Grocery Delivery Apps: Bringing The Market To",
//   },
// ];

// function Blogs() {
//   return (
//     <div className="bg-black opacity-90 py-12 space-y-8 relative">
//       {/* Title Section */}
//       <div className="text-center md:text-left px-4">
//         <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
//           Discover Our Blogs
//         </h1>
//         <p className="text-zinc-400 mt-2 text-lg md:text-xl max-w-2xl">
//           Our advanced integrations consolidate business operations, making them
//           smoother and more efficient.
//         </p>
//       </div>

//       {/* Integrations Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {socialmedias.map((socialmedia, index) => (
//           <div key={index} className="flex items-start space-x-4 p-4">
//             <div className="space-y-4">
//               <div className="flex space-x-2">
//                 <img src={socialmedia.Image} alt="devIcon" className="w-10 h-10" />
//                 <h1 className="text-yellow-300 text-xl md:text-2xl">
//                   {socialmedia.title}
//                 </h1>
//               </div>
//               <p className="text-white text-sm md:text-base mt-1">
//                 {socialmedia.desc}
//               </p>
//               <button className="group text-blue-500 rounded-lg flex items-center transition-all duration-300 cursor-pointer">
//                 Know More
//                 <BsArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Blogs;

import { BsArrowRight } from "react-icons/bs";
import product from "../../assets/images/blogs/Product-Ideas-For-Online-Selling.jpg";
import otp from "../../assets/images/blogs/WhatsApp-OTP.jpg";
import Grocery from "../../assets/images/blogs/Top-10-Grocery-Apps-in-India.jpg";

const socialmedias = [
  {
    Image: product,
    title: "eCommerce",
    desc: "7 Best Product Ideas For Online Selling in 2025",
  },
  {
    Image: otp,
    title: "Shiprocket Engage 360",
    desc: "WhatsApp OTP Guide: How to Send OTP on WhatsApp Easily",
  },
  {
    Image: Grocery,
    title: "Hyperlocal Delivery",
    desc: "Your Guide To Top Grocery Delivery Apps: Bringing The Market To",
  },
];

function Blogs() {
  return (
    <div className="bg-white opacity-90 py-12 px-4 space-y-8">
      <h1 className="text-4xl md:text-5xl md:font-bold text-zinc-950 leading-tight">
        Discover Our Blogs
      </h1>
      {/* Blog Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {socialmedias.map((socialmedia, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            {/* Blog Image */}
            <img
              src={socialmedia.Image}
              alt={socialmedia.title}
              className="w-full h-48 object-cover"
            />

            {/* Blog Details */}
            <div className="p-5 space-y-3">
              <h2 className="text-zinc-950 w-fit p-1 rounded-sm bg-zinc-300 text-[12px] md:text-basic uppercase">
                {socialmedia.title}
              </h2>
              <p className="text-zinc-900 text-sm md:text-base">
                {socialmedia.desc}
              </p>

              {/* "Know More" Button */}
              <button className="group text-blue-500 flex items-center transition-all duration-300 cursor-pointer">
                Know More
                <BsArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
