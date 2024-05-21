import { ColumnDefFun } from "@/components/ui/data-table-client/data-table-column-def";
import { useScheduleQuery } from "@/service/queries";
import { Schedule } from "@/types/schedule-type";
import {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
  VisibilityState,
} from "@tanstack/react-table";
import React, { useCallback, useState } from "react";
import {
  TableLazy,
  useLazyTable,
  useSorting,
} from "@/components/ui/data-table-lazy/data-table-lazy";
import { hiddenColumns, personTableColumns } from "./table-config-data";
import { EditDialogForm } from "./edit-dilog";
import DeleteDialog from "@/components/ui/delete-dialog";
import {
  useCreateSchedule,
  useDeleteSchedule,
  useUpdateSchedule,
} from "@/service/mutation";
import { DataTableToolbar } from "@/components/ui/data-table-client/data-table-toolbar";
import { DataTablePagination } from "@/components/ui/data-table-client/data-table-pagination";

const ScheduleLazy = () => {
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });
  const { sorting, onSortingChange, field, order } = useSorting(
    "schedule_id",
    "DESC"
  );
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({ ...hiddenColumns });
  const dataQuery = useScheduleQuery(
    pagination,
    { id: field, desc: order === "DESC" },
    rowSelection,
    columnFilters
  );

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

  const createScheduleMutation = useCreateSchedule();
  const updateScheduleMutation = useUpdateSchedule();
  const deleteScheduleMutation = useDeleteSchedule();
  const handleSubmit = (schedule: Schedule) => {
    if (schedule.id === 0 || schedule.id === undefined) {
      createScheduleMutation.mutate(schedule);
    } else {
      updateScheduleMutation.mutate(schedule);
    }
  };

  const handleDelete = () => {
    deleteScheduleMutation.mutate(selectedRow?.schedule_id ?? "");
  };

  const columns: ColumnDef<Schedule>[] = React.useMemo(
    () =>
      ColumnDefFun<Schedule>({
        columnList: personTableColumns,
        editFun: onEdit,
        deleteFun: onDelete,
      }),
    []
  );

  const table = useLazyTable<Schedule, any>({
    data: dataQuery.data?.data.scheduleDTOs ?? [],
    rowCount: dataQuery.data?.data.total ?? 0,
    columns,
    pagination,
    sorting,
    rowSelection,
    columnFilters,
    columnVisibility,
    onSortingChange,
    onPaginationChange: setPagination,
    setRowSelection,
    setColumnFilters,
    setColumnVisibility,
    idKey: "id",
  });
  return (
    <div className="w-full text-sm">
      <DataTableToolbar
        table={table}
        openAddDialog={() => console.log("Open Add Dialog")}
        isHideColumnsEnabled={true}
      />
      <TableLazy
        key="schedule_table"
        table={table}
        isFetching={dataQuery.isFetching}
      />
      <DataTablePagination table={table} />
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

export default ScheduleLazy;
