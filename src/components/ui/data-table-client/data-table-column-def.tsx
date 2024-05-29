import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./data-table-column-header";

export interface ColumnConfig {
  accessorKey: string;
  header: string;
  enableSorting?: boolean;
  filterEnabled?: boolean;
}
export interface ColumnsProps {
  columnList: ColumnConfig[];
}

export function ColumnDefFun<T>({ columnList }: ColumnsProps): ColumnDef<T>[] {
  return columnList.map((item) => {
    return {
      accessorKey: item.accessorKey,
      header: item.enableSorting
        ? ({ column }) => (
            <DataTableColumnHeader column={column} title={item.header} />
          )
        : item.header,
      enableSorting: item.enableSorting,
      filterFn: item.filterEnabled
        ? (row, id, value) => value.includes(row.getValue(id))
        : undefined,
    };
  });
}
