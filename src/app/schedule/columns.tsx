"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Schedule } from "../schedule-type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export const columns: ColumnDef<Schedule>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
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
  },
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "schedule_id",
    header: "ScheduleID",
  },
  {
    accessorKey: "cron_schedule",
    header: "CronExpression",
  },
  {
    accessorKey: "created_by",
    header: "CreatedBy",
  },
  {
    accessorKey: "last_updated_by",
    header: "LastUpdatedBy",
  },
  {
    accessorKey: "creation_date",
    header: "CreationDate",
    cell: ({ getValue }) => {
      return new Date(getValue<Date | string>()).toLocaleString();
    },
  },
  {
    accessorKey: "last_update_date",
    header: "LastUpdateDate",
    cell: ({ getValue }) => {
      return new Date(getValue<Date | string>()).toLocaleString();
    },
  },
  {
    id: "actions",
    header: "Actions",
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
  },
];
