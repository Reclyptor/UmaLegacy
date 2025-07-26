import { SyntheticEvent, useState } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const RANKS = ["A", "B", "C", "D", "E", "F", "G"] as const;
export type Rank = typeof RANKS[number];

export type TraineeIconProps = {
  rank: Rank | string;
  size?: number;
  className?: string;
};

const TraineeIcon = (props: TraineeIconProps) => {
  const [error, setError] = useState<SyntheticEvent<HTMLImageElement, Event>>();
  const isValidRank = RANKS.includes(props.rank as Rank);
  return error || !isValidRank ? null : (
    <div className={ twMerge(clsx("flex items-center justify-center w-fit h-fit", props.className)) }>
      <img width={ props.size } loading="lazy" alt={ props.rank } src={ `/resource/rank/Rank_${ props.rank }.png` } onError={ setError } className="aspect-auto" />
    </div>
  );
};

export default TraineeIcon;