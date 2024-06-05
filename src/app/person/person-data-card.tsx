import { Button } from "@/components/ui/button";
import { ColumnConfig } from "@/components/ui/data-table-client/data-table-column-def";
import { DataTableColumnHeader } from "@/components/ui/data-table-client/data-table-column-header";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Loader } from "@/components/ui/loader";
import { cn } from "@/lib/utils";
import { RowAction } from "@/types/row-action";
import { Table } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Person } from "./fetchData";
import PersonCard from "./person-card";

interface PersonDataCardProps {
  table: Table<Person>;
  isLoading?: boolean;
  className?: string;
  columns?: ColumnConfig[];
  rowActions?: RowAction<Person>[];
}
export function PersonDataCard({
  table,
  isLoading,
  className,
  columns,
  rowActions,
}: PersonDataCardProps) {
  return (
    <section className={cn("bg-white dark:bg-gray-900", className)}>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 gap-1 text-sm"
                  >
                    <ArrowUpDown className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only">Sort</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center">
                  {columns &&
                    columns.map(
                      (column, index) =>
                        column.enableSorting && (
                          <DataTableColumnHeader
                            column={table.getAllColumns()[index]}
                            key={index}
                            title={column.header}
                          />
                        )
                    )}
                </DropdownMenuContent>
              </DropdownMenu>
              {table.getRowModel().rows.map((row) => (
                <PersonCard key={row.id} row={row} rowActions={rowActions} />
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
