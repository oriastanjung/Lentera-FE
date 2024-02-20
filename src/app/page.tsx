import Hero from "@/components/organism/Hero";
import MostGo from "@/components/organism/MostGo";
import Sponsorships from "@/components/organism/Sponsorship";
import Subscriptions from "@/components/organism/Subscription";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Sponsorships />
      <MostGo />
      <Subscriptions />
    </main>
  );
}
