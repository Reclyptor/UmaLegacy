import { LoaderFunction, LoaderFunctionArgs } from "@remix-run/node";
import { Nullable } from "~/type/common";
import { Trainee } from "~/type/trainee";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { getTraineeByKey } from "~/service/trainee.server";
import { useEffect } from "react";
import TraineeCard from "~/component/TraineeCard";

type LoaderData = {
  trainee: Nullable<Trainee>;
};

export const loader: LoaderFunction = async ({ params }: LoaderFunctionArgs): Promise<LoaderData> => {
  const trainee = await getTraineeByKey(params.key);
  return { trainee };
};

const Trainees = () => {
  const { trainee } = useLoaderData<LoaderData>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!trainee) {
      navigate("/trainees", { replace: true });
    }
  }, [navigate, trainee]);

  return !trainee ? null : (
    <TraineeCard trainee={ trainee } />
  );
};

export default Trainees;