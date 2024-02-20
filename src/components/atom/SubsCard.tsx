import { SubsType } from "@/constant/subs";
import Image from "next/image";
import React, { FC } from "react";

interface SubsCardProps extends SubsType {}

const SubsCard: FC<SubsCardProps> = ({ feedback, img, name }) => {
  return (
    <div className="relative top-0 pr-3 md:pr-6 xl:pr-16 2xl:pr-28">
      <div className="relative top-0 z-10 rounded-[42px] overflow-hidden w-full ">
        <div>
          <Image
            width={500}
            height={500}
            className="w-36 h-56 xl:w-56 xl:h-72 object-cover object-center"
            alt={`${name}`}
            src={img}
          />
        </div>
      </div>
      <div className="bg-white absolute -bottom-3 md:-bottom-5 xl:bottom-10 left-5 xl:left-10 px-1 xl:px-4 rounded-[21px] border border-slate-100 xl:pr-4 2xl:pr-10 py-4 z-20 mr-10">
        <p className="text-sm font-medium text-black ">{name}</p>
        <p className="text-xs font-light text-slate-500 w-[90px] line-clamp-2 overflow-hidden md:w-auto">{feedback}</p>
      </div>
    </div>
  );
};

export default SubsCard;
