interface DatesTimelineProps {
  startDate: string; // Format: "28.07" or "DD.MM"
  endDate: string; // Format: "30.07" or "DD.MM"
}

export function DatesTimeline({ startDate, endDate }: DatesTimelineProps) {
  return (
    <section className="border-t bg-white px-4 py-12 md:px-8 lg:px-16 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Start Date */}
          <div className="font-outfit text-5xl font-bold text-foreground md:text-7xl lg:text-8xl">
            {startDate}
          </div>

          {/* Timeline Line */}
          <div className="flex-1 px-8 md:px-16">
            <div className="relative flex items-center justify-center">
              <div className="h-0.5 w-full bg-primary" />
              {/* Timeline markers (optional small dots) */}
              <div className="absolute left-1/4 h-2 w-2 -translate-x-1/2 rounded-full bg-primary" />
              <div className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-primary" />
              <div className="absolute left-3/4 h-2 w-2 -translate-x-1/2 rounded-full bg-primary" />
            </div>
          </div>

          {/* End Date */}
          <div className="font-outfit text-5xl font-bold text-foreground md:text-7xl lg:text-8xl">
            {endDate}
          </div>
        </div>
      </div>
    </section>
  );
}
