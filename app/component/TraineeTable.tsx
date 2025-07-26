import Table, { Column, PropsRow } from "~/component/Table";
import { Trainee } from "~/type/trainee";
import TraineeIcon from "~/component/TraineeIcon";
import { useNavigate } from "react-router";
import RankIcon from "~/component/RankIcon";
import clsx from "clsx";
import {toRGBA} from "~/util/color";

export type TraineeTableProps = {
  trainees: Trainee[];
  className?: string;
};

const TraineeTable = (props: TraineeTableProps) => {
  const navigate = useNavigate();
  const header = (label: string, className?: string) => <span className={ clsx("text-white text-nowrap font-bold underline", className) }>{ label }</span>;
  const text = (label: string, className?: string) => <span className={ clsx("text-nowrap", className) }>{ label }</span>;
  const rowProps = (trainee: Trainee): PropsRow => ({
    className: "cursor-pointer",
    style: {
      background: toRGBA(trainee.colors.primary, .1),
      color: toRGBA(trainee.colors.primary, 1),
      borderBottom: `1px solid ${ toRGBA(trainee.colors.primary, .25) }`,
    },
    onMouseEnter: (e) => {
      e.currentTarget.style.background = toRGBA(trainee.colors.primary, .5);
      e.currentTarget.style.color = "white";
    },
    onMouseLeave: (e) => {
      e.currentTarget.style.background = toRGBA(trainee.colors.primary, .1);
      e.currentTarget.style.color = toRGBA(trainee.colors.primary, 1);
    },
    onClick: () => navigate(`/trainees/${ trainee.key }`),
  });
  const cols: Column<Trainee>[] = [
    {
      header: header("Icon", "px-2"),
      cell: (trainee) => <TraineeIcon size={ 64 } trainee={ trainee } />,
      cellProps: { align: "center" }
    },
    {
      header: header("Name", "px-2"),
      headerProps: { align: "left" },
      cell: (trainee) => (
        <div className="flex flex-col w-fit px-2">
          { text(`[${ trainee.name }]`, "font-semibold") }
          { text(`${ trainee.character }`) }
        </div>
      ),
      cellProps: (trainee) => ({ style: { borderLeft: `1px solid ${ toRGBA(trainee.colors.primary, .25) }` } })
    },
    {
      header: header("Rarity", "px-2"),
      headerProps: { align: "left" },
      cell: (trainee) => text("★".repeat(trainee.rarity), "px-2"),
      cellProps: (trainee) => ({ style: { borderLeft: `1px solid ${ toRGBA(trainee.colors.primary, .25) }` } })
    },
    {
      header: header("Speed", "px-2"),
      headerProps: { align: "left" },
      cell: (trainee) => text(`${ trainee.stats.speed > 0 ? "+" : ""}${ trainee.stats.speed }%`, "px-2"),
      cellProps: (trainee) => ({ style: { borderLeft: `1px solid ${ toRGBA(trainee.colors.primary, .25) }` } })
    },
    {
      header: header("Stamina", "px-2"),
      headerProps: { align: "left" },
      cell: (trainee) => text(`${ trainee.stats.stamina > 0 ? "+" : ""}${ trainee.stats.stamina }%`, "px-2"),
    },
    {
      header: header("Power", "px-2"),
      headerProps: { align: "left" },
      cell: (trainee) => text(`${ trainee.stats.power > 0 ? "+" : ""}${ trainee.stats.power }%`, "px-2"),
    },
    {
      header: header("Guts", "px-2"),
      headerProps: { align: "left" },
      cell: (trainee) => text(`${ trainee.stats.guts > 0 ? "+" : ""}${ trainee.stats.guts }%`, "px-2"),
    },
    {
      header: header("Wit", "px-2"),
      headerProps: { align: "left" },
      cell: (trainee) => text(`${ trainee.stats.wit > 0 ? "+" : ""}${ trainee.stats.wit }%`, "px-2"),
    },
    {
      header: header("Turf", "px-2"),
      headerProps: { align: "left" },
      cell: (trainee) => <RankIcon size={ 20 } rank={ trainee.track.turf } />,
      cellProps: (trainee) => ({ align: "center", style: { borderLeft: `1px solid ${ toRGBA(trainee.colors.primary, .25) }` } })
    },
    {
      header: header("Dirt", "px-2"),
      headerProps: { align: "left" },
      cell: (trainee) => <RankIcon size={ 20 } rank={ trainee.track.dirt } />,
      cellProps: ({ align: "center" })
    },
    {
      header: header("Sprint", "px-2"),
      headerProps: { align: "left" },
      cell: (trainee) => <RankIcon size={ 20 } rank={ trainee.distance.sprint } />,
      cellProps: (trainee) => ({ align: "center", style: { borderLeft: `1px solid ${ toRGBA(trainee.colors.primary, .25) }` } })
    },
    {
      header: header("Mile", "px-2"),
      headerProps: { align: "left" },
      cell: (trainee) => <RankIcon size={ 20 } rank={ trainee.distance.mile } />,
      cellProps: ({ align: "center" })
    },
    {
      header: header("Medium", "px-2"),
      headerProps: { align: "left" },
      cell: (trainee) => <RankIcon size={ 20 } rank={ trainee.distance.medium } />,
      cellProps: ({ align: "center" })
    },
    {
      header: header("Long", "px-2"),
      headerProps: { align: "left" },
      cell: (trainee) => <RankIcon size={ 20 } rank={ trainee.distance.long } />,
      cellProps: ({ align: "center" })
    },
    {
      header: header("Front", "px-2"),
      headerProps: { align: "left" },
      cell: (trainee) => <RankIcon size={ 20 } rank={ trainee.position.front } />,
      cellProps: (trainee) => ({ align: "center", style: { borderLeft: `1px solid ${ toRGBA(trainee.colors.primary, .25) }` } })
    },
    {
      header: header("Pace", "px-2"),
      headerProps: { align: "left" },
      cell: (trainee) => <RankIcon size={ 20 } rank={ trainee.position.pace } />,
      cellProps: ({ align: "center" })
    },
    {
      header: header("Late", "px-2"),
      headerProps: { align: "left" },
      cell: (trainee) => <RankIcon size={ 20 } rank={ trainee.position.late } />,
      cellProps: ({ align: "center" })
    },
    {
      header: header("End", "px-2"),
      headerProps: { align: "left" },
      cell: (trainee) => <RankIcon size={ 20 } rank={ trainee.position.end } />,
      cellProps: ({ align: "center" })
    },
  ];

  return (
    <Table rows={ props.trainees } cols={ cols } rowProps={ rowProps } className={ props.className } />
  );
};

export default TraineeTable;