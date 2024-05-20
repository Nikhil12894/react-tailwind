"use strict";
import { ColumnConfig } from "@/components/ui/data-table-client/data-table-column-def";
import {
  ColumnDef,
  ColumnFiltersState,
  OnChangeFn,
  PaginationState,
  RowSelectionState,
  SortingState,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

const personTableColumns: ColumnConfig[] = [
  {
    accessorKey: "select",
    header: "Select",
  },
  {
    accessorKey: "firstName",
    header: "FirstName",
    enableSorting: true,
  },
  {
    accessorKey: "lastName",
    header: "LastName",
    enableSorting: true,
  },
  {
    accessorKey: "age",
    header: "Age",
    enableSorting: true,
  },
  {
    accessorKey: "visits",
    header: "Visits",
    enableSorting: true,
  },
  {
    accessorKey: "status",
    header: "Status",
    enableSorting: true,
  },
  {
    accessorKey: "progress",
    header: "Progress",
    enableSorting: true,
  },
  {
    accessorKey: "actions",
    header: "Actions",
  },
];

interface UseTableProps<T, V> {
  data?: T[];
  rowCount?: number;
  columns: ColumnDef<T, V>[];
  pagination: PaginationState;
  sorting: SortingState;
  rowSelection: RowSelectionState;
  columnFilters: ColumnFiltersState;
  onSortingChange: OnChangeFn<SortingState>;
  onPaginationChange: OnChangeFn<PaginationState>;
  setRowSelection: OnChangeFn<RowSelectionState>;
  setColumnFilters: OnChangeFn<ColumnFiltersState>;
  idKey: string;
}
function useLazyTable<T, V>({
  data,
  rowCount,
  columns,
  pagination,
  sorting,
  rowSelection,
  columnFilters,
  onSortingChange,
  onPaginationChange,
  setRowSelection,
  setColumnFilters,
  idKey,
}: UseTableProps<T, V>) {
  return useReactTable({
    data: data || [],
    columns: columns,
    rowCount: rowCount || 0,
    state: {
      pagination,
      sorting,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    manualPagination: true,
    debugTable: true,
    enableMultiSort: false,
    manualSorting: true,
    manualFiltering: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getRowId: (row: T) => (row as any)[idKey],
    onRowSelectionChange: setRowSelection,
    onPaginationChange: onPaginationChange,
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: onSortingChange,
  });
}

export { personTableColumns, useLazyTable };
