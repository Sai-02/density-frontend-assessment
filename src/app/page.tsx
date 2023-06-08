import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import EQvsIQ from "./components/EQvsIQ/EQvsIQ";
import DoesThisSoundsFamiliar from "./components/DoesThisSoundsFamiliar/DoesThisSoundsFamiliar";
import MeetAheadApp from "./components/MeetAheadApp/MeetAheadApp";
import SelfImprovement from "./components/SelfImprovement/SelfImprovement";
import BestYouWithEQ from "./components/BestYouWithEQ/BestYouWithEQ";
import OthersThinkOfYou from "./components/OthersThinkOfYou/OthersThinkOfYou";
import Privacy from "./components/Privacy/Privacy";

export default function Home() {
  return (
    <div className="relative px-6">
      <Navbar />
      <Hero />
      <EQvsIQ />
      <DoesThisSoundsFamiliar />
      <MeetAheadApp />
      <SelfImprovement />
      <BestYouWithEQ />
      <OthersThinkOfYou />
      <Privacy />
    </div>
  );
}
