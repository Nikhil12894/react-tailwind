import React, { useState } from "react";

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  PaginationState,
  useReactTable,
} from "@tanstack/react-table";

import { DataTableToolbar } from "@/components/ui/data-table-client/data-table-toolbar";
import { Loader } from "@/components/ui/loader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { usePersonQuery } from "@/service/queries";
import { DataTablePagination } from "./data-table-pagination";
import { Person } from "./fetchData";

export function useSorting(initialField = "id", initialOrder = "ASC") {
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
interface Table1Props<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
}
export function Table1({ columns }: Table1Props<Person, any>) {
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { sorting, onSortingChange, field, order } = useSorting("age", "DESC");
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const dataQuery = usePersonQuery(
    pagination,
    { id: field, desc: order === "DESC" },
    rowSelection,
    columnFilters
  );

  const defaultData = React.useMemo(() => [], []);
  const table = useReactTable({
    data: dataQuery.data?.rows ?? defaultData,
    columns,
    rowCount: dataQuery.data?.rowCount,
    state: {
      pagination,
      sorting,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getRowId: (row) => row.id,
    manualPagination: true,
    debugTable: true,
    onSortingChange: onSortingChange,
    enableMultiSort: false,
    manualSorting: true,
    manualFiltering: true,
  });

  return (
    <div className="space-y-4">
      <div className="h-2" />
      <DataTableToolbar
        table={table}
        filterData={{
          filterColl: "firstName",
          filterPlaceHolder: "Search by firstName",
          filterCollDropdownOptions: [
            {
              label: "FirstName",
              value: "firstName",
              options: [{ label: "Cheyenne", value: "Cheyenne" }],
            },
          ],
        }}
      />
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
          {dataQuery.isFetching ? (
            <TableBody>
              <TableRow>
                <TableCell
                  colSpan={columns.length}
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
                    colSpan={columns.length}
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
      <div className="grid justify-items-stretch ">
        <DataTablePagination table={table} />
      </div>
    </div>
  );
}
