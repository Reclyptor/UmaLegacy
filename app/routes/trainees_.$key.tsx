import { LoaderFunction, LoaderFunctionArgs } from "@remix-run/node";
import { Nullable } from "~/type/common";
import { Trainee } from "~/type/trainee";
import { useLoaderData } from "@remix-run/react";
import { getTraineeByKey } from "~/service/trainee.server";

type LoaderData = {
  trainee: Nullable<Trainee>;
};

export const loader: LoaderFunction = async ({ params }: LoaderFunctionArgs): Promise<LoaderData> => {
  const trainee = await getTraineeByKey(params.key);
  return { trainee };
};

const Trainees = () => {
  const { trainee } = useLoaderData<LoaderData>();
  return (
    <div>
      { JSON.stringify(trainee) }
    </div>
  )
};

export default Trainees;