import React, { FC } from "react";

interface HeroSearchProps {}

const HeroSearch: FC<HeroSearchProps> = ({}) => {
  return (
    <div className="w-full flex flex-col items-center lg:items-start ">
      <p className="text-slate-500 text-lg font-light mb-2">Location</p>
      <form className="mb-5 flex flex-col items-center lg:items-start">
        <div className="w-96">
          <input
            type="text"
            placeholder="Sawangan Golf, Padalarang"
            className=" px-3 py-2 font-light text-black text-lg outline-none bg-slate-100 w-full"
          />
        </div>
        <div>
          <button className="mt-5 bg-orange-500 text-white px-3 py-2 shadow-2xl shadow-orange-500">
            Explore Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default HeroSearch;
