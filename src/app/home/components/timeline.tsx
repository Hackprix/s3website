"use client";

import React from 'react';
import Image from 'next/image';

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  image: string;
}

interface TimelineProps {
  startDate: string;
  endDate: string;
  events: TimelineEvent[];
}

export function Timeline({ startDate, endDate, events }: TimelineProps) {
  return (
    <div className="relative w-full max-w-5xl mx-auto px-16">
      {/* Dates positioned at timeline level */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0">
        <h3 className="text-5xl text-primary font-outfit font-black">
          {startDate}
        </h3>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-0">
        <h3 className="text-5xl font-black text-primary font-outfit">
          {endDate}
        </h3>
      </div>

      {/* Timeline Line Container with padding for dates */}
      <div className="relative mx-24">
        {/* The Line */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-primary -translate-y-1/2" />
        
        {/* Beads/Events Container */}
        <div className="relative h-10 flex items-center">
          {events.map((event, index) => {
            // Calculate position with 10% padding from each edge
            let position;
            if (events.length === 1) {
              position = '50%';
            } else {
              // Map from 0-100% to 10-90% range
              const normalizedPosition = (index / (events.length - 1)) * 100;
              position = `${10 + (normalizedPosition * 0.8)}%`;
            }
            
            return (
              <div 
                key={event.id}
                className="absolute top-1/2 group"
                style={{ left: position, transform: 'translate(-50%, -50%)' }}
              >
                {/* Bead - Badge/Shield shape (triangle + rounded rectangle) */}
                <div className="relative cursor-pointer transition-all duration-500 group-hover:scale-y-125 z-10">
                  {/* Triangle on top */}
                  <div className="w-0 h-0 mx-auto border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[10px] border-b-primary"></div>
                  {/* Rounded rectangle below with flat top */}
                  <div className="w-6 h-4 bg-primary rounded-b-lg -mt-[1px]"></div>
                </div>
                
                {/* Hover Content - Card with image in middle */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none group-hover:pointer-events-auto">
                  <div className="bg-transparent rounded-3xl overflow-hidden border border-black">
                    {/* Date on top */}
                    <div className="p-2 text-center">
                      <p className="text-sm font-outfit text-black">
                        {event.date}
                      </p>
                    </div>
                    
                    {/* Image in middle */}
                    {event.image && (
                      <div className="relative w-full h-24">
                        <Image 
                          src={event.image} 
                          alt={event.title} 
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    
                    {/* Subtitle at bottom */}
                    <div className="p-1 bg-primary rounded-b-3xl">
                      <p className="text-base font-outfit text-white text-center">
                        {event.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  {/* Triangle Indicator */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}