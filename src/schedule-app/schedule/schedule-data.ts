import { ColumnConfig } from "@/components/ui/data-table-client/data-table-column-def";
import { Schedule } from "../../types/schedule-type";

export const columnList: ColumnConfig[] = [
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
];

// Define a type for the column configuration
export const sampleSchedule: Schedule = {
  id: 1,
  schedule_id: "schedule_id",
  cron_schedule: "cron_schedule",
  created_by: 1,
  creation_date: new Date(),
  last_updated_by: 1,
  last_update_date: new Date(),
};

export const filterByCron = [
  {
    label: "Cron",
    value: "cron_schedule",
    options: [
      { label: "*/5 * * * * *", value: "*/5 * * * * *" },
      { label: "*/15 * * * * *", value: "*/15 * * * * *" },
      { label: "*/20 * * * * *", value: "*/20 * * * * *" },
      { label: "*/35 * * * * *", value: "*/35 * * * * *" },
      { label: "0/10 * * ? * *", value: "0/10 * * ? * *" },
    ],
  },
];
