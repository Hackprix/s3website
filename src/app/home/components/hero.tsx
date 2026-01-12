"use client"
import { Timeline } from "./timeline";
import { NavigationArrow } from "@phosphor-icons/react";

interface HeroProps {
  targetDate: Date;
}

export function Hero({ targetDate }: HeroProps) {
  console.log("Countdown target:", targetDate);
  // Sample timeline event data
  const timelineEvents = [
    {
      id: "1",
      date: "14.06 at 10 AM",
      title: "Hacking Starts",
      subtitle: "Hacking Starts",
      image: "https://www.hackprix.tech/_next/image?url=%2Fimages%2Fcarousel%2F7.png&w=640&q=75"
    },
    {
      id: "2",
      date: "Humans networking",
      title: "Hacking Ends",
      subtitle: "Touching the grass",
      image: "https://www.hackprix.tech/_next/image?url=%2Fimages%2Fcarousel%2F1.png&w=640&q=75"
    },
    {
      id: "3",
      date: "Progress check!",
      title: "Mentoring Rounds",
      subtitle: "Mentor-led rounds",
      image: "https://i.ibb.co/mkkwMkg/DSC04600.jpg"
    },
    {
      id: "4",
      date: "15.06 at 11 PM",
      title: "Bonfire",
      subtitle: "Bonfire under the stars",
      image: "https://www.hackprix.tech/_next/image?url=%2Fimages%2Fcarousel%2F12.png&w=640&q=75"
    },
    {
      id: "5",
      date: "15.06 at 12 AM",
      title: "Workshop",
      subtitle: "Workshops",
      image: "https://www.hackprix.tech/_next/image?url=%2Fimages%2Fcarousel%2F16.png&w=640&q=75"
    },
    {
      id: "6",
      date: "15.06 at 1 AM",
      title: "Mini-games",
      subtitle: "Mini-games",
      image: "https://www.hackprix.tech/_next/image?url=%2Fimages%2Fcarousel%2F13.png&w=640&q=75"
    }
  ];

  return (
    <section className="relative h-full my-20 bg-white px-4 md:px-8">
      <div className="mx-auto w-full items-center justify-center">
        {/* Main Content - Countdown */}
        <div className="flex h-full flex-col items-center justify-center">
          {/* Location Pill */}
          <a
            href="https://maps.app.goo.gl/rb92hysFVshZMy2J6"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 flex items-center gap-2 rounded-full bg-primary px-2 py-1 font-outfit text-sm font-bold uppercase tracking-wider text-white"
          >
            <NavigationArrow size={28} className="rotate-90 rounded-full border-2 p-1 hover:bg-white hover:transform hover:text-black transition-all" />
            <span>Hyderabad, India</span>
          </a>

          <h1 className="text-center font-outfit text-4xl font-bold uppercase tracking-wide text-foreground md:text-[104px] leading-none">
            Build
          </h1>
          <h1 className="text-center font-outfit text-4xl font-bold uppercase tracking-wide text-foreground md:text-[104px] leading-none">
            For
          </h1>
          <h1 className="mb-3 text-center font-outfit text-4xl font-bold uppercase tracking-wide text-foreground md:text-[104px] leading-none">
            Better
          </h1>

          <p className="text-center font-inter text-lg font-medium text-primary md:text-base mb-8">
            A weekend of happy hacking and fun.          
          </p>

          {/* Devfolio Apply Button */}
          {/* <div className="flex justify-center">
            <DevfolioButton 
              slug="hackprix-2026" 
              theme="light" 
              width="312px" 
              height="44px" 
            />
          </div> */}
        </div>
        
        {/* Timeline Component */}
        <div className="mt-32">
          <Timeline 
            startDate="14.06"
            endDate="15.06"
            events={timelineEvents}
          />
        </div>
        <div className="flex items-start gap-4 mt-4">
          <a
            href="mailto:sponsorships@hackprix.tech"
            className="text-center text-lg font-outfit text-black md:text-base hover:underline"
          >
            Interested in sponsoring? Reach out to us!          
          </a>
        </div>
      </div>
    </section>
  );
}