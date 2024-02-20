import React, { FC } from "react";
import PlaceCard from "../atom/PlaceCard";
import { PlacesData } from "@/constant/places";

interface MostGoProps {}

const MostGo: FC<MostGoProps> = ({}) => {
  return (
    <section className="container mx-auto px-4 mt-24 mb-24">
      <div className="w-full flex justify-center items-center flex-col">
        <h2 className="text-black font-semibold text-4xl">Most People Go</h2>
        <p className="font-light text-lg text-slate-500 text-center mt-4 leading-loose">
          From nature to heart and becomes <br /> all what we need to have
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-16">
        {PlacesData.map((item, idx) => (
          <PlaceCard
            img={item.img}
            location={item.location}
            name={item.name}
            price={item.price}
            stars={item.stars}
            key={idx}
          />
        ))}
      </div>
    </section>
  );
};

export default MostGo;
