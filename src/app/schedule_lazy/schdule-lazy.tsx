import { ColumnDef } from "@tanstack/react-table";
import { Table1 } from "./data-table-lazy";
import { Person } from "./fetchData";
import React from "react";
import { ColumnDefFun } from "@/components/ui/data-table-client/data-table-column-def";
import { personTableColumns } from "./table-config-data";

const ScheduleLazy = () => {
  const columns: ColumnDef<Person>[] = React.useMemo(
    () =>
      ColumnDefFun<Person>({
        columnList: personTableColumns,
      }),
    []
  );
  return (
    <div className="p-4">
      <Table1 columns={columns} />
    </div>
  );
};

export default ScheduleLazy;
