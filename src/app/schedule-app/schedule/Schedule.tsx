import { ColumnDefFun } from "@/components/ui/data-table-client/data-table-column-def";
import DeleteDialog from "@/components/ui/delete-dialog";
import { RowAction, defaultRowAction } from "@/types/row-action";
import { ColumnDef } from "@tanstack/react-table";
import { useCallback, useMemo, useState } from "react";
import { DataTable } from "@/components/ui/data-table-client/data-table";
import { Schedule } from "@/types/schedule-type";
import { hiddenColumns } from "../default-app-config";
import { EditDialogForm } from "./edit-dilog";
import { scheduleData } from "./schedule";
import { columnList, filterByCron, sampleSchedule } from "./schedule-data";
import { ScrollArea } from "@/components/ui/scroll-area";

const ScheduleComp: React.FC = () => {
  const [data, setData] = useState(scheduleData);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [rowSelection, setRowSelection] = useState({});
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
    console.log(rowSelection);
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
      }),
    []
  );

  const rowActions: RowAction<Schedule>[] = defaultRowAction(onEdit, onDelete);

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
    <div className="container mx-auto py-8 bg-muted/40 mt-4">
      <ScrollArea className="h-[65vh] rounded-md border p-4">
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
          rowActions={rowActions}
          iaRowSelectionEnabled={true}
          rowSelection={rowSelection}
          onRowSelectionChange={setRowSelection}
        />
      </ScrollArea>
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
