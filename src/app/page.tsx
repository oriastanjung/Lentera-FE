import Hero from "@/components/organism/Hero";
import MostGo from "@/components/organism/MostGo";
import Sponsorships from "@/components/organism/Sponsorship";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Sponsorships />
      <MostGo />
    </main>
  );
}
