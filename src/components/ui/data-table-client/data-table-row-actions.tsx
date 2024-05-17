"use client";

import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row } from "@tanstack/react-table";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  onEdit?: (value: TData) => void;
  onDelete?: (value: TData) => void;
}

export function DataTableRowActions<TData>({
  row,
  onEdit,
  onDelete,
}: DataTableRowActionsProps<TData>) {
  return (
    <>
      <FontAwesomeIcon
        icon={faPenToSquare}
        className="mr-2 text-blue-500 cursor-pointer"
        title="Edit"
        onClick={() => onEdit && onEdit(row.original)}
      />
      <FontAwesomeIcon
        icon={faTrashCan}
        className="text-red-300 cursor-pointer "
        title="Delete"
        onClick={() => onDelete && onDelete(row.original)}
      />
    </>
  );
}
