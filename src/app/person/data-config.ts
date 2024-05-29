import { ColumnConfig } from "@/components/ui/data-table-client/data-table-column-def";

const personTableColumns: ColumnConfig[] = [
  // {
  //   accessorKey: "select",
  //   header: "Select",
  // },
  {
    accessorKey: "firstName",
    header: "FirstName",
    enableSorting: true,
  },
  {
    accessorKey: "lastName",
    header: "LastName",
    enableSorting: true,
  },
  {
    accessorKey: "age",
    header: "Age",
    enableSorting: true,
  },
  {
    accessorKey: "visits",
    header: "Visits",
    enableSorting: true,
  },
  {
    accessorKey: "status",
    header: "Status",
    enableSorting: true,
  },
  {
    accessorKey: "progress",
    header: "Progress",
    enableSorting: true,
  },
];

export { personTableColumns };
