import { SubsData, SubsType } from "@/constant/subs";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import SubsCard from "../atom/SubsCard";

interface SubscriptionsProps {}

const Subscriptions: FC<SubscriptionsProps> = ({}) => {
  return (
    <section className=" mt-64 xl:mt-28 relative top-0">
      <div className="xl:w-2/3 rounded-se-[84px] bg-slate-100 md:px-36 md:py-28 py-10 pt-40">
        <h4 className="font-semibold text-4xl text-black leading-normal mb-4 text-center lg:text-left">
          Become a part <br /> of our community
        </h4>
        <p className="text-slate-500 text-lg font-light leading-loose text-center lg:text-left">
          Grow and live together to pursue <br /> happiness that we always
          dreaming of
        </p>
        <div className="flex gap-5 mt-10 justify-center lg:justify-start">
          <Link href={"https://google.com"} target="_blank">
            <Image
              className="w-full h-full object-center object-cover"
              width={500}
              height={400}
              alt="gplay"
              src={"/gplay.png"}
            />
          </Link>
          <Link href={"https://apple.com"} target="_blank">
            <Image
              className="w-full h-full object-center object-cover"
              width={500}
              height={400}
              alt="gplay"
              src={"/appStore.png"}
            />
          </Link>
        </div>
      </div>
      <div className="absolute -top-20 right-0 left-5 md:-top-36 lg:top-28 md:left-40 lg:left-auto lg:right-0 2xl:right-60 z-10 flex flex-row 2xl:gap-42"> 
        {SubsData.map((item: SubsType, idx: number) => (
          <SubsCard feedback={item.feedback} name={item.name} key={idx} img={item.img}/>
        ))}
      </div>
    </section>
  );
};

export default Subscriptions;
