"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home", number: "01", available: true },
  { href: "/about", label: "About", number: "02", available: true },
  { href: "/agenda", label: "Agenda", number: "03", available: false },
  { href: "/tracks", label: "Tracks", number: "04", available: false },
  { href: "/partners", label: "Partners", number: "05", available: true },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Menu Button - only shows below md */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        className="md:hidden fixed right-4 top-4 z-50 flex items-center justify-center rounded-full bg-primary p-3 text-white shadow-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-black/50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "md:hidden fixed right-0 top-0 z-40 h-full w-80 bg-white shadow-2xl transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-full flex-col p-6 pt-20">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const ItemContent = (
                <div
                  className={cn(
                    "flex items-center justify-between rounded-lg px-4 py-3 text-lg font-outfit transition-colors",
                    isActive && item.available
                      ? "bg-primary text-white"
                      : "text-foreground hover:bg-gray-100",
                    !item.available && "opacity-50 cursor-not-allowed"
                  )}
                >
                  <span>
                    {item.label}
                    {!item.available && (
                      <span className="ml-2 text-sm">(Coming Soon)</span>
                    )}
                  </span>
                  <span className="text-sm opacity-60">{item.number}</span>
                </div>
              );

              if (item.available) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {ItemContent}
                  </Link>
                );
              }

              return (
                <div key={item.href} className="cursor-not-allowed">
                  {ItemContent}
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}