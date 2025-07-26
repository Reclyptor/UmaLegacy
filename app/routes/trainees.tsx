import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Trainee } from "~/type/trainee";
import { getTrainees } from "~/service/trainee.server";
import TraineeTable from "~/component/TraineeTable";

type LoaderData = {
  trainees: Trainee[];
};

export const loader: LoaderFunction = async (): Promise<LoaderData> => {
  const trainees = await getTrainees();
  return { trainees };
};

const Trainees = () => {
  const { trainees } = useLoaderData<LoaderData>();
  return (
    <div className="w-full overflow-x-auto">
      <TraineeTable trainees={ trainees } className="w-full" />
    </div>
  );
};

export default Trainees;