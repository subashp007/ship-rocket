import React, { useState, useEffect } from "react";
import { BlogCard } from "./BlogCard";

export const ExploreBlog = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="mx-8 max-w-full pt-14 pb-6">
        <div className="space-y-3">
          <h1 className="text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-purple-400 to-orange-400">
              Explore{" "}
            </span>
            <span className="text-[#0B0757]">our blog to learn more</span>
          </h1>
          <p className="text-xl text-gray-500 font-">
            Attracting thousands of readers every month, our blog covers
            everything {isMediumScreen ? <br /> : " "}
            there is to know about shipping and much more
          </p>
        </div>
        {/* card  */}
        <BlogCard />
      </div>
    </>
  );
};