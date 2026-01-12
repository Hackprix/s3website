import Link from "next/link";

export function AboutSection() {
  return (
    <section className="bg-white px-4 py-16 md:px-8 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1.5">
          <span className="font-inter text-xs font-semibold uppercase tracking-wider text-primary">
            About HackPrix S3
          </span>
        </div>
        
        <h2 className="mb-6 font-outfit text-4xl font-bold text-foreground md:text-6xl lg:text-7xl">
          Where Builders Ship,
          <br />
          Innovators Learn,
          <br />
          And Communities Thrive
        </h2>
        
        <p className="mb-8 max-w-3xl font-inter text-lg leading-relaxed text-foreground/70 md:text-xl">
          HackPrix Season 3 is a high-energy, builder-centric offline hackathon. 
          Join us for a competitive weekend where you&apos;ll ship real products, 
          learn from the best, and grow in a supportive community.
        </p>

        <Link
          href="/about"
          className="inline-block font-inter text-sm font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
        >
          Learn More →
        </Link>
      </div>
    </section>
  );
}
