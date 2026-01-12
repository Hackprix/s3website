import { Hero } from "./components/hero";

// Event dates - adjust as needed
const targetDate = new Date("2025-08-15T10:00:00");

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero targetDate={targetDate} />
    </div>
  );
}
