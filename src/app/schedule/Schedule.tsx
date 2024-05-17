import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../../components/ui/data-table-client/data-table";
import { scheduleData } from "../schedule";
import { EditableDeletableTable } from "./edit-dilog";
import { Schedule } from "../schedule-type";
import {
  ColumnConfig,
  ColumnDefFun,
} from "@/components/ui/data-table-client/data-table-column-def";
import { useCallback } from "react";

const hiddenColumns = {
  created_by: false,
  creation_date: false,
  last_updated_by: false,
  last_update_date: false,
  id: false,
};
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

const ScheduleComp = () => {
  const data = scheduleData;

  const onEdit = useCallback(
    (data: Schedule) => alert(JSON.stringify(data)),
    []
  );

  const onDelete = useCallback(
    (data: Schedule) => alert(JSON.stringify(data)),
    []
  );
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
  const columns: ColumnDef<Schedule>[] = ColumnDefFun<typeof sampleSchedule>({
    columnList,
    editFun: onEdit,
    deleteFun: onDelete,
  });

  return (
    <div>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">
          CRUD Table with Sorting and Filtering
        </h1>
        <DataTable
          columns={columns}
          data={data}
          hiddenColumns={hiddenColumns}
          filterData={{
            filterColl: "schedule_id",
            filterPlaceHolder: "Search by scheduleId",
            filterCollDropdownOptions: [
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
            ],
          }}
        />

        <EditableDeletableTable tableData={data} />
      </div>
    </div>
  );
};

export default ScheduleComp;
