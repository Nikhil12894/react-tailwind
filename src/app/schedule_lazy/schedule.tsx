import { ColumnDefFun } from "@/components/ui/data-table-client/data-table-column-def";
import { useScheduleQuery } from "@/service/queries";
import { Schedule } from "@/types/schedule-type";
import {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
} from "@tanstack/react-table";
import React from "react";
import {
  TableLazy,
  useLazyTable,
  useSorting,
} from "@/components/ui/data-table-lazy/data-table-lazy";
import { personTableColumns } from "./table-config-data";

const ScheduleLazy = () => {
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const { sorting, onSortingChange, field, order } = useSorting(
    "schedule_id",
    "DESC"
  );
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const dataQuery = useScheduleQuery(
    pagination,
    { id: field, desc: order === "DESC" },
    rowSelection,
    columnFilters
  );
  const columns: ColumnDef<Schedule>[] = React.useMemo(
    () =>
      ColumnDefFun<Schedule>({
        columnList: personTableColumns,
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
    onSortingChange,
    onPaginationChange: setPagination,
    setRowSelection,
    setColumnFilters,
    idKey: "id",
  });
  return (
    <div className="p-4 w-full text-sm">
      <TableLazy
        key="schedule_table"
        table={table}
        isFetching={dataQuery.isFetching}
        // filterData={FilterData}
      />
    </div>
  );
};

export default ScheduleLazy;
