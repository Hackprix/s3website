"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { PhotoStackCard } from "@/components/ui/photo-stack-card";

const navItems = [
  { href: "/about", label: "ABOUT", number: "01", available: true },
  { href: "/agenda", label: "AGENDA", number: "02", available: false },
  { href: "/humans", label: "HUMANS", number: "03", available: false },
  // { href: "/partners", label: "PARTNERS", number: "04", available: false },
];

const navColors = [
  "bg-tertiary",
  "bg-quaternary",
  "bg-fivenary",
  "bg-primary"
];

export function VerticalNav() {
  return (
    <nav className="hidden md:block h-screen sticky top-0 z-50 shrink-0">
      {/* Photo Stack Cards - Stacked layout */}
      <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center">
        {/* Season 1 */}
        <div className="absolute" style={{ transform: 'translateX(-80px)' }}>
          <PhotoStackCard
            images={[
              "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
              "https://www.hackprix.tech/_next/image?url=%2Fimages%2Fcarousel%2F11.png&w=640&q=75"
            ]}
            title="HackPrix Season 1"
            subtitle="June 8-9th, 2024"
            isActive={true}
          />
        </div>
        
        {/* Season 2 */}
        <div className="absolute rounded-xl" style={{ transform: 'translateX(75px)', boxShadow: "-20px 0 40px rgba(0,0,0,0.35)" }}>
          <PhotoStackCard
            images={[
              "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop",
              "https://www.hackprix.tech/_next/image?url=%2Fimages%2Fcarousel%2F6.png&w=640&q=75"
            ]}
            title="HackPrix Season 2"
            subtitle="June 14-15th, 2025"
            isActive={false}
          />
        </div>
      </div>
      
      <div className="flex flex-row h-full">
        {navItems.map((item, index) => {
          return (
            <div key={item.href} className="block h-full">
              {item.available ? (
                <Link href={item.href} className="block h-full">
                  <div
                    className={cn(
                      "relative flex w-32 h-full items-start justify-center py-6 transition-all duration-300 hover:w-36",
                      navColors[index]
                    )}
                  >
                    <span
                      className={cn(
                        "text-[94px] font-outfit font-black uppercase tracking-wider text-white transform rotate-180",
                        !item.available && "opacity-70 text-[94px]"
                      )}
                      style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                    >
                      {item.label}
                    </span>
                    <span
                      className={cn(
                        "absolute -bottom-1 text-outline text-[64px] font-outfit font-bold text-white -rotate-90",
                        !item.available && "opacity-70"
                      )}
                    >
                      {item.number}
                    </span>
                  </div>
                </Link>
              ) : (
                <div className="block h-full cursor-not-allowed">
                  <div
                    className={cn(
                      "relative flex w-32 h-full items-start justify-center py-6 transition-all duration-300 hover:w-36",
                      navColors[index]
                    )}
                  >
                    <span
                      className={cn(
                        "text-[94px] font-outfit font-black uppercase tracking-wider text-white transform rotate-180",
                        !item.available && "opacity-70"
                      )}
                      style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                    >
                      {item.label}
                    </span>
                    <span
                      className={cn(
                        "absolute -bottom-1 text-outline text-[64px] font-outfit font-bold text-white -rotate-90",
                        !item.available && "opacity-70"
                      )}
                    >
                      {item.number}
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}