import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../../components/ui/data-table-client/data-table";
import { scheduleData } from "../schedule";
import { EditableDeletableTable } from "./edit-dilog";
import { Schedule } from "../schedule-type";
import {
  columnList,
  hiddenColumns,
  sampleSchedule,
  filterByCron,
} from "./schedule-data";
import { ColumnDefFun } from "@/components/ui/data-table-client/data-table-column-def";
import { useCallback, useMemo } from "react";

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

  const columns: ColumnDef<Schedule>[] = useMemo(
    () =>
      ColumnDefFun<typeof sampleSchedule>({
        columnList,
        editFun: onEdit,
        deleteFun: onDelete,
      }),
    []
  );

  return (
    <div className="container mx-auto py-8">
      <DataTable
        columns={columns}
        data={data}
        hiddenColumns={hiddenColumns}
        filterData={{
          filterColl: "schedule_id",
          filterPlaceHolder: "Search by scheduleId",
          filterCollDropdownOptions: filterByCron,
        }}
      />
      <EditableDeletableTable tableData={data} />
    </div>
  );
};

export default ScheduleComp;
