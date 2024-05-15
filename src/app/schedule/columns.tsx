"use client";

import {
  ColumnConfig,
  ColumnDefFun,
} from "@/components/ui/data-table-client/data-table-column-def";
import { ColumnDef } from "@tanstack/react-table";
import { Schedule } from "../schedule-type";

// Define a type for the column configuration
const sampleSchedule: Schedule = {
  id: 1,
  schedule_id: "schedule_id",
  cron_schedule: "cron_schedule",
  created_by: 1,
  creation_date: new Date(),
  last_updated_by: 1,
  last_update_date: new Date(),
};
const columnList: ColumnConfig[] = [
  {
    accessorKey: "select",
    header: "Select",
  },
  {
    accessorKey: "id",
    header: "ID",
    enableSorting: false,
  },
  {
    accessorKey: "schedule_id",
    header: "ScheduleID",
    enableSorting: true,
  },
  {
    accessorKey: "cron_schedule",
    header: "CronSchedule",
    enableSorting: false,
    filterEnabled: true,
  },
  {
    accessorKey: "created_by",
    header: "CreatedBy",
    enableSorting: false,
  },
  {
    accessorKey: "creation_date",
    header: "CreationDate",
    enableSorting: false,
  },
  {
    accessorKey: "last_updated_by",
    header: "LastUpdatedBy",
    enableSorting: false,
  },
  {
    accessorKey: "last_update_date",
    header: "LastUpdateDate",
    enableSorting: false,
  },
  {
    accessorKey: "actions",
    header: "Actions",
  },
];
export const columns: ColumnDef<Schedule>[] =
  ColumnDefFun<typeof sampleSchedule>(columnList);

// [
//   {
//     id: "select",
//     header: ({ table }) => (
//       <Checkbox
//         checked={
//           table.getIsAllPageRowsSelected() ||
//           (table.getIsSomePageRowsSelected() && "indeterminate")
//         }
//         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//         aria-label="Select all"
//       />
//     ),
//     cell: ({ row }) => (
//       <Checkbox
//         checked={row.getIsSelected()}
//         onCheckedChange={(value) => row.toggleSelected(!!value)}
//         aria-label="Select row"
//       />
//     ),
//     enableSorting: false,
//     enableHiding: false,
//   },
//   {
//     accessorKey: "id",
//     header: "ID",
//   },
//   {
//     accessorKey: "schedule_id",
//     header: ({ column }) => (
//       <DataTableColumnHeader column={column} title="ScheduleID" />
//     ),
//   },
//   {
//     accessorKey: "cron_schedule",
//     header: ({ column }) => (
//       <DataTableColumnHeader column={column} title="CronExpression" />
//     ),
//     filterFn: (row, id, value) => {
//       return value.includes(row.getValue(id));
//     },
//   },
//   {
//     accessorKey: "created_by",
//     header: ({ column }) => (
//       <DataTableColumnHeader column={column} title="CreatedBy" />
//     ),
//   },
//   {
//     accessorKey: "last_updated_by",
//     header: ({ column }) => (
//       <DataTableColumnHeader column={column} title="LastUpdatedBy" />
//     ),
//     filterFn: (row, id, value) => {
//       return value.includes(row.getValue(id));
//     },
//   },
//   {
//     accessorKey: "creation_date",
//     header: ({ column }) => (
//       <DataTableColumnHeader column={column} title="CreationDate" />
//     ),
//     cell: ({ getValue }) => {
//       return new Date(getValue<Date | string>()).toLocaleString();
//     },
//   },
//   {
//     accessorKey: "last_update_date",
//     header: ({ column }) => (
//       <DataTableColumnHeader column={column} title="LastUpdateDate" />
//     ),
//     cell: ({ getValue }) => {
//       return new Date(getValue<Date | string>()).toLocaleString();
//     },
//   },
// {
//   id: "actions",
//   header: "Actions",
//   cell: ({ row }) => {
//     return (
//       <>
//         <FontAwesomeIcon
//           icon={faPenToSquare}
//           className="mr-2 text-blue-500 cursor-pointer"
//           title="Edit"
//         />
//         <FontAwesomeIcon
//           icon={faTrashCan}
//           className="text-red-300 cursor-pointer"
//           title="Delete"
//         />
//       </>
//     );
//   },
// },
// ];

// List of column configurations
// const columnConfigs: ColumnConfig[] = columnList;

// // Generate the column definitions using map
// const columnDefs: ColumnDef<Schedule>[] = columnConfigs.map((config) => ({
//   field: config.field,
//   headerName: config.headerName,
//   sortable: config.sortable,
//   filter: config.filter,
//   width: config.width,
//   flex: config.flex,
//   valueFormatter: config.valueFormatter,
// }));

// export default columnDefs;
