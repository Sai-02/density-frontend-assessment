import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import EQvsIQ from "./components/EQvsIQ/EQvsIQ";
import DoesThisSoundsFamiliar from "./components/DoesThisSoundsFamiliar/DoesThisSoundsFamiliar";

export default function Home() {
  return (
    <div className="relative px-6">
      <Navbar />
      <Hero />
      <EQvsIQ />
      <DoesThisSoundsFamiliar />
    </div>
  );
}
