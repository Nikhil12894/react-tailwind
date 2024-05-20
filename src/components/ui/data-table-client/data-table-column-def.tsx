import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "../checkbox";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

export interface ColumnConfig {
  accessorKey: string;
  header: string;
  enableSorting?: boolean;
  filterEnabled?: boolean;
}
export interface ColumnsProps<T> {
  columnList: ColumnConfig[];
  deleteFun?: (rowData: T) => void;
  editFun?: (rowData: T) => void;
}

export function ColumnDefFun<T>({
  columnList,
  deleteFun,
  editFun,
}: ColumnsProps<T>): ColumnDef<T>[] {
  return columnList.map((item) => {
    if (item.accessorKey === "select") {
      return {
        id: item.accessorKey,
        header: ({ table }) => (
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      };
    } else if (item.accessorKey === "actions") {
      return {
        id: item.accessorKey,
        header: item.header,
        cell: ({ row }) => (
          <DataTableRowActions
            row={row}
            onDelete={deleteFun}
            onEdit={editFun}
          />
        ),
      };
    } else {
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
    }
  });
}
