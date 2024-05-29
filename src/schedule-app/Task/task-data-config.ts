"use strict";
import { ColumnConfig } from "@/components/ui/data-table-client/data-table-column-def";

const personTableColumns: ColumnConfig[] = [
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
    accessorKey: "task_id",
    header: "TaskID",
    enableSorting: true,
  },
  {
    accessorKey: "description",
    header: "Description",
    enableSorting: false,
    filterEnabled: false,
  },
  {
    accessorKey: "is_schedular_enabled",
    header: "is_schedular_enabled",
    enableSorting: false,
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
const FilterData = {
  filterColl: "schedule_id",
  filterPlaceHolder: "Search by schedule id",
  filterCollDropdownOptions: [
    {
      label: "Cron Expression",
      value: "cron_schedule",
      options: [
        { label: "*/5 * * * * *", value: "*/5 * * * * *" },
        { label: "*/15 * * * * *", value: "*/15 * * * * *" },
        { label: "*/20 * * * * *", value: "*/20 * * * * *" },
        { label: "*/35 * * * * *", value: "*/35 * * * * *" },
        { label: "0/10 * * ? * *", value: "0/10 * * ? * *" },
      ],
    },
  ],
};

export { FilterData, personTableColumns };
