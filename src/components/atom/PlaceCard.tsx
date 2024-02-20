import { PlaceType } from "@/constant/places";
import Image from "next/image";
import React, { FC } from "react";
import { IoStar } from "react-icons/io5";
interface PlaceCardProps extends PlaceType {}

const PlaceCard: FC<PlaceCardProps> = ({
  img,
  location,
  name,
  price,
  stars,
}) => {
  return (
    <div className="cursor-pointer group">
      <div className="relative top-0 rounded-[42px] overflow-hidden cursor-pointer ">
        <div className="absolute z-10 top-0 right-0 bg-purple-500 flex justify-center rounded-es-[100px] items-center w-28 gap-1">
          <IoStar className="text-2xl text-white" />
          <p className="text-white font-light text-xl">{stars}</p>
        </div>
        <Image
          width={800}
          height={600}
          className="w-full h-full object-cover object-center scale-110 group-hover:scale-100 duration-300 ease-in-out relative"
          objectFit="cover"
          src={img}
          alt={name}
        />
      </div>
      <div className="mt-5">
        <h5 className="font-medium text-xl group-hover:underline">
          {name}, {location}
        </h5>
        <p className="font-light text-lg text-slate-500 mt-2">Start From ${price}</p>
      </div>
    </div>
  );
};

export default PlaceCard;
