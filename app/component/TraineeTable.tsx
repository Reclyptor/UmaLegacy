import Table, { Column, PropsRow } from "~/component/Table";
import { Trainee } from "~/type/trainee";
import TraineeIcon from "~/component/TraineeIcon";
import clsx from "clsx";
import tinycolor from "tinycolor2";
import {CSSProperties} from "react";
import {useNavigate} from "react-router";

export type TraineeTableProps = {
  trainees: Trainee[];
};

const TraineeTable = (props: TraineeTableProps) => {
  const navigate = useNavigate();
  const header = (label: string) => <span className="text-white text-nowrap font-bold underline">{ label }</span>;
  const text = (label: string) => <span className="text-nowrap">{ label }</span>;
  const rowProps = (trainee: Trainee): PropsRow => ({
    className: clsx(
      "border-b border-b-border cursor-pointer",
      "hover:bg-opacity-100 transition-all duration-100"
    ),
    style: {
      background: tinycolor(trainee.colors.primary).setAlpha(.1).toRgbString(),
      color: tinycolor(trainee.colors.primary).setAlpha(1).toRgbString()
    },
    onMouseEnter: (e) => {
      e.currentTarget.style.background = tinycolor(trainee.colors.primary).setAlpha(.5).toRgbString();
      e.currentTarget.style.color = "white";
    },
    onMouseLeave: (e) => {
      e.currentTarget.style.background = tinycolor(trainee.colors.primary).setAlpha(.1).toRgbString();
      e.currentTarget.style.color = tinycolor(trainee.colors.primary).setAlpha(1).toRgbString();
    },
    onClick: () => navigate(`/trainees/${ trainee.key }`),
  });
  const cols: Column<Trainee>[] = [
    {
      header: header("Icon"),
      cell: (trainee) => <TraineeIcon trainee={ trainee } />,
      cellProps: { align: "center" }
    },
    {
      header: header("Name"),
      headerProps: { align: "left" },
      cell: (trainee) => text(`[${ trainee.name }]`),
    },
    {
      header: header("Character"),
      headerProps: { align: "left" },
      cell: (trainee) => text(trainee.character),
    },
    {
      header: header("Rarity"),
      headerProps: { align: "left" },
      cell: (trainee) => text("★".repeat(trainee.rarity)),
    },
  ];

  return (
    <Table rows={ props.trainees } cols={ cols } rowProps={ rowProps } className="w-full" />
  );
};

export default TraineeTable;