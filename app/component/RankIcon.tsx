import { SyntheticEvent, useState } from "react";
import { Trainee } from "~/type/trainee";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export type TraineeIconProps = {
  trainee: Trainee;
  className?: string;
};

const TraineeIcon = (props: TraineeIconProps) => {
  const [error, setError] = useState<SyntheticEvent<HTMLImageElement, Event>>();
  return error ? null : (
    <div className={ twMerge(clsx("flex items-center justify-center w-fit h-fit", props.className)) }>
      <img width={ 80 } loading="lazy" alt={ props.trainee.character } src={ `/resource/trainee/${ props.trainee.key }/${ props.trainee.key }_icon.png` } onError={ setError } className="aspect-auto" />
    </div>
  );
};

export default TraineeIcon;