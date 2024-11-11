"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoHomeOutline } from "react-icons/io5";
import { MdTravelExplore } from "react-icons/md";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoMdPower } from "react-icons/io";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Sidebar() {
  const path = usePathname(); // Get the current path

  // Menu items array
  const Menu = [
    {
      id: 1,
      name: "Home",
      icon: <IoHomeOutline />,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Explore",
      icon: <MdTravelExplore />,
      path: "/dashboard/explore",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: <IoShieldCheckmarkOutline />,
      path: "/dashboard/upgrade",
    },
    {
      id: 4,
      name: "Logout",
      icon: <IoMdPower />,
      path: "/",
    },
  ];

  // State to handle progress bar
  const [progress, setProgress] = useState(50); // Initial progress at 50%

  return (
    <div className="fixed h-full md:w-64 p-5 shadow-md bg-white">
      <div className="flex items-center space-x-2">
        <Image src="/logo.svg" width="30" height="30" alt="Logo" />
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-600 to-purple-600 font-bold text-lg">
          AI-Courser
        </h1>
      </div>
      <hr className="my-4" />

      {/* Sidebar Menu */}
      <ul>
        {Menu.map((item) => (
          <li key={item.id}>
            <Link href={item.path}>
              <div
                className={`flex items-center gap-2 text-gray-600 p-3 cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg mb-3 ${
                  item.path === path ? "bg-gray-100 text-black" : ""
                }`}
              >
                <div className="text-2xl">{item.icon}</div>
                <h2>{item.name}</h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* Progress Bar at the bottom */}
      <div className="absolute bottom-4 w-full left-0 p-5">
        {/* Text below the progress bar */}
        <div className="text-sm mb-2">3 out of 5 courses created</div>
        <div className="relative h-2 w-full bg-gray-300 rounded-full overflow-hidden">
          {/* Purple Progress Indicator */}
          <div
            className="h-full bg-purple-500 transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        {/* Additional information below the progress bar */}
        <div className="text-xs text-gray-500 mt-2">
          Upgrade your plan for unlimited course generation
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
