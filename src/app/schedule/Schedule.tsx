import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../../components/ui/data-table-client/data-table";
import { scheduleData } from "../schedule";
import { EditDialogForm } from "./edit-dilog";
import { Schedule } from "../../types/schedule-type";
import {
  columnList,
  hiddenColumns,
  sampleSchedule,
  filterByCron,
} from "./schedule-data";
import { ColumnDefFun } from "@/components/ui/data-table-client/data-table-column-def";
import { useCallback, useMemo, useState } from "react";
import DeleteDialog from "@/components/ui/delete-dialog";

const ScheduleComp = () => {
  const [data, setData] = useState(scheduleData);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const [selectedRow, setSelectedRow] = useState<Schedule | null>(null);
  const onEdit = useCallback(
    (data: Schedule) => {
      setSelectedRow(data);
      setIsEditDialogOpen(true);
    },
    [selectedRow]
  );

  const onAdd = () => {
    setSelectedRow({ schedule_id: "", cron_schedule: "", id: 0 });
    setIsEditDialogOpen(true);
  };
  const onDelete = useCallback(
    (data: Schedule) => {
      setSelectedRow(data);
      setIsDeleteDialogOpen(true);
    },
    [selectedRow]
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

  const handleSubmit = (schedule: Schedule) => {
    if (schedule.id === 0 || schedule.id === undefined) {
      setData((prev) => [
        ...prev,
        {
          ...schedule,
          id: prev.length + 1,
          created_by: 1,
          last_updated_by: 1,
          creation_date: "6/17/2023 09:57:55",
          last_update_date: "6/17/2023 09:57:55",
        },
      ]);
    } else {
      const newData = data.map((row: any) =>
        row.id === schedule.id ? schedule : row
      );
      setData(newData);
    }
  };

  const handleDelete = () => {
    const newData = data.filter((row: Schedule) => row.id !== selectedRow?.id);
    setData(newData);
  };

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
        openAddDialog={onAdd}
      />
      <EditDialogForm
        isEditDialogOpen={isEditDialogOpen}
        onOpenDialogFunc={(value) => {
          setIsEditDialogOpen(value);
          if (!value) {
            setSelectedRow(null);
          }
        }}
        submit={handleSubmit}
        selectedRow={selectedRow}
      />
      <DeleteDialog
        deleteFun={handleDelete}
        isDeleteDialogOpen={isDeleteDialogOpen}
        onOpenDialogFunc={(value) => {
          setIsDeleteDialogOpen(value);
          if (!value) {
            setSelectedRow(null);
          }
        }}
        selectedRow={selectedRow}
        displayColumn="schedule_id"
        heading="Delete Schedule"
      />
    </div>
  );
};

export default ScheduleComp;
