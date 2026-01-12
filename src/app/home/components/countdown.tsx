"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface CountdownProps {
  targetDate: Date;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown({ targetDate, className }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <div className={cn("flex items-center gap-6 md:gap-12", className)}>
      <div className="flex flex-col items-center">
        <div className="text-5xl font-outfit font-bold text-foreground md:text-7xl lg:text-8xl">
          {formatNumber(timeLeft.days)}
        </div>
        <div className="mt-3 text-xs font-inter font-semibold uppercase tracking-wider text-foreground/70 md:text-sm">
          Days
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-5xl font-outfit font-bold text-foreground md:text-7xl lg:text-8xl">
          {formatNumber(timeLeft.hours)}
        </div>
        <div className="mt-3 text-xs font-inter font-semibold uppercase tracking-wider text-foreground/70 md:text-sm">
          Hours
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-5xl font-outfit font-bold text-foreground md:text-7xl lg:text-8xl">
          {formatNumber(timeLeft.minutes)}
        </div>
        <div className="mt-3 text-xs font-inter font-semibold uppercase tracking-wider text-foreground/70 md:text-sm">
          Minutes
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-5xl font-outfit font-bold text-foreground md:text-7xl lg:text-8xl">
          {formatNumber(timeLeft.seconds)}
        </div>
        <div className="mt-3 text-xs font-inter font-semibold uppercase tracking-wider text-foreground/70 md:text-sm">
          Seconds
        </div>
      </div>
    </div>
  );
}