import clsx from "clsx";
import React, { FC } from "react";

interface HeroStatsProps {
  className?: string;
  number: number;
  format: string;
  subtitle: string;
}

const HeroStats: FC<HeroStatsProps> = ({
  format,
  number,
  subtitle,
  className,
}) => {
  return (
    <div className={clsx("flex flex-col gap-1", className)}>
      <div className="font-medium text-3xl">
        <p className="text-black">
          {number} <span className="-ml-2 text-purple-500">{format}</span>
        </p>
      </div>
      <div className="font-light text-lg text-slate-500">
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default HeroStats;
