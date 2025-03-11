"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { LuPanelLeftClose } from "react-icons/lu";

const Header = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600">
      <nav className="flex justify-between items-center py-4 px-6 bg-opacity-30 backdrop-blur-lg shadow-lg " style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
        <div className="text-2xl font-bold text-white">
          <Link href="/">BuzzIt</Link>
        </div>
        <div className="hidden md:flex items-center space-x-4 text-white">
          <Link href="/">
            <div className="relative">
              Home
              {pathname === "/" && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 bottom-0 h-0.5 bg-white"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>
          </Link>
          <Link href="/sign-in">
            <div className="relative">
              Sign In
              {pathname === "/sign-in" && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 bottom-0 h-0.5 bg-white"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>
          </Link>
          <Link href="/sign-up">
            <div className="relative">
              Sign Up
              {pathname === "/sign-up" && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 bottom-0 h-0.5 bg-white"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>
          </Link>
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-lg text-black border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition duration-300"
          />
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleSidebar} className="text-white">
            {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed top-0 left-0 w-64 h-full bg-gradient-to-r from-blue-500 to-purple-600 p-6 shadow-lg z-50">
            <div className="flex justify-between mb-6 text-white text-2xl font-bold items-center" onClick={toggleSidebar}>
            <Link href="/">BuzzIt</Link>
            <LuPanelLeftClose size={24} style={{color: "white"}}/>
            </div>
            <div className="flex flex-col space-y-4 text-white">
              <Link href="/">
                <div className="relative" onClick={toggleSidebar}>
                  Home
                  {pathname === "/" && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 bottom-0 h-0.5 bg-white"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              </Link>
              <Link href="/sign-in">
                <div className="relative" onClick={toggleSidebar}>
                  Sign In
                  {pathname === "/sign-in" && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 bottom-0 h-0.5 bg-white"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              </Link>
              <Link href="/sign-up">
                <div className="relative" onClick={toggleSidebar}>
                  Sign Up
                  {pathname === "/sign-up" && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 bottom-0 h-0.5 bg-white"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              </Link>
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 rounded-lg text-black border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition duration-300"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
