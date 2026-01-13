import { Metadata } from "next";
import { PartnersList } from "./components/partners-list";

export const metadata: Metadata = {
  title: "Partners | HackPrix S3",
  description: "Meet our amazing partners who support HackPrix Season 3.",
};

interface Partner {
  name: string;
  logo: string;
  tier: "Gold" | "Silver" | "Bronze" | "Partner";
}

const partnersData: Partner[] = [
  {
    name: "Devfolio",
    logo: "/partners/devfolio.svg",
    tier: "Gold",
  },
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-outfit text-5xl md:text-7xl font-bold uppercase tracking-wider text-foreground mb-6">
            Partners
          </h1>
          <p className="font-inter text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto">
            Fueling innovation through collaboration. Meet the organizations helping us build a better future.
          </p>
        </div>

        <PartnersList partners={partnersData} />
      </div>
    </main>
  );
}
