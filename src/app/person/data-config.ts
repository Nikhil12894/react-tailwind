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
    enableSorting: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    enableSorting: false,
  },
  {
    accessorKey: "progress",
    header: "Progress",
    enableSorting: false,
  },
];

const hiddneColumenas = {
  visits: false,
  status: false,
  progress: false,
  lastName: false,
};

export { personTableColumns, hiddneColumenas };
