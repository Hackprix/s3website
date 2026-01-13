"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PartnerCardProps {
  name: string;
  logo: string;
  tier: string;
}

export function PartnerCard({ name, logo, tier }: PartnerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center p-8 rounded-[2rem] bg-[#f9f9f9] shadow-sm hover:shadow-md transition-shadow duration-300 w-full aspect-square max-w-[300px]"
    >
      <span className="text-[#a0a0a0] font-inter text-lg mb-8">{tier}</span>
      <div className="relative w-full h-20 flex items-center justify-center">
        <Image
          src={logo}
          alt={name}
          width={200}
          height={60}
          className="object-contain"
        />
      </div>
    </motion.div>
  );
}
