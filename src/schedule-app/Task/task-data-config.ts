"use strict";
import { ColumnConfig } from "@/components/ui/data-table-client/data-table-column-def";

const taskTableColumns: ColumnConfig[] = [
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
];
const FilterData = {
  filterColl: "task_id",
  filterPlaceHolder: "Search by task id",
};

export { FilterData, taskTableColumns };
