import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "../checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { DataTableColumnHeader } from "./data-table-column-header";

export interface ColumnConfig {
  accessorKey: string;
  header: string;
  enableSorting?: boolean;
  filterEnabled?: boolean;
}

export function ColumnDefFun<T>(columnList: ColumnConfig[]): ColumnDef<T>[] {
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
        cell: ({ row }) => {
          return (
            <>
              <FontAwesomeIcon
                icon={faPenToSquare}
                className="mr-2 text-blue-500 cursor-pointer"
                title="Edit"
              />
              <FontAwesomeIcon
                icon={faTrashCan}
                className="text-red-300 cursor-pointer"
                title="Delete"
              />
            </>
          );
        },
      };
    } else {
      return {
        accessorKey: item.accessorKey,
        header: item.enableSorting
          ? ({ column }) => (
              <DataTableColumnHeader column={column} title="ScheduleID" />
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
