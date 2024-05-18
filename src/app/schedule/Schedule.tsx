import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../../components/ui/data-table-client/data-table";
import { scheduleData } from "../schedule";
import { EditDialogForm } from "./edit-dilog";
import { Schedule } from "../schedule-type";
import {
  columnList,
  hiddenColumns,
  sampleSchedule,
  filterByCron,
} from "./schedule-data";
import { ColumnDefFun } from "@/components/ui/data-table-client/data-table-column-def";
import { useCallback, useMemo, useState } from "react";

const ScheduleComp = () => {
  const [data, seteData] = useState(scheduleData);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<Schedule | null>(null);
  const onEdit = useCallback(
    (data: Schedule) => {
      setSelectedRow(data);
      setIsEditDialogOpen(true);
    },
    [selectedRow]
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
      <EditDialogForm
        isEditDialogOpen={isEditDialogOpen}
        onOpenDialogFunc={(value) => {
          setIsEditDialogOpen(value);
          if (!value) {
            setSelectedRow(null);
          }
        }}
        selectedRow={selectedRow}
      />
    </div>
  );
};

export default ScheduleComp;
