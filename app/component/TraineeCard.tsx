import { Trainee } from "~/type/trainee";

export type TraineeCardProps = {
  trainee: Trainee;
};

const TraineeCard = (props: TraineeCardProps) => {
  return (
    <div className="bg-surface backdrop-blur-3xl border border-accent rounded-lg">
      <img alt={ props.trainee.character } src={ props.trainee.icon } />
      { props.trainee.name }
    </div>
  );
};

export default TraineeCard;