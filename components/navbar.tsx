
import { ModeToggle } from "./ui/mode-toggle"


import { MegaMenu } from "./mega-menu";

import React from 'react';

const Navbar = () => {
  
  return (
  <nav className="shadow-sm sticky container navbar mx-auto p-8 flex items-center justify-between">
    <div className="navbar-logo">
      Logo
    </div>
    <div className="navbar-menu">
        <MegaMenu />
    </div>
    <div className="navbar-switcher">
      <ModeToggle />
    </div>
  </nav>
  )
};

export default Navbar;