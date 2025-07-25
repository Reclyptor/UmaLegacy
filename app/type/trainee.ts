import { ObjectId } from "mongodb";

export type Trainee = {
  _id: ObjectId;
  key: string;
  icon: string;
  name: string;
  character: string;
  rarity: number;
  stats: {
    speed: number;
    stamina: number;
    power: number;
    guts: number;
    wit: number;
  };
  track: {
    turf: string;
    dirt: string;
  };
  distance: {
    sprint: string;
    mile: string;
    medium: string;
    long: string;
  };
  position: {
    front: string;
    pace: string;
    late: string;
    end: string;
  };
  colors: {
    primary: string;
    secondary: string;
  };
};
