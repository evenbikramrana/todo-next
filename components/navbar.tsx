"use client";
import { ModeToggle } from "./ui/mode-toggle";
import Image from "next/image";
import ResponsiveNavMenu from "./responsive-nav-menu";
import { LogoSvg } from "@/public/LogoSvg";

import React, { useEffect } from "react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <nav className="shadow-sm sticky container navbar mx-auto p-8 flex items-center justify-between">
      <div className="navbar-logo">
        <a href="/">
          <LogoSvg
            color={theme === "dark" ? "#fff" : "#020817"}
            height="32"
            width="32"
          />
        </a>
      </div>
      <div className="navbar-menu">
        <ResponsiveNavMenu />
      </div>
      <div className="navbar-switcher">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
