import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import EQvsIQ from "./components/EQvsIQ/EQvsIQ";

export default function Home() {
  return (
    <div className="relative px-6">
      <Navbar />
      <Hero />
      <EQvsIQ />
    </div>
  );
}
