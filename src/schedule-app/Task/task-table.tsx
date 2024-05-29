import { ColumnDefFun } from "@/components/ui/data-table-client/data-table-column-def";
import { DataTableToolbar } from "@/components/ui/data-table-client/data-table-toolbar";
import {
  TableLazy,
  useLazyTable,
  useSorting,
} from "@/components/ui/data-table-lazy/data-table-lazy";
import { DataTableLazyPagination } from "@/components/ui/data-table-lazy/data-table-lazy-pagination";
import DeleteDialog from "@/components/ui/delete-dialog";
import { useTaskQuery } from "@/service/queries";
import {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
  VisibilityState,
} from "@tanstack/react-table";
import React, { useCallback, useState } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Task } from "@/types/task-type";
import { hiddenColumns } from "../default-app-config";
import { taskTableColumns } from "./task-data-config";

export const TaskTable: React.FC = () => {
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const { sorting, onSortingChange, field, order } = useSorting(
    "task_id",
    "DESC"
  );
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({ ...hiddenColumns });
  const dataQuery = useTaskQuery(
    pagination,
    { id: field, desc: order === "DESC" },
    rowSelection,
    columnFilters
  );

  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const [selectedRow, setSelectedRow] = useState<Task | null>(null);
  const onEdit = useCallback(
    (data: Task) => {
      setSelectedRow(data);
      setIsEditDialogOpen(true);
    },
    [selectedRow]
  );

  const onAdd = () => {
    setSelectedRow({
      task_id: "",
      description: "",
      is_schedular_enabled: false,
      schedule: "",
    });
    setIsEditDialogOpen(true);
  };
  const onDelete = useCallback(
    (data: Task) => {
      setSelectedRow(data);
      setIsDeleteDialogOpen(true);
    },
    [selectedRow]
  );

  //   const createScheduleMutation = useCreateSchedule();
  //   const updateScheduleMutation = useUpdateSchedule();
  //   const deleteScheduleMutation = useDeleteSchedule();
  const handleSubmit = (schedule: Task) => {
    if (schedule.id === 0 || schedule.id === undefined) {
      //createScheduleMutation.mutate(schedule);
    } else {
      //updateScheduleMutation.mutate(schedule);
    }
  };

  const handleDelete = () => {
    // deleteScheduleMutation.mutate(selectedRow?.schedule_id ?? "");
  };

  const columns: ColumnDef<Task>[] = React.useMemo(
    () =>
      ColumnDefFun<Task>({
        columnList: taskTableColumns,
        editFun: onEdit,
        deleteFun: onDelete,
      }),
    []
  );

  const table = useLazyTable<Task, any>({
    data: dataQuery.data?.data.tasks ?? [],
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
    <div className="w-full text-sm m-4">
      <DataTableToolbar
        table={table}
        openAddDialog={onAdd}
        isHideColumnsEnabled={true}
      />
      <ScrollArea className="h-[65vh] rounded-md border p-4">
        <TableLazy
          key="schedule_table"
          table={table}
          isFetching={dataQuery.isFetching}
        />
      </ScrollArea>
      <DataTableLazyPagination table={table} />
      {/* <EditDialogForm
        isEditDialogOpen={isEditDialogOpen}
        onOpenDialogFunc={(value) => {
          setIsEditDialogOpen(value);
          if (!value) {
            setSelectedRow(null);
          }
        }}
        submit={handleSubmit}
        selectedRow={selectedRow}
      /> */}
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
