import { Trainee } from "~/type/trainee";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export type TraineeCardProps = {
  trainee: Trainee;
} & HTMLAttributes<HTMLDivElement>;

const TraineeCard = (props: TraineeCardProps) => {
  const { trainee, ...rest } = props;
  return (
    <div { ...rest } className={ twMerge(clsx("bg-surface backdrop-blur-3xl", props.className)) }>
      <img alt={ trainee.character } src={ trainee.icon } />
      { trainee.name }
    </div>
  );
};

export default TraineeCard;