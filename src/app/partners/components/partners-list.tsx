"use client";

import { PartnerCard } from "../ui/partner-card";

interface Partner {
  name: string;
  logo: string;
  tier: "Gold" | "Silver" | "Bronze" | "Partner";
  href?: string;
  alt?: string;
}

interface PartnersListProps {
  partners: Partner[];
}

export function PartnersList({ partners }: PartnersListProps) {
  // Group partners by tier
  const goldPartners = partners.filter((p) => p.tier === "Gold");
  const silverPartners = partners.filter((p) => p.tier === "Silver");
  const bronzePartners = partners.filter((p) => p.tier === "Bronze");
  const generalPartners = partners.filter((p) => p.tier === "Partner");

  const renderPartner = (partner: Partner) => (
    <PartnerCard
      key={partner.name}
      name={partner.name}
      logo={partner.logo}
      tier={partner.tier}
      href={partner.href}
      alt={partner.alt}
    />
  );

  return (
    <div className="flex flex-col gap-16 py-12">
      {goldPartners.length > 0 && (
        <div className="flex flex-wrap justify-center gap-8">
          {goldPartners.map(renderPartner)}
        </div>
      )}

      {silverPartners.length > 0 && (
        <div className="flex flex-wrap justify-center gap-8">
          {silverPartners.map(renderPartner)}
        </div>
      )}

      {bronzePartners.length > 0 && (
        <div className="flex flex-wrap justify-center gap-8">
          {bronzePartners.map(renderPartner)}
        </div>
      )}

      {generalPartners.length > 0 && (
        <div className="flex flex-wrap justify-center gap-8">
          {generalPartners.map(renderPartner)}
        </div>
      )}
    </div>
  );
}
