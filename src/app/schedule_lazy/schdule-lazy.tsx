import {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
} from "@tanstack/react-table";
import { TableLazy, useSorting } from "./data-table-lazy";
import { Person } from "./fetchData";
import React from "react";
import { ColumnDefFun } from "@/components/ui/data-table-client/data-table-column-def";
import { personTableColumns, useLazyTable } from "./table-config-data";
import { usePersonQuery } from "@/service/queries";

const ScheduleLazy = () => {
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
  const columns: ColumnDef<Person>[] = React.useMemo(
    () =>
      ColumnDefFun<Person>({
        columnList: personTableColumns,
      }),
    []
  );

  const table = useLazyTable<Person, any>({
    data: dataQuery.data?.rows ?? [],
    rowCount: dataQuery.data?.rowCount ?? 0,
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
    <div className="p-4">
      <TableLazy
        table={table}
        isFetching={dataQuery.isFetching}
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
    </div>
  );
};

export default ScheduleLazy;
