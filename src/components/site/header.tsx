import Image from "next/image";
import Link from "next/link";

import { DevfolioButton } from "@/components/ui/devfolio-button";

export function Header() {
  return (
    <header className="w-full px-4 py-6 md:px-8 lg:px-16">
      <div className="mx-auto flex w-full items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logos/logo.png"
            alt="HackPrix"
            width={120}
            height={120}
            className="w-48"
            priority
          />
        </Link>

        <div className="hidden md:block">
          <DevfolioButton 
            slug="hackprix-2026" 
            theme="light" 
            width="200px" 
            height="44px" 
          />
        </div>
      </div>
    </header>
  );
}
