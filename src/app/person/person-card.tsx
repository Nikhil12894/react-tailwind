import { Row, flexRender } from "@tanstack/react-table";
import { Person } from "./fetchData";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { RowAction } from "@/types/row-action";

interface PersonDataCardProps {
  row: Row<Person>;
  rowActions?: RowAction<Person>[];
}
function PersonCard({ row, rowActions }: PersonDataCardProps & {}) {
  return (
    <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
      {/* <a href="#">
        <img
          className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
          alt="Bonnie Avatar"
        />
      </a> */}
      <div className="p-5 w-[80%]">
        {row.getVisibleCells().map((cell, i) => (
          <div className="grid gap-4 grid-cols-2" key={i}>
            <div className="capitalize font-bold">
              {flexRender(`${cell.column.id}:`, {})}
            </div>
            <div>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between">
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
      </div>
    </div>
  );
}

export default PersonCard;
