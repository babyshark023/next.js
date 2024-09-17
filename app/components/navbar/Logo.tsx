"use client";
import { FaMailBulk } from "react-icons/fa";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2 px-2 py-1 rounded-md text-lg md:text-xl cursor-pointer flex-1 ml-8 text-white">
      <FaMailBulk size={33} />
      <div>AselJS</div>
    </div>
  );
}

export default Logo;
