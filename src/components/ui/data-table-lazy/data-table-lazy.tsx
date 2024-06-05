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
import { RowAction } from "@/types/row-action";
import { Checkbox } from "../checkbox";
import { cn } from "@/lib/utils";

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
  rowActions?: RowAction<TData>[];
  iaRowSelectionEnabled?: boolean;
  className?: string;
}
function TableLazy<TData>({
  table,
  isFetching,
  rowActions,
  iaRowSelectionEnabled = false,
  className,
}: TableLazyProps<TData>) {
  return (
    <div className={cn(["rounded-md border", className])}>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {iaRowSelectionEnabled && (
                <TableHead colSpan={1}>
                  <Checkbox
                    checked={table.getIsAllRowsSelected()}
                    onCheckedChange={(value) =>
                      table.toggleAllRowsSelected(!!value)
                    }
                    aria-label="Select all"
                  />
                </TableHead>
              )}
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
              {rowActions && (
                <TableHead key={headerGroup.id} colSpan={1}>
                  Action
                </TableHead>
              )}
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
                <TableRow key={row.id}>
                  {iaRowSelectionEnabled && (
                    <TableCell colSpan={1}>
                      <Checkbox
                        checked={row.getIsSelected()}
                        onCheckedChange={(value) => row.toggleSelected(!!value)}
                      />
                    </TableCell>
                  )}
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                  <TableCell>
                    {rowActions &&
                      rowActions.map((action, index) => (
                        <button
                          className="text-muted-foreground hover:text-foreground"
                          key={index}
                          onClick={() => action.action(row.original)}
                        >
                          {action.icon ? (
                            <action.icon />
                          ) : action.label ? (
                            action.label
                          ) : null}
                        </button>
                      ))}
                  </TableCell>
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
