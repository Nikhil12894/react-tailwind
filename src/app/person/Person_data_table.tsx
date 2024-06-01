import { ColumnDefFun } from "@/components/ui/data-table-client/data-table-column-def";
import { DataTableToolbar } from "@/components/ui/data-table-client/data-table-toolbar";
import {
  TableLazy,
  useLazyTable,
  useSorting,
} from "@/components/ui/data-table-lazy/data-table-lazy";
import { DataTableLazyPagination } from "@/components/ui/data-table-lazy/data-table-lazy-pagination";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { usePersonQuery } from "@/service/queries";
import { RowAction, defaultRowAction } from "@/types/row-action";
import {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
  VisibilityState,
} from "@tanstack/react-table";
import React from "react";
import { hiddneColumenas, personTableColumns } from "./data-config";
import { Person } from "./fetchData";

const PersonLazy: React.FC = () => {
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const { sorting, onSortingChange, field, order } = useSorting("age", "DESC");
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({ ...hiddneColumenas });

  const dataQuery = usePersonQuery(
    pagination,
    { id: field, desc: order === "DESC" },
    rowSelection,
    columnFilters
  );
  const onEdit = (data: Person) => {
    console.log(data);
  };
  const onDelete = (data: Person) => {
    console.log(data);
  };
  const columns: ColumnDef<Person>[] = React.useMemo(
    () =>
      ColumnDefFun<Person>({
        columnList: personTableColumns,
      }),
    []
  );
  const rowActions: RowAction<Person>[] = defaultRowAction(onEdit, onDelete);

  const table = useLazyTable<Person, any>({
    data: dataQuery.data?.rows ?? [],
    rowCount: dataQuery.data?.rowCount ?? 0,
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
    <div className="p-4 w-full text-sm">
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
        openAddDialog={() => console.log("Open Add Dialog")}
        isHideColumnsEnabled={true}
      />
      <ScrollArea className="h-[60vh] rounded-md border p-4">
        <TableLazy
          key="person_table"
          table={table}
          isFetching={dataQuery.isFetching}
          rowActions={rowActions}
          iaRowSelectionEnabled={true}
        />
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <DataTableLazyPagination table={table} />
    </div>
  );
};

export default PersonLazy;
