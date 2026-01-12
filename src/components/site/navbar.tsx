"use client";

import { VerticalNav } from "./vertical-nav";
import { MobileNav } from "./mobile-nav";

export function Navbar() {
  return (
    <>
      {/* Desktop Vertical Nav - only shows on md and above */}
      <VerticalNav />
      
      {/* Mobile Burger Nav - only shows below md */}
      <MobileNav />
    </>
  );
}