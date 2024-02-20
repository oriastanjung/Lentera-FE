import Image from "next/image";
import React, { FC } from "react";
import HeroStats from "../atom/HeroStats";
import HeroSearch from "../atom/HeroSearch";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <section className="w-full flex mt-5 flex-col-reverse lg:flex-row justify-center items-center min-h-[60vh] 2xl:min-h-[80vh] ">
      <div className="lg:w-3/4 px-4 xl:pl-20 2xl:pl-52">
        <h1 className="font-semibold text-5xl xl:w-10/12 2xl:w-8/12 leading-normal text-center lg:text-left">
          We have thousand of your dream home
        </h1>
        <p className="text-slate-500 font-light text-lg xl:w-8/12 2xl:w-6/12 leading-loose mt-4 text-center lg:text-left">
          A light that will guide you to find what you’ve been looking for long
          long time ago
        </p>
        <div className="flex flex-row gap-10 mt-11 justify-center lg:justify-start">
          <HeroStats format="K" number={18} subtitle="apartment" />
          <HeroStats format="K" number={52} subtitle="success" />
          <HeroStats format="M" number={14} subtitle="transactions" />
        </div>
        <div className="mt-12 flex  justify-center lg:justify-start w-full">
          <HeroSearch />
        </div>
      </div>
      <div className="h-fit w-full lg:w-auto">
        <Image
          src={"/hero.png"}
          width={800}
          height={600}
          alt="Hero Banner"
          className="w-full h-[60vh] 2xl:h-[80vh] object-cover object-center"
          objectFit="cover"
        />
      </div>
    </section>
  );
};

export default Hero;
