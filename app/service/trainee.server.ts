import { mongoDB } from "~/database/mongodb.server";
import { Trainee } from "~/type/trainee";
import { Nullable } from "~/type/common";

export const getTrainees = async (): Promise<Trainee[]> => {
  return mongoDB<Trainee>("trainees").find().toArray();
};

export const getTraineeByKey = async (key?: Nullable<string>): Promise<Nullable<Trainee>> => {
  if (!key) return null;
  return mongoDB<Trainee>("trainees").findOne({ key });
};