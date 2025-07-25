import { Trainee } from "~/type/trainee";
import { mongoDB } from "~/database/mongodb.server";

export const getTrainees = async (): Promise<Trainee[]> => {
  return mongoDB("trainees").find().toArray();
};