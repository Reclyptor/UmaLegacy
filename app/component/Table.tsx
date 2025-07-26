import {HTMLAttributes, ReactNode, TdHTMLAttributes, ThHTMLAttributes} from "react";

export type PropsTable = HTMLAttributes<HTMLTableElement>;
export type PropsHeader = ThHTMLAttributes<HTMLTableCellElement>;
export type PropsRow = HTMLAttributes<HTMLTableRowElement>;
export type PropsCell = TdHTMLAttributes<HTMLTableCellElement>;

export type Row<T> = T;

export type Column<T> = {
  header: ReactNode;
  headerProps?: PropsHeader;
  cell: ReactNode | ((_: Row<T>) => ReactNode);
  cellProps?: PropsCell | ((_: Row<T>) => PropsCell);
};

export type TableProps<T> = {
  rows: Row<T>[];
  cols: Column<T>[];
  rowProps?: PropsRow | ((_: Row<T>) => PropsRow);
  headerProps?: PropsHeader;
} & PropsTable;

const Table = <T,>(props: TableProps<T>) => {
  const { rows, cols, rowProps, ...tableProps } = props;
  return (
    <table { ...tableProps }>
      <thead>{ cols.map(({ header, headerProps }, key) => <th { ...props.headerProps } { ...headerProps } key={ key }>{ header }</th>) }</thead>
      <tbody>
      {
        rows.map((row, rkey) =>
          <tr { ...(typeof rowProps === "function" ? rowProps(row) : rowProps) } key={ rkey }>
          {
            props.cols.map(({ cell, cellProps }, ckey) =>
              <td { ...(typeof cellProps === "function" ? cellProps(row) : cellProps) } key={ ckey }>{ typeof cell === 'function' ? cell(row) : cell }</td>
            )
          }
          </tr>
        )
      }
      </tbody>
    </table>
  );
};

export default Table;