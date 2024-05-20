"use client";

import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "./data-table-view-options";

// import { priorities, statuses } from "../data/data";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import DataAddRow from "./data-table-add-row";
export interface FilterData {
  filterColl?: string;
  filterPlaceHolder?: string;
  filterCollDropdownOptions?: {
    label: string;
    value: string;
    options: {
      label: string;
      value: string;
      icon?: React.ComponentType<{ className?: string }>;
    }[];
  }[];
}
interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  filterData?: FilterData;
  openAddDialog?: (open: boolean) => void;
}

export function DataTableToolbar<TData>({
  table,
  filterData,
  openAddDialog,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {filterData?.filterColl && (
          <Input
            placeholder={filterData.filterPlaceHolder}
            value={
              (table
                .getColumn(filterData?.filterColl)
                ?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table
                .getColumn(filterData.filterColl ?? "")
                ?.setFilterValue(event.target.value)
            }
            className="h-8 w-[150px] lg:w-[250px]"
          />
        )}

        {filterData?.filterCollDropdownOptions &&
          filterData.filterCollDropdownOptions.map(
            (option) =>
              table.getColumn(option.value) && (
                <DataTableFacetedFilter
                  column={table.getColumn(option.value)}
                  title={option.label}
                  options={option.options}
                  key={option.label}
                />
              )
          )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <FontAwesomeIcon icon={faX} className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
      {openAddDialog && <DataAddRow onOpenDialogFunc={openAddDialog} />}
    </div>
  );
}
