import Image from "next/image";
import React, { FC } from "react";
import Marquee from "react-fast-marquee";
interface SponsorshipsProps {}

const Sponsorships: FC<SponsorshipsProps> = ({}) => {
  return (
    <section className="container mx-auto px-4 mt-28">
      <Marquee loop={0} autoFill className="flex gap-14 items-center justify-center">
        <div className="w-full px-10">
          <Image
            className="w-full h-full"
            width={500}
            height={500}
            src={"/sponsor-1.png"}
            alt="sponsor"
          />
        </div>
        <div className="w-full px-10">
          <Image
            className="w-full h-full"
            width={500}
            height={500}
            src={"/sponsor-2.png"}
            alt="sponsor"
          />
        </div>
        <div className="w-full px-10">
          <Image
            className="w-full h-full"
            width={500}
            height={500}
            src={"/sponsor-3.png"}
            alt="sponsor"
          />
        </div>
        <div className="w-full px-10">
          <Image
            className="w-full h-full"
            width={500}
            height={500}
            src={"/sponsor-4.png"}
            alt="sponsor"
          />
        </div>
        <div className="w-full px-10">
          <Image
            className="w-full h-full"
            width={500}
            height={500}
            src={"/sponsor-5.png"}
            alt="sponsor"
          />
        </div>
      </Marquee>
    </section>
  );
};

export default Sponsorships;
