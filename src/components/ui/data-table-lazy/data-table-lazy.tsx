import { useState } from "react";

import {
  ColumnDef,
  ColumnFiltersState,
  OnChangeFn,
  PaginationState,
  RowSelectionState,
  SortingState,
  Table as TenStackTable,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Loader } from "@/components/ui/loader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function useSorting(initialField = "id", initialOrder = "ASC") {
  const [sorting, setSorting] = useState([
    { id: initialField, desc: initialOrder === "DESC" },
  ]);

  return {
    // 🔽 Table sorting state
    sorting,
    onSortingChange: setSorting,
    // 🔽 API sorting parameters
    order: !sorting.length ? initialOrder : sorting[0].desc ? "DESC" : "ASC",
    field: sorting.length ? sorting[0].id : initialField,
  };
}
interface TableLazyProps<TData> {
  table: TenStackTable<TData>;
  isFetching: boolean;
}
function TableLazy<TData>({ table, isFetching }: TableLazyProps<TData>) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        {isFetching ? (
          <TableBody>
            <TableRow>
              <TableCell
                colSpan={table.getAllColumns().length}
                className="h-24 text-center"
              >
                <Loader fillColorCss="fill-cyan-600" size={10} />
              </TableCell>
            </TableRow>
          </TableBody>
        ) : (
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={table.getAllColumns().length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        )}
      </Table>
    </div>
  );
}

interface UseTableProps<T, V> {
  data?: T[];
  rowCount?: number;
  columns: ColumnDef<T, V>[];
  pagination: PaginationState;
  sorting: SortingState;
  rowSelection: RowSelectionState;
  columnFilters: ColumnFiltersState;
  columnVisibility?: VisibilityState;
  onSortingChange: OnChangeFn<SortingState>;
  onPaginationChange: OnChangeFn<PaginationState>;
  setRowSelection: OnChangeFn<RowSelectionState>;
  setColumnFilters: OnChangeFn<ColumnFiltersState>;
  setColumnVisibility?: OnChangeFn<VisibilityState>;
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
  columnVisibility,
  onSortingChange,
  onPaginationChange,
  setRowSelection,
  setColumnFilters,
  setColumnVisibility,
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
      columnVisibility,
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
    onColumnVisibilityChange: setColumnVisibility,
  });
}

export { TableLazy, useLazyTable, useSorting };
