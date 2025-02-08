import React, { useRef } from "react";
import rushVid from "../../assets/images/products/rush.webm";
import rushLogo from "../../assets/images/products/Rush-Plus-scaled.webp";
import { motion, useInView } from "framer-motion";

function FastDelivery() {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, margin: "-100px" });
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16">
      {/* Left Content */}
      <div className="md:w-1/2">
        <img className="mb-4" src={rushLogo} alt="fast tracking logo" />
        <motion.h1
          ref={textRef}
          className="text-2xl text-blue-950 md:text-5xl font-bold max-w-3xl mb-8 space-y-4"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            ref={textRef}
            className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent font-medium"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Fast delivery{" "}
          </motion.span>
          <span> badges that accelerate sales</span>
        </motion.h1>
        <p className="text-zinc-400 text-lg">
          Showing prime-like shipping tags to your website visitors convinces
          them to make a purchase right away.
        </p>
      </div>

      {/* Right Video Section */}
      <div className="flex w-1/2 h-screen justify-center mt-8 md:mt-0">
        <video
          src={rushVid}
          className="w-full h-full object-cover mix-blend-multiply"
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
}

export default FastDelivery;

// import React from "react";
// import rushVid from "../../assets/images/products/rush.webm";
// import rushLogo from "../../assets/images/products/Rush-Plus-scaled.webp";
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// function FastDelivery() {
//   const textRef = useRef(null);
//   const isInView = useInView(textRef, { once: true, margin: "-100px" });

//   return (
//     <div className="flex bg-blue-100 flex-col md:flex-row items-center justify-between px-6 md:px-16 min-h-screen">
//       {/* Left Content */}
//       <div className="md:w-1/2">
//         <img className="w-36 h-16" src={rushLogo} alt="fast tracking logo" />

//         {/* Motion h1 (Animated Text) */}
//         <motion.h1
//           ref={textRef}
//           className="text-2xl text-blue-950 md:text-5xl font-bold max-w-3xl mb-8 space-y-4"
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent font-medium">
//             Fast delivery{" "}
//           </span>
//           badges that accelerate sales
//         </motion.h1>

//         <p className="text-zinc-400 text-lg">
//           Showing prime-like shipping tags to your website visitors convinces
//           them to make a purchase right away.
//         </p>
//       </div>

//       {/* Right Video Section */}
//       <div className="flex w-1/2 h-screen justify-center mt-8 md:mt-0">
//         <video
//           src={rushVid}
//           className="w-full h-full object-cover mix-blend-multiply"
//           autoPlay
//           loop
//           muted
//         />
//       </div>
//     </div>
//   );
// }

// export default FastDelivery;
